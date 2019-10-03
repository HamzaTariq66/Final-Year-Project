import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  var dynamic_btn = (
    <React.Fragment>
      <li className="nav-item">
        <NavLink to="Login" className="nav-link">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="Signup" className="nav-link">
          Register
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
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Logout" className="nav-link">
            Logout
          </NavLink>
        </li>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <div className="container">
          <a href="../index.html" className="navbar-brand ">
            <img src="img/1.png" className="image" />
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
              <li className="nav-item active">
                <NavLink to="home" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="Services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="About" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="Contact" className="nav-link">
                  Contact
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

export default NavBar;
