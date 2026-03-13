import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import habitRoutes from "./routes/habits.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);

mongoose.connect("mongodb://localhost:27017/habittracker")
.then(() => console.log("MongoDB connected"));

app.get("/", (req, res) => {
  res.send("Habit Tracker API running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});