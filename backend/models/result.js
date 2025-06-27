const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  examType: {
    type: String,
    required: true
  },
  marks: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Result", resultSchema);
