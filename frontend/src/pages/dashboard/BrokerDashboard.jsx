import React, { useState, useMemo, createContext, useContext } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Container,
  Card,
  CardContent,
  IconButton,
  useTheme,
  ThemeProvider, // MUI ThemeProvider
  CssBaseline, // MUI Base CSS
  createTheme, // MUI Theme creation utility
} from "@mui/material";
import {
  LocalShipping,
  AttachMoney,
  TrendingUp,
  Add,
  CheckCircle,
  BarChart,
  Timeline,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

// --- NOTE: Assuming these components are available locally or their imports are managed ---
// If you are putting this in a single file environment like CodeSandbox, you may need to
// replace these with simple placeholders or ensure they are defined in this file.
import ModernStatCard from "../../components/common/ModernStatCard"; 
import LoadPostingForm from "../../components/forms/LoadPostingForm"; 
import EnhancedLoadCard from "../../components/loads/EnhancedLoadCard"; 
import RevenueChart from "../../components/charts/RevenueChart"; 
import DeliveryStatusChart from "../../components/charts/DeliveryStatusChart"; 
import VehicleTypeBarChart from "../../components/charts/VehicleTypeBarChart"; 
import ActivityFeed from "../../components/dashboard/ActivityFeed"; 
import { useIsMobile } from "../../hooks/useMediaQuery"; 
// ---------------------------------------------------------------------------------------

// --- 1. MOCK DATA (डेटा) ---
const mockStats = [
  { title: "Active Loads", value: "12", subtitle: "Currently in transit", icon: LocalShipping, trend: "up", trendValue: "+8%", color: "blue" },
  { title: "Pending Payments", value: "₹45,000", subtitle: "To be collected", icon: AttachMoney, trend: "down", trendValue: "-12%", color: "orange" },
  { title: "Completed Trips", value: "156", subtitle: "This month", icon: CheckCircle, trend: "up", trendValue: "+23%", color: "green" },
  { title: "Monthly Earnings", value: "₹1,25,000", subtitle: "This month", icon: TrendingUp, trend: "up", trendValue: "+15%", color: "purple" },
];

const mockRecentLoads = [
  { id: 1, title: "Construction Materials", from: "Mumbai", to: "Pune", weight: "12 tons", price: "₹25,000", status: "In Transit", progress: 65, vehicleType: "Truck", driver: "Rajesh Kumar", eta: "2 hours" },
  { id: 2, title: "Electronics Shipment", from: "Delhi", to: "Noida", weight: "5 tons", price: "₹15,000", status: "Pending", progress: 10, vehicleType: "Van", driver: "Amit Singh", eta: "6 hours" },
  { id: 3, title: "Textile Products", from: "Surat", to: "Mumbai", weight: "8 tons", price: "₹18,000", status: "Delivered", progress: 100, vehicleType: "Container", driver: "Suresh Patel", eta: "Completed" },
];

// --- 2. THEME DEFINITIONS (थीम परिभाषाएँ) ---
const primaryColor = '#007bff'; 
const secondaryColor = '#dc3545'; 

// Function to get the theme (Dark or Light)
const getAppTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: mode === 'light' ? '#f4f6f8' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#333333' : '#ffffff',
      secondary: mode === 'light' ? '#6c757d' : '#aaaaaa',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  // Add other theme customization here (components, shadows, etc.)
});


// --- 3. COLOR MODE CONTEXT (कलर मोड कॉन्टेक्स्ट) ---
const ColorModeContext = createContext({ toggleColorMode: () => {} });


// --- 4. BROKER DASHBOARD COMPONENT (मुख्य कंपोनेंट) ---
const BrokerDashboard = () => {
  const [openLoadForm, setOpenLoadForm] = useState(false);
  // NOTE: Assuming useIsMobile is available/defined elsewhere or replaced with MUI useMediaQuery
  const isMobile = false; // Placeholder if the hook is not available

  // Get theme context and toggle function
  const theme = useTheme(); 
  const colorMode = useContext(ColorModeContext); 

  const stats = mockStats;
  const recentLoads = mockRecentLoads;

  return (
    <Container
      maxWidth="xl" 
      sx={{ py: { xs: 3, sm: 4, md: 5 }, px: { xs: 2, sm: 3 } }}
    >
      {/* 1. Header, Action Button and Theme Toggle */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: { xs: 3, md: 4 } }}>
        
        <Grid item xs={8} sm={7}> {/* Reduced xs to 8 to accommodate the toggle button */}
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'primary.main', 
              mb: 0.5,
            }}
          >
            Welcome back, Broker! 👋
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 0 } }}
          >
            Here's what's happening with your logistics operations today
          </Typography>
        </Grid>

        <Grid item xs={4} sm={5} sx={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          
          {/* Theme Toggle Button */}
          <IconButton 
            onClick={colorMode.toggleColorMode} 
            color="inherit" 
            sx={{ mr: { xs: 0, sm: 2 } }} 
            size={isMobile ? "medium" : "large"}
          >
            {/* Display appropriate icon based on the current mode */}
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Post New Load Button */}
          <Button
            variant="contained"
            color="primary"
            size={isMobile ? "small" : "large"}
            startIcon={!isMobile && <Add />}
            onClick={() => setOpenLoadForm(true)}
            sx={{
              display: { xs: 'none', sm: 'inline-flex' }, // Hide on xs, show on sm and up
              px: { xs: 2, md: 4 },
              py: { xs: 0.8, md: 1.5 },
              borderRadius: 3,
              fontWeight: 600,
            }}
          >
            {"Post New Load"}
          </Button>

        </Grid>
      </Grid>

      {/* 2. Stats Cards (Responsive: 2 per row on mobile, 4 per row on desktop) */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 3, md: 4 } }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}> 
            <ModernStatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      {/* 3. Main Charts Section (Responsive: 12/8/4 layout) */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 3, md: 4 } }}>
        <Grid item xs={12} lg={8}> 
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <BarChart color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight={600} color="text.primary">Monthly Revenue</Typography>
              </Box>
              <RevenueChart /> 
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} lg={4}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Timeline color="secondary" sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight={600} color="text.primary">Delivery Status</Typography>
              </Box>
              <DeliveryStatusChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 4. Recent Loads Section */}
      <Box sx={{ mb: { xs: 2, md: 3 } }}>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 1, color: 'text.primary' }}
        >
          Recent Loads 🚚
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Track and manage your active shipments
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 3, md: 4 } }}>
        {recentLoads.map((load) => (
          <Grid item xs={12} sm={6} lg={4} key={load.id}> 
            <EnhancedLoadCard load={load} />
          </Grid>
        ))}
      </Grid>

      {/* 5. Vehicle Type & Activity Section */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid item xs={12} lg={7}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom color="text.primary">
                Load Distribution by Vehicle Type
              </Typography>
              <VehicleTypeBarChart />
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} lg={5}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom color="text.primary">
                Recent Activity
              </Typography>
              <ActivityFeed />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Load Posting Form Modal */}
      <LoadPostingForm
        open={openLoadForm}
        onClose={() => setOpenLoadForm(false)}
        onSubmit={(values) => {
          console.log("Load posted:", values);
          setOpenLoadForm(false);
        }}
      />
    </Container>
  );
};


// --- 5. MAIN WRAPPER COMPONENT (सब कुछ एक साथ रखने वाला) ---
const AppWrapper = () => {
  const [mode, setMode] = useState('light'); // default mode
  
  // Logic to toggle mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // Apply the selected theme
  const theme = useMemo(
    () => getAppTheme(mode),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline applies the theme's background and text colors */}
        <CssBaseline /> 
        <BrokerDashboard /> 
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// NOTE: Export the wrapper component, not the dashboard itself.
export default AppWrapper;
