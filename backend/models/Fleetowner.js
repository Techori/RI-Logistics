const mongoose = require("mongoose");

const TruckSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  regNumber: {
    type: String,
  },
  capacity: {
    type: String, // frontend sends string "32"
  },
  photos: {
    type: [mongoose.Schema.Types.Mixed], 
    default: [], // frontend sends [{}]
  },
});

const FleetownerSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    mobile: { type: String },
    email: { type: String },
    address: { type: String },

    // KYC
    aadhaar: { type: String },
    pan: { type: String },
    gst: { type: String },

    // Bank
    bankName: { type: String },
    ifsc: { type: String },
    accountNumber: { type: String },
    accountHolder: { type: String },

    // Files (frontend sends {})
    aadhaarFile: { type: mongoose.Schema.Types.Mixed },
    panFile: { type: mongoose.Schema.Types.Mixed },
    rcFile: { type: mongoose.Schema.Types.Mixed },
    insuranceFile: { type: mongoose.Schema.Types.Mixed },
    fitnessFile: { type: mongoose.Schema.Types.Mixed },

    // Trucks
    trucksCount: { type: Number },
    trucks: [TruckSchema],

    // Agreement
    agree: { type: Boolean },

    // Auto number (optional)
    applicationNumber: { type: String },

    // Status
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fleetowner", FleetownerSchema);