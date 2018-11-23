import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export interface IBreadcrumbItem {
  id: string;
  url?: string;
  title: string;
}

interface IMyBreadcrumbProps {
  routes: IBreadcrumbItem[];
}

const MyBreadcrumb: React.FunctionComponent<IMyBreadcrumbProps> = ({
  routes,
}) => {
  return (
    <Breadcrumb>
      {routes.map((item) => (
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

export default MyBreadcrumb;
