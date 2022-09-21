import knex from "./database";
import { IUser, IGroup } from "../types";
import { clipFileds } from "../service/common";

export async function queryUserByUnameAndPwd(username: string, password: string): Promise<Array<IUser>> {
  return knex<IUser>("users").where({ username, password }).select();
}

export async function updateUser(user: IUser, clause: IUser, excludes?: Array<string>): Promise<number> {
  return knex("users").where(clause).update(clipFileds(user, excludes));
}

export async function queryFriends(data: IUser) {
  return knex("users as u")
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

export async function queryGroups(user: IUser): Promise<Array<IGroup>> {
  return knex("chatroom.groups as g")
    .where({ "u.id": user.id })
    .join("user_groups as ug", function () {
      this.on("ug.group_id", "=", "g.id");
    })
    .join("users as u", function () {
      this.on("u.id", "=", "ug.user_id");
    })
    .select("g.*");
}
