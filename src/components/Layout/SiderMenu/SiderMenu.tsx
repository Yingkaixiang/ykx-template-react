import React from "react";
import { Menu, Icon } from "antd";
import { ClickParam } from "antd/lib/menu";

import { ISiderMenuProps, SiderMenuItem, SiderMenuArray } from "./d";

const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component<ISiderMenuProps, {}> {
  state = {
    openKeys: [],
    selectedKeys: [],
  };

  componentDidMount() {
    const { matches } = this.props;
    const keys = matches.map((item) => item.id);
    this.setState({ openKeys: keys, selectedKeys: keys });
  }

  componentWillReceiveProps(nextProps: ISiderMenuProps) {
    const { matches } = nextProps;
    const keys = matches.map((item) => item.id);
    this.setState({ openKeys: keys, selectedKeys: keys });
  }

  renderTitle = (item: SiderMenuItem) => {
    return (
      <span>
        {item.icon ? <Icon type={item.icon} /> : null}
        <span>{item.name}</span>
      </span>
    );
  };

  renderMenu = (list: SiderMenuArray) => {
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

  handleClick = ({ item, key }: ClickParam) => {
    this.setState({ selectedKeys: [key] }, () => {
      const { history } = this.props;
      const path = item.props.data.path;
      if (path) {
        history.push(path);
      }
    });
  };

  handleOpenChange = (openKeys: string[]) => {
    this.setState({ openKeys });
  };

  render() {
    const { treeData } = this.props;
    const { openKeys, selectedKeys } = this.state;
    return (
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={this.handleClick}
        onOpenChange={this.handleOpenChange}
      >
        {this.renderMenu(treeData)}
      </Menu>
    );
  }
}

export default SiderMenu;
