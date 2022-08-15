import server from "../server";
import { queryUserAllByUname } from "../database/userDB";

/**
 * 通过用户名和密码查询用户所有字段
 */
server.post("/login", async (req, res) => {
  let data = await queryUserAllByUname(req.body.username, req.body.password);
  let status = 404;
  if ( data.length > 0 ) {

    res.cookie("USERID", data[0].id, { maxAge: 1000 * 60 * 60 * 24 });
    status = 200;
  }
  res.send({ data, status });
});

server.get("/get/cookie", (req, res) => {
  res.send(req.cookies);
});