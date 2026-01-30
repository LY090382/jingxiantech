import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // 使用 './' 确保相对路径资源加载正确
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(process.cwd()),
    },
  },
  server: {
    port: 3000,
    open: true
  }
})