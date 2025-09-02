import Icon from "@mdi/react";
import { mdiBookEditOutline } from "@mdi/js";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

export function EditTodoModal({ handleEdit, todo }) {
  const [value, setValue] = useState(todo.name);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setValue(todo.name);
  }, [todo]);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") return;

    handleEdit(todo, value);
    setValue("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className="inline">
          <Icon
            path={mdiBookEditOutline}
            size={1}
            onClick={() => {
              setOpen(true);
            }}
          />
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-4">
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>Edit the task name</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mb-6">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="text-gray-400 hover:text-gray-200"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditTodoModal;
