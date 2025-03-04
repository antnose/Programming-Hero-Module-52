import { createBrowserRouter, Navigate } from "react-router";
import Home from "../layouts/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01" />,
      },
      {
        path: `category/:id`,
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/login",
    element: <h1>Login Now</h1>,
  },
  {
    path: "*",
    element: <h1>Error!</h1>,
  },
]);

export default router;
