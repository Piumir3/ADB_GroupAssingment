import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/view/home/dashboard";
import Signin from "./components/view/user/signin";
import Signup from "./components/view/user/signup";
import ConfirmAccount from "./modules/auth/ConfirmAccount";
import ResetPasswordVerify from "./modules/auth/ResetPasswordVerify";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/confirm-account" component={ConfirmAccount} />
          <Route path="/register" component={Signup} />
          <Route path="/home" render={(props) => <Dashboard {...props} />} />
          <Route path="/login" component={Signin} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}
export default App;
