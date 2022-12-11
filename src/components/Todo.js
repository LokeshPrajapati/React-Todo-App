import { useState } from "react";
import deleteImage from "../assets/Images/delete.png";
import editImage from "../assets/Images/edit.png";
const Todo = () => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  const [isToggleTodo, setIsToggleTodo] = useState(true);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = () => {
    if (!todo) {
    } else if (todo && !isToggleTodo) {
      setTodoList(
        todoList.map((elem) => {
          if (elem.id === editTodo) {
            return {
              ...elem,
              name: todo,
            };
          }
          return elem;
        })
      );
      setIsToggleTodo(true);
      setTodo("");
      setEditTodo(null);
    } else {
      const allTodoData = { id: new Date().getTime().toString(), name: todo };
      setTodoList([...todoList, allTodoData]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    const newTodoList = todoList.filter((todo) => {
      return index !== todo.id;
    });
    setTodoList(newTodoList);
  };

  const updateTodo = (id) => {
    const newUpdatedTodoValue = todoList.find((todo) => {
      return todo.id === id;
    });
    setIsToggleTodo(false);
    setTodo(newUpdatedTodoValue.name);
    setEditTodo(id);
  };

  return (
    <div className="Todo--container">
      <div className="input-wrapper">
        <input
          className="form-input"
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="todo-button" onClick={addTodo}>
          {isToggleTodo ? "Add Todo" : "Update Todo"}
        </button>
      </div>
      {todoList?.length > 0 ? (
        <div className="todo-list">
          {todoList.map((todo) => (
            <div className="todo" key={todo.id}>
              <div className="text-container">
                <span>{todo.name}</span>
              </div>
              <div className="button-container">
                <span
                  className="edit-button"
                  onClick={() => {
                    updateTodo(todo.id);
                  }}
                >
                  <img src={editImage} width="20" alt="Edit Icon" />
                </span>
                <span
                  className="delete-button"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  <img src={deleteImage} width="20" alt="Delete Icon" />
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No Task Found</p>
        </div>
      )}
    </div>
  );
};
export default Todo;
