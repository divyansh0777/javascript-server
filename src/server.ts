import * as express from 'express';
import { default as notFoundRoutes } from './config/libs/routes/notFoundRoutes'
import { default as errorHandler } from './config/libs/routes/errorHandler'
import { traineeRouter } from './routes'
export class Server {
  private app = express();
  private PORT;
  private NODE_ENV;

  public bodyParser = require('body-parser');

  constructor(con) {
    this.PORT = con.port;
    this.NODE_ENV = con.node_env;
  }



  public bootstrap = () => {
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

    this.app.post('/post-test', (request, response) => {
      response.send('this is post request');
    })

    this.app.get('/error-test', (request, response, next) => {
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
