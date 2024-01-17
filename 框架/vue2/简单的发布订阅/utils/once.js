function once (event, fn) {
  const vm = this

  function on (...args) {
    vm.$off(event, on)
    fn.apply(vm, args)
  }

  on.fn = fn

  vm.$on(event, on)

  return vm

}

export default once