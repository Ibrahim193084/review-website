import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocationArrow, faSearchLocation, faVoicemail } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
        const activeStyle={
            fontWeight: "bold",
            color: "red"
          }
          const element = <FontAwesomeIcon icon={faLocationArrow} />
          const email = <FontAwesomeIcon icon = {faVoicemail} />

    return (
        <div className="bg-dark my-5 text-white">
             <Container>
  <Row md={4}>
    <Col className="ms-5 my-5">
        <h3>Tutors World</h3>
        </Col>
    <Col className="ms-5 my-5" xs={6}>
        <h3>Quick Links</h3>
        <Stack direction="vertical" gap={2}>
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
        </Col>
    <Col className="ms-5 my-5">
        <h3 className="mb-3">Our Contacts</h3>
        <h6><i class="fas fa-map-marker-alt"></i> 350, Chhagalnaiya, Feni</h6>
        <h6><i class="far fa-envelope"></i> tutorsworld@gmail.com</h6>
        <h6><i class="fas fa-phone"></i> +008150640540</h6>
        </Col>
  </Row>
<footer className="text-center mb-5">Copyright © 2021 Tutors World.com</footer>
</Container>
        </div>
    );
};

export default Footer;