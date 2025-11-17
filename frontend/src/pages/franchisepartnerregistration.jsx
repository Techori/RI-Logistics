import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Assume these imports and their content (ThemeProvider logic, components) are available
import { useThemeMode } from "../theme/ThemeProvider";
import Navbar from "../components/solutions/Navbar"; 
import MagneticButton from "../components/common/MagneticButton"; 
import Footer from "../components/solutions/Footer"; 

// MUI Imports for a polished look
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Checkbox, 
  FormControlLabel,
  FormHelperText,
  Paper,
  Dialog, // For the pop-up/modal
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from "@mui/material";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

// --- Custom Styles / Tailwind & Theme Setup ---
const TailwindColors = {
  primary: "#FF4D4D",   // Reddish Primary Color (Highlights)
  secondary: "#FF8C00", // Orange (Accent)
  success: "#4CAF50",
  error: "#F44336",
  textLight: "#1F2937",    // Black in Light Mode
  textDark: "#F9FAFB",     // White in Dark Mode
  bgLight: "#FFFFFF",      
  bgDark: "#111827",       
  cardLight: "#F3F4F6",    
  cardDark: "#1F2937",     
  border: "#D1D5DB"
};

// Custom styles for inputs: CLEANER & THEME ADAPTIVE
const inputStyles = (isDark) => ({
  mt: 2,
  bgcolor: isDark ? TailwindColors.bgDark : TailwindColors.bgLight, 
  
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: isDark ? TailwindColors.border + '50' : TailwindColors.border,
      transition: 'border-color 0.3s',
    },
    "&:hover fieldset": {
      borderColor: TailwindColors.primary,
    },
    "&.Mui-focused fieldset": {
      borderColor: TailwindColors.primary,
      borderWidth: '2px',
    },
  },
  "& .MuiInputLabel-root": {
    color: isDark ? TailwindColors.textDark : TailwindColors.textLight,
  },
  "& .MuiInputBase-input": {
    color: isDark ? TailwindColors.textDark : TailwindColors.textLight,
  },
  "& .MuiSelect-select": {
    color: isDark ? TailwindColors.textDark : TailwindColors.textLight,
  },
});

// --- Motion Variants for Subtle Animation ---
const containerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "tween", duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } 
  },
};

const sectionVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// --- Helper Functions and Components ---

// Wrapper for Sections
const SectionBox = ({ children, title, isDark }) => (
    <motion.div 
        initial={{ opacity: 0, scaleY: 0.9 }} 
        animate={{ opacity: 1, scaleY: 1 }} 
        transition={{ duration: 0.5, type: "spring" }} 
    >
        <Box 
          sx={{ 
            my: 4, p: { xs: 2, sm: 3 }, 
            bgcolor: isDark ? TailwindColors.bgDark : TailwindColors.bgLight, 
            borderRadius: 2, 
            boxShadow: isDark ? `0 0 10px ${TailwindColors.primary}20` : `0 4px 12px rgba(0,0,0,0.1)`, 
            borderLeft: `5px solid ${TailwindColors.primary}`,
            transition: 'background-color 0.5s', 
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600, color: TailwindColors.primary }}>
            {title}
          </Typography>
          {children}
        </Box>
    </motion.div>
);

// Component for Document Upload
const DocumentUpload = ({ label, file, setFile, required, isDark }) => {
    const isUploaded = !!file;
    return (
        <Box 
            mt={2} p={2} 
            sx={{ 
                border: `1px dashed ${isUploaded ? TailwindColors.success : TailwindColors.primary}`, 
                borderRadius: 1,
                bgcolor: isDark ? TailwindColors.bgDark : 'white',
            }}
        >
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>{label} {required && '*'}</label>
            <input 
                type="file" 
                accept=".pdf,image/*" 
                onChange={(e) => setFile(e.target.files?.[0] || null)} 
                required={required} 
                style={{ display: 'block', width: '100%', color: isDark ? 'inherit' : 'initial' }}
            />
            {file && (<FormHelperText sx={{ color: TailwindColors.success, fontWeight: 'bold', mt: 1 }}>✅ File selected: {file.name}</FormHelperText>)}
            {required && !file && (<FormHelperText sx={{ color: TailwindColors.primary, mt: 1 }}>* This field is required</FormHelperText>)}
        </Box>
    );
};

// Success Modal
const SuccessModal = ({ open, handleClose, appNumber, isDark }) => {
    const dialogBg = isDark ? TailwindColors.cardDark : TailwindColors.bgLight;
    const dialogTextColor = isDark ? TailwindColors.textDark : TailwindColors.textLight;

    return (
        <Dialog 
            open={open} 
            onClose={handleClose} 
            maxWidth="sm" 
            fullWidth
            PaperProps={{ 
                sx: { 
                    bgcolor: dialogBg, 
                    color: dialogTextColor, 
                    borderRadius: 3,
                    border: `2px solid ${TailwindColors.success}`,
                } 
            }}
        >
            <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: TailwindColors.success }}>
                    Submission Successful!
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: dialogTextColor }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            
            <DialogContent dividers sx={{ borderColor: isDark ? TailwindColors.border + '50' : TailwindColors.border }}>
                <Box textAlign="center" py={3}>
                    <CheckCircleOutlineIcon sx={{ color: TailwindColors.success, fontSize: 80, mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                        Your application was successfully submitted.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, mb: 3, fontWeight: 'medium' }}>
                        आपका आवेदन सफलतापूर्वक जमा कर दिया गया है।
                    </Typography>
                    
                    <Paper elevation={3} sx={{ p: 2, bgcolor: isDark ? TailwindColors.bgDark : TailwindColors.cardLight }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: TailwindColors.primary }}>
                            Application Number:
                        </Typography>
                        <Typography variant="h4" sx={{ color: TailwindColors.secondary, fontWeight: 700, letterSpacing: 1 }}>
                            {appNumber}
                        </Typography>
                    </Paper>
                    <Typography variant="caption" display="block" sx={{ mt: 1, color: isDark ? '#aaa' : '#555' }}>
                        कृपया भविष्य के संदर्भ के लिए यह नंबर सुरक्षित रखें। (Please save this number for future reference.)
                    </Typography>
                </Box>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={handleClose} variant="contained" sx={{ bgcolor: TailwindColors.success, '&:hover': { bgcolor: TailwindColors.success + 'CC' } }}>
                    Close & Proceed
                </Button>
            </DialogActions>
        </Dialog>
    );
};

// --- Main Component: FranchisePartnerForm ---
export default function FranchisePartnerForm() {
  const { mode } = (useThemeMode && useThemeMode()) || { mode: "light" };
  const navigate = useNavigate();
  const isDark = mode === "dark";
  const textColor = isDark ? TailwindColors.textDark : TailwindColors.textLight;
  const cardBg = isDark ? TailwindColors.cardDark : TailwindColors.cardLight;
  const sectionTitleColor = TailwindColors.primary;

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    mobile: "",
    email: "",
    address: "",
    state: "",
    city: "",
    pinCode: "",
    franchiseType: "",
    shopSize: "",
    locationType: "",
    facilities: [],
    investmentCapacity: "",
    staffCount: "",
    priorExperience: "",
    applicantPhoto: null,
    aadhaarCopy: null,
    panCopy: null,
    gstCertificate: null,
    shopOwnershipDoc: null,
    bankName: "",
    bankBranch: "",
    ifsc: "",
    accountHolder: "",
    accountNumber: "",
    declaration: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState("");


  const facilityOptions = ["Furniture", "Computer/Internet", "Signage", "Storage Area"];
  const franchiseTypes = ["Courier Booking Counter", "Parcel Delivery Center", "Fleet Owner Partner", "Other"];
  const locationTypes = ["Main Road", "Market", "Residential Area", "Other"];

  useEffect(() => {
    document.title = "Franchise Partner Registration";
  }, []);

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Required";
    if (!formData.mobile) tempErrors.mobile = "Required";
    if (!formData.address) tempErrors.address = "Required";
    if (!formData.state) tempErrors.state = "Required";
    if (!formData.city) tempErrors.city = "Required";
    if (!formData.pinCode) tempErrors.pinCode = "Required";
    if (!formData.franchiseType) tempErrors.franchiseType = "Select one";
    if (!formData.declaration) tempErrors.declaration = "You must accept declarations";
    // Basic file checks (optional but good practice)
    if (!formData.aadhaarCopy) tempErrors.aadhaarCopy = "Required";
    if (!formData.panCopy) tempErrors.panCopy = "Required";


    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox" && name === "declaration") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "checkbox") {
      let facilities = [...formData.facilities];
      if (checked) { facilities.push(value); } 
      else { facilities = facilities.filter((f) => f !== value); }
      setFormData({ ...formData, facilities });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);

    try {
        // --- API Submission Logic ---
        // Prepare FormData here if submitting files.
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        // Generate Application Number 
        const generatedAppNumber = 'FRP-' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 900 + 100);
        
        setApplicationNumber(generatedAppNumber);
        setShowSuccessModal(true);

    } catch (error) {
        setErrors({ submit: error.message || "Form submission failed." });
    } finally {
        setSubmitting(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/registration-success"); 
  };
  
  // Helper for setting file data directly in DocumentUpload component
  const setFileState = (name, file) => {
    setFormData(prev => ({ ...prev, [name]: file }));
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-gray-50"}`} 
      style={{ color: textColor }}
    >
      <Navbar />
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 8 } }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
          <Paper elevation={10} sx={{ bgcolor: cardBg, p: { xs: 2, sm: 4 }, borderRadius: 3, border: `2px solid ${TailwindColors.primary}`, transition: 'background-color 0.5s', }}>
            
            <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, mb: 4, color: sectionTitleColor, pb: 1, borderBottom: `3px solid ${TailwindColors.primary}` }}>
              🔗 Franchise Partner Registration / फ्रेंचाइजी पंजीकरण
            </Typography>

            {errors.submit && (
              <Box sx={{ p: 2, mb: 3, bgcolor: TailwindColors.error, color: "white", borderRadius: 1, fontWeight: 'bold' }}>
                🛑 Error: {errors.submit}
              </Box>
            )}

            <form onSubmit={handleSubmit}>
              
              {/* --- 1. Personal & Contact Information --- */}
              <motion.div variants={sectionVariants}>
                <SectionBox title="1. Personal & Contact / व्यक्तिगत और संपर्क जानकारी" isDark={isDark}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="पूरा नाम / Full Name*" name="fullName" value={formData.fullName} onChange={handleChange} required sx={inputStyles(isDark)} error={!!errors.fullName} helperText={errors.fullName}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="व्यावसायिक नाम (Optional) / Business Name" name="businessName" value={formData.businessName} onChange={handleChange} sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="मोबाइल नंबर / Mobile Number*" name="mobile" value={formData.mobile} onChange={handleChange} required type="tel" inputProps={{ maxLength: 10 }} sx={inputStyles(isDark)} error={!!errors.mobile} helperText={errors.mobile}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="ईमेल पता (Optional) / Email Address" name="email" value={formData.email} onChange={handleChange} type="email" sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="पता / Address*" name="address" value={formData.address} onChange={handleChange} multiline rows={2} required sx={inputStyles(isDark)} error={!!errors.address} helperText={errors.address}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField fullWidth label="राज्य / State*" name="state" value={formData.state} onChange={handleChange} required sx={inputStyles(isDark)} error={!!errors.state} helperText={errors.state}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField fullWidth label="शहर / City*" name="city" value={formData.city} onChange={handleChange} required sx={inputStyles(isDark)} error={!!errors.city} helperText={errors.city}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField fullWidth label="पिन कोड / Pin Code*" name="pinCode" value={formData.pinCode} onChange={handleChange} required sx={inputStyles(isDark)} error={!!errors.pinCode} helperText={errors.pinCode}/>
                    </Grid>
                  </Grid>
                </SectionBox>
              </motion.div>

              {/* --- 2. Franchise & Location Details --- */}
              <motion.div variants={sectionVariants}>
                <SectionBox title="2. Franchise & Location Details / फ्रेंचाइजी और स्थान विवरण" isDark={isDark}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth required error={!!errors.franchiseType} sx={inputStyles(isDark)}>
                        <InputLabel>फ्रेंचाइजी का प्रकार / Franchise Type*</InputLabel>
                        <Select label="Franchise Type*" name="franchiseType" value={formData.franchiseType} onChange={handleChange}>
                          <MenuItem value="">Select</MenuItem>
                          {franchiseTypes.map((type) => (<MenuItem key={type} value={type}>{type}</MenuItem>))}
                        </Select>
                        {errors.franchiseType && <FormHelperText>{errors.franchiseType}</FormHelperText>}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="दुकान/कार्यालय का आकार (वर्ग फुट) / Shop/Office Size (sqft)" name="shopSize" value={formData.shopSize} onChange={handleChange} type="number" sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth sx={inputStyles(isDark)}>
                        <InputLabel>स्थान का प्रकार / Location Type</InputLabel>
                        <Select label="Location Type" name="locationType" value={formData.locationType} onChange={handleChange}>
                          <MenuItem value="">Select</MenuItem>
                          {locationTypes.map((loc) => (<MenuItem key={loc} value={loc}>{loc}</MenuItem>))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="अनुमानित निवेश क्षमता / Approx Investment Capacity" name="investmentCapacity" value={formData.investmentCapacity} onChange={handleChange} sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="कर्मचारियों की संख्या / Number of Staff" name="staffCount" value={formData.staffCount} onChange={handleChange} type="number" sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="लॉजिस्टिक्स/कूरियर में पिछला अनुभव / Prior Experience" name="priorExperience" value={formData.priorExperience} onChange={handleChange} multiline rows={3} sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" sx={{ mt: 2, color: sectionTitleColor, fontWeight: 'bold' }}>उपलब्ध सुविधाएं / Facilities Available (Check all that apply):</Typography>
                        <Box sx={{ border: `1px solid ${TailwindColors.border}`, p: 1, borderRadius: 1, mt: 1 }}>
                            <Grid container>
                                {facilityOptions.map((facility) => (
                                    <Grid item xs={12} sm={6} md={3} key={facility}>
                                        <FormControlLabel
                                            control={<Checkbox checked={formData.facilities.includes(facility)} onChange={handleChange} name="facilities" value={facility} sx={{ color: sectionTitleColor, '&.Mui-checked': { color: sectionTitleColor } }}/>}
                                            label={facility}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                  </Grid>
                </SectionBox>
              </motion.div>

              {/* --- 3. Document Uploads & KYC --- */}
              <motion.div variants={sectionVariants}>
                <SectionBox title="3. Document Uploads & Bank Details / दस्तावेज़ अपलोड और बैंक विवरण" isDark={isDark}>
                  <Typography variant="h6" sx={{ color: sectionTitleColor, mb: 2 }}>Document Uploads / दस्तावेज़ अपलोड</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <DocumentUpload label="आवेदक का फोटो / Applicant Photo (Optional)" file={formData.applicantPhoto} setFile={(file) => setFileState('applicantPhoto', file)} required={false} isDark={isDark}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DocumentUpload label="आधार कार्ड कॉपी / Aadhaar Card Copy*" file={formData.aadhaarCopy} setFile={(file) => setFileState('aadhaarCopy', file)} required={true} isDark={isDark}/>
                      {errors.aadhaarCopy && <FormHelperText error>{errors.aadhaarCopy}</FormHelperText>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DocumentUpload label="पैन कार्ड कॉपी / PAN Card Copy*" file={formData.panCopy} setFile={(file) => setFileState('panCopy', file)} required={true} isDark={isDark}/>
                      {errors.panCopy && <FormHelperText error>{errors.panCopy}</FormHelperText>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DocumentUpload label="GST प्रमाण पत्र (Optional) / GST Certificate" file={formData.gstCertificate} setFile={(file) => setFileState('gstCertificate', file)} required={false} isDark={isDark}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DocumentUpload label="दुकान/कार्यालय स्वामित्व दस्तावेज़ / Shop Ownership Doc (Optional)" file={formData.shopOwnershipDoc} setFile={(file) => setFileState('shopOwnershipDoc', file)} required={false} isDark={isDark}/>
                    </Grid>
                  </Grid>

                  <Typography variant="h6" sx={{ color: sectionTitleColor, mt: 4, mb: 2 }}>Bank Details / बैंक विवरण</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="बैंक का नाम / Bank Name" name="bankName" value={formData.bankName} onChange={handleChange} sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="शाखा / Branch" name="bankBranch" value={formData.bankBranch} onChange={handleChange} sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField fullWidth label="आईएफएससी कोड / IFSC Code" name="ifsc" value={formData.ifsc} onChange={handleChange} sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField fullWidth label="खाता धारक का नाम / Account Holder Name" name="accountHolder" value={formData.accountHolder} onChange={handleChange} sx={inputStyles(isDark)}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="खाता संख्या / Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} sx={inputStyles(isDark)}/>
                    </Grid>
                  </Grid>
                </SectionBox>
              </motion.div>
              
              {/* --- 4. Declaration --- */}
              <motion.div variants={sectionVariants}>
                <SectionBox title="4. Declaration & Consent / घोषणा और सहमति" isDark={isDark}>
                  <Box sx={{ p: 2, mb: 3, border: `1px solid ${TailwindColors.border}`, borderRadius: 1, bgcolor: isDark ? TailwindColors.bgDark : TailwindColors.bgLight }}>
                    <Typography variant="body2" sx={{ whiteSpace: "pre-line", lineHeight: 1.8 }}>
                      मैं घोषणा करता हूँ कि इस फॉर्म में दी गई सभी जानकारी सत्य, सटीक और पूर्ण हैं।
                      <br/>**I declare that all information provided in this form is true, accurate, and complete.**
                    </Typography>
                  </Box>
                  
                  <FormControlLabel
                    control={<Checkbox checked={formData.declaration} onChange={handleChange} name="declaration" sx={{ color: sectionTitleColor, '&.Mui-checked': { color: sectionTitleColor } }}/>}
                    label={<Typography sx={{ fontWeight: 'bold' }}>
                        "मैंने उपरोक्त घोषणा और सहमति शर्तों को पढ़ लिया है, समझ लिया है और कड़ाई से पालन करने के लिए सहमत हूँ।" / "I have read, understood, and strictly agree to the above declaration and consent terms."
                      </Typography>}
                  />
                  {errors.declaration && <FormHelperText error sx={{ ml: 0 }}>{errors.declaration}</FormHelperText>}
                </SectionBox>
              </motion.div>

              {/* --- Submission Button --- */}
              <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" disabled={submitting} 
                    variant="contained"
                    sx={{ 
                        px: 6, py: 1.5, fontSize: '1.2rem', 
                        bgcolor: submitting ? `${TailwindColors.primary}80` : TailwindColors.primary, 
                        color: 'white',
                        transition: 'background-color 0.3s',
                        boxShadow: `0 4px 10px ${TailwindColors.primary}80`,
                        '&:hover': { bgcolor: submitting ? `${TailwindColors.primary}80` : TailwindColors.secondary, boxShadow: `0 6px 15px ${TailwindColors.secondary}A0`, },
                    }}
                >
                  {submitting ? "पंजीकरण हो रहा है... / Submitting..." : "Submit Application / आवेदन जमा करें"}
                </Button>
              </Box>

            </form>
          </Paper>
        </motion.div>
      </Container>
      
      <Footer/>
      
      {/* --- Success Modal --- */}
      <SuccessModal 
        open={showSuccessModal} 
        handleClose={handleCloseSuccessModal} 
        appNumber={applicationNumber}
        isDark={isDark}
      />
    </div>
  );
}
