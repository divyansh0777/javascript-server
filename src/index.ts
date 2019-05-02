import Server from './server'
import { configure } from './config/configuration'

const serve = new Server(configure);
serve.bootstrap().run();
