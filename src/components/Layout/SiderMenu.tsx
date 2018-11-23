import React from "react";
import { Menu, Icon } from "antd";
import { ClickParam } from "antd/lib/menu";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { IMenu, menuTree } from "@/config/routes";

const SubMenu = Menu.SubMenu;

const SiderMenu: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const renderTitle = (item: IMenu) => {
    return (
      <span>
        {item.icon ? <Icon type={item.icon} /> : null}
        <span>{item.title}</span>
      </span>
    );
  };

  const renderMenu = (list: IMenu[]) => {
    return list.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.id} title={renderTitle(item)}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.id} data={item}>
            {renderTitle(item)}
          </Menu.Item>
        );
      }
    });
  };

  const handleClick = ({ item }: ClickParam) => {
    const url = item.props.data.url;
    if (url) {
      history.push(url);
    }
  };

  return (
    <Menu theme="dark" mode="inline" onClick={handleClick}>
      {renderMenu(menuTree)}
    </Menu>
  );
};

export default withRouter(SiderMenu);
