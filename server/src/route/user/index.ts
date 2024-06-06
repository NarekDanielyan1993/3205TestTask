import { USER_API } from 'constant/api';
import UserController from 'controller/user';
import express, { Router } from 'express';
import { UserService } from 'service/user';
import { validateRequest } from 'utils/helper';
import { userValidationSchema } from 'utils/validation';

const userService = new UserService();
const userController = new UserController(userService);

const userRoutes: Router = express.Router();

userRoutes.get(
    USER_API.GET,
    validateRequest(userValidationSchema),
    userController.getUser,
);

export default userRoutes;
