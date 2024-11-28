import { useEffect, useState } from "react";
import {
  createWorkoutPlan,
  deleteWorkoutPlan,
  getWorkoutPlans,
  updateWorkoutPlan,
} from "../services/api";

const WorkoutPlans = () => {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ title: "", description: "" });
  const [editingPlan, setEditingPlan] = useState(null);

  // Fetch all workout plans with error handling
  const fetchPlans = async () => {
    try {
      const { data } = await getWorkoutPlans();
      setPlans(data);
    } catch (error) {
      console.error("Error fetching workout plans:", error);
    }
  };

  // Handle creating a new workout plan
  const handleCreate = async () => {
    if (!newPlan.title || !newPlan.description) {
      alert("Please provide both title and description");
      return;
    }

    try {
      await createWorkoutPlan(newPlan);
      fetchPlans();
      setNewPlan({ title: "", description: "" });
    } catch (error) {
      console.error("Error creating workout plan:", error);
    }
  };

  // Handle deleting a workout plan
  const handleDelete = async (id) => {
    try {
      await deleteWorkoutPlan(id);
      fetchPlans();
    } catch (error) {
      console.error("Error deleting workout plan:", error);
    }
  };

  // Handle opening the edit form for an existing plan
  const handleEdit = (plan) => {
    setEditingPlan(plan);
  };

  // Handle updating an existing workout plan
  const handleUpdate = async () => {
    if (!editingPlan.title || !editingPlan.description) {
      alert("Please provide both title and description");
      return;
    }

    try {
      await updateWorkoutPlan(editingPlan._id, {
        title: editingPlan.title,
        description: editingPlan.description,
      });
      fetchPlans();
      setEditingPlan(null);
    } catch (error) {
      console.error("Error updating workout plan:", error);
    }
  };

  // Cancel editing and close the form
  const handleCancelEdit = () => {
    setEditingPlan(null);
  };

  // Fetch workout plans when the component mounts
  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Workout Plans</h1>

      {/* Form to create a new workout plan */}
      <div className="mb-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Create New Plan</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            value={newPlan.title}
            onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          />
          <textarea
            placeholder="Description"
            value={newPlan.description}
            onChange={(e) =>
              setNewPlan({ ...newPlan, description: e.target.value })
            }
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          />
          <button
            onClick={handleCreate}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Add Plan
          </button>
        </div>
      </div>

      {/* Edit Workout Plan Form */}
      {editingPlan && (
        <div className="mb-8 space-y-4 p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-700">Edit Workout Plan</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={editingPlan.title}
              onChange={(e) =>
                setEditingPlan({ ...editingPlan, title: e.target.value })
              }
              className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
            <textarea
              value={editingPlan.description}
              onChange={(e) =>
                setEditingPlan({ ...editingPlan, description: e.target.value })
              }
              className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
            <div className="flex gap-6">
              <button
                onClick={handleUpdate}
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display workout plans */}
      <ul className="space-y-6">
        {plans.map((plan) => (
          <li
            key={plan._id}
            className="bg-white p-6 rounded-lg shadow-xl flex justify-between items-center hover:bg-blue-50 transition duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{plan.title}</h3>
              <p className="text-gray-600">{plan.description}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleEdit(plan)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(plan._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutPlans;
