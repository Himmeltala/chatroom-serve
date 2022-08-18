import server from "../server";
import { queryFriends, queryUserAllByUname, updateUser } from "../database/userDB";

/**
 * 通过用户名和密码查询用户所有字段
 */
server.post("/login", async (req, res) => {
  let data = await queryUserAllByUname(req.body.username, req.body.password);
  let status = 404;
  if (data.length > 0) {
    res.cookie("USERID", data[0].id, { domain: "localhost", maxAge: 60000 * 60 * 24 });
    status = 200;
  }
  res.send({ data, status });
});

server.post("/update/user", async (req, res) => {
  let status = 404;
  let flag = await updateUser(req.body, ["id"], () => {
    return { id: req.body.id };
  });
  if (flag === 1) {
    status = 200;
  }
  res.send({ status });
});

server.post("/query/friends", async (req, res) => {
  let status = 404;
  let data = await queryFriends(req.body);
  if (data.length > 0) {
    status = 200;
  }
  res.send({ data, status });
});
