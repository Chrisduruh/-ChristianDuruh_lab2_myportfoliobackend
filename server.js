require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();



const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Validate MONGO_URI
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("ERROR: Missing MONGO_URI in .env file.");
  process.exit(1);
}

// MongoDB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// Import Routes
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");

// Use Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

// Base Route
app.get("/", (req, res) => {
  res.status(200).send("✅ Portfolio Backend API Running...");
});
app.get('/', (req, res) => {
    res.send('Welcome to my portfolio backend..');
  });
// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

/*require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "your-mongodb-uri-here";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Routes
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Portfolio API is Running..."));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/




//67c8db0e262a71e286f6e96e