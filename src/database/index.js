import { database } from "./configs.js";

/**
 * 查询用户列表的所有字段
 * @returns {Promise<Knex.QueryBuilder<{}, DeferredKeySelection.ReplaceBase<TResult, {}>>>}
 */
export async function queryUsersAll() {
  return database.select().from("users");
}

/**
 * 通过用户名查询用户所有字段
 * @param uname 用户名
 * @returns {Promise<Knex.QueryBuilder<TRecord, TResult>>}
 */
export async function queryUserAllByUname(uname) {
  return database.select().from("users").where("username", uname);
}