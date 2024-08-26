import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]);
      setInputValue(""); // Limpiar el campo de entrada
    }
  };

  return (
    <div className="container">
      <h1>My To Do List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <i className="fa-solid fa-trash" />
          </li>
        ))}
      </ul>
      <div>{todos.length} Tasks</div>
    </div>
  );
};

export default Home;
