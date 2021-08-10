import React, { useEffect, useState } from "react";
import AddOptions from "./AddOptions";

const Option = () => {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const json = localStorage.getItem("options");
    const jsonOption = JSON.parse(json);
    setOptions(jsonOption);
  }, []);

  // This functionality will run anytime there are changes in the option state
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
    <div>
      <p>You have {options.length} of Task</p>
      {options.length === 0 && <p>Please Add an Option</p>}
      <button onClick={handleRemoveAll}>Clear Todo App</button>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button>Submit</button>
      </form>

      {options.map((option, index) => (
        <AddOptions
          key={index}
          optionText={option}
          index={index}
          handleDeleteOption={handleDeleteOption}
          handleEditOption={handleEditOption}
        />
      ))}
    </div>
  );
};

export default Option;
