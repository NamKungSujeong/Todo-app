import { useState } from "react";

const Todo = ({ todo, deleteTodo }) => {
  const { id, title, done } = todo;
  const [todoItem, setTodoItem] = useState(todo);
  const [readOnly, setReadOnly] = useState(true);
  // const [doneState, setDoneState] = useState(false);

  const onDeleteBtnClick = () => {
    deleteTodo(todoItem);
  };

  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  // title input 커서가 깜박인다고 수정이 가능한 것은 아님
  // 사용자가 키보드 입력할 때마다 todoItem의 title을 새 값으로 변경
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem;

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // checkbox 업데이트
  // done: true -> false , false ->
  const editDoneHandler = () => {
    // rest: id, done 정보
    const { done, ...rest } = todoItem;

    setTodoItem({
      done: !todoItem.done,
      ...rest,
    });
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onChange={editDoneHandler}
      ></input>
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        onChange={editEventHandler}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
      ></input>
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
};

export default Todo;
