import React, { useEffect, useRef, useState } from "react";
import styles from "./singletodo.module.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const SingleTodo = ({ todoText, index, handleEditTodo, handleDeleteTodo }) => {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState(todoText);

  // ensure the input field is on focus when a user tries to edit
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  
  return (
    <div className={styles.single_todo_form}>
      {!edit ? (
        <p className={styles.single_todo_text}>{todoText}</p>
      ) : (
        <input
          type="text"
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          className={styles.todo_single_edit_input}
          ref={inputRef}
        />
      )}
      {!edit && (
        <div className={styles.iconGroup}>
          <button
            onClick={() => {
              setEdit(true);
            }}
            className={styles.icon}
          >
            <AiFillEdit />
          </button>
          <button
            onClick={() => {
              handleDeleteTodo(index);
            }}
            className={styles.icon}
          >
            <AiFillDelete />
          </button>
        </div>
      )}
      {edit && (
        <div className={styles.editButtonGroup}>
          <button
            onClick={() => {
              handleEditTodo(index, editInput);
              setEdit(false);
            }}
          >
            save
          </button>
          <button
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleTodo;
