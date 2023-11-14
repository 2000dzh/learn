const PENDING = 'pending' // 等待
const FULFILLED = 'fulfilled' // 成功
const REJECTED = 'rejected' // 失败

class MyPromise {
  #PromiseState = PENDING
  #PromiseResult = PENDING

  constructor(executor) {
    this.handler = []

    const resolve = (data) => {
      this.#changeState(FULFILLED, data)
    }

    const reject = (reason) => {
      this.#changeState(REJECTED, reason)
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  #changeState(state, result) {
    if (this.#PromiseState !== PENDING) {
      return
    }
    this.#PromiseState = state
    this.#PromiseResult = result
  }

  then(onfulfilled, onrejected) {
    // 同步的情况
    if (this.#PromiseState === FULFILLED) {
      onfulfilled(this.#PromiseResult)
    }
    if (this.#PromiseState === REJECTED) {
      onrejected(this.#PromiseResult)
    }
  }

  catch() {}

  static resolve() {}

  static reject() {}

  static all() {}

  static allSettled() {}

  static race() {}
}
