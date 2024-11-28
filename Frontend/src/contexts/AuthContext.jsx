import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserService, registerUserService } from "../services/auth";

// Create context correctly
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Ensure 'children' is lowercase
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Login function
  const login = async (email, password) => {
    try {
      const { token } = await loginUserService(email, password);
      localStorage.setItem("authToken", token);
      setUser({ email });
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      await registerUserService(name, email, password);
      navigate("/login");
    } catch (error) {
      console.error("Registration Failed", error);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/"); // Navigate to the home page after logout
  };

  // Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Ideally, you'd also verify the token here with an API call
      // Example: You could make an API request to verify the token validity
      setUser({ email: "authenticated@example.com" }); // Placeholder for authenticated email
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children} {/* Children passed correctly */}
    </AuthContext.Provider>
  );
};
