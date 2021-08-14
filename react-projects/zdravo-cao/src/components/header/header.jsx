import React from 'react';

import './header.css';

const Header = (props) => (
    <nav className = 'navbar header'>
        <div className = 'container-fluid'>
            {/* <span className = 'navbar-brand mb-0 h1 text-center'>My React Blog</span> */}
            <span className = 'navbar-brand mb-0 h1 text-center'>{props.poruka}</span> 
            {props.children}
        </div>
    </nav>
);

export { Header };