import Icon from "@mdi/react";
import {
  mdiCheckboxIntermediate,
  mdiCheckboxBlankOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import EditTodoModal from "./EditTodoModal";

function ListItem({ todo, onToggle, handleDelete, handleEdit }) {
  return (
    <li className="flex">
      <Icon
        onClick={onToggle}
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
      <EditTodoModal handleEdit={handleEdit} todo={todo}></EditTodoModal>
      <Icon
        className="inline"
        size={1}
        path={mdiTrashCanOutline}
        onClick={handleDelete}
      />
    </li>
  );
}

export default ListItem;
