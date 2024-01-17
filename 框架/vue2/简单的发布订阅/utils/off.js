function off (...args) {
  const vm = this
  const [event, fn] = args

  // 没有传递任何参数
  if (!args.length) {
    vm._events = Object.create(null)
    return vm
  }

  if (Array.isArray(event)) {
    for (let i = 0; i < event.length; i++) {
      vm.$off(event[i], fn)
    }
    return vm
  }

  // 传递了未监听的 event
  const cbs = this._events[event]
  if (!cbs) {
    return vm
  }

  // 没有传递 fn
  if (!fn) {
    vm._events[event] = null
    return vm
  }

  // event 和 fn 都传递了
  let i = cbs.length
  let cb
  while (i--) {
    cb = cbs[i]
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1)
      break
    }
  }

  return vm
}

export default off