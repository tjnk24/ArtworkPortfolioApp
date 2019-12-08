import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.css';

const Navbar = () => {

    const cls = classes;
    return (
        <div className={cls.Navbar}>
            <img src={require('../../img/logo.png')} alt="logo"/>
            <ul>
                <li>
                    <a href="#">Active</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Disabled</a>
                </li>
            </ul>
        </div>

    );
};

export default Navbar;