import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './style';

const Navbar = () => {
    const navProps = [
        {
            to: '/',
            svgName: 'home-solid.svg',
            alt: 'home',
            exact: true
        },
        {
            to: '/about',
            svgName: 'address-card-solid.svg',
            alt: 'about',
            exact: false
        },
        {
            to: '/contacts',
            svgName: 'file-signature-solid.svg',
            alt: 'contacts',
            exact: false
        },
    ];

    const renderLinks = (links) => {

        return links.map((link, index) => {
           return (
               <li key={index}>
                   <NavLink
                        activeClassName={classes.NavLinkActive}
                        exact={link.exact}
                        to={link.to}
                   >
                       <img
                           className={classes.NavImg}
                           src={require('../../img/svg/' + link.svgName)}
                           alt={link.alt}
                       />
                   </NavLink>
               </li>
           )
        });
    };

    return (
        <div className={classes.NavbarWrap}>
            <div className={classes.Navbar}>
                <NavLink
                    className={classes.Logo}
                    exact={true}
                    to={'/'}
                >
                    <img
                        src={require('../../img/logo.png')}
                        alt="logo"
                    />
                </NavLink>
                <ul>
                    {renderLinks(navProps)}
                </ul>
            </div>
            <div className={classes.gradientBefore}></div>
        </div>
    );
};

export default Navbar;