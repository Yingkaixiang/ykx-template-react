import React from "react";
import { Menu, Icon } from "antd";
import { ClickParam } from "antd/lib/menu";
import { RouteComponentProps } from "react-router-dom";

import { IMenu, menuTree } from "@/config/routes";

const SubMenu = Menu.SubMenu;

type ISiderMenuProps = RouteComponentProps;
interface ISiderMenuState {
  openKeys: string[];
}

class SiderMenu extends React.Component<ISiderMenuProps, ISiderMenuState> {
  state = {
    openKeys: [],
  };

  renderTitle = (item: IMenu) => {
    return (
      <span>
        {item.icon ? <Icon type={item.icon} /> : null}
        <span>{item.title}</span>
      </span>
    );
  };

  renderMenu = (list: IMenu[]) => {
    return list.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.id} title={this.renderTitle(item)}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.id} data={item}>
            {this.renderTitle(item)}
          </Menu.Item>
        );
      }
    });
  };

  handleClick = ({ item }: ClickParam) => {
    const { history } = this.props;
    const url = item.props.data.url;
    if (url) {
      history.push(url);
    }
  };

  handleOpenChange = (openKeys: string[]) => {
    // this.setState({
    //   openKeys: [openKeys[openKeys.length - 1]],
    // });
  };

  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        onClick={this.handleClick}
        onOpenChange={this.handleOpenChange}
      >
        {this.renderMenu(menuTree)}
      </Menu>
    );
  }
}

export default SiderMenu;
