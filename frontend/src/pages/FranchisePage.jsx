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
} from '@mui/material';
import {
    Store,
    LocalShipping,
    CheckCircle,
    ArrowForward,
    ExpandMore,
    People,
    TrendingUp,
    CreditCard,
    Warehouse,
} from '@mui/icons-material';

// Assuming these external components/assets exist in your project structure
import Navbar from '../components/solutions/Navbar';
import Footer from '../components/solutions/Footer';
import { useNavigate } from 'react-router-dom';
// Note: In a real project, replace these paths with actual imported variables or public URLs
const truckBgImage = 'path/to/fullTruckLoad.png';
const officeImage = 'path/to/office.png';


// --- 1. Constants & Data ---
const PRIMARY_RED = '#ef4444';

const ALL_FRANCHISE_TYPES = [
    {
        icon: <Store />,
        title: "Load & Courier Booking Partner",
        titleHindi: "(लोड और कूरियर बुकिंग पार्टनर)",
        description:
            "अपने स्टोर पर ग्राहकों से लोड बुकिंग और पार्सल एकत्र करें और एक सुविधाजनक कूरियर अनुभव प्रदान करें।",
        benefits: [
            "Affordable setup cost (किफायती सेटअप लागत)",
            "Profit on every parcel booked (हर पार्सल पर लाभ)",
            "Additional income on packaging & insurance (पैकेजिंग और बीमा से अतिरिक्त आय)",
        ],
        eligibility: [
            "50-80 sqft space (50-80 वर्ग फुट जगह)",
            "Good communication skills (उत्तम संचार कौशल)",
        ],
        buttonText: "Courier Booking Counter के लिए आवेदन करें",
        color: "#1976d2",
        route: "/register",
    },
    {
        icon: <Warehouse />,
        title: "Parcel Delivery Center",
        titleHindi: "(पार्सल वितरण केंद्र)",
        description:
            "अपने स्थान से, चयनित मार्गों पर, अपने कर्मचारियों के साथ ग्राहकों के पते पर पार्सल छाँटें और वितरित करें।",
        benefits: [
            "Low Setup Cost (कम सेटअप लागत)",
            "High Volume Business (उच्च मात्रा का व्यवसाय)",
            "Earn Per Delivery (प्रति डिलीवरी कमाएं)",
        ],
        eligibility: [
            "Minimum 500 Sqft. of floor space (500 वर्ग फुट जगह)",
            "Delivery Rider Staff (डिलीवरी स्टाफ की आवश्यकता)",
        ],
        buttonText: "Parcel Delivery Center के लिए आवेदन करें",
        color: "#2e7d32",
        route: "/register",
    },
    {
        icon: <CreditCard />,
        title: "Full Load & Logistics Franchise Partner",
        titleHindi: "(पूर्ण लॉजिस्टिक्स फ्रेंचाइजी पार्टनर)",
        description:
            "थोक लोड और अनलोड सेवाओं (3PL, FTL, PTL) की बुकिंग करके अपना व्यवसाय बढ़ाएँ।",
        benefits: [
            "High Commission on Load & Vehicle booked (लोड बुकिंग पर उच्च कमीशन)",
            "Earn with your own margins (अपने मार्जिन के साथ कमाएं)",
            "Trusted platform & training (भरोसेमंद प्लेटफॉर्म और ट्रेनिंग)",
        ],
        eligibility: [
            "600-800 sqft warehouse space (600-800 वर्ग फुट गोदाम जगह)",
            "Strong local network (मजबूत स्थानीय नेटवर्क)",
        ],
        buttonText: "Full Logistics Partner के लिए Enquiry करें",
        color: "#9c27b0",
        route: "/franchise-registration",
    },
    {
        icon: <LocalShipping />,
        title: "RILogistics Fleet Partner",
        titleHindi: "(फ्लीट पार्टनर)",
        description:
            "मांग के अनुसार RILogistics को आवश्यक वाहन प्रदान करें और आकर्षक कमीशन अर्जित करें।",
        benefits: [
            "Affordable setup cost (किफायती सेटअप लागत)",
            "Earn profit on every vehicle (हर वाहन पर लाभ)",
            "Stable and growing income (स्थिर और बढ़ती आय)",
        ],
        eligibility: [
            "100–250 sq. ft. office space",
            "Minimum 5 vehicles required",
            "Basic fleet coordination knowledge",
        ],
        buttonText: "Fleet Partner के लिए Enquiry करें",
        color: "#ff9800",
        route: "/fleet-owners-registration",
    },
];


const FAQ_DATA = {
    exchangeCenter: [
        { question: "What is Local Delivery Franchise? (लोकल डिलीवरी फ्रेंचाइजी क्या है?)", answer: "The program is an extension of the RIlogistics pick-up and delivery network. We seek entrepreneurs willing to run their own parcel and freight pick-up and delivery business." },
        { question: "Who can become a Local Delivery Franchise partner? (पार्टनर कौन बन सकता है?)", answer: "Any entrepreneur with the required infrastructure and business acumen can apply to become a franchise partner." },
        { question: "How long does the application process take? (आवेदन प्रक्रिया में कितना समय लगता है?)", answer: "The application process typically takes 2-4 weeks from submission to approval." },
        { question: "Does it cost anything to become a partner for RIlogistics? (क्या यह निःशुल्क है?)", answer: "There is an initial setup cost that varies based on the franchise type you choose." },
        { question: "Will training be provided? (क्या प्रशिक्षण प्रदान किया जाएगा?)", answer: "Yes, comprehensive training will be provided to all franchise partners." },
    ],
    courierStore: [
        { question: "Local Delivery Franchise vs Courier & Sales Franchise", answer: "In the Local Delivery Franchise program, a partner sets up a last mile delivery center. In the Courier & Sales Franchise program, a partner sets up a company branded retail counter." },
        { question: "What infrastructure is needed to set up a RIlogistics courier store?", answer: "You need a retail space of 60-80 sqft in a prime location with good footfall." },
        { question: "Is there an investment involved? (क्या इसमें कोई निवेश शामिल है?)", answer: "Yes, there is an initial investment for store setup, branding, and operational requirements." },
        { question: "How can I earn by joining RIlogistics courier franchise program? (मैं कैसे कमा सकता हूँ?)", answer: "You earn commission on every parcel booked, plus additional income from packaging and insurance services." },
    ]
};

const OTHER_OPPORTUNITIES = [
    {
        icon: <People sx={{ fontSize: 48 }} />,
        title: "Delivery Partner (डिलीवरी पार्टनर)",
        description:
            "पार्सल सहित, सभी श्रेणियों में भारत भर में शिपमेंट भेजें। RTO रिडक्शन टूल्स, डोर-स्टेप इंस्पेक्शन और ट्रैकिंग जैसी वैल्यू एडेड सेवाएं प्राप्त करें।",
        route: "/delivery-partner",
    },
    {
        icon: <TrendingUp sx={{ fontSize: 48 }} />,
        title: "Fleet Owner (फ्लीट मालिक)",
        description:
            "हम अपने इन-हाउस बिडिंग प्लेटफॉर्म के माध्यम से शिपर्स को फ्लीट मालिकों, ट्रांसपोर्टरों और ट्रकलोड क्षमता के आपूर्तिकर्ताओं से जोड़ते हैं।",
        route: "/fleet-owners",
    },
];


// --- 2. Franchise Page Component ---


const FranchisePage = () => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Determine the overlay color based on the current theme mode for the hero section
    const heroOverlay = theme.palette.mode === 'dark'
        ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`
        : `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`;


    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
            <Navbar />

            {/* --------------------------------------------------- */}
            {/* ## 🚀 Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    minHeight: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    // Apply theme-aware overlay for better readability in both modes
                    background: `${heroOverlay}, url(${truckBgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    mt: 8, // To account for a fixed navbar
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ maxWidth: '800px' }}>
                        <Box sx={{ width: 60, height: 4, bgcolor: PRIMARY_RED, mb: 3 }} />
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                            }}
                        >
                            Associate with <Box component="span" sx={{ color: PRIMARY_RED }}>India's fastest</Box>
                            <br />
                            growing franchisee business partnership program
                        </Typography>
                        <Box sx={{ width: 120, height: 2, bgcolor: alpha('#fff', 0.3), mb: 4 }} />
                        <Typography variant="h6" sx={{ color: alpha('#fff', 0.9) }}>
                            RIlogistics नेटवर्क का हिस्सा बनें और हमारे साथ अपना व्यवसाय बढ़ाएँ
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/franchise-registration')}
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{ mt: 3, bgcolor: PRIMARY_RED, '&:hover': { bgcolor: alpha(PRIMARY_RED, 0.8) } }}
                        >
                            Explore Opportunities (अवसर खोजें)
                        </Button>
                    </Box>
                </Container>
            </Box>


            <Container maxWidth="xl" sx={{ py: 8 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                        Choose your <Box component="span" sx={{ color: 'primary.main' }}>Franchisee Type</Box> (अपना फ्रेंचाइजी प्रकार चुनें)
                    </Typography>
                    <Box sx={{ width: 80, height: 4, bgcolor: PRIMARY_RED, mx: 'auto' }} />
                </Box>

                {/* Dynamic Grid for 4 Franchise Options (2x2 grid on large screens) */}
                <Grid
                    container
                    spacing={4}
                    // Changed to flex-start to ensure Box 3 sits next to Box 4, not centered alone
                    justifyContent="flex-start"
                    alignItems="stretch"
                >
                    {ALL_FRANCHISE_TYPES.map((franchise, index) => (
                       <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
                            <Paper
                                elevation={4}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s',
                                    borderRadius: 3,
                                    '&:hover': { transform: 'translateY(-6px)', boxShadow: 8, border: `2px solid ${franchise.color}` },
                                    border: '2px solid transparent',
                                    p: 3,
                                    width: '100%' // Ensure Paper fills the Grid item
                                }}
                            >
                                {/* Icon and Title */}
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2, borderBottom: `2px solid ${alpha(franchise.color, 0.2)}`, pb: 2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: '50%',
                                            bgcolor: alpha(franchise.color, 0.1), color: franchise.color, flexShrink: 0,
                                        }}
                                    >
                                        {React.cloneElement(franchise.icon, { sx: { fontSize: 28 } })}
                                    </Box>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3, color: franchise.color }}>
                                            {franchise.title}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">{franchise.titleHindi}</Typography>
                                    </Box>
                                </Box>

                                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                                    {franchise.description}
                                </Typography>

                                {/* Benefits */}
                                <Box mb={2}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', gap: 1, color: 'success.main' }}>
                                        <CheckCircle fontSize="small" /> Benefits (लाभ)
                                    </Typography>
                                    <List dense sx={{ py: 0 }}>
                                        {franchise.benefits.slice(0, 3).map((benefit, idx) => (
                                            <ListItem key={idx} sx={{ px: 0, py: 0.2 }}>
                                                <ListItemIcon sx={{ minWidth: 28 }}><CheckCircle fontSize="small" sx={{ color: 'success.light', fontSize: 16 }} /></ListItemIcon>
                                                <ListItemText primary={benefit} primaryTypographyProps={{ variant: 'caption' }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>

                                {/* Eligibility */}
                                <Box mb={3}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main' }}>
                                        <CheckCircle fontSize="small" /> Eligibility (पात्रता)
                                    </Typography>
                                    <List dense sx={{ py: 0 }}>
                                        {franchise.eligibility.slice(0, 3).map((item, idx) => (
                                            <ListItem key={idx} sx={{ px: 0, py: 0.2 }}>
                                                <ListItemIcon sx={{ minWidth: 28 }}><CheckCircle fontSize="small" sx={{ color: 'primary.light', fontSize: 16 }} /></ListItemIcon>
                                                <ListItemText primary={item} primaryTypographyProps={{ variant: 'caption' }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>

                                {/* Button - Use mt: 'auto' to push the button to the bottom */}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    endIcon={<ArrowForward />}
                                    onClick={() => {
                                        navigate(franchise.route);
                                        setTimeout(() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                                        }, 0);
                                    }}
                                    sx={{
                                        bgcolor: franchise.color,
                                        color: "#fff",
                                        py: 1.5,
                                        fontWeight: 600,
                                        mt: "auto",
                                        "&:hover": {
                                            bgcolor: alpha(franchise.color, 0.8),
                                        },
                                    }}
                                >
                                    {franchise.buttonText}
                                </Button>

                            </Paper>
                        </Grid>
                    ))}
                </Grid>


                {/* OR Divider */}
                <Box sx={{ display: 'flex', alignItems: 'center', my: 6 }}>
                    <Divider sx={{ flexGrow: 1 }} />
                    <Typography variant="h4" sx={{ px: 4, color: 'text.secondary', fontWeight: 700 }}>
                        OR
                    </Typography>
                    <Divider sx={{ flexGrow: 1 }} />
                </Box>
            </Container>


            <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05), py: 8 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                            Frequently asked <Box component="span" sx={{ color: PRIMARY_RED }}>questions</Box> (अक्सर पूछे जाने वाले सवाल)
                        </Typography>
                        <Box sx={{ width: 80, height: 4, bgcolor: PRIMARY_RED, mx: 'auto' }} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                        <Box sx={{ flex: '1 1 50%' }}>
                            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'primary.dark' }}>
                                    Parcel Exchange Center (पार्सल केंद्र)
                                </Typography>
                                {FAQ_DATA.exchangeCenter.map((faq, index) => (
                                    <Accordion
                                        key={index}
                                        expanded={expanded === `exchange-${index}`}
                                        onChange={handleAccordionChange(`exchange-${index}`)}
                                        elevation={0} sx={{ '&:before': { display: 'none' } }}
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
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'primary.dark' }}>
                                    RIlogistics Courier Store (कूरियर स्टोर)
                                </Typography>
                                {FAQ_DATA.courierStore.map((faq, index) => (
                                    <Accordion
                                        key={index}
                                        expanded={expanded === `courier-${index}`}
                                        onChange={handleAccordionChange(`courier-${index}`)}
                                        elevation={0} sx={{ '&:before': { display: 'none' } }}
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


            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                        Other ways you can <Box component="span" sx={{ color: PRIMARY_RED }}>Join RIlogistics</Box> (अन्य तरीके जिनसे आप जुड़ सकते हैं)
                    </Typography>
                    <Box sx={{ width: 80, height: 4, bgcolor: PRIMARY_RED, mx: 'auto' }} />
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {OTHER_OPPORTUNITIES.map((opportunity, index) => (
                        <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
                            <Card
                                elevation={4}
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    transition: "all 0.3s",
                                    display: "flex",
                                    flexDirection: "column",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: 8,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 150,
                                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Box sx={{ color: PRIMARY_RED }}>{opportunity.icon}</Box>
                                </Box>

                                <CardContent
                                    sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                                        {opportunity.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ mb: 3, flexGrow: 1 }}
                                    >
                                        {opportunity.description}
                                    </Typography>

                                    <Button
                                        onClick={() => {
                                            navigate(opportunity.route)
                                            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                                        }}
                                        endIcon={<ArrowForward />}
                                        variant="outlined"
                                        sx={{
                                            fontWeight: 600,
                                            alignSelf: "flex-start",
                                            color: PRIMARY_RED,
                                            borderColor: PRIMARY_RED,
                                            "&:hover": {
                                                borderColor: PRIMARY_RED,
                                                bgcolor: alpha(PRIMARY_RED, 0.05),
                                            },
                                        }}
                                    >
                                        Learn More (और जानें)
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>


            <Box
                sx={{
                    // Strong, contrasting background for CTA
                    background: theme.palette.mode === 'dark' 
                        ? 'linear-gradient(135deg, #1f2937 0%, #000000 100%)' 
                        : 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
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
                            onClick={() => navigate('/franchise-registration')}
                            variant="contained" size="large" endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: PRIMARY_RED, color: 'white', px: 4, py: 1.5, fontSize: '1.1rem', fontWeight: 600,
                                '&:hover': { bgcolor: alpha(PRIMARY_RED, 0.8) },
                            }}
                        >
                            Join us now (अभी हमसे जुड़ें)
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* --------------------------------------------------- */}
            <Footer />
        </Box>
    );
};

export default FranchisePage;
