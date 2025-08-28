import ListItem from "./ListItem";
import TodoMenuBar from "./TodoMenuBar";

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

  function handleEdit(todo, newTaskName) {
    setTodos(
      todos.map((value) => {
        console.log("We are editing!");
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
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleToggle(todo)}
            handleDelete={() => handleDelete(todo)}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      <TodoMenuBar todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default List;
