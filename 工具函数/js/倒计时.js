let timeTask

const diffDate = (minuend, subtrahend) => {
  return Math.max(minuend - subtrahend, 0)
}

function countDown (startTime, onChange) {
  timeTask = setInterval(() => {
    const diffTime = diffDate(startTime, Date.now())
    if (typeof onChange === 'function') {
      onChange(diffTime)
    }
  }, 1000 / 10)
}

function suspend () {
  clearInterval(timeTask)
  timeTask = null
}


/**
 * 示例
 */
// 倒计时10分钟,30s查询一次
const startTime = Date.now() + 1000 * 60 * 10
const pollingInterval = 1000 * 30
let lastTIme = 1000 * 60 * 10

const callback = (time) => {
  if (lastTIme - time >= pollingInterval) {
    lastTIme -= pollingInterval
    console.log('30s执行一次')
  }

  if (time) {
    console.log('time change')
  } else {
    console.log('查询结束')
    suspend()
  }
}

