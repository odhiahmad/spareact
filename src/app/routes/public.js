import { Home, Login } from "../pages";

const routes = [
  {
    id: 0,
    key: "home",
    name: "home",
    element: <Home />,
    path: "/",
  },
  {
    id: 1,
    key: "home",
    name: "home",
    element: <Home />,
    path: "home",
  },

  {
    id: 2,
    key: "login",
    name: "login",
    element: <Login />,
    path: "login",
  },
];

export default routes;
