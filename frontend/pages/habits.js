import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHabits } from "../src/redux/habitsSlice";

export default function Habits() {
  const dispatch = useDispatch();
  const { habits, status } = useSelector((state) => state.habits);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  return (
    <div>
      <h1>Lista de hábitos</h1>

      {status === "loading" && <p>Cargando...</p>}

      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
}