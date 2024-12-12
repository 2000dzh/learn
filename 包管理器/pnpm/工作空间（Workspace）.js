// monorepo的简单理解就是单仓库多包管理

// pnpm + monorepo

// 首先创建 pnpm-workspace.yaml 文件,然后在该文件定义子包
// touch pnpm-workspace.yaml
// pnpm 并不是通过目录名称，而是通过目录下 package.json 文件的 name 字段来识别仓库内的包与模块的

// 全局依赖(供全局使用)
// pnpm i element-plus axios  -w

// 为指定模块安装外部依赖
// 为 a 包安装 lodash
// pnpm --filter a add lodash

// 指定内部模块之间的互相依赖
//  指定 a 模块依赖于 b 模块
// pnpm --filter a add b