const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

// 👇 ESTA ES LA CLAVE PARA VERCEL
module.exports = (req, res) => {
  return app(req, res);
};