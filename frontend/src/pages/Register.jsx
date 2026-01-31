import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  IconButton,
  InputAdornment,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import {
  ArrowBack,
  LocalShipping,
  Person,
  Email,
  Phone,
  Lock,
  Work,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../components/common/AlertMessage";
import { useThemeMode } from "../theme/ThemeProvider";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
  role: yup.string().required("Role is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
});

const roles = [
  "Broker",
  "Vehicle Owner",
  "Driver",
  "Shipper",
  "Verification Team",
  "Field RM",
  "Support Staff",
];

const Register = () => {
  const navigate = useNavigate();
  const { mode } = useThemeMode();
  const theme = useTheme();
  const isDark = mode === "dark";

  const [alert, setAlert] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // TODO: Implement registration API call
        console.log("Form submitted:", values);

        // Save token and user role to localStorage
        localStorage.setItem("token", "demo-token-123");
        localStorage.setItem("userRole", values.role);

        setAlert({
          open: true,
          message: "Registration successful!",
          severity: "success",
        });

        // Redirect to dashboard after short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      } catch (error) {
        setAlert({
          open: true,
          message: error.message || "Registration failed",
          severity: "error",
        });
      }
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isDark
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" // Deep Blue/Slate for Dark
          : "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)", // Soft Gray/Blue for Light
        position: "relative",
        p: 2,
      }}
    >
      {/* Back Button */}
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: { xs: 16, sm: 24 },
          left: { xs: 16, sm: 24 },
          bgcolor: isDark ? alpha("#fff", 0.05) : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)",
          boxShadow: 2,
          "&:hover": {
            bgcolor: isDark ? alpha("#fff", 0.1) : "#fff",
          },
        }}
      >
        <ArrowBack />
      </IconButton>

      <Container maxWidth="xs" disableGutters>
        <Paper
          elevation={isDark ? 0 : 24}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            bgcolor: isDark ? alpha("#1e293b", 0.8) : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            border: isDark ? `1px solid ${alpha("#fff", 0.1)}` : "none",
            boxShadow: isDark
              ? "0 8px 32px rgba(0, 0, 0, 0.4)"
              : "0 20px 60px rgba(0, 0, 0, 0.12)",
          }}
        >
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ width: "100%" }}
          >
            <Stack spacing={3} alignItems="center">
              {/* Header Grid */}
              <Stack spacing={1} alignItems="center" sx={{ width: "100%", mb: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isDark
                      ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                      : "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                    boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
                    mb: 1,
                  }}
                >
                  <LocalShipping sx={{ fontSize: 32, color: "#fff" }} />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="700"
                  color="text.primary"
                  align="center"
                >
                  Create Account
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  Join our logistics platform today
                </Typography>
              </Stack>

              {/* Form Fields Stack */}
              <Stack spacing={2.5} sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  name="name"
                  label="Full Name"
                  placeholder="John Doe"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  name="email"
                  label="Email Address"
                  placeholder="your.email@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  placeholder="9876543210"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    select
                    name="role"
                    label="Role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    error={formik.touched.role && Boolean(formik.errors.role)}
                    helperText={formik.touched.role && formik.errors.role}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Work color="action" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {roles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
              </Stack>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 2,
                  boxShadow: "0 8px 16px rgba(25, 118, 210, 0.24)",
                  background: isDark
                    ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                    : "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 20px rgba(25, 118, 210, 0.32)",
                  },
                }}
              >
                Create Account
              </Button>

              {/* Sign In Link */}
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Typography variant="body2" color="text.secondary">
                  Already have an account?
                </Typography>
                <Button
                  onClick={() => navigate("/login")}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    minWidth: "auto",
                    p: 0.5,
                    "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                  }}
                >
                  Sign In
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Container>

      <AlertMessage
        open={alert.open}
        handleClose={() => setAlert({ ...alert, open: false })}
        severity={alert.severity}
        message={alert.message}
      />
    </Box>
  );
};

export default Register;
