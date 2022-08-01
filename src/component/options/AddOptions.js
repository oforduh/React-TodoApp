import React, { useEffect, useState } from "react";
import styles from "./option.module.scss";

const AddOptions = (props) => {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState(props.optionText);
  const handleDeleteOption = props.handleDeleteOption;
  const handleEditOption = props.handleEditOption;
  const [optionText, setOptionText] = useState(props.optionText);
  const index = props.index;

  useEffect(() => {
    setOptionText(props.optionText);
  }, [props]);

  return (
    <div className={styles.addOptions}>
      {!edit ? (
        <p>{optionText}</p>
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
              handleDeleteOption(index);
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
              handleEditOption(index, editInput);
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

export default AddOptions;
