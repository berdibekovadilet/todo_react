import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";

const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      {todo.text}
      <div className="iconsContainer">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        <BiCheckCircle
          style={{ marginLeft: 5 }}
          onClick={() => completeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
