import React from "react";

const AboutContent = () => {
  return (
    <React.Fragment>
      <section className="section-t">
        <div className="container text-center section-three">
          <h1 className="display-4 mb-5 ">
            <span className="text-center">Portfolio</span>
          </h1>
          <button type="button" className="btn btn-outline-primary">
            All
          </button>
          <button type="button" className="btn btn-outline-success">
            Marketing
          </button>
          <button type="button" className="btn btn-outline-danger">
            Planning
          </button>
          <button type="button" className="btn btn-outline-warning">
            Research
          </button>
          <br />
          <br />
          <br />
          <div className="row m-0 p-5">
            <div className="col-lg-4 col-md-12">
              <a href="#">
                <img src="img/8th.png" />
              </a>
            </div>
            <div className="col-lg-4 col-md-12">
              <a href="#">
                <img src="img/10th.png" />
              </a>
            </div>
            <div className="col-lg-4 col-md-12">
              <a href="#">
                <img src="img/12th.png" />
              </a>
            </div>
            <div className="col-lg-4 col-md-12 abc">
              <a href="#">
                <img src="img/2th.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center section-two">
          <h1 className="display-4 mb-5 ">
            <span className="text-center">Features</span>
          </h1>
          <div className="row text-justify m-5">
            <div className="col-lg-4 col-md-12">
              <h4>Education</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
              <br />
              <h4>Goals</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>Planning</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
              <br />
              <h4>Interests</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>Vision</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
              <br />
              <h4>Values</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center section-fifth">
          <div className="row">
            <div className="col-lg-3 col-md-12 font-weight-bold">
              <h1 className="display-4">561</h1>
              <hr className="hr" />
              <small>Downloads</small>
            </div>
            <div className="col-lg-3 col-md-12">
              <h1 className="display-4">950</h1>
              <hr className="hr" />
              <small>Our Clients</small>
            </div>
            <div className="col-lg-3 col-md-12">
              <h1 className="display-4">978</h1>
              <hr className="hr" />
              <small>Lines of code written</small>
            </div>
            <div className="col-lg-3 col-md-12">
              <h1 className="display-4">1700</h1>
              <hr className="hr" />
              <small>Number of test taken</small>
            </div>
          </div>
        </div>
      </section>
      <section className="section-t">
        <div className="container text-center section-three">
          <h1 className="display-4 mb-5 ">
            <span className="text-center">Our Team</span>
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <img src="img/hamza.jpg" className="imagee" />
            </div>
            <div className="col-lg-4 col-md-12">
              <img src="img/bilal.jpg" className="imagee" />
            </div>
            <div className="col-lg-4 col-md-12">
              <img src="img/usman.jpg" className="imagee" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutContent;
