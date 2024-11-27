export function ToDoLayout({ children }) {
  return (
    <div className="flex flex-col gap-4 items-center pt-5 pb-5 bg-gray-200 h-full">
      {children}
    </div>
  );
}
