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
  Dialog, // Added for the pop-up/modal
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from "@mui/material";

// Icons (Using inline SVG Fallback for professional look)
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

// --- Custom Styles / Tailwind & Theme Setup ---
const TailwindColors = {
  primary: "#FF4D4D",   // Reddish Primary Color (Highlights)
  secondary: "#FF8C00", // Orange (Accent)
  success: "#4CAF50",
  error: "#F44336",
  // Theme Colors
  textLight: "#1F2937",    // Black in Light Mode
  textDark: "#F9FAFB",     // White in Dark Mode
  bgLight: "#FFFFFF",      // White background
  bgDark: "#111827",       // Dark background
  cardLight: "#F3F4F6",    // Light card background
  cardDark: "#1F2937",     // Dark card background
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
      borderWidth: '2px', // Highlight focus
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

// --- Main Component ---
export default function FleetOwnerRegistration() {
  const { mode } = (useThemeMode && useThemeMode()) || { mode: "light" };
  const navigate = useNavigate();

  // State Declarations
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [pan, setPan] = useState("");
  const [gst, setGst] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [trucks, setTrucks] = useState([
    { id: String(Date.now()), type: "", regNumber: "", capacity: "", photos: [] },
  ]);
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [rcFile, setRcFile] = useState(null);
  const [insuranceFile, setInsuranceFile] = useState(null);
  const [fitnessFile, setFitnessFile] = useState(null);
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(null);

  // New states for success modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState("");

  const truckTypes = [
    "Pickup", "Mini Truck", "Tipper", "Container", "Trailer", "10 Wheeler", "Others",
  ];

  useEffect(() => {
    document.title = "Fleet Owner Registration";
  }, []);

  // Truck Management Functions (omitted for brevity)
  function addTruck() { setTrucks(t => [...t, { id: String(Date.now()) + Math.random(), type: "", regNumber: "", capacity: "", photos: [] }]); }
  function removeTruck(id) { setTrucks(t => t.filter(x => x.id !== id)); }
  function setTruckField(id, field, value) { setTrucks(t => t.map(tr => (tr.id === id ? { ...tr, [field]: value } : tr))); }
  function handleTruckPhotos(id, files) { if (!files) return; const arr = Array.from(files); setTruckField(id, "photos", arr); }

  // Validation Function (omitted for brevity)
  function validate() { 
      if (!fullName.trim()) return "पूरा नाम आवश्यक है / Full name is required.";
      if (!mobile.trim() || !/^\d{10}$/.test(mobile.trim())) return "वैध मोबाइल नंबर आवश्यक है / Valid 10-digit Mobile number is required.";
      if (!aadhaar.trim() || !/^\d{12}$/.test(aadhaar.trim())) return "वैध आधार नंबर आवश्यक है / Valid 12-digit Aadhaar number is required.";
      if (!bankName.trim() || !ifsc.trim() || !accountNumber.trim() || !accountHolder.trim()) return "बैंक विवरण पूरा करें / Complete bank details.";
      if (!rcFile) return "RC बुक अपलोड करें / Upload RC book copy.";
      if (!aadhaarFile) return "आधार कार्ड कॉपी अपलोड करें / Upload Aadhaar card copy.";
      if (!insuranceFile) return "बीमा प्रमाण पत्र अपलोड करें / Upload Insurance certificate.";
      if (trucks.length === 0) return "कम से कम एक ट्रक जोड़ें / Add at least one truck.";
      if (!agree) return "कृपया घोषणा और सहमति पढ़ें और सहमत हों / Please agree to declaration & consent.";
      return null;
  }

  // Submission Handler with Application Number Generation
  async function handleSubmit(e) {
      e.preventDefault();
      setErrors(null);
      const err = validate();
      if (err) { setErrors(err); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      setSubmitting(true);
      
      try {
          // --- API submission logic goes here ---
          // const fd = new FormData(); // ... append data
          // const res = await fetch("/api/fleetowner/register", { method: "POST", body: fd });
          
          // Mock API delay
          await new Promise(resolve => setTimeout(resolve, 1500)); 

          // Generate Application Number (Simple unique ID for mock scenario)
          const generatedAppNumber = 'FOT-' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 900 + 100);
          
          setApplicationNumber(generatedAppNumber);
          setShowSuccessModal(true); 
          // Note: Navigation happens in handleCloseSuccessModal

      } catch (e) {
          setErrors(e?.message || "Submission failed");
      } finally {
          setSubmitting(false);
      }
  }

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/registration-success"); // Navigate after the user closes the modal
  };

  // Style Variables for Theme
  const isDark = mode === "dark";
  const textColor = isDark ? TailwindColors.textDark : TailwindColors.textLight;
  const cardBg = isDark ? TailwindColors.cardDark : TailwindColors.cardLight;
  const sectionTitleColor = TailwindColors.primary;

  // Component structure
  return (
    <div 
      className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-gray-50"}`} 
      style={{ color: textColor }}
    >
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 8, py: { xs: 4, sm: 8 } }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden" 
          animate="visible" 
          exit="hidden"
        >
          <Paper 
            elevation={10} 
            sx={{ 
              bgcolor: cardBg, 
              p: { xs: 2, sm: 4 }, 
              borderRadius: 3, 
              border: `2px solid ${TailwindColors.primary}`,
              transition: 'background-color 0.5s',
            }}
          >
            {/* Form Title */}
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{ 
                fontWeight: 700, mb: 4, 
                color: sectionTitleColor,
                pb: 1,
                borderBottom: `3px solid ${TailwindColors.primary}`
              }}
            >
              🚚 Fleet Owner Registration / फ्लीट ओनर पंजीकरण
            </Typography>

            {errors && (
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 50 }}>
                <Box sx={{ p: 2, mb: 3, bgcolor: TailwindColors.error, color: "white", borderRadius: 1, fontWeight: 'bold' }}>
                  🛑 Error: {errors}
                </Box>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              
              <motion.div variants={sectionVariants}><SectionBox title="1. Personal & Contact Information / व्यक्तिगत और संपर्क जानकारी" isDark={isDark}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}><TextField fullWidth label="पूरा नाम / Full Name*" value={fullName} onChange={(e) => setFullName(e.target.value)} required sx={inputStyles(isDark)} /></Grid>
                    <Grid item xs={12} sm={6}><TextField fullWidth label="मोबाइल नंबर / Mobile Number*" value={mobile} onChange={(e) => setMobile(e.target.value)} required type="tel" inputProps={{ maxLength: 10 }} sx={inputStyles(isDark)} /></Grid>
                    <Grid item xs={12} sm={6}><TextField fullWidth label="ईमेल पता (वैकल्पिक) / Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} type="email" sx={inputStyles(isDark)} /></Grid>
                    <Grid item xs={12}><TextField fullWidth label="कार्यालय/निवास पता / Address" value={address} onChange={(e) => setAddress(e.target.value)} multiline rows={2} sx={inputStyles(isDark)} /></Grid>
                  </Grid>
                </SectionBox></motion.div>

              <motion.div variants={sectionVariants}><SectionBox title="2. KYC & Bank Details / केवाईसी और बैंक विवरण" isDark={isDark}>
                  <Typography variant="h6" sx={{ color: sectionTitleColor, mb: 2 }}>KYC Details / केवाईसी विवरण</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}><TextField fullWidth label="आधार नंबर / Aadhaar Number*" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} required inputProps={{ maxLength: 12 }} sx={inputStyles(isDark)} /></Grid>
                    <Grid item xs={12} sm={4}><TextField fullWidth label="पैन नंबर (वैकल्पिक) / PAN (optional)" value={pan} onChange={(e) => setPan(e.target.value)} inputProps={{ maxLength: 10 }} sx={inputStyles(isDark)} /></Grid>
                    <Grid item xs={12} sm={4}><TextField fullWidth label="जीएसटी नंबर (वैकल्पिक) / GST (optional)" value={gst} onChange={(e) => setGst(e.target.value)} sx={inputStyles(isDark)} /></Grid>
                  </Grid>

                  <Typography variant="h6" sx={{ color: sectionTitleColor, mt: 4, mb: 2 }}>Bank Details / बैंक विवरण</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}><TextField fullWidth label="बैंक का नाम / Bank Name*" value={bankName} onChange={(e) => setBankName(e.target.value)} required sx={inputStyles(isDark)} /></Grid>
                    <Grid item xs={12} sm={6}><TextField fullWidth label="आईएफएससी कोड / IFSC Code*" value={ifsc} onChange={(e) => setIfsc(e.target.value)} required sx={inputStyles(isDark)} /></Grid>
                    <Grid item xs={12} sm={6}><TextField fullWidth label="बैंक खाता संख्या / Account Number*" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required sx={inputStyles(isDark)} /></Grid>
                    <Grid item xs={12} sm={6}><TextField fullWidth label="खाते का धारक का नाम / Account Holder Name*" value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} required sx={inputStyles(isDark)} /></Grid>
                  </Grid>
                </SectionBox></motion.div>

              <motion.div variants={sectionVariants}><SectionBox title="3. Vehicle / Fleet Details / वाहन / फ्लीट विवरण" isDark={isDark}>
                  {trucks.map((tr, idx) => (<TruckCard key={tr.id} tr={tr} idx={idx} setTruckField={setTruckField} handleTruckPhotos={handleTruckPhotos} removeTruck={removeTruck} truckTypes={truckTypes} isDark={isDark}/>))}
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                      <Button onClick={addTruck} variant="outlined" sx={{ color: sectionTitleColor, borderColor: sectionTitleColor, transition: 'all 0.3s', '&:hover': { backgroundColor: sectionTitleColor + '15', borderColor: sectionTitleColor, } }}>
                          + Add Another Truck
                      </Button>
                  </Box>
                </SectionBox></motion.div>

              <motion.div variants={sectionVariants}><SectionBox title="4. Document Uploads / दस्तावेज़ अपलोड" isDark={isDark}>
                  <Grid container spacing={3}>
                    {[
                      { label: "आधार कार्ड कॉपी / Aadhaar Card*", state: aadhaarFile, setter: setAadhaarFile, required: true },
                      { label: "पैन कार्ड (वैकल्पिक) / PAN Card (optional)", state: panFile, setter: setPanFile, required: false },
                      { label: "आरसी बुक / RC Book*", state: rcFile, setter: setRcFile, required: true },
                      { label: "बीमा प्रमाण पत्र / Insurance Certificate*", state: insuranceFile, setter: setInsuranceFile, required: true },
                      { label: "फिटनेस सर्टिफिकेट (वैकल्पिक) / Fitness Certificate (optional)", state: fitnessFile, setter: setFitnessFile, required: false },
                    ].map((doc) => (<Grid item xs={12} sm={6} key={doc.label}><DocumentUpload label={doc.label} file={doc.state} setFile={doc.setter} required={doc.required} isDark={isDark}/></Grid>))}
                  </Grid>
                </SectionBox></motion.div>

              <motion.div variants={sectionVariants}><SectionBox title="5. Declaration & Consent / घोषणा और सहमति" isDark={isDark}>
                  <Box sx={{ p: 2, mb: 3, border: `1px solid ${TailwindColors.border}`, borderRadius: 1, bgcolor: isDark ? TailwindColors.bgDark : TailwindColors.bgLight }}>
                    <Typography variant="body2" sx={{ whiteSpace: "pre-line", lineHeight: 1.8 }}>
                      मैं घोषणा करता हूँ कि इस फॉर्म में दी गई सभी जानकारी और दस्तावेज सत्य, सटीक और पूर्ण हैं।
                      <br/>**I declare that all information and documents provided in this form are true, accurate, and complete.**
                      <br/><br/>मैं प्लेटफॉर्म और उसके प्रतिनिधियों को मेरी जानकारी और दस्तावेजों की जांच एवं सत्यापन करने का अधिकार देता हूँ, जिसमें आवश्यक होने पर भौतिक सत्यापन भी शामिल है।
                      <br/>**I authorize the platform... to verify my information and documents.**
                      <br/><br/>मैं फ्लीट मालिक और वाहन संचालन की सभी कानूनी और नियामक जिम्मेदारियां स्वीकार करता हूँ।
                      <br/>**I accept all legal and regulatory responsibilities...**
                      <br/><br/>मैं प्लेटफॉर्म की नीतियों, सुरक्षा उपायों और नियमों का पालन करने के लिए सहमत हूँ।
                      <br/>**I agree to comply with the platform’s policies...**
                      <br/><br/>मैं यह भी स्वीकार करता हूँ कि प्लेटफॉर्म किसी भी प्रकार की हानि, दुर्घटना या विवाद के लिए ज़िम्मेदार नहीं होगा जो मेरे वाहन परिवहन या संचालन से उत्पन्न हो।
                      <br/>**I also acknowledge that the platform shall not be liable for any loss, accident, or dispute...**
                    </Typography>
                  </Box>
                  
                  <FormControlLabel
                    control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} sx={{ color: sectionTitleColor, '&.Mui-checked': { color: sectionTitleColor } }}/>}
                    label={<Typography sx={{ fontWeight: 'bold' }}>
                        "मैंने उपरोक्त घोषणा और सहमति शर्तों को पढ़ लिया है, समझ लिया है और कड़ाई से पालन करने के लिए सहमत हूँ।" / "I have read, understood, and strictly agree to the above declaration and consent terms."
                      </Typography>}
                  />
                </SectionBox></motion.div>
              
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
                        '&:hover': { 
                            bgcolor: submitting ? `${TailwindColors.primary}80` : TailwindColors.secondary, 
                            boxShadow: `0 6px 15px ${TailwindColors.secondary}A0`,
                        },
                    }}
                >
                  {submitting ? "पंजीकरण हो रहा है... / Submitting..." : "Submit Registration / पंजीकरण जमा करें"}
                </Button>
              </Box>

            </form>
          </Paper>
        </motion.div>
      </Container>
      
      <Footer/>
      
      {/* --- Success Modal Implementation --- */}
      <SuccessModal 
        open={showSuccessModal} 
        handleClose={handleCloseSuccessModal} 
        appNumber={applicationNumber}
        isDark={isDark}
      />
    </div>
  );
}

// --- Helper Components with Theme Adaptation ---

const SectionBox = ({ children, title, isDark }) => (
    <motion.div 
        initial={{ opacity: 0, scaleY: 0.8 }} 
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

const TruckCard = ({ tr, idx, setTruckField, handleTruckPhotos, removeTruck, truckTypes, isDark }) => (
    <Paper 
        elevation={0} 
        sx={{ 
            p: 3, mb: 3, 
            border: `1px solid ${TailwindColors.border}50`, 
            borderLeft: `5px solid ${TailwindColors.secondary}`, 
            bgcolor: isDark ? TailwindColors.cardDark : 'white',
            transition: 'background-color 0.5s',
            borderRadius: 1,
        }}
    >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: TailwindColors.secondary }}>
                🚛 Truck #{idx + 1}
            </Typography>
            {idx > 0 && (
                <Button onClick={() => removeTruck(tr.id)} variant="outlined" color="error" size="small">
                    Remove
                </Button>
            )}
        </Box>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <FormControl fullWidth sx={inputStyles(isDark)}>
                    <InputLabel id={`truck-type-label-${tr.id}`}>ट्रक/फ्लीट का प्रकार / Truck Type</InputLabel>
                    <Select labelId={`truck-type-label-${tr.id}`} value={tr.type} label="ट्रक/फ्लीट का प्रकार / Truck Type" onChange={(e) => setTruckField(tr.id, "type", e.target.value)}>
                        <MenuItem value="">Select</MenuItem>
                        {truckTypes.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth label="ट्रक रजिस्ट्रेशन नंबर / Reg. Number*" value={tr.regNumber} onChange={(e) => setTruckField(tr.id, "regNumber", e.target.value)} required sx={inputStyles(isDark)} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField fullWidth label="माल ढोने की क्षमता (टन) / Capacity (tons)" value={tr.capacity} onChange={(e) => setTruckField(tr.id, "capacity", e.target.value)} type="number" sx={inputStyles(isDark)} />
            </Grid>
            <Grid item xs={12}>
                <Box mt={2}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>ट्रक की फोटो (कई हो सकते हैं) / Truck Photos (multiple allowed)</label>
                    <input type="file" accept="image/*" multiple onChange={(e) => handleTruckPhotos(tr.id, e.target.files)} style={{ border: `1px solid ${TailwindColors.border}80`, padding: '8px', borderRadius: '4px', display: 'block', width: '100%', color: isDark ? 'inherit' : 'initial', backgroundColor: isDark ? TailwindColors.bgDark : 'white' }}/>
                    <FormHelperText sx={{ color: isDark ? '#bbb' : '#555' }}>{(tr.photos || []).length} files selected</FormHelperText>
                </Box>
            </Grid>
        </Grid>
    </Paper>
);

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
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>{label}</label>
            <input type="file" accept=".pdf,image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} required={required} style={{ display: 'block', width: '100%', color: isDark ? 'inherit' : 'initial' }}/>
            {file && (<FormHelperText sx={{ color: TailwindColors.success, fontWeight: 'bold', mt: 1 }}>✅ File selected: {file.name}</FormHelperText>)}
            {required && !file && (<FormHelperText sx={{ color: TailwindColors.primary, mt: 1 }}>* This field is required</FormHelperText>)}
        </Box>
    );
};

// --- New Success Modal Component ---
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
