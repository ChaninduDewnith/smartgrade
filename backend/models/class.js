const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  classTeacher: { type: String, required: true, unique: true },
  gradeLevel: { type: String, required: true },
  roomNumber: { type: String, required: true },
  
}, { timestamps: true });

module.exports = mongoose.model("Class", classSchema);

       