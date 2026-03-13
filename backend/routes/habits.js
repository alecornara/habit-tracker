import express from "express";
import Habit from "../models/Habit.js";

const router = express.Router();

// crear hábito
router.post("/", async (req, res) => {

  const { title, userId } = req.body;

  const habit = new Habit({
    title,
    userId
  });

  await habit.save();

  res.json(habit);

});

export default router;

// marcar hábito como completado
router.post("/done/:id", async (req, res) => {

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