import server from "../server";
import { queryUserAllByUname } from "../database/users";

server.get("/query/user/by/uname/:uname", async (req, res) => {
  let user = await queryUserAllByUname(req.params.uname);
  res.send(user);
});