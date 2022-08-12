import express from "express";
import { queryUserAllByUname } from "../database/index.js";

const apis = express();

apis.get("/query/users/:uname", async (req, res) => {
  let user = await queryUserAllByUname(req.params.uname);
  res.send(user);
});

apis.listen(3001);