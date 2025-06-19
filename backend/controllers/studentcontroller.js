const Student = require("../models/student");
const bcrypt = require("bcrypt");

exports.registerStudent = async (req, res) => {
  try {
    const { name, email, address, regnumber, password } = req.body;
    if (!name || !email || !address || !regnumber || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      name,
      email,
      address,
      regnumber,
      password: hashedPassword,
    });

    await newStudent.save();

    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
