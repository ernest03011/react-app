import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function CreateTodo({ onAddTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    if (value.trim() === "") return;
    onAddTodo(value);
    setValue("");
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="">
        <h3>This is a Todo List APP</h3>

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
