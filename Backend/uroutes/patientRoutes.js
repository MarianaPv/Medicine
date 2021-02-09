const router = require("express").Router();
const UserApp = require("../models/userAppModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../auth");
const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {
  const patients = await UserApp.find();

  console.log(patients);

  res.json({
    users: patients,
  });
});
module.exports = router;
