import * as mongoose from 'mongoose';
import { configure } from '../configuration'

class database {
  public open = () => {
    return new Promise((resolve, reject) => {
      const url = configure.mongo_url;

      mongoose.connect(url, {useNewUrlParser: true});

      mongoose.connection.on('connected', () => {
        console.log("Database connected");
        resolve();
      });

      mongoose.connection.on('error', () => {
        reject();
      });
    });
  }

  public disconnect = () => {
    mongoose.disconnect();
  }
}

export default new database()