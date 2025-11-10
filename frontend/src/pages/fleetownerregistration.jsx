import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useThemeMode } from "../../theme/ThemeProvider";
import Navbar from "../../components/solutions/Navbar";
import MagneticButton from "../../components/common/MagneticButton";
import { Box, Container, Typography } from "@mui/material";

...existing code...
export default function FleetOwnerForm() {
  const { mode } = (useThemeMode && useThemeMode()) || { mode: "light" };
  const navigate = useNavigate();

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

  const truckTypes = [
    "Pickup",
    "Mini Truck",
    "Tipper",
    "Container",
    "Trailer",
    "10 Wheeler",
    "Others",
  ];

  useEffect(() => {
    document.title = "Fleet Owner Registration";
  }, []);

  function addTruck() {
    setTrucks((t) => [
      ...t,
      { id: String(Date.now()) + Math.random(), type: "", regNumber: "", capacity: "", photos: [] },
    ]);
  }

  function removeTruck(id) {
    setTrucks((t) => t.filter((x) => x.id !== id));
  }

  function setTruckField(id, field, value) {
    setTrucks((t) => t.map((tr) => (tr.id === id ? { ...tr, [field]: value } : tr)));
  }

  function handleTruckPhotos(id, files) {
    if (!files) return;
    const arr = Array.from(files);
    setTruckField(id, "photos", arr);
  }

  function validate() {
    if (!fullName.trim()) return "पूरा नाम आवश्यक है / Full name is required.";
    if (!mobile.trim()) return "मोबाइल नंबर आवश्यक है / Mobile number is required.";
    if (!aadhaar.trim()) return "आधार नंबर आवश्यक है / Aadhaar number is required.";
    if (!bankName.trim() || !ifsc.trim() || !accountNumber.trim() || !accountHolder.trim())
      return "बैंक विवरण पूरा करें / Complete bank details.";
    if (!rcFile) return "RC बुक अपलोड करें / Upload RC book copy.";
    if (!aadhaarFile) return "आधार कार्ड कॉपी अपलोड करें / Upload Aadhaar card copy.";
    if (!insuranceFile) return "बीमा प्रमाण पत्र अपलोड करें / Upload Insurance certificate.";
    if (trucks.length === 0) return "कम से कम एक ट्रक जोड़ें / Add at least one truck.";
    for (const tr of trucks) {
      if (!tr.regNumber || !String(tr.regNumber).trim()) return "प्रत्येक ट्रक के लिए रजिस्ट्रेशन नंबर आवश्यक है / Registration number required for each truck.";
    }
    if (!agree) return "कृपया घोषणा और सहमति पढ़ें और सहमत हों / Please agree to declaration & consent.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors(null);
    const err = validate();
    if (err) {
      setErrors(err);
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("fullName", fullName);
      fd.append("mobile", mobile);
      fd.append("email", email);
      fd.append("address", address);
      fd.append("aadhaar", aadhaar);
      if (pan) fd.append("pan", pan);
      if (gst) fd.append("gst", gst);
      fd.append("bankName", bankName);
      fd.append("ifsc", ifsc);
      fd.append("accountNumber", accountNumber);
      fd.append("accountHolder", accountHolder);

      if (aadhaarFile) fd.append("aadhaarFile", aadhaarFile);
      if (panFile) fd.append("panFile", panFile);
      if (rcFile) fd.append("rcFile", rcFile);
      if (insuranceFile) fd.append("insuranceFile", insuranceFile);
      if (fitnessFile) fd.append("fitnessFile", fitnessFile);

      fd.append("declarationAgreed", String(agree));
      fd.append("trucks", JSON.stringify(trucks.map((t) => ({ type: t.type, regNumber: t.regNumber, capacity: t.capacity }))));

      trucks.forEach((t, idx) => {
        (t.photos || []).forEach((f) => {
          fd.append(`truckPhotos[${idx}][]`, f, f.name);
        });
      });

      const res = await fetch("/api/fleetowner/register", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Server error");
      alert("पंजीकरण सफल / Registration successful");
      navigate("/registration-success");
    } catch (e) {
      setErrors(e?.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Box sx={{ bgcolor: mode === "dark" ? "background.paper" : "background.default", p: 3, borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom>Fleet Owner Registration / फ्लीट ओनर पंजीकरण</Typography>
            <form onSubmit={handleSubmit}>
              <section>
                <Typography variant="h6">Personal & Contact Information / व्यक्तिगत और संपर्क जानकारी</Typography>
                <div>
                  <label>पूरा नाम / Full Name*</label><br />
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
                <div>
                  <label>मोबाइल नंबर / Mobile Number*</label><br />
                  <input value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                </div>
                <div>
                  <label>ईमेल पता (वैकल्पिक) / Email (optional)</label><br />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label>कार्यालय/निवास पता / Address</label><br />
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
              </section>

              <section>
                <Typography variant="h6">KYC Details / केवाईसी विवरण</Typography>
                <div>
                  <label>आधार नंबर / Aadhaar Number*</label><br />
                  <input value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} required />
                </div>
                <div>
                  <label>पैन नंबर (वैकल्पिक) / PAN (optional)</label><br />
                  <input value={pan} onChange={(e) => setPan(e.target.value)} />
                </div>
                <div>
                  <label>जीएसटी नंबर (वैकल्पिक) / GST (optional)</label><br />
                  <input value={gst} onChange={(e) => setGst(e.target.value)} />
                </div>
              </section>

              <section>
                <Typography variant="h6">Bank Details / बैंक विवरण</Typography>
                <div>
                  <label>बैंक का नाम / Bank Name*</label><br />
                  <input value={bankName} onChange={(e) => setBankName(e.target.value)} required />
                </div>
                <div>
                  <label>आईएफएससी कोड / IFSC Code*</label><br />
                  <input value={ifsc} onChange={(e) => setIfsc(e.target.value)} required />
                </div>
                <div>
                  <label>बैंक खाता संख्या / Account Number*</label><br />
                  <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
                </div>
                <div>
                  <label>खाते का धारक का नाम / Account Holder Name*</label><br />
                  <input value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} required />
                </div>
              </section>

              <section>
                <Typography variant="h6">Vehicle / Fleet Details / वाहन / फ्लीट विवरण</Typography>
                {trucks.map((tr, idx) => (
                  <div key={tr.id} style={{ border: "1px solid #ccc", padding: 8, marginBottom: 8 }}>
                    <strong>Truck #{idx + 1}</strong>
                    <div>
                      <label>ट्रक/फ्लीट का प्रकार / Truck Type</label><br />
                      <select value={tr.type} onChange={(e) => setTruckField(tr.id, "type", e.target.value)}>
                        <option value="">Select</option>
                        {truckTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label>ट्रक रजिस्ट्रेशन नंबर / Truck Registration Number*</label><br />
                      <input value={tr.regNumber} onChange={(e) => setTruckField(tr.id, "regNumber", e.target.value)} required />
                    </div>
                    <div>
                      <label>माल ढोने की क्षमता (टन) / Truck Capacity (tons)</label><br />
                      <input value={tr.capacity} onChange={(e) => setTruckField(tr.id, "capacity", e.target.value)} />
                    </div>
                    <div>
                      <label>ट्रक की फोटो (कई हो सकते हैं) / Truck Photos (multiple allowed)</label><br />
                      <input type="file" accept="image/*" multiple onChange={(e) => handleTruckPhotos(tr.id, e.target.files)} />
                      <div style={{ fontSize: 12 }}>{(tr.photos || []).length} files selected</div>
                    </div>
                    <div>
                      <button type="button" onClick={() => removeTruck(tr.id)}>Remove Truck</button>
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addTruck}>Add Another Truck</button>
              </section>

              <section>
                <Typography variant="h6">Document Uploads / दस्तावेज़ अपलोड</Typography>
                <div>
                  <label>आधार कार्ड कॉपी / Aadhaar Card*</label><br />
                  <input type="file" accept=".pdf,image/*" onChange={(e) => setAadhaarFile(e.target.files?.[0] || null)} required />
                </div>
                <div>
                  <label>पैन कार्ड (वैकल्पिक) / PAN Card (optional)</label><br />
                  <input type="file" accept=".pdf,image/*" onChange={(e) => setPanFile(e.target.files?.[0] || null)} />
                </div>
                <div>
                  <label>आरसी बुक / RC Book*</label><br />
                  <input type="file" accept=".pdf,image/*" onChange={(e) => setRcFile(e.target.files?.[0] || null)} required />
                </div>
                <div>
                  <label>बीमा प्रमाण पत्र / Insurance Certificate*</label><br />
                  <input type="file" accept=".pdf,image/*" onChange={(e) => setInsuranceFile(e.target.files?.[0] || null)} required />
                </div>
                <div>
                  <label>फिटनेस सर्टिफिकेट (वैकल्पिक) / Fitness Certificate (optional)</label><br />
                  <input type="file" accept=".pdf,image/*" onChange={(e) => setFitnessFile(e.target.files?.[0] || null)} />
                </div>
              </section>

              <section>
                <Typography variant="h6">Declaration & Consent / घोषणा और सहमति</Typography>
                <div style={{ fontSize: 14, whiteSpace: "pre-line", marginBottom: 8 }}>
                  मैं घोषणा करता हूँ कि इस फॉर्म में दी गई सभी जानकारी और दस्तावेज सत्य, सटीक और पूर्ण हैं।
                  I declare that all information and documents provided in this form are true, accurate, and complete.

                  मैं प्लेटफॉर्म और उसके प्रतिनिधियों को मेरी जानकारी और दस्तावेजों की जांच एवं सत्यापन करने का अधिकार देता हूँ, जिसमें आवश्यक होने पर भौतिक सत्यापन भी शामिल है।
                  I authorize the platform and its representatives to verify my information and documents, including physical verification if necessary.

                  मैं फ्लीट मालिक और वाहन संचालन की सभी कानूनी और नियामक जिम्मेदारियां स्वीकार करता हूँ।
                  I accept all legal and regulatory responsibilities related to fleet ownership and vehicle operations.

                  मैं प्लेटफॉर्म की नीतियों, सुरक्षा उपायों और नियमों का पालन करने के लिए सहमत हूँ।
                  I agree to comply with the platform’s policies, safety measures, and regulations.

                  मैं समझता हूँ कि कोई भी गलत जानकारी या दस्तावेज़ प्रदान करने पर मेरा पंजीकरण रद्द किया जा सकता है और कानूनी कार्रवाई की जा सकती है।
                  I understand that providing any false information or documents may lead to cancellation of my registration and legal action.

                  मैं यह भी स्वीकार करता हूँ कि प्लेटफॉर्म किसी भी प्रकार की हानि, दुर्घटना या विवाद के लिए ज़िम्मेदार नहीं होगा जो मेरे वाहन परिवहन या संचालन से उत्पन्न हो।
                  I also acknowledge that the platform shall not be liable for any loss, accident, or dispute arising from the operation or transportation by my vehicles.
                </div>
                <div>
                  <label>
                    <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />{" "}
                    "मैंने उपरोक्त घोषणा और सहमति शर्तों को पढ़ लिया है, समझ लिया है और कड़ाई से पालन करने के लिए सहमत हूँ।" / "I have read, understood, and strictly agree to the above declaration and consent terms."
                  </label>
                </div>
              </section>

              {errors && <div style={{ color: "red", marginTop: 8 }}>{errors}</div>}

              <Box sx={{ mt: 2 }}>
                <MagneticButton type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Registration"}
                </MagneticButton>
              </Box>
            </form>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
}
...existing code...
