import { IGetUser, IUser } from 'src/types/user';

export interface IUserContext {
    users: IUser[] | null;
    isUsersLoading: boolean;
    getUser: (userData: IGetUser) => void;
}
