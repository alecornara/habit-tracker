import express from "express";
import Habit from "../models/Habit.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// crear hábito (PROTEGIDO)
router.post("/", authMiddleware, async (req, res) => {

  const { title } = req.body;

  const habit = new Habit({
    title,
    userId: req.user.id // 👈 viene del token
  });

  await habit.save();

  res.json(habit);
});

// marcar hábito como completado (PROTEGIDO)
router.post("/done/:id", authMiddleware, async (req, res) => {

  const habit = await Habit.findById(req.params.id);

  const today = new Date();

  if (!habit.lastCompleted) {
    habit.streak = 1;
  } else {

    const diffTime = today - habit.lastCompleted;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      habit.streak += 1;
    } else if (diffDays > 1) {
      habit.streak = 1;
    }
  }

  habit.lastCompleted = today;

  await habit.save();

  res.json(habit);
});

export default router;

// obtener hábitos del usuario
router.get("/", authMiddleware, async (req, res) => {
  const habits = await Habit.find({ userId: req.user.id });
  res.json(habits);
});