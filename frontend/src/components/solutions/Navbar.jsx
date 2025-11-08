import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeMode } from "../../theme/ThemeProvider";
import { motion } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";
import MagneticButton from "../common/MagneticButton";
import "./Navbar.css";

const Navbar = () => {
  const { mode } = useThemeMode();
  const navigate = useNavigate();
  const isDark = mode === "dark";
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSolutionNavigate = (path) => {
    navigate(path);
    setShowSolutionsDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const handleScrollTo = (id) => {
    navigate("/");
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`solutions-navbar ${isDark ? 'dark' : 'light'}`}
    >
      <div className="navbar-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="navbar-logo"
        >
          <h1 className="logo-text">LogiFlow</h1>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo("services-section")}
            className="nav-link"
          >
            Services
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo("tracking-section")}
            className="nav-link"
          >
            Track
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo("footer-section")}
            className="nav-link"
          >
            About
          </motion.div>

          <div
            className="nav-dropdown"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="nav-link dropdown-trigger"
              onMouseEnter={() => setShowSolutionsDropdown(true)}
            >
              Solutions
              <span className="dropdown-arrow">▼</span>
            </motion.div>

            {showSolutionsDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="dropdown-menu"
                onMouseEnter={() => setShowSolutionsDropdown(true)}
                onMouseLeave={() => setShowSolutionsDropdown(false)}
              >
                <div
                  className="dropdown-item"
                  onClick={() => handleSolutionNavigate("/solutions/d2c")}
                >
                  <span className="dropdown-icon">⚡</span>
                  <div>
                    <div className="dropdown-title">D2C Solutions</div>
                    <div className="dropdown-subtitle">Direct to consumer delivery</div>
                  </div>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleSolutionNavigate("/solutions/b2b")}
                >
                  <span className="dropdown-icon">🚚</span>
                  <div>
                    <div className="dropdown-title">B2B Solutions</div>
                    <div className="dropdown-subtitle">Enterprise logistics</div>
                  </div>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleSolutionNavigate("/solutions/3pl")}
                >
                  <span className="dropdown-icon">📦</span>
                  <div>
                    <div className="dropdown-title">3PL Solutions</div>
                    <div className="dropdown-subtitle">Third-party logistics</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="navbar-actions">
            <ThemeToggle />
            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="navbar-cta-button"
              >
                Get Started
              </motion.button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
