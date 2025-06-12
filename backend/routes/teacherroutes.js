const express = require("express");
const router = express.Router();
const { registerTeacher } = require("../controllers/teachercontroller");
const Teacher = require("../models/teacher");

// GET all teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teachers" });
  }
});

// POST to add a new teacher
router.post("/", registerTeacher);

module.exports = router;
