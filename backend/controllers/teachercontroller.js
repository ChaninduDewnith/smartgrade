const Teacher = require("../models/teacher");
const bcrypt = require("bcrypt");

exports.registerTeacher = async (req, res) => {
  try {
    const { name, email, subject, nic, password } = req.body;
    if (!name || !email || !subject || !nic || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newTeacher = new Teacher({
      name,
      email,
      subject,
      nic,
      password: hashedPassword,
    });

    await newTeacher.save();

    res.status(201).json({ message: "Teacher registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
