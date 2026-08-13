import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import Home from "../../pages/Homepg/Home.jsx";
import Reels from "../../pages/Reels";
import Explore from "../../pages/Explore";
import Messages from "../../pages/Messages";
import Notifications from "../../pages/Notifications";
import Events from "../../pages/Events";
import Clubs from "../../pages/Clubs";
import CollegeFeed from "../../pages/CollageFeed";
import Marketplace from "../../pages/Marketplace";
import Profile from "../../pages/Profile";
import Settings from "../../pages/Settings";
import LoginPage from "../../pages/loginPg/LoginPage.jsx";
import RegisterPage from "../../pages/RegisterPg/RegisterPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "reels",
        element: <Reels />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "clubs",
        element: <Clubs />,
      },
      {
        path: "college-feed",
        element: <CollegeFeed />,
      },
      {
        path: "marketplace",
        element: <Marketplace />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "*",
        element: <h1>404</h1>,
      }
    ],
  },
]);

export default router;