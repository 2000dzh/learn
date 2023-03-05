// 1. object 类型
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

// 2. Object 类型
// Object 接口定义了 Object.prototype 原型对象上的属性；
// interface Object {
//   constructor: Function;
//   toString(): string;
//   toLocaleString(): string;
//   valueOf(): Object;
//   hasOwnProperty(v: PropertyKey): boolean;
//   isPrototypeOf(v: Object): boolean;
//   propertyIsEnumerable(v: PropertyKey): boolean;
// }
// Object 类的所有实例都继承了 Object 接口中的所有属性。


// 3.{} 类型
// {} 类型描述了一个没有成员的对象。当你试图访问这样一个对象的任意属性时，TypeScript 会产生一个编译时错误
// 但是，你仍然可以使用在 Object 类型上定义的所有属性和方法，这些属性和方法可通过 JavaScript 的原型链隐式地使用：