import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AboutMain from "./Components/About/AboutMain";
import ContactMain from "./Components/Contact/ContactMain";
import HomeMain from "./Components/Home/HomeMain";
import LoginMain from "./Components/Login/LoginMain";
import LogoutMain from "./Components/Logout/LogoutMain";
import ProfileMain from "./Components/Profile/ProfileMain";
import RegisterMain from "./Components/Register/RegisterMain";
import ServiceMain from "./Components/Services/ServiceMain";
import "./style.css";

class App extends Component {
  render() {
    var dynamic_btn = (
      <React.Fragment>
        <Route path="/login" component={LoginMain} />
        <Route path="/signup" component={RegisterMain} />
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
          <Route path="/profile" component={ProfileMain} />
          <Route path="/logout" component={LogoutMain} />
        </React.Fragment>
      );
    }

    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeMain} />
        <Route exact path="/Home" component={HomeMain} />
        <Route path="/contact" component={ContactMain} />
        <Route path="/about" component={AboutMain} />
        {dynamic_btn}
        <Route path="/services" component={ServiceMain} />
      </BrowserRouter>
    );
  }
}

export default App;
