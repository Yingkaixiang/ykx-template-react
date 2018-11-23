import React from "react";
import { Breadcrumb } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";

import { menu, IMenu } from "@/config/routes";

const MyBreadcrumb: React.FunctionComponent<RouteComponentProps> = ({
  location,
}) => {
  const current = menu.filter((item: IMenu) => {
    const pathname = location.pathname;
    if (item.url && pathname.indexOf(item.url) !== -1) {
      return true;
    }
    return false;
  });

  return (
    <Breadcrumb>
      {current.map((item) => (
        <Breadcrumb.Item key={item.id}>
          {item.url ? (
            <Link to={item.url || ""}>{item.title}</Link>
          ) : (
            <span>{item.title}</span>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default withRouter(MyBreadcrumb);
