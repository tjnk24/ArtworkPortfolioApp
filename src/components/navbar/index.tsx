import React, { FC } from 'react';
import {
  Logo,
  NavbarWrap,
  NavbarInner,
  NavLinkWrap,
  GradientBefore,
} from './style';

import {
  HomeIcon,
  AboutIcon,
  LogoImage,
  ContactsIcon,
} from './images';
import { LinksTypes } from './types';

const Navbar: FC = () => {
  const navProps = [
    {
      to: '/',
      component: HomeIcon,
      exact: true,
    },
    {
      to: '/about',
      component: AboutIcon,
      exact: false,
    },
    {
      to: '/contacts',
      component: ContactsIcon,
      exact: false,
    },
  ];

  const renderLinks = (links: LinksTypes[]) => links.map((link: LinksTypes) => (
    <li key={link.to}>
      <NavLinkWrap
        exact={link.exact}
        to={link.to}
      >
        { link.component }
      </NavLinkWrap>
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
            src={LogoImage}
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
