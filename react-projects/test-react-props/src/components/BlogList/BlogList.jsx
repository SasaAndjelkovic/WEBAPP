import React from 'react';

import { Blog } from '../Blog/Blog.jsx';
import { blogPosts } from '../../data/blog-posts.js';

import './BlogList.css';

export const BlogList = () => (
    <div className = 'blogList'>
    {blogPosts.map((post, index) => (                 
        // <Blog title = {post.title} text = {post.body} key = {index}/>
        <Blog title = {post.title} text = {post.body} key = {index}>
            <p>Novi tekst</p>
        </Blog>
    ))}    
    </div>
);