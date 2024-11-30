import { useCallback, useEffect, useReducer, useState } from "react";
import { ACTIONS } from "../constans";
import { useLocalStorage } from "react-use";

function newToDo({ name }) {
  return { id: Date.now(), name: name, complete: false, isEdit: false };
}

const LOCAL_STORAGE_KEY = "todoStateData";

const INITIAL_STATE = {
  todos: [],
  sortMethod: { id: 1, name: "По Дате" },
};

const reducer = (todoState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      const newTodoState = {
        ...todoState,
        todos: [...todoState.todos, newToDo({ name: action.payload.name })],
      };
      // loadDataToLocalStorage(newTodoState);
      return newTodoState;
    }
    case ACTIONS.TOGGLE_TODO: {
      const newTodoState = {
        ...todoState,
        todos: todoState.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        }),
      };
      // loadDataToLocalStorage(newTodoState);
      return newTodoState;
    }
    case ACTIONS.RM_TODO: {
      const newTodoState = {
        ...todoState,
        todos: todoState.todos.filter((todo) => todo.id !== action.payload.id),
      };
      // loadDataToLocalStorage(newTodoState);
      return newTodoState;
    }
    case ACTIONS.CHANGE_TODO: {
      const newTodoState = {
        ...todoState,
        todos: todoState.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, name: action.payload.name };
          } else {
            return todo;
          }
        }),
      };
      // loadDataToLocalStorage(newTodoState);
      return newTodoState;
    }
    case ACTIONS.TOGGLE_EDIT: {
      const newTodoState = {
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
      // loadDataToLocalStorage(newTodoState);
      return newTodoState;
    }
    case ACTIONS.CHANGE_SORT_METHOD: {
      const newTodoState = {
        ...todoState,
        sortMethod: { ...action.payload.sortMethod },
        todos: sortTodos(todoState.todos, action.payload.sortMethod.id),
      };
      // loadDataToLocalStorage(newTodoState);
      return newTodoState;
    }
    default:
      return todoState;
  }
};

export const usePersistReducer = () => {
  const [savedState, saveState] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    INITIAL_STATE
  );

  // Состояние, которое будет устанавливаться только после того, как компонент смонтируется
  const [isClient, setIsClient] = useState(false);

  // Хук useEffect для выполнения кода только на клиенте
  useEffect(() => {
    setIsClient(true);
  }, []);

  const reducerLocalStorage = useCallback(
    (todoState, action) => {
      const newState = reducer(todoState, action);

      // Сохраняем в localStorage только после того, как компонент смонтирован
      if (isClient) {
        saveState(newState);
      }

      return newState;
    },
    [saveState, isClient]
  );

  // Рендерим состояние из localStorage, только если это клиентская среда
  return useReducer(reducerLocalStorage, savedState);
};

// export function initialTodoState() {
//   if (typeof window !== "undefined") {
//     const savedState = window.localStorage.getItem("todoStateData");
//     if (savedState) {
//       try {
//         return JSON.parse(savedState);
//       } catch (e) {
//         console.error("Failed to parse todo state from localStorage", e);
//       }
//     }
//     return {
//       todos: [],
//       sortMethod: { id: 1, name: "По Дате" },
//     };
//   }
// }

function sortTodos(todos, sortMethodId) {
  switch (sortMethodId) {
    case 1:
      return [...todos].sort((a, b) => a.id - b.id);
    case 2:
      return [...todos].sort((a, b) => {
        if (a.complete == b.complete) {
          return a.id - b.id;
        } else {
          return a.complete ? 1 : -1;
        }
      });
    case 3:
      return [...todos].sort((a, b) => {
        if (a.complete == b.complete) {
          return a.id - b.id;
        } else {
          return a.complete ? -1 : 1;
        }
      });
    default:
      console.log("error sortTodos");
      return todos;
  }
}

// function loadDataToLocalStorage(todoState) {
//   try {
//     window.localStorage.setItem("todoStateData", JSON.stringify(todoState));
//   } catch (error) {
//     console.error("Failed to save data to Local Storage:", error);
//   }
// }
