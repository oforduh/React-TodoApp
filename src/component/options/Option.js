import React, { useEffect, useState } from "react";
import AddOptions from "./AddOptions";
import styles from "./option.module.scss";

const Option = () => {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");

  //get the array from local storage
  useEffect(() => {
    const json = localStorage.getItem("options");
    const jsonOption = JSON.parse(json);
    setOptions(jsonOption);
  }, []);

  // This functionality will run anytime there are changes in the option state and it saves the array to local storage
  useEffect(() => {
    const jsonOption = JSON.stringify(options);
    localStorage.setItem("options", jsonOption);
  }, [options]);

  //Functinality for handling form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setOptions([...options, input]);
    console.log(options);
    setInput("");
  };

  //functionality for deleting all Todo
  const handleRemoveAll = () => {
    setOptions([]);
  };

  //funcionality to delete a task
  const handleDeleteOption = (indexToRemove) => {
    console.log(indexToRemove);
    const result = options.filter((option, index) => index !== indexToRemove);
    setOptions(result);
  };

  //funcionality to edit a task
  const handleEditOption = async (indexToEdit, value) => {
    const arr = options;
    arr[indexToEdit] = value;
    setOptions([...arr]);
  };

  return (
    <div className={styles.optionParent}>
      <div className={styles.option}>
        {options.length === 0 ? (
          <h2 className={styles.header}>PLEASE ADD AN OPTION</h2>
        ) : (
          <h2 className={styles.header}>YOU HAVE {options.length} TASK</h2>
        )}
        <div className={styles.formParent}>
          <form
            className={styles.todoForm}
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button>Submit</button>
          </form>
        </div>

        {options.map((option, index) => (
          <AddOptions
            key={index}
            optionText={option}
            index={index}
            handleDeleteOption={handleDeleteOption}
            handleEditOption={handleEditOption}
          />
        ))}
        <button onClick={handleRemoveAll}>Clear Todo App</button>
      </div>
    </div>
  );
};

export default Option;
