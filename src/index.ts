import { configure } from "./config/configuration";
import Database from "./config/libs/database";
import Server from "./server";

const serve = new Server(configure);
serve.bootstrap();
Database.open().then(
  serve.run
).catch((err) => {
  console.log("Database not connected");
});
