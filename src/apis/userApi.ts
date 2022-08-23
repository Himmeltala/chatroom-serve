import app from "../express";
import {
  queryFriends,
  queryGroups,
  queryUserByUnameAndPwd,
  updateUser
} from "../providers/userProvider";
import { inspectArrayIsEmpty, formatResponseData } from "../service/common";

app.post("/login", async (req, res) => {
  let users = await queryUserByUnameAndPwd(req.body.username, req.body.password);
  inspectArrayIsEmpty(users, users => {
    res.cookie("USERINFO", JSON.stringify(users[0]), {
      domain: "localhost",
      maxAge: 60000 * 60 * 24
    });
    res.send(formatResponseData({ codes: { well: 200 }, data: users }, () => true));
  });
});

app.post("/update/user", async (req, res) => {
  let flag = await updateUser(req.body, { id: req.body.id }, ["id"]);
  res.send(formatResponseData({ codes: { well: 200, bad: 404 }, data: flag }, () => flag === 1));
});

app.post("/query/friends", async (req, res) => {
  let friends = await queryFriends(req.body);
  inspectArrayIsEmpty(friends, friends => {
    res.send(formatResponseData({ codes: { well: 200 }, data: friends }, () => true));
  });
});

app.post("/query/groups", async (req, res) => {
  let groups = await queryGroups(req.body);
  inspectArrayIsEmpty(groups, groups => {
    res.send(formatResponseData({ codes: { well: 200 }, data: groups }, () => true));
  });
});
