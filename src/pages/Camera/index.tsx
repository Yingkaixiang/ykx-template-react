import React from "react";
import CSSModule from "react-css-modules";
import { RouteConfigComponentProps, renderRoutes } from "react-router-config";

import styles from "./index.less";

const Camera: React.FunctionComponent<RouteConfigComponentProps> = ({
  route,
}) => {
  return <div styleName="main">{renderRoutes(route ? route.routes : [])}</div>;
};

export default CSSModule(styles)(Camera);
