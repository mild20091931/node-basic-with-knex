import express from 'express';
import userController from './controller';

const routes = express.Router();

routes.get('/:firstName', userController.reverseFullNameController);
routes.get('/genpwd/:firstName', userController.genPassWordController);
routes.post('/:newuser', userController.newUserController);
routes.put('/update/:id', userController.updateAllController);
routes.delete('/delete/:id', userController.deleteUserController);

export default routes;
