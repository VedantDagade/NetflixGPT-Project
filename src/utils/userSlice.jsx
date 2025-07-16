import { createSlice } from "@reduxjs/toolkit";

// Initial state for user slice (null = no user logged in)
const initialState = null;    // No user initially//

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set user object (usually after login/signup)

    //Adduser -: saves user info when they log in
    addUser: (state, action) => {
      return action.payload; // action.payload = { name: "Vedant", email: "..." }
    },

    //removeUser -: clears the user info on logout
    // Action to clear user data (logout)
    removeUser: () => {
      return null;
    },
  },
});

// Export actions to use in components
export const { addUser, removeUser } = userSlice.actions;

// Export reducer to use in store
export default userSlice.reducer;
