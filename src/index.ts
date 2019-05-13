import { configuration } from "./config/configuration";
import Database from "./config/libs/Database";
import Server from "./server";

const serve = new Server(configuration);
serve.bootstrap();
Database.open().then(
  serve.run
).catch((err) => {
  console.log("Database not connected");
});
