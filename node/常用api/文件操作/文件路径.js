const path = require('node:path')

// 当前文件的目录名  D:\dzh\个人学习\learn\node\常用api\文件操作
__dirname

// 当前文件的文件名  D:\dzh\个人学习\learn\node\常用api\文件操作\文件路径.js
__filename

// 调用node命令执行脚本时的目录名
process.cwd()

const notes = '/users/joe/notes.txt';

// 获取指定路径目录
path.dirname(notes) // /users/joe

// 获取指定路径文件全称
path.basename(notes) // notes.txt

// 获取指定路径文件名称
path.basename(notes, path.extname(notes))

// 获取指定路径文件后缀
path.extname(notes) // .txt

// 相对路径转化为绝对路径
// process.cwd() + 'joe.txt'
path.resolve('joe.txt') // D:\dzh\个人学习\learn\joe.txt

// 连接路径
path.join(__dirname) // D:\dzh\个人学习\learn\node\常用api\文件操作
path.join(__dirname, '../收发邮件') // D:\dzh\个人学习\learn\node\常用api\收发邮件


