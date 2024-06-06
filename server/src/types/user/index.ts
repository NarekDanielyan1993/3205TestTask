import { ParsedUrlQuery } from 'querystring';

export type UserType = {
    email: string;
    number: string;
} & ParsedUrlQuery;
