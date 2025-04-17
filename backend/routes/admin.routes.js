import { Router } from 'express';
const router = Router();

import adminController from '../controllers/admin.controller.js';
import isAdmin from '../middleware/admin.middleware.js';

// GET /api/admin/users
router.get('/users', isAdmin, adminController.getAllUsers);

export default router;
