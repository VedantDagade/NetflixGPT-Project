import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
  },
});


export const { toggleGptSearchView , setGptSearch} = gptSlice.actions;

export default gptSlice.reducer;
