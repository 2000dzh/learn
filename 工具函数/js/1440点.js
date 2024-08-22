function time1440 () {
  function zeroFill (num) {
    return num < 10 ? `0${num}` : num
  }

  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`

  return Array.from({ length: 1440 }, function (_, index) {
    const hour = Math.floor(index / 60);
    const minute = index % 60;
    const time = (zeroFill(hour)) + ':' + (zeroFill(minute))

    return `${date} ${time}`
  })
}