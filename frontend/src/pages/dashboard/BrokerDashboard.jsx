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
  ThemeProvider,
  CssBaseline,
  createTheme,
  Avatar,
  Chip,
  LinearProgress,
  Divider,
  Paper,
  Stack
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
  ArrowUpward,
  ArrowDownward,
  NotificationsOutlined,
  Search,
  Person
} from "@mui/icons-material";

// --- 1. MOCK DATA ---
const mockStats = [
  { title: "Active Loads", value: "12", subtitle: "In transit", icon: LocalShipping, trend: "up", trendValue: "+8%", color: "#3f51b5", bgColor: "#e8eaf6" },
  { title: "Pending Revenue", value: "₹45k", subtitle: "To collect", icon: AttachMoney, trend: "down", trendValue: "-12%", color: "#ff9800", bgColor: "#fff3e0" },
  { title: "Completed", value: "156", subtitle: "This month", icon: CheckCircle, trend: "up", trendValue: "+23%", color: "#4caf50", bgColor: "#e8f5e9" },
  { title: "Earnings", value: "₹1.2L", subtitle: "Net profit", icon: TrendingUp, trend: "up", trendValue: "+15%", color: "#9c27b0", bgColor: "#f3e5f5" },
];

const mockRecentLoads = [
  { id: 1, title: "Construction Materials", from: "Mumbai", to: "Pune", weight: "12 T", price: "₹25,000", status: "In Transit", progress: 65, vehicleType: "Truck" },
  { id: 2, title: "Electronics Shipment", from: "Delhi", to: "Noida", weight: "5 T", price: "₹15,000", status: "Pending", progress: 10, vehicleType: "Van" },
  { id: 3, title: "Textile Products", from: "Surat", to: "Mumbai", weight: "8 T", price: "₹18,000", status: "Delivered", progress: 100, vehicleType: "Container" },
];

// --- 2. SUB-COMPONENTS (Inline for Demo) ---

// A. Stylish Stat Card
const ModernStatCard = ({ title, value, subtitle, icon: Icon, trend, trendValue, color, bgColor }) => {
  const theme = useTheme();
  return (
    <Card 
      elevation={0} 
      sx={{ 
        height: '100%', 
        borderRadius: 4, 
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: theme.shadows[10],
          borderColor: 'transparent'
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="subtitle2" color="text.secondary" fontWeight={600} gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" fontWeight={800} sx={{ my: 0.5 }}>
              {value}
            </Typography>
            
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <Chip 
                label={trendValue} 
                size="small" 
                icon={trend === 'up' ? <ArrowUpward sx={{ width: 14 }} /> : <ArrowDownward sx={{ width: 14 }} />}
                sx={{ 
                  height: 24, 
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  bgcolor: trend === 'up' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                  color: trend === 'up' ? 'success.main' : 'error.main',
                  '& .MuiChip-icon': { color: 'inherit' }
                }} 
              />
              <Typography variant="caption" color="text.secondary">{subtitle}</Typography>
            </Box>
          </Box>

          <Avatar variant="rounded" sx={{ bgcolor: bgColor, color: color, width: 48, height: 48 }}>
            <Icon fontSize="medium" />
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );
};

// B. Enhanced Load Card
const EnhancedLoadCard = ({ load }) => {
  const theme = useTheme();
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'success';
      case 'In Transit': return 'primary';
      default: return 'warning';
    }
  };

  return (
    <Card 
      elevation={0}
      sx={{ 
        borderRadius: 3, 
        border: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Chip 
            label={load.status} 
            color={getStatusColor(load.status)} 
            size="small" 
            variant={theme.palette.mode === 'dark' ? 'outlined' : 'filled'}
            sx={{ fontWeight: 600, borderRadius: 1 }}
          />
          <Typography variant="h6" color="primary.main" fontWeight={700}>
            {load.price}
          </Typography>
        </Box>

        <Typography variant="h6" fontWeight={700} gutterBottom>{load.title}</Typography>
        
        <Box display="flex" alignItems="center" gap={1} mb={2} color="text.secondary">
          <Typography variant="body2" fontWeight={500}>{load.from}</Typography>
          <Box sx={{ flex: 1, height: 1, borderBottom: '2px dashed', borderColor: 'divider', position: 'relative' }}>
             <LocalShipping sx={{ position: 'absolute', top: -10, left: '45%', fontSize: 16, color: 'text.disabled' }} />
          </Box>
          <Typography variant="body2" fontWeight={500}>{load.to}</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress 
              variant="determinate" 
              value={load.progress} 
              color={getStatusColor(load.status)}
              sx={{ height: 6, borderRadius: 5 }} 
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${load.progress}%`}</Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2} pt={2} borderTop={`1px solid ${theme.palette.divider}`}>
           <Box display="flex" gap={1}>
             <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>D</Avatar>
             <Typography variant="body2" fontWeight={600} sx={{ mt: 0.5 }}>{load.vehicleType}</Typography>
           </Box>
           <Typography variant="body2" fontWeight={700}>{load.weight}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};


// --- 3. THEME CONFIGURATION ---
const getAppTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: { main: '#2563eb', light: '#60a5fa', dark: '#1e40af' }, // Modern Blue
    secondary: { main: '#7c3aed', light: '#a78bfa', dark: '#5b21b6' }, // Modern Purple
    background: {
      default: mode === 'light' ? '#F3F4F6' : '#0B0F19', // Cool gray vs Deep dark
      paper: mode === 'light' ? '#FFFFFF' : '#111827',
    },
    text: {
      primary: mode === 'light' ? '#111827' : '#F9FAFB',
      secondary: mode === 'light' ? '#6B7280' : '#9CA3AF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: { fontWeight: 800, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600, borderRadius: 8 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, padding: '8px 20px', boxShadow: 'none', '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: 'none' } // Remove default gradient overlay in dark mode
      }
    }
  },
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

// --- 4. MAIN DASHBOARD ---
const BrokerDashboard = () => {
  const [openLoadForm, setOpenLoadForm] = useState(false);
  const isMobile = false; 
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      
      {/* A. Modern Navbar */}
      <Paper 
        elevation={0}
        sx={{ 
          px: 3, py: 2, 
          borderRadius: 0, 
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          position: 'sticky', top: 0, zIndex: 100,
          backdropFilter: 'blur(10px)',
          backgroundColor: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(17, 24, 39, 0.8)'
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Box sx={{ width: 40, height: 40, bgcolor: 'primary.main', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <LocalShipping />
          </Box>
          <Typography variant="h6" color="text.primary" fontWeight={800}>LogiFast</Typography>
        </Box>

        <Box display="flex" gap={2} alignItems="center">
          <IconButton sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
             <Search />
          </IconButton>
          <IconButton sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
             <NotificationsOutlined />
          </IconButton>
          <IconButton onClick={colorMode.toggleColorMode} sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Avatar sx={{ bgcolor: 'secondary.main', width: 40, height: 40, borderRadius: 2 }}>B</Avatar>
        </Box>
      </Paper>

      {/* B. Content Area */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        
        {/* Header Section */}
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ md: 'center' }} mb={5}>
          <Box>
            <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
            <Typography variant="body1" color="text.secondary">Welcome back, Broker! Here is your daily logistics summary.</Typography>
          </Box>
          <Button
             variant="contained"
             size="large"
             startIcon={<Add />}
             onClick={() => setOpenLoadForm(true)}
             sx={{ 
               mt: { xs: 2, md: 0 }, 
               bgcolor: 'text.primary', 
               color: 'background.paper',
               '&:hover': { bgcolor: 'primary.main' } 
             }}
          >
            Post New Load
          </Button>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={3} mb={5}>
          {mockStats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ModernStatCard {...stat} />
            </Grid>
          ))}
        </Grid>

        {/* Charts Section Placeholder */}
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} lg={8}>
            <Card sx={{ height: 400, borderRadius: 4, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.paper', border: `1px solid ${theme.palette.divider}`, boxShadow: 'none' }}>
               <Box textAlign="center">
                 <BarChart sx={{ fontSize: 60, color: 'primary.light', opacity: 0.5 }} />
                 <Typography color="text.secondary">Revenue Chart Component Area</Typography>
               </Box>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card sx={{ height: 400, borderRadius: 4, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.paper', border: `1px solid ${theme.palette.divider}`, boxShadow: 'none' }}>
               <Box textAlign="center">
                 <Timeline sx={{ fontSize: 60, color: 'secondary.light', opacity: 0.5 }} />
                 <Typography color="text.secondary">Status Timeline Area</Typography>
               </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Loads */}
        <Box mb={3} display="flex" alignItems="center" justifyContent="space-between">
           <Typography variant="h5" fontWeight={700}>Recent Loads</Typography>
           <Button color="inherit">View All</Button>
        </Box>
        
        <Grid container spacing={3}>
          {mockRecentLoads.map((load) => (
            <Grid item xs={12} sm={6} lg={4} key={load.id}>
              <EnhancedLoadCard load={load} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

// --- 5. WRAPPER ---
const AppWrapper = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(() => ({ toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')) }), []);
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrokerDashboard />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppWrapper;
