import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  alpha,
} from '@mui/material';
import {
  LocalShipping,
  Schedule,
  VerifiedUser,
  CurrencyRupee,
  GpsFixed,
  CheckCircle,
} from '@mui/icons-material';
import Navbar from '../components/solutions/Navbar';
import { useThemeMode } from '../theme/ThemeProvider';
import truckImage from '../assets/realtruck.png';
import partTruckBg from '../assets/partTruckImage.png';
import Footer from '../components/solutions/Footer';
const PartTruckloadPage = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';

  // Stats data
  const stats = [
    {
      value: 'Get eCommerce like experience with Relogistics\'s dedicated panel for your B2B shipments',
      label: '',
    },
    {
      value: 'Start with as low as ₹6/Kg',
      label: '',
    },
    {
      value: '18,700+',
      label: 'Pin codes covered',
    },
  ];

  // Features data
  const features = [
    {
      icon: <CheckCircle sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'Lowest Out of Delivery Area (ODA) pincode',
      description: '',
    },
    {
      icon: <Schedule sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'Appointment based deliveries to warehouses and malls',
      description: '',
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'e-POD, OTP verified delivery and more value added services',
      description: '',
    },
    {
      icon: <CurrencyRupee sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'Reduced risk on Freight with consignment protection',
      description: '',
    },
    {
      icon: <LocalShipping sx={{ fontSize: 48, color: '#e53935' }} />,
      title: '11000+ fleet size operating daily with GPS tracking',
      description: '',
    },
  ];

  // Additional features
  const additionalFeatures = [
    'Dedicated Customer Support',
    'Scheduled Appointment deliveries',
  ];

  // Services
  const services = [
    'Express Parcel',
    'Warehousing',
    'Part Truckload',
    'Full Truckload',
    'Cross Border',
    'Data Intelligence',
    'Software Platform',
  ];

  // Solutions
  const solutions = ['D2C Brands', 'Personal Courier', 'B2B Enterprises'];

  // Partners
  const partners = [
    'Franchise Opportunities',
    'Delivery Partner',
    'Fleet Owner',
  ];

  // Company links
  const company = [
    'About Us',
    'Governance',
    'Investor Relations',
    'ODR Portal',
    'Press Release',
    'Careers',
  ];

  // Get in touch
  const getInTouch = ['Support', 'Raise a query', 'Store Locator', 'Rate Calculator'];

  // Policies
  const policies = [
    'Terms & Conditions',
    'Privacy Policy',
    'Cookie Policy',
    'Fraud Disclaimer',
    'ONDC Disclaimer',
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${partTruckBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          mt: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: '1 1 70%', maxWidth: '70%' }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3.5rem' },
                }}
              >
                Send your <span style={{ color: '#e53935' }}>cargo</span> with Relogistics
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1rem', md: '1.5rem' },
                }}
              >
                Send bulk shipments across India via our Part Truck Load (PTL) network
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<LocalShipping />}
                sx={{
                  bgcolor: 'white',
                  color: 'text.primary',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: alpha('#fff', 0.9),
                  },
                }}
              >
                Sign up as a business
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 3 }}>
        {/* Full Width Card with truck image and first stat */}
        <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, mb: 2 }}>
          <Card
            sx={{
              width: '100%',
              minHeight: { xs: 150, md: 180 },
              bgcolor: isDark 
                ? alpha('#1a1d29', 0.8)
                : alpha('#f5f5dc', 0.9),
              boxShadow: 'none',
              borderRadius: 3,
              p: { xs: 2, md: 3 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 2, md: 3 },
            }}
          >
            {/* Left side - Text */}
            <Box sx={{ flex: 1, textAlign: 'center', width: '100%' }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: isDark ? '#fff' : '#000',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                {stats[0].value}
              </Typography>
              {stats[0].label && (
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: isDark ? alpha('#fff', 0.7) : 'text.secondary',
                  }}
                >
                  {stats[0].label}
                </Typography>
              )}
            </Box>
            
            {/* Right side - Truck Image */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <img
                src={truckImage}
                alt="Reliable Freight Truck"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Card>
        </Box>

        {/* Bottom Grid - 4 cards in a row */}
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {/* Second stat card */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: '200px' }}>
              <Card
                sx={{
                  height: '100%',
                  minHeight: 180,
                  bgcolor: isDark 
                    ? alpha('#2a2d39', 0.8)
                    : alpha('#d3d3d3', 0.5),
                  boxShadow: 'none',
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: isDark ? '#fff' : '#000',
                    }}
                  >
                    {stats[1].value}
                  </Typography>
                  {stats[1].label && (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 500,
                        color: isDark ? alpha('#fff', 0.7) : 'text.secondary',
                      }}
                    >
                      {stats[1].label}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Box>

            {/* Third stat card */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: '200px' }}>
              <Card
                sx={{
                  height: '100%',
                  minHeight: 180,
                  bgcolor: isDark 
                    ? alpha('#3a2d39', 0.8)
                    : alpha('#e8c5d9', 0.5),
                  boxShadow: 'none',
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: isDark ? '#fff' : '#000',
                    }}
                  >
                    {stats[2].value}
                  </Typography>
                  {stats[2].label && (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 600,
                        color: isDark ? alpha('#fff', 0.7) : 'text.secondary',
                      }}
                    >
                      {stats[2].label}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Box>

            {/* Additional Features Cards */}
            {additionalFeatures.map((feature, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: '200px' }}>
                <Card
                  sx={{
                    height: '100%',
                    minHeight: 180,
                    bgcolor: isDark 
                      ? alpha('#2a392a', 0.8)
                      : alpha('#c8d8c8', 0.5),
                    boxShadow: 'none',
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: isDark ? '#fff' : '#000',
                    }}
                  >
                    {feature}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: isDark ? '#0a0e1a' : '#1a1d29' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            {features.map((feature, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 18%' }, minWidth: '200px' }}>
                <Card
                  sx={{
                    height: '100%',
                    minHeight: 200,
                    bgcolor: isDark 
                      ? alpha('#2a2d39', 0.9)
                      : alpha('#3a3d49', 0.9),
                    color: 'white',
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                    {feature.title}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Footer/>
    </Box>
  );
};

export default PartTruckloadPage;
