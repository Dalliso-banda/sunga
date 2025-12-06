import express from 'express'
import authController from '../auth.controller.js';
const router = express.Router();



router.use('/login', authController.login);
router.use("/signup", authController.signup);
router.use('/me', authController.me);

export default router;