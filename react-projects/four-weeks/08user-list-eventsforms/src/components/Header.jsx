import React from 'react';
import { Link } from "react-router-dom";          //Link ka Home/About


export const Header = (props) => {
    let title = props.title;
    let showNav = props.showNav;
    let nav = <ul className="right hide-on-med-and-down">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to="/about/About">About</Link></li>
    </ul>
    if (showNav == false) {
        nav = null;
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <label className="brand-logo center">{title}</label>
                {nav}
            </div>
        </nav>
    )
}

