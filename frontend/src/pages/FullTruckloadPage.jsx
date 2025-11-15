import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  alpha,
} from '@mui/material';
import {
  LocalShipping,
  Schedule,
  VerifiedUser,
  Speed,
  GpsFixed,
  CheckCircle,
  Security,
  Assignment,
  Inventory,
  Public,
} from '@mui/icons-material';
import Navbar from '../components/solutions/Navbar';
import truckImage from '../assets/realtruck.png';
import fullTruckBg from '../assets/fullTruckLoad.png';
import Footer from '../components/solutions/Footer';
const FullTruckloadPage = () => {
  const theme = useTheme();

  // Client logos data
  const clients = [
    { name: 'Amazon', logo: 'Amazon' },
    { name: 'P&G', logo: 'P&G' },
    { name: 'Reliance Jio', logo: 'Reliance Jio' },
    { name: 'Havells', logo: 'Havells' },
  ];

  // Stats data
  const stats = [
    {
      value: '20,000+',
      label: 'Trips per Month',
    },
    {
      value: '99%',
      label: 'On Time Delivery',
    },
    {
      value: 'Pan-India',
      label: 'Coverage',
    },
  ];

  // Why Choose Us features
  const whyChooseUs = [
    {
      icon: <LocalShipping sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'All Vehicle Types',
      description: '14ft, 17ft, 20ft, 32ft, 32ft MXL',
    },
    {
      icon: <Speed sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'Competitive Rates',
      description: 'Best pricing in the industry',
    },
    {
      icon: <GpsFixed sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'Pan-India Coverage',
      description: 'Extensive network across India',
    },
    {
      icon: <CheckCircle sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'Real-Time Tracking',
      description: 'Track your shipment 24/7',
    },
    {
      icon: <Schedule sx={{ fontSize: 48, color: '#e53935' }} />,
      title: '99% On Time Deliveries',
      description: 'Guaranteed timely delivery',
    },
    {
      icon: <Assignment sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'Quick & Easy Booking',
      description: 'Simple booking process',
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 48, color: '#e53935' }} />,
      title: 'Verified Vehicles & Drivers',
      description: 'All vehicles and drivers verified',
    },
  ];

  // Additional Features
  const additionalFeatures = [
    'Real-time truck matching platform',
    'Instant booking confirmation',
  ];

  // Services
  const services = [
    {
      icon: <LocalShipping sx={{ fontSize: 60, color: '#e53935' }} />,
      title: 'Express Parcel',
      description: 'Send shipments across India for parcels across categories including heavy goods.',
    },
    {
      icon: <Inventory sx={{ fontSize: 60, color: '#e53935' }} />,
      title: 'Part Truckload Freight (PTL)',
      description: 'Join one of the largest Express PTL networks in India. Get door-to-door delivery.',
    },
    {
      icon: <Public sx={{ fontSize: 60, color: '#e53935' }} />,
      title: 'Cross Border',
      description: 'Get door-to-door, port-to-port Express Parcel and Freight services from India to 220+ countries.',
    },
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
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fullTruckBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          mt: { xs: 10, sm: 12 },
          pt: 4,
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
                Get Full Truck Across India, Instantly.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1rem', md: '1.5rem' },
                }}
              >
                India's most trusted network for fast, on-demand full truckload delivery
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<LocalShipping />}
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
                Book Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth={false} sx={{ maxWidth: '1600px', px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Why choose us?
          </Typography>
          
          {/* Main Container with Black Box and Grid Box */}
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              gap: 2.5,
            }}
          >
            {/* Black Box - Left Side */}
            <Box sx={{ flex: { xs: '1 1 100%', lg: '0 0 23%' } }}>
              <Card
                sx={{
                  bgcolor: '#000',
                  color: 'white',
                  borderRadius: 3,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: { xs: '240px', lg: '100%' },
                  minHeight: '240px',
                }}
              >
                <Box>
                  <Box sx={{ mb: 3 }}>
                    <LocalShipping sx={{ fontSize: 80, color: 'white' }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 2, 
                      color: '#e53935',
                      lineHeight: 1.2,
                      fontSize: '1.5rem',
                    }}
                  >
                    Get all vehicle types
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 400, 
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                    }}
                  >
                    14ft, 17ft, 20ft, 32ft, 32ft MXL
                  </Typography>
                </Box>
              </Card>
            </Box>

            {/* Grid Box - Right Side with 6 Cards (2 rows x 3 columns) */}
            <Box 
              sx={{ 
                flex: { xs: '1 1 100%', lg: '1 1 77%' },
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
              }}
            >
              {/* Row 1 - First 3 cards */}
              <Box 
                sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2.5,
                }}
              >
                {whyChooseUs.slice(1, 4).map((feature, index) => (
                  <Box 
                    key={index} 
                    sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 10px)', lg: '1 1 calc(33.333% - 17px)' } }}
                  >
                    <Card
                      sx={{
                        bgcolor: alpha(theme.palette.grey[100], 0.8),
                        boxShadow: 'none',
                        borderRadius: 3,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        height: '240px',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 3,
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Card>
                  </Box>
                ))}
              </Box>

              {/* Row 2 - Last 3 cards */}
              <Box 
                sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2.5,
                }}
              >
                {whyChooseUs.slice(4, 7).map((feature, index) => (
                  <Box 
                    key={index} 
                    sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 10px)', lg: '1 1 calc(33.333% - 17px)' } }}
                  >
                    <Card
                      sx={{
                        bgcolor: alpha(theme.palette.grey[100], 0.8),
                        boxShadow: 'none',
                        borderRadius: 3,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        height: '240px',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 3,
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Built for Businesses Section */}
      <Box sx={{ py: 8, bgcolor: '#e53935', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
            <Box sx={{ flex: '1 1 50%' }}>
              <Typography
                variant="h2"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Built for Businesses. Trusted Nationwide.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <CheckCircle sx={{ mr: 2, mt: 0.5 }} />
                  <Typography variant="h6">
                    India's largest real time truck matching platform
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <CheckCircle sx={{ mr: 2, mt: 0.5 }} />
                  <Typography variant="h6">
                    20,000+ trips per month
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <CheckCircle sx={{ mr: 2, mt: 0.5 }} />
                  <Typography variant="h6">
                    Trusted by top brands - Amazon, P&G, Reliance Jio, Havells
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                size="large"
                startIcon={<LocalShipping />}
                sx={{
                  mt: 4,
                  bgcolor: '#000',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: '#333',
                  },
                }}
              >
                Book Now
              </Button>
            </Box>
            <Box sx={{ flex: '1 1 50%' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={truckImage}
                  alt="Full Truckload"
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Partner CTA Section */}
      <Box sx={{ py: 8, bgcolor: '#1a1a1a', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Want to partner with us for fleet services instead?
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              mt: 2,
              color: 'white',
              borderColor: 'white',
              px: 4,
              py: 1.5,
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Learn more here →
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Footer/>
    </Box>
  );
};

export default FullTruckloadPage;
