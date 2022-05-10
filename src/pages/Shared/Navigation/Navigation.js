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

  const { user, userLogout,language } = useContextAuth();
  console.log(user?.displayName);
  return (
    <>
      <Navbar className="navigation" bg="dark" variant="dark" expand="lg">
        {/* <Container> */}
          {/* <Navbar.Brand className="mx-3" href="#home"></Navbar.Brand> */}
          {/* <NavLink id="com" to="/"><b>SoftzinoTechnologies</b></NavLink> */}
         {language=="English"&& <h4 id="com">SoftzinoTechnologies</h4>}
         {language=="Bengali"&& <h4 id="com">সফটজিনো টেকনোলজিস</h4>}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">
                {language=="English"&&<b>Home</b>}
                {language=="Bengali"&&<b>বাড়ি</b>}
              </NavLink>
              <NavLink to="dashboard">
               
                  {language=="English"&&<b>Dashboard</b>}
                {language=="Bengali"&&<b>ড্যাশবোর্ড</b>}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
         
        {/* </Container> */}
        <h6  className="text-light">{user.displayName}</h6>
          {user.displayName ? (
            <button className="logoutButton" onClick={userLogout}>
                 {language=="English"&&<b>Logout</b>}
                {language=="Bengali"&&<b>প্রস্থান</b>}
           
            </button>
          ) : (
            <button className="loginButton" onClick={handleLogin}>
              Login
            </button>
          )}
         
         
          
         
         
        
      </Navbar>
    </>
  );
};

export default Navigation;
