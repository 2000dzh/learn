// beforeCreated,created之间
// props   加载顺序: 1
// method  加载顺序: 2
// data 加载顺序: 3
// computed 加载顺序: 4
// watch 加载顺序: 5

// vue 可找到组件最外层元素,通过 __vue__ 属性访问组件对象信息

// initMethods 初始化 methods 流程
function initMethods (vm, methods) {
  const props = vm.$optios.props

  const bind = Function.prototype.bind ? nativeBind : polyfillBind

  function nativeBind (ctx, fn) {
    return fn.bind(ctx)
  }

  function polyfillBind (ctx, fn) {
    function boundFn (a) {
      const len = arguments.length
      len > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)
    }

    boundFn._length = fn.length
    return boundFn
  }

  for (const key in methods) {
    if ('开发环境') {
      // 不是一个函数
      if (typeof methods[key] !== 'function') {
        ; ('警告')
      }
      // methods 的方法不能和 props 的属性重名
      if (props && Object.prototype.hasOwnProperty(props, key)) {
        ; ('警告')
      }
      if ('不能和vue内部的方法名重名') {
        ; ('警告')
      }
    }
    vm[key] =
      typeof methods[key] !== 'function' ? function noop (a, b, c) { } : bind(vm, methods[key])
  }
}
