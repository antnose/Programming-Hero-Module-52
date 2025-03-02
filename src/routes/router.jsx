import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
