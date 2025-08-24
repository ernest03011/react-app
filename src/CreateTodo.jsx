import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CreateTodo() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="text" placeholder="Create a new TODO" />
      <Button type="submit" variant="outline">
        Add TODO
      </Button>
    </div>
  );
}
