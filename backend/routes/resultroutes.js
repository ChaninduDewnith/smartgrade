const express = require("express");
const router = express.Router();
const { addResult, getResultsByStudent } = require("../controllers/resultController");

router.post("/", addResult); // POST /api/results
router.get("/:studentId", getResultsByStudent); // GET /api/results/:studentId

module.exports = router;
