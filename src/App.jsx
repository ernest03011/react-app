import { useState } from "react";

import { CreateTodo } from "./CreateTodo.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { name: "Buy groceries", complete: false },
    { name: "Clean the house", complete: true },
    { name: "Finish project report", complete: false },
    { name: "Call the bank", complete: true },
    { name: "Read a book", complete: false },
  ]);

  let todoItem = todos.map((todo, index) => <li key={index}>{todo.name}</li>);

  return (
    <>
      <CreateTodo />
      <ul>{todoItem}</ul>
    </>
  );
}

export default App;
