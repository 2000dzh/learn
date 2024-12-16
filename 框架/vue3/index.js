[...document.all].filter(e => e._vnode)
// vue3 可通过 _vnode

// vue3根节点有个属性 __vue_app__ 可以通过这个属性访问项目的配置

// vue3项目线上环境开启 devtool
const el = document.querySelector('#app')
const vm = el.__vue_app__

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.push({
  app: vm,
  version: vm.version,
  types: {
    Comment: Symbol("Comment"),
    Fragment: Symbol("Fragment"),
    Static: Symbol("Static"),
    Text: Symbol("Text"),
  },
})
if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init", vm);
  console.log("==> vue devtools now is enabled");
}
