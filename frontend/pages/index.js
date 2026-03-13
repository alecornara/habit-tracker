import Head from "next/head";
import { useSelector } from "react-redux";

export default function Home() {

  const habits = useSelector((state) => state.habits.habits);

  return (
    <>
      <Head>
        <title>Habit Tracker</title>
        <meta name="description" content="Habit Tracker App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

        <h1 className="text-4xl font-bold text-green-500 mb-8">
          Habit Tracker
        </h1>

        <div className="bg-white shadow-md rounded-lg p-6 w-80">

          {habits.map((habit) => (
            <div
              key={habit.id}
              className="flex justify-between items-center mb-4"
            >
              <span>{habit.name}</span>

              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                Done
              </button>
            </div>
          ))}

          <div className="mt-6">
            <p className="mb-2 font-semibold">Progress</p>

            <div className="w-full bg-red-200 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full w-1/3"></div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}