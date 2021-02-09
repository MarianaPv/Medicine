const mongoose = require("mongoose");

const userappSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  lastName: { type: String, required: true },
  docuId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  temperature: { type: String, required: true },
  sugarLevel: { type: String, required: true },
  pressure: { type: String, required: true },
  weight: { type: String, required: true },
  verified: { type: Boolean, default: false },
  historicWeight: { type: Array },
  historicPressure: { type: Array },
  historicSugarLevel: { type: Array },
  historicTemperature: { type: Array },
});

module.exports = User = mongoose.model("userapps", userappSchema);
