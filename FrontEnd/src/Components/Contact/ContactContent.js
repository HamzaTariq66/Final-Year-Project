import React, { Component } from "react";
import { contact } from "./UserContact";
import { withRouter } from "react-router-dom";

class Content extends Component {
  state = {
    full_name: "",
    email: "",
    subject: "",
    message: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const contactUser = {
      full_name: this.state.full_name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    contact(contactUser).then(res => {
      this.props.history.push(`/login`);
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="contact">
          <div className="container text-center">
            <h1 className="display-4 mb-5">Contact Us</h1>
            <div className="row">
              <div className="col-lg-8 ">
                <h3 className="text-left mb-4">Get in touch</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-row">
                    <div className="col-lg-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="full_name"
                        value={this.state.full_name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-lg-12 pt-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows="9"
                        name="message"
                        value={this.state.message}
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-left mt-2">
                    <button
                      type="submit"
                      className="btn btn-outline-danger butn"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 text-left">
                <h3 className="mb-4">Contact Information</h3>
                <p>
                  Level 13, 2 Elizabeth St, Melbourne,
                  <br />
                  1800 452 308
                  <br />
                  +61 (8) 8234 3555
                  <br />
                  admin@uideck.com
                  <br />
                  www.uideck.com
                </p>
                <a href="#" className="btn btn-social btn-facebook">
                  <span className="fa fa-facebook"></span>
                </a>
                <a href="#" className="btn  btn-social btn-twitter">
                  <span className="fa fa-twitter"></span>
                </a>
                <a href="#" className="btn  btn-social btn-instagram">
                  <span className="fa fa-instagram"></span>
                </a>
                <a href="#" className="btn  btn-social btn-linkedin">
                  <span className="fa fa-linkedin"></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Content;
