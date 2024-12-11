/**
 * @description: 288点(5分钟一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 00:00 YYYY-MM-DD 00:05 YYYY-MM-DD 00:10 ........
 */
function time288 (timeStamp) {
  const _timeStamp = timeStamp || Date.now();

  function zeroFill (num) {
    return num < 10 ? `0${num}` : num
  }

  const year = new Date(_timeStamp).getFullYear()
  const month = new Date(_timeStamp).getMonth() + 1
  const day = new Date(_timeStamp).getDate()
  const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`

  return Array.from({ length: 288 }, function (_, index) {
    const hour = Math.floor(index / 12)
    const minute = (index % 12) * 5
    const time = (zeroFill(hour)) + ':' + (zeroFill(minute))

    return `${date} ${time}`
  })
}