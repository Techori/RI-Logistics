import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  alpha,
} from '@mui/material';
import {
  KeyboardArrowDown,
  LocalShipping,
  Warehouse,
  Inventory,
  LocalShippingOutlined,
  Public,
  Analytics,
  Menu as MenuIcon,
  Settings,
  People,
  DirectionsCar,
  LocalShippingRounded,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '../../theme/ThemeProvider';
import ThemeToggle from '../common/ThemeToggle';
import { motion } from 'framer-motion';

const LandingHeader = () => {
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [partnerAnchor, setPartnerAnchor] = useState(null);
  const navigate = useNavigate();
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  const handleServicesOpen = (event) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchor(null);
  };

  const handlePartnerOpen = (event) => {
    setPartnerAnchor(event.currentTarget);
  };

  const handlePartnerClose = () => {
    setPartnerAnchor(null);
  };

  const handleServiceClick = (path) => {
    navigate(path);
    handleServicesClose();
  };

  const handlePartnerClick = (path) => {
    navigate(path);
    handlePartnerClose();
  };

  const services = [
    {
      name: 'Express Parcel',
      icon: <LocalShipping sx={{ color: isDark ? '#fff' : '#666' }} />,
      path: '/express-parcel',
    },
    {
      name: 'Warehousing',
      icon: <Warehouse sx={{ color: isDark ? '#fff' : '#666' }} />,
      path: '/warehousing',
    },
    {
      name: 'Part Truckload',
      icon: <Inventory sx={{ color: '#e63946' }} />,
      path: '/part-truckload',
    },
    {
      name: 'Full Truckload',
      icon: <LocalShippingOutlined sx={{ color: isDark ? '#fff' : '#666' }} />,
      path: '/full-truckload',
    },
    {
      name: 'Cross Border',
      icon: <Public sx={{ color: isDark ? '#fff' : '#666' }} />,
      path: '/cross-border',
    },
    {
      name: 'Data Intelligence',
      icon: <Analytics sx={{ color: isDark ? '#fff' : '#666' }} />,
      path: '/data-intelligence',
    },
  ];

  const partners = [
    {
      name: 'Franchise Opportunities',
      icon: <People sx={{ color: isDark ? '#fff' : '#666' }} />,
      path: '/franchise',
    },
    {
      name: 'Delivery Partner',
      icon: <DirectionsCar sx={{ color: isDark ? '#fff' : '#666' }} />,
      path: '/delivery-partner',
    },
    {
      name: 'Fleet Owners',
      icon: <LocalShippingRounded sx={{ color: isDark ? '#fff' : '#666' }} />,
      path: '/fleet-owners',
    },
  ];

  return (
    <Box
      component={motion.div}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(20px)',
        bgcolor: isDark ? alpha('#1a1d29', 0.8) : alpha('#ffffff', 0.8),
        borderBottom: `1px solid ${
          isDark ? alpha('#ffffff', 0.1) : alpha('#000000', 0.1)
        }`,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Typography
              variant="h5"
              onClick={() => navigate('/')}
              sx={{
                fontWeight: 800,
                background: isDark
                  ? 'linear-gradient(135deg, #e63946 0%, #ff6b6b 100%)'
                  : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              LogiFlow
            </Typography>
          </motion.div>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {/* Services Dropdown */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Box
                onClick={handleServicesOpen}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: isDark
                      ? alpha('#ffffff', 0.9)
                      : alpha('#000000', 0.8),
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: isDark ? '#e63946' : '#1976d2',
                    },
                  }}
                >
                  Services
                </Typography>
                <KeyboardArrowDown
                  sx={{
                    fontSize: 20,
                    color: isDark
                      ? alpha('#ffffff', 0.9)
                      : alpha('#000000', 0.8),
                  }}
                />
              </Box>
            </motion.div>
            <Menu
              anchorEl={servicesAnchor}
              open={Boolean(servicesAnchor)}
              onClose={handleServicesClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 250,
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  bgcolor: isDark ? '#1a1d29' : '#ffffff',
                },
              }}
            >
              {services.map((service) => (
                <MenuItem
                  key={service.name}
                  onClick={() => handleServiceClick(service.path)}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      bgcolor: isDark
                        ? alpha('#e63946', 0.1)
                        : alpha('#1976d2', 0.1),
                    },
                  }}
                >
                  <ListItemIcon>{service.icon}</ListItemIcon>
                  <ListItemText
                    primary={service.name}
                    primaryTypographyProps={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                    }}
                  />
                </MenuItem>
              ))}
            </Menu>

            {/* Partner Dropdown */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Box
                onClick={handlePartnerOpen}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: isDark
                      ? alpha('#ffffff', 0.9)
                      : alpha('#000000', 0.8),
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: isDark ? '#e63946' : '#1976d2',
                    },
                  }}
                >
                  Partner
                </Typography>
                <KeyboardArrowDown
                  sx={{
                    fontSize: 20,
                    color: isDark
                      ? alpha('#ffffff', 0.9)
                      : alpha('#000000', 0.8),
                  }}
                />
              </Box>
            </motion.div>
            <Menu
              anchorEl={partnerAnchor}
              open={Boolean(partnerAnchor)}
              onClose={handlePartnerClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 250,
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  bgcolor: isDark ? '#1a1d29' : '#ffffff',
                },
              }}
            >
              {partners.map((partner) => (
                <MenuItem
                  key={partner.name}
                  onClick={() => handlePartnerClick(partner.path)}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      bgcolor: isDark
                        ? alpha('#e63946', 0.1)
                        : alpha('#1976d2', 0.1),
                    },
                  }}
                >
                  <ListItemIcon>{partner.icon}</ListItemIcon>
                  <ListItemText
                    primary={partner.name}
                    primaryTypographyProps={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                    }}
                  />
                </MenuItem>
              ))}
            </Menu>

            {/* Support Link */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Typography
                onClick={() => navigate('/support')}
                sx={{
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: isDark
                    ? alpha('#ffffff', 0.9)
                    : alpha('#000000', 0.8),
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: isDark ? '#e63946' : '#1976d2',
                  },
                }}
              >
                Support
              </Typography>
            </motion.div>

            {['Solutions', 'Track', 'About'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  sx={{
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: isDark
                      ? alpha('#ffffff', 0.9)
                      : alpha('#000000', 0.8),
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: isDark ? '#e63946' : '#1976d2',
                    },
                  }}
                >
                  {item}
                </Typography>
              </motion.div>
            ))}
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/login')}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  background: isDark
                    ? 'linear-gradient(135deg, #e63946 0%, #ff6b6b 100%)'
                    : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                  boxShadow: isDark
                    ? '0 4px 14px rgba(230, 57, 70, 0.4)'
                    : '0 4px 14px rgba(25, 118, 210, 0.3)',
                  '&:hover': {
                    boxShadow: isDark
                      ? '0 6px 20px rgba(230, 57, 70, 0.6)'
                      : '0 6px 20px rgba(25, 118, 210, 0.4)',
                  },
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingHeader;
