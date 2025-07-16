import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Body from "./components/Body"; // Contains RouterProvider

//Redux 
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Provider store={appStore}> 
    <Body /> 
   </Provider>
  </StrictMode>
);
