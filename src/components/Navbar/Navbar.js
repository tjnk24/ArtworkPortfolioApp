import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.css';

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <img className={classes.Logo} src={require('../../img/logo.png')} alt="logo"/>
            <ul>
                <li>
                    <NavLink exact to="/" className="nav-link">
                        <img src={require('../../img/svg/home-solid.svg')} alt="home"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link">
                        <img src={require('../../img/svg/address-card-solid.svg')} alt="home"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className="nav-link">
                        <img src={require('../../img/svg/file-signature-solid.svg')} alt="home"/>
                    </NavLink>
                </li>
            </ul>
        </div>

    );
};

export default Navbar;