import { createServer } from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
import { updateUser } from "../database/userDB";

const httpServer = createServer();
const server = new Server(httpServer, {
  cors: { origin: true, credentials: true }
});

server.on("connection", (socket: any) => {
  socket.on("emit-private", (e: any) => {
    socket.to(e.socket_id).emit("echo-private", e);
  });

  socket.on("emit-public", (e: any) => {
    socket.to(e.room_id).emit("echo-public", e);
  });

  socket.on("disconnect", () => {
    updateUser({ socket_id: "", is_online: 0 }, { socket_id: socket.id });
  });
});

instrument(server, { auth: false });

export default httpServer;
