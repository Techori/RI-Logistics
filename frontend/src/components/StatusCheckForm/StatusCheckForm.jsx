import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  alpha,
  Dialog,
  DialogContent,
  Chip,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import { Search, CheckCircle, Pending, Cancel, Close } from '@mui/icons-material';
import { useThemeMode } from '../../theme/ThemeProvider';

const StatusCheckForm = () => {
  const { mode } = useThemeMode();
  const isDark = mode === 'dark';
  
  const [applicationType, setApplicationType] = useState('');
  const [applicationNumber, setApplicationNumber] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    
    if (!applicationType || !applicationNumber) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/application');
      
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }

      const applications = await response.json();
      
      const foundApplication = applications.find(
        app => app.id === applicationNumber && app.type === applicationType
      );

      if (foundApplication) {
        setApplicationData(foundApplication);
        setOpenDialog(true);
      } else {
        setError('Application not found. Please check your details.');
      }
    } catch (err) {
      setError('Error fetching application data. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setApplicationData(null);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'new':
        return isDark ? '#2196f3' : '#1976d2';
      case 'approved':
        return '#4caf50';
      case 'pending':
        return '#ff9800';
      case 'rejected':
        return '#f44336';
      default:
        return '#9e9e9e';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return <CheckCircle />;
      case 'pending':
      case 'new':
        return <Pending />;
      case 'rejected':
        return <Cancel />;
      default:
        return null;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        py: 10,
        
      }}
    >
      {/* Floating Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          zIndex:'0',
          left: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(230,57,70,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(25,118,210,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
              background: isDark
                ? 'linear-gradient(135deg, #ffffff 0%, #e63946 100%)'
                : 'linear-gradient(135deg, #1a1d29 0%, #1976d2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Check Application Status
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: isDark ? alpha('#ffffff', 0.7) : alpha('#000000', 0.7),
            }}
          >
            Track your registration application in real-time
          </Typography>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card
            sx={{
              p: { xs: 3, md: 5 },
              background: isDark
                ? alpha('#1a1d29', 0.8)
                : alpha('#ffffff', 0.95),
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: isDark
                ? `2px solid ${alpha('#e63946', 0.2)}`
                : `2px solid ${alpha('#1976d2', 0.2)}`,
              boxShadow: isDark
                ? '0 20px 60px rgba(230, 57, 70, 0.2)'
                : '0 20px 60px rgba(25, 118, 210, 0.2)',
            }}
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: alpha('#f44336', 0.1),
                    border: `1px solid ${alpha('#f44336', 0.3)}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Cancel sx={{ color: '#f44336' }} />
                  <Typography sx={{ color: '#f44336', fontWeight: 500 }}>
                    {error}
                  </Typography>
                </Box>
              </motion.div>
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Registration Type</InputLabel>
                <Select
                  value={applicationType}
                  label="Registration Type"
                  onChange={(e) => setApplicationType(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: isDark
                        ? alpha('#e63946', 0.3)
                        : alpha('#1976d2', 0.3),
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: isDark ? '#e63946' : '#1976d2',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: isDark ? '#e63946' : '#1976d2',
                    },
                  }}
                >
                  <MenuItem value="Fleet Owner">Fleet Owner Registration</MenuItem>
                  <MenuItem value="Franchise Partner">Franchise Partner Registration</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Application Number"
                placeholder={applicationType == "Fleet Owner"?'FOT-62101834918':'FRP-1764867863600'}
                value={applicationNumber}
                onChange={(e) => setApplicationNumber(e.target.value)}
                onKeyPress={handleKeyPress}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: isDark
                        ? alpha('#e63946', 0.3)
                        : alpha('#1976d2', 0.3),
                    },
                    '&:hover fieldset': {
                      borderColor: isDark ? '#e63946' : '#1976d2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: isDark ? '#e63946' : '#1976d2',
                    },
                  },
                }}
              />

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={loading ? <CircularProgress size={20} /> : <Search />}
                  onClick={handleSearch}
                  disabled={loading}
                  sx={{
                    py: 1.8,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    borderRadius: 2,
                    background: isDark
                      ? 'linear-gradient(135deg, #e63946 0%, #ff6b6b 100%)'
                      : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                    boxShadow: isDark
                      ? '0 10px 30px rgba(230, 57, 70, 0.3)'
                      : '0 10px 30px rgba(25, 118, 210, 0.3)',
                    '&:hover': {
                      background: isDark
                        ? 'linear-gradient(135deg, #ff6b6b 0%, #e63946 100%)'
                        : 'linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)',
                      boxShadow: isDark
                        ? '0 15px 40px rgba(230, 57, 70, 0.4)'
                        : '0 15px 40px rgba(25, 118, 210, 0.4)',
                    },
                  }}
                >
                  {loading ? 'Searching...' : 'Check Status'}
                </Button>
              </motion.div>
            </Box>
          </Card>
        </motion.div>
      </Container>

      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            background: isDark
              ? alpha('#1a1d29', 0.95)
              : alpha('#ffffff', 0.95),
            backdropFilter: 'blur(20px)',
            border: isDark
              ? `2px solid ${alpha('#e63946', 0.2)}`
              : `2px solid ${alpha('#1976d2', 0.2)}`,
          },
        }}
      >
        <Box
          sx={{
            background: isDark
              ? 'linear-gradient(135deg, #e63946 0%, #ff6b6b 100%)'
              : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            p: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
            Application Details
          </Typography>
          <Button
            onClick={handleCloseDialog}
            sx={{
              minWidth: 'auto',
              p: 1,
              color: 'white',
              '&:hover': { bgcolor: alpha('#ffffff', 0.1) },
            }}
          >
            <Close />
          </Button>
        </Box>

        <DialogContent sx={{ p: 4 }}>
          {applicationData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Chip
                  icon={getStatusIcon(applicationData.status)}
                  label={applicationData.status}
                  sx={{
                    bgcolor: getStatusColor(applicationData.status),
                    color: 'white',
                    fontSize: '1rem',
                    py: 2.5,
                    px: 2,
                    fontWeight: 700,
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                  }}
                />
              </Box>

              <Card
                sx={{
                  p: 3,
                  bgcolor: isDark ? alpha('#0a0e1a', 0.5) : alpha('#f8fafc', 0.8),
                  borderRadius: 3,
                  border: isDark
                    ? `1px solid ${alpha('#ffffff', 0.1)}`
                    : `1px solid ${alpha('#000000', 0.1)}`,
                }}
              >
                {[
                  { label: 'Full Name', value: applicationData.name },
                  { label: 'Application Type', value: applicationData.type },
                  { label: 'Application Number', value: applicationData.id },
                  { label: 'Current Step', value: applicationData.step },
                  { label: 'Submitted On', value: applicationData.createdDate },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      py: 1.5,
                      borderBottom:
                        index < 7
                          ? `1px solid ${isDark ? alpha('#ffffff', 0.1) : alpha('#000000', 0.1)}`
                          : 'none',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? alpha('#ffffff', 0.6) : alpha('#000000', 0.6),
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: isDark ? '#ffffff' : '#000000',
                        fontWeight: 600,
                        textAlign: 'right',
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Card>

              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: isDark ? alpha('#2196f3', 0.1) : alpha('#2196f3', 0.05),
                  border: `1px solid ${alpha('#2196f3', 0.3)}`,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#2196f3',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  ℹ️ Your application is currently under review. You will be notified once
                  there's an update.
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleCloseDialog}
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  background: isDark
                    ? 'linear-gradient(135deg, #e63946 0%, #ff6b6b 100%)'
                    : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                }}
              >
                Close
              </Button>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default StatusCheckForm;