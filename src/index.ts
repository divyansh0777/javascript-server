import { configuration } from "./config/configuration";
import Database from "./config/libs/Database";
import Server from "./server";

const serve = new Server(configuration);
serve.bootstrap();
startDb();

async function startDb() {
  await Database.open();
  serve.run();
}
