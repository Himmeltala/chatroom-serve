import app from "../express";
import { queryFriends, queryGroups, queryUserByUnameAndPwd, updateUser } from "../providers/userProvider";
import { inspectArrayIsEmpty, formatResponseData } from "../service/common";

app.post("/login", async (req, res) => {
  let response = await queryUserByUnameAndPwd(req.body.username, req.body.password);
  if (response.length > 0) {
    res.cookie("USERINFO", JSON.stringify(response[0]), { domain: "localhost", maxAge: 60000 * 60 * 24 });
    res.send(formatResponseData({ codes: { well: 200 }, data: response }, () => true));
  } else {
    res.send(formatResponseData({ codes: { bad: 404 }, data: response }, () => true));
  }
});

app.post("/update/user", async (req, res) => {
  let response = await updateUser(req.body, { id: req.body.id }, ["id"]);
  res.send(formatResponseData({ codes: { well: 200, bad: 404 }, data: response }, () => response === 1));
});

app.post("/query/friends", async (req, res) => {
  let response = await queryFriends(req.body);
  inspectArrayIsEmpty(response, friends => {
    res.send(formatResponseData({ codes: { well: 200 }, data: friends }, () => true));
  });
});

app.post("/query/groups", async (req, res) => {
  let response = await queryGroups(req.body);
  inspectArrayIsEmpty(response, groups => {
    res.send(formatResponseData({ codes: { well: 200 }, data: groups }, () => true));
  });
});
