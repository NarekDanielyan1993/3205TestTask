import express from 'express';
import userRoutes from 'route/user';

const routes = express.Router();

routes.use(userRoutes);

export default routes;
