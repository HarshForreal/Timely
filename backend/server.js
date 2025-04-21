import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import eventRoutes from "./routes/event.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config(); // Load environment variables

const app = express(); // Initialize express app

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Route Setup
app.use("/api/events", eventRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);

// MongoDB Connection and Server Startup
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Start the server once DB connection is successful
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ DB Connection Error:", error);
  });
