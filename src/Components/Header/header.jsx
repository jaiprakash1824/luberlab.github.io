import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./header.css";

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const menuItems = [
    {
      key: "/",
      label: (
        <Link to="/" onClick={closeDrawer}>
          Home
        </Link>
      ),
    },
    {
      key: "/research",
      label: (
        <Link to="/research" onClick={closeDrawer}>
          Research
        </Link>
      ),
    },
    {
      key: "/publications",
      label: (
        <Link to="/publications" onClick={closeDrawer}>
          Publications
        </Link>
      ),
    },
    {
      key: "/team",
      label: (
        <Link to="/team" onClick={closeDrawer}>
          Team
        </Link>
      ),
    },
    {
      key: "/news",
      label: (
        <Link to="/news" onClick={closeDrawer}>
          News
        </Link>
      ),
    },
    {
      key: "/contact",
      label: (
        <Link to="/contact" onClick={closeDrawer} className="contactButton">
          Join Us
        </Link>
      ),
    },
  ];

  return (
    <div className="header">
      <div className="logo">
        {/* <img src="/path/to/logo.png" alt="Logo" className="logoImage" /> */}
        {/* <span className="logoText">Luber Lab</span> */}
      </div>
      <Menu
        mode="horizontal"
        className="menu"
        items={menuItems}
        selectedKeys={[location.pathname]}
      />
      <Button
        className="menuButton"
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={visible}
        className="drawer"
      >
        <Menu
          mode="inline"
          items={menuItems}
          selectedKeys={[location.pathname]}
        />
      </Drawer>
    </div>
  );
};

export default AppHeader;
