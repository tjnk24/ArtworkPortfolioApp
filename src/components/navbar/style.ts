import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const NavbarInner = styled.div`
  display: flex;
  width: auto;
  min-height: 60px;
  background: rgb(65,87,101);
  background: linear-gradient(0deg, rgb(40, 77, 95) 0%, rgba(66,89,103,1) 100%);
  border-bottom: 3px solid #292929;

  @media(max-width: 400px) {
      justify-content: center;
  }

  ul {
      display: flex;
      justify-content: space-between;
      width: 147px;
      margin: 15px auto;

      @media(max-width: 770px) {
          position: absolute;
          right: 20px;
      }

      @media(max-width: 400px) {
          position: relative;
          right: 0;
          width: 105px;
          margin: 20px 0;
          margin-left: 30px;
      }

      li img {
          width: 30px;

          @media(max-width: 400px) {
              width: 25px;
          }

          :hover {
            filter: invert(0%);
          }
      }
  }
`;

export const GradientBefore = styled.div`
  width: 100%;
  height: 50px;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 36%, rgba(255,255,255,0) 100%);
`;

export const Logo = styled(NavLink)`
  position: absolute;
  margin: 22px 0 0 30px;

  @media(max-width: 760px) {
    position: relative;
  }

  @media(max-width: 400px) {
    margin-left: 15px;
  }

  img {
    width: 110px;

    /* @media(max-width: 400px) {
        width: 150px;
    } */
  }
`;

export const NavImg = styled.img`
  filter: invert(100%);
`;

const activeClassName = 'active';

export const NavLinkWrap = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    img {
      filter: invert(0%);
    }
  }
`;
