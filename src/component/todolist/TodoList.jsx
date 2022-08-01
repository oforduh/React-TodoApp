import React, { useEffect, useState } from "react";
import InputField from "../inputField/InputField";
import SingleTodo from "../singleTodo/SingleTodo";
import styles from "./todolist.module.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //get the array from local storage
  useEffect(() => {
    const json = localStorage.getItem("todos");
    const jsonTodoList = JSON.parse(json);
    setTodos(jsonTodoList);
  }, []);

  // This functionality will run anytime there are changes in the TodoList state and it saves the array to local storage
  useEffect(() => {
    const jsonTodoList = JSON.stringify(todos);
    localStorage.setItem("todos", jsonTodoList);
  }, [todos]);

  //Functionality for handling form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, input]);
    console.log(todos);
    setInput("");
  };

  //functionality for deleting all Todo
  const handleRemoveAll = () => {
    setTodos([]);
  };

  //Functionality to delete a task
  const handleDeleteTodo = (indexToRemove) => {
    console.log(indexToRemove);
    const result = todos.filter((Todo, index) => index !== indexToRemove);
    setTodos(result);
  };

  //Functionality to edit a task
  const handleEditTodo = async (indexToEdit, value) => {
    const arr = todos;
    arr[indexToEdit] = value;
    setTodos([...arr]);
  };

  return (
    <div className={styles.todosParent}>
      <div className={styles.todos}>
        <div className={styles.formParent}>
          <InputField
            handleFormSubmit={handleFormSubmit}
            setInput={setInput}
            input={input}
          />
        </div>
        <div className={styles.todoContainer}>
          {todos.map((todo, index) => (
            <SingleTodo
              index={index}
              key={index}
              todoText={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleEditTodo={handleEditTodo}
            />
          ))}
        </div>
        <button onClick={handleRemoveAll}>Clear Todo App</button>
      </div>
    </div>
  );
};

export default TodoList;
