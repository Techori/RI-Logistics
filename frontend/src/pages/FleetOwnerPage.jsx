import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  LocalShipping,
  Payment,
  Phone,
  BusinessCenter,
  CheckCircle,
  ExpandMore,
  ArrowForward,
} from '@mui/icons-material';
import Navbar from '../components/solutions/Navbar';
import truckHeroImage from '../assets/fullTruckLoad.png';

const FleetOwnerPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Stats data
  const stats = [
    {
      icon: <LocalShipping sx={{ fontSize: 48, color: '#ef4444' }} />,
      value: '600,000+',
      label: 'Trips',
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 48, color: '#ef4444' }} />,
      value: '16,000+',
      label: 'Partners',
    },
    {
      icon: <CheckCircle sx={{ fontSize: 48, color: '#ef4444' }} />,
      value: '1700+',
      label: 'Clients',
    },
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      image: '/path-to-download-image.png',
      title: 'Download Axle app & sign up with basic details & KYC',
    },
    {
      image: '/path-to-view-orders-image.png',
      title: 'View spot orders and long term contracts',
    },
    {
      image: '/path-to-bid-image.png',
      title: 'Bid to win orders & contracts for maximum utilization',
    },
    {
      image: '/path-to-payment-image.png',
      title: 'On time payments, access to ledger & assistance',
    },
  ];

  // Benefits
  const benefits = [
    {
      icon: <LocalShipping sx={{ fontSize: 48, color: '#ef4444' }} />,
      title: 'Regular demand on preferred lanes',
      description: 'Cover new routes and get additional business on usual to-and-fro routes',
    },
    {
      icon: <Payment sx={{ fontSize: 48, color: '#ef4444' }} />,
      title: 'Instant payments',
      description: 'We offer advances instantly on truck loading, and balances within 2 days of proof of delivery',
    },
    {
      icon: <Phone sx={{ fontSize: 48, color: '#ef4444' }} />,
      title: 'Real time support by our calling team',
      description: 'Reach us on +911246719699 or vendorhelpdesk@delhivery.com',
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 48, color: '#ef4444' }} />,
      title: 'More opportunities',
      description: "Grow your business with India's fastest growing FLT exchange",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: 'What kind of orders & contracts can fleet partners get access to?',
      answer: 'Fleet partners can access both spot orders and long-term contracts across various routes in India.',
    },
    {
      question: 'How can fleet partners start bidding?',
      answer: 'After signing up and completing KYC, fleet partners can view available orders and place bids directly through the Axle app.',
    },
    {
      question: 'How can fleet partners track payments?',
      answer: 'All payment information and ledger access is available in the Axle app for easy tracking.',
    },
    {
      question: 'Is there call support for fleet partners?',
      answer: 'Yes, we provide real-time support through our calling team at +911246719699 or via email at vendorhelpdesk@delhivery.com',
    },
  ];

  // Other partner programs
  const otherPrograms = [
    {
      image: '/path-to-delivery-partner.png',
      title: 'Delivery Partner',
      description: 'Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking',
    },
    {
      image: '/path-to-local-delivery.png',
      title: 'Local Delivery Franchise',
      description: 'Join one of the largest Express PTL networks in India. Get door-to-door and hub-to-hub delivery with additions such as multi-modal freight and client dashboard',
    },
    {
      image: '/path-to-courier-sales.png',
      title: 'Courier & Sales Franchise',
      description: "Unlock your earning potential by joining India's largest fully integrated logistics service provider. Sign up as a franchisee to open our company branded outlet in your city",
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${truckHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          mt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '700px' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3.5rem' },
              }}
            >
              Maximum Utilisation,
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: '2rem', md: '3.5rem' },
                color: '#ef4444',
              }}
            >
              Maximum Earning
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Transporters, Brokers, Fleet Owners earn more on routes with us. Get real-time load visibility and on-time payments
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: 'white',
                color: 'text.primary',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: alpha('#fff', 0.9),
                },
              }}
            >
              Download Axle App
            </Button>
          </Box>
          {/* Red square decoration */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 60,
              height: 60,
              bgcolor: '#ef4444',
            }}
          />
        </Container>
      </Box>

      {/* Introducing AXLE Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
            {/* Left side - Text */}
            <Box sx={{ flex: '1 1 50%' }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                Introducing <Box component="span" sx={{ color: '#000' }}>AXLE by Delhivery</Box>
              </Typography>
              <Box sx={{ width: 100, height: 4, bgcolor: '#ef4444', mb: 4 }} />
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                An app for Fleet Owners, Transporters and Brokers, where you can search or get recommendation on hundreds of spot & contract loads on your favourite lanes, everyday. We maintain transparency, reliability & availability, and strive to provide the best experience.
              </Typography>
              <Box component="ul" sx={{ pl: 2, '& li': { mb: 2, color: 'text.secondary' } }}>
                <li>Sign up with 3 easy steps</li>
                <li>Find loads in your operating cities</li>
                <li>Add trucks, get matched with loads</li>
                <li>Bid on spot orders and long term contracts</li>
                <li>Enjoy hassle-free on-time payments</li>
              </Box>
            </Box>

            {/* Right side - App mockup */}
            <Box sx={{ flex: '1 1 50%', position: 'relative' }}>
              <Box
                sx={{
                  bgcolor: '#1a1a1a',
                  borderRadius: 3,
                  p: 4,
                  minHeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Red square decorations */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    width: 60,
                    height: 60,
                    bgcolor: '#ef4444',
                  }}
                />
                <Typography variant="h5" color="white">
                  [AXLE App Mockup]
                </Typography>
                <Typography variant="body2" sx={{ position: 'absolute', bottom: 20, color: 'white' }}>
                  Bid for spot & contract loads
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 10, bgcolor: '#1a1a1a', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Join India's largest integrated <Box component="span" sx={{ color: '#ef4444' }}>logistics</Box> provider
          </Typography>
          <Box sx={{ width: 100, height: 4, bgcolor: '#ef4444', mx: 'auto', mb: 8 }} />
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, textAlign: 'center', minWidth: '200px' }}>
                <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.8 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* How it works Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            How it <Box component="span" sx={{ color: '#000' }}>works</Box>
          </Typography>
          <Box sx={{ width: 100, height: 4, bgcolor: '#ef4444', mb: 8 }} />

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {howItWorksSteps.map((step, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: '250px' }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      height: 250,
                      bgcolor: alpha(theme.palette.grey[200], 0.5),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      [Step {index + 1} Image]
                    </Typography>
                  </Box>
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {step.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 10, bgcolor: '#1a1a1a', color: 'white' }}>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            Benefits
          </Typography>
          <Box sx={{ width: 100, height: 4, bgcolor: '#ef4444', mb: 8 }} />

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {benefits.map((benefit, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: '250px' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
            {/* Left side - Image */}
            <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '400px' } }}>
              <Box
                sx={{
                  position: 'relative',
                  height: 450,
                }}
              >
                {/* Top-left red square */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 60,
                    height: 60,
                    bgcolor: '#ef4444',
                    zIndex: 1,
                  }}
                />
                {/* Truck Image Placeholder */}
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: alpha(theme.palette.grey[300], 0.5),
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    [Truck on Road Image]
                  </Typography>
                </Box>
                {/* Bottom-right red square */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 60,
                    height: 60,
                    bgcolor: '#ef4444',
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>

            {/* Right side - Testimonial */}
            <Box sx={{ flex: '1 1 auto' }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                What our <Box component="span" sx={{ color: '#000' }}>partners say</Box>
              </Typography>
              <Box sx={{ width: 100, height: 4, bgcolor: '#ef4444', mb: 4 }} />
              <Typography
                variant="h1"
                sx={{
                  color: '#ef4444',
                  fontWeight: 700,
                  mb: 3,
                  fontSize: '4rem',
                  lineHeight: 1,
                }}
              >
                "
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  fontSize: '1.1rem', 
                  lineHeight: 1.8, 
                  color: 'text.secondary',
                }}
              >
                The app is very easy to use, and we have been hauling with Delhivery for a year now. The interface is seamless and has easy bookings.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Gagan Rajesh Behl,
              </Typography>
              <Typography variant="body2" sx={{ color: '#ef4444', fontWeight: 500 }}>
                Mumbai
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
            {/* Left side - Illustration */}
            <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '400px' } }}>
              <Box
                sx={{
                  bgcolor: alpha(theme.palette.grey[100], 0.5),
                  borderRadius: 3,
                  p: 4,
                  minHeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 60,
                    height: 60,
                    bgcolor: '#ef4444',
                  }}
                />
                <Typography variant="h6" color="text.secondary">
                  [FAQ Illustration]
                </Typography>
              </Box>
            </Box>

            {/* Right side - FAQs */}
            <Box sx={{ flex: '1 1 auto' }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                Frequently asked <Box component="span" sx={{ color: '#000' }}>questions (FAQs)</Box>
              </Typography>
              <Box sx={{ width: 100, height: 4, bgcolor: '#ef4444', mb: 4 }} />
              
              <Box>
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `faq-${index}`}
                    onChange={handleAccordionChange(`faq-${index}`)}
                    elevation={0}
                    sx={{
                      '&:before': { display: 'none' },
                      borderBottom: 1,
                      borderColor: 'divider',
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography sx={{ fontWeight: expanded === `faq-${index}` ? 600 : 500 }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, bgcolor: '#1a1a1a', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Register as a partner today to experience how you can maximise your fleet to earn more with us
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              mt: 4,
              bgcolor: 'white',
              color: 'text.primary',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: alpha('#fff', 0.9),
              },
            }}
          >
            Download Axle App
          </Button>
        </Container>
      </Box>

      {/* Explore Other Partner Programs */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
            Explore other <Box component="span" sx={{ fontWeight: 700 }}>partner programs</Box>
          </Typography>
          <Box sx={{ width: 100, height: 4, bgcolor: '#ef4444', mb: 6 }} />

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {otherPrograms.map((program, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: '300px' }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 250,
                      bgcolor: alpha(theme.palette.grey[200], 0.5),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* Red square decorations */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        left: -20,
                        width: 60,
                        height: 60,
                        bgcolor: '#ef4444',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -20,
                        right: -20,
                        width: 60,
                        height: 60,
                        bgcolor: '#ef4444',
                      }}
                    />
                    <Typography variant="h6" color="text.secondary">
                      [{program.title}]
                    </Typography>
                  </Box>
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                      {program.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            DELHIVERY
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ISO 9001: 2015, ISO 27001: 2022 Certified Company
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            CIN: L63090DL2011PLC221234
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, mb: 6 }}>
            {/* Services */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 15%' }, minWidth: '150px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                SERVICES
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Express Parcel', 'Warehousing', 'Part Truckload', 'Full Truckload', 'Cross Border', 'Data Intelligence', 'Software Platform'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Solutions */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 15%' }, minWidth: '150px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                SOLUTIONS
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['D2C Brands', 'Personal Courier', 'B2B Enterprises'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Partners */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 15%' }, minWidth: '150px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                PARTNERS
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Franchise Opportunities', 'Delivery Partner', 'Fleet Owner'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Company */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 15%' }, minWidth: '150px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                COMPANY
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['About Us', 'Governance', 'Investor Relations', 'ODR Portal', 'Press Release', 'Careers'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Get in Touch */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 15%' }, minWidth: '150px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                GET IN TOUCH
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Support', 'Raise a query', 'Store Locator', 'Rate Calculator'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Policies */}
            <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 15%' }, minWidth: '150px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                POLICIES
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Fraud Disclaimer', 'ONDC Disclaimer'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ pt: 4, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>
              Information Security Policy
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Delhivery is committed to safeguarding the confidentiality, integrity and availability of all physical and electronic information assets of the organization. We ensure that the regulatory, operational and contractual requirements are fulfilled.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
              Disclaimer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Operational metrics listed are as of August 04, 2023
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FleetOwnerPage;
