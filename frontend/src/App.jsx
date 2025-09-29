import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens/Screen";


const router = createBrowserRouter([
  {
    path: "/*",
    element: <Screen />,
  },
  {
    path: "/mainScreen",
    element: <Screen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
