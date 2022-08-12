import { httpServer } from "./socketio/index.js";
import "./database/index.js";
import "./apis/index.js";

httpServer.listen(3000);