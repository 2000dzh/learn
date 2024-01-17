export default {
  data() {
    return {
      obj: {
        msg: '你好'
      }
    }
  }
}

// 1.先执行  observe({obj:  { msg: '你好'}})
// 2.执行 Observer({obj:  { msg: '你好'}})
// 此时 Observer 实例属性上定义 dep
// 3.执行 defineReactive({obj:  { msg: '你好'}},obj)
// 此时 childOb = {msg: '你好'}
// 4.执行 observe({msg: '你好'})
// 5.执行 Observer({msg: '你好'})
// 此时又创建了 Observer 实例,又创建了 dep
// 6.执行 defineReactive({msg: '你好'},msg)