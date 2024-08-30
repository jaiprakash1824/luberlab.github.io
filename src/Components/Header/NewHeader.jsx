import { Menu, Drawer, Button } from "antd";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./NewHeader.css";

const NavBar = () => {
  const [navClass, setNavClass] = useState("home-nav-bar-transparent");
  const [logoVisible, setLogoVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavClass("home-nav-bar-solid");
      setLogoVisible(true);
    } else {
      setNavClass("home-nav-bar-transparent");
      setLogoVisible(false);
    }
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleMenuClick = (e) => {
    setSelectedKey(e.key); // Update the selected key
    navigate(e.key); // Navigate to the selected page
    closeDrawer(); // Close the drawer if open
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSelectedKey(location.pathname); // Synchronize selected key with current path
  }, [location.pathname]);

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/research", label: "Research" },
    { key: "/publications", label: "Publications" },
    { key: "/team", label: "Teams" },
    { key: "/news", label: "News" },
    { key: "/contact", label: "Join Us" },
  ];

  return (
    <div className={`home-nav-bar-container ${navClass}`}>
      <div className="home-nav-bar-logo-container">
        {logoVisible && (
          <img
            src="path_to_logo.png"
            alt="Logo"
            className="home-nav-bar-logo"
          />
        )}
      </div>
      <div className="home-nav-bar-menu-container">
        <Menu
          mode="horizontal"
          className="home-nav-bar-menu-items"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={menuItems}
        />
        <Button
          className="home-nav-bar-menu-button"
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={menuItems}
        />
      </Drawer>
    </div>
  );
};

export default NavBar;
