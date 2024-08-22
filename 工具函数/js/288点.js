function time288 () {
  function zeroFill (num) {
    return num < 10 ? `0${num}` : num
  }

  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const date = `${year}-${zeroFill(month)}-${zeroFill(day)}`

  return Array.from({ length: 288 }, function (_, index) {
    const hour = Math.floor(index / 12)
    const minute = (index % 12) * 5
    const time = (zeroFill(hour)) + ':' + (zeroFill(minute))

    return `${date} ${time}`
  })
}