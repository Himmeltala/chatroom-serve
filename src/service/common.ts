import { NormalizeResponse, NormalizeCodes } from "./normalizations";

export function inspectArrayIsEmpty<T>(array: Array<T>, exist?: (data: Array<T>) => void): void {
  if (array ? array.length > 0 : false) exist && exist(array);
}

export function formatResponseData(ops: { codes: NormalizeCodes; data: any }, clause: () => boolean): NormalizeResponse {
  if (clause()) return { status: ops.codes.well, data: ops.data };
  else return { status: ops.codes.bad, data: ops.data };
}

export function clipFileds<T>(data: T, excludes?: Array<string>): T {
  if (excludes ? excludes.length : false) {
    for (let key in excludes) delete data[excludes[key]];
  }
  return data;
}
