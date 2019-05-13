import { configure } from "./config/configuration";
import Server from "./server";

const serve = new Server(configure);
serve.bootstrap().run();
