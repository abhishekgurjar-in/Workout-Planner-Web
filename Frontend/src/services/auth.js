import axiosInstance from "./api";

export const loginUserService = async (email, password) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      email,
      password,
    });
    return response.data;  // Assuming the server response has a `data` field
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;  // Rethrow the error so it can be caught by the calling function
  }
};

export const registerUserService = async (name, email, password) => {
  try {
    const response = await axiosInstance.post("/users/register", {
      name,
      email,
      password,
    });
    return response.data;  // Assuming the server response has a `data` field
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw error;  // Rethrow the error so it can be caught by the calling function
  }
};
