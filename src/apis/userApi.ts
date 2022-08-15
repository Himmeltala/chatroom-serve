import server from "../server";
import { queryUserAllByUname } from "../database/userDB";

/**
 * 通过用户名和密码查询用户所有字段
 */
server.post("/query/user/by/key", async (req, res) => {
  let result = await queryUserAllByUname(req.body.username, req.body.password);
  res.send(result);
});