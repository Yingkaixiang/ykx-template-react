import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

const Redux: React.SFC<RouteConfigComponentProps> = ({ route }) => {
  return <div>{renderRoutes(route ? route.routes : [])}</div>;
};

export default Redux;
