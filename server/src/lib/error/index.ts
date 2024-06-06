export interface IHttpStatusCode {
    OK: number;
    BAD_REQUEST: number;
    NOT_FOUND: number;
    INTERNAL_SERVER: number;
    NOT_AUTHORIZED: number;
    FORBIDDEN: number;
    VALIDATION: number;
}

export const HttpStatusCode: IHttpStatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
    NOT_AUTHORIZED: 401,
    FORBIDDEN: 403,
    VALIDATION: 400,
};

export const COMMON_ERROR_MESSAGES = {
    INTERNAL_SERVER_ERROR: 'internal server error',
    FORBIDDEN: 'Forbidden',
    UNAUTHORIZED: 'Unauthorized',
    NOT_FOUND: 'Not found',
    VALIDATION: 'Validation error',
};

export class AppError extends Error {
    public readonly httpCode: number;
    public readonly isOperational: boolean;
    public readonly message: string;
    public readonly errors: any;

    constructor(
        httpCode: number,
        message: string,
        isOperational: boolean,
        name: string,
        errors?: any,
    ) {
        super(name);
        this.message = message;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
        this.errors = errors || [];

        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}
export class InternalServerError extends AppError {
    constructor(
        message = COMMON_ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
        httpCode = HttpStatusCode.INTERNAL_SERVER,
        isOperational = true,
        name = 'InternalServerError',
    ) {
        super(httpCode, message, isOperational, name);
    }
}

export class NotAuthorized extends AppError {
    constructor(
        message = COMMON_ERROR_MESSAGES.UNAUTHORIZED,
        httpCode = HttpStatusCode.NOT_AUTHORIZED,
        isOperational = true,
        name = 'NotAuthorized',
    ) {
        super(httpCode, message, isOperational, name);
    }
}
export class NotFound extends AppError {
    constructor(
        message = COMMON_ERROR_MESSAGES.NOT_FOUND,
        httpCode = HttpStatusCode.NOT_FOUND,
        isOperational = true,
        name = 'NotFound',
    ) {
        super(httpCode, message, isOperational, name);
    }
}

export class ValidationError extends AppError {
    constructor(
        message = COMMON_ERROR_MESSAGES.VALIDATION,
        httpCode = HttpStatusCode.VALIDATION,
        errors = [],
        name = 'InternalServerError',
        isOperational = true,
    ) {
        super(httpCode, message, isOperational, name, errors);
    }
}
