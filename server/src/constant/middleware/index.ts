import { CorsOptions } from 'cors';

export const allowedOrigins = ['http://localhost:9000'];

export const corsOptions: CorsOptions = {
    origin: allowedOrigins,
    methods: ['POST', 'PUT', 'GET', 'DELETE', 'OPTIONS'],
    credentials: true,
    optionsSuccessStatus: 200,
};
