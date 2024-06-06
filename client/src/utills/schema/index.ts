import { DEFAULT_VALIDATION_ERRORS } from 'src/constant';
import { z } from 'zod';

const emailSchema = z
    .string()
    .min(1, { message: DEFAULT_VALIDATION_ERRORS.required })
    .email({ message: DEFAULT_VALIDATION_ERRORS.email });

export default emailSchema;
