import * as express from 'express';
import * as initBodyParser from 'body-parser';
import notFoundRoutes from './config/libs/routes/notFoundRoutes'
import errorHandler from './config/libs/routes/errorHandler'
export default class {
  private app = express();
  private PORT;
  private NODE_ENV;
  public bodyParser = initBodyParser;

  constructor(config) {
    this.PORT = config.port;
    this.NODE_ENV = config.node_env;
  }

  public bootstrap = () => {
    this.setupRoutes();
    this.initBodyParser();
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

    this.app.use(notFoundRoutes);
    this.app.use(errorHandler);

    return this;
  }

  public initBodyParser = () => {
    this.app.use(this.bodyParser.text({ type: 'text/html' }));
    this.app.use(this.bodyParser.urlencoded({ extended: false }))
  }

  public run = () => {
    this.app.listen(this.PORT, () => {
      console.log(`App is running on port ${this.PORT} in (${this.NODE_ENV})`);
    });
  }
}
