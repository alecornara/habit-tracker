import { useState } from "react";

export default function Home() {

  const [habitId, setHabitId] = useState("");
  const [streak, setStreak] = useState(0);

  const markDone = async () => {

    const res = await fetch(`http://localhost:5000/api/habits/done/${habitId}`, {
      method: "POST"
    });

    const data = await res.json();

    setStreak(data.streak);
  };

  const progress = (streak / 66) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">

      <h1 className="text-4xl font-bold mb-6">
        Habit Tracker
      </h1>

      <input
        type="text"
        placeholder="Habit ID"
        value={habitId}
        onChange={(e) => setHabitId(e.target.value)}
        className="border p-2 mb-4"
      />

      <button
        onClick={markDone}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Done
      </button>

      <div className="w-80 bg-gray-200 rounded-full h-6 mt-6">

        <div
          className="h-6 rounded-full"
          style={{
            width: `${progress}%`,
            backgroundColor: progress < 50 ? "red" : "green"
          }}
        ></div>

      </div>

      <p className="mt-4 text-lg">
        Streak: {streak} / 66 days
      </p>

    </div>
  );
}