require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const fleetowner  = require('./routes/fleetowner')
const franchisePatner = require('./routes/franchisepartner')
// Connect Database
connectDB();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Logistics platform API is running!");
});

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/fleetowner",fleetowner)
app.use("/api/franchisepartner",franchisePatner)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
