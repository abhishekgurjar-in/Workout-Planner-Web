import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WorkoutPlans from "./pages/WorkoutPlans";
import Exercises from "./pages/Exercises";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/PrivtateRoute"; // Import PrivateRoute

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route
          path="/workout-plans"
          element={<PrivateRoute element={<WorkoutPlans />} />}
        />
        <Route
          path="/exercises"
          element={<PrivateRoute element={<Exercises />} />}
        />

        {/* Public Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
