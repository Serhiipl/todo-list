import ITodo from "../app/data";
interface ITodoItem extends ITodo {}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete } = props;

  return (
    <div>
      <input type="checkbox" checked={complete} />
      {title}

      <button type="button">x</button>
    </div>
  );
};

export default TodoItem;
