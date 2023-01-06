// source: api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.api.GetSwapsStreamResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.api.GetSwapsStreamUpdate');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetSwapsStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetSwapsStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetSwapsStreamResponse.displayName = 'proto.api.GetSwapsStreamResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetSwapsStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetSwapsStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetSwapsStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetSwapsStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    swap: (f = msg.getSwap()) && proto.api.GetSwapsStreamUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetSwapsStreamResponse}
 */
proto.api.GetSwapsStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetSwapsStreamResponse;
  return proto.api.GetSwapsStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetSwapsStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetSwapsStreamResponse}
 */
proto.api.GetSwapsStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSlot(value);
      break;
    case 2:
      var value = new proto.api.GetSwapsStreamUpdate;
      reader.readMessage(value,proto.api.GetSwapsStreamUpdate.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetSwapsStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetSwapsStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetSwapsStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetSwapsStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.GetSwapsStreamUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 slot = 1;
 * @return {number}
 */
proto.api.GetSwapsStreamResponse.prototype.getSlot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetSwapsStreamResponse} returns this
 */
proto.api.GetSwapsStreamResponse.prototype.setSlot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GetSwapsStreamUpdate swap = 2;
 * @return {?proto.api.GetSwapsStreamUpdate}
 */
proto.api.GetSwapsStreamResponse.prototype.getSwap = function() {
  return /** @type{?proto.api.GetSwapsStreamUpdate} */ (
    jspb.Message.getWrapperField(this, proto.api.GetSwapsStreamUpdate, 2));
};


/**
 * @param {?proto.api.GetSwapsStreamUpdate|undefined} value
 * @return {!proto.api.GetSwapsStreamResponse} returns this
*/
proto.api.GetSwapsStreamResponse.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.GetSwapsStreamResponse} returns this
 */
proto.api.GetSwapsStreamResponse.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetSwapsStreamResponse.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 2) != null;
};


