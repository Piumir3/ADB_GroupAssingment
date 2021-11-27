import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home.component";
import Header from "./header";
import CustomerForm from "../customerRequests/customerForm";
import Footer from "./footer";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile.component";
import Chart from "../charts/chart";
import CustomerRequestDetails from "../customerRequests/customerRequestDetails";
import UserDetails from "../user/userDetails.js";
import EditUser from "../user/editUser";
import View from "./view.component";
import UserHistory from "../user/userHistory.component";
import chartcomponent from "../charts/chart.component";
import BackupView from "./backup.component";

class Dashboard extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Header appTitle="Home" />
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={(props) => <Home {...props} />}
          />
          <Route path={`${match.path}/profile`} component={Profile} />
          <Route path={`${match.path}/customerform`} component={CustomerForm} />
          <Route path={`${match.path}/chart`} component={Chart} />
          <Route path={`${match.path}/user_history`} component={UserHistory} />
          <Route path={`${match.path}/view/:id`} component={View} />
          <Route path={`${match.path}/backup`} component={BackupView} />
          <Route
            path={`${match.path}/chartcomponent/:id`}
            component={chartcomponent}
          />
          <Route
            path={`${match.path}/request`}
            component={CustomerRequestDetails}
          />

          <Route path={`${match.path}/chartcomponent/:id`} component={chartcomponent} />
          <Route path={`${match.path}/request`} component={CustomerRequestDetails}/>

          <Route path={`${match.path}/edit`} component={EditUser} />
          <Route path={`${match.path}/userdetails`} component={UserDetails} />
          <Route path={`${match.path}/view/:id`} component={View} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {
  match: PropTypes.any.isRequired,
};

export default Dashboard;
