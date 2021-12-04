import React from 'react';

import './header.css';

const Header = (props) => (
    <nav className = 'header'>
        <div> {/*className = 'container-fluid' */}
            {/* <span className = 'navbar-brand mb-0 h1 text-center'>My React Blog</span> */}
            <span>{props.poruka}</span>
        </div>
    </nav>
);

export { Header };