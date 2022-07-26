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

    setTracksList(state, action) {
      state.trackList = action.payload;
    },

    setSearchTracks(state, action) {
      state.SearchTracks = action.payload;
    },

    setType(state, action) {
      state.type = action.payload;
    },

    setTrackId(state, action) {
      state.trackId = action.payload;
    },
  },
});

export const { setToken, setTracksList, setSearchTracks, setType, setTrackId } =
  slice.actions;
export default slice.reducer;
