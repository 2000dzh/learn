function emit (event, ...args) {
  const vm = this

  let cbs = vm._events[event]

  if (cbs) {
    for (let i = 0; i < cbs.length; i++) {
      cbs[i] && cbs[i].apply(vm, args)
    }
  }

  return vm
}

export default emit