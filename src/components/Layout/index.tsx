import React from "react";
import { Layout } from "antd";
import CSSModule from "react-css-modules";
import { Link } from "react-router-dom";

import styles from "./index.less";

import SiderMenu from "./SiderMenu";
import Breadcrumb from "./Breadcrumb";

const { Sider, Header, Content, Footer } = Layout;

const MyLayout: React.FunctionComponent = ({ children }) => {
  return (
    <Layout>
      <Sider styleName="sider" width="256">
        <Link to="/" styleName="logo" />
        <SiderMenu />
      </Sider>
      <Layout styleName="main">
        <Header styleName="header" />
        <Content styleName="content">
          <div styleName="breadcrumb">
            <Breadcrumb />
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

export default CSSModule(styles)(MyLayout);
