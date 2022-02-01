import { Home, Contact, About } from "../pages";

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
    key: "contact",
    name: "contact",
    element: <Contact />,
    path: "contact",
  },
  {
    id: 3,
    key: "about",
    name: "about",
    element: <About />,
    path: "about",
  },
];

export default routes;
