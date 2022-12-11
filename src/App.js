// import { useState } from "react";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./assets/styles/index.css";

function App() {
  // const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);

  // const addTodo = () => {
  //   if (todo !== "") {
  //     setTodos([...todos, todo]);
  //     setTodo("");
  //   }
  // };
  // const deleteTodo = (text) => {
  //   const newTodos = todos.filter((todo) => {
  //     return todo !== text;
  //   });
  //   setTodos(newTodos);
  // };
  return (
    <div className="todo-app-container">
      <div className="form-container">
        {/* <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} remove={deleteTodo} /> */}
        <Todo />
      </div>
    </div>
  );
}

export default App;
