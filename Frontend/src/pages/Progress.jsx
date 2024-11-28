import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProgress, logProgress } from "../services/api";

const Progress = () => {
  const { workoutPlanId } = useParams();
  const [progress, setProgress] = useState([]);
  const [newLog, setNewLog] = useState({ date: "", progress: "" });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  // Fetch progress logs from the server
  const fetchProgress = async () => {
    if (!workoutPlanId) {
      setError("Workout Plan ID is missing.");
      return;
    }
    setFetching(true);
    setError(null);
    try {
      const { data } = await getProgress(workoutPlanId);
      setProgress(data);
    } catch (err) {
      console.error("Error fetching progress:", err);
      setError(err.response?.data?.message || "Failed to fetch progress.");
    } finally {
      setFetching(false);
    }
  };

  // Log new progress
  const handleLogProgress = async () => {
    if (!newLog.date || !newLog.progress) {
      alert("Please provide both date and progress.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await logProgress({ ...newLog, workoutPlanId });
      fetchProgress();
      setNewLog({ date: "", progress: "" });
    } catch (err) {
      console.error("Error logging progress:", err);
      setError(err.response?.data?.message || "Failed to log progress.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch progress on component mount or when workoutPlanId changes
  useEffect(() => {
    if (workoutPlanId) fetchProgress();
  }, [workoutPlanId]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">Progress Tracker</h1>

      {/* Display Error */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Progress Form */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
          Date:
        </label>
        <input
          id="date"
          type="date"
          value={newLog.date}
          onChange={(e) => setNewLog({ ...newLog, date: e.target.value })}
          disabled={loading || fetching}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="progress">
          Progress Log:
        </label>
        <textarea
          id="progress"
          placeholder="Log your progress here..."
          value={newLog.progress}
          onChange={(e) => setNewLog({ ...newLog, progress: e.target.value })}
          disabled={loading || fetching}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6 flex justify-center">
        <button
          onClick={handleLogProgress}
          disabled={loading || fetching || !newLog.date || !newLog.progress}
          className={`px-6 py-2 rounded-md font-semibold text-white ${
            loading || fetching || !newLog.date || !newLog.progress
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Logging..." : "Add Progress"}
        </button>
      </div>

      {/* Progress List */}
      {fetching ? (
        <p className="text-center">Loading progress...</p>
      ) : (
        <ul className="space-y-4">
          {progress.length === 0 ? (
            <li className="text-center text-gray-600">No progress logs yet. Start logging your progress!</li>
          ) : (
            progress.map((log) => (
              <li key={log._id} className="border-b pb-4">
                <h3 className="text-lg font-semibold">{log.date}</h3>
                <p className="text-gray-700">{log.progress}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Progress;
