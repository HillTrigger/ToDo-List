export function ToDoInput({ textInput, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <input
        onChange={onChange}
        type="text"
        value={textInput}
        className="border-black border"
      />
    </form>
  );
}
