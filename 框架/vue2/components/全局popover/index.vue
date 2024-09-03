<template>
  <div>
    <el-popover
      ref="myPopover"
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      @mouseenter="onPopoverMouseEnter"
      v-model="popoverVisible"
    >
      <div class="fn-ceshi" @mouseleave="onContainerMouseLeave">内容：{{ popoverContent }}</div>
    </el-popover>

    <div class="grid">
      <el-button
        v-for="item in 1000"
        v-my-popover:myPopover="item"
        @mouseenter.native="onMouseEnter(item)"
      >
        hover 激活
      </el-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue@2.6.14'
import ElementUI from 'element-ui@2.15.13'
import { on, off } from 'element-ui@2.15.13/src/utils/dom'
Vue.use(ElementUI)

function popoverDirective() {
  /** 给绑定元素注册mouseenter事件 */
  function registMouseEnterEvent(e, binding, vnode) {
    const { arg } = binding
    const _this = vnode.context
    const popper = _this.$refs[arg]
    const reference = e.target
    _this.$nextTick(() => {
      // 修改参照属性为当前悬浮元素
      popper.referenceElm = reference
      // 同时设置实例对象中的私有参照属性
      //（不得不改私有属性，不改就没法重新计算，popperJS 目录 'element-ui/src/utils/popper.js'）
      popper.popperJS && (popper.popperJS._reference = reference)
      // 根据新的参照重新计算位置
      popper.updatePopper()
      // 触发el-popover组件内部的handleMouseEnter事件
      popper.handleMouseEnter()
    })
  }

  /** 给绑定元素注册mouseleave事件 */
  function registMouseLeaveEvent(e, binding, vnode) {
    const { arg } = binding
    const _this = vnode.context
    const popper = _this.$refs[arg]
    popper.handleMouseLeave()
  }

  return {
    bind(el, binding, vnode) {
      console.log(binding)
      // 给el添加方法，方便销毁事件
      el.__mouseenterEvent__ = (e) => {
        registMouseEnterEvent(e, binding, vnode)
      }
      el.__mouseleaveEvent__ = (e) => {
        registMouseLeaveEvent(e, binding, vnode)
      }
      on(el, 'mouseenter', el.__mouseenterEvent__)
      on(el, 'mouseleave', el.__mouseleaveEvent__)
    },
    inserted(el) {
      on(el, 'mouseenter', el.__mouseenterEvent__)
      on(el, 'mouseleave', el.__mouseleaveEvent__)
    },
    unbind(el) {
      off(el, 'mouseenter', el.__mouseenterEvent__)
      off(el, 'mouseleave', el.__mouseleaveEvent__)
    },
  }
}

export default {
  data() {
    return {
      popoverContent: '',
      popoverVisible: false,
    }
  },
  directives: {
    'my-popover': popoverDirective(),
  },
  methods: {
    onMouseEnter(item) {
      this.popoverContent = item
    },
    onPopoverMouseEnter() {
      // 鼠标进入 el-popover 时，阻止关闭行为
      this.popoverVisible = true
    },
    onContainerMouseLeave() {
      // 鼠标离开 fn-ceshi 容器时，关闭 el-popover
      this.popoverVisible = false
    },
  },
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 20px;
}
</style>
