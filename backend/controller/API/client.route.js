import express from 'express'
import clientController from '../client.controller.js';
const router = express.Router();

router.use('/uploadclient',clientController.UploadClient);
router.use('/getclients',clientController.getClient)
router.use('/cleardebt',clientController.clearLoan);


export default router;