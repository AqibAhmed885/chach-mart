import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import HomePage from "./_root/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />
      }
    ]
  }
]);

export default router