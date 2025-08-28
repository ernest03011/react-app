import { useEffect } from "react";
import { useState } from "react";

function TodoMenuBar({ todos, setTodos }) {
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

  return (
    <>
      <ul>
        <li>{itemsLeft} items left</li>
      </ul>
      <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
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
