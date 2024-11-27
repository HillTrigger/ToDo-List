import { formatDate } from "../model/formatDate";

export function ToDoPoint({ todo, toggleBtn, removeBtn }) {
  return (
    <div className="flex items-center w-[32rem] justify-between rounded bg-gray-50 px-8 py-6">
      <div>
        <h2 className="text-gray-800 text-2xl">{todo.name}</h2>
        <p className="text-sm text-gray-500">{formatDate(todo.id)}</p>
      </div>
      <div className="flex gap-2">
        <CompleteIcon onClick={toggleBtn} complete={todo.complete} />
        <RemoveBtn onClick={removeBtn} />
      </div>
    </div>
  );
}

function RemoveBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center h-8 w-8 p-2 rounded-full text-xs font-semibold text-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
      </svg>
    </button>
  );
}

function CompleteIcon({ onClick, complete = false }) {
  if (complete) {
    return (
      <button
        onClick={(e) => onClick(e)}
        className="inline-flex items-center h-8 gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-600"
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
        className="flex items-center h-8 gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600"
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
