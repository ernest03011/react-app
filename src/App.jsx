import { useState, useEffect } from "react";
import { CreateTodo } from "./CreateTodo.jsx";
import List from "./List.jsx";
import Heading from "./Heading.jsx";
import TodoMenuBar from "./TodoMenuBar";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    const initialTodos = JSON.parse(savedTodos);
    return initialTodos || [];
  });
  // all, active, completed
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-white px-10 py-10 rounded-3xl flex items-center justify-center flex-col">
      <Heading>
        <h1 className="mb-12 italic font-bold text-center">Your Todo App</h1>
      </Heading>

      <CreateTodo todos={todos} setTodos={setTodos} />

      <List todos={todos} setTodos={setTodos} filter={filter} />

      <TodoMenuBar
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
