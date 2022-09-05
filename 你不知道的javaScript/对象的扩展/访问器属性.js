// 一、定义 getter 与 setter

// 1.通过对象字面量的形式创建
const obj = {
  a: 1,
  get fn () {
    return this.a += 1
  },
  set fn (value) {
    return this.a *= value
  }
}

obj.fn // a = 2
obj.fn // a = 3
obj.fn = 4 // a = 12

// 2.使用 Object.create() 方法(创建一个以第一个参数为原型的对象)
// 第一个参数,新创建对象的原型对象
// 第二个参数,一个匿名的参数对象,该参数对象是一组属性与值,
// 属性名是新创建的对象的属性名称,值是属性描述符(数据描述符,存取描述符)

