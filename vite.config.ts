import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键配置：设置为相对路径，适配 GitHub Pages 等子目录部署环境
  base: './',
  server: {
    port: 3000,
    open: true
  }
})
