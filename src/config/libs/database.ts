import { configure } from '../../config/configuration'
import { mongo } from 'mongoose';

class database {
  public open = () => {
    new Promise((resolve, reject) => {
      const url = configure.mongo_url;
      mongo.connect(url, (err) => {
        reject("Connection not establish check your DB");
      });

    });
  }

  public disconnect = () => {

  }
}

export default new database()
