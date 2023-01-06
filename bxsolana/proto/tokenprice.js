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

goog.provide('proto.api.TokenPrice');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.api.Project');
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
proto.api.TokenPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TokenPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TokenPrice.displayName = 'proto.api.TokenPrice';
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
proto.api.TokenPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TokenPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TokenPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TokenPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tokenaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    project: jspb.Message.getFieldWithDefault(msg, 3, 0),
    buy: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    buysize: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    sell: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    sellsize: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
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
 * @return {!proto.api.TokenPrice}
 */
proto.api.TokenPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TokenPrice;
  return proto.api.TokenPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TokenPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TokenPrice}
 */
proto.api.TokenPrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenaddress(value);
      break;
    case 3:
      var value = /** @type {!proto.api.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuy(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuysize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSell(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSellsize(value);
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
proto.api.TokenPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TokenPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TokenPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TokenPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBuy();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getBuysize();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getSell();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getSellsize();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.api.TokenPrice.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tokenAddress = 2;
 * @return {string}
 */
proto.api.TokenPrice.prototype.getTokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setTokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {!proto.api.Project}
 */
proto.api.TokenPrice.prototype.getProject = function() {
  return /** @type {!proto.api.Project} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.Project} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional double buy = 4;
 * @return {number}
 */
proto.api.TokenPrice.prototype.getBuy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setBuy = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double buySize = 5;
 * @return {number}
 */
proto.api.TokenPrice.prototype.getBuysize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setBuysize = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double sell = 6;
 * @return {number}
 */
proto.api.TokenPrice.prototype.getSell = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setSell = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double sellSize = 7;
 * @return {number}
 */
proto.api.TokenPrice.prototype.getSellsize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.TokenPrice} returns this
 */
proto.api.TokenPrice.prototype.setSellsize = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


