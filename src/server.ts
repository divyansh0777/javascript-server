import * as initBodyParser from "body-parser";
import * as express from "express";
import errorHandler from "./config/libs/routes/errorHandler";
import notFoundRoutes from "./config/libs/routes/notFoundRoutes";
<<<<<<< HEAD
import { route } from "./routes";
=======
import { router } from "./routes";
>>>>>>> feature/40011

export default class {
  public bodyParser = initBodyParser;
  private app = express();
  private PORT: number;
  private NODE_ENV: string;

  constructor( configure ) {
    this.PORT = configure.port;
    this.NODE_ENV = configure.nodeEnv;
  }

  public bootstrap = () => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public setupRoutes = () => {
    this.app.get("/", (request, response) => {
      response.send("Hello welcome to Successive");
    });

    this.app.get("/health-check", (request, response) => {
      response.send("I am ok");
    });

    this.app.post("/", (request, response) => {
      response.send("this is post request");
    });

    this.app.get("/error-test", (request, response, next) => {
      throw new Error("This is an error");
    });

    this.app.get("/api", (request, response) => {
      response.send("You have two modules trainee and user");
    });

    this.app.use("/api", route);
    this.app.use(notFoundRoutes);
    this.app.use(errorHandler);
    return this;
  }

  public initBodyParser = () => {
    this.app.use(this.bodyParser.text({ type: "text/html" }));
    this.app.use(this.bodyParser.urlencoded({ extended: false }));
  }

  public run = () => {
    this.app.listen(this.PORT, () => {
      console.log(`App is running on port ${this.PORT} in (${this.NODE_ENV})`);
    });
  }
}
