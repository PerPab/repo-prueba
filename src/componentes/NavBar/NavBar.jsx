import React from "react";
import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const logo = "/icono.png";
  return (
    <Navbar bg="dark" expand="lg" className="nav">
      <Container>
        <Navbar.Brand className="brand">
          <Link to="/">
            <img className="logo" src={logo} />
            60FPS Store
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Nav className="btn-nav">
              <Link to="/category/Xbox" className="btn-xbox">
                Xbox
              </Link>
            </Nav>
            <Nav className="btn-nav">
              <Link to="/category/Playstation" className="btn-ps">
                PlayStation
              </Link>
            </Nav>
            <Nav className="btn-nav">
              <Link className="btn-pc" to="/category/PC">
                PC
              </Link>
            </Nav>
            <Nav className="cart">
              <Link to="/cart">
              <button className="item-lista carrito">
                <CartWidget />
              </button>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBar;
