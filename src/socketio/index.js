import { createServer } from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

const httpServer = createServer();
const server = new Server(httpServer, { cors: { origin: true, credentials: true } });

/**
 * 监听客户端连接
 */
server.on("connection", function (socket) {

  socket.on("sending", function (e) {
    socket.broadcast.emit("broadcast", e);
  });

});

instrument(server, { auth: false });

export { httpServer };