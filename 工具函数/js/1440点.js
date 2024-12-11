/**
 * @description: 1440点(1分钟一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 00:01 YYYY-MM-DD 00:02 YYYY-MM-DD 00:03 ........
 */
function time1440 (timeStamp) {
  const _timeStamp = timeStamp || Date.now();

  function zeroFill (num) {
    return num < 10 ? `0${num}` : num
  }

  const year = new Date(_timeStamp).getFullYear()
  const month = new Date(_timeStamp).getMonth() + 1
  const day = new Date(_timeStamp).getDate()
  const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`

  return Array.from({ length: 1440 }, function (_, index) {
    const hour = Math.floor(index / 60);
    const minute = index % 60;
    const time = (zeroFill(hour)) + ':' + (zeroFill(minute))

    return `${date} ${time}`
  })
}