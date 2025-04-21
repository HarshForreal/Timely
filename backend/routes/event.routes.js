import express from "express";
import {
  createEvent,
  getUserEvents,
  getApprovedEvents,
  deleteEvent,
} from "../controllers/event.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

// Prefix everything under /api/events
// route to create event
router.post("/create", authenticate, createEvent);
router.get("/user", authenticate, getUserEvents); // Fetch user's events
router.get("/approved", getApprovedEvents); // Fetch approved events
router.delete("/delete/:id", authenticate, deleteEvent); // Delete event

export default router;
