import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "../routes/routes";

export class Server {
  app: express.Application;
  port: any;
  routes: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5001;
    this.routes = routes;
    this.config();
    this.middlewares();
    this.routes();
  }

  config() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  middlewares() {}
  router() {
    this.app.use(this.routes);
  }

  start() {
    this.app.listen(this.port, () =>
      console.log(`Api is running on port: ${this.port}`)
    );
  }
}
