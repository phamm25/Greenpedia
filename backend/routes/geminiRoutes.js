const express = require("express");
const router = express.Router();
const { askGemini } = require("../controllers/geminiController");

router.get("/ask", askGemini);

module.exports = router;
