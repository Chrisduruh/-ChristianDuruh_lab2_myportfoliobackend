const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get a user by ID
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Add a new user
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// Update a user
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

// Delete a user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

// Delete all users
router.delete("/", async (req, res) => {
  await User.deleteMany();
  res.json({ message: "All users deleted" });
});

module.exports = router;

