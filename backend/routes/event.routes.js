import express from 'express';
import {
  createEvent,
  getUserEvents,
  getApprovedEvents,
  deleteEvent,
} from '../controllers/event.controller.js';

import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// Prefix everything under /api/events
router.post('/event/create', authenticate, createEvent);                 // Create new event
router.get('/event/user', authenticate, getUserEvents);                  // Fetch user's events
router.get('/event/approved', getApprovedEvents);                        // Fetch approved events
router.delete('/event/delete/:id', authenticate, deleteEvent);          // Delete event

export default router;
