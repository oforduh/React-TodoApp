import React from "react";
import styles from "./cleartodo.module.scss";

const ClearTodo = ({ handleRemoveAll }) => {
  return (
    <div className={styles.container}>
      <button onClick={handleRemoveAll}>Clear Task</button>
    </div>
  );
};

export default ClearTodo;
