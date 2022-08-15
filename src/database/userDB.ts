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