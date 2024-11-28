const express = require("express");
const { protect } = require("../middlewares/authMiddleware.js");
const { logProgress, getProgress } = require("../Controllers/progressController.js");
const router = express.Router();

router.route("/").post(protect, logProgress);
router.route("/:workoutPlanId").get(protect, getProgress);

module.exports = router;
