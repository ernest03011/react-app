import { useState, useEffect } from "react";
import { CreateTodo } from "./CreateTodo.jsx";
import List from "./List.jsx";
import Heading from "./Heading.jsx";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    const initialTodos = JSON.parse(savedTodos);
    return initialTodos || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-white px-10 py-10 rounded-3xl flex items-center justify-center flex-col max-w-90 m-auto">
      <Heading>
        <h1 className="mb-6 italic font-bold">Your Todo App</h1>
      </Heading>

      <CreateTodo todos={todos} setTodos={setTodos} />

      <List todos={todos} setTodos={setTodos} />
      {/* I can also add a section or component or part of the Todo that display the completed todos or like a visitbility option to show only 
      completed or not completed  */}
      {/* Add an status Bar component with a list of the items left to be completed, a sorting option with all, active, completed, and a button to delete all completed TODOs */}
    </div>
  );
}

export default App;
