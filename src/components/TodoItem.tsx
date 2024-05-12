import { useAppDispatch } from "../hooks";
import { todoRemove } from "../store/todoSlice";
import { toggleTodo } from "../store/todoSlice";
import { Todo } from "../type/Todo";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex py-2  items-center w-80  bg-white  border-b-2 border-gray-300  mb-4 box-border text-sm   focus:outline-2 focus:outline-violet-500 animated fadeInDown">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="mr-3 w-5 h-5 accent-purple-600  bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
      />
      <div
        className=" w-full mr-3 inline-block font-semibold text-base"
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        {todo.title}
      </div>
      <button
        onClick={() => dispatch(todoRemove(todo.id))}
        className="py-1 px-2.5  rounded-md font-semibold bg-red-500 text-white hover:bg-red-600 hover:text-white  transition-all duration-200 "
      >
        &times;
      </button>
    </div>
  );
};
