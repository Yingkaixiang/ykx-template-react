import React from "react";
import Loadable from "react-loadable";
import { RouteConfig } from "react-router-config";

import Loading from "@/pages/Loading";
import NotFound from "@/pages/NotFound";

type ComponentType = Promise<
  React.ComponentType<{}> | { default: React.ComponentType<{}> }
>;

export interface Routes extends RouteConfig {
  name: string;
  routes?: Routes[];
}

const dynamic = (Component: ComponentType) => {
  return Loadable({
    loader: () => Component,
    loading: () => <Loading />,
  });
};

const routes: Routes[] = [
  {
    name: "首页",
    path: "/",
    exact: true,
    component: dynamic(import("@/pages/App/")),
  },
  {
    name: "Redux",
    path: "/redux",
    component: dynamic(import("@/pages/Redux/")),
    routes: [
      {
        name: "Redux Sync",
        path: "/redux/sync",
        component: dynamic(import("@/pages/Redux/Sync/")),
      },
      {
        name: "Redux Async",
        path: "/redux/async",
        component: dynamic(import("@/pages/Redux/Async/")),
      },
    ],
  },
  {
    name: "404",
    path: "*",
    component: NotFound,
  },
];

export default routes;
