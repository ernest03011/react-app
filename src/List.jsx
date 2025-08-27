import ListItem from "./ListItem";

function List({ todos, setTodos }) {
  function handleToggle(todo) {
    setTodos(
      todos.map((value) => {
        return todo.id === value.id
          ? { ...value, complete: !value.complete }
          : value;
      })
    );
  }

  function handleDelete(todo) {
    setTodos(todos.filter((value) => value.id !== todo.id));
  }

  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          onToggle={() => handleToggle(todo)}
          handleDelete={() => handleDelete(todo)}
        />
      ))}
    </ul>
  );
}

export default List;
