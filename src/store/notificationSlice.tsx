import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type NotificationState = {
  text: string;
};

const initialState: NotificationState = {
  text: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action: PayloadAction<string>) {
      state.text = action.payload;
      setTimeout(() => {
        state.text = "";
      }, 5000);
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
