import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Divider,
} from '@mui/material'; // कॉमन MUI इम्पोर्ट्स
import { CheckCircleOutline, PeopleAlt, Lightbulb, GpsFixed, Phone, Email, LocationOn } from '@mui/icons-material'; // आइकन्स
import Footer from "../components/solutions/Footer"; // सुनिश्चित करें कि यह पाथ सही है
import Navbar from "../components/solutions/Navbar"; // सुनिश्चित करें कि यह पाथ सही है

// -----------------------------------------------------------
// कंटेंट डेटा
// -----------------------------------------------------------
const content = {
  mission: "RILogistics का मिशन एक ऐसा पारदर्शी और कुशल डिजिटल प्लेटफॉर्म बनाना है जो ट्रक मालिकों, ड्राइवरों, ट्रांसपोर्टरों और ग्राहकों को सहजता से जोड़े, जिससे माल ढुलाई का प्रबंधन सरल, तेज़ और विश्वसनीय बन सके।",
  vision: "हमारा दृष्टिकोण एक टिकाऊ, तकनीक-संचालित लॉजिस्टिक्स इकोसिस्टम का निर्माण करना है जो सभी हितधारकों को मूल्य, विश्वास और विकास के अवसर प्रदान करता है, भारतीय लॉजिस्टिक्स को वैश्विक मानकों पर ले जाता है।",
  values: [
    { icon: PeopleAlt, title: "Integrity (ईमानदारी)", description: "हमारे सभी डीलिंग्स में पूरी पारदर्शिता और उच्च नैतिक मानकों का पालन।" },
    { icon: Lightbulb, title: "Innovation (नवाचार)", description: "ग्राहक-केंद्रित समाधानों के माध्यम से लॉजिस्टिक्स उद्योग में लगातार सुधार लाना।" },
    { icon: CheckCircleOutline, title: "Reliability (विश्वसनीयता)", description: "सुरक्षा और अनुपालन के प्रति अटूट प्रतिबद्धता के साथ भरोसेमंद सेवाएँ प्रदान करना।" },
    { icon: GpsFixed, title: "Efficiency (दक्षता)", description: "तकनीक का उपयोग करके प्रक्रियाओं को सुव्यवस्थित करना और समय पर डिलीवरी सुनिश्चित करना।" },
  ],
  contact: {
    email: "support@rilogistics.com",
    phone: "+91 9876543210",
    address: "123 Logistics Park, Mumbai, Maharashtra, India - 400001",
  }
};

// -----------------------------------------------------------
// अबाउट अस कॉम्पोनेंट
// -----------------------------------------------------------
const AboutUs = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Box sx={{
        bgcolor: theme.palette.background.default,
        py: { xs: 8, md: 12 },
        pt: { xs: 15, md: 18 }, // Navbar के लिए टॉप पैडिंग
        minHeight: '100vh',
      }}>
        <Container maxWidth="lg">

          {/* Header Section */}
          <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
            <Typography
              variant="h2"
              component="h1"
              fontWeight={700}
              color="primary.main"
              gutterBottom
            >
              RILogistics: लॉजिस्टिक्स में आपका विश्वसनीय साथी
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              maxWidth="md"
              mx="auto"
            >
              हम एक सहज डिजिटल प्लेटफॉर्म के माध्यम से माल ढुलाई को कुशल, पारदर्शी और सरल बनाते हैं।
            </Typography>
          </Box>

          {/* Mission & Vision Section */}
          <Card
            elevation={6}
            sx={{
              mb: 8,
              p: { xs: 3, md: 6 },
              borderRadius: theme.shape.borderRadius * 2,
              bgcolor: alpha(theme.palette.primary.light, 0.05),
            }}
          >
            <Typography variant="h4" fontWeight={600} color="primary.dark" mb={2}>
              हमारा मिशन
            </Typography>
            <Typography variant="body1" color="text.primary" mb={4}>
              {content.mission}
            </Typography>
            <Divider sx={{ my: 4 }} />
            <Typography variant="h4" fontWeight={600} color="secondary.dark" mb={2}>
              हमारा दृष्टिकोण
            </Typography>
            <Typography variant="body1" color="text.primary">
              {content.vision}
            </Typography>
          </Card>

          {/* Core Values Section */}
          <Box mb={8}>
            <Typography variant="h3" fontWeight={700} textAlign="center" mb={6} color="text.primary">
              हमारे मुख्य मूल्य
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gap: { xs: 3, md: 5 },
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              }}
            >
              {content.values.map((value, index) => (
                <Card
                  key={index}
                  elevation={3}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[10],
                    },
                  }}
                >
                  <value.icon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Contact Details & CTA */}
          <Box mt={8}>
            <Typography variant="h3" fontWeight={700} textAlign="center" mb={6} color="text.primary">
              हमसे संपर्क करें
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 0 },
                textAlign: 'center',
                bgcolor: alpha(theme.palette.secondary.light, 0.1),
                p: { xs: 3, md: 5 },
                borderRadius: theme.shape.borderRadius * 2,
              }}
            >
              <Box>
                <Email color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6">ईमेल</Typography>
                <Typography variant="body1" color="text.secondary">{content.contact.email}</Typography>
              </Box>
              <Box>
                <Phone color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6">फ़ोन</Typography>
                <Typography variant="body1" color="text.secondary">{content.contact.phone}</Typography>
              </Box>
              <Box>
                <LocationOn color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6">पता</Typography>
                <Typography variant="body1" color="text.secondary">{content.contact.address}</Typography>
              </Box>

              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

              <Box sx={{ ml: { md: 4 } }}>
                <Typography variant="h5" fontWeight={700} color="primary.dark" mb={2}>
                  आज ही अपनी शिपमेंट बुक करें!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/login');
                  }}
                >
                  फ्री कोट प्राप्त करें
                </Button>
              </Box>
            </Box>
          </Box>

        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default AboutUs;
