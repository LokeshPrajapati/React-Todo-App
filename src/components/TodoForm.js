const TodoForm = ({ todo, setTodo, addTodo }) => {
  return (
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
        Add Todo
      </button>
    </div>
  );
};
export default TodoForm;
