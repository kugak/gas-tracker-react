import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../../App";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
