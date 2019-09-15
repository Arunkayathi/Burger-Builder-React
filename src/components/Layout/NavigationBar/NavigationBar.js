import React from "react";
import { Menu } from "semantic-ui-react";

import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <Menu inverted className={styles.NavBar}>
      <Menu.Item header>
        <img
          alt="logo"
          src={require("../../../assets/images/burger-logo.png")}
        ></img>
      </Menu.Item>
      <Menu.Item name="Home" />
      <Menu.Item position="right" name="Login" />
    </Menu>
  );
};

export default NavigationBar;
