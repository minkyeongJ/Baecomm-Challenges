import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import "./index.css";
import ProductDetail from "./pages/ProductDetail";
import { loader as productListLoader } from "./hooks/useProductList";
import { loader as productDetailLoader } from "./hooks/useProductDetail";
import ProductList from "./pages/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductList />,
        loader: productListLoader,
      },
      {
        path: "product/:productId",
        element: <ProductDetail />,
        loader: productDetailLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
