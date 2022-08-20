import app from "../express";
import { queryFriends, queryUserByUnameAndPwd, updateUser } from "../database/userDB";
import { handleSelect, handleUpdateUser } from "../service/userService";

app.post("/login", async (req, res) => {
  let users = await queryUserByUnameAndPwd(req.body.username, req.body.password);
  res.send(
    handleSelect(users, () => {
      res.cookie("USERINFO", JSON.stringify(users[0]), { domain: "localhost", maxAge: 60000 * 60 * 24 });
    })
  );
});

app.post("/update/user", async (req, res) => {
  let flag = await updateUser(req.body, ["id"], () => {
    return { id: req.body.id };
  });
  res.send(handleUpdateUser(flag));
});

app.post("/query/friends", async (req, res) => {
  let friends = await queryFriends(req.body);
  res.send(handleSelect(friends));
});
