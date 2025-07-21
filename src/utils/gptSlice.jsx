import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
    addGptMovieResult: (state , action) => {
      const {movieNames , movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;

    }
  },
});


export const { toggleGptSearchView , setGptSearch , addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;
