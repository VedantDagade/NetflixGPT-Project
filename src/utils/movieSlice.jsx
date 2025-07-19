import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name: "movies",

  initialState: {
    trendingMovies: null,
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    upComingMovies: null,
    topRatedMovies: null,
  },

  reducers: {
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});


export const { addNowPlayingMovies , addTrendingMovies , addPopularMovies , addTrailerVideo , addUpcomingMovies , addTopRatedMovies} = movieSlice.actions;



export default movieSlice.reducer;