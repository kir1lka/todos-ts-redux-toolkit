import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchTodos = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>("todos/fetchTodos", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  if (!response.ok) {
    return rejectWithValue("Server error");
  }
  const data = await response.json();
  return data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo(state, action: PayloadAction<string>) {
    //   state.list.push({
    //     id: Date.now(),
    //     title: action.payload,
    //     complete: false,
    //   });
    // },
    // todoRemove(state, action: PayloadAction<number>) {
    //   state.list = state.list.filter((todo) => todo.id !== action.payload);
    // },
    // toggleTodo(state, action: PayloadAction<number>) {
    //   state.list = state.list.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return { ...todo, complete: !todo.complete };
    //     }
    //     return todo;
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { addTodo, toggleTodo, todoRemove } = todoSlice.actions;
export default todoSlice.reducer;
