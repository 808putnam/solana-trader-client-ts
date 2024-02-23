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
  export interface PostCancelPerpOrdersResponse {
    transactions: TransactionMessage[];
  }
}
export type Type = $.api.PostCancelPerpOrdersResponse;

export function getDefaultValue(): $.api.PostCancelPerpOrdersResponse {
  return {
    transactions: [],
  };
}

export function createValue(partialValue: Partial<$.api.PostCancelPerpOrdersResponse>): $.api.PostCancelPerpOrdersResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostCancelPerpOrdersResponse): unknown {
  const result: any = {};
  result.transactions = value.transactions.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.PostCancelPerpOrdersResponse {
  const result = getDefaultValue();
  result.transactions = value.transactions?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.PostCancelPerpOrdersResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.transactions) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostCancelPerpOrdersResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.transactions = value as any;
  }
  return result;
}
