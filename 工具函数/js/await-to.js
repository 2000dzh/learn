
/**
 * @param { Promise } promise
 * @param { Object } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function to1 (promise, errorExt) {
  return promise.then(data => [null, data])
    .catch(err => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, undefined]
      }
      return [err, undefined]
    })
}



