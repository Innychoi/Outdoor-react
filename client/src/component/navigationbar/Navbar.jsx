import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
} from './Navbar.styles';
import Cart from './cart/Cart';

export default function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          OUTDOOR REACT
        </NavLogo>
      </NavbarContainer>
      <Cart />
    </Nav>
  );
}
