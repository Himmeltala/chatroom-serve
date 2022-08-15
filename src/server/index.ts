import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json()); // 解析 application/json
server.use(express.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded

export default server;