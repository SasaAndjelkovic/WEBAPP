import React from 'react';
import './Header.css';

import { UserService } from '../../services/userService';
import { HashRouter as Router, Link } from 'react-router-dom';

const Header = ({ setSwitch, switchState, setUsers, setIsLoading, hideButtons }) => {
    const onClick = () => setSwitch(!switchState);

    const Refresh = () => {
        let counter = 0;
        let inMinutes = 0;
        let counterNode, writeThis;
        counterNode = document.querySelector('.counterDiv');

        setInterval(function counting () {
            counter++;

            if (counter % 5 === 0) {
                console.log(counterNode);
                inMinutes++;
                writeThis = 'last update was: ' + inMinutes + 'min ago';
            } else if (counter < 5) {
                writeThis = 'last update was few second ago';
            }

            window.localStorage.setItem('write, writeThis');
        }, 1000);
        var lastUpdate = window.localStorage.getItem('write');
        counterNode.innerHTML = lastUpdate;

        setIsLoading(true);
        UserService().then((users) => {
            setUsers(users);
            setIsLoading(false);
        });
    }

    return (
        <nav>
            <h1>React Users</h1>
            <button className='title'>About</button>
            <button className='switchButton' onClick={onClick}>
                {switchState ? (
                    <span className='material-icons'>view_module</span>
                ) : (
                    <span className='material-icons'>view_list</span>
                )}
            </button>
            <button className='refreshButton' onClick={refresh}>
                <span className='material-icons'>refresh</span>
            </button>
        </nav>
    );
};

export default Header;