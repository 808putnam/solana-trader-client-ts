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

goog.provide('proto.api.GetOrderStatusResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.api.OrderStatus');
goog.forwardDeclare('proto.api.Side');
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
proto.api.GetOrderStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetOrderStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetOrderStatusResponse.displayName = 'proto.api.GetOrderStatusResponse';
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
proto.api.GetOrderStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetOrderStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetOrderStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openorderaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientorderid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    quantityreleased: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    quantityremaining: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    fillprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    side: jspb.Message.getFieldWithDefault(msg, 8, 0),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 9, 0),
    orderprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0)
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
 * @return {!proto.api.GetOrderStatusResponse}
 */
proto.api.GetOrderStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetOrderStatusResponse;
  return proto.api.GetOrderStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetOrderStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetOrderStatusResponse}
 */
proto.api.GetOrderStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenorderaddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClientorderid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuantityreleased(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuantityremaining(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFillprice(value);
      break;
    case 8:
      var value = /** @type {!proto.api.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 9:
      var value = /** @type {!proto.api.OrderStatus} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOrderprice(value);
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
proto.api.GetOrderStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetOrderStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetOrderStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetOrderStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpenorderaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientorderid();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getQuantityreleased();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getQuantityremaining();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getFillprice();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getOrderstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getOrderprice();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.api.GetOrderStatusResponse.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string openOrderAddress = 2;
 * @return {string}
 */
proto.api.GetOrderStatusResponse.prototype.getOpenorderaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setOpenorderaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string orderID = 3;
 * @return {string}
 */
proto.api.GetOrderStatusResponse.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 clientOrderID = 4;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getClientorderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setClientorderid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional float quantityReleased = 5;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getQuantityreleased = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setQuantityreleased = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float quantityRemaining = 6;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getQuantityremaining = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setQuantityremaining = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float fillPrice = 7;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getFillprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setFillprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional Side side = 8;
 * @return {!proto.api.Side}
 */
proto.api.GetOrderStatusResponse.prototype.getSide = function() {
  return /** @type {!proto.api.Side} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.Side} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional OrderStatus orderStatus = 9;
 * @return {!proto.api.OrderStatus}
 */
proto.api.GetOrderStatusResponse.prototype.getOrderstatus = function() {
  return /** @type {!proto.api.OrderStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.api.OrderStatus} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setOrderstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional float orderPrice = 10;
 * @return {number}
 */
proto.api.GetOrderStatusResponse.prototype.getOrderprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetOrderStatusResponse} returns this
 */
proto.api.GetOrderStatusResponse.prototype.setOrderprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


