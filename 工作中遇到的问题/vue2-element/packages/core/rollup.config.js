import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'

/** @type {import("rollup").RollupOptions} */
export default {
  input: {
    ElSelectV2: './index.js'
  },
  output: {
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name]/[name].js'  // 输出文件将使用入口名称
  },
  plugins: [
    postcss({  // 添加 postcss 插件
      extensions: ['.css'],
      extract: true  // 将 CSS 提取到单独的文件中
    }),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true
      }
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.vue'],
      preferBuiltins: true
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue']
    })
  ],
  external: [
    'vue',
    'element-ui'
  ]
}
