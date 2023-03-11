import express from 'express';
import signupController from '../../controllers/auth/signupController';

const router = express.Router();
router.post('/auth/signup', signupController);

export default router;
