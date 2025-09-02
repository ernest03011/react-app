import Icon from "@mdi/react";
import {
  mdiCheckboxIntermediate,
  mdiCheckboxBlankOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import EditTodoModal from "./EditTodoModal";

function ListItem({ todo, onToggle, handleDelete, handleEdit }) {
  return (
    <li className="flex justify-items-start">
      <Icon
        onClick={onToggle}
        data-todo-status={todo.complete}
        className="inline mr-2"
        path={
          todo.complete === true
            ? mdiCheckboxIntermediate
            : mdiCheckboxBlankOutline
        }
        size={1}
      />
      <span className="mr-4">{todo.name}</span>
      <span className="flex">
        <EditTodoModal handleEdit={handleEdit} todo={todo}></EditTodoModal>
        <Icon
          className="inline"
          size={1}
          path={mdiTrashCanOutline}
          onClick={handleDelete}
        />
      </span>
    </li>
  );
}

export default ListItem;
