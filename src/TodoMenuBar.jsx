import { useEffect, useState } from "react";

function TodoMenuBar({ todos, setTodos, setFilter }) {
  const [itemsLeft, setItemsLeft] = useState(0);

  useEffect(() => {
    let counter = 0;
    todos.forEach((todo) => {
      if (todo.complete === false) {
        counter += 1;
      }
    });

    setItemsLeft(counter);
  }, [todos]);

  function deleteCompletedTodos() {
    const inCompletedTodos = todos.filter((todo) => !todo.complete);

    setTodos(inCompletedTodos);
  }

  function applyFilter(filter) {
    setFilter(filter);
  }

  return (
    <>
      <ul>
        <li>{itemsLeft} items left</li>
      </ul>
      <ul>
        <li
          onClick={() => {
            applyFilter("all");
          }}
          className="cursor"
        >
          All
        </li>
        <li
          onClick={() => {
            applyFilter("active");
          }}
          className="cursor"
        >
          Active
        </li>
        <li
          onClick={() => {
            applyFilter("completed");
          }}
          className="cursor"
        >
          Completed
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={deleteCompletedTodos}>Clear Completed</button>
        </li>
      </ul>
    </>
  );
}

export default TodoMenuBar;
