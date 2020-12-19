process.env.NOTE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("./models/userModel");
const { ObjectID } = require("mongodb");

// set up express

const app = express();
app.use(express.json());
app.use(cors());

//Start up the server
const Port = process.env.Port || 3001;
app.listen(Port, () => console.log("server listening of port" + Port));

mongoose.connect(
  process.env.MONGODB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("db connected");
  }
);

app.get("/confirmation/:token", async (req, res) => {
  try {
    const userJwt = req.params.token;
    const decodedUserId = jwt.verify(userJwt, process.env.JWT_SECRET).user;

    console.log(decodedUserId);
    await User.update(
      { _id: new ObjectID(decodedUserId.id) },
      { $set: { verified: true } }
    );
    console.log("entraste");
  } catch (e) {
    res.send("Error");
  }
  return res.redirect("http://localhost:3000/");
});
//Include routes
app.use("/users", require("./uroutes/userRouter"));
