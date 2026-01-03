import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  IconButton,
  alpha,
  Tabs,
  Tab,
  InputAdornment,
  Divider,
  Stack,
  Snackbar,
  Alert,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowBack,
  LocalShipping,
  Email,
  Lock,
  Person,
  Business,
  Phone,
  Visibility,
  VisibilityOff,
  Google,
  Apple,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

/* ===================== VALIDATION ===================== */

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const registerSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  company: yup.string().required("Company name is required"),
  password: yup.string().min(8, "Min 8 characters").required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});

/* ===================== COMPONENT ===================== */

const Login = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate()

  const [tab, setTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    // Optional: clear errors when switching
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  /* ===================== FORMIK ===================== */

  const loginFormik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 1000));
      setSnackbar({ open: true, message: "Login successful!", severity: "success" });
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 1000));
      setSnackbar({ open: true, message: "Account created!", severity: "success" });
      setTimeout(() => setTab(0), 1000);
    },
  });

  /* ===================== STYLES ===================== */

  // Custom styling for inputs to make them look "SaaS Premium"
  const inputSx = {
    "& .MuiOutlinedInput-root": {
      bgcolor: isDark ? alpha("#fff", 0.03) : "#F3F6F9",
      borderRadius: "12px",
      transition: "all 0.2s ease",
      "& fieldset": {
        borderColor: isDark ? alpha("#fff", 0.1) : "#E1E3EA",
      },
      "&:hover": {
        bgcolor: isDark ? alpha("#fff", 0.05) : "#EBEEF3",
        "& fieldset": { borderColor: theme.palette.primary.main },
      },
      "&.Mui-focused": {
        bgcolor: isDark ? alpha("#fff", 0.05) : "#fff",
        boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.1)}`,
        "& fieldset": { borderColor: theme.palette.primary.main },
      },
    },
    "& .MuiInputLabel-root": {
      color: isDark ? alpha("#fff", 0.6) : "#64748B",
    },
  };

  const buttonSx = {
    py: 1.5,
    borderRadius: "12px",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 700,
    boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
    "&:hover": {
      boxShadow: "0 6px 20px rgba(0,118,255,0.23)",
      transform: "translateY(-1px)",
    },
    transition: "all 0.2s ease",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isDark
          ? "radial-gradient(circle at 50% 0%, #1e293b 0%, #0f172a 100%)"
          : "radial-gradient(circle at 50% 0%, #f0f9ff 0%, #eef2f6 100%)",
        position: "relative",
        p: 2,
      }}
    >
      {/* Back Button */}
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: 24,
          left: 24,
          bgcolor: isDark ? alpha("#fff", 0.05) : "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          "&:hover": { bgcolor: isDark ? alpha("#fff", 0.1) : "#f8f9fa" },
        }}
      >
        <ArrowBack fontSize="small" />
      </IconButton>

      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: "24px",
            bgcolor: isDark ? alpha("#1e293b", 0.8) : "#ffffff",
            backdropFilter: "blur(20px)",
            border: `1px solid ${isDark ? alpha("#fff", 0.1) : "rgba(255,255,255,0.8)"}`,
            boxShadow: isDark
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Header */}
          <Box textAlign="center" mb={4}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "16px",
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
                boxShadow: "0 8px 16px rgba(25, 118, 210, 0.2)",
                transform: "rotate(-10deg)",
              }}
            >
              <LocalShipping sx={{ color: "white", fontSize: 28, transform: "rotate(10deg)" }} />
            </Box>
            <Typography variant="h4" fontWeight={800} gutterBottom sx={{ color: isDark ? "white" : "#1e293b" }}>
              RI Logistics
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Login And Signup Page
            </Typography>
          </Box>

          {/* Tabs */}
          <Tabs
            value={tab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              mb: 4,
              minHeight: 48,
              bgcolor: isDark ? alpha("#000", 0.2) : "#F3F6F9",
              borderRadius: "14px",
              p: 0.5,
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            {["Sign In", "Create Account"].map((label, index) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  zIndex: 2,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  borderRadius: "10px",
                  color: "text.secondary",
                  transition: "all 0.3s ease",
                  "&.Mui-selected": {
                    color: isDark ? "white" : "primary.main",
                    bgcolor: isDark ? alpha("#fff", 0.1) : "white",
                    boxShadow: isDark ? "none" : "0 2px 8px rgba(0,0,0,0.05)",
                  },
                }}
              />
            ))}
          </Tabs>

          {/* ================= LOGIN FORM ================= */}
          <Box sx={{ display: tab === 0 ? "block" : "none" }}>
            <Fade in={tab === 0}>
              <form onSubmit={loginFormik.handleSubmit}>
                <Stack spacing={2.5}>
                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    label="Email Address"
                    {...loginFormik.getFieldProps("email")}
                    error={loginFormik.touched.email && Boolean(loginFormik.errors.email)}
                    helperText={loginFormik.touched.email && loginFormik.errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email fontSize="small" sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={inputSx}
                  />

                  <TextField
                    fullWidth
                    placeholder="••••••••"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    {...loginFormik.getFieldProps("password")}
                    error={loginFormik.touched.password && Boolean(loginFormik.errors.password)}
                    helperText={loginFormik.touched.password && loginFormik.errors.password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock fontSize="small" sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={inputSx}
                  />

                  {/* <Box display="flex" justifyContent="flex-end">
                    <Link
                      component="button"
                      type="button"
                      variant="caption"
                      fontWeight={600}
                      sx={{ textDecoration: "none", color: "primary.main" }}
                    >
                      Forgot Password?
                    </Link>
                  </Box> */}

                  <Button type="submit" variant="contained" fullWidth sx={buttonSx} disabled={loginFormik.isSubmitting}>
                    {loginFormik.isSubmitting ? "Signing In..." : "Sign In"}
                  </Button>
                </Stack>
              </form>
            </Fade>
          </Box>

          {/* ================= REGISTER FORM ================= */}
          <Box sx={{ display: tab === 1 ? "block" : "none" }}>
            <Fade in={tab === 1}>
              <Box
                component="form"
                onSubmit={registerFormik.handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5, // 🔥 consistent vertical spacing
                }}
              >
                <TextField
                  fullWidth
                  label="Full Name"
                  placeholder="John Doe"
                  {...registerFormik.getFieldProps("fullName")}
                  error={
                    registerFormik.touched.fullName &&
                    Boolean(registerFormik.errors.fullName)
                  }
                  helperText={
                    registerFormik.touched.fullName &&
                    registerFormik.errors.fullName
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person fontSize="small" sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  placeholder="you@example.com"
                  {...registerFormik.getFieldProps("email")}
                  error={
                    registerFormik.touched.email &&
                    Boolean(registerFormik.errors.email)
                  }
                  helperText={
                    registerFormik.touched.email &&
                    registerFormik.errors.email
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email fontSize="small" sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx}
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="+91 9988776655"
                  {...registerFormik.getFieldProps("phone")}
                  error={
                    registerFormik.touched.phone &&
                    Boolean(registerFormik.errors.phone)
                  }
                  helperText={
                    registerFormik.touched.phone &&
                    registerFormik.errors.phone
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone fontSize="small" sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx}
                />

                <TextField
                  fullWidth
                  label="Company Name"
                  placeholder="Logistics Inc"
                  {...registerFormik.getFieldProps("company")}
                  error={
                    registerFormik.touched.company &&
                    Boolean(registerFormik.errors.company)
                  }
                  helperText={
                    registerFormik.touched.company &&
                    registerFormik.errors.company
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Business fontSize="small" sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  {...registerFormik.getFieldProps("password")}
                  error={
                    registerFormik.touched.password &&
                    Boolean(registerFormik.errors.password)
                  }
                  helperText={
                    registerFormik.touched.password &&
                    registerFormik.errors.password
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock fontSize="small" sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? (
                            <VisibilityOff fontSize="small" />
                          ) : (
                            <Visibility fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx}
                />

                <TextField
                  fullWidth
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  {...registerFormik.getFieldProps("confirmPassword")}
                  error={
                    registerFormik.touched.confirmPassword &&
                    Boolean(registerFormik.errors.confirmPassword)
                  }
                  helperText={
                    registerFormik.touched.confirmPassword &&
                    registerFormik.errors.confirmPassword
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock fontSize="small" sx={{ color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                          size="small"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff fontSize="small" />
                          ) : (
                            <Visibility fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ ...buttonSx, mt: 1 }}
                  disabled={registerFormik.isSubmitting}
                >
                  {registerFormik.isSubmitting ? "Creating..." : "Create Account"}
                </Button>
              </Box>
            </Fade>
          </Box>
        </Paper>
      </Container>

      {/* Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled" sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;