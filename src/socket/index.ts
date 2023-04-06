import { createServer } from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
import { UserProvider } from "../providers";

const httpServer = createServer();
const server = new Server(httpServer, {
  cors: { origin: true, credentials: true }
});

server.on("connection", (socket: any) => {
  socket.on("emit-private", (e: any) => {
    socket.to(e.socket_id).emit("echo-private", e);
  });

  socket.on("emit-join-public", (e: any) => {
    socket.join(e.room_id);
  });

  socket.on("emit-public", (e: any) => {
    socket.to(e.socket_id).emit("echo-public", e);
  });

  socket.on("disconnect", () => {
    UserProvider.updateUser({ socket_id: "", is_online: 0 }, { socket_id: socket.id });
  });
});

instrument(server, { auth: false });

httpServer.listen(3000);
