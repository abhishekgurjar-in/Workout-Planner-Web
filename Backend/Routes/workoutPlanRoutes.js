const express = require("express");

const { protect } = require("../middlewares/authMiddleware.js");
const {
  createWorkoutPlan,
  getWorkoutPlans,
  getWorkoutPlanById,
  updateWorkoutPlan,
  deleteWorkoutPlan,
} = require("../Controllers/workoutPlanController.js");

const router = express.Router();

// Routes for workout plans
router.route("/")
  .post(protect, createWorkoutPlan)  // Create a workout plan
  .get(protect, getWorkoutPlans);    // Get all workout plans

router.route("/:id")
  .get(protect, getWorkoutPlanById)  // Get a specific workout plan by ID
  .put(protect, updateWorkoutPlan)   // Update a workout plan by ID
  .delete(protect, deleteWorkoutPlan); // Delete a workout plan by ID

module.exports = router;
