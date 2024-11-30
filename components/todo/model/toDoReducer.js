import { ACTIONS } from "../constans";

function newToDo({ name }) {
  return { id: Date.now(), name: name, complete: false, isEdit: false };
}

export function toDoReducer(todoState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      return {
        ...todoState,
        todos: [...todoState.todos, newToDo({ name: action.payload.name })],
      };
    }
    case ACTIONS.TOGGLE_TODO: {
      return {
        ...todoState,
        todos: todoState.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        }),
      };
    }
    case ACTIONS.RM_TODO: {
      return {
        ...todoState,
        todos: todoState.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case ACTIONS.CHANGE_TODO: {
      return {
        ...todoState,
        todos: todoState.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, name: action.payload.name };
          } else {
            return todo;
          }
        }),
      };
    }
    case ACTIONS.TOGGLE_EDIT: {
      return {
        ...todoState,
        todos: todoState.todos.map((todo) => {
          if (todo.complete) return todo;
          if (todo.id === action.payload.id) {
            return { ...todo, isEdit: !todo.isEdit };
          } else {
            return todo;
          }
        }),
      };
    }
    case ACTIONS.CHANGE_SORT_METHOD: {
      return {
        ...todoState,
        sortMethod: { ...action.payload.sortMethod },
        todos: sortTodos(todoState.todos, action.payload.sortMethod.id),
      };
    }
    default:
      return todoState;
  }
}

function sortTodos(todos, sortMethodId) {
  switch (sortMethodId) {
    case 1:
      return [...todos].sort((a, b) => a.id - b.id);
    case 2:
      return [...todos].sort((a) => (a.complete ? 1 : -1));
    case 3:
      return [...todos].sort((a) => (a.complete ? -1 : 1));
    default:
      console.log("error sortTodos");
      return todos;
  }
}
