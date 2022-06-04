import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }

    let todo = {
      id: id,
      text: text,
      completed: false,
    };

    let newTodo = [todo, ...todos];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos.filter((el) => el.id !== id)];
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="todo-app">
      <header>
        <h1>What's your plan today?</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
