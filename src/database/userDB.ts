import knex from "./config";
import { UserModel } from "../models/userModel";

/**
 * 查询用户列表的所有字段
 */
export async function queryUsersAll() {
  return knex("users").select();
}

/**
 * 通过用户名和密码查询用户所有字段
 * @param username 用户名
 * @param password 密码
 */
export async function queryUserAllByUname(username: string, password: string) {
  return knex<UserModel>("users").select().where({ username, password });
}

function cutModel(data: UserModel, exclude: Array<string>): UserModel {
  if (exclude.length > 0) {
    for (let key in exclude) {
      delete data[exclude[key]];
    }
  }
  return data;
}

interface normalizeWhereClause {
  (): UserModel;
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
