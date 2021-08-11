import React from 'react';

import { blogPosts } from '../../data/blog-posts.js';

import './BlogList.css';

export const BlogList = () => (
    <div className = 'blogList'>
    {blogPosts.map((post, index) => (
        <div className = 'blogItem' key = {index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))}    
    </div>
);