import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

// Create store-: main memory

//This creates the Redux store – the main memory of app.

const appStore = configureStore({
  reducer: {
    user: userReducer, 
    //I want to store user data using userReducer (which comes from userSlice.jsx

    movies: moviesReducer,

    gpt: gptReducer,
    config: configReducer,
  },
});


//store is ready to remember the user data like name, email, etc.

export default appStore;
