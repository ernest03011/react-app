import { useState } from "react";
import { CreateTodo } from "./CreateTodo.jsx";
import List from "./List.jsx";

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy groceries", complete: false, id: crypto.randomUUID() },
    { name: "Clean the house", complete: true, id: crypto.randomUUID() },
    { name: "Finish project report", complete: false, id: crypto.randomUUID() },
    { name: "Call the bank", complete: true, id: crypto.randomUUID() },
    { name: "Read a book", complete: false, id: crypto.randomUUID() },
  ]);

  return (
    <>
      {/* A heading */}
      <CreateTodo todos={todos} setTodos={setTodos} />
      {/* <ul>{todoItem}</ul> */}
      <List todos={todos} setTodos={setTodos} />
      {/* I can also add a section or component or part of the Todo that display the completed todos or like a visitbility option to show only 
      completed or not completed  */}
      {/* Add an status Bar component with a list of the items left to be completed, a sorting option with all, active, completed, and a button to delete all completed TODOs */}
    </>
  );
}

export default App;
