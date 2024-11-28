const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routes
const userRoutes = require("./Routes/userRoutes");

const workoutRoutes = require("./Routes/workoutPlanRoutes");
const exerciseRoutes = require("./Routes/exerciseRoutes");


// Initialize
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect with MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Connection Error"));

// Routes
app.use("/api/users", userRoutes);

app.use("/api/workouts", workoutRoutes);
app.use("/api/exercises", exerciseRoutes);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
