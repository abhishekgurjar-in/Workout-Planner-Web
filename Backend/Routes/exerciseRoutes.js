const express = require("express");

const { protect } = require("../middlewares/authMiddleware.js");
const {
  addExercise,
  getExercise,
  deleteExercise,
} = require("../Controllers/exerciseController");

const router = express.Router(); // Corrected: called express.Router() as a function

// Route to add an exercise to a workout plan
router.route("/").post(protect, addExercise);

// Route to get exercises for a specific workout plan
router.route("/").get(protect, getExercise);

// Route to delete an exercise by ID
router.route("/:id").delete(protect, deleteExercise);

module.exports = router;
