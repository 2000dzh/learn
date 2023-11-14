
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

// 去除指定属性
str.replace(/id=".*?"/g, "")

// 去除svgid
decodeURI('').replace(/id=".*?"/g, "")


function generativeText (arr, start) {
  let entry = ''
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.children && item.children.length) {
      const first = item.children.findIndex(item => item.isChoose)
      if (first !== -1) {
        entry += item.children.reduce((sum, obj, index) => {
          obj.isChoose && (sum += `${first === index ? '' : ','}${obj.day}`)
          return sum
        }, item.label ? `${entry === '' ? '' : '日'}第${i + 1}月` : ' ')
      }
    }
  }

  return `${start}${entry}`
}

// 优化后
function generativeText (arr, start) {
  let entry = '';
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i];
    if (item.children && item.children.length) {
      const first = item.children.findIndex(item => item.isChoose);
      if (first !== -1) {
        const children = item.children.reduce((sum, obj, index) => {
          if (obj.isChoose) {
            sum.push(`${first === index ? '' : ','}${obj.day}`);
          }
          return sum;
        }, []);
        entry += `${children.join('')}${item.label ? `${entry ? '日' : ''}第${i + 1}月` : ' '}`;
      }
    }
  }
  return `${start}${entry}`;
}


