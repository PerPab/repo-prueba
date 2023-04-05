import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import "./main.css";
import ItemRoot from "./routes/ItemRoot";
import Cart from "./componentes/Cart/Cart";
import CustomContextProvider from "../context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:id",
    element: <App />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <div>Hola mundo</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomContextProvider>
    <RouterProvider router={router} />
    </CustomContextProvider>
  </React.StrictMode>
);
