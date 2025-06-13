const express = require("express");
const router = express.Router();
const { registerTeacher } = require("../controllers/teachercontroller");
const Teacher = require("../models/teacher");
const bcrypt = require("bcryptjs");  

// GET all teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teachers" });
  }
});

// POST register teacher
router.post("/", registerTeacher);

// POST login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
