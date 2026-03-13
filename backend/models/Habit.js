import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  streak: {
    type: Number,
    default: 0
  },
  lastCompleted: {
    type: Date
  }
});

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;