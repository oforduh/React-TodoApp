import React, { useState } from "react";
import styles from "./singletodo.module.scss";

const SingleTodo = ({todoText,index,handleEditTodo,handleDeleteTodo}) => {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState(todoText);

  return (
    <div className={styles.container}>
      {!edit ? (
        <p>{todoText}</p>
      ) : (
        <input
          type="text"
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
        />
      )}
      {!edit && (
        <>
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDeleteTodo(index);
            }}
          >
            Delete
          </button>
        </>
      )}
      {edit && (
        <>
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
        </>
      )}
    </div>
  );
};

export default SingleTodo;
