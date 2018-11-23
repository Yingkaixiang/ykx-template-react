import React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import Loadable from "react-loadable";

import Layout from "@/components/Layout/";
import Loading from "@/pages/Loading";
import NotFound from "@/pages/NotFound";

const dynamic = (component: Promise<any>) => {
  return Loadable({
    loader: () => component,
    loading: () => <Loading />,
  });
};

const Router: React.FunctionComponent<RouteComponentProps> = ({ location }) => {
  if (location.pathname !== "/login") {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={dynamic(import("@/pages/App/"))} />
          <Route
            path="/camera"
            component={dynamic(import("@/pages/Camera/"))}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  } else {
    return (
      <Route
        exact
        path="/login"
        component={dynamic(import("@/pages/Login/"))}
      />
    );
  }
};

export default withRouter(Router);
