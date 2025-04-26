import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../posts.jsx';

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  if (!post) return <div>未找到该文章。</div>;
  return (
    <article style={{padding:'1rem',border:'1px solid #eee',borderRadius:8}}>
      <h2>{post.title}</h2>
      <p style={{color:'#888',fontSize:'0.9rem'}}>{post.date}</p>
      <div style={{margin:'1.5rem 0'}}>{post.content}</div>
      <Link to="/">← 返回首页</Link>
    </article>
  );
}
