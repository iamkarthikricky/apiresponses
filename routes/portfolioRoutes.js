const express = require("express");
const {
  getResume,
  postResume,
  getHTML,
  getJavascript,
  getNodejs,
  getreactjs,
  postHTML,
  postJavascript,
  postNodejs,
  postreactjs,
} = require("../controllers/portfolioControllers");

const router = express.Router();

// Define the routes

// GET Method routes
router.get("/resume", getResume);
router.get("/html", getHTML);
router.get("/javascript", getJavascript);
router.get("/nodejs", getNodejs);
router.get("/reactjs", getreactjs);

// POST Method routes
router.post("/postresume", postResume);

router.post("/postHTML", postHTML);

router.post("/postJavascript", postJavascript);

router.post("/postNodejs", postNodejs);

router.post("/postreactjs", postreactjs);

module.exports = router; // Export the router
