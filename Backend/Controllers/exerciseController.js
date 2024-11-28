const Exercise = require('../models/Exercise');

// Add an exercise
const addExercise = async (req, res) => {
  try {
    const { name, sets, reps } = req.body;
    if (!name || !sets || !reps) {
      return res.status(400).json({ message: "All fields (name, sets, reps) are required" });
    }
    const newExercise = new Exercise({
      user: req.user.id,
      name,
      sets,
      reps
    });
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(500).json({ message: "Error adding exercise", error: error.message });
  }
};

// Get exercises for the authenticated user
const getExercise = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const exercises = await Exercise.find({ user: req.user.id })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercises", error: error.message });
  }
};

// Delete an exercise by ID
const deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting exercise", error: error.message });
  }
};

module.exports = {
  addExercise,
  getExercise,
  deleteExercise
};
