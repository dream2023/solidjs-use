import { toValue, isIOS, noop } from '@solidjs-use/shared'
import { useEventListener } from '../useEventListener'
import { defaultWindow } from '../_configurable'
import type { Fn, MaybeElementAccessor } from '@solidjs-use/shared'
import type { ConfigurableWindow } from '../_configurable'

export interface OnClickOutsideOptions extends ConfigurableWindow {
  /**
   * List of elements that should not trigger the event.
   */
  ignore?: Array<MaybeElementAccessor | string>
  /**
   * Use capturing phase for internal event listener.
   * @default true
   */
  capture?: boolean
  /**
   * Run handler function if focus moves to an iframe.
   * @default false
   */
  detectIframe?: boolean
}

export type OnClickOutsideHandler<
  T extends { detectIframe: OnClickOutsideOptions['detectIframe'] } = { detectIframe: false }
> = (evt: T['detectIframe'] extends true ? PointerEvent | FocusEvent : PointerEvent) => void

let _iOSWorkaround = false

/**
 * Listen for clicks outside of an element.
 *
 * @see https://solidjs-use.github.io/solidjs-use/core/onClickOutside
 */
export function onClickOutside<T extends OnClickOutsideOptions>(
  target: MaybeElementAccessor,
  handler: OnClickOutsideHandler<{ detectIframe: T['detectIframe'] }>,
  options: T = {} as T
) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options

  if (!window) return

  // Fixes: https://github.com/vueuse/vueuse/issues/1520
  // How it works: https://stackoverflow.com/a/39712411
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true
    Array.from(window.document.body.children).forEach(el => el.addEventListener('click', noop))
  }

  let shouldListen = true

  const shouldIgnore = (event: PointerEvent) => {
    return ignore.some(target => {
      if (typeof target === 'string') {
        return Array.from(window.document.querySelectorAll(target)).some(
          el => el === event.target || event.composedPath().includes(el)
        )
      }
      const el = toValue(target)
      return el && (event.target === el || event.composedPath().includes(el))
    })
  }

  const listener = (event: PointerEvent) => {
    const el = toValue(target)

    if (!el || el === event.target || event.composedPath().includes(el)) return

    if (event.detail === 0) shouldListen = !shouldIgnore(event)

    if (!shouldListen) {
      shouldListen = true
      return
    }

    handler(event)
  }

  const cleanup = [
    useEventListener(window, 'click', listener, { passive: true, capture }),
    useEventListener(
      window,
      'pointerdown',
      e => {
        const el = toValue(target)
        if (el) shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e)
      },
      { passive: true }
    ),
    detectIframe &&
      useEventListener(window, 'blur', event => {
        setTimeout(() => {
          const el = toValue(target)
          if (window.document.activeElement?.tagName === 'IFRAME' && !el?.contains(window.document.activeElement))
            handler(event as any)
        }, 0)
      })
  ].filter(Boolean) as Fn[]

  const stop = () => cleanup.forEach(fn => fn())

  return stop
}
