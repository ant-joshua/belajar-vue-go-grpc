/**
 * @fileoverview gRPC-Web generated client stub for private
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.private = require('./category_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.private.CategoryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.private.CategoryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.private.GetAllResponse>}
 */
const methodDescriptor_CategoryService_GetAll = new grpc.web.MethodDescriptor(
  '/private.CategoryService/GetAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.private.GetAllResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.private.GetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.private.GetAllResponse>}
 */
const methodInfo_CategoryService_GetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.private.GetAllResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.private.GetAllResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.private.GetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.private.GetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.private.CategoryServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/private.CategoryService/GetAll',
      request,
      metadata || {},
      methodDescriptor_CategoryService_GetAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.private.GetAllResponse>}
 *     A native promise that resolves to the response
 */
proto.private.CategoryServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/private.CategoryService/GetAll',
      request,
      metadata || {},
      methodDescriptor_CategoryService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.private.CategoryCreateRequest,
 *   !proto.private.Category>}
 */
const methodDescriptor_CategoryService_Create = new grpc.web.MethodDescriptor(
  '/private.CategoryService/Create',
  grpc.web.MethodType.UNARY,
  proto.private.CategoryCreateRequest,
  proto.private.Category,
  /**
   * @param {!proto.private.CategoryCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.private.Category.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.private.CategoryCreateRequest,
 *   !proto.private.Category>}
 */
const methodInfo_CategoryService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.private.Category,
  /**
   * @param {!proto.private.CategoryCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.private.Category.deserializeBinary
);


/**
 * @param {!proto.private.CategoryCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.private.Category)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.private.Category>|undefined}
 *     The XHR Node Readable Stream
 */
proto.private.CategoryServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/private.CategoryService/Create',
      request,
      metadata || {},
      methodDescriptor_CategoryService_Create,
      callback);
};


/**
 * @param {!proto.private.CategoryCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.private.Category>}
 *     A native promise that resolves to the response
 */
proto.private.CategoryServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/private.CategoryService/Create',
      request,
      metadata || {},
      methodDescriptor_CategoryService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.private.CategoryUpdateRequest,
 *   !proto.private.Category>}
 */
const methodDescriptor_CategoryService_Update = new grpc.web.MethodDescriptor(
  '/private.CategoryService/Update',
  grpc.web.MethodType.UNARY,
  proto.private.CategoryUpdateRequest,
  proto.private.Category,
  /**
   * @param {!proto.private.CategoryUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.private.Category.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.private.CategoryUpdateRequest,
 *   !proto.private.Category>}
 */
const methodInfo_CategoryService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.private.Category,
  /**
   * @param {!proto.private.CategoryUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.private.Category.deserializeBinary
);


/**
 * @param {!proto.private.CategoryUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.private.Category)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.private.Category>|undefined}
 *     The XHR Node Readable Stream
 */
proto.private.CategoryServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/private.CategoryService/Update',
      request,
      metadata || {},
      methodDescriptor_CategoryService_Update,
      callback);
};


/**
 * @param {!proto.private.CategoryUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.private.Category>}
 *     A native promise that resolves to the response
 */
proto.private.CategoryServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/private.CategoryService/Update',
      request,
      metadata || {},
      methodDescriptor_CategoryService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.private.CategoryDeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CategoryService_Delete = new grpc.web.MethodDescriptor(
  '/private.CategoryService/Delete',
  grpc.web.MethodType.UNARY,
  proto.private.CategoryDeleteRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.private.CategoryDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.private.CategoryDeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CategoryService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.private.CategoryDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.private.CategoryDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.private.CategoryServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/private.CategoryService/Delete',
      request,
      metadata || {},
      methodDescriptor_CategoryService_Delete,
      callback);
};


/**
 * @param {!proto.private.CategoryDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.private.CategoryServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/private.CategoryService/Delete',
      request,
      metadata || {},
      methodDescriptor_CategoryService_Delete);
};


module.exports = proto.private;

