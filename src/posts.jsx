const posts = [
  {
    id: 'welcome',
    title: '欢迎来到我的博客',
    date: '2025-04-26',
    summary: '这是你的第一篇博客文章，可以在 src/posts.jsx 中编辑内容。',
    content: (
      <div>
        <p>你好，这里是用 React + Vite 创建的静态博客示例。你可以自由添加、编辑文章。</p>
        <p>部署到 GitHub Pages 后，所有人都可以访问你的博客！</p>
      </div>
    ),
  },
  {
    id: 'react-tips',
    title: 'React 小技巧',
    date: '2025-04-25',
    summary: '分享一些实用的 React 开发小技巧。',
    content: (
      <div>
        <ul>
          <li>使用函数组件和 Hooks 简化代码</li>
          <li>利用 React Router 做页面切换</li>
          <li>用 Vite 极速开发和打包</li>
        </ul>
      </div>
    ),
  },
];

export default posts;
