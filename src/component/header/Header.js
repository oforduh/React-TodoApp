import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerParent}>
      <div className={styles.header}>
        <h1>REACT TASKIFY</h1>
      </div>
    </div>
  );
};

export default Header;
