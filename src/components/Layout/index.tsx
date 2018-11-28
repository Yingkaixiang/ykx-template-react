import React from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import CSSModule from "react-css-modules";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import {
  RouteConfigComponentProps,
  renderRoutes,
  matchRoutes,
} from "react-router-config";
import arrayToTree from "array-to-tree";

import styles from "./index.less";

import SiderMenu from "./SiderMenu/";
import Breadcrumb from "./Breadcrumb/";
import Nav from "./Nav";

import routes from "@/router";
import config, { IConfig } from "@/config/routes";
import MatchContext from "@/context/Match";

const { Sider, Header, Content, Footer } = Layout;

interface IMyLayout {
  collapsed?: boolean;
}

type IMyLayoutProps = IMyLayout &
  RouteComponentProps &
  RouteConfigComponentProps;

const treeData = arrayToTree(config, {
  customID: "id",
  parentProperty: "pid",
}).filter((item) => item.path !== "/" && item.path !== "*");

const MyLayout: React.FunctionComponent<IMyLayoutProps> = ({
  collapsed,
  location,
  route,
}) => {
  const matches: IConfig[] = matchRoutes(routes, location.pathname)
    .filter((item) => item.match.path !== "/" && item.match.path !== "*")
    .map((item) => {
      return item.route as IConfig;
    });

  return (
    <Layout>
      <Sider styleName="sider" width="256" collapsed={collapsed}>
        <Link to="/" styleName="logo" />
        <SiderMenu treeData={treeData} matches={matches} />
      </Sider>
      <Layout styleName="main" style={{ marginLeft: collapsed ? 80 : 256 }}>
        <Header styleName="header">
          <Nav />
        </Header>
        <Content styleName="content">
          {matches.length ? (
            <div styleName="breadcrumb">
              <Breadcrumb routes={matches} />
            </div>
          ) : null}
          <MatchContext.Provider value={matches}>
            <div styleName="container">
              {renderRoutes(route ? route.routes : [])}
            </div>
          </MatchContext.Provider>
        </Content>
        <Footer styleName="footer">
          React Template ©2018 Created by Yingkaixaing
        </Footer>
      </Layout>
    </Layout>
  );
};

export default connect((state: any) => state.layout)(
  withRouter(CSSModule(styles)(MyLayout)),
);
