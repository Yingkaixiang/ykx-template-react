import React from "react";
import { Layout } from "antd";
import CSSModule from "react-css-modules";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./index.less";

import SiderMenu from "./SiderMenu";
import Breadcrumb from "./Breadcrumb/";
import { format } from "./Breadcrumb/util";
import Nav from "./Nav";

const { Sider, Header, Content, Footer } = Layout;

interface IMyLayout {
  collapsed?: boolean;
}

type IMyLayoutProps = IMyLayout & RouteComponentProps;

const MyLayout: React.FunctionComponent<IMyLayoutProps> = ({
  children,
  collapsed,
  location,
}) => {
  return (
    <Layout>
      <Sider styleName="sider" width="256" collapsed={collapsed}>
        <Link to="/" styleName="logo" />
        <SiderMenu />
      </Sider>
      <Layout styleName="main" style={{ marginLeft: collapsed ? 80 : 256 }}>
        <Header styleName="header">
          <Nav />
        </Header>
        <Content styleName="content">
          <div styleName="breadcrumb">
            <Breadcrumb routes={format(location.pathname)} />
          </div>
          <div>{children}</div>
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
