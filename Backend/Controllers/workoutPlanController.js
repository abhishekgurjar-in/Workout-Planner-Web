const WorkoutPlan = require("../models/WorkoutPlan.js");

exports.createWorkoutPlan = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newPlan = new WorkoutPlan({
      user: req.user.id,
      title,
      description,
    });
    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getWorkoutPlans = async (req, res) => {
  try {
    const plans = await WorkoutPlan.find({ user: req.user.id });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getWorkoutPlanById = async (req, res) => {
  try {
    const plan = await WorkoutPlan.findById(req.params.id);
    if (!plan || plan.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Workout Plan not found" });
    }
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.updateWorkoutPlan = async (req, res) => {
  try {
    const plan = await WorkoutPlan.findById(req.params.id);
    if (!plan || plan.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Workout Plan not found" });
    }

    const { title, description } = req.body;
    plan.title = title || plan.title;
    plan.description = description || plan.description;

    const updatedPlan = await plan.save();
    res.json(updatedPlan);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.deleteWorkoutPlan = async (req, res) => {
    try {
      // Find the workout plan by ID
      const plan = await WorkoutPlan.findById(req.params.id);
      
      // Check if the plan exists and belongs to the logged-in user
      if (!plan) {
        return res.status(404).json({ message: "Workout Plan not found" });
      }
  
      // Ensure the workout plan belongs to the authenticated user
      if (plan.user.toString() !== req.user.id) {
        return res.status(403).json({ message: "Not authorized to delete this workout plan" });
      }
  
      // Delete the workout plan using deleteOne
      await plan.deleteOne();  // Change from plan.remove() to plan.deleteOne()
      
      // Send success response
      res.json({ message: "Workout Plan Deleted" });
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Error deleting workout plan:", error);
  
      // Send detailed error response
      res.status(500).json({
        message: "Server Error",
        error: error.message, // Send the error message for debugging
        stack: error.stack,   // Optionally, send the stack trace for more details
      });
    }
  };
  