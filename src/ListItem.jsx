import Icon from "@mdi/react";
import { mdiCheckboxIntermediate, mdiCheckboxBlankOutline } from "@mdi/js";

function ListItem({ todo, onToggle }) {
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
    </li>
  );
}

export default ListItem;
