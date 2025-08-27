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

  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          onToggle={() => handleToggle(todo)}
        />
      ))}
    </ul>
  );
}

export default List;
