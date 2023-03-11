import express from 'express';

import detailsController from '../../controllers/details/details.controller';

const router = express.Router();
router.get('/user/details/:email', detailsController);

export default router;
