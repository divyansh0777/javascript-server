import * as mongoose from "mongoose";
import { configuration } from "../configuration";
import { seedData } from "./seedData";

class Database {
  public open = () => {
    return new Promise((resolve, reject) => {
      const url = configuration.mongoUrl;

      mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true });

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

  public disconnect = async () => {
    await mongoose.disconnect();
  }
}

export default new Database();
