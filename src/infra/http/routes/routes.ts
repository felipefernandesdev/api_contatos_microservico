import { Request, Response, Router } from "express";

class Routes {
  routes: Router;
  constructor() {
    this.routes = Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.routes.get("/", (request: Request, response: Response) => {
      response.json({ msg: "OK" });
    });
  }
}

export default new Routes().routes;
