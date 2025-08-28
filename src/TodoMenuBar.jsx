import { useEffect } from "react";
import { useState } from "react";

function TodoMenuBar({ todos, handleDelete }) {
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
          <button>Clear Completed</button>
        </li>
      </ul>
    </>
  );
}

export default TodoMenuBar;
