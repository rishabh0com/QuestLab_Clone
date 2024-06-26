import React from "react";
import styles from "./hubIcon.module.css"
import logo from "../assets/whiteLogo.svg";
const HubIcon = () => {
  return (
    <div className={styles.hubIconDiv}>
      <img src={logo} className="" />
    </div>
  );
};

export default HubIcon;
