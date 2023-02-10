import {
  Type as FileDescriptorProto,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./FileDescriptorProto";
import {
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
} from "../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.protobuf {
  export interface FileDescriptorSet {
    file: FileDescriptorProto[];
  }
}
export type Type = $.google.protobuf.FileDescriptorSet;

export function getDefaultValue(): $.google.protobuf.FileDescriptorSet {
  return {
    file: [],
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.FileDescriptorSet>): $.google.protobuf.FileDescriptorSet {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.FileDescriptorSet): unknown {
  const result: any = {};
  result.file = value.file.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.google.protobuf.FileDescriptorSet {
  const result = getDefaultValue();
  result.file = value.file?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.google.protobuf.FileDescriptorSet): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.file) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.FileDescriptorSet {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.file = value as any;
  }
  return result;
}
