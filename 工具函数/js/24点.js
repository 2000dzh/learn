/**
 * @description: 24点(30分钟一个点)
 * @param {Number} timeStamp 时间戳
 * @returns {Array} YYYY-MM-DD 01:00 YYYY-MM-DD 02:00 YYYY-MM-DD 03:00 ........
 */
function time24 (timeStamp) {
  const _timeStamp = timeStamp || Date.now();

  function zeroFill (num) {
    return num < 10 ? `0${num}` : num
  }

  const year = new Date(_timeStamp).getFullYear();
  const month = new Date(_timeStamp).getMonth() + 1;
  const day = new Date(_timeStamp).getDate();
  const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`;

  return Array.from({ length: 24 }, function (_, index) {
    const hour = zeroFill(index);
    const time = `${hour}:00`;

    return `${date} ${time}`;
  });
}
