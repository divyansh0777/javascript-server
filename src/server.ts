import * as express from 'express';
export class Server {
  private app = express();
  private PORT;
  private NODE_ENV;


  constructor(con) {
    this.PORT = con.port;
    this.NODE_ENV = con.node_env;
    // console.log('---------------------------');
    // console.log('PORT - ' + con.port + ' inside constructor');
    // console.log('---------------------------');
  }



  public bootstrap = () => {
    this.setupRoutes();
    return this;
  }

  public setupRoutes = () => {
    this.app.get('/health-check', (request, response) => {
      response.send("I am ok");
    })

    this.app.get('/', (request, response) => {
      response.send("Hello welcome to Successive");
    })
    return this;
  }

  public run = () => {
    // console.log('---------------------------');
    // console.log('PORT - ' + this.PORT +' '+ this.NODE_ENV +' inside RUN method');
    // console.log('---------------------------');

    this.app.listen(this.PORT, () => {
      console.log(`App is running on port ${this.PORT} in (${this.NODE_ENV})`);
    });
  }

}
