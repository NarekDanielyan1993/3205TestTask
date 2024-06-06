import { USER_ERROR_MESSAGES } from 'src/constant';
import emailSchema from 'src/utills/schema';
import { z } from 'zod';

export const userValidationSchema = z.object({
    email: emailSchema,
    number: z
        .string()
        .transform((value) => {
            const number = value.replace(/[^0-9]/g, '');
            return number;
        })
        .refine(
            (number) => {
                if (number.length === 0) {
                    return true;
                }
                return number.length === 6;
            },
            {
                message: USER_ERROR_MESSAGES.PHONE,
            }
        )
        .or(z.null()),
});

export type UserTypes = z.infer<typeof userValidationSchema>;
