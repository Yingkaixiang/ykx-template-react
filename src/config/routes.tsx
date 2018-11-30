import React from "react";
import Loadable from "react-loadable";
import { RouteConfig } from "react-router-config";

import Loading from "@/pages/Loading";
import NotFound from "@/pages/NotFound";

export interface Routes extends RouteConfig {
  name: string;
  routes?: Routes[];
}

const routes: Routes[] = [
  {
    name: "首页",
    path: "/",
    exact: true,
    component: Loadable({
      loader: () => import("@/pages/App/"),
      loading: () => <Loading />,
    }),
  },
  {
    name: "Redux",
    path: "/redux",
    component: Loadable({
      loader: () => import("@/pages/Redux/"),
      loading: () => <Loading />,
    }),
    routes: [
      {
        name: "Redux Sync",
        path: "/redux/sync",
        component: Loadable({
          loader: () => import("@/pages/Redux/Sync/"),
          loading: () => <Loading />,
        }),
      },
      {
        name: "Redux Async",
        path: "/redux/async",
        component: Loadable({
          loader: () => import("@/pages/Redux/Async/"),
          loading: () => <Loading />,
        }),
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
