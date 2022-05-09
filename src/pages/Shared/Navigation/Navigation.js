import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import useContextAuth from "../../customHooks/useContextAuth";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const {user,userLogout}=useContextAuth();
  console.log(user.displayName);
  return (
    <>
      <Navbar className="navigation" bg="dark" variant="dark" expand="lg">
        <Container>
          {/* <Navbar.Brand className="mx-3" href="#home"></Navbar.Brand> */}
          {/* <NavLink id="com" to="/"><b>SoftzinoTechnologies</b></NavLink> */}
          <h4 id="com">SoftzinoTechnologies</h4>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/"><b>Home</b></NavLink>
              <NavLink to="dashboard"><b>Dashboard</b></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <p className="text-light">{user.displayName}</p>
        {user.displayName? <button className="logoutButton" onClick={userLogout}>Logout</button>:<button className="loginButton" onClick={handleLogin}>Login</button>}
        
       
      </Navbar>
    </>
  );
};

export default Navigation;
