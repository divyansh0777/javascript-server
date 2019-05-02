import * as express from 'express';
export class Server {
  private app = express();
  private PORT;
  private NODE_ENV;


  constructor(config) {
    this.PORT = config.port;
    this.NODE_ENV = config.node_env;
  }

  public bootstrap = () => {
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

    return this;
  }

  public run = () => {
    this.app.listen(this.PORT, () => {
      console.log(`App is running on port ${this.PORT} in (${this.NODE_ENV})`);
    });
  }
}
