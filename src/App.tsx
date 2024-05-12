import { TodoList } from "./components/TodoList";
import { InputForm } from "./components/InputForm";
import { useState } from "react";

// import { useAppSelector } from "./hooks";

export const App: React.FC = () => {
  const [message, setMessage] = useState("");

  const setNotification = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="flex h-screen  justify-center items-center  flex-col">
      <div className="bg-white rounded-lg shadow-lg border-2 p-6 mb-4 mt-2 w-auto animated fadeInDown">
        <InputForm setNotification={setNotification} />
        <TodoList />
      </div>

      {/* error message */}
      {message && (
        <div
          className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-100 animated fadeInDown  "
          role="alert"
        >
          <span className=" font-semibold"> {message}</span>
        </div>
      )}
    </div>
  );
};
