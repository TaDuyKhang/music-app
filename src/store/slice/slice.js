import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Slice {
//   token: string;
// }

// const initialState = { token: "" };

const slice = createSlice({
  name: "slice",
  initialState: {
    token: "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = slice.actions;
export default slice.reducer;
