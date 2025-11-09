import React, { useState } from 'react';
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  ArrowForward,
  ExpandMore,
  MonetizationOn,
  Payment,
  AccountBalance,
  EventAvailable,
  School,
  HealthAndSafety,
} from '@mui/icons-material';
import Navbar from '../components/solutions/Navbar';
import partnerPhoto from '../assets/partnerphoto.png'; // Add your partner image with this name
import deliveryBoy from '../assets/delivaryBoy.jpeg';
import delCustomer from '../assets/delCustomer.png';

const DeliveryPartnerPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const benefits = [
    {
      icon: <MonetizationOn sx={{ fontSize: 48 }} />,
      title: "Consistent earnings",
      description: "High business value with secure earnings"
    },
    {
      icon: <MonetizationOn sx={{ fontSize: 48 }} />,
      title: "Competitive pay",
      description: "Earn extra incentives for completing deliveries on time"
    },
    {
      icon: <Payment sx={{ fontSize: 48 }} />,
      title: "Easy payments",
      description: "Receive your earnings easily in your bank account"
    },
    {
      icon: <HealthAndSafety sx={{ fontSize: 48 }} />,
      title: "Retiral & medical benefits",
      description: "Provident fund, gratuity and medical benefits"
    },
    {
      icon: <EventAvailable sx={{ fontSize: 48 }} />,
      title: "Onroll opportunity",
      description: "Eligible for weekly payout & on-roll employment"
    },
    {
      icon: <School sx={{ fontSize: 48 }} />,
      title: "Training and support",
      description: "Training and support to help you grow"
    },
  ];

  const signupSteps = [
    {
      title: "Download the Delhivery Partner App on Google Playstore",
      image: "google-play"
    },
    {
      title: "Create your profile and select the closest dispatch centre",
      image: "profile"
    },
    {
      title: "Upload your AADHAAR and PAN card details",
      image: "upload"
    },
    {
      title: "Receive a call from our executive and get yourself on boarded",
      image: "onboarding"
    },
  ];

  const faqs = [
    {
      question: "How and when is payment made?",
      answer: "Payments are made weekly directly to your bank account based on the deliveries completed."
    },
    {
      question: "Where do I need to go to collect the shipments? Which location do I have to travel to?",
      answer: "You will collect shipments from your nearest dispatch center that you select during registration."
    },
    {
      question: "How can I track my payments?",
      answer: "You can track all your payments through the Delhivery Partner app in the payments section."
    },
    {
      question: "Does Delhivery work in my locality/city?",
      answer: "Delhivery operates in over 18,000+ pin codes across India. Check the app to see if your area is covered."
    },
    {
      question: "When do I get paid?",
      answer: "Payments are processed weekly and credited to your registered bank account."
    },
    {
      question: "How do I register as a certified Delhivery partner?",
      answer: "Download the Delhivery Partner app, complete your profile, upload required documents, and get verified by our team."
    },
    {
      question: "Can I call Delhivery to get join as Delivery Partner?",
      answer: "Yes, you can call our support numbers listed on the website or register through the app for faster processing."
    },
  ];

  const otherPrograms = [
    {
      title: "Courier & Sales Franchise",
      description: "Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking",
      image: "courier"
    },
    {
      title: "Local Delivery Franchise",
      description: "Join one of the largest Express PTL networks in India. Get door-to-door and hub-to-hub delivery with additions such as multi-modal freight and client dashboard",
      image: "local"
    },
    {
      title: "Fleet Owner",
      description: "We connect shippers with fleet owners, transporters and suppliers of truckload capacity through our in-house bidding platform",
      image: "fleet"
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '600px',
          mt: 8,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', height: '100%', py: 8 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box sx={{ flex: '1 1 50%', color: 'white', py: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                Join over <Box component="span" sx={{ color: '#ef4444' }}>34,000+ riders</Box> in delivering orders everyday
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: alpha('#fff', 0.9) }}>
                We offer payments every week, and you work at your flexibility
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: alpha('#fff', 0.9),
                  },
                }}
              >
                Sign up
              </Button>
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
            </Box>
            <Box sx={{ flex: '1 1 50%' }}>
              <Box
                sx={{
                  height: 500,
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src={partnerPhoto}
                  alt="Delivery Partner on Bike"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Delivery Partner Info Section */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            gap: 6,
          }}
        >
          <Box sx={{ flex: '1 1 50%' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                Delivery Partner
              </Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: '#ef4444' }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
              Our program for delivery partner allows agents to sign up to do both pick-up and delivery services across India. It is a great opportunity to earn a sustainable income flexibly and provide our customers the best experience.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
              This program has enabled over 34,000+ partners across India till date. To start working with India's largest integrated logistics company, download our app and start earning today.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Sign up with your Aadhaar, bank account details and an Android phone, and start earning!
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Download the Delhivery Partner app or call on the below numbers for the following cities to start delivering with Delhivery:
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <Box component="span" sx={{ color: '#ef4444', fontWeight: 600 }}>Bangalore:</Box>{' '}
                <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline', cursor: 'pointer' }}>
                  +918045128638
                </Box>
              </Typography>
              <Typography variant="body1">
                <Box component="span" sx={{ color: '#ef4444', fontWeight: 600 }}>Chennai:</Box>{' '}
                <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline', cursor: 'pointer' }}>
                  +918045128639
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 12 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Benefits
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: '#ef4444' }} />
          </Box>
          
          {/* First Row - 4 items */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, mb: 5, justifyContent: 'center' }}>
            {benefits.slice(0, 4).map((benefit, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: '200px' }}>
                <Box sx={{ textAlign: 'center', px: 2 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      bgcolor: 'rgba(139, 92, 92, 0.5)',
                      color: '#ef4444',
                      mb: 3,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        bgcolor: 'rgba(139, 92, 92, 0.7)',
                      },
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1.1rem' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), lineHeight: 1.6 }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Second Row - 2 items centered */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center' }}>
            {benefits.slice(4, 6).map((benefit, index) => (
              <Box key={index + 4} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: '200px' }}>
                <Box sx={{ textAlign: 'center', px: 2 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      bgcolor: 'rgba(139, 92, 92, 0.5)',
                      color: '#ef4444',
                      mb: 3,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        bgcolor: 'rgba(139, 92, 92, 0.7)',
                      },
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1.1rem' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), lineHeight: 1.6 }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* How to Sign Up Section */}
      <Box sx={{ bgcolor: '#1a1a2e', py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
              How to <Box component="span" sx={{ color: '#ef4444' }}>sign up</Box>
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: '#ef4444' }} />
          </Box>
          
          {/* All 4 steps in one row */}
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'nowrap', overflowX: 'auto' }}>
            {signupSteps.map((step, index) => (
              <Box sx={{ flex: '1 1 0', minWidth: '250px', maxWidth: '350px' }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: '#252541',
                    color: 'white',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(239, 68, 68, 0.5)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 150,
                      bgcolor: '#1e1e38',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography 
                      variant="h1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.1)', 
                        fontWeight: 800,
                        fontSize: '80px',
                      }}
                    >
                      {index + 1}
                    </Typography>
                  </Box>
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.5,
                      }}
                    >
                      {step.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 12 }}>
        <Container maxWidth="xl">
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 6,
            }}
          >
            {/* Image on Left */}
            <Box
              sx={{
                flex: '0 0 auto',
                width: { xs: '100%', md: '400px' },
                position: 'relative',
              }}
            >
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
                {/* Delivery Boy Image */}
                <Box
                  component="img"
                  src={deliveryBoy}
                  alt="Delivery Partner"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: 3,
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
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

            {/* Text on Right */}
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
                  fontSize: '1rem', 
                  lineHeight: 1.8, 
                  color: 'rgba(0, 0, 0, 0.6)',
                }}
              >
                Signing-up with Delhivery as a delivery partner has been great. The best part about working with Delhivery is timely payments and new learning. Despite being located in a metro city like Chennai, I can support my family financially. The team at Delhivery is exceptionally supportive, and I look forward to continuing my association here.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#000' }}>
                Ghose Mohaideen
              </Typography>
              <Typography variant="body2" sx={{ color: '#ef4444', fontWeight: 500, fontSize: '0.95rem' }}>
                Chennai
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
          color: 'white',
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
              Join the Delivery Partner Program and experience the benefit of a better earning potential, faster payments, and flexible timings
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'black',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: alpha('#fff', 0.9),
                },
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play"
                style={{ height: '40px' }}
              />
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
          }}
        >
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '500px' } }}>
            <Box
              sx={{
                height: 550,
                bgcolor: '#1a1a2e',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                p: 4,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 80,
                  height: 80,
                  bgcolor: '#ef4444',
                  borderRadius: '0 0 50% 0',
                }}
              />
              <Box
                component="img"
                src={delCustomer}
                alt="Customer Support"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                }}
              />
            </Box>
          </Box>
          <Box sx={{ flex: '1 1 auto' }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                Frequently asked <Box component="span" sx={{ color: 'primary.main' }}>questions (FAQs)</Box>
              </Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: '#ef4444' }} />
            </Box>
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

      {/* Other Programs Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Explore other <Box component="span" sx={{ color: 'primary.main' }}>partner programs</Box>
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: '#ef4444' }} />
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {otherPrograms.map((program, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: '300px' }}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 250,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      backgroundImage: `url(https://via.placeholder.com/400x250/${index === 0 ? 'e3f2fd' : index === 1 ? 'fff3e0' : 'e8f5e9'}/1976d2?text=${program.title})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
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
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
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
      <Box sx={{ bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', py: 8 }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, fontSize: '1.75rem' }}>
              RI Logistics
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              ISO 9001: 2015, ISO 27001: 2022 Certified Company
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              CIN: L63090DL2011PLC221234
            </Typography>
          </Box>

          {/* Main Footer Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(5, 1fr)',
              },
              gap: { xs: 4, md: 6 },
              mb: 6,
            }}
          >
            {/* Services */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                SERVICES
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Express Parcel', 'Warehousing', 'Part Truckload', 'Full Truckload'].map(
                  (item) => (
                    <Box component="li" key={item} sx={{ mb: 1.5 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          cursor: 'pointer',
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                          transition: 'color 0.2s',
                          '&:hover': { color: 'text.primary' },
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            </Box>

            {/* Solutions */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                SOLUTIONS
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['D2C Brands', 'B2B Enterprises', 'Part Truck Load', 'Full truck Load', '3rd Party Load', 'white lable  Solution' ].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Partners */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                PARTNERS
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Franchise Opportunities', 'Delivery Partner', 'Fleet Owner', 'Fleet Owner']. map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Company */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                COMPANY
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['About Us', 'Governance', 'Investor Relations', 'ODR Portal', 'Press Release', 'Careers'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Get in Touch */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                GET IN TOUCH
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Support', 'Raise a query', 'Store Locator', 'Rate Calculator'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Policies Row */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 2.5,
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
              }}
            >
              POLICIES
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, md: 4 },
              }}
            >
              {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Fraud Disclaimer', 'ONDC Disclaimer'].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer Info */}
      <Box sx={{ bgcolor: 'grey.100', py: 4, borderTop: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © 2025 Delhivery. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default DeliveryPartnerPage;
