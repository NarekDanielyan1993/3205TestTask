export interface IUser {
    number: string;
    email: string;
}

export interface IGetUser {
    number?: string;
    email: string;
}

export interface IUserCard {
    number: string;
    email: string;
}

export interface IUserCardDetails {
    email: string;
    number: string;
}

export interface IUserDetails {
    user: IUser;
}
