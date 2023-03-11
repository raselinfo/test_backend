import express from 'express';
import signInController from '../../controllers/auth/signin.controller';

const router = express.Router();
router.post('/auth/signin', signInController);

export default router;
