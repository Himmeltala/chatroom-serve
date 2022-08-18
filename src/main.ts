import socket from "./socket";
import app from "./server/";
import "./apis";

socket.listen(3000);
app.listen(3005);
