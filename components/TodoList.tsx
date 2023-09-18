import TodoItem from "./TodoItem";
import ITodo from "../app/data";

interface ITodoListProps {
  items: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  return (
    <div>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
export default TodoList;
