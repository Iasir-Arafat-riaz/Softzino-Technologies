import React from "react";
import "./Footer.css"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSyringe, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

import { HashLink } from 'react-router-hash-link';
const Footer = () => {
  
  return (
    <div className="footer">
      <div className="row">
       
        <div  className="footerColumn col-md-5">
            <HashLink to="/home#homeTop"></HashLink>
          
          <div>
              <h2 className="footerCoName mx-2 ">Softzino</h2>
           
            <p>Dhaka,Bangladesh</p>
            <p>
              <b>Hotline: +8801855255342</b>
            </p>
          </div>
        </div>
        <div className=" col-md-2">
             <p>
            <b>Social Links</b>
          </p>
         <a target="_blank" href="https://www.facebook.com/softzino">Facebook</a>
         <a target="_blank" href="https://twitter.com/SoftzinoTech">Twitter</a>
         <a target="_blank" href="https://www.linkedin.com/company/softzino/">Linkedin</a>
        
        
        </div>
        <div className="col-md-2">
            <p>
            <b>Products</b>
          </p>
          
          <p>Hardware</p>
          
          <p>Software</p>
        </div>
        <div className="col-md-2">
          <p>
            <b>Support</b>
          </p>
          <p>Help Center</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <hr />
      <p className="text-center">
        <small>
          &copy;Copyright © 2022 Softzino Technologies.
        </small>
      </p>
    </div>
  );
};

export default Footer;
