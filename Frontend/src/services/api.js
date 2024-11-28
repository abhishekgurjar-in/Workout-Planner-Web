import axios from "axios";

const API_URL = "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Request Interceptor to attach the token if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // If there's an error with the request, return a rejected promise
    return Promise.reject(error);
  }
);

// Response Interceptor to handle 401 Unauthorized errors
axiosInstance.interceptors.response.use(
  (response) => response, // If the response is successful, just return it
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Handle token expiration or invalid token here
      console.error("Unauthorized! Token might be expired or invalid.");

      // Optional: Add logic to refresh the token, logout user, or redirect to login
      // For example:
      // window.location.href = "/login";  // Redirect to login page

      // You can also try refreshing the token and retrying the request if necessary
    }
    return Promise.reject(error); // Reject the promise with the error
  }
);

// Workout Plan API Calls
export const createWorkoutPlan = (data) =>
  axiosInstance.post("/workouts", data);
export const getWorkoutPlans = () => axiosInstance.get("/workouts");
export const updateWorkoutPlan = (id, data) =>
  axiosInstance.put(`/workouts/${id}`, data);
export const deleteWorkoutPlan = (id) =>
  axiosInstance.delete(`/workouts/${id}`);

// Exercise API Calls
export const createExercise = (data) => axiosInstance.post("/exercises", data);
export const getExercises = () => axiosInstance.get(`/exercises`);
export const deleteExercise = (id) => axiosInstance.delete(`/exercises/${id}`);

export default axiosInstance;
