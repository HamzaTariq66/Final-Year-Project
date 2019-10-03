import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h5>Career Assessment Test</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"> For 8th & 9th Std.</a>
                    </li>
                    <li>
                      <a href="#">For 10th Std.</a>
                    </li>
                    <li>
                      <a href="#">For 11th & 12th Std.</a>
                    </li>
                    <li>
                      <a href="#">For Graduates.</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4> More On Career</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Career Confusion</a>
                    </li>
                    <li>
                      <a href="#">Career Planning</a>
                    </li>
                    <li>
                      <a href="#">Career Guidance</a>
                    </li>
                    <li>
                      <a href="#">Career Change</a>
                    </li>
                    <li>
                      <a href="#">Educational Franchise</a>
                    </li>
                    <li>
                      <a href="#">Become A Career Consultant</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4>Contact Us</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Schools</a>
                    </li>
                    <li>
                      <a href="#">Parents & Students</a>
                    </li>
                    <li>
                      <a href="#">Business Enquiries</a>
                    </li>
                    <li>
                      <a href="#">Counselling Centres</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright 2019 - Govt Islamia College Civil Lines. All
                  rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
