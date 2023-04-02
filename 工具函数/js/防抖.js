import { debounce } from 'loadsh'

const App = document.getElementById('app')

function antiShaking(func, wait = 0) {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

function fn(a, b) {
  console.log(a + b)
}

const aa = antiShaking(fn, 1000)
// aa(1,2)
// aa(1,2)
// aa(1,2)
// aa(1,2)

const b1 = debounce(fn, 1000)

App.addEventListener('click', () => aa(1, 2))
// App.addEventListener('click', antiShaking(fn(1,2), 1000))
