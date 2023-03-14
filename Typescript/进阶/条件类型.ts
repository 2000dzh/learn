type IDType = number | string

type ResType = boolean extends IDType ? true : false

// 于函数重载搭配使用
function add<T extends number | string>(num1: T, num2: T): T extends number ? number : string 
function add(num1,num2) {
  return num1 + num2
}
add(21, 21)
add('2121', '2121')
// add(212111, '2121')

// function sum1(num1: number,num2: string): string {
//   return num2
// }

export  {}
