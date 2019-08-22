import express from 'express';
import usersRoutes from './modules/users/routes';

const router = express.Router();

router.use('/user', usersRoutes);

export default router;
