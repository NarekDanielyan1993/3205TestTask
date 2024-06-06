import { COMMON_ERROR_TYPES } from 'constant/error';
import { NextFunction, Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { InternalServerError, ValidationError } from 'lib/error';
import { ZodRawShape, z } from 'zod';

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const readFileAsync = async (path: string) => {
    try {
        return await readFile(path, 'utf8');
    } catch (error) {
        throw new InternalServerError('Failed to read file.');
    }
};

export const validateRequest =
    <T extends ZodRawShape>(schema: z.ZodObject<T>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validationData = req.query;
            schema.parse(validationData);
            await next();
        } catch (error: any) {
            if (
                error.name ===
                COMMON_ERROR_TYPES.VALIDATION_ERROR.types.zod.name
            ) {
                const validationError = new ValidationError(
                    COMMON_ERROR_TYPES.VALIDATION_ERROR.msg,
                    COMMON_ERROR_TYPES.VALIDATION_ERROR.status,
                    error?.issues?.map((issue: any) => ({
                        [issue.path]: issue.message,
                    })),
                );
                return next(validationError);
            }
            next(error);
        }
    };
