import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../posts';

export default function Home() {
  return (
    <div>
      {posts.map(post => (
        <article key={post.id} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #eee', borderRadius: 8 }}>
          <h2 style={{ marginTop: 0 }}><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>{post.date}</p>
          <p>{post.summary}</p>
        </article>
      ))}
    </div>
  );
}
