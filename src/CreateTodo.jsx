import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function CreateTodo({ todos, setTodos }) {
  const [value, setValue] = useState("");

  function handleAddTodo(todo) {
    setTodos([
      ...todos,
      { name: todo, complete: false, id: crypto.randomUUID() },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value.trim() === "") return;

    handleAddTodo(value);
    setValue("");
  }

  return (
    <div className="mb-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-2 flex-col"
      >
        <Input
          type="text"
          name="todo"
          value={value}
          placeholder="Create a new TODO"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          type="submit"
          variant="outline"
          className="text-gray-50 hover:text-gray-50"
        >
          Add TODO
        </Button>
      </form>
    </div>
  );
}
