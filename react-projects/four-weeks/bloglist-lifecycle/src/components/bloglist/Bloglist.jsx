import React, { useState, useEffect } from 'react';

import { getBlogs } from '../../sevices/blogService';

import './Bloglist.css';

export const BlogList = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => { 
        getBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    })

    if (blogs.length === 0) return <div>Loading...</div>;

    return (
        <div className = 'blogList'>
        {blogs.map((post, index) => (                 
            <div className = 'blogItem' key = {index}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}    
        </div>
    );
};