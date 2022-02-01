import * as React from "react";
import { Link } from "react-router-dom";
import Main from "../layout/Main";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../formik/input";
import Button from "../formik/button";
import { connect } from "react-redux";
import { getError, getLoading } from "../redux/store/login/selectors";
import { signIn } from "../redux/store/login/actions";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Format email salah")
    .required("Email tidak boleh kosong"),
  password: Yup.string().required("Password tidak boleh kosong"),
});

function Login({ signIn, loading, error }) {
  const onSubmit = async (values) => {
    await signIn({ email: values.email, password: values.password });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        </div>
      </header>
      <main>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Login Your Profile
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Let's login your Account
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <Input
                  id="email-input"
                  name="email"
                  placeholder="Masukan Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.errors.email !== undefined && formik.touched.email
                  }
                  errorMsg={formik.errors.email}
                />
                <Input
                  type="password"
                  id="password-input"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.errors.password !== undefined &&
                    formik.touched.password
                  }
                  errorMsg={formik.errors.password}
                />
              </div>

              <Button id="login-submit" type="submit" loading={loading}>
                Login
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Did you have an account ?{" "}
              <Link to={"registration"}>Registration Here</Link>
            </p>
          </div>
        </div>
      </main>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  error: getError(state),
});

const mapDispatchToProps = {
  signIn: signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
