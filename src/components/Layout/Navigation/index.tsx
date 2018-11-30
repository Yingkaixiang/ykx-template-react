import React from "react";
import shortid from "shortid";
import { Link } from "react-router-dom";

import { Routes } from "@/config/routes";

interface Navigation {
  routes: Routes[];
}

const render = (routes: Routes[]) => {
  return (
    <ul>
      {routes.map((item) => {
        if (item.path !== "*") {
          return (
            <li key={shortid.generate()}>
              {item.path ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                <span>{item.name}</span>
              )}
              {item.routes ? render(item.routes) : null}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

const Navigation: React.SFC<Navigation> = ({ routes }) => {
  return <div>{render(routes)}</div>;
};

export default Navigation;
