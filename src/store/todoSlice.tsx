import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../type/Todo";

type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        complete: false,
      });
    },
    todoRemove(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      state.list = state.list.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, toggleTodo, todoRemove } = todoSlice.actions;
export default todoSlice.reducer;
