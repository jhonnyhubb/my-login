import { Router } from 'express';

import auth from './middlewares/auth'

import HelloController from './controllers/HelloController';
import SessionsController from './controllers/SessionsController';
import UsersController from './controllers/UsersController';
import RepositoriesController from './controllers/RepositoriesController';

// public

const routes = new Router();

routes.post('/sessions', SessionsController.create);

routes.get('/hello', HelloController.index);

// middlewares
routes.use(auth);

// private
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.delete);

routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.delete('/users/:user_id/repositories/:id', RepositoriesController.delete);

export default routes;