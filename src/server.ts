import * as express from 'express';
import * as initBodyParser from 'body-parser';
import { default as notFoundRoutes } from './config/libs/routes/notFoundRoutes'
import { default as errorHandler } from './config/libs/routes/errorHandler'
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
    this.setupRoutes();
    // this.initBodyParser();
    return this;
  }

  public setupRoutes = () => {
    this.app.use(this.app.setupRoutes;

    this.app.use(function (request, response, next) {
        response.send(404, "Sry Not Found");
    })
    this.app.get('/health-check', (request, response) => {
      response.send("I am ok");

    })

    this.app.get('/', (request, response) => {
      response.send("Hello welcome to Successive");
    })

    return this;
  }

  // public initBodyParser = () => {
  //   this.app.use(this.bodyParser.text({ type: 'text/html' }));
  //   this.app.use(this.bodyParser.urlencoded({ extended: false }))
  //   this.app.initBodyParser
  // }

  public run = () => {
    this.app.listen(this.PORT, () => {
      console.log(`App is running on port ${this.PORT} in (${this.NODE_ENV})`);
    });
  }

}
