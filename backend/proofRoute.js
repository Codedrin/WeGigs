
import express from 'express';
import { submitFeedback, getAllFeedback} from './proofController.js';
import { submitContact } from './contactController.js';
const router = express.Router();

router.post('/submit', submitFeedback);
router.get('/getAllFeedback', getAllFeedback);
router.post('/Contactsubmit', submitContact);
export default router;
