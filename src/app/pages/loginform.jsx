import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setToken } from "../../utils/cookie";
import Input from "../formik/input";
import Button from "../formik/button";
import { login } from "../../services/login";
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Format email salah")
    .required("Email tidak boleh kosong"),
  password: Yup.string().required("Password tidak boleh kosong"),
});

export default function FormLogin() {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const tesLogin = await login({
        email: values.email,
        password: values.password,
      });
      if (tesLogin.data.berhasil === true) {
        setToken(tesLogin.data.token);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  // FORMIK
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
    <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <Input
          id="email-input"
          name="email"
          placeholder="Masukan Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email !== undefined && formik.touched.email}
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
            formik.errors.password !== undefined && formik.touched.password
          }
          errorMsg={formik.errors.password}
        />
      </div>

      <Button id="login-submit" type="submit" loading={loading}>
        Login
      </Button>
    </form>
  );
}
