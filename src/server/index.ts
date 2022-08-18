import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const server = express();

server.use(cors({ credentials: true, origin: true }));
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

export default server;
