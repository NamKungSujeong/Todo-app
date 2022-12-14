import { useState, useRef } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddTodo = ({ add, todoNum }) => {
  // 사용자 입력을 받아올 객체
  // (id, title, done에 대한 정보를 저장해야해서 객체 형태로!!)
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const refInputs = useRef();

  const buttonClick = () => {
    // props로 받아온 addItem 함수 실행
    if (todoItem.title.trim().length === 0) {
      refInputs.current.focus();
      return;
    }
    add(todoItem);
    setTodoItem({ title: "" }); // input 초기화
  };

  // enter
  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      buttonClick();
    }
  };

  return (
    <div>
      <div className="AddTodo">
        <input
          ref={refInputs}
          type="text"
          placeholder="Add your new Todo"
          value={todoItem.title}
          onChange={(e) => setTodoItem({ title: e.target.value })}
          onKeyPress={onEnterKeyPress}
          autoFocus
        ></input>
        <button type="button" onClick={buttonClick}>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
