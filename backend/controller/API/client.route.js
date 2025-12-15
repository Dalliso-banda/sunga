import express from 'express'
import clientController from '../client.controller.js';
const router = express.Router();

router.use('/uploadclient',clientController.UploadClient);
router.use('/getclients',clientController.getClients)
router.use('/cleardebt',clientController.clearLoan);
router.use('/getclientbyid/:id',clientController.getClientById);
router.use('/paymenthistory/:nrc',clientController.getClientHistoryByNrc);


export default router;