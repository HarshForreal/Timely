import { Router } from "express";
const router = Router();

import adminController from "../controllers/admin.controller.js";
import isAdmin from "../middleware/admin.middleware.js";

// GET /api/admin/users
router.get("/users", isAdmin, adminController.getAllUsers);
router.get("/events/:userId", isAdmin, adminController.getEventByUser);
router.patch("/approve-event/:eventId", isAdmin, adminController.approveEvent);
router.delete("/remove-event/:eventId", isAdmin, adminController.removeEvent);

export default router;
