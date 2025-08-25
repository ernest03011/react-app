import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCheckboxIntermediate, mdiCheckboxBlankOutline } from "@mdi/js";
import { CreateTodo } from "./CreateTodo.jsx";

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy groceries", complete: false },
    { name: "Clean the house", complete: true },
    { name: "Finish project report", complete: false },
    { name: "Call the bank", complete: true },
    { name: "Read a book", complete: false },
  ]);

  // Add an X icon to delete TODO
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

  function handleAddTodo(todo) {
    setTodos([...todos, { name: todo, complete: false }]);
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
