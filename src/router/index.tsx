import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/other",
        element: <div>other</div>,
      },
    ],
  },
]);

export default router;
