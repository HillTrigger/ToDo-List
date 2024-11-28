import { ACTIONS } from "../constans";

function newToDo({ name }) {
  return { id: Date.now(), name: name, complete: false };
}

export function toDoReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      const todo = action.payload;
      return [...todos, newToDo({ name: todo.name })];
    }
    case ACTIONS.TOGGLE_TODO: {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log(todo.complete);
          return { ...todo, complete: !todo.complete };
        } else {
          console.log(todo.complete);
          return { ...todo };
        }
      });
    }
    case ACTIONS.RM_TODO: {
      console.log("delete");
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    case ACTIONS.CHANGE_TODO: {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        } else {
          return { ...todo };
        }
      });
    }

    default:
      return todos;
  }
}
