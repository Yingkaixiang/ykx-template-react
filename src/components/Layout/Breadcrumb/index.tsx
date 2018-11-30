import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import CSSModule from "react-css-modules";

import styles from "./index.less";

import BreadcrumbItem from "./BreadcrumbItem";

interface BreadcrumbProps {
  separator?: string;
}

class Breadcrumb extends React.Component<BreadcrumbProps, any> {
  static Item = BreadcrumbItem;

  static defaultProps = {
    separator: "/",
  };

  static propTypes = {
    separator: PropTypes.string,
  };

  render() {
    const { children, separator } = this.props;
    return (
      <span styleName="breadcrumb">
        {React.Children.map(children, (child: any, i) => {
          return cloneElement(child, {
            separator,
            key: i,
          });
        })}
      </span>
    );
  }
}

export default CSSModule(styles)(Breadcrumb);
