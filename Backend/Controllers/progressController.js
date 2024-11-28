const Progress = require("../models/Progress");

exports.logProgress = async (req, res) => {
  try {
    // Extract the necessary fields from the request body
    const { workoutPlanId, date, notes } = req.body;

    // Check if all required fields are provided
    if (!workoutPlanId || !date || !notes) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new progress entry
    const newProgress = new Progress({
      user: req.user.id, // Correctly use the user ID from the authenticated user
      workoutPlan: workoutPlanId,
      date,
      notes,
    });

    // Save the new progress
    await newProgress.save();

    // Respond with the newly created progress
    res.status(201).json(newProgress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getProgress = async (req, res) => {
  try {
    // Validate the workoutPlanId parameter
    const { workoutPlanId } = req.params;
    if (!workoutPlanId) {
      return res.status(400).json({ message: "workoutPlanId is required" });
    }

    // Find the progress for the given user and workout plan
    const progress = await Progress.find({
      workoutPlan: workoutPlanId,
      user: req.user.id,
    });

    // If no progress is found, return a 404 response
    if (progress.length === 0) {
      return res.status(404).json({ message: "No progress found for this workout plan" });
    }

    // Respond with the fetched progress data
    res.status(200).json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
