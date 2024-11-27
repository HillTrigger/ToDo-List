import { useState } from "react";
import { ToDoInput } from "./ui/ToDoInput";
import { ToDoLayout } from "./ui/ToDoLayout";
import { ToDoTitle } from "./ui/ToDoTitle";
import { handleChangeInput } from "./model/handleChangeInput";
import { handleSubmitInput } from "./model/handleSubmitInput";

export function ToDo() {
  const [textInput, setTextInput] = useState("");

  return (
    <ToDoLayout>
      <ToDoTitle title="ToDo" />
      <ToDoInput
        onSubmit={(e) => handleSubmitInput({ e })}
        onChange={(e) => handleChangeInput({ e, setTextInput })}
        textInput={textInput}
      />
    </ToDoLayout>
  );
}
