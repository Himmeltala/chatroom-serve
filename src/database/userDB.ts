import knex from "./config";
import { UserModel } from "../models/userModel";
import { cutModel, normalizeWhereClause } from "../service/db/userDbService";

export async function queryUserByUnameAndPwd(username: string, password: string): Promise<Array<UserModel>> {
  return knex<UserModel>("users").select().where({ username, password });
}

export async function updateUser(data: UserModel, exclude: Array<string>, whereClause: normalizeWhereClause) {
  return knex("users").where(whereClause()).update(cutModel(data, exclude));
}

export async function queryFriends(data: UserModel) {
  return knex("users as u")
    .where({ "u.id": data.id })
    .join("friends as f", function () {
      this.on("u.id", "=", "f.user_id");
    })
    .join("users as u2", function () {
      this.on("u2.id", "=", "f.id");
    })
    .select("u2.*");
}
