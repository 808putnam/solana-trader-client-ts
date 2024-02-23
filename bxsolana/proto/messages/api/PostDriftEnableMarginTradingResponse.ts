import {
  Type as TransactionMessage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessage";
import {
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface PostDriftEnableMarginTradingResponse {
    transaction?: TransactionMessage;
  }
}
export type Type = $.api.PostDriftEnableMarginTradingResponse;

export function getDefaultValue(): $.api.PostDriftEnableMarginTradingResponse {
  return {
    transaction: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.PostDriftEnableMarginTradingResponse>): $.api.PostDriftEnableMarginTradingResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostDriftEnableMarginTradingResponse): unknown {
  const result: any = {};
  if (value.transaction !== undefined) result.transaction = encodeJson_1(value.transaction);
  return result;
}

export function decodeJson(value: any): $.api.PostDriftEnableMarginTradingResponse {
  const result = getDefaultValue();
  if (value.transaction !== undefined) result.transaction = decodeJson_1(value.transaction);
  return result;
}

export function encodeBinary(value: $.api.PostDriftEnableMarginTradingResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostDriftEnableMarginTradingResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.transaction = value;
  }
  return result;
}
