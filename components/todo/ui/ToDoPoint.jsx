import { formatDate } from "../model/formatDate";

export function ToDoPoint({ todo, onClick }) {
  return (
    <div className="flex text-3xl items-center w-[500px] justify-between">
      <div>
        <h2>{todo.name}</h2>
        <p className="text-xs text-gray-400">{formatDate(todo.id)}</p>
      </div>
      <CompleteIcon onClick={onClick} complete={todo.complete} />
    </div>
  );
}

function CompleteIcon({ onClick, complete = false }) {
  if (complete) {
    return (
      <button
        onClick={(e) => onClick(e)}
        className="inline-flex items-center h-8 gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3 w-3"
        >
          <path
            fill-rule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clip-rule="evenodd"
          />
        </svg>
        complete
      </button>
    );
  } else {
    return (
      <button
        onClick={(e) => onClick(e)}
        className="flex items-center h-8 gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3 w-3"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
        Proceced
      </button>
    );
  }
}
