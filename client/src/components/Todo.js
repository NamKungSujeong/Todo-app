const Todo = ({ todo }) => {
  const { id, title, done } = todo;
  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
      ></input>
      <label htmlFor={`todo${id}`}>{title}</label>
    </div>
  );
};

export default Todo;
