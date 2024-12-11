/**
 * @description: 48点(30分钟一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 00:00 YYYY-MM-DD 00:30 YYYY-MM-DD 01:00 ........
 */
function time48 (timeStamp) {
  const _timeStamp = timeStamp || Date.now();

  function zeroFill (num) {
    return num < 10 ? `0${num}` : num
  }

  const year = new Date(_timeStamp).getFullYear()
  const month = new Date(_timeStamp).getMonth() + 1
  const day = new Date(_timeStamp).getDate()
  const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`

  return Array.from({ length: 48 }, function (_, index) {
    const hour = Math.floor(index / 2);
    const minute = (index % 2) * 30
    const time = `${zeroFill(hour)}:${zeroFill(minute)}`

    return `${date} ${time}`
  })
}