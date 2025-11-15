import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment,
  Divider,
} from '@mui/material';
import {
  Search,
  ExpandMore,
  LocalShipping,
  Business,
  Phone,
  Headset,
} from '@mui/icons-material';
import Navbar from '../components/solutions/Navbar';
import { useThemeMode } from '../theme/ThemeProvider';
import Footer from '../components/solutions/Footer';

const SupportPage = () => {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('shipments');
  const [selectedSubCategory, setSelectedSubCategory] = useState('shipment-status');
  const [expandedFaq, setExpandedFaq] = useState('faq-0');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  // Categories
  const categories = [
    {
      id: 'shipments',
      name: 'Shipments',
      icon: <LocalShipping />,
      subCategories: [
        { id: 'shipment-status', name: 'Shipment Status' },
        { id: 'destination-contact', name: 'Destination and Contact details' },
        { id: 'returns', name: 'Returns' },
        { id: 'report-issues', name: 'Report Issues' },
        { id: 'field-staff-issues', name: 'Report on-field staff issues' },
        { id: 'fragile-shipments', name: 'Fragile shipments' },
      ],
    },
    {
      id: 'businesses',
      name: 'Businesses',
      icon: <Business />,
      subCategories: [
        { id: 'account-setup', name: 'Account Set up' },
        { id: 'shipments-business', name: 'Shipments' },
        { id: 'payments', name: 'Payments' },
        { id: 'pickup-drop', name: 'Manage pick up and drop' },
        { id: 'api-integration', name: 'API Integration Related' },
        { id: 'tracking-related', name: 'Tracking Related' },
        { id: 'account-operations', name: 'Account operations' },
        { id: 'international-fulfillment', name: 'International & Fulfillment' },
      ],
    },
  ];

  // FAQs based on selected subcategory
  const getFaqsForSubCategory = () => {
    if (selectedCategory === 'shipments' && selectedSubCategory === 'shipment-status') {
      return [
        {
          question: 'How can I track my shipment?',
          answer:
            "To track your shipment, you can download our app or go to the tracking page. Entering your tracking ID (AWB/LRN) and click on 'TRACK'. You can also login using your mobile number to view all shipments being delivered to you by Relogistics and reach out to our customer support.",
        },
        {
          question: 'Why is my package delayed?',
          answer:
            'Package delays can occur due to various reasons including weather conditions, high shipment volumes, customs clearance (for international shipments), or local delivery challenges. You can track your shipment for real-time updates or contact our support team for specific information about your package.',
        },
        {
          question: "My shipment status is still at 'Pick up.' What should I do?",
          answer:
            "If your shipment status hasn't updated from 'Pick up' for an extended period, please contact our customer support team with your tracking ID. Our team will investigate and provide you with an update on your shipment status.",
        },
        {
          question: 'How can I get the contact number of my delivery/pickup partner?',
          answer:
            'You can find the contact details of your delivery partner in the tracking page once your shipment is out for delivery. Alternatively, you can contact our customer support team who can help connect you with the delivery partner.',
        },
        {
          question: 'How can I reschedule delivery/pickup for my order?',
          answer:
            'To reschedule a delivery or pickup, please login to your account or contact our customer support team with your tracking ID. Our team will help you arrange a convenient time for delivery or pickup.',
        },
      ];
    }
    return [
      {
        question: 'How can I get help with this topic?',
        answer: 'Please contact our support team or raise a query through the form below.',
      },
    ];
  };

  const currentFaqs = getFaqsForSubCategory();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 12,
          pb: 6,
          borderBottom: '3px solid #ef4444',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'flex-start' }}>
            {/* Left side - Title */}
            <Box sx={{ flex: '1 1 60%' }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Hello, Welcome to Relogistics's Support Center
              </Typography>
              <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400 }}>
                How can we help you today?
              </Typography>
              <Box sx={{ width: 100, height: 4, bgcolor: '#ef4444', mt: 2 }} />
            </Box>

            {/* Right side - Support Card */}
            <Box sx={{ flex: '1 1 40%' }}>
              <Card
                sx={{
                  bgcolor: isDark ? '#ffffff' : alpha(theme.palette.grey[100], 0.5),
                  borderRadius: 3,
                  boxShadow: 2,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: isDark ? '#000000' : 'text.secondary', fontWeight: 600, mb: 1, display: 'block' }}
                  >
                    NEED SUPPORT WITH YOUR SHIPMENT?
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        bgcolor: alpha('#ef4444', 0.1),
                        p: 2,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Headset sx={{ fontSize: 40, color: '#ef4444' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#ef4444' }}>
                      Raise a Query
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: isDark ? '#000000' : 'text.secondary' }}>
                    (or) Call us at +91 8069856101
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Left Sidebar - Categories */}
            <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '350px' } }}>
              {categories.map((category) => (
                <Box key={category.id} sx={{ mb: 2 }}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        bgcolor: selectedCategory === category.id ? alpha('#ef4444', 0.05) : 'background.paper',
                        cursor: 'pointer',
                        borderBottom: 1,
                        borderColor: 'divider',
                      }}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setSelectedSubCategory(category.subCategories[0].id);
                      }}
                    >
                      <Box sx={{ color: selectedCategory === category.id ? '#ef4444' : 'text.secondary' }}>
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          flex: 1,
                          color: selectedCategory === category.id ? '#ef4444' : 'text.primary',
                        }}
                      >
                        {category.name}
                      </Typography>
                      <ExpandMore
                        sx={{
                          transform: selectedCategory === category.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s',
                        }}
                      />
                    </Box>

                    {/* Subcategories */}
                    {selectedCategory === category.id && (
                      <Box sx={{ bgcolor: isDark ? '#ffffff' : alpha(theme.palette.grey[50], 0.5) }}>
                        {category.subCategories.map((subCat) => (
                          <Box
                            key={subCat.id}
                            sx={{
                              p: 2,
                              pl: 4,
                              cursor: 'pointer',
                              bgcolor: selectedSubCategory === subCat.id ? alpha('#ef4444', 0.1) : 'transparent',
                              borderLeft: selectedSubCategory === subCat.id ? '4px solid #ef4444' : '4px solid transparent',
                              '&:hover': {
                                bgcolor: alpha('#ef4444', 0.05),
                              },
                            }}
                            onClick={() => setSelectedSubCategory(subCat.id)}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: selectedSubCategory === subCat.id ? 600 : 400,
                                color: selectedSubCategory === subCat.id ? '#ef4444' : isDark ? '#000000' : 'text.secondary',
                              }}
                            >
                              {subCat.name}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Card>
                </Box>
              ))}
            </Box>

            {/* Right Content Area */}
            <Box sx={{ flex: '1 1 auto' }}>
              {/* Search Bar */}
              <TextField
                fullWidth
                placeholder="Type the topic you need help for"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 4,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                  },
                }}
              />

              {/* FAQs Section */}
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Shipment Status
              </Typography>

              <Box>
                {currentFaqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expandedFaq === `faq-${index}`}
                    onChange={handleFaqChange(`faq-${index}`)}
                    elevation={0}
                    sx={{
                      mb: 1,
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: '8px !important',
                      '&:before': { display: 'none' },
                      overflow: 'hidden',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expandedFaq === `faq-${index}` ? (
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: isDark ? '#ffffff' : 'text.secondary',
                            }}
                          >
                            −
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: isDark ? '#ffffff' : 'text.secondary',
                            }}
                          >
                            +
                          </Box>
                        )
                      }
                      sx={{
                        borderLeft: expandedFaq === `faq-${index}` ? '4px solid #ef4444' : '4px solid transparent',
                        '&:hover': {
                          bgcolor: isDark ? '#ffffff' : alpha(theme.palette.grey[100], 0.3),
                          '& .MuiTypography-root': {
                            color: isDark ? '#000000' : 'text.primary',
                          },
                          '& .MuiBox-root': {
                            color: isDark ? '#000000' : 'text.secondary',
                          },
                        },
                      }}
                    >
                      <Typography sx={{ fontWeight: expandedFaq === `faq-${index}` ? 600 : 500, color: isDark ? '#ffffff' : 'text.primary' }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 0 }}>
                      <Typography variant="body2" sx={{ lineHeight: 1.7, color: isDark ? '#ffffff' : 'text.secondary' }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>

              <Divider sx={{ my: 6 }} />

              {/* Need Support Section */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Need support with your shipment?
                </Typography>

                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    bgcolor: isDark ? '#ffffff' : alpha(theme.palette.grey[50], 0.5),
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: isDark ? '#000000' : 'text.primary' }}>
                    Please Login to Raise a Query
                  </Typography>

                  <TextField
                    fullWidth
                    placeholder="Please enter your 10 digit mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'background.paper',
                      },
                    }}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#1a1a1a',
                      color: 'white',
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': {
                        bgcolor: '#2a2a2a',
                      },
                    }}
                  >
                    Login with OTP
                  </Button>
                </Card>
              </Box>

              <Divider sx={{ my: 6 }} />

              {/* Download App Section */}
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  Have more questions?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Download our app to raise a query
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                      borderColor: 'divider',
                      color: 'text.primary',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="img"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Get it on Google Play"
                        sx={{ height: 40 }}
                      />
                    </Box>
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                      borderColor: 'divider',
                      color: 'text.primary',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="img"
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                        alt="Download on the App Store"
                        sx={{ height: 40 }}
                      />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Footer/>
    </Box>
  );
};

export default SupportPage;
