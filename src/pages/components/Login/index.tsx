import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@mui/material/InputLabel";
import theme from "@/styles/theme";
import { Link, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = (props: { setInfo: (arg0: any) => void }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      axios
        .get("/api/handleCall", {
          params: {
            email: values.email,
            password: values.password,
          },
        })
        .then(function (response) {
          setLoading(false);
          props.setInfo(response.data.name);
          console.log(`Welcome, ${response.data.name}`);
        })
        .catch(function (error) {
          setLoading(false);
          console.log(error);
        });
    },
  });
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <InputLabel color="primary" sx={{ ml: 0.6 }}>
          Username
        </InputLabel>
        <TextField
          fullWidth
          variant="outlined"
          id="email"
          name="email"
          placeholder="Username"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{ margin: 4, borderRadius: "1px" }}
        />
        <InputLabel color="primary" sx={{ ml: 0.6 }}>
          Password
        </InputLabel>
        <TextField
          fullWidth
          variant="outlined"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{ margin: 4 }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          <button
            style={{
              backgroundColor: theme.palette.secondary.main,
              padding: 8,
              borderWidth: 0,
              borderRadius: 2,
              width: "70%",
              paddingTop: "10px",
            }}
            type="submit"
          >
            Submit
          </button>
          <Link
            color="secondary"
            underline="none"
            sx={{
              fontWeight: "bold",
              fontSize: "13px",
              fontFamily: "sans-serif",
              paddingY: "10px",
            }}
          >
            Forgot Username/Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
