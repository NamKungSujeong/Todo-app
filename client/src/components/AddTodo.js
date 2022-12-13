import { useState } from "react";

const AddTodo = ({ add }) => {
  // 사용자 입력을 받아올 객체
  // (id, title, done에 대한 정보를 저장해야해서 객체 형태로!!)
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const buttonClick = () => {
    // props로 받아온 addItem 함수 실행
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
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={onEnterKeyPress}
      ></input>
      <button type="button" onClick={buttonClick}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
