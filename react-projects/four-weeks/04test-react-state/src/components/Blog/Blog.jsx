import React from 'react';

import './Blog.css';

export const Blog = ({title, text, children}) => {         //children, zbog novog teksta iz bloglista

    return (
        <div className = 'blogItem'>
            <h3>{title}</h3>
            <p>{text}</p>
            {children}
        </div>
    )
}