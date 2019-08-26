import express from 'express';
import userController from './controller';

const routes = express.Router();

routes.get('/:firstName', userController.reverseFullName);
routes.get('/genpwd/:firstName', userController.genPassWordController);

export default routes;
