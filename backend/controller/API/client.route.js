import express from 'express'
import clientController from '../client.controller.js';
const router = express.Router();

router.use('/uploadclient',clientController.UploadClient);
export default router