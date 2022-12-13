import { useState, useRef } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  // const [inputTitle, setTitle] = useState("");
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "My todo1",
      done: false,
    },
    {
      id: 2,
      title: "My todo2",
      done: false,
    },
    {
      id: 3,
      title: "My todo3",
      done: true,
    },
  ]);
  const todoId = useRef(4);

  const add = (newTodo) => {
    newTodo.id = todoId.current++;
    newTodo.done = false;
    setTodoItems([...todoItems, newTodo]);
  };

  const deleteTodo = (targetTodo) => {
    let result = todoItems.filter((todo) => todo.id !== targetTodo.id);
    setTodoItems(result);
    // console.log(targetTodo);
  };

  return (
    <div className="App">
      <AddTodo add={add} />
      {todoItems.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default App;
