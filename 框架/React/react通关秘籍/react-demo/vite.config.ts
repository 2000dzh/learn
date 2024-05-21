import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

function resolve(dir: string) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // ts 还需要配置 tsconfig.json 的 compilerOptions.paths 属性
    alias: {
      '@': resolve('src'),
    },
  },
})
