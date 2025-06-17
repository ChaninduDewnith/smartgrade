const express = require("express");
const router = express.Router();
const { registerStudent } = require("../controllers/studentcontroller");
const Student = require("../models/student");
const bcrypt = require("bcryptjs");  


router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
});


router.post("/", registerStudent);