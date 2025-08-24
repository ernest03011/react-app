import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function CreateTodo() {
  return (
    <div className="flex items-center justify-center">
      <Card className="">
        <h3>This is a Todo List APP</h3>

        <div>
          <Input type="text" placeholder="Create a new TODO" />
          <Button
            type="submit"
            variant="outline"
            className="text-gray-50 hover:text-gray-50"
          >
            Add TODO
          </Button>
        </div>
      </Card>
    </div>
  );
}
