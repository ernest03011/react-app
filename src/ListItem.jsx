import Icon from "@mdi/react";
import {
  mdiCheckboxIntermediate,
  mdiCheckboxBlankOutline,
  mdiTrashCanOutline,
} from "@mdi/js";

function ListItem({ todo, onToggle, handleDelete }) {
  return (
    <li>
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
      <Icon
        path={mdiTrashCanOutline}
        className="inline"
        size={1}
        onClick={handleDelete}
      />
    </li>
  );
}

export default ListItem;
