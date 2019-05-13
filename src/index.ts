import { configure } from "./config/configuration"
import database from "./config/libs/database"
import Server from "./server"

const serve = new Server(configure);
serve.bootstrap();
database.open().then(
  serve.run
).catch((err) => {
  console.log("Database not connected");
});
