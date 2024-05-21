// 获取事件戳
new Date().getTime()
Date.now()

// 获取日期格式字符串(不传时间就是当前时间)
new Date(2024, 3, 22).toLocaleString() // '2024/5/22 00:00:00'
new Date(2024, 3, 22).toLocaleDateString()  // '2024/4/22'
new Date(2024, 3, 22).toLocaleTimeString() // '00:00:00' 

// 获取上个月最后一天
new Date(2024, 1, 0).toLocaleString() // '2024/1/31 00:00:00'
// 获取上个月倒数第二天
new Date(2024, 1, -1).toLocaleString() // '2024/1/30 00:00:00'

// 获取每个月有多少天
new Date(2024, 1, 0).getDate() // 31 (2024年1月有31天)
new Date(2024, 2, 0).getDate() // 29 (2024年2月有29天)