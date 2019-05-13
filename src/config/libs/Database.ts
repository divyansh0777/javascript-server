import * as mongoose from "mongoose";
import { configure } from "../configuration";
import { seedData } from "./seedData";

class Database {
  public open = () => {
    return new Promise((resolve, reject) => {
      const url = configure.mongoUrl;

      mongoose.connect(url, {useNewUrlParser: true});

      mongoose.connection.on("connected", () => {
        console.log("Database connected");
        seedData();
        resolve();
      });

      mongoose.connection.on("error", () => {
        reject();
      });
    });
  }

  public disconnect = () => {
    mongoose.disconnect();
  }
}

export default new Database();
