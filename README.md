# Simple React Blog

这是一个用 React + Vite 构建的静态博客网站，适合部署到 GitHub Pages。

## 本地运行

```bash
npm install
npm run dev
```

浏览器访问 http://localhost:5173

## 构建静态文件

```bash
npm run build
```

构建后静态文件在 `dist/` 目录。

## 部署到 GitHub Pages

1. 修改 `vite.config.js` 里的 `base` 为你的仓库名，如 `/your-repo-name/`
2. 推送到 GitHub，并运行：

```bash
npm run deploy
```

即可自动发布到 GitHub Pages。

---

你可以在 `src/posts.js` 添加和编辑文章。
