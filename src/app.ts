import * as express from "express";
import * as bodyParser from "body-parser";
import {Index} from "./routes";

class App {
    public app: express.Application;
    public baseroute: Index = new Index();

    constructor() {
        this.app = express();
        this.baseroute.base(this.app)
        this.config();
    }

    private config() {
        this.app.use(bodyParser.json());
    }
}

export default new App().app