/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

/*
* The following modules are intentionally not exported: function-object, napi, unary
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name assert
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/ndarray/base/assert}
*/
setReadOnly( ns, 'assert', require( '@stdlib/ndarray-base-assert/dist' ) );

/**
* @name assign
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assign}
*/
setReadOnly( ns, 'assign', require( '@stdlib/ndarray-base-assign/dist' ) );

/**
* @name binaryLoopOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/binary-loop-interchange-order}
*/
setReadOnly( ns, 'binaryLoopOrder', require( '@stdlib/ndarray-base-binary-loop-interchange-order/dist' ) );

/**
* @name binaryBlockSize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/binary-tiling-block-size}
*/
setReadOnly( ns, 'binaryBlockSize', require( '@stdlib/ndarray-base-binary-tiling-block-size/dist' ) );

/**
* @name bind2vind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/bind2vind}
*/
setReadOnly( ns, 'bind2vind', require( '@stdlib/ndarray-base-bind2vind/dist' ) );

/**
* @name broadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/broadcast-array}
*/
setReadOnly( ns, 'broadcastArray', require( '@stdlib/ndarray-base-broadcast-array/dist' ) );

/**
* @name broadcastArrays
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/broadcast-arrays}
*/
setReadOnly( ns, 'broadcastArrays', require( '@stdlib/ndarray-base-broadcast-arrays/dist' ) );

/**
* @name broadcastScalar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/broadcast-scalar}
*/
setReadOnly( ns, 'broadcastScalar', require( '@stdlib/ndarray-base-broadcast-scalar/dist' ) );

/**
* @name broadcastShapes
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/broadcast-shapes}
*/
setReadOnly( ns, 'broadcastShapes', require( '@stdlib/ndarray-base-broadcast-shapes/dist' ) );

/**
* @name buffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/buffer}
*/
setReadOnly( ns, 'buffer', require( '@stdlib/ndarray-base-buffer/dist' ) );

/**
* @name bufferCtors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/buffer-ctors}
*/
setReadOnly( ns, 'bufferCtors', require( '@stdlib/ndarray-base-buffer-ctors/dist' ) );

/**
* @name bufferDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/buffer-dtype}
*/
setReadOnly( ns, 'bufferDataType', require( '@stdlib/ndarray-base-buffer-dtype/dist' ) );

/**
* @name bufferDataTypeEnum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/buffer-dtype-enum}
*/
setReadOnly( ns, 'bufferDataTypeEnum', require( '@stdlib/ndarray-base-buffer-dtype-enum/dist' ) );

/**
* @name bytesPerElement
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/bytes-per-element}
*/
setReadOnly( ns, 'bytesPerElement', require( '@stdlib/ndarray-base-bytes-per-element/dist' ) );

/**
* @name char2dtype
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/char2dtype}
*/
setReadOnly( ns, 'char2dtype', require( '@stdlib/ndarray-base-char2dtype/dist' ) );

/**
* @name clampIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/clamp-index}
*/
setReadOnly( ns, 'clampIndex', require( '@stdlib/ndarray-base-clamp-index/dist' ) );

/**
* @name ndarray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ctor}
*/
setReadOnly( ns, 'ndarray', require( '@stdlib/ndarray-base-ctor/dist' ) );

/**
* @name data
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/data-buffer}
*/
setReadOnly( ns, 'data', require( '@stdlib/ndarray-base-data-buffer/dist' ) );

/**
* @name dtype
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype}
*/
setReadOnly( ns, 'dtype', require( '@stdlib/ndarray-base-dtype/dist' ) );

/**
* @name dtypeChar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-char}
*/
setReadOnly( ns, 'dtypeChar', require( '@stdlib/ndarray-base-dtype-char/dist' ) );

/**
* @name dtypeDesc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-desc}
*/
setReadOnly( ns, 'dtypeDesc', require( '@stdlib/ndarray-base-dtype-desc/dist' ) );

/**
* @name dtypeEnum2Str
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-enum2str}
*/
setReadOnly( ns, 'dtypeEnum2Str', require( '@stdlib/ndarray-base-dtype-enum2str/dist' ) );

/**
* @name dtypeResolveEnum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-resolve-enum}
*/
setReadOnly( ns, 'dtypeResolveEnum', require( '@stdlib/ndarray-base-dtype-resolve-enum/dist' ) );

/**
* @name dtypeResolveStr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-resolve-str}
*/
setReadOnly( ns, 'dtypeResolveStr', require( '@stdlib/ndarray-base-dtype-resolve-str/dist' ) );

/**
* @name dtypeStr2Enum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype-str2enum}
*/
setReadOnly( ns, 'dtypeStr2Enum', require( '@stdlib/ndarray-base-dtype-str2enum/dist' ) );

/**
* @name dtype2c
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtype2c}
*/
setReadOnly( ns, 'dtype2c', require( '@stdlib/ndarray-base-dtype2c/dist' ) );

/**
* @name dtypes2signatures
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/dtypes2signatures}
*/
setReadOnly( ns, 'dtypes2signatures', require( '@stdlib/ndarray-base-dtypes2signatures/dist' ) );

/**
* @name empty
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/empty}
*/
setReadOnly( ns, 'empty', require( '@stdlib/ndarray-base-empty/dist' ) );

/**
* @name emptyLike
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/empty-like}
*/
setReadOnly( ns, 'emptyLike', require( '@stdlib/ndarray-base-empty-like/dist' ) );

/**
* @name expandDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/expand-dimensions}
*/
setReadOnly( ns, 'expandDimensions', require( '@stdlib/ndarray-base-expand-dimensions/dist' ) );

/**
* @name fill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/fill}
*/
setReadOnly( ns, 'fill', require( '@stdlib/ndarray-base-fill/dist' ) );

/**
* @name flag
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/flag}
*/
setReadOnly( ns, 'flag', require( '@stdlib/ndarray-base-flag/dist' ) );

/**
* @name flags
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/flags}
*/
setReadOnly( ns, 'flags', require( '@stdlib/ndarray-base-flags/dist' ) );

/**
* @name fliplr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/fliplr}
*/
setReadOnly( ns, 'fliplr', require( '@stdlib/ndarray-base-fliplr/dist' ) );

/**
* @name flipud
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/flipud}
*/
setReadOnly( ns, 'flipud', require( '@stdlib/ndarray-base-flipud/dist' ) );

/**
* @name forEach
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/for-each}
*/
setReadOnly( ns, 'forEach', require( '@stdlib/ndarray-base-for-each/dist' ) );

/**
* @name scalar2ndarray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/from-scalar}
*/
setReadOnly( ns, 'scalar2ndarray', require( '@stdlib/ndarray-base-from-scalar/dist' ) );

/**
* @name scalar2ndarrayLike
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/from-scalar-like}
*/
setReadOnly( ns, 'scalar2ndarrayLike', require( '@stdlib/ndarray-base-from-scalar-like/dist' ) );

/**
* @name ind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ind}
*/
setReadOnly( ns, 'ind', require( '@stdlib/ndarray-base-ind/dist' ) );

/**
* @name ind2sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ind2sub}
*/
setReadOnly( ns, 'ind2sub', require( '@stdlib/ndarray-base-ind2sub/dist' ) );

/**
* @name iterationOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/iteration-order}
*/
setReadOnly( ns, 'iterationOrder', require( '@stdlib/ndarray-base-iteration-order/dist' ) );

/**
* @name map
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/map}
*/
setReadOnly( ns, 'map', require( '@stdlib/ndarray-base-map/dist' ) );

/**
* @name maxViewBufferIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/max-view-buffer-index}
*/
setReadOnly( ns, 'maxViewBufferIndex', require( '@stdlib/ndarray-base-max-view-buffer-index/dist' ) );

/**
* @name maybeBroadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/maybe-broadcast-array}
*/
setReadOnly( ns, 'maybeBroadcastArray', require( '@stdlib/ndarray-base-maybe-broadcast-array/dist' ) );

/**
* @name maybeBroadcastArrays
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/maybe-broadcast-arrays}
*/
setReadOnly( ns, 'maybeBroadcastArrays', require( '@stdlib/ndarray-base-maybe-broadcast-arrays/dist' ) );

/**
* @name metaDataProps
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/meta-data-props}
*/
setReadOnly( ns, 'metaDataProps', require( '@stdlib/ndarray-base-meta-data-props/dist' ) );

/**
* @name minSignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/min-signed-integer-dtype}
*/
setReadOnly( ns, 'minSignedIntegerDataType', require( '@stdlib/ndarray-base-min-signed-integer-dtype/dist' ) );

/**
* @name minUnsignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/min-unsigned-integer-dtype}
*/
setReadOnly( ns, 'minUnsignedIntegerDataType', require( '@stdlib/ndarray-base-min-unsigned-integer-dtype/dist' ) );

/**
* @name minViewBufferIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/min-view-buffer-index}
*/
setReadOnly( ns, 'minViewBufferIndex', require( '@stdlib/ndarray-base-min-view-buffer-index/dist' ) );

/**
* @name minmaxViewBufferIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/minmax-view-buffer-index}
*/
setReadOnly( ns, 'minmaxViewBufferIndex', require( '@stdlib/ndarray-base-minmax-view-buffer-index/dist' ) );

/**
* @name ndarraylike2ndarray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ndarraylike2ndarray}
*/
setReadOnly( ns, 'ndarraylike2ndarray', require( '@stdlib/ndarray-base-ndarraylike2ndarray/dist' ) );

/**
* @name ndarraylike2object
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ndarraylike2object}
*/
setReadOnly( ns, 'ndarraylike2object', require( '@stdlib/ndarray-base-ndarraylike2object/dist' ) );

/**
* @name ndims
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/ndims}
*/
setReadOnly( ns, 'ndims', require( '@stdlib/ndarray-base-ndims/dist' ) );

/**
* @name nextCartesianIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/next-cartesian-index}
*/
setReadOnly( ns, 'nextCartesianIndex', require( '@stdlib/ndarray-base-next-cartesian-index/dist' ) );

/**
* @name nonsingletonDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/nonsingleton-dimensions}
*/
setReadOnly( ns, 'nonsingletonDimensions', require( '@stdlib/ndarray-base-nonsingleton-dimensions/dist' ) );

/**
* @name normalizeIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/normalize-index}
*/
setReadOnly( ns, 'normalizeIndex', require( '@stdlib/ndarray-base-normalize-index/dist' ) );

/**
* @name nullary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/nullary}
*/
setReadOnly( ns, 'nullary', require( '@stdlib/ndarray-base-nullary/dist' ) );

/**
* @name nullaryLoopOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/nullary-loop-interchange-order}
*/
setReadOnly( ns, 'nullaryLoopOrder', require( '@stdlib/ndarray-base-nullary-loop-interchange-order/dist' ) );

/**
* @name nullaryBlockSize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/nullary-tiling-block-size}
*/
setReadOnly( ns, 'nullaryBlockSize', require( '@stdlib/ndarray-base-nullary-tiling-block-size/dist' ) );

/**
* @name numel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/numel}
*/
setReadOnly( ns, 'numel', require( '@stdlib/ndarray-base-numel/dist' ) );

/**
* @name numelDimension
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/numel-dimension}
*/
setReadOnly( ns, 'numelDimension', require( '@stdlib/ndarray-base-numel-dimension/dist' ) );

/**
* @name offset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/offset}
*/
setReadOnly( ns, 'offset', require( '@stdlib/ndarray-base-offset/dist' ) );

/**
* @name order
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/order}
*/
setReadOnly( ns, 'order', require( '@stdlib/ndarray-base-order/dist' ) );

/**
* @name outputPolicyEnum2Str
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/output-policy-enum2str}
*/
setReadOnly( ns, 'outputPolicyEnum2Str', require( '@stdlib/ndarray-base-output-policy-enum2str/dist' ) );

/**
* @name outputPolicyResolveEnum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/output-policy-resolve-enum}
*/
setReadOnly( ns, 'outputPolicyResolveEnum', require( '@stdlib/ndarray-base-output-policy-resolve-enum/dist' ) );

/**
* @name outputPolicyResolveStr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/output-policy-resolve-str}
*/
setReadOnly( ns, 'outputPolicyResolveStr', require( '@stdlib/ndarray-base-output-policy-resolve-str/dist' ) );

/**
* @name outputPolicyStr2Enum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/output-policy-str2enum}
*/
setReadOnly( ns, 'outputPolicyStr2Enum', require( '@stdlib/ndarray-base-output-policy-str2enum/dist' ) );

/**
* @name prependSingletonDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/prepend-singleton-dimensions}
*/
setReadOnly( ns, 'prependSingletonDimensions', require( '@stdlib/ndarray-base-prepend-singleton-dimensions/dist' ) );

/**
* @name removeSingletonDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/remove-singleton-dimensions}
*/
setReadOnly( ns, 'removeSingletonDimensions', require( '@stdlib/ndarray-base-remove-singleton-dimensions/dist' ) );

/**
* @name reverse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/reverse}
*/
setReadOnly( ns, 'reverse', require( '@stdlib/ndarray-base-reverse/dist' ) );

/**
* @name reverseDimension
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/reverse-dimension}
*/
setReadOnly( ns, 'reverseDimension', require( '@stdlib/ndarray-base-reverse-dimension/dist' ) );

/**
* @name serializeMetaData
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/serialize-meta-data}
*/
setReadOnly( ns, 'serializeMetaData', require( '@stdlib/ndarray-base-serialize-meta-data/dist' ) );

/**
* @name shape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/shape}
*/
setReadOnly( ns, 'shape', require( '@stdlib/ndarray-base-shape/dist' ) );

/**
* @name shape2strides
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/shape2strides}
*/
setReadOnly( ns, 'shape2strides', require( '@stdlib/ndarray-base-shape2strides/dist' ) );

/**
* @name singletonDimensions
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/singleton-dimensions}
*/
setReadOnly( ns, 'singletonDimensions', require( '@stdlib/ndarray-base-singleton-dimensions/dist' ) );

/**
* @name slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/slice}
*/
setReadOnly( ns, 'slice', require( '@stdlib/ndarray-base-slice/dist' ) );

/**
* @name sliceAssign
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/slice-assign}
*/
setReadOnly( ns, 'sliceAssign', require( '@stdlib/ndarray-base-slice-assign/dist' ) );

/**
* @name sliceDimension
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/slice-dimension}
*/
setReadOnly( ns, 'sliceDimension', require( '@stdlib/ndarray-base-slice-dimension/dist' ) );

/**
* @name sliceDimensionFrom
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/slice-dimension-from}
*/
setReadOnly( ns, 'sliceDimensionFrom', require( '@stdlib/ndarray-base-slice-dimension-from/dist' ) );

/**
* @name sliceDimensionTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/slice-dimension-to}
*/
setReadOnly( ns, 'sliceDimensionTo', require( '@stdlib/ndarray-base-slice-dimension-to/dist' ) );

/**
* @name sliceFrom
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/slice-from}
*/
setReadOnly( ns, 'sliceFrom', require( '@stdlib/ndarray-base-slice-from/dist' ) );

/**
* @name sliceTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/slice-to}
*/
setReadOnly( ns, 'sliceTo', require( '@stdlib/ndarray-base-slice-to/dist' ) );

/**
* @name stride
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/stride}
*/
setReadOnly( ns, 'stride', require( '@stdlib/ndarray-base-stride/dist' ) );

/**
* @name strides
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/strides}
*/
setReadOnly( ns, 'strides', require( '@stdlib/ndarray-base-strides/dist' ) );

/**
* @name strides2offset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/strides2offset}
*/
setReadOnly( ns, 'strides2offset', require( '@stdlib/ndarray-base-strides2offset/dist' ) );

/**
* @name strides2order
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/strides2order}
*/
setReadOnly( ns, 'strides2order', require( '@stdlib/ndarray-base-strides2order/dist' ) );

/**
* @name sub2ind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/sub2ind}
*/
setReadOnly( ns, 'sub2ind', require( '@stdlib/ndarray-base-sub2ind/dist' ) );

/**
* @name ndarray2array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/to-array}
*/
setReadOnly( ns, 'ndarray2array', require( '@stdlib/ndarray-base-to-array/dist' ) );

/**
* @name toReversed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/to-reversed}
*/
setReadOnly( ns, 'toReversed', require( '@stdlib/ndarray-base-to-reversed/dist' ) );

/**
* @name transpose
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/transpose}
*/
setReadOnly( ns, 'transpose', require( '@stdlib/ndarray-base-transpose/dist' ) );

/**
* @name unary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/unary}
*/
setReadOnly( ns, 'unary', require( '@stdlib/ndarray-base-unary/dist' ) );

/**
* @name unaryBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/unary-by}
*/
setReadOnly( ns, 'unaryBy', require( '@stdlib/ndarray-base-unary-by/dist' ) );

/**
* @name unaryLoopOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/unary-loop-interchange-order}
*/
setReadOnly( ns, 'unaryLoopOrder', require( '@stdlib/ndarray-base-unary-loop-interchange-order/dist' ) );

/**
* @name unaryOutputDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/unary-output-dtype}
*/
setReadOnly( ns, 'unaryOutputDataType', require( '@stdlib/ndarray-base-unary-output-dtype/dist' ) );

/**
* @name unaryBlockSize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/unary-tiling-block-size}
*/
setReadOnly( ns, 'unaryBlockSize', require( '@stdlib/ndarray-base-unary-tiling-block-size/dist' ) );

/**
* @name vind2bind
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/vind2bind}
*/
setReadOnly( ns, 'vind2bind', require( '@stdlib/ndarray-base-vind2bind/dist' ) );

/**
* @name wrapIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/wrap-index}
*/
setReadOnly( ns, 'wrapIndex', require( '@stdlib/ndarray-base-wrap-index/dist' ) );

/**
* @name zeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/zeros}
*/
setReadOnly( ns, 'zeros', require( '@stdlib/ndarray-base-zeros/dist' ) );

/**
* @name zerosLike
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/zeros-like}
*/
setReadOnly( ns, 'zerosLike', require( '@stdlib/ndarray-base-zeros-like/dist' ) );


// EXPORTS //

module.exports = ns;
