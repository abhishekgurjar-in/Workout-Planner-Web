import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { FaUser, FaDumbbell, FaChartLine, FaCog } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useContext(AuthContext); // Fetch user from context

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Your Dashboard, {user?.name || "User"}!</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Welcome Section */}
          <div className="bg-blue-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-gray-100 flex items-center">
              <FaUser className="mr-3 text-2xl" />
              Welcome, {user?.name || "User"}!
            </h2>
            <p className="text-gray-300 mt-2">
              Here you can manage your workouts, track your progress, and much more.
            </p>
          </div>

          {/* Workout Plan Section */}
          <div className="bg-green-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-gray-100 flex items-center">
              <FaDumbbell className="mr-3 text-2xl" />
              Your Workout Plan
            </h2>
            <p className="text-gray-300 mt-2">
              View and customize your workout plan to meet your fitness goals.
            </p>
            <Link
              to="/workout-plans"
              className="text-blue-100 hover:text-blue-200 mt-4 inline-block transition duration-300"
            >
              Go to Workout Plan
            </Link>
          </div>

          {/* Exercise Section */}
          <div className="bg-yellow-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-gray-100 flex items-center">
              <FaDumbbell className="mr-3 text-2xl" />
              Exercises
            </h2>
            <p className="text-gray-300 mt-2">
              Access a wide variety of exercises and track your performance.
            </p>
            <Link
              to="/exercises"
              className="text-blue-100 hover:text-blue-200 mt-4 inline-block transition duration-300"
            >
              Go to Exercises
            </Link>
          </div>

          {/* Stats Section */}
          <div className="bg-purple-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-gray-100 flex items-center">
              <FaChartLine className="mr-3 text-2xl" />
              Your Stats
            </h2>
            <p className="text-gray-300 mt-2">
              Track your fitness progress and visualize your improvements over time.
            </p>
            <Link
              to="/stats"
              className="text-blue-100 hover:text-blue-200 mt-4 inline-block transition duration-300"
            >
              View Your Stats
            </Link>
          </div>

          {/* Settings Section */}
          <div className="bg-red-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-gray-100 flex items-center">
              <FaCog className="mr-3 text-2xl" />
              Settings
            </h2>
            <p className="text-gray-300 mt-2">
              Customize your profile, preferences, and more.
            </p>
            <Link
              to="/settings"
              className="text-blue-100 hover:text-blue-200 mt-4 inline-block transition duration-300"
            >
              Go to Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
