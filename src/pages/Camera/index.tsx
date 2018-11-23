import React from "react";
import CSSModule from "react-css-modules";
import { Route, RouteComponentProps } from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "@/pages/Loading";

import styles from "./index.less";

const Capture = Loadable({
  loader: () => import("./Capture"),
  loading: () => <Loading />,
});

const Camera: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
  return (
    <div styleName="main">
      <span>camera</span>
      <Route path={`${match.path}/capture`} component={Capture} />
    </div>
  );
};

export default CSSModule(styles)(Camera);
