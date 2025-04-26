import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

export default function App() {
  return (
    <div>
      <header style={{padding:'1rem',borderBottom:'1px solid #eee',marginBottom:'2rem'}}>
        <h1 style={{margin:0}}><Link to="/" style={{textDecoration:'none',color:'#222'}}>Simple React Blog</Link></h1>
      </header>
      <main style={{maxWidth:700,margin:'0 auto'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </main>
    </div>
  );
}
