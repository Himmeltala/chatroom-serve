import knex from "knex";
import { clipFileds } from "../service/common";

const Knex = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "123456",
    database: "chatroom"
  }
});

export namespace UserProvider {
  export async function queryUserByUnameAndPwd(username: string, password: string): Promise<IUser[]> {
    return Knex<IUser>("users").where({ username, password }).select();
  }

  export async function updateUser(user: IUser, clause: IUser, excludes?: string[]): Promise<number> {
    return Knex("users").where(clause).update(clipFileds(user, excludes));
  }

  export async function queryFriends(data: IUser) {
    return Knex("users as u")
      .where({
        "u.id": data.id
      })
      .join("friends as f", function () {
        this.on("u.id", "=", "f.user_id");
      })
      .join("users as u2", function () {
        this.on("u2.id", "=", "f.id");
      })
      .select("u2.*");
  }

  export async function queryGroups(user: IUser): Promise<IGroup[]> {
    return Knex("chatroom.groups as g")
      .where({ "u.id": user.id })
      .join("user_groups as ug", function () {
        this.on("ug.group_id", "=", "g.id");
      })
      .join("users as u", function () {
        this.on("u.id", "=", "ug.user_id");
      })
      .select("g.*");
  }
}
