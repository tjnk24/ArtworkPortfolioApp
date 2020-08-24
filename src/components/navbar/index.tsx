import React, { FC } from 'react';
import {
  Logo,
  NavImg,
  NavbarWrap,
  NavbarInner,
  NavLinkActive,
  GradientBefore,
} from './style';

import {
  HomeIcon,
  AboutIcon,
  ContactsIcon,
} from './img/icons';
import { LinksTypes } from './types';

const Navbar: FC = () => {
  const navProps = [
    {
      to: '/',
      component: HomeIcon,
      // alt: 'home',
      exact: true,
    },
    {
      to: '/about',
      component: AboutIcon,
      // alt: 'about',
      exact: false,
    },
    {
      to: '/contacts',
      component: ContactsIcon,
      // alt: 'contacts',
      exact: false,
    },
  ];

  const renderLinks = (links: LinksTypes[]) => links.map((link: LinksTypes) => (
    <li key={link.to}>
      <NavLink
        activeClassName={classes.NavLinkActive}
        exact={link.exact}
        to={link.to}
      >
        {/* <NavImg
          src={require(`./img/${link.svgName}`)}
          alt={link.alt}
        /> */}

        { link.component }
      </NavLink>
    </li>
  ));

  return (
    <NavbarWrap>
      <NavbarInner>
        <Logo
          exact
          to="/"
        >
          <img
            src={require('./img/logo.png')}
            alt="logo"
          />
        </Logo>
        <ul>
          {renderLinks(navProps)}
        </ul>
      </NavbarInner>
      <GradientBefore />
    </NavbarWrap>
  );
};

export default Navbar;
