import { corsOptions } from 'constant/middleware';
import cors from 'cors';
import express, { Express, Router } from 'express';

class App {
    private expressApp: Express;

    constructor() {
        this.expressApp = express();
    }

    public initializeMiddlewares() {
        this.expressApp.use(express.urlencoded({ extended: true }));
        this.expressApp.use(express.json());
        this.expressApp.use(cors(corsOptions));
    }

    public initializeRoutes(routes: Router) {
        this.expressApp.use(routes);
    }

    public addMiddleware(middleware: any) {
        this.expressApp.use(middleware);
    }

    public addRoute(router: express.Router) {
        this.expressApp.use(router);
    }

    public async init(port: number) {
        try {
            this.expressApp.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        } catch (error) {
            console.error('Failed to start the server:', error);
        }
    }

    public getApp(): Express {
        return this.expressApp;
    }
}

export default App;
