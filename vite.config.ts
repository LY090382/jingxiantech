import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 改为绝对路径 '/'，解决 Client-side Routing 下图片 404 问题
  base: '/',
  resolve: {
    alias: {
      '@': process.cwd(),
    },
  },
  server: {
    port: 3000,
    open: true
  }
})