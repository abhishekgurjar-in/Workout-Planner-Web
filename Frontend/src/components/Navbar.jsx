import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-extrabold">
            <span className="text-yellow-300">Workout</span>Planner
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link to="/workout-plans" className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Workout Plan
          </Link>
          <Link to="/exercises" className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Exercise
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition duration-300 ease-in-out">
            About
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                Login
              </Link>
              <Link to="/register" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-xl focus:outline-none">
            <i className="fas fa-bars"></i> {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {user ? (
          <div className="space-y-4 p-4">
            <Link to="/dashboard" className="block text-gray-800">
              Dashboard
            </Link>
            <Link to="/workout-plans" className="block text-gray-800">
              Workout Plan
            </Link>
            <Link to="/exercises" className="block text-gray-800">
              Exercise
            </Link>
            <Link to="/contact" className="block text-gray-800">
              Contact
            </Link>
            <button
              onClick={logout}
              className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-4 p-4">
            <Link to="/login" className="block text-gray-800">
              Login
            </Link>
            <Link to="/register" className="block text-gray-800">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
