import React from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles,
  CircularProgress,
  colors,
} from "@material-ui/core";
import { Notification, useLogin } from "react-admin";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100vh",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  error: {
    color: colors.red[400],
    textAlign: "center",
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const LoginView = () => {
  const classes = useStyles();
  const login = useLogin();
  const location = useLocation();
  const handleLogin = (values, actions) => {
    const { email, password } = values;
    login(
      { email, password },
      location.state ? location.state.nextPathname : "/"
    )
      .catch((err) => {
        const {
          data: {
            error: { message },
          },
        } = err.response || { data: { error: err } };
        actions.setFieldError("error", message);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{ email: "", password: "", error: null }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={handleLogin}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />

                <Box my={2}>
                  <div className={classes.wrapper}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </Box>
                <ErrorMessage
                  component="div"
                  name="error"
                  className={classes.error}
                />
              </form>
            )}
          </Formik>
        </Container>
      </Box>
      <Notification />
    </div>
  );
};

export default LoginView;
