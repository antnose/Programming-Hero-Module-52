import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/router";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello </div>,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
