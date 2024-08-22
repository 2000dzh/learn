// 获取剩余时间
function time (startTime, endTime) {
  const restSec = endTime - startTime
  // 剩余天数
  const day = parseInt(restSec / (60 * 60 * 24 * 1000))

  // 剩余小时
  const hour = parseInt((restSec / (60 * 60 * 1000)) % 24)

  // 剩余分钟
  const minu = parseInt((restSec / (60 * 1000)) % 60)

  // 剩余秒数
  const sec = parseInt((restSec / 1000) % 60)

  const back = day + '天' + hour + '小时' + minu + '分钟' + sec + '秒'
  return back
}

console.log(time(Date.now(), Date.now() + 1000 * 60 * 60 * 24 + 1000 * 1))