import React, { useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";



// Component for common layout
const BodyContent = () => (
  <div className="bg-red-600 p-4">
    <h2>This is the default Body route</h2>
    <Outlet />
  </div>
);

// 👇 Define routes outside of component (this is fine)
const appRouter = createBrowserRouter([
  { path: "/", element: <BodyContent /> },
  { path: "/login", element: <Login /> },
  { path: "/header", element: <Header /> },
  { path: "/browse", element: <Browse /> },
]);




// ✅ Main Component
const Body = () => {
  const dispatch = useDispatch(); // ✅ Move hook inside component
   
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //it listens to Firebase to check if someone is logged in.
        const { uid, email, displayName } = user; //Hey Redux, please addUser this data

        dispatch(addUser({ uid, email, displayName }));

      } else {
        //If no one is logged in
        dispatch(removeUser()); //Hey Redux, removeUser
      }
    });

    return () => unsubscribe(); // Cleanup
  }, [dispatch]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
