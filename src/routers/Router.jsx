import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import PageList from "../components/PageList";

import Rivers from "../pages/Rivers";
import Forest from "../pages/Forest";
import Desert from "../pages/Desert";
import Ocean from "../pages/Ocean";
import Sea from "../pages/Sea";
import Mountain from "../pages/Mountain";

function Layout() {
  return (
    <>
      <Outlet />
      <PageList />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Desert /> },
      { path: "ocean", element: <Ocean /> },
      { path: "sea", element: <Sea /> },
      { path: "forest", element: <Forest /> },
      { path: "mountain", element: <Mountain /> },
      { path: "rivers", element: <Rivers /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
