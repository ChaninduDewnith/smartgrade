const Result = require("../models/result");

// POST - Add new result
const addResult = async (req, res) => {
  try {
    const { studentId, studentName, subject, examType, marks } = req.body;

    const newResult = new Result({
      studentId,
      studentName,
      subject,
      examType,
      marks
    });

    await newResult.save();
    res.status(201).json({ message: "Result added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding result", error: err.message });
  }
};

// GET - View results by student ID
const getResultsByStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const results = await Result.find({ studentId });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: "Error fetching results", error: err.message });
  }
};

module.exports = {
  addResult,
  getResultsByStudent
};
