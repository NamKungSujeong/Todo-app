import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ todo, deleteTodo, todoNum }) => {
  const { id, done } = todo;
  const [todoItem, setTodoItem] = useState(todo);
  const [readOnly, setReadOnly] = useState(true);
  // const [doneState, setDoneState] = useState(false);
  console.log(todoNum);
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
  const checkboxHandler = (e) => {
    // rest: id, done 정보
    const { done, ...rest } = todoItem;

    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };

  return (
    <div className="Todo">
      {todoNum !== 0 ? (
        <div>
          <input
            type="checkbox"
            id={`todo${id}`}
            className="check"
            name={`todo${id}`}
            value={`todo${id}`}
            defaultChecked={done}
            onChange={checkboxHandler}
          ></input>
          <label htmlFor={`todo${id}`}></label>
          <input
            className="inputTodo"
            type="text"
            value={todoItem.title}
            onChange={editEventHandler}
            readOnly={readOnly}
            onClick={offReadOnlyMode}
            onKeyPress={enterKeyEventHandler}
          ></input>
          <button onClick={onDeleteBtnClick}>
            <FontAwesomeIcon icon={faTrashCan} size="2x" />
          </button>
        </div>
      ) : (
        <div> 남은 Todo가 없습니다.</div>
      )}
    </div>
  );
};

export default Todo;
