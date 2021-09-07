import React from 'react';
import styles from './Footer.module.css';

import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar className={`${styles.footer} justify-content-center`}>
            <Navbar.Brand >
                <span className={styles.name}>&copy; 2020, by Vladan Cupric, Sasa Andjelkovic, Nikola Colovic and Dimitrije Pavkovic</span>
            </Navbar.Brand>
        </Navbar>
    )
}

export { Footer }