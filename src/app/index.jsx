import { Route, Routes } from "react-router-dom";

import { Public, Private } from "./routes";
import { NotFound } from "./pages";
import { getToken } from "../utils/cookie";

export default function App() {
  const token = getToken();

  return (
    <Routes>
      {!token
        ? Public.map(({ key, path, element }) => (
            <Route path={path} element={element} end></Route>
          ))
        : Private.map(({ key, path, element }) => (
            <Route path={path} element={element} end></Route>
          ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
