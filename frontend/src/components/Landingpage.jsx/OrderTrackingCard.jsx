import React, { useState } from "react";
import { Box, Card, CardContent, Tabs, Tab, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

export default function OrderTrackingCard({ videoEnded }) {
  const [trackingTab, setTrackingTab] = useState(0);
  const [subTab, setSubTab] = useState(0);
  const [trackingValue, setTrackingValue] = useState("");
  const [error, setError] = useState("");

  const textFieldStyles = {
    mb: 3,
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      bgcolor: "#f5f5f5",
      "& fieldset": { borderColor: error ? "#d32f2f" : "#e0e0e0" },
      "&:hover fieldset": { borderColor: error ? "#d32f2f" : "#bdbdbd" },
      "&.Mui-focused fieldset": { borderColor: error ? "#d32f2f" : "#1976d2" },
    },
    "& .MuiInputBase-input": {
      color: "#000",
      "&::placeholder": { color: "#999", opacity: 1 },
    },
  };

  // Validation functions
  const validateMobile = (value) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!value) return "Mobile number is required";
    if (!mobileRegex.test(value)) return "Please enter a valid 10-digit mobile number";
    return "";
  };

  const validateAWB = (value) => {
    if (!value) return "AWB number is required";
    if (value.length < 8) return "AWB number must be at least 8 characters";
    return "";
  };

  const validateOrderId = (value) => {
    if (!value) return "Order ID is required";
    if (value.length < 5) return "Order ID must be at least 5 characters";
    return "";
  };

  const validateLRN = (value) => {
    if (!value) return "LRN number is required";
    if (value.length < 6) return "LRN number must be at least 6 characters";
    return "";
  };

  // Submit Handler
  const SubmitHandler = () => {
    let validationError = "";

    switch (subTab) {
      case 0:
        validationError = validateMobile(trackingValue);
        break;
      case 1:
        validationError = validateAWB(trackingValue);
        break;
      case 2:
        validationError = validateOrderId(trackingValue);
        break;
      case 3:
        validationError = validateLRN(trackingValue);
        break;
      default:
        break;
    }

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    console.log("Tracking value:", trackingValue);
    alert(`Tracking ${getTabLabel()} with value: ${trackingValue}`);
  };

  const getTabLabel = () => {
    const labels = ["Mobile", "AWB", "Order ID", "LRN"];
    return labels[subTab];
  };

  const handleInputChange = (e) => {
    setTrackingValue(e.target.value);
    if (error) setError("");
  };

  const handleSubTabChange = (e, v) => {
    setSubTab(v);
    setTrackingValue("");
    setError("");
  };

  // REMOVE ALL THE WRAPPING BOX AND CONDITIONAL RENDERING FROM HERE
  // Just return the Card directly
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        overflow: "hidden",
        bgcolor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        {/* Main Tabs */}
        <Tabs
          value={trackingTab}
          onChange={(e, v) => setTrackingTab(v)}
          sx={{
            mb: 3,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              color: "#666",
              minWidth: 120,
              px: 3,
            },
            "& .Mui-selected": { color: "#1976d2" },
            "& .MuiTabs-indicator": {
              backgroundColor: "#1976d2",
              height: 3,
            },
          }}
        >
          <Tab label="Track order" value={0} />
          <Tab label="Ship order" value={1} />
        </Tabs>

        {/* Main Tab Content */}
        {trackingTab === 0 && (
          <>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 100,
                mb: 3,
                color: "#000",
                fontSize: "2rem",
              }}
            >
             <strong> Track </strong>your order through
            </Typography>

            {/* Sub Tabs */}
            <Tabs
              value={subTab}
              onChange={handleSubTabChange}
              sx={{
                mb: 3,
                minHeight: "unset",
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderRadius: 1.5,
                  px: 3,
                  py: 1,
                  color: "#999",
                  minHeight: "unset",
                },
                "& .Mui-selected": {
                  bgcolor: "#1a1d29",
                  color: "#fff",
                },
                "& .MuiTabs-indicator": { display: "none" },
              }}
            >
              <Tab label="Mobile" value={0} />
              <Tab label="AWB" value={1} />
              <Tab label="Order Id" value={2} />
              <Tab label="LRN" value={3} />
            </Tabs>

            {/* Sub-Tab Conditional Fields */}
            {subTab === 0 && (
              <TextField
                fullWidth
                placeholder="Enter your mobile number"
                value={trackingValue}
                onChange={handleInputChange}
                type="tel"
                inputProps={{ maxLength: 10 }}
                sx={textFieldStyles}
              />
            )}

            {subTab === 1 && (
              <TextField
                fullWidth
                placeholder="Enter AWB number"
                value={trackingValue}
                onChange={handleInputChange}
                sx={textFieldStyles}
              />
            )}

            {subTab === 2 && (
              <TextField
                fullWidth
                placeholder="Enter Order ID"
                value={trackingValue}
                onChange={handleInputChange}
                sx={textFieldStyles}
              />
            )}

            {subTab === 3 && (
              <TextField
                fullWidth
                placeholder="Enter LRN number"
                value={trackingValue}
                onChange={handleInputChange}
                sx={textFieldStyles}
              />
            )}

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={SubmitHandler}
              sx={{
                bgcolor: "#1a1d29",
                color: "#fff",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1.1rem",
                py: 1.5,
                borderRadius: 2,
                mb: 3,
                "&:hover": { bgcolor: "#2a2d39" },
              }}
            >
              {subTab === 0 ? "Get OTP" : "Track Order"}
            </Button>

            {/* Error Handling */}
            {error && (
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                  color: "#d32f2f",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                {error}
              </Typography>
            )}
          </>
        )}

        {trackingTab === 1 && (
        <Typography
              variant="h3"
              sx={{
                fontWeight: 100,
                mb: 3,
                color: "#000",
                fontSize: "2rem",
              }}
            >
             <strong> Ship </strong>personal courier
            </Typography>
        )}

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#666", mb: 2, mt: 3, fontSize: "0.875rem" }}
        >
          Live tracking updates & extra support on our App
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Box
            component="img"
            src="https://www.delhivery.com/_nuxt/img/appstore-icon-white.b50ab14.svg"
            alt="App Store"
            sx={{
              height: 40,
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
          <Box
            component="img"
            src="https://www.delhivery.com/_nuxt/img/playstore-icon-white.14b6cfa.svg"
            alt="Play Store"
            sx={{
              height: 40,
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}