const express = require("express");
const router = express.Router();
const { registerClass } = require("../controllers/classcontroller");
const Class = require("../models/class");
const bcrypt = require("bcryptjs");


router.get("/", async (req, res) => {
  try {
    const classfind = await Class.find();
    res.json(classfind);
  } catch (error) {
    res.status(500).json({ message: "Error fetching class" });
  }
});

router.post("/", registerClass);


module.exports = router;
