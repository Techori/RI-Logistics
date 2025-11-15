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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Stack,
} from '@mui/material';
import {
  Store,
  LocalShipping,
  CheckCircle,
  ArrowForward,
  ExpandMore,
  People,
  TrendingUp,
} from '@mui/icons-material';
import Navbar from '../components/solutions/Navbar';
import Footer from '../components/solutions/Footer';
import truckBgImage from '../assets/fullTruckLoad.png';
import officeImage from '../assets/office.png';

const FranchisePage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const franchiseTypes = [
    {
      icon: <Store sx={{ fontSize: 60 }} />,
      title: "Run a RIlogistics Load & courier booking Partner",
      description: "Collect Load Booking & parcels from customers at your RIlogistics store and provide a convenient courier experience",
      benefits: [
        "Affordable setup cost",
        "Make profit on every parcel booked",
        "Additional income on packaging & insurance services"
      ],
      eligibility: [
        "50-80 sqft space ",
        "Good communication skills"
      ],
      buttonText: "Sign up to set up a courier booking counter",
      color: '#1976d2'
    },
    {
      icon: <LocalShipping sx={{ fontSize: 60 }} />,
      title: "Run parcel delivery center for RIlogistics",
      description: "Sort and Deliver parcels to customers doorstep with your staff, from your location, on select routes",
      benefits: [
        "Low Setup Cost",
        "High Volume Business",
        "Earn Per Delivery"
      ],
      eligibility: [
        "Minimum 500 Sqft. of floor space to keep shipments",
        "Delivery Rider Staff for doorstep delivery"
      ],
      buttonText: "Sign up to deliver parcels for Relogistics",
      color: '#2e7d32'
    }
  ];
  [
    {
      icon: <Store sx={{ fontSize: 60 }} />,
      title: "RIlogistics franchise Partener",
      description: "Grow your business by booking bulk load and unload services, including 3PL, FTL, and PTL, directly from your warehouse. Operate with your own margins while benefiting from our trusted platform, expert training, and strong customer network for scalable and profitable expansion.",
      benefits: [
        "Affordable setup cost",
        "Make profit on every Load & Vehicle booked",
        "Earn with your own margins and get additional income on every vehicle through extra services. "
      ],
      eligibility: [
        "600-800 sqft space ",
        "Good communication skills"
      ],
      buttonText: " Enquiry for RIlogistics franchise Partener",
      color: '#1976d2'
    },
    {
      icon: <LocalShipping sx={{ fontSize: 60 }} />,
      title: "RILogistics Fleet Partner",
      description: "SProvide required vehicles to RILogistics as per demand and support smooth logistics operations. Earn attractive commissions based on the type and capacity of each vehicle you supply.",
      benefits: [
        "Affordable setup cost",
        "Earn profit on every vehicle",
        "Earn up to ₹5 lakhs per month",
        "Stable and growing income with high logistics demand"
      ],
      eligibility: [
        "100–250 sq. ft. office space",
        "Good communication skills",
        "Minimum 20 vehicles required",
        "Basic understanding of transportation and fleet coordination"
      ],
      buttonText: "Enquiry for RILogistics Fleet Partner ",
      color: '#2e7d32'
    }
  ];

  const faqData = {
    exchangeCenter: [
      {
        question: "What is Local Delivery Franchise?",
        answer: "The program is an extension of the Relogistics pick-up and delivery network. We seek entrepreneurs willing to run their own parcel and freight pick-up and delivery business."
      },
      {
        question: "Who can become a Local Delivery Franchise partner?",
        answer: "Any entrepreneur with the required infrastructure and business acumen can apply to become a franchise partner."
      },
      {
        question: "How long does the application process take?",
        answer: "The application process typically takes 2-4 weeks from submission to approval."
      },
      {
        question: "Does it cost anything to become a partner for Relogistics?",
        answer: "There is an initial setup cost that varies based on the franchise type you choose."
      },
      {
        question: "Will training be provided?",
        answer: "Yes, comprehensive training will be provided to all franchise partners."
      },
    ],
    courierStore: [
      {
        question: "Local Delivery Franchise vs Courier & Sales Franchise",
        answer: "In the Local Delivery Franchise program, a partner sets up a last mile delivery center. In the Courier & Sales Franchise program, a partner sets up a company branded retail counter."
      },
      {
        question: "What infrastructure is needed to set up a Relogistics courier store?",
        answer: "You need a retail space of 60-80 sqft in a prime location with good footfall."
      },
      {
        question: "Is there an investment involved?",
        answer: "Yes, there is an initial investment for store setup, branding, and operational requirements."
      },
      {
        question: "How can I earn by joining Relogistics courier franchise program?",
        answer: "You earn commission on every parcel booked, plus additional income from packaging and insurance services."
      },
    ]
  };

  const otherOpportunities = [
    {
      icon: <People sx={{ fontSize: 48 }} />,
      title: "Delivery Partner",
      description: "Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      title: "Fleet Owner",
      description: "We connect shippers with fleet owners, transporters and suppliers of truckload capacity through our in-house bidding platform",
    }
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
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${truckBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          mt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '800px' }}>
            <Box sx={{ width: 60, height: 4, bgcolor: '#ef4444', mb: 3 }} />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '3.5rem' },
              }}
            >
              Associate with <Box component="span" sx={{ color: '#ef4444' }}>India's fastest</Box>
              <br />
              growing franchisee business partnership program
            </Typography>
            <Box sx={{ width: 120, height: 2, bgcolor: alpha('#fff', 0.3), mb: 4 }} />
            <Typography variant="h6" sx={{ color: alpha('#fff', 0.9) }}>
              Become part of the Relogistics network and grow your business with us
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Franchise Types Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Choose your <Box component="span" sx={{ color: 'primary.main' }}>Franchisee Type</Box>
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: '#ef4444', mx: 'auto' }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'stretch' }}>
          {franchiseTypes.map((franchise, index) => (
            <Box key={index} sx={{ flex: 1, minWidth: 0, maxWidth: { md: '600px' }, display: 'flex', flexDirection: 'column' }}>
              <Paper
                elevation={2}
                sx={{
                  height: '100%',
                  width: '100%',
                  maxWidth: '600px',
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Icon and Title */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: 1.5,
                        bgcolor: alpha(franchise.color, 0.1),
                        color: franchise.color,
                        flexShrink: 0,
                      }}
                    >
                      {React.cloneElement(franchise.icon, { sx: { fontSize: 32 } })}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, lineHeight: 1.3 }}>
                        {franchise.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                        {franchise.description}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Image Section - Styled like Delhivery */}
                  <Box
                    sx={{
                      height: 280,
                      borderRadius: 2,
                      overflow: 'hidden',
                      mb: 3,
                      position: 'relative',
                      background: index === 0 
                        ? `url(${officeImage})`
                        : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {index !== 0 && (
                      <Box sx={{ 
                        textAlign: 'center',
                        color: franchise.color,
                        p: 3,
                      }}>
                        <LocalShipping sx={{ fontSize: 120, opacity: 0.3, mb: 2 }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          Delivery Partner
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          with RELOGISTICS T-shirt
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, mb: 3 }}>
                    <Box sx={{ flex: '1 1 50%' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircle fontSize="small" color="success" />
                        Benefits
                      </Typography>
                      <List dense>
                        {franchise.benefits.map((benefit, idx) => (
                          <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircle fontSize="small" sx={{ color: 'success.main' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={benefit}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    <Box sx={{ flex: '1 1 50%' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircle fontSize="small" color="primary" />
                        Eligibility
                      </Typography>
                      <List dense>
                        {franchise.eligibility.map((item, idx) => (
                          <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircle fontSize="small" sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={item}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Box>

                  {/* Push button to bottom */}
                  <Box sx={{ flexGrow: 1 }} />

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: '#000',
                      color: '#fff',
                      py: 1.5,
                      fontWeight: 600,
                      mt: 3,
                      '&:hover': {
                        bgcolor: '#333',
                      },
                    }}
                  >
                    {franchise.buttonText}
                  </Button>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* OR Divider */}
        <Box sx={{ display: 'flex', alignItems: 'center', my: 6 }}>
          <Divider sx={{ flexGrow: 1 }} />
          <Typography variant="h4" sx={{ px: 4, color: 'text.secondary', fontWeight: 700 }}>
            OR
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Frequently asked <Box component="span" sx={{ color: 'primary.main' }}>questions</Box>
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: '#ef4444', mx: 'auto' }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: '1 1 50%' }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Parcel Exchange Center
                </Typography>
                {faqData.exchangeCenter.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `exchange-${index}`}
                    onChange={handleAccordionChange(`exchange-${index}`)}
                    elevation={0}
                    sx={{ '&:before': { display: 'none' } }}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography sx={{ fontWeight: expanded === `exchange-${index}` ? 600 : 500 }}>
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
              </Paper>
            </Box>

            <Box sx={{ flex: '1 1 50%' }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Relogistics Courier Store
                </Typography>
                {faqData.courierStore.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `courier-${index}`}
                    onChange={handleAccordionChange(`courier-${index}`)}
                    elevation={0}
                    sx={{ '&:before': { display: 'none' } }}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography sx={{ fontWeight: expanded === `courier-${index}` ? 600 : 500 }}>
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
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #111827 0%, #000000 100%)',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
              Join the Franchisee program and experience the benefit of a wider reach, growth opportunities, and more
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
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: alpha('#fff', 0.9),
                },
              }}
            >
              Join us now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Other Opportunities Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Other ways you can <Box component="span" sx={{ color: 'primary.main' }}>Join Relogistics</Box>
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: '#ef4444' }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {otherOpportunities.map((opportunity, index) => (
            <Box key={index} sx={{ flex: '1 1 50%' }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      width: 48,
                      height: 48,
                      bgcolor: '#ef4444',
                      borderRadius: 1,
                    }}
                  />
                  <Box sx={{ color: 'primary.main' }}>
                    {opportunity.icon}
                  </Box>
                </Box>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    {opportunity.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                    {opportunity.description}
                  </Typography>
                  <Button
                    endIcon={<ArrowForward />}
                    sx={{ fontWeight: 600, alignSelf: 'flex-start' }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Footer */}
       <Footer/>
    </Box>
  );
};

export default FranchisePage;
