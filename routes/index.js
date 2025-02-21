const express = require("express");
const portfolioRoutes = require("./portfolioRoutes");


const router = express.Router();

router.use("/", portfolioRoutes);


module.exports = router;