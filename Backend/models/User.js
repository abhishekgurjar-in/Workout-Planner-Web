const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },  // Optional email format check
  password: { type: String, required: true },
});

// Password hashing middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Remove password when returning the user object
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;  // Exclude password from the returned object
  return userObject;
};

module.exports = mongoose.model("User", userSchema);