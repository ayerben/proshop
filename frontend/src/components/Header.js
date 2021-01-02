import React, { useState } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <Container>
      <LinkContainer to='/'>
        <NavbarBrand >Proshop</NavbarBrand>
      </LinkContainer>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <LinkContainer to='/cart'>
              <NavLink><i className="fas fa-shopping-cart"></i>Cart</NavLink>
            </LinkContainer>
            <LinkContainer to='/login'>
              <NavLink><i className="fas fa-user"></i>Sign In</NavLink>
            </LinkContainer>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
