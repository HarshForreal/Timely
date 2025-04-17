import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import eventRoutes from "./routes/event.routes.js"; // Ensure correct path
import adminRoutes from './routes/admin.routes.js'; // ✅ Add .js at end in ESM


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route Setup
app.use("/api/events", eventRoutes); // Use /api/events as the base for event routes

app.use('/api/admin', adminRoutes);


// DB Connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("❌ DB Connection Error:", error));
