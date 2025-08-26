import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiCheckboxIntermediate, mdiCheckboxBlankOutline } from "@mdi/js";
import { CreateTodo } from "./CreateTodo.jsx";

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy groceries", complete: false, id: crypto.randomUUID() },
    { name: "Clean the house", complete: true, id: crypto.randomUUID() },
    { name: "Finish project report", complete: false, id: crypto.randomUUID() },
    { name: "Call the bank", complete: true, id: crypto.randomUUID() },
    { name: "Read a book", complete: false, id: crypto.randomUUID() },
  ]);

  // Add an X icon to delete TODO
  let todoItem = todos.map((todo) => (
    <li key={todo.id}>
      <Icon
        onClick={() => {
          setTodos(
            todos.map((value) => {
              return todo.id === value.id
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

  function handleAddTodo(todo) {
    setTodos([
      ...todos,
      { name: todo, complete: false, id: crypto.randomUUID() },
    ]);
  }

  return (
    <>
      <CreateTodo onAddTodo={handleAddTodo} />
      <ul>{todoItem}</ul>
      {/* I can also add a section or component or part of the Todo that display the completed todos or like a visitbility option to show only 
      completed or not completed  */}
      {/* Add a button to delete all TODOs */}
    </>
  );
}

export default App;
