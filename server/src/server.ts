import App from 'lib/app';
import errorMiddleware from 'middleware/error';
import routes from './route';

const app = new App();

app.initializeMiddlewares();
app.initializeRoutes(routes);
app.addMiddleware(errorMiddleware);

app.init(5000);
