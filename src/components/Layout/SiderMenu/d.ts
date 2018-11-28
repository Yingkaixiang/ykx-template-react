import { Tree } from "array-to-tree";
import { RouteComponentProps } from "react-router-dom";
import { IConfig } from "@/config/routes";

export type SiderMenuItem = Partial<IConfig>;
export type SiderMenuArray = Array<Tree<SiderMenuItem>>;

export interface ISiderMenu {
  treeData: SiderMenuArray;
  matches: IConfig[];
}

export type ISiderMenuProps = ISiderMenu & RouteComponentProps;
