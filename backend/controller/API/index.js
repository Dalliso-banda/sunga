import express from 'express'
import authRoutes from '../API/auth.route.js';
import clientRoute from '../API/client.route.js'
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/client',clientRoute)


export default router;