import { USER_VALIDATION_MESSAGES } from 'constant/error';
import z from 'zod';

export const userValidationSchema = z.object({
    number: z
        .string()
        .min(6, { message: USER_VALIDATION_MESSAGES.NUMBER })
        .max(6, { message: USER_VALIDATION_MESSAGES.NUMBER })
        .or(z.undefined()),
    email: z.string().email(),
});
