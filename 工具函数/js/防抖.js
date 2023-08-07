function miniDebounce(func, wait, options) {
  let leading = false
  let trailing = true
  let timeoutId
  let lastThis

  if (options !== null) {
    leading = Object.hasOwn(options, 'leading') ? !!options.leading : leading
    trailing = Object.hasOwn(options, 'trailing') ? !!options.trailing : trailing
  }

  function debounce(...args) {
    lastThis = this
    if (leading && !timeoutId) {
      const context = lastThis
      lastThis = undefined
      func.apply(context, args)
    }

    clearTimeout(timeoutId)
    let timeoutId = setTimeout(() => {
      if (trailing && lastThis) {
        func.apply(lastThis, args)
      }

      clearTimeout(timeoutId)
      timeoutId = undefined
    }, wait)
  }

  arr1.forEach(item => {
    if(item.name && item.age) {
      //
    }
  })

  return debounce
}
