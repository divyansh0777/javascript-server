import * as express from 'express';
import { default as notFoundRoutes } from './config/libs/routes/notFoundRoutes';
import { default as errorHandler } from './config/libs/routes/errorHandler'
import traineeRouter from './controllers/trainee/routes'
import { initBodyParser } from 'body-parser'

export class Server {
  private app = express();
  private PORT;
  private NODE_ENV;
  public bodyParser = initBodyParser;

  constructor(config) {
    this.PORT = config.port;
    this.NODE_ENV = config.node_env;
  }

  public bootstrap = () => {
    this.initBodyParser();
    this.setupRoutes();
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public setupRoutes = () => {
    this.app.get('/', (request, response) => {
      response.send("Hello welcome to Successive");
    })

    this.app.get('/health-check', (request, response) => {
      response.send("I am ok");
    })

    this.app.post('/postTest', (request, response) => {
      response.send('this is post request');
    })

    this.app.get('/errorTest', (request, response, next) => {
      throw new Error('This is an error');
    })

    this.app.get('/api', (request, response) => {
      response.send("You have two modules trainee and user");
    })

    this.app.use('/api', traineeRouter);
    this.app.use(errorHandler);
    this.app.use(notFoundRoutes);

    return this;
  }

  public initBodyParser = () => {
    this.app.use(this.bodyParser.text({ type: 'text/html' }));
    this.app.use(this.bodyParser.urlencoded({ extended: false }))
    // this.app.initBodyParser
  }

  public run = () => {
    this.app.listen(this.PORT, () => {
      console.log(`App is running on port ${this.PORT} in (${this.NODE_ENV})`);
    });
  }
}
