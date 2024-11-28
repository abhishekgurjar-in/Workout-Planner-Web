import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Assuming AuthContext provides user data

const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext); // Access user from context

  // If the user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, return the element (protected route)
  return element;
};

export default PrivateRoute;
