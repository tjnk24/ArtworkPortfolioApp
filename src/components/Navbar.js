import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
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
    );
};

export default Navbar;