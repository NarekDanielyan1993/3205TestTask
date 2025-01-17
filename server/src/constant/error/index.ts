export const COMMON_ERROR_TYPES = {
    NOT_FOUND: {
        msg: 'Sorry, the requested resource could not be found.',
        status: 404,
        name: 'NotFoundError',
        title: 'Not Found Error',
    },
    FORBIDDEN: {
        msg: 'You are not authorized to access this resource.',
        status: 401,
        name: 'ForbiddenError',
        title: 'Forbidden Error',
    },
    UNAUTHORIZED: {
        msg: 'You are not authorized to perform this action.',
        status: 403,
        name: 'UnauthorizedError',
        title: 'Unauthorized Error',
    },
    VALIDATION_ERROR: {
        msg: 'Oops! There was an error with your request. Please check your input.',
        status: 400,
        name: 'ValidationError',
        title: 'Validation Error',
        types: {
            zod: {
                name: 'ZodError',
            },
        },
    },
    INTERNAL_SERVER_ERROR: {
        msg: 'Oops! Something went wrong. Please try again later.',
        status: 500,
        name: 'InternalServerError',
        title: 'Internal Server Error',
    },
};

export const USER_VALIDATION_MESSAGES = {
    NUMBER: 'Phone number should be 6 characters long.',
};
