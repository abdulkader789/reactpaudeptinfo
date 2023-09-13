import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
       
<div class="blog-container pb-16">
  
  <div class="blog-header">
    <div class="blog-cover">
      <div class="blog-author">
        <h3>Russ Beye</h3>
      </div>
    </div>
  </div>

  <div class="blog-body">
    <div class="blog-title text-center mb-3">
      <h1><a href="#">I Like To Make Cool Things</a></h1>
    </div>
    <div class="blog-summary">
      <p>I love working on fresh designs that <a href="https://www.youtube.com">breathe</a>. To that end, I need to freshen up my portfolio here because it does exactly the opposite. For the next month I will be working almost exclusively on my portfolio. Sounds like a lot of fun!</p>
    </div>
    <div class="blog-tags">
      <ul>
        <li><a href="#">css</a></li>
        <li><a href="#">web design</a></li>
        <li><a href="#">codepen</a></li>
        <li><a href="https://twitter.con">twitter</a></li>
      </ul>
    </div>
  </div>
  </div>


    )
};

export default Blog;