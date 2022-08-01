import React from "react";
import styles from "./inputfield.module.scss";

const InputField = ({ handleFormSubmit, input, setInput }) => {
  return (
    <form className={styles.todoForm} onSubmit={(e) => handleFormSubmit(e)}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className={styles.addTodoInput}
        placeholder="Enter a Task"
      />
      <button className={styles.addTodoButton}>Go</button>
    </form>
  );
};

export default InputField;
