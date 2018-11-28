// 路由配置
// 任何和路由相关的功能或组件都会使用当前配置
// 该配置会运用到路由，侧边栏、面包屑等

import React from "react";
import Loadable from "react-loadable";

import Loading from "@/pages/Loading";
import NotFound from "@/pages/NotFound";

// 按需加载
const dynamic = (component: any) => {
  return Loadable({
    loader: () => component,
    loading: () => <Loading />,
  });
};

export interface IConfig {
  id: string | number; // 路由id
  pid?: string | number; // 父路由id
  name?: string; // 路由名称
  icon?: string; // 路由图标
  path?: string; // 路由地址
  exact?: boolean; // 路由是否精确匹配
  meta?: any; // 额外信息，如该路由是否需要鉴权
  component: any; // 路由对应的组件
}

const config: IConfig[] = [
  {
    id: "root",
    pid: "",
    name: "首页",
    icon: "",
    path: "/",
    exact: true,
    component: dynamic(import("@/pages/App/")),
  },
  {
    id: "camera",
    pid: "",
    name: "卡口管理",
    icon: "video-camera",
    path: "/camera",
    component: dynamic(import("@/pages/Camera/")),
  },
  {
    id: "cameraCapture",
    pid: "camera",
    name: "抓拍列表",
    icon: "",
    path: "/camera/capture",
    component: dynamic(import("@/pages/Camera/Capture/")),
  },
  {
    id: "cameraAlarm",
    pid: "camera",
    name: "告警列表",
    icon: "",
    path: "/camera/alarm",
    component: dynamic(import("@/pages/Camera/Alarm/")),
  },
  {
    id: "notFound",
    pid: "",
    name: "",
    icon: "",
    path: "*",
    component: NotFound,
  },
];

export default config;
