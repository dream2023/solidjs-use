import { tryOnCleanup } from '@solidjs-use/shared'
import { createSignal } from 'solid-js'
import { defaultWindow } from '../_configurable'
import type { Pausable } from '@solidjs-use/shared'
import type { ConfigurableWindow } from '../_configurable'

export interface UseRafFnCallbackArguments {
  /**
   * Time elapsed between this and the last frame.
   */
  delta: number

  /**
   * Time elapsed since the creation of the web page. See {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin Time origin}.
   */
  timestamp: DOMHighResTimeStamp
}

export interface UseRafFnOptions extends ConfigurableWindow {
  /**
   * Start the requestAnimationFrame loop immediately on creation
   *
   * @default true
   */
  immediate?: boolean
}

/**
 * Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
 *
 * @see https://solidjs-use.github.io/solidjs-use/core/useRafFn
 */
export function useRafFn(fn: (args: UseRafFnCallbackArguments) => void, options: UseRafFnOptions = {}): Pausable {
  const { immediate = true, window = defaultWindow } = options

  const [isActive, setIsActive] = createSignal(false)
  let previousFrameTimestamp = 0
  let rafId: null | number = null

  function loop(timestamp: DOMHighResTimeStamp) {
    if (!isActive() || !window) return

    const delta = timestamp - (previousFrameTimestamp || timestamp)
    fn({ delta, timestamp })

    previousFrameTimestamp = timestamp
    rafId = window.requestAnimationFrame(loop)
  }

  function resume() {
    if (!isActive() && window) {
      setIsActive(true)
      rafId = window.requestAnimationFrame(loop)
    }
  }

  function pause() {
    setIsActive(false)
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  if (immediate) resume()

  tryOnCleanup(pause)

  return {
    isActive,
    pause,
    resume
  }
}
