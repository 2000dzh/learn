// Promise.all 静态方法
// 传入一个 promise 数组一个 reject 会中断返回 reject 不在往下执行
// 返回顺序就是传入顺序

// Promise.allSettled 静态方法
// 传入一个 promise 数组,所有 promise 都会有结果无论什么状态
// 返回顺序就是传入顺序

// race: 竞技/竞赛
// Promise.race 静态方法
// 只要有一个 promise 变成 fulfilled 状态,那么就结束。

// Promise.any 静态方法

Promise.any()
