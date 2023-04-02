function throttle(func, wait = 0) {
  let timer = false
  return (...args) => {
    if (timer) {
      return
    }
    timer = true
    setTimeout(() => {
      func.apply(this, args)
      timer = false
    }, wait)
  }
}
