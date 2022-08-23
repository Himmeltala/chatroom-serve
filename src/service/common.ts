import { NormalizeResponse, NormalizeCodes } from "./normalizations";

export function inspectArrayIsEmpty(array: Array<any>, exist?: (data: any) => void): void {
  if (array.length > 0 && array) {
    exist && exist(array);
  }
}

export function formatResponseData(
  ops: {
    codes: NormalizeCodes;
    data: any;
  },
  clause: () => boolean
): NormalizeResponse {
  if (clause()) {
    return { status: ops.codes.well, data: ops.data };
  } else {
    return { status: ops.codes.bad, data: ops.data };
  }
}

export function clipFileds(data: any, excludes?: Array<string>): any {
  if (excludes ? excludes.length : false) {
    for (let key in excludes) {
      delete data[excludes[key]];
    }
  }
  return data;
}
