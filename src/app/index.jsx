import { Route, Routes } from "react-router-dom";
import { Public, Private } from "./routes";
import { NotFound } from "./pages";
import { connect, useDispatch } from "react-redux";
import { getLogin } from "./redux/store/login/selectors";
import { reLogin } from "./redux/store/login/actions";
import { getToken } from "../utils/cookie";

function App({ isLogin }) {
  const dispatch = useDispatch();
  console.log(getToken());
  if (getToken()) {
    dispatch(reLogin(getToken()));
  }

  return (
    <Routes>
      {!isLogin
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

const mapStateToProps = (state) => ({
  isLogin: getLogin(state),
});

export default connect(mapStateToProps)(App);
