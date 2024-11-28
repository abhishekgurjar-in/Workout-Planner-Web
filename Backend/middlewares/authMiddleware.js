const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  // Check for the token in the Authorization header
  const token = req.headers.authorization?.split(" ")[1];

  // If no token is provided, return 401 Unauthorized
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify the token using the JWT_SECRET from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded token payload (or just the user ID) to req.user
    req.user = decoded; // You can store the entire decoded token, not just the id

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Catch any errors (e.g., invalid token) and respond with 401 Unauthorized
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = { protect };
