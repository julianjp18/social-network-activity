import React from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu as AntMenu } from "antd";

const { SubMenu } = AntMenu;

const Menu = () => {
  return (
    <AntMenu
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1", "sub2", "sub3"]}
    mode="inline"
    theme="dark"
    inlineCollapsed={false}
  >
    <AntMenu.Item key="1" icon={<PieChartOutlined />}>
      <Link to="/posts">Posts list</Link>
    </AntMenu.Item>
    <AntMenu.Item key="2" icon={<DesktopOutlined />}>
      Option 2
    </AntMenu.Item>
    <AntMenu.Item key="3" icon={<ContainerOutlined />}>
      Option 3
    </AntMenu.Item>
    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
      <AntMenu.Item key="5">Option 5</AntMenu.Item>
      <AntMenu.Item key="6">Option 6</AntMenu.Item>
      <AntMenu.Item key="7">Option 7</AntMenu.Item>
      <AntMenu.Item key="8">Option 8</AntMenu.Item>
    </SubMenu>
    <SubMenu
      key="sub2"
      icon={<AppstoreOutlined />}
      title="Navigation Two"
    >
      <AntMenu.Item key="9">Option 9</AntMenu.Item>
      <AntMenu.Item key="10">Option 10</AntMenu.Item>
      <SubMenu key="sub3" title="Submenu">
        <AntMenu.Item key="11">Option 11</AntMenu.Item>
        <AntMenu.Item key="12">Option 12</AntMenu.Item>
      </SubMenu>
    </SubMenu>
  </AntMenu>
  );
};

export default Menu;
