import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Store as StoreIcon,
  LocalShipping as LocalShippingIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import LandingHeader from '../components/layout/LandingHeader';
import { useThemeMode } from '../theme/ThemeProvider';

const FranchiseOpportunitiesPage = () => {
  const { isDark } = useThemeMode();
  const [expanded, setExpanded] = useState('panel1');

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const franchiseTypes = [
    {
      icon: <StoreIcon sx={{ fontSize: 40 }} />,
      title: 'Run a Delhivery courier booking counter',
      description: 'Collect parcels from customers at your Delhivery store and provide a convenient courier experience',
      image: '/images/courier-counter.jpg', // Placeholder - add actual image
      benefits: [
        'Affordable setup cost',
        'Make profit on every parcel booked',
        'Additional income on packaging & insurance services',
      ],
      eligibility: [
        '60-80 sqft space on a main road',
        'Good communication skills',
      ],
      buttonText: 'Sign up to set up a courier booking counter',
      buttonIcon: <StoreIcon />,
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Run parcel delivery center for Delhivery',
      description: 'Sort and Deliver parcels to customers doorstep with your staff, from your location, on select routes',
      image: '/images/delivery-center.jpg', // Placeholder - add actual image
      benefits: [
        'Low Setup Cost',
        'High Volume Business',
        'Earn Per Delivery',
      ],
      eligibility: [
        'Minimum 200 Sqft. of floor space to keep shipments',
        'Delivery Rider Staff for doorstep delivery',
      ],
      buttonText: 'Sign up to deliver parcels for Delhivery',
      buttonIcon: <LocalShippingIcon />,
    },
  ];

  const faqSections = [
    {
      category: 'Parcel Exchange Center',
      faqs: [
        {
          question: 'What is Local Delivery Franchise?',
          answer: 'The program is an extension of the Delhivery pick-up and delivery network. We seek entrepreneurs willing to run their own parcel and freight pick-up and delivery business.',
        },
        {
          question: 'Who can become a Local Delivery Franchise partner?',
          answer: 'Any entrepreneur with the required space, communication skills, and passion for running a logistics business can apply to become a franchise partner.',
        },
        {
          question: 'How long does the application process take?',
          answer: 'The application process typically takes 2-3 weeks from initial application to final approval and setup.',
        },
        {
          question: 'Does it cost anything to become a partner for delivery?',
          answer: 'There is a nominal setup cost which varies based on the franchise type. Our team will provide detailed cost breakdown during the application process.',
        },
        {
          question: 'Will training be provided?',
          answer: 'Yes, comprehensive training will be provided covering operations, systems, customer service, and business management.',
        },
        {
          question: 'What are the daily operations like?',
          answer: 'Daily operations include receiving parcels, processing bookings, coordinating with delivery teams, and providing customer service.',
        },
      ],
    },
    {
      category: 'Delhivery Courier Store',
      faqs: [
        {
          question: 'Local Delivery Franchise vs Courier & Sales Franchise',
          answer: 'In the Local Delivery Franchise program, a partner sets up a last mile delivery center and delivers all the shipments to customers in his/her location. Delhivery drops the parcels at the partner\'s last mile center. Partner gets paid for the delivery services.\n\nIn the Courier & Sales Franchise program, a partner sets up a company branded retail counter and books the parcels and documents of walk-in customers and businesses. Delhivery picks up shipments from partners\' retail counters and delivers them. Partner gets commission on all shipping charges and other value added services.',
        },
        {
          question: 'What infrastructure is needed to set up a delivery courier store?',
          answer: 'You need a retail space of 60-80 sqft on a main road, basic furniture, computer with internet connection, and signage for branding.',
        },
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <LandingHeader />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#2C3544',
          color: 'white',
          py: { xs: 8, md: 12 },
          mt: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#FF4545',
                mb: 3,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Associate with{' '}
              <Box component="span" sx={{ color: '#FF4545' }}>
                India's fastest
              </Box>
              <br />
              growing franchisee business
              <br />
              partnership program
            </Typography>
            <Box
              sx={{
                width: 100,
                height: 2,
                bgcolor: '#FF4545',
                mb: 3,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                maxWidth: 600,
                opacity: 0.9,
              }}
            >
              Become part of the Delhivery network and grow your business with us
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Franchise Types Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Choose your{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Franchisee Type
            </Box>
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: '#FF4545', mb: 6 }} />

          <Grid container spacing={4}>
            {franchiseTypes.map((franchise, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: '#FF4545' }}>{franchise.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
                        {franchise.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ px: 3, pb: 2, color: 'text.secondary' }}
                    >
                      {franchise.description}
                    </Typography>

                    <Box
                      sx={{
                        height: 300,
                        bgcolor: isDark ? '#1a1a1a' : '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {franchise.title.includes('counter') ? 'Courier Counter' : 'Delivery Center'}
                      </Typography>
                    </Box>

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              Benefits
                            </Typography>
                          </Box>
                          <List dense>
                            {franchise.benefits.map((benefit, idx) => (
                              <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                  <Box
                                    sx={{
                                      width: 6,
                                      height: 6,
                                      borderRadius: '50%',
                                      bgcolor: 'text.primary',
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={benefit}
                                  primaryTypographyProps={{
                                    variant: 'body2',
                                    sx: { fontSize: '0.9rem' },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <CheckCircleIcon sx={{ color: '#2196F3', fontSize: 20 }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              Eligibility
                            </Typography>
                          </Box>
                          <List dense>
                            {franchise.eligibility.map((item, idx) => (
                              <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                  <Box
                                    sx={{
                                      width: 6,
                                      height: 6,
                                      borderRadius: '50%',
                                      bgcolor: 'text.primary',
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={item}
                                  primaryTypographyProps={{
                                    variant: 'body2',
                                    sx: { fontSize: '0.9rem' },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Grid>
                      </Grid>
                    </CardContent>

                    <Box sx={{ p: 3, pt: 0 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          textAlign: 'center',
                          mb: 2,
                          fontWeight: 600,
                          fontSize: '1.1rem',
                        }}
                      >
                        OR
                      </Typography>
                      <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          bgcolor: '#000',
                          color: '#fff',
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          '&:hover': {
                            bgcolor: '#1a1a1a',
                          },
                        }}
                      >
                        {franchise.buttonText}
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Red Divider */}
      <Box sx={{ py: 4 }}>
        <Container>
          <Box sx={{ width: 60, height: 60, bgcolor: '#FF4545' }} />
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Frequently asked{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              questions
            </Box>
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: '#FF4545', mb: 6 }} />

          <Grid container spacing={4}>
            {faqSections.map((section, sectionIdx) => (
              <Grid item xs={12} md={6} key={sectionIdx}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      fontSize: '1.5rem',
                    }}
                  >
                    {section.category}
                  </Typography>

                  {section.faqs.map((faq, faqIdx) => (
                    <Accordion
                      key={faqIdx}
                      expanded={expanded === `panel${sectionIdx}-${faqIdx}`}
                      onChange={handleAccordionChange(`panel${sectionIdx}-${faqIdx}`)}
                      sx={{
                        boxShadow: 'none',
                        '&:before': { display: 'none' },
                        mb: 1,
                        borderLeft: '3px solid',
                        borderColor:
                          expanded === `panel${sectionIdx}-${faqIdx}`
                            ? '#FF4545'
                            : 'transparent',
                        transition: 'border-color 0.3s ease',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          '& .MuiAccordionSummary-content': {
                            my: 1.5,
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            fontSize: '1rem',
                          }}
                        >
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.7,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: '#000',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 4,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                lineHeight: 1.4,
              }}
            >
              Join the Franchisee program and experience the benefit of a wider
              reach, growth opportunities, and more
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#fff',
                color: '#000',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              Join us now
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Other Ways Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '1.75rem', md: '2rem' },
            }}
          >
            Other ways you can{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Join Delhivery
            </Box>
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: '#FF4545', mb: 4 }} />
        </motion.div>
      </Container>
    </Box>
  );
};

export default FranchiseOpportunitiesPage;
