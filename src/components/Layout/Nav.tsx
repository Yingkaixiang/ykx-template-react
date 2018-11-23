import React from "react";
import { Icon } from "antd";
import CSSModule from "react-css-modules";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IAction, LAYOUT_TOGGLE } from "./model/";

import styles from "./Nav.less";

interface INavProps {
  collapsed?: boolean;
  toggle?: () => void;
}

const Nav: React.FunctionComponent<INavProps> = ({ toggle, collapsed }) => {
  return (
    <div>
      <Icon
        className={styles.toggle}
        type={collapsed ? "menu-unfold" : "menu-fold"}
        onClick={toggle}
      />
    </div>
  );
};

export default connect(
  (state: any) => state.layout,
  (dispatch: Dispatch<IAction>) => {
    return {
      toggle: () => dispatch({ type: LAYOUT_TOGGLE }),
    };
  },
)(CSSModule(styles)(Nav));
