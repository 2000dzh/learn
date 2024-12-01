function time48 () {
  function zeroFill (num) {
    return num < 10 ? `0${num}` : num
  }

  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`

  return Array.from({ length: 48 }, function (_, index) {
    const hour = Math.floor(index / 2);
    const minute = index % 2 === 0 ? '00' : 30; // 每半小时，分钟数为0或30
    const time = `${zeroFill(hour)}:${minute}`

    return `${date} ${time}`
  })
}