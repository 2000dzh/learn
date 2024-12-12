// main
// commonjs 入口
// 如果main字段不存在，将会默认index.js为入口文件

// module
// es module 的入口

// types
// 指定类型文件入口

// files
// 哪些文件发布到 npm 仓库

// browser
// https://article.juejin.cn/post/7225072417532739644
// https://segmentfault.com/a/1190000019438150

// exports(Node v12.7.0 版本实现)
// 当 exports 和另外三个入口字段(main,module,types)出现重复定义时，会有更高的优先级。
// 举例
// 入口定义
// {
//   "name": "my-module",
//   "main": "index.js",
//   "module": "index-esm.js"
//   "exports": {
//     ".": {
//       "require": "index.js",
//       "import": "index-esm.js"
//     },
//     "./locale/*": {
//       "require": "./lib/locale/*",
//       "import": "./es/locale/"
//     },
//     "./plugins/*": {
//       "require": "./dist/lib/plugins/*",
//       "import": "./dist/es/plugins/*"
//     }
//   }
// }
// 使用
// commonjs
// const app = require('my-module') // 实际路径 node_modules/my-module/index.js
// const zhCn = require('my-module/locale/zh-Cn') // 实际路径 node_modules/my-module/lib/locale/zh-Cn.js
// const testPlugin = require('my-module/plugins/test') // 实际路径 node_modules/my-module/dist/lib/plugins/test.js
// esm 
// import app from 'my-module' // 实际路径  node_modules/my-module/index-esm.js
// import zhCn from 'my-module/locale/zh-Cn' // 实际路径  node_modules/my-module/es/locale/zh-Cn.js
// import testPlugin from 'my-module/plugins/test' // 实际路径  node_modules/my-module/dist/es/plugins/test.js



// package 的 dependencies参考
// https://juejin.cn/post/7137228673156907044#heading-12
// https://juejin.cn/post/7308923428149297187

// dependencies
// 定义包运行所需要的依赖包
// 当前项目的 dependencies 会被安装
// 当前项目依赖的 dependencies  会被安装
// 示例 某前端项目使用 vue 进行开发，需要将 vue 添加到 dependencies 中

// devDependencies
// 定义包在开发时所需要的依赖包
// 当前项目的 devDependencies 会被安装
// 当前项目依赖的 devDependencies  不会被安装
// 示例 element-plus 使用了 vitest 进行测试，需要将 vitest 添加到 devDependencies 中

// peerDependencies
// 定义该包运行所需要的依赖环境，一般和 devDependencies 一起使用
// 当前项目的 peerDependencies 不会被安装
// 当前项目依赖的 peerDependencies  不会被安装。但是如果指向的依赖没有被安装或不符合时会有警告（peerDependenciesMeta 会影响该行为）
// 示例 element-plus 是一个 vue3 组件库，为了不和使用它的项目中的 vue3 版本定义造成冲突，需要将支持的 vue3 版本添加到 peerDependencies 中
// "peerDependencies": { "vue": "^3.2.0" } 表示你的包需要与Vue 3.2.x版本兼容,至少是3.2.0版本
// {
//   "peerDependencies": {
//       "vue": "^3.2.0"
//   },
//   "devDependencies": {
//       "vue": "^3.2.37",
//   }
// }
