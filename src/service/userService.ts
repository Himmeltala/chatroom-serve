import { UserModel } from "../models/userModel";

interface normalizeResponse {
  status?: number;
  data?: any;
}

export function handleSelect(data: Array<UserModel>, success?: () => void): normalizeResponse {
  let status = 404;
  if (data.length > 0) {
    success ? success() : "";
    status = 200;
  }
  return { status, data };
}
export function handleUpdateUser(flag: number): normalizeResponse {
  let status = 404;
  if (flag === 1) {
    status = 200;
  }
  return { status };
}
