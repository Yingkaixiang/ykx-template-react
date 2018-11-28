import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import { IConfig } from "@/config/routes";

interface IMyBreadcrumbProps {
  routes: Array<Partial<IConfig>>;
}

const MyBreadcrumb: React.FunctionComponent<IMyBreadcrumbProps> = ({
  routes,
}) => {
  return (
    <Breadcrumb>
      {routes.map((item) => (
        <Breadcrumb.Item key={item.id}>
          {item.path ? (
            <Link to={item.path || ""}>{item.name}</Link>
          ) : (
            <span>{item.name}</span>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default MyBreadcrumb;
