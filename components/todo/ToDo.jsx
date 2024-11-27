import { ToDoInput } from "./ui/ToDoInput";
import { ToDoLayout } from "./ui/ToDoLayout";
import { ToDoTitle } from "./ui/ToDoTitle";

export function ToDo() {
  return (
    <ToDoLayout>
      <ToDoTitle />
      <ToDoInput />
    </ToDoLayout>
  );
}
