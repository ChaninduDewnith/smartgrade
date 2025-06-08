const express = require("express");
const router = express.Router();
const { registerTeacher } = require("../controllers/teachercontroller");

router.post("/", registerTeacher);

module.exports = router;
