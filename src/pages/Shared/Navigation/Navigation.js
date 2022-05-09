import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import useFirebase from "../../customHooks/useFirebase";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const {user,userLogout}=useFirebase();
  console.log(user.displayName);
  return (
    <>
      <Navbar className="navigation" bg="dark" variant="dark" expand="lg">
        <Container>
          {/* <Navbar.Brand className="mx-3" href="#home"></Navbar.Brand> */}
          {/* <NavLink id="com" to="/"><b>SoftzinoTechnologies</b></NavLink> */}
          <b id="com">SoftzinoTechnologies</b>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="dashboard">Dashboard</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <p className="text-light">{user.displayName}</p>
        <button onClick={handleLogin}>Login</button>
        <button onClick={userLogout}>Logout</button>
      </Navbar>
    </>
  );
};

export default Navigation;
