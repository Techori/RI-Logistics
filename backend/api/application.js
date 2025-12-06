const FleetOwner = require("../models/Fleetowner");
const FranchisePartner = require("../models/FranchiseRegestriationSchema");

exports.getAllApplications = async (req, res) => {
  try {
    const fleet = await FleetOwner.find().lean();
    const franchise = await FranchisePartner.find().lean();

    const formattedFleet = fleet.map(item => ({
      id: item.applicationNumber,
      name: item.fullName,
      mobile: item.mobile,
      type: "Fleet Owner",
      step: item.step || "Step 1",
      status: item.status || "New",
      feeCollected: item.feeStatus === "Collected",
      amount: item.feeAmount ? "₹" + item.feeAmount : "-",
      createdDate: item.createdAt?.toISOString().split("T")[0],
      sla: getSLA(item.createdAt),
    }));

    const formattedFranchise = franchise.map(item => ({
      id: item.applicationNumber,
      name: item.fullName,
      mobile: item.mobile,
      type: "Franchise Partner",
      step: item.step || "Step 1",
      status: item.status || "New",
      feeCollected: item.feeStatus === "Collected",
      amount: item.feeAmount ? "₹" + item.feeAmount : "-",
      createdDate: item.createdAt?.toISOString().split("T")[0],
      sla: getSLA(item.createdAt),
    }));

    return res.json([...formattedFleet, ...formattedFranchise]);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

function getSLA(date) {
  const diff = (new Date() - new Date(date)) / (1000 * 60 * 60 * 24);
  if (diff <= 1) return "green";
  if (diff <= 2) return "orange";
  return "red";
}