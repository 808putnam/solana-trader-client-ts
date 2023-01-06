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

goog.provide('proto.api.GetQuotesStreamRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.api.TokenPair');

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
proto.api.GetQuotesStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetQuotesStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.api.GetQuotesStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetQuotesStreamRequest.displayName = 'proto.api.GetQuotesStreamRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetQuotesStreamRequest.repeatedFields_ = [1,2];



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
proto.api.GetQuotesStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetQuotesStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetQuotesStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    tokenpairsList: jspb.Message.toObjectList(msg.getTokenpairsList(),
    proto.api.TokenPair.toObject, includeInstance)
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
 * @return {!proto.api.GetQuotesStreamRequest}
 */
proto.api.GetQuotesStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetQuotesStreamRequest;
  return proto.api.GetQuotesStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetQuotesStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetQuotesStreamRequest}
 */
proto.api.GetQuotesStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.Project>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addProjects(values[i]);
      }
      break;
    case 2:
      var value = new proto.api.TokenPair;
      reader.readMessage(value,proto.api.TokenPair.deserializeBinaryFromReader);
      msg.addTokenpairs(value);
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
proto.api.GetQuotesStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetQuotesStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetQuotesStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetQuotesStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getTokenpairsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.TokenPair.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.api.Project>}
 */
proto.api.GetQuotesStreamRequest.prototype.getProjectsList = function() {
  return /** @type {!Array<!proto.api.Project>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.Project>} value
 * @return {!proto.api.GetQuotesStreamRequest} returns this
 */
proto.api.GetQuotesStreamRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.Project} value
 * @param {number=} opt_index
 * @return {!proto.api.GetQuotesStreamRequest} returns this
 */
proto.api.GetQuotesStreamRequest.prototype.addProjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetQuotesStreamRequest} returns this
 */
proto.api.GetQuotesStreamRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * repeated TokenPair tokenPairs = 2;
 * @return {!Array<!proto.api.TokenPair>}
 */
proto.api.GetQuotesStreamRequest.prototype.getTokenpairsList = function() {
  return /** @type{!Array<!proto.api.TokenPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.TokenPair, 2));
};


/**
 * @param {!Array<!proto.api.TokenPair>} value
 * @return {!proto.api.GetQuotesStreamRequest} returns this
*/
proto.api.GetQuotesStreamRequest.prototype.setTokenpairsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.TokenPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.TokenPair}
 */
proto.api.GetQuotesStreamRequest.prototype.addTokenpairs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.TokenPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.GetQuotesStreamRequest} returns this
 */
proto.api.GetQuotesStreamRequest.prototype.clearTokenpairsList = function() {
  return this.setTokenpairsList([]);
};


