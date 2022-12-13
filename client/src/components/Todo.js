import { useState } from "react";

const Todo = ({ todo, deleteTodo }) => {
  const { id, title, done } = todo;
  const [todoItem, setTodoItem] = useState(todo);

  const onDeleteBtnClick = () => {
    deleteTodo(todoItem);
  };

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
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
};

export default Todo;
