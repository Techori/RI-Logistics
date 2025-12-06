const express = require("express");
const router = express.Router();

const {getAllApplications} = require('../api/application')

router.get("/application", getAllApplications);

module.exports = router;