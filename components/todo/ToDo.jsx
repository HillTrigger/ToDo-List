import { useReducer, useState } from "react";
import { ToDoInput } from "./ui/ToDoInput";
import { ToDoLayout } from "./ui/ToDoLayout";
import { ToDoTitle } from "./ui/ToDoTitle";
import { handleChangeInput } from "./model/handleChangeInput";
import { toDoReducer } from "./model/todoReducer";
import { ToDoPoint } from "./ui/ToDoPoint";
import { ACTIONS } from "./constans";
import { handleSubmitInput } from "./model/handleSubmitInput";

export function ToDo() {
  const [textInput, setTextInput] = useState("");
  const [todos, dispatch] = useReducer(toDoReducer, []);

  return (
    <ToDoLayout>
      <ToDoTitle title="ToDo" />
      <ToDoInput
        onSubmit={(e) => handleSubmitInput({ e, dispatch, setTextInput })}
        onChange={(e) => handleChangeInput({ e, setTextInput })}
        textInput={textInput}
        placeholder="Введите задачу..."
      />
      {todos?.map((todo) => {
        return (
          <ToDoPoint
            removeBtn={(e) =>
              dispatch({ type: ACTIONS.RM_TODO, payload: { id: todo.id } })
            }
            toggleBtn={(e) =>
              dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
            }
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </ToDoLayout>
  );
}
