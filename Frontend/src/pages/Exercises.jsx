import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createExercise, deleteExercise, getExercises } from "../services/api.js";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    name: "",
    sets: "",
    reps: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all exercises
  const fetchExercises = async () => {
    try {
      setLoading(true);
      const { data } = await getExercises();
      setExercises(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Failed to fetch exercises. Please try again.");
    }
  };

  // Handle creating a new exercise
  const handleCreate = async () => {
    if (!newExercise.name || !newExercise.sets || !newExercise.reps) {
      setError("Please fill out all fields");
      return;
    }

    try {
      await createExercise(newExercise);
      fetchExercises();
      setNewExercise({ name: "", sets: "", reps: "" });
      setError("");
    } catch (err) {
      setError("Failed to add exercise. Please try again.");
    }
  };

  // Handle deleting an exercise
  const handleDelete = async (exerciseId) => {
    try {
      await deleteExercise(exerciseId);
      fetchExercises();
    } catch (err) {
      setError("Failed to delete exercise. Please try again.");
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Exercises</h1>

      {/* Error message display */}
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg mb-6 animate-fadeIn">
          {error}
        </div>
      )}

      {/* Form to create a new exercise */}
      <div className="mb-6 space-y-6">
        <input
          type="text"
          placeholder="Exercise Name"
          value={newExercise.name}
          onChange={(e) =>
            setNewExercise({ ...newExercise, name: e.target.value })
          }
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        />
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Sets"
            value={newExercise.sets}
            onChange={(e) =>
              setNewExercise({ ...newExercise, sets: e.target.value })
            }
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          <input
            type="number"
            placeholder="Reps"
            value={newExercise.reps}
            onChange={(e) =>
              setNewExercise({ ...newExercise, reps: e.target.value })
            }
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>
        <button
          onClick={handleCreate}
          disabled={loading || !newExercise.name || !newExercise.sets || !newExercise.reps}
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 disabled:bg-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          {loading ? "Adding..." : "Add Exercise"}
        </button>
      </div>

      {/* Exercises List */}
      {loading ? (
        <div className="text-center text-gray-500">Loading exercises...</div>
      ) : (
        <ul className="space-y-6">
          {exercises.map((exercise) => (
            <li
              key={exercise._id}
              className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exercise.name}</h3>
                <p className="text-gray-600">
                  {exercise.sets} Sets x {exercise.reps} Reps
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDelete(exercise._id)}
                  className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Exercises;
