function on (event, fn) {
  const vm = this

  if (Array.isArray(event)) {
    for (let i = 0; i < event.length; i++) {
      vm.$on(event[i], fn)
    }
  } else {
    (this._events[event] || (this._events[event] = [])).push(fn)
  }

  return vm
}


export default on