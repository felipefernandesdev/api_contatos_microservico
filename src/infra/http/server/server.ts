import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "../routes/routes";
import logger from "morgan";

export class Server {
  app: express.Application;
  port: any;
  routes: any;
  logging: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5001;
    this.routes = routes;
    this.logging = logger("combined");
    this.config();
    this.routers();
  }

  config() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(this.logging);
  }

  middlewares() {}

  routers() {
    this.app.use(this.routes);
  }

  start() {
    this.app.listen(this.port, () =>
      console.log(`Api is running on port: ${this.port}`)
    );
  }
}
