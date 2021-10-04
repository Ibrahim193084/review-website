import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div>
            <Navbar variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Tutors World</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-5">
      <Stack direction="horizontal" gap={5}>
      <NavLink className="navlink"
  to="/home"
  activeStyle={activeStyle}>
  Home
</NavLink>
      <NavLink className="navlink"
  to="/services"
  activeStyle={activeStyle}>
  Services
</NavLink>
      <NavLink className="navlink"
  to="/news"
  activeStyle={activeStyle}>
  News
</NavLink>
      <NavLink className="navlink"
  to="/about"
  activeStyle={activeStyle}>
  About
</NavLink>
  
</Stack>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Navigation;