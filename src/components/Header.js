import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const links = [
  {text:"About Me", ref:"/about"},
  {text:"Experience", ref:"/experience"},
  {text:"Skills", ref:"/skills"},
  {text:"Contact Me", ref:"/contact"}
]

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-secondary p-2 mb-2 bg-opacity-25">
      <Navbar.Brand as={Link} to="/" className="ps-3">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {links.map(link => (
            <Nav.Link className="nav-item px-2 mx-1 rounded text-muted" as={Link} to={link.ref}>{link.text}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
