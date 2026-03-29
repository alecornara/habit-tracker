import { useState, useEffect } from "react";

export default function Habits() {
  const [title, setTitle] = useState("");
  const [habits, setHabits] = useState([]);
  const [token, setToken] = useState("");

  // ✅ Obtener token solo en cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  const API_URL = "https://habit-tracker-plum-one.vercel.app/api";

  const getHabits = async () => {
    if (!token) return;

    const res = await fetch(`${API_URL}/habits`, {
      headers: {
        Authorization: token
      }
    });

    const data = await res.json();
    setHabits(data);
  };

  const createHabit = async () => {
    if (!token) return;

    await fetch(`${API_URL}/habits`, {
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
    if (!token) return;

    await fetch(`${API_URL}/habits/done/${id}`, {
      method: "POST",
      headers: {
        Authorization: token
      }
    });

    getHabits();
  };

  // ✅ Esperar a tener token
  useEffect(() => {
    if (token) {
      getHabits();
    }
  }, [token]);

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