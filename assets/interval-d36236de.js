import{_ as c,b as l,i as d,O as f}from"./Observable-f2594621.js";var a=function(r){c(n,r);function n(e,t){return r.call(this)||this}return n.prototype.schedule=function(e,t){return this},n}(l),v=function(r){c(n,r);function n(e,t){var i=r.call(this,e,t)||this;return i.scheduler=e,i.work=t,i.pending=!1,i}return n.prototype.schedule=function(e,t){if(t===void 0&&(t=0),this.closed)return this;this.state=e;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(s,this.id,t),this},n.prototype.requestAsyncId=function(e,t,i){return i===void 0&&(i=0),setInterval(e.flush.bind(e,this),i)},n.prototype.recycleAsyncId=function(e,t,i){if(i===void 0&&(i=0),i!==null&&this.delay===i&&this.pending===!1)return t;clearInterval(t)},n.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(e,t);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(e,t){var i=!1,s=void 0;try{this.work(e)}catch(u){i=!0,s=!!u&&u||new Error(u)}if(i)return this.unsubscribe(),s},n.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,i=t.actions,s=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,s!==-1&&i.splice(s,1),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},n}(a),h=function(){function r(n,e){e===void 0&&(e=r.now),this.SchedulerAction=n,this.now=e}return r.prototype.schedule=function(n,e,t){return e===void 0&&(e=0),new this.SchedulerAction(this,n).schedule(t,e)},r.now=function(){return Date.now()},r}(),p=function(r){c(n,r);function n(e,t){t===void 0&&(t=h.now);var i=r.call(this,e,function(){return n.delegate&&n.delegate!==i?n.delegate.now():t()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return n.prototype.schedule=function(e,t,i){return t===void 0&&(t=0),n.delegate&&n.delegate!==this?n.delegate.schedule(e,t,i):r.prototype.schedule.call(this,e,t,i)},n.prototype.flush=function(e){var t=this.actions;if(this.active){t.push(e);return}var i;this.active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=t.shift());if(this.active=!1,i){for(;e=t.shift();)e.unsubscribe();throw i}},n}(h),y=new p(v),o=y;function A(r){return!d(r)&&r-parseFloat(r)+1>=0}function w(r,n){return r===void 0&&(r=0),n===void 0&&(n=o),(!A(r)||r<0)&&(r=0),(!n||typeof n.schedule!="function")&&(n=o),new f(function(e){return e.add(n.schedule(b,r,{subscriber:e,counter:0,period:r})),e})}function b(r){var n=r.subscriber,e=r.counter,t=r.period;n.next(e),this.schedule({subscriber:n,counter:e+1,period:t},t)}export{w as i};
