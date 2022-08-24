import "dotenv/config";
import { Server } from "../infra/http/server/server";

const app = new Server();
app.start();
