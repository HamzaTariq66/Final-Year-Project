import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  var dynamic_btn = (
    <React.Fragment>
      <li className="nav-item">
        <NavLink to="Login" className="nav-link">
          <span className="text">Login</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="Register" className="nav-link">
          <span className="text">Register</span>
        </NavLink>
      </li>
    </React.Fragment>
  );
  const usertokenval = localStorage.getItem("usertoken");
  if (
    usertokenval !== null &&
    typeof usertokenval !== "undefined" &&
    usertokenval !== "undefined"
  ) {
    dynamic_btn = (
      <React.Fragment>
        <li className="nav-item">
          <NavLink to="Profile" className="nav-link">
            <span className="text">Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Logout" className="nav-link">
            <span className="text">Logout</span>
          </NavLink>
        </li>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="main-nav"
      >
        <div className="container">
          <a href="index.html" className="navbar-brand ">
            <img src="/img/1.png" className="image" />
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="home" className="nav-link ">
                  <span className="active"> Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="Services" className="nav-link">
                  <span className="text">Services</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="About" className="nav-link">
                  <span className="text">About Us</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="Contact" className="nav-link">
                  <span className="text">Contact Us</span>
                </NavLink>
              </li>
              {dynamic_btn}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
