const router = require("express").Router();
const UserApp = require("../models/userAppModel");
const ClinicHistory = require("../models/clinicHistory");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../auth");
const nodemailer = require("nodemailer");

//REGISTER

router.post("/register", async (req, res) => {
  try {
    const {
      email,
      password,
      displayName,
      userName,
      lastName,
      sex,
      bornDate,
      ocupation,
      country,
      city,
      currentCity,
      address,
      phone,
      pastSurgery,
      contactName,
      contactLastName,
      contactPhone,
    } = req.body;

    //Validation

    if (!email || !password)
      return res.status(400).json({ msg: "Faltan campos por llenar" });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "La contraseña debe tener más de 5 carácteres." });

    const existingUser = await UserApp.findOne({ email: email });

    if (existingUser)
      return res
        .status(400)
        .json({ msg: "Ya existe una cuenta con este correo electrónico" });

    //encrypting password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    let numero = email.indexOf("@");
    let emailCortado = email.substr(0, numero);

    const newUser = new UserApp({
      email,
      password: passwordHash,
      displayName,
      lastName: "007",
      temperature: "Caliente",
      docuId: emailCortado,
      sugarLevel: "normal",
      pressure: "Ambiente",
      weight: "GYM",
    });
    await newUser.save();

    const newClinicHistory = new ClinicHistory({
      displayName,
      lastName,
      sex,
      bornDate,
      ocupation,
      country,
      city,
      currentCity,
      address,
      phone,
      pastSurgery,
      contactName,
      contactLastName,
      contactPhone,
      docuId: email,
    });
    await newClinicHistory.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "medicinaparatodos.custom@gmail.com",
        pass: "proyectofinal123",
      },
    });

    jwt.sign(
      {
        user: {
          id: newUser.id,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 360000,
      },
      async (err, token) => {
        res.json({ token });
        const url = `http://localhost:3001/confirmation/${token}`;
        const output = `
          <h2>Haz clic en el siguiente link para activar tu cuenta</h2>
          <p>http://localhost:3001/confirmation/${token}</p>
          <p><b>NOTA: </b> El link expira en 30 minutos.</p>
          <p>Usuario: ${userName}</p>
          <p>Contraseña: ${password}</p>
          
          `;
        try {
          await transporter.sendMail({
            to: email,
            subject: "Confirma tu cuenta",
            html: output,
          });
          console.log(email);
        } catch (e) {
          console.log(e);
        }
      }
    );

    //Send confirmation email

    // send mail with defined transport object
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("ha ocurrido un error");
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await UserApp.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const patients = await UserApp.find();
  res.json({
    users: patients,
  });
});
module.exports = router;
