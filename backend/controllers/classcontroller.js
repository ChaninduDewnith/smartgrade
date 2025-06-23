const Student = require("../models/class");
const bcrypt = require("bcrypt");

exports.registerClass = async (req, res) => {
  try {
    const { className, classTeacher, gradeLevel, roomNumber } = req.body;
    if (!className || !classTeacher || !gradeLevel || !roomNumber ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    

    const newClass = new Class({
      className,
      classTeacher,
      gradeLevel,
      roomNumber,
    });

    await newClass.save();

    res.status(201).json({ message: "Class registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
