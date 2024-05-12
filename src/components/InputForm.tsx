import { useEffect, useRef, useState } from "react";

//redux
import { useAppDispatch } from "../hooks";
import { addTodo } from "../store/todoSlice";

interface InputFormProps {
  setNotification: (str: string) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ setNotification }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    setError(false);
    if (value.trim().length >= 5) {
      dispatch(addTodo(value));
      inputRef.current?.focus();
      setValue("");
      setError(false);
    } else {
      setNotification("Надо ввести как минимум 5 символов!");
      setError(true);
    }
  };

  return (
    <>
      <input
        type="text"
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Задача..."
        className=" w-80 mr-4 bg-white  border-2 border-gray-300 px-4 py-2 mb-4 box-border text-sm  rounded-lg focus:outline-2 focus:outline-violet-500 "
        style={{ borderColor: error ? "red" : "#d2d5da" }}
      />
      <button
        onClick={handleAddTodo}
        className="py-2 px-4 border-2 border-violet-600  rounded-md font-semibold bg-violet-500 text-white hover:bg-violet-600 hover:text-white  transition-all duration-200 mb-4"
      >
        Добавить
      </button>
    </>
  );
};
