import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 用于 GitHub Pages 部署，设置 base 路径（可根据仓库名修改）
export default defineConfig({
  plugins: [react()],
  base: '/travis-blog/',
});
