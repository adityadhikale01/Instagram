import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import Home from "../../pages/Home";
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
    ],
  },
]);

export default router;