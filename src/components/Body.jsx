import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";

const BodyContent = () => (
  <div className="bg-red-600 p-4">
    <h2>This is the default Body route</h2>
    <Outlet />
  </div>
);

//
const appRouter = createBrowserRouter([
  { path: "/", element: <BodyContent /> },
  { path: "/login", element: <Login /> },
  { path: "/header", element: <Header /> },
  { path: "/browse", element: <Browse /> },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
