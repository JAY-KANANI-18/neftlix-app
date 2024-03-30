import Home from "../pages/home"
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/profile";
import User from "../modules/user";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <App />,
    children: [
      { path: "/auth/login", element: <Login /> },
      {
        path: "/auth/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router