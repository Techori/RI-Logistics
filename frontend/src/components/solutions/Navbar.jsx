import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useThemeMode } from "../../theme/ThemeProvider";
import { motion } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";
import MagneticButton from "../common/MagneticButton";
import "./Navbar.css";

const Navbar = () => {
  const { mode } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = mode === "dark";
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showPartnerDropdown, setShowPartnerDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setShowSolutionsDropdown(false);
    setShowServicesDropdown(false);
    setShowPartnerDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const handleScrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDropdownEnter = (dropdownName) => {
    setShowServicesDropdown(dropdownName === 'services');
    setShowPartnerDropdown(dropdownName === 'partner');
    setShowSolutionsDropdown(dropdownName === 'solutions');
  };

  const handleDropdownLeave = () => {
    setShowServicesDropdown(false);
    setShowPartnerDropdown(false);
    setShowSolutionsDropdown(false);
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
          <h1 className="logo-text">RI Logistics </h1>
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
          {/* Services Dropdown */}
          <div className="nav-dropdown" onMouseLeave={handleDropdownLeave}>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="nav-link dropdown-trigger"
              onMouseEnter={() => handleDropdownEnter('services')}
            >
              Services
              <span className="dropdown-arrow">▼</span>
            </motion.div>

            {showServicesDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="dropdown-menu"
              >
                <div
                  className="dropdown-item"
                  onClick={() => handleNavigate("/part-truckload")}
                >
                  <span className="dropdown-icon">📦</span>
                  <div>
                    <div className="dropdown-title">Part Truckload</div>
                    <div className="dropdown-subtitle">Shared freight delivery</div>
                  </div>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleNavigate("/full-truckload")}
                >
                  <span className="dropdown-icon">🚚</span>
                  <div>
                    <div className="dropdown-title">Full Truckload</div>
                    <div className="dropdown-subtitle">Complete vehicle service</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Partner Dropdown */}
          <div className="nav-dropdown" onMouseLeave={handleDropdownLeave}>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="nav-link dropdown-trigger"
              onMouseEnter={() => handleDropdownEnter('partner')}
            >
              Partner
              <span className="dropdown-arrow">▼</span>
            </motion.div>

            {showPartnerDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="dropdown-menu"
              >
                <div
                  className="dropdown-item"
                  onClick={() => handleNavigate("/franchise")}
                >
                  <span className="dropdown-icon">🏢</span>
                  <div>
                    <div className="dropdown-title">Franchise Opportunities</div>
                    <div className="dropdown-subtitle">Join our network</div>
                  </div>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleNavigate("/delivery-partner")}
                >
                  <span className="dropdown-icon">🚗</span>
                  <div>
                    <div className="dropdown-title">Delivery Partner</div>
                    <div className="dropdown-subtitle">Drive with us</div>
                  </div>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleNavigate("/fleet-owners")}
                >
                  <span className="dropdown-icon">🚛</span>
                  <div>
                    <div className="dropdown-title">Fleet Owners</div>
                    <div className="dropdown-subtitle">Partner your fleet</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Support Link */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate("/support")}
            className="nav-link"
          >
            Support
          </motion.div>

          {/* Solutions Dropdown */}
          <div className="nav-dropdown" onMouseLeave={handleDropdownLeave}>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="nav-link dropdown-trigger"
              onMouseEnter={() => handleDropdownEnter('solutions')}
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
              >
                <div
                  className="dropdown-item"
                  onClick={() => handleNavigate("/b2b-solution")}
                >
                  <span className="dropdown-icon">📊</span>
                  <div>
                    <div className="dropdown-title">B2B</div>
                    <div className="dropdown-subtitle">Business to business</div>
                  </div>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleNavigate("/d2d-solution")}
                >
                  <span className="dropdown-icon">🏠</span>
                  <div>
                    <div className="dropdown-title">D2D</div>
                    <div className="dropdown-subtitle">Door to door delivery</div>
                  </div>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => handleNavigate("/3pl-solution")}
                >
                  <span className="dropdown-icon">📦</span>
                  <div>
                    <div className="dropdown-title">3PL</div>
                    <div className="dropdown-subtitle">Third-party logistics</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* About Link */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo("footer-section")}
            className="nav-link"
          >
            About
          </motion.div>

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
