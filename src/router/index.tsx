import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import Grocery from "@/pages/Grocery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/grocery",
        element: <Grocery />,
      },
    ],
  },
]);

export default router;
