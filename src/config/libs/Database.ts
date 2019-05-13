import * as mongoose from "mongoose";
import { configuration } from "../configuration";

class Database {
  public open = () => {
    return new Promise((resolve, reject) => {
      const url = configuration.mongoUrl;

      mongoose.connect(url, {useNewUrlParser: true});

      mongoose.connection.on("connected", () => {
        console.log("Database connected");
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
