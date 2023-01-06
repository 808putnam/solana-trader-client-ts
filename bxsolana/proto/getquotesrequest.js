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

goog.provide('proto.api.GetQuotesRequest');

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
proto.api.GetQuotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetQuotesRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetQuotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetQuotesRequest.displayName = 'proto.api.GetQuotesRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetQuotesRequest.repeatedFields_ = [6];



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
proto.api.GetQuotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetQuotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetQuotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    intoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outtoken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    slippage: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    projectsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.api.GetQuotesRequest}
 */
proto.api.GetQuotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetQuotesRequest;
  return proto.api.GetQuotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetQuotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetQuotesRequest}
 */
proto.api.GetQuotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntoken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOuttoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInamount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSlippage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.api.Project>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProjects(values[i]);
      }
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
proto.api.GetQuotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetQuotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetQuotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOuttoken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSlippage();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
};


/**
 * optional string inToken = 1;
 * @return {string}
 */
proto.api.GetQuotesRequest.prototype.getIntoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setIntoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string outToken = 2;
 * @return {string}
 */
proto.api.GetQuotesRequest.prototype.getOuttoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setOuttoken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double inAmount = 3;
 * @return {number}
 */
proto.api.GetQuotesRequest.prototype.getInamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setInamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double slippage = 4;
 * @return {number}
 */
proto.api.GetQuotesRequest.prototype.getSlippage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setSlippage = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.api.GetQuotesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated Project projects = 6;
 * @return {!Array<!proto.api.Project>}
 */
proto.api.GetQuotesRequest.prototype.getProjectsList = function() {
  return /** @type {!Array<!proto.api.Project>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.api.Project>} value
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.api.Project} value
 * @param {number=} opt_index
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.addProjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetQuotesRequest} returns this
 */
proto.api.GetQuotesRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


