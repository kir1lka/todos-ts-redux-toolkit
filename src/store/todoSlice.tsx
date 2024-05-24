import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../type/Todo";

type TodosState = {
  list: Todo[];
  loading: boolean;
  error: string | null | undefined;
};

const initialState: TodosState = {
  list: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    todoRemove(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      state.list = state.list.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, toggleTodo, todoRemove } = todoSlice.actions;
export default todoSlice.reducer;
