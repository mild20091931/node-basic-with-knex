import express from 'express';
import userController from './controller';

const routes = express.Router();

routes.get('/:firstName', userController.reverseFullName);

export default routes;
