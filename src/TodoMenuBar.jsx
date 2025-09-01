import { useEffect, useState } from "react";

function TodoMenuBar({ todos, setTodos, filter, setFilter }) {
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

  function applyFilter(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div className="grid sm:grid-cols-12 gap-2">
      <ul className="col-span-2">
        <li>{itemsLeft} items left</li>
      </ul>
      <ul className="flex col-span-8 gap-2">
        <li
          onClick={() => {
            applyFilter("all");
          }}
          className={` ${
            filter == "all" ? "text-blue-950 font-bold" : ""
          } cursor hover:text-blue-950 hover:font-bold`}
        >
          All
        </li>
        <li
          onClick={() => {
            applyFilter("active");
          }}
          className={` ${
            filter == "active" ? "text-blue-950 font-bold" : ""
          } cursor hover:text-blue-950 hover:font-bold`}
        >
          Active
        </li>
        <li
          onClick={() => {
            applyFilter("completed");
          }}
          className={` ${
            filter == "completed" ? "text-blue-950 font-bold" : ""
          } cursor hover:text-blue-950 hover:font-bold`}
        >
          Completed
        </li>
      </ul>
      <ul className="col-span-2">
        <li>
          <button onClick={deleteCompletedTodos}>Clear Completed</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoMenuBar;
