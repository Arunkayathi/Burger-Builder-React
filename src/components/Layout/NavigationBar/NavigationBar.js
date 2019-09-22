import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <Menu inverted className={styles.NavBar}>
      <Menu.Item header as={Link} to="/" exact>
        <img
          alt="logo"
          src={require("../../../assets/images/burger-logo.png")}
        ></img>
      </Menu.Item>
      <Menu.Item as={NavLink} to="/" exact name="Home" />
      <Menu.Item as={NavLink} to="/orders" name="Orders" />
      <Menu.Item position="right" name="Login" />
    </Menu>
  );
};

export default NavigationBar;
