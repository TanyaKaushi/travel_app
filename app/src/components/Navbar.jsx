import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";

const NavigationBar = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar-main">
      <Navbar collapseOnSelect expand="lg"  fixed="top">
        <Container>
          <Navbar.Brand className="logo" href="" onClick={handleClick}>Tripco Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex justify-content-center gap-4 align-items-center">
              <Nav.Link className="link" href="#">About</Nav.Link>
              <Nav.Link className="link" href="#">Top Destinations</Nav.Link>
              <Nav.Link className="link" href="#">Why Us</Nav.Link>
              <Nav.Link className="link" href="#">Best Choices</Nav.Link>
              <Nav.Link><i class="bi bi-person-fill"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
