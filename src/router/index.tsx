import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Entry from "@/pages/Entry";
import ErrorPage from "@/pages/ErrorPage";
import Grocery from "@/pages/Grocery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Entry />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
    ],
  },
]);

export default router;
