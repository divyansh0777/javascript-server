import * as mongoose from "mongoose";
import { configuration } from "../configuration";
import { seedData } from "./seedData";

class Database {
  public open = () => {
    return new Promise((resolve, reject) => {
      const url = configuration.mongoUrl;

      mongoose.connect(url, {useNewUrlParser: true});

      mongoose.connection.on("connected", async () => {
        console.log("Database connecting.......");
        await seedData();
        console.log("Database connected !");
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
