import { useAppSelector } from "../hooks";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      {todos.length === 0 && (
        <div className="flex font-semibold">
          Нет задач? <p className=" ml-1 text-violet-500 "> Отдыхаем</p>
        </div>
      )}
    </>
  );
};
