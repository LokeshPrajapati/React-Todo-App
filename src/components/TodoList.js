const TodoList = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <div className="todo-list">
          {list.map((entry, index) => (
            <div className="todo">
              <span key={index}>{entry}</span>
              <button className="delete-button" onClick={remove(entry)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No Task Found</p>
        </div>
      )}
    </>
  );
};
export default TodoList;
