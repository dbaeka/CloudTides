import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
=======
import {BrowserRouter as Router, Route} from "react-router-dom";

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/cloud-tides.css";
import "./styles/css/tides-icons/tides_icons.css"
import {PrivateRoute} from "./utils/routerExt";


export default () => (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
            {routes.map((route, index) => {
                return (
                    <div key={index}>
                        {(route.path == "/signup" || route.path == "/login") ? (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={(props) => (
                                    <route.layout {...props}>
                                        <route.component {...props} />
                                    </route.layout>
                                )}
                            />
                        ) : (
                            <PrivateRoute
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={(props) => (
                                    <route.layout {...props}>
                                        <route.component {...props} />
                                    </route.layout>
                                )}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    </Router>
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1
);
