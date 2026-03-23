import { useState, useEffect } from "react";

export default function Habits() {
  const [title, setTitle] = useState("");
  const [habits, setHabits] = useState([]);

  const token = localStorage.getItem("token");

  const getHabits = async () => {
    const res = await fetch("http://localhost:5000/api/habits", {
      headers: {
        Authorization: token
      }
    });

    const data = await res.json();
    setHabits(data);
  };

  const createHabit = async () => {
    await fetch("http://localhost:5000/api/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ title })
    });

    setTitle("");
    getHabits();
  };

  const completeHabit = async (id) => {
    await fetch(`http://localhost:5000/api/habits/done/${id}`, {
      method: "POST",
      headers: {
        Authorization: token
      }
    });

    getHabits();
  };

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div>
      <h1>Mis hábitos</h1>

      <input
        value={title}
        placeholder="Nuevo hábito"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createHabit}>Crear</button>

      <ul>
        {habits.map((habit) => (
          <li key={habit._id}>
            {habit.title} - 🔥 {habit.streak}

            <button onClick={() => completeHabit(habit._id)}>
              Completar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}