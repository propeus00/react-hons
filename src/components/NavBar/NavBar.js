import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">
            <img
              src="logo512.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="React logo image"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} exact to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/sign-up">
                Sign up
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
            <Nav.Link as={NavLink} to="sign-in">
              Sign in
            </Nav.Link>
          </Nav.Item> */}
            <Nav.Item>
              <Nav.Link as={NavLink} to="add-project">
                AddProject
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="user-profile">
                UserProfile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="user-settings">
                UserSettings
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
};

export default NavBar;
