import { cloneDeep } from "lodash";

export interface IMenu {
  title: string;
  icon?: string;
  url?: string;
  id: string;
  pid: string;
  children?: IMenu[];
}

export function arrToTree(arr: IMenu[]): IMenu[] {
  const current = cloneDeep(arr);
  const hash = {};
  const result: IMenu[] = [];
  current.map((item) => (hash[item.id] = item));
  current.map((item) => {
    const parent = hash[item.pid];
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

export const menu: IMenu[] = [
  {
    title: "卡口管理",
    icon: "video-camera",
    url: "/camera",
    id: "camera",
    pid: "",
  },
  {
    title: "抓拍列表",
    icon: "",
    url: "/camera/capture",
    id: "cameraCapture",
    pid: "camera",
  },
  {
    title: "告警列表",
    icon: "",
    url: "/camera/alarm",
    id: "cameraAlarm",
    pid: "camera",
  },
  {
    title: "卡口设置",
    icon: "",
    url: "/camera/option",
    id: "cameraOption",
    pid: "camera",
  },
  {
    title: "检索管理",
    icon: "search",
    url: "/search",
    id: "search",
    pid: "",
  },
  {
    title: "人像检索",
    icon: "",
    url: "/search/portrait",
    id: "searchPortrait",
    pid: "search",
  },
  {
    title: "抓拍库检索",
    icon: "",
    url: "/search/portrait/bucket",
    id: "searchPortraitInBucket",
    pid: "searchPortrait",
  },
  {
    title: "人脸检索",
    icon: "",
    url: "/search/portrait/faces",
    id: "searchPortraitInFaces",
    pid: "searchPortrait",
  },
  {
    title: "离线分析",
    icon: "",
    url: "/search/offline",
    id: "searchOffline",
    pid: "search",
  },
  {
    title: "N:N 比对",
    icon: "",
    url: "/search/N2N",
    id: "searchN2N",
    pid: "search",
  },
  {
    title: "1:1 比对",
    icon: "",
    url: "/search/One2One",
    id: "searchOne2One",
    pid: "search",
  },
  {
    title: "布控管理",
    icon: "appstore",
    url: "/task",
    id: "task",
    pid: "",
  },
  {
    title: "任务列表",
    icon: "",
    url: "/task/list",
    id: "taskList",
    pid: "task",
  },
];

export const menuTree = arrToTree(menu);
