import Icon from "@mdi/react";
import { mdiCheckboxIntermediate, mdiCheckboxBlankOutline } from "@mdi/js";

function List({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
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
      ))}
    </ul>
  );
}

export default List;
