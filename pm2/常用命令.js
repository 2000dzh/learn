// 使用 pm2 执行js文件
// pm2 start ./dist/main.js

// 查看日志
// pm2 logs(查看单个进程 pm2 logs 进程名)
// 正常的日志保存在 ~/.pm2/logs/main-out.log
// 报错的日志保存在 ~/.pm2/logs/main-error.log

// 查看 main 进程的前 100 行日志：
// pm2 logs main --lines 100 


// 清空日志
// pm2 flush(清除单个进程的日志 pm2 flush 进程名/id)