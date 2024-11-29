"use client";

import { useReducer, useState } from "react";
import { ToDoInput } from "./ui/ToDoInput";
import { ToDoLayout } from "./ui/ToDoLayout";
import { ToDoTitle } from "./ui/ToDoTitle";
import { handleChangeInput } from "./model/handleChangeInput";
import { toDoReducer } from "./model/todoReducer";
import { ToDoPoint } from "./ui/ToDoPoint";
import { handleSubmitInput } from "./model/handleSubmitInput";
import { UiSelect } from "../uikit/fields/UiSelect";
import { TodosLayout } from "./ui/TodosLayout";
import { ACTIONS } from "./constans";

export function ToDo() {
  const [textInput, setTextInput] = useState("");
  const [todoState, dispatch] = useReducer(toDoReducer, {
    todos: [],
    sortMethod: null,
  });

  return (
    <ToDoLayout>
      <ToDoTitle title="ToDo" />
      <ToDoInput
        onSubmit={(e) => handleSubmitInput({ e, dispatch, setTextInput })}
        onChange={(e) => handleChangeInput({ e, setTextInput })}
        textInput={textInput}
        placeholder="Введите задачу..."
      />
      {/* <UiSelect
        settings={[
          { id: 1, name: "Ближайшие" },
          { id: 2, name: "Невыполнены" },
          { id: 3, name: "Завершены" },
        ]}
      /> */}

      <TodosLayout>
        {todoState.todos?.map((todo) => {
          return (
            <ToDoPoint
              changeInput={(e) =>
                dispatch({
                  type: ACTIONS.CHANGE_TODO,
                  payload: { id: todo.id, name: e.target.value },
                })
              }
              removeBtn={() =>
                dispatch({ type: ACTIONS.RM_TODO, payload: { id: todo.id } })
              }
              toggleBtn={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
              toggleEdit={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_EDIT,
                  payload: { id: todo.id },
                })
              }
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </TodosLayout>
    </ToDoLayout>
  );
}
