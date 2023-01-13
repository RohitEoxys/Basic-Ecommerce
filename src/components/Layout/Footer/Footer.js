// <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
// <link href="http://fonts.googleapis.com/css?family=Architects+Daughter" rel="stylesheet" type="text/css"></link>

import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    // <div className="main">
    <footer className="footer_main">
      <div className="footer-left">
        <h3>The world of E-Commerce</h3>

        <p className="footer-links">
          <a href="#">Home</a>·<a href="#">About us</a>·
          <a href="#">Contact us</a>
        </p>

        <p className="footer-company-name">The world of code &copy; 2019</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Best Shoppping</span> London, UK
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+56 9987 987654</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="#">Flipkart.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Welcome to the world of Shopping, Here we are providing you the best
          platform
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
