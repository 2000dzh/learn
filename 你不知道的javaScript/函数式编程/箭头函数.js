// 1.箭头函数没有自己的this对象,指向上层作用域中的this
// 2.不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误
// 3.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
// 4.不可以使用yield命令，因此箭头函数不能用作 Generator 函数

// Babel 转箭头函数产生的 ES5 代码，就能清楚地说明this的指向
// ES6
function foo () {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

// ES5
function foo () {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}