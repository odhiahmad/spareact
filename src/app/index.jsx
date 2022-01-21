import { memo, ComponentType } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import { Public, Private } from "./routes";
import { NotFound } from "./pages";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import { getToken } from "../utils/cookie";
import { login } from "./redux/modules/auth/action";
import { setUpAxios } from "../services";

export default function App({ isLogin }) {
  const token = getToken();

  if (token) {
    console.log(isLogin);
  }
  return (
    <Routes>
      {Public.map(({ key, path, element }) => (
        <Route path={path} element={element} end></Route>
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
