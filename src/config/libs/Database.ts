import * as mongoose from "mongoose";
import { configure } from "../configuration";
import { seedData } from "./seedData";

class Database {
  public open = () => {
    return new Promise ((resolve, reject) => {
      const url = configure.mongoUrl;

      mongoose.connect(url, {useNewUrlParser: true});

      mongoose.connection.on("connected", () => {
        seedData();
        console.log("Database connected");
        resolve();
      });

      mongoose.connection.on("error", () => {
        console.log("Connection not established");
        reject();
      });
    });
  }

  public disconnect = () => {
    mongoose.disconnect();
  }
}

export default new Database();
