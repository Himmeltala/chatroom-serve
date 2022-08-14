import { database } from "./configs";

/**
 * 查询用户列表的所有字段
 */
export async function queryUsersAll() {
  return database.select().from("users");
}

/**
 * 通过用户名查询用户所有字段
 * @param uname 用户名
 */
export async function queryUserAllByUname(uname) {
  return database.select().from("users").where("username", uname);
}