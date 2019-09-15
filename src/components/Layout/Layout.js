import React from "react";
import styles from "./Layout.module.css";

import NavigationBar from "../Layout/NavigationBar/NavigationBar";
const Layout = props => {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
