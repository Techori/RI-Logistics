const mongoose = require("mongoose");

const FranchiseRegistrationSchema = new mongoose.Schema(
  {
    // ID Of application
    applicationNumber:{type:String},
    // 1. Personal & Contact Details
   
    fullName: { type: String, required: true },
    businessName: { type: String, default: "" },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pinCode: { type: String, required: true },

   
    // 2. Franchise & Location Details
  
    franchiseType: { type: String, required: true },
    shopSize: { type: String, required: true },
    locationType: { type: String, required: true },

    facilities: {
      type: [String],
      default: [], // Furniture, Computer/Internet, Storage Area, Signage
    },

    investmentCapacity: { type: String, required: true },
    staffCount: { type: String, required: true },
    priorExperience: { type: String, default: "" },

    // 3. Document Uploads
  
    // These will store uploaded file metadata or URLs (example: Cloudinary)
    applicantPhoto: { type: Object, default: {} },
    aadhaarCopy: { type: Object, default: {},required:true },
    panCopy: { type: Object, default: {},required:true },
    gstCertificate: { type: Object, default: {} },
    shopOwnershipDoc: { type: Object, default: {} },
    
    // 4. Bank Details

    bankName: { type: String, required: true },
    bankBranch: { type: String, required: true },
    ifsc: { type: String, required: true },
    accountHolder: { type: String, required: true },
    accountNumber: { type: String, required: true },

    // 5. Declaration

    declaration: { type: Boolean, required: true },

      //Dashboard Application tab fields
     partnerType: { type: String, default: "Franchise Partner" },
    feeStatus: { type: String, default: "Pending" },
    feeAmount: { type: Number, default: 10000 },
    
    // Status
    status: {
      type: String,
      enum: ["New","In Kyc", "Field Pending","Under Review","Approved", "rejected"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FranchiseRegistration", FranchiseRegistrationSchema);