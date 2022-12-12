import { useState } from "react";
import Todo from "./components/Todo";

function App() {
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

  return (
    <div className="App">
      {todoItems.map((todo) => {
        console.log(todo.title);
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;
