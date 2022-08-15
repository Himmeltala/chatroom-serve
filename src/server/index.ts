import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const server = express();

server.use(cors({ credentials: true, origin: true }));
server.use(cookieParser());
server.use(express.json()); // 解析 application/json
server.use(express.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded

export default server;