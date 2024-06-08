import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./header.css"; // Import the CSS file

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const menuItems = [
    {
      key: "1",
      label: (
        <Link to="/" onClick={closeDrawer}>
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/research" onClick={closeDrawer}>
          Research
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/publications" onClick={closeDrawer}>
          Publications
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="/team" onClick={closeDrawer}>
          Team
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link to="/news" onClick={closeDrawer}>
          News
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link to="/contact" className="contactButton" onClick={closeDrawer}>
          Contact
        </Link>
      ),
    },
  ];

  return (
    <div className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" className="logoImage" />
        <span className="logoText">Luber Lab</span>
      </div>
      <Menu mode="horizontal" className="menu" items={menuItems} />
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
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="inline" items={menuItems} />
      </Drawer>
    </div>
  );
};

export default Header;
