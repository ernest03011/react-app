import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCheckboxIntermediate, mdiCheckboxBlankOutline } from "@mdi/js";
import { CreateTodo } from "./CreateTodo.jsx";
// import { mdiCheckboxIntermediate } from "@mdi/js";

function App() {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { name: "Buy groceries", complete: false },
    { name: "Clean the house", complete: true },
    { name: "Finish project report", complete: false },
    { name: "Call the bank", complete: true },
    { name: "Read a book", complete: false },
  ]);

  let todoItem = todos.map((todo, index) => (
    <li key={index}>
      <Icon
        onClick={() => {
          setTodos(
            todos.map((value, i) => {
              return i === index
                ? { ...value, complete: !value.complete }
                : value;
            })
          );
        }}
        data-todo-status={todo.complete}
        className="inline"
        path={
          todo.complete === true
            ? mdiCheckboxIntermediate
            : mdiCheckboxBlankOutline
        }
        size={1}
      />
      {todo.name}
    </li>
  ));

  return (
    <>
      <CreateTodo />
      <ul>{todoItem}</ul>
    </>
  );
}

export default App;
