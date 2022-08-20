import { UserModel } from "../../models/userModel";

export function reduceFileds(data: UserModel, exclude: Array<string>): UserModel {
  if (exclude.length > 0) {
    for (let key in exclude) {
      delete data[exclude[key]];
    }
  }
  return data;
}

export interface normalizeWhereClause {
  (): UserModel;
}
