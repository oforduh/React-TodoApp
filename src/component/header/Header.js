import React from "react";
import styles from "./header.module.scss";

const Header = (props) => {
  return (
    <div className={styles.headerParent}>
      <div className={styles.header}>
        <h1>{props.title}</h1>
        <span>Built by Harrison</span>
      </div>
    </div>
  );
};

export default Header;
