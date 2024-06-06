import { UserType } from 'types/user';

export interface IUserService {
    getUser(userData: UserType): Promise<UserType>;
}
