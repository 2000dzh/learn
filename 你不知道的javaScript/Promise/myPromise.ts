enum State {
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}

class MyPormise {
  #result = undefined
  #state: State = State.Pending
  #handler: any[] = []
  #observer: any = null
  constructor(executor: (res: any) => void) {
    const resolve = (data) => {
      this.#changeState(State.Fulfilled, data)
    }
    const reject = (reason) => {
      this.#changeState(State.Rejected, reason)
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  #changeState(state: State, result: any) {
    if (this.#state !== State.Pending) {
      return
    }
    this.#state = state
    this.#result = result
    this.#run()
  }

  #isPromiseLike(value) {
    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
      return typeof value.then === 'function'
    }
    return false
  }

  #runMicroTask(func) {
    if (process !== undefined && typeof process.nextTick === 'function') {
      return process.nextTick(func)
    } else if (typeof MutationObserver === 'function') {
      if (this.#observer === null) {
        let counter = 1
        this.#observer = new MutationObserver(function () {
          this.#observer.disconnect()
          this.#observer = null
          func()
        })
        const textNode = document.createTextNode(String(counter))
        this.#observer.observe(textNode, { characterData: true })
        counter += 1
        textNode.data = String(counter)
      } else {
        this.#observer.disconnect()
      }
      this.#observer.observe(document.createTextNode(''), { characterData: true })
    } else {
      setTimeout(func, 0)
    }
  }

  #run() {
    if (this.#state === State.Pending) {
      return
    }

    while (this.#handler.length) {
      const { onFulfilled, onRejected, resolve, reject } = this.#handler.shift()

      if (this.#state === State.Fulfilled) {
        this.#runOne(onFulfilled, resolve, reject)
      } else if (this.#state === State.Rejected) {
        this.#runOne(onRejected, resolve, reject)
      }
    }
  }

  #runOne(callback, resolve, reject) {
    this.#runMicroTask(() => {
      if (typeof callback !== 'function') {
        const settled = this.#state === State.Fulfilled ? resolve : reject
        settled(this.#result)
        return
      }
      try {
        const data = callback(this.#result)
        const flag = this.#isPromiseLike(data)
        if (flag) {
          data.then(resolve, reject)
        } else {
          resolve(data)
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  then(onFulfilled, onRejected?) {
    return new MyPormise((resolve, reject) => {
      this.#handler.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      })
      this.#run()
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    return this.then(
      (data) => {
        onFinally(data)
        return data
      },
      (err) => {
        onFinally(err)
        throw err
      }
    )
  }

  static resolve(value) {
    if (value instanceof MyPormise) {
      return value
    }
    let _resolve, _reject
    const p = new MyPormise((resolve, reject) => {
      _resolve = resolve
      _reject = reject
    })
    if (p.#isPromiseLike(value)) {
      value.then(_resolve, _reject)
    } else {
      _resolve(value)
    }

    return p
  }

  static reject(reason) {
    return new MyPormise((resolve, reject) => {
      reject(reason)
    })
  }
}

const p = new MyPormise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
})
p.then((res) => {
  console.log(res)
})
