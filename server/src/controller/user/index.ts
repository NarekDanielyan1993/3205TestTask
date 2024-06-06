import { NextFunction, Request, Response } from 'express';
import { IUserService } from 'types/service';
import { UserType } from 'types/user';
import { delay } from 'utils/helper';
export default class UserController {
    private userService: IUserService;

    constructor(userService: IUserService) {
        this.userService = userService;
    }
    public getUser = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            await delay(5000);

            const { email, number } = req.query as UserType;
            const user = await this.userService.getUser({ email, number });

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };
}
