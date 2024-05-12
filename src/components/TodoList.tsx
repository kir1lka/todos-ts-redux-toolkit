import { useAppSelector } from "../hooks";
import { useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { useAppDispatch } from "../hooks";
import { fetchTodos } from "../store/todoSlice";

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

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
