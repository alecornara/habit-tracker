const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Backend funcionando 🚀");
});

module.exports = app;
module.exports.handler = serverless(app);