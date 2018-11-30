import React from "react";
import PropTypes from "prop-types";
import CSSModule from "react-css-modules";

import styles from "./index.less";

interface BreadcrumbItemProps {
  separator?: string;
}

class BreadcrumbItem extends React.Component<BreadcrumbItemProps, any> {
  static defaultProps = {
    separator: "/",
  };

  static propTypes = {
    separator: PropTypes.string,
  };

  render() {
    const { children, separator } = this.props;
    if (children) {
      return (
        <span>
          <span styleName="breadcrumb-link">{children}</span>
          <span styleName="breadcrumb-separator">{separator}</span>
        </span>
      );
    }
    return null;
  }
}

export default CSSModule(styles)(BreadcrumbItem);
