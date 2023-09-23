import ITodo from "../app/data";
interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;

  return (
    <div className="flex flex-row justify-between items-center">
      <input
        className="m-2"
        key={id}
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span className="bg-slate-400 p-1 rounded-md">{title}</span>

      <button
        type="button"
        onClick={() => removeTodo(id)}
        className=" m-2 p-1 bg-cyan-400 rounded-lg"
      >
        delete
      </button>
    </div>
  );
};

export default TodoItem;
