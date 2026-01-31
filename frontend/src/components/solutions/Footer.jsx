import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, IconButton, Divider, Snackbar, Alert } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      setSnackbar({ open: true, message: "Email cannot be empty", severity: "error" });
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      setSnackbar({ open: true, message: "Please enter a valid @gmail.com address", severity: "error" });
      return;
    }
    setSnackbar({ open: true, message: "Thanks for subscribing Our newsletter", severity: "success" });
    setEmail("");
  };
  return (
    <Box sx={{ bgcolor: "#0B132B", color: "#FFFFFF", pt: 8, pb: 4 }}>
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: { xs: 4, md: 4 },
            mb: 6,
          }}
        >
          {/* Company Info */}
          <Box sx={{ gridColumn: { xs: "1", lg: "span 2" } }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, fontSize: "1.75rem", color: "#FF8000" }}>
              RI Logistics
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontSize: "0.875rem", color: "#D9D9D9", lineHeight: 1.7 }}>
              Rishishwar Industry Logistics Pvt. Ltd. – Reliable. Fast. Secure.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontSize: "0.75rem", color: "#B0B0B0" }}>
              ISO 9001: 2015, ISO 27001: 2022 Certified
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, fontSize: "0.75rem", color: "#B0B0B0" }}>
              CIN: L63090DL2011PLC221234
            </Typography>

            {/* Social Media */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                size="small"
                sx={{
                  color: "#FFFFFF",
                  bgcolor: "#1E3A5F",
                  "&:hover": { bgcolor: "#FF8000", transform: "translateY(-2px)" },
                  transition: "all 0.3s",
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#FFFFFF",
                  bgcolor: "#1E3A5F",
                  "&:hover": { bgcolor: "#FF8000", transform: "translateY(-2px)" },
                  transition: "all 0.3s",
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#FFFFFF",
                  bgcolor: "#1E3A5F",
                  "&:hover": { bgcolor: "#FF8000", transform: "translateY(-2px)" },
                  transition: "all 0.3s",
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/rilogistic/"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "#FFFFFF",
                  bgcolor: "#1E3A5F",
                  "&:hover": { bgcolor: "#FF8000", transform: "translateY(-2px)" },
                  transition: "all 0.3s",
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#FFFFFF",
                  bgcolor: "#1E3A5F",
                  "&:hover": { bgcolor: "#FF8000", transform: "translateY(-2px)" },
                  transition: "all 0.3s",
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <FooterColumn
            title="QUICK LINKS"
            items={[
              { label: "Home", onClick: () => navigate("/") },
              { label: "About Us", onClick: () => navigate("/about") },
              {
                label: "Services",
                onClick: () => {
                  navigate("/");
                  setTimeout(() => {
                    document
                      .getElementById("services-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                },
              },

              {
                label: "Contact Us",
                onClick: () => {
                  document
                    .getElementById("footer-contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                },
              },
              {
                label: "Track Shipment",
                onClick: () => {
                  navigate("/support");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              }


            ]}
          />

          {/* Our Services */}
          <FooterColumn
            title="OUR SERVICES"
            items={[
              {
                label: "Transportation",
                onClick: () => {
                  navigate("/register");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "Warehousing",
                onClick: () => {
                  navigate("/register");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "Freight Forwarding",
                onClick: () => {
                  navigate("/register");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "Express Delievery",
                onClick: () => {
                  navigate("/delivery-partner");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "Part Truckload",
                onClick: () => {
                  navigate("/part-truckload");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "Full Truckload",
                onClick: () => {
                  navigate("/full-truckload");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              }
            ]}
          />

          {/* Solutions */}
          <FooterColumn
            title="SOLUTIONS"
            items={[
              {
                label: "D2C Brands",
                onClick: () => {
                  navigate("/solutions/d2c");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "B2B Enterprises",
                onClick: () => {
                  navigate("/solutions/b2b");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "3rd Party Load",
                onClick: () => {
                  navigate("/3pl-solution");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "White Label Solution",
                onClick: () => {
                  navigate("/support");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
              {
                label: "Franchise Opportunities",
                onClick: () => {
                  navigate("/franchise");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                },
              },
            ]}
          />
        </Box>

        {/* Contact Information Section */}
        <Box
          id="footer-contact"
          sx={{
            bgcolor: "#1E3A5F",
            borderRadius: 2,
            p: 4,
            mb: 6,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 3,
          }}
        >
          <ContactItem
            icon={<LocationOnIcon />}
            title="Address"
            content="Plot 45, Sector 18, Industrial Area, Delhi - 110025, India"
          />
          <ContactItem icon={<PhoneIcon />} title="Phone" content="+91 11 4567 8900" linkPrefix="tel:" />
          <ContactItem icon={<EmailIcon />} title="Email" content="info@rilogistics.com" linkPrefix="mailto:" />
          <ContactItem icon={<AccessTimeIcon />} title="Working Hours" content="Mon - Sat: 9:00 AM - 6:00 PM" />
        </Box>

        {/* Newsletter Section */}
        <Box
          sx={{
            bgcolor: "#162340",
            borderRadius: 2,
            p: 4,
            mb: 6,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#FF8000" }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "#D9D9D9", fontSize: "0.875rem" }}>
            Get the latest updates on logistics solutions and industry insights
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                bgcolor: "#FFFFFF",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#FF8000" },
                  "&.Mui-focused fieldset": { borderColor: "#FF8000" },
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubscribe}
              sx={{
                bgcolor: "#FF8000",
                color: "#FFFFFF",
                fontWeight: 600,
                px: 4,
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#E67300" },
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Box>

        {/* Policies */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: "0.95rem",
              letterSpacing: "0.5px",
              color: "#FF8000",
            }}
          >
            POLICIES
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, md: 3 } }}>
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "Cookie Policy",
              "Fraud Disclaimer",
              "ONDC Disclaimer",
              "Refund Policy",
            ].map((item) => (
              <Typography
                key={item}
                variant="body2"
                onClick={() => {
                  navigate("/support")
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                sx={{
                  cursor: "pointer",
                  color: "#D9D9D9",
                  fontSize: "0.875rem",
                  transition: "color 0.2s",
                  "&:hover": { color: "#FF8000" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

        </Box>

        <Divider sx={{ bgcolor: "#1E3A5F", mb: 3 }} />

        {/* Copyright */}
        <Typography variant="body2" sx={{ textAlign: "center", color: "#B0B0B0", fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} Rishishwar Industry Logistics Pvt. Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

function FooterColumn({ title, items }) {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          mb: 2.5,
          fontSize: "0.95rem",
          letterSpacing: "0.5px",
          color: "#FF8000",
        }}
      >
        {title}
      </Typography>

      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
        {items.map((item, index) => {
          const isObject = typeof item === "object";

          return (
            <Box component="li" key={index} sx={{ mb: 1.5 }}>
              <Typography
                variant="body2"
                onClick={isObject ? item.onClick : undefined}
                sx={{
                  cursor: isObject ? "pointer" : "default",
                  color: "#D9D9D9",
                  fontSize: "0.875rem",
                  transition: "all 0.25s ease",
                  "&:hover": isObject
                    ? {
                      color: "#FF8000",
                      transform: "translateX(4px)",
                    }
                    : {},
                }}
              >
                {isObject ? item.label : item}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function ContactItem({ icon, title, content, linkPrefix }) {
  const isLink = !!linkPrefix;

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
      <Box sx={{ color: "#FF8000", mt: 0.5 }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}>
          {title}
        </Typography>
        {isLink ? (
          <Typography
            component="a"
            href={`${linkPrefix}${content}`}
            variant="body2"
            sx={{
              color: "#D9D9D9",
              fontSize: "0.8rem",
              textDecoration: "none",
              "&:hover": { color: "#FF8000" },
              transition: "color 0.2s",
            }}
          >
            {content}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ color: "#D9D9D9", fontSize: "0.8rem", lineHeight: 1.5 }}>
            {content}
          </Typography>
        )}
      </Box>
    </Box>
  );
}