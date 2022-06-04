import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(input);

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
