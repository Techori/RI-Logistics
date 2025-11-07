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
import LandingHeader from '../components/layout/LandingHeader';
import truckImage from '../assets/realtruck.png';
import fullTruckBg from '../assets/fullTruckLoad.png';

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
      <LandingHeader />

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
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
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
            </Grid>
          </Grid>
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
              bgcolor: alpha('#f5f5dc', 0.9),
              boxShadow: 'none',
              borderRadius: 3,
              p: { xs: 2, md: 3 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 2, md: 3 },
            }}
          >
            {/* Left side - Text */}
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: '#000',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                {stats[0].value}
              </Typography>
              {stats[0].label && (
                <Typography 
                  variant="h6" 
                  color="text.secondary" 
                  sx={{ 
                    fontWeight: 600,
                    lineHeight: 1.3,
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
                justifyContent: { xs: 'center', md: 'flex-end' },
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
        <Box sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3}>
            {/* Second stat card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  minHeight: 180,
                  bgcolor: alpha('#e8f4f8', 0.8),
                  boxShadow: 'none',
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {stats[1].value}
                  </Typography>
                  {stats[1].label && (
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      {stats[1].label}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* Third stat card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  minHeight: 180,
                  bgcolor: alpha('#f3e5f5', 0.8),
                  boxShadow: 'none',
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {stats[2].value}
                  </Typography>
                  {stats[2].label && (
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                      {stats[2].label}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* Additional Features Cards */}
            {additionalFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    minHeight: 180,
                    bgcolor: alpha('#e8f5e9', 0.8),
                    boxShadow: 'none',
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {feature}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Why choose us?
          </Typography>
          <Grid container spacing={3}>
            {/* Get All Vehicle Types - Featured Card */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: '#000',
                  color: 'white',
                  borderRadius: 3,
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 400,
                }}
              >
                <Box>
                  <Box sx={{ mb: 3 }}>
                    <LocalShipping sx={{ fontSize: 80, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#e53935' }}>
                    Get all vehicle types
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
                    14ft, 17ft, 20ft, 32ft, 32ft MXL
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Other Features - 2x3 Grid */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {whyChooseUs.slice(1).map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card
                      sx={{
                        height: '100%',
                        bgcolor: alpha(theme.palette.grey[100], 0.8),
                        boxShadow: 'none',
                        borderRadius: 3,
                        p: 3,
                        minHeight: 190,
                      }}
                    >
                      <CardContent>
                        <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Built for Businesses Section */}
      <Box sx={{ py: 8, bgcolor: '#e53935', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Grid>
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

      {/* Explore Other Services Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Explore other <strong>Services</strong>
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                    }}
                  >
                    {service.icon}
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderTop: 1,
          borderColor: 'divider',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            RELOGISTICS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ISO 9001: 2015, ISO 27001: 2022 Certified Company
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            CIN: L63090DL2011PLC221234
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>
            Information Security Policy
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Relogistics is committed to safeguarding the confidentiality, integrity and
            availability of all physical and electronic information assets of the organization.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default FullTruckloadPage;
