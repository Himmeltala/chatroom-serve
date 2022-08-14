import server from "../server";
import { queryUserAllByUname } from "../database/users";

server.get("/query/user/by/key", async (req, res) => {
  let query: any = req.query;
  let result = await queryUserAllByUname(query.uname, query.pwd);
  res.send(result);
});