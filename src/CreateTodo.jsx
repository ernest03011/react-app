import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
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
    <div className="flex items-center justify-center mb-2">
      <Card className="">
        <form onSubmit={handleSubmit}>
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
      </Card>
    </div>
  );
}
