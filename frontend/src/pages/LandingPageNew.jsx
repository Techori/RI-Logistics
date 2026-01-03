import React, { useState, useEffect } from "react";
import OrderTrackingCard from "../components/Landingpage/OrderTrackingCard";
import StatusCheckForm from "../components/StatusCheckForm/StatusCheckForm";
import Footer from "../components/solutions/Footer";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  alpha,
  TextField,
  Tabs,
  Tab,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useThemeMode } from "../theme/ThemeProvider";
import Navbar from "../components/solutions/Navbar";
import {
  LocalShipping,
  TrendingUp,
  Security,
  Speed,
  Public,
  Timeline,
  FlightTakeoff,
  CheckCircle,
  Inventory,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      {count}
      {suffix}
    </motion.div>
  );
};

// Magnetic Button Component
const MagneticButton = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};


const LandingPageNew = () => {
  const navigate = useNavigate();
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const [activeSection, setActiveSection] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const [trackingTab, setTrackingTab] = useState(0);
  const [trackingValue, setTrackingValue] = useState("");

   // OTP Handler Function

const OTPHandler = () => {
  if (!trackingValue || trackingValue.length !== 10 || !['9', '8', '7', '6'].includes(trackingValue[0])) {
    return alert('Please enter a valid number');
  }

  setTrackingValue("");
  alert('OTP sent to your number');
};


  useEffect(() => {
    // Smooth scroll
    document.documentElement.style.scrollBehavior = "smooth";

    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      icon: Speed,
      title: "Lightning Fast",
      description: "Real-time tracking with instant updates",
      color: "#3b82f6",
      delay: 0,
    },
    {
      icon: Security,
      title: "100% Secure",
      description: "End-to-end encrypted shipments",
      color: "#10b981",
      delay: 100,
    },
    {
      icon: Public,
      title: "Global Reach",
      description: "Deliver anywhere in the world",
      color: "#f59e0b",
      delay: 200,
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Advanced insights and reporting",
      color: "#8b5cf6",
      delay: 300,
    },
  ];

  const services = [
    {
      icon: LocalShipping,
      title: "Express Delivery",
      description: "Same-day and next-day delivery options",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: FlightTakeoff,
      title: "Air Freight",
      description: "International air cargo services",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: Inventory,
      title: "Warehousing",
      description: "Secure storage and inventory management",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: Timeline,
      title: "Supply Chain",
      description: "End-to-end supply chain solutions",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  const stats = [
    { value: "10K+", label: "Daily Shipments", icon: LocalShipping },
    { value: "500+", label: "Cities Covered", icon: Public },
    { value: "98%", label: "On-Time Delivery", icon: CheckCircle },
    { value: "50K+", label: "Happy Clients", icon: TrendingUp },
  ];

  return (
<>
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: isDark
          ? "#0a0e1a"
          : "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating Navigation Dots */}
      <Box
        sx={{
          position: "fixed",
          right: 40,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: 2,
        }}
      >
        {[0, 1, 2, 3, 4].map((dot) => (
          <motion.div
            key={dot}
            whileHover={{ scale: 1.5 }}
            onClick={() => {
              const sections = document.querySelectorAll("[data-section]");
              sections[dot]?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              width: activeSection === dot ? 12 : 8,
              height: activeSection === dot ? 12 : 8,
              borderRadius: "50%",
              background:
                activeSection === dot
                  ? isDark
                    ? "#e63946"
                    : "#1976d2"
                  : isDark
                    ? alpha("#ffffff", 0.3)
                    : alpha("#000000", 0.3),
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Box>

      {/* Animated Background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: "100%",
              width: 2,
              height: Math.random() * 100 + 50,
              background: isDark
                ? "linear-gradient(180deg, transparent, #e63946, transparent)"
                : "linear-gradient(180deg, transparent, #1976d2, transparent)",
              borderRadius: 2,
            }}
          />
        ))}
      </Box>

      {/* 3D Floating Shapes - Static Background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(230,57,70,0.2) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(25,118,210,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </Box>

      {/* Navigation */}
      <Navbar />

     {/* Hero Video Section */}
<Box
  data-section
  component={motion.div}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  sx={{
    position: "relative",
    width: "100%",
    // Mobile: Fixed height for video only, Desktop: full viewport sections
    height: { 
      xs: "50vh", // Video stops at 50% on mobile
      sm: "70vh", 
      md: "80vh", 
      lg: "90vh" 
    },
    overflow: "hidden",
    zIndex: 1,
    mt: { xs: 8, sm: 9, md: 10 },
  }}
>
  {/* Video Background */}
  <Box
    component="video"
    autoPlay
    muted
    playsInline
    onEnded={(e) => {
      e.target.pause();
      setVideoEnded(true);
    }}
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
    <source src="/videos/hero-video.webm" type="video/webm" />
    Your browser does not support the video tag.
  </Box>

  {/* Dark overlay - appears only after video ends */}
  {videoEnded && (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: isDark
          ? "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))"
          : "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
        zIndex: 1,
      }}
    />
  )}

  {/* Left side - Text (remains visible with video) */}
  {videoEnded && (
    <Container
      maxWidth="lg"
      sx={{
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "55%", lg: "50%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem", lg: "3rem" },
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              pl: { xs: 2, sm: 3, md: 4, lg: 6 },
              pr: { xs: 2, sm: 3, md: 2 },
              lineHeight: 1.2,
            }}
          >
            We are India's largest fully integrated
            <br />
            <Box
              component="span"
              sx={{
                color: "#e63946",
                fontWeight: 900,
              }}
            >
              logistics services
            </Box>{" "}
            provider
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: 400,
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
              pl: { xs: 2, sm: 3, md: 4, lg: 6 },
              pr: { xs: 2, sm: 3, md: 2 },
            }}
          >
            Express Parcel • PTL • FTL • Cross Border • Supply Chain
          </Typography>
        </Box>
      </motion.div>
    </Container>
  )}

  {/* Tracking Order Card - Desktop only (positioned over video) */}
{videoEnded && (
  <Box
    sx={{
      display: { xs: "none", md: "block" },
      position: "absolute",
      top: "50%",
      right: { md: "8%", lg: "10%" },
      transform: "translateY(-50%)",
      zIndex: 2,
      width: "100%",
      maxWidth: "420px",
    }}
  >
    <motion.div
      initial={{ x: 100, opacity: 0, scale: 0.8 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2, ease: "easeOut" }}
    >
    <OrderTrackingCard videoEnded={videoEnded}/>
    </motion.div>
  </Box>
)}
</Box>
{/* Hero Video Section End */}

{/* Tracking Form - Mobile Only (Below video, above stats) */}  
{videoEnded && (
  <Box
    sx={{
      display: { xs: "block", md: "none" }, // Mobile only
      position: "relative",
      width: "100%",
      px: 2,
      py: 4,
      zIndex: 2,
    }}
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <OrderTrackingCard videoEnded={videoEnded} />
    </motion.div>
  </Box>
)}


{/* Stats Section */}
<Container
  id="tracking-section"
  data-section
  maxWidth="xl"
  sx={{ position: "relative", zIndex: 1, py: 8 }}
>
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: { xs: 2, md: 4 },
      justifyContent: "center",
    }}
  >
    {stats.map((stat, index) => (
      <Box
        key={index}
        sx={{
          flex: {
            xs: "1 1 calc(50% - 16px)",   // 2 per row on phones
            sm: "1 1 calc(33.33% - 24px)", // 3 per row on small tablets
            md: "1 1 calc(25% - 32px)",    // 4 per row on desktop
          },
          minWidth: {
            xs: "140px",
            sm: "180px",
            md: "220px",
          },
          maxWidth: {
            xs: "180px",
            sm: "240px",
            md: "300px",
          },
          display: "flex",
          justifyContent: "center",
          borderRadius:"60px",
          overflow:"hidden",
        }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.85 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: index * 0.12,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            y: { xs: 0, md: -15 }, // no jump on mobile
            scale: { xs: 1, md: 1.05 },
          }}
          style={{ width: "100%", borderRadius:"60px" }}
        >
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            scale={1.05}
            transitionSpeed={800}
            glareEnable={true}
            glareMaxOpacity={0.25}
            glareColor={isDark ? "#e63946" : "#1976d2"}
            glarePosition="all"
            style={{ borderRadius: "60px", width: "100%" }}
          >
            <Card
              sx={{
                p: { xs: 2.5, sm: 3, md: 4 },
                textAlign: "center",
                borderRadius:"60px",
                background: isDark
                  ? `linear-gradient(135deg, ${alpha("#1a1d29", 0.9)} 0%, ${alpha("#0a0e1a", 0.9)} 100%)`
                  : `linear-gradient(135deg, ${alpha("#ffffff", 0.95)} 0%, ${alpha("#f8fafc", 0.95)} 100%)`,
                backdropFilter: "blur(25px)",
                boxShadow: isDark
                  ? "0 20px 50px rgba(230, 57, 70, 0.18)"
                  : "0 20px 50px rgba(25, 118, 210, 0.18)",
                "&::before": {
                  background: isDark
                    ? "radial-gradient(circle at center, rgba(230,57,70,0.08) 0%, transparent 70%)"
                    : "radial-gradient(circle at center, rgba(25,118,210,0.08) 0%, transparent 70%)",
                },
              }}
            >
              <motion.div
                whileHover={{
                  rotate: { xs: 0, md: 360 },
                  scale: { xs: 1, md: 1.15 },
                }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon
                  sx={{
                    fontSize: { xs: 40, sm: 50, md: 60 },
                    color: isDark ? "#e63946" : "#1976d2",
                    mb: { xs: 1.5, md: 2 },
                  }}
                />
              </motion.div>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.4rem" },
                  mb: 1,
                  background: isDark
                    ? "linear-gradient(135deg, #e63946 0%, #ff6b6b 100%)"
                    : "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <AnimatedCounter
                  end={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                  suffix={stat.value.replace(/[0-9]/g, "")}
                />
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: isDark
                    ? alpha("#ffffff", 0.8)
                    : alpha("#000000", 0.8),
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                {stat.label}
              </Typography>
            </Card>
          </Tilt>
        </motion.div>
      </Box>
    ))}
  </Box>
</Container>

      {/* Features Section */}
      <Container
        data-section
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 1, py: 10 }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            data-aos="fade-up"
            sx={{
              textAlign: "center",
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              background: isDark
                ? "linear-gradient(135deg, #ffffff 0%, #e63946 100%)"
                : "linear-gradient(135deg, #1a1d29 0%, #1976d2 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h6"
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
              textAlign: "center",
              mb: 8,
              color: isDark ? alpha("#ffffff", 0.7) : alpha("#000000", 0.7),
            }}
          >
            Cutting-edge features that set us apart
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: "1 1 calc(25% - 32px)" },
                minWidth: { xs: "100%", sm: "calc(50% - 16px)", md: "200px" },
                maxWidth: { xs: "100%", sm: "calc(50% - 16px)", md: "300px" },
              }}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <Card
                  data-aos="zoom-in"
                  data-aos-delay={feature.delay}
                  sx={{
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                    background: isDark
                      ? alpha("#1a1d29", 0.8)
                      : alpha("#ffffff", 0.9),
                    backdropFilter: "blur(20px)",
                    border: `2px solid ${alpha(feature.color, 0.3)}`,
                    borderRadius: 4,
                    boxShadow: `0 20px 60px ${alpha(feature.color, 0.2)}`,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      borderColor: feature.color,
                      boxShadow: `0 30px 80px ${alpha(feature.color, 0.4)}`,
                      background: isDark
                        ? alpha(feature.color, 0.1)
                        : alpha(feature.color, 0.05),
                    },
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${feature.color
                          } 0%, ${alpha(feature.color, 0.6)} 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        boxShadow: `0 10px 40px ${alpha(feature.color, 0.4)}`,
                      }}
                    >
                      <feature.icon sx={{ fontSize: 40, color: "white" }} />
                    </Box>
                  </motion.div>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 2, color: feature.color }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: isDark
                        ? alpha("#ffffff", 0.7)
                        : alpha("#000000", 0.7),
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Services Section */}
      <Box
        id="services-section"
        data-section
        sx={{
          position: "relative",
          zIndex: 1,
          py: 10,
          mt: 10,
          background: isDark
            ? "linear-gradient(135deg, #1a1d29 0%, #0a0e1a 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              data-aos="fade-up"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: isDark
                  ? "linear-gradient(135deg, #ffffff 0%, #e63946 100%)"
                  : "linear-gradient(135deg, #1a1d29 0%, #1976d2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h6"
              data-aos="fade-up"
              data-aos-delay="100"
              sx={{
                textAlign: "center",
                mb: 8,
                color: isDark ? alpha("#ffffff", 0.7) : alpha("#000000", 0.7),
              }}
            >
              Complete logistics solutions for your business
            </Typography>
          </motion.div>

              {/*  */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {services.map((service, index) => {
              // Check if the service is Express or Air Freight
              const isComingSoon =
                service.title === "Express Delivery" || service.title === "Air Freight";

              return (
                <Box
                  key={index}
                  sx={{
                    flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: "1 1 calc(25% - 32px)" },
                    minWidth: { xs: "100%", sm: "calc(50% - 16px)", md: "200px" },
                    maxWidth: { xs: "100%", sm: "calc(50% - 16px)", md: "300px" },
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                    }}
                  >
                    <Tilt
                      // Disable tilt effect intensity if coming soon
                      tiltMaxAngleX={isComingSoon ? 5 : 20}
                      tiltMaxAngleY={isComingSoon ? 5 : 20}
                      scale={isComingSoon ? 1 : 1.05}
                      transitionSpeed={1000}
                    >
                      <Card
                        data-aos="flip-left"
                        data-aos-delay={index * 100}
                        sx={{
                          p: 4,
                          height: 280,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          background: service.gradient,
                          color: "white",
                          borderRadius: 4,
                          boxShadow: "0 25px 70px rgba(0,0,0,0.3)",
                          transition: "all 0.4s",
                          position: "relative", // Needed for the absolute badge
                          overflow: "hidden",   // Keeps badge contained
                          
                          // Conditional Styling for Coming Soon
                          ...(isComingSoon && {
                            cursor: "not-allowed",
                            filter: "grayscale(0.8)", // Desaturate colors
                            opacity: 0.8,
                          }),
                          
                          "&:hover": {
                            // Only apply hover lift if NOT coming soon
                            transform: !isComingSoon ? "translateY(-15px) scale(1.05)" : "none",
                            boxShadow: !isComingSoon ? "0 35px 90px rgba(0,0,0,0.4)" : "0 25px 70px rgba(0,0,0,0.3)",
                          },
                        }}
                      >
                        {/* Coming Soon Label */}
                        {isComingSoon && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 20,
                              right: -30,
                              background: "#ff9800", // Orange warning color
                              color: "#000",
                              transform: "rotate(45deg)",
                              width: "150px",
                              textAlign: "center",
                              py: 0.5,
                              fontWeight: "bold",
                              fontSize: "0.8rem",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                              zIndex: 2,
                            }}
                          >
                            Coming Soon
                          </Box>
                        )}

                        <motion.div
                          whileHover={!isComingSoon ? { rotate: [0, -10, 10, -10, 0] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <service.icon sx={{ fontSize: 70, mb: 3 }} />
                        </motion.div>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                          {service.description}
                        </Typography>
                      </Card>
                    </Tilt>
                  </motion.div>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container
        data-section
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 1, py: 15 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <Card
              data-aos="zoom-in"
              sx={{
                p: { xs: 6, md: 10 },
                textAlign: "center",
                background: isDark
                  ? "linear-gradient(135deg, #e63946 0%, #ff6b6b 100%)"
                  : "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                color: "white",
                borderRadius: 6,
                boxShadow: isDark
                  ? "0 30px 80px rgba(230, 57, 70, 0.4)"
                  : "0 30px 80px rgba(25, 118, 210, 0.3)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: alpha("#ffffff", 0.1),
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -50,
                  left: -50,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: alpha("#ffffff", 0.1),
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: "2rem", md: "3rem" },
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Ready to Transform Your Logistics?
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 5, opacity: 0.9, position: "relative", zIndex: 1 }}
              >
                Join thousands of businesses already shipping smarter
              </Typography>
              <MagneticButton>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.85 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/register")}
                    sx={{
                      px: 6,
                      py: 2.5,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      borderRadius: 3,
                      textTransform: "none",
                      bgcolor: "white",
                      color: isDark ? "#e63946" : "#1976d2",
                      boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
                      position: "relative",
                      zIndex: 1,
                      "&:hover": {
                        bgcolor: alpha("#ffffff", 0.95),
                        transform: "translateY(-8px)",
                        boxShadow: "0 25px 70px rgba(0,0,0,0.5)",
                      },
                    }}
                  >
                    Start Free Trial
                  </Button>
                </motion.div>
              </MagneticButton>
            </Card>
          </Tilt>
        </motion.div>
      </Container>
      {/* Status Checker Form */}
      <StatusCheckForm/>
      {/* Footer */}
    </Box>
  
     <Footer/>
  </>
  );
};

export default LandingPageNew;