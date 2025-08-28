import { useState } from "react";
import ListItem from "./ListItem";
import TodoMenuBar from "./TodoMenuBar";
import { useMemo } from "react";

function List({ todos, setTodos }) {
  // all, active, completed
  const [filter, setFilter] = useState("all");

  function filterTodos(filter) {
    let filteredTodos = todos.filter((todo) => {
      if (filter === "active") {
        return !todo.complete;
      }

      if (filter === "completed") {
        return todo.complete;
      }

      return todo;
    });

    return filteredTodos;
  }

  const filteredTodos = useMemo(() => filterTodos(filter), [filter]);

  function handleToggle(todo) {
    setTodos(
      todos.map((value) => {
        return todo.id === value.id
          ? { ...value, complete: !value.complete }
          : value;
      })
    );
  }

  function handleEdit(todo, newTaskName) {
    setTodos(
      todos.map((value) => {
        return todo.id === value.id ? { ...value, name: newTaskName } : value;
      })
    );
  }

  function handleDelete(todo) {
    setTodos(todos.filter((value) => value.id !== todo.id));
  }

  return (
    <>
      <ul>
        {filteredTodos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleToggle(todo)}
            handleDelete={() => handleDelete(todo)}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      <TodoMenuBar todos={todos} setTodos={setTodos} />
    </>
  );
}

export default List;
