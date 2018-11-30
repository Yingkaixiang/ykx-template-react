import React from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import shortid from "shortid";

import Navigation from "./Navigation";
import Breadcrumb from "./Breadcrumb/";
import routes, { Routes } from "@/config/routes";

const Layout: React.SFC<RouteComponentProps> = ({ location }) => {
  const matchRouteList = matchRoutes(routes, location.pathname);

  return (
    <div>
      <h1>Layout</h1>
      <Breadcrumb separator=">">
        {matchRouteList.map((data) => {
          const item = data.route as Routes;
          return (
            <Breadcrumb.Item key={shortid.generate()}>
              {item.path ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                <span>{item.name}</span>
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
      <Navigation routes={routes} />
    </div>
  );
};

export default withRouter(Layout);
