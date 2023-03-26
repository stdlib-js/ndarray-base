/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import assert = require( '@stdlib/ndarray-base-assert' );
import binaryLoopOrder = require( '@stdlib/ndarray-base-binary-loop-interchange-order' );
import binaryBlockSize = require( '@stdlib/ndarray-base-binary-tiling-block-size' );
import bind2vind = require( '@stdlib/ndarray-base-bind2vind' );
import broadcastArray = require( '@stdlib/ndarray-base-broadcast-array' );
import broadcastScalar = require( '@stdlib/ndarray-base-broadcast-scalar' );
import broadcastShapes = require( '@stdlib/ndarray-base-broadcast-shapes' );
import buffer = require( '@stdlib/ndarray-base-buffer' );
import bufferCtors = require( '@stdlib/ndarray-base-buffer-ctors' );
import bufferDataType = require( '@stdlib/ndarray-base-buffer-dtype' );
import bufferDataTypeEnum = require( '@stdlib/ndarray-base-buffer-dtype-enum' );
import bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
import char2dtype = require( '@stdlib/ndarray-base-char2dtype' );
import clampIndex = require( '@stdlib/ndarray-base-clamp-index' );
import ndarray = require( '@stdlib/ndarray-base-ctor' );
import dtypeChar = require( '@stdlib/ndarray-base-dtype-char' );
import dtypeDesc = require( '@stdlib/ndarray-base-dtype-desc' );
import dtypeEnum2Str = require( '@stdlib/ndarray-base-dtype-enum2str' );
import dtypeResolveEnum = require( '@stdlib/ndarray-base-dtype-resolve-enum' );
import dtypeResolveStr = require( '@stdlib/ndarray-base-dtype-resolve-str' );
import dtypeStr2Enum = require( '@stdlib/ndarray-base-dtype-str2enum' );
import dtype2c = require( '@stdlib/ndarray-base-dtype2c' );
import dtypes2signatures = require( '@stdlib/ndarray-base-dtypes2signatures' );
import expandDimensions = require( '@stdlib/ndarray-base-expand-dimensions' );
import scalar2ndarray = require( '@stdlib/ndarray-base-from-scalar' );
import ind = require( '@stdlib/ndarray-base-ind' );
import ind2sub = require( '@stdlib/ndarray-base-ind2sub' );
import iterationOrder = require( '@stdlib/ndarray-base-iteration-order' );
import maxViewBufferIndex = require( '@stdlib/ndarray-base-max-view-buffer-index' );
import maybeBroadcastArray = require( '@stdlib/ndarray-base-maybe-broadcast-array' );
import metaDataProps = require( '@stdlib/ndarray-base-meta-data-props' );
import minViewBufferIndex = require( '@stdlib/ndarray-base-min-view-buffer-index' );
import minmaxViewBufferIndex = require( '@stdlib/ndarray-base-minmax-view-buffer-index' );
import ndarraylike2object = require( '@stdlib/ndarray-base-ndarraylike2object' );
import nonsingletonDimensions = require( '@stdlib/ndarray-base-nonsingleton-dimensions' );
import nullary = require( '@stdlib/ndarray-base-nullary' );
import nullaryLoopOrder = require( '@stdlib/ndarray-base-nullary-loop-interchange-order' );
import nullaryBlockSize = require( '@stdlib/ndarray-base-nullary-tiling-block-size' );
import numel = require( '@stdlib/ndarray-base-numel' );
import prependSingletonDimensions = require( '@stdlib/ndarray-base-prepend-singleton-dimensions' );
import removeSingletonDimensions = require( '@stdlib/ndarray-base-remove-singleton-dimensions' );
import serializeMetaData = require( '@stdlib/ndarray-base-serialize-meta-data' );
import shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
import singletonDimensions = require( '@stdlib/ndarray-base-singleton-dimensions' );
import strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
import strides2order = require( '@stdlib/ndarray-base-strides2order' );
import sub2ind = require( '@stdlib/ndarray-base-sub2ind' );
import ndarray2array = require( '@stdlib/ndarray-base-to-array' );
import transpose = require( '@stdlib/ndarray-base-transpose' );
import unary = require( '@stdlib/ndarray-base-unary' );
import unaryBy = require( '@stdlib/ndarray-base-unary-by' );
import unaryLoopOrder = require( '@stdlib/ndarray-base-unary-loop-interchange-order' );
import unaryBlockSize = require( '@stdlib/ndarray-base-unary-tiling-block-size' );
import vind2bind = require( '@stdlib/ndarray-base-vind2bind' );
import wrapIndex = require( '@stdlib/ndarray-base-wrap-index' );
import zeros = require( '@stdlib/ndarray-base-zeros' );
import zerosLike = require( '@stdlib/ndarray-base-zeros-like' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Base ndarray assertion utilities.
	*/
	assert: typeof assert;

	/**
	* Reorders ndarray dimensions and associated strides for loop interchange.
	*
	* ## Notes
	*
	* -   The returned object has the following properties:
	*
	*     -   **sh**: dimensions sorted in loop order.
	*     -   **sx**: first input ndarray strides sorted in loop order.
	*     -   **sy**: second input ndarray strides sorted in loop order.
	*     -   **sz**: output ndarray strides sorted in loop order.
	*
	* -   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, loop interchange is a technique used in loop nest optimization to improve locality of reference and take advantage of CPU cache.
	*
	*     The purpose of this function is to order ndarray dimensions according to the magnitude of array strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimize cache misses and ensure locality of reference.
	*
	* -   Cache performance may be degraded if the layout order (i.e., row-major or column-major) differs for the input and output ndarrays. This function is intended to optimize cache performance for the most common layout order. Accordingly, if the output ndarray has a different layout order (e.g., if the input ndarrays are row-major and the output ndarray is column-major), cache misses are likely for the output ndarray. In general, to ensure best performance, input and output ndarrays should have the same layout order.
	*
	* -   The function assumes that the input and output ndarrays have the same shape. Hence, loop interchange order should only be determined **after** broadcasting.
	*
	* @param sh - array dimensions
	* @param sx - first input array stride lengths
	* @param sy - second input array stride lengths
	* @param sz - output array stride lengths
	* @returns loop interchange data
	*
	* @example
	* var sh = [ 2, 3, 4 ];
	*
	* var sx = [ 12, 4, 1 ]; // row-major
	* var sy = [ 24, 8, 1 ]; // row-major
	* var sz = [ 1, -2, 6 ]; // column-major
	*
	* var o = loopOrder( sh, sx, sy, sz );
	* // returns {...}
	*
	* var ssh = o.sh;
	* // returns [ 4, 3, 2 ]
	*
	* var ssx = o.sx;
	* // returns [ 1, 4, 12 ]
	*
	* var ssy = o.sy;
	* // returns [ 1, 8, 24 ]
	*
	* var ssz = o.sz;
	* // returns [ 6, -2, 1 ]
	*/
	binaryLoopOrder: typeof binaryLoopOrder;

	/**
	* Returns a loop block size for multi-dimensional array tiled loops.
	*
	* @param dtypeX - first input array data type
	* @param dtypeY - second input array data type
	* @param dtypeZ - output array data type
	* @returns block size (in units of elements)
	*
	* @example
	* var bsize = ns.binaryBlockSize( 'float64', 'float64', 'float64' );
	* // returns <number>
	*/
	binaryBlockSize: typeof binaryBlockSize;

	/**
	* Converts a linear index in an underlying data buffer to a linear index in an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index in an underlying data buffer
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns linear index in an array view
	*
	* @example
	* var shape = [ 3, 3 ];
	* var strides = [ -3, 1 ];
	* var offset = 6;
	* var order = 'row-major';
	* var mode = 'throw';
	*
	* var ind = ns.bind2vind( shape, strides, offset, order, 7, mode );
	* // returns 1
	*/
	bind2vind: typeof bind2vind;

	/**
	* Broadcasts an ndarray to a specified shape.
	*
	* ## Notes
	*
	* -   The function throws an error if a provided ndarray is incompatible with a provided shape.
	* -   The returned array is a view on the input array data buffer. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the view may affect multiple elements. If you need to write to the returned array, copy the array before performing operations which may mutate elements.
	* -   The returned array is a "base" ndarray, and, thus, the returned array does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to broadcast an ndarray-like object within internal implementations and to do so with minimal overhead.
	* -   The function always returns a new ndarray instance even if the input ndarray shape and the desired shape are the same.
	*
	* @param arr - input array
	* @param shape - desired shape
	* @throws input array cannot have more dimensions than the desired shape
	* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
	* @returns broadcasted array
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.broadcastArray( x, [ 3, 2, 2 ] );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 3, 2, 2 ]
	*
	* var v = y.get( 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 1 );
	* // returns 2
	*
	* v = y.get( 1, 0, 0 );
	* // returns 1
	*
	* v = y.get( 1, 1, 0 );
	* // returns 3
	*
	* v = y.get( 2, 0, 0 );
	* // returns 1
	*
	* v = y.get( 2, 1, 1 );
	* // returns 4
	*/
	broadcastArray: typeof broadcastArray;

	/**
	* Broadcasts a scalar value to an ndarray having a specified shape.
	*
	* @param value - scalar value
	* @param dtype - array data type
	* @param shape - array shape
	* @param order - array order
	* @returns ndarray
	*
	* @example
	* var x = ns.broadcastScalar( 1.0, 'generic', [ 2, 2 ], 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = x.dtype;
	* // returns 'generic'
	*
	* var v = x.get( 0, 1 );
	* // returns 1.0
	*/
	broadcastScalar: typeof broadcastScalar;

	/**
	* Broadcasts array shapes to a single shape.
	*
	* ## Notes
	*
	* -   Two respective dimensions in two shape arrays are compatible if
	*
	*     1.  the dimensions are equal.
	*     2.  one dimension is `1`.
	*
	* -   The function returns `null` if provided incompatible shapes (i.e., shapes which cannot be broadcast with one another).
	*
	* @param shapes - array shapes
	* @returns broadcast shape
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 6, 1 ],
	*     [ 7, 1, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 7, 6, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 5, 4 ],
	*     [ 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 5, 4 ]
	*
	* @example
	* var shapes = [
	*     [ 5, 4 ],
	*     [ 4 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 5, 4 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 15, 1, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 3, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 3, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 1, 7, 1, 5 ],
	*     [ 8, 4, 1, 6, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 4, 7, 6, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 0 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 1, 1, 6, 0 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 8, 0, 1, 6, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 0, 1, 6, 1 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 8, 1, 6, 1 ],
	*     [ 8, 0, 1, 6, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns null
	*
	* @example
	* var shapes = [
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [
	*     [],
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [
	*     [ 3, 2, 1 ],
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 3, 2, 1 ]
	*
	* @example
	* var shapes = [
	*     [],
	*     [ 3, 2, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 3, 2, 1 ]
	*/
	broadcastShapes: typeof broadcastShapes;

	/**
	* Returns a zero-filled contiguous linear ndarray data buffer.
	*
	* @param dtype - data type
	* @param size - buffer size
	* @returns data buffer
	*
	* @example
	* var buf = ns.buffer( 'float64', 3 );
	* // returns <Float64Array>[ 0.0, 0.0, 0.0 ]
	*/
	buffer: typeof buffer;

	/**
	* Returns an ndarray data buffer constructor.
	*
	* @param dtype - data type
	* @returns data buffer constructor or null
	*
	* @example
	* var ctor = ns.bufferCtors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.bufferCtors( 'float' );
	* // returns null
	*/
	bufferCtors: typeof bufferCtors;

	/**
	* Returns the data type of an ndarray data buffer.
	*
	* @param value - input value
	* @returns data type
	*
	* @example
	* var dt = ns.bufferDataType( [ 1, 2, 3 ] );
	* // returns 'generic'
	*
	* var dt = ns.bufferDataType( 'beep' );
	* // returns null
	*/
	bufferDataType: typeof bufferDataType;

	/**
	* Returns the data type enumeration constant for a provided ndarray data buffer.
	*
	* @param arr - strided array
	* @returns data type enumeration constant or null
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( 10 );
	*
	* var c = ns.bufferDataTypeEnum( x );
	* // returns <number>
	*/
	bufferDataTypeEnum: typeof bufferDataTypeEnum;

	/**
	* Returns the number of bytes per element provided an underlying array data type.
	*
	* @param dtype - data type
	* @returns number of bytes per element
	*
	* @example
	* var nbytes = ns.bytesPerElement( 'float64' );
	* // returns 8
	*
	* nbytes = ns.bytesPerElement( 'generic' );
	* // returns null
	*/
	bytesPerElement: typeof bytesPerElement;

	/**
	* Returns an object mapping single letter character abbreviations to data type strings.
	*
	* @returns object mapping single letter character abbreviations to data type strings
	*
	* @example
	* var out = ns.char2dtype();
	* // returns {...}
	*/
	char2dtype: typeof char2dtype;

	/**
	* Restricts an index to the interval `[0,max]`.
	*
	* @param idx - index
	* @param max - maximum index
	* @returns index
	*
	* @example
	* var idx = ns.clampIndex( -1, 10 );
	* // returns 0
	*
	* idx = ns.clampIndex( 15, 10 );
	* // returns 10
	*
	* idx = ns.clampIndex( 5, 10 );
	* // returns 5
	*/
	clampIndex: typeof clampIndex;

	/**
	* ndarray constructor.
	*
	* ## Notes
	*
	* -   To create a zero-dimensional array,
	*
	*     ```javascript
	*     var buffer = [ 1 ];
	*     var shape = [];
	*     var strides = [ 0 ];
	*     var offset = 0;
	*
	*     var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*     ```
	*
	* @param dtype - data type
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns ndarray instance
	*
	* @example
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = ns.ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*/
	ndarray: typeof ndarray;

	/**
	* Returns an object mapping data type strings to single letter character abbreviations.
	*
	* @returns object mapping data type strings to single letter character abbreviations
	*
	* @example
	* var obj = ns.dtypeChar();
	* // returns {...}
	*/
	dtypeChar: typeof dtypeChar;

	/**
	* Returns an object mapping data type strings to descriptions.
	*
	* @returns object mapping data type strings to descriptions
	*
	* @example
	* var obj = ns.dtypeDesc();
	* // returns {...}
	*/
	dtypeDesc: typeof dtypeDesc;

	/**
	* Returns the data type string associated with an ndarray data type enumeration constant.
	*
	* @param dtype - data type enumeration constant
	* @returns data type string
	*
	* @example
	* var str2enum = require( `@stdlib/ndarray/base/dtype-str2enum` );
	*
	* var v = str2enum( 'float64' );
	* // returns <number>
	*
	* var dt = ns.dtypeEnum2Str( v );
	* // returns 'float64'
	*/
	dtypeEnum2Str: typeof dtypeEnum2Str;

	/**
	* Returns the enumeration constant associated with an ndarray data type value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param dtype - data type value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.dtypeResolveEnum( 'float64' );
	* // returns <number>
	*/
	dtypeResolveEnum: typeof dtypeResolveEnum;

	/**
	* Returns the data type string associated with an ndarray data type value.
	*
	* @param dtype - data type value
	* @returns data type string
	*
	* @example
	* var str2enum = require( `@stdlib/ndarray/base/dtype-str2enum` );
	*
	* var v = ns.dtypeResolveStr( str2enum( 'float64' ) );
	* // returns 'float64'
	*/
	dtypeResolveStr: typeof dtypeResolveStr;

	/**
	* Returns the enumeration constant associated with a ndarray data type string.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param dtype - data type string
	* @returns enumeration constant
	*
	* @example
	* var v = ns.dtypeStr2Enum( 'float64' );
	* // returns <number>
	*/
	dtypeStr2Enum: typeof dtypeStr2Enum;

	/**
	* Returns the C data type associated with a provided data type value.
	*
	* @param dtype - data type value
	* @returns C data type (or null)
	*
	* @example
	* var out = ns.dtype2c( 'float64' );
	* // returns 'double'
	*
	* out = ns.dtype2c( 'generic' );
	* // returns null
	*/
	dtype2c: typeof dtype2c;

	/**
	* Transforms a list of array argument data types into a list of signatures.
	*
	* @param dtypes - list of array argument data types
	* @param nin - number of input array arguments
	* @param nout - number of output array arguments
	* @throws first argument must be an array-like object
	* @throws second argument must be a nonnegative integer
	* @throws third argument must be a nonnegative integer
	* @throws first argument must have at least one element
	* @throws first argument must be compatible with second and third arguments
	* @returns list of signatures
	*
	* @example
	* var dtypes = [
	*     'float64', 'float64',
	*     'float32', 'float32'
	* ];
	*
	* var sigs = ns.dtypes2signatures( dtypes, 1, 1 );
	* // returns [ '(float64) => (float64)', '(float32) => (float32)' ]
	*/
	dtypes2signatures: typeof dtypes2signatures;

	/**
	* Expands the shape of an array by inserting a new dimension of size one at a specified axis.
	*
	* ## Notes
	*
	* -   A provided axis must reside on the interval `[-N-1, N]`, where `N` is the rank (i.e., number of dimensions) of the provided input array. If provided a negative `axis`, the axis position at which to insert a singleton dimension is computed as `N + axis + 1`. Hence, if provided `-1`, the resolved axis position is `N` (i.e., a singleton dimension is appended to the input array).
	*
	* @param x - input array
	* @param axis - axis at which to insert a singleton dimension
	* @returns output array
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.expandDimensions( x, 1 );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 2, 1, 2 ]
	*
	* var v = y.get( 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 1 );
	* // returns 2
	*
	* v = y.get( 1, 0, 0 );
	* // returns 3
	*
	* v = y.get( 1, 0, 1 );
	* // returns 4
	*/
	expandDimensions: typeof expandDimensions;

	/**
	* Returns a zero-dimensional ndarray containing a provided scalar value.
	*
	* @param value - scalar value
	* @param dtype - array data type
	* @returns zero-dimensional ndarray
	*
	* @example
	* var x = ns.scalar2ndarray( 1.0, 'generic' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns []
	*
	* var dt = x.dtype;
	* // returns 'generic'
	*
	* var v = x.get();
	* // returns 1.0
	*/
	scalar2ndarray: typeof scalar2ndarray;

	/**
	* Returns an index given an index mode.
	*
	* @param idx - index
	* @param max - maximum index
	* @param mode - specifies how to handle an index outside the interval `[0,max]`
	* @throws index out-of-bounds
	* @returns index
	*
	* @example
	* var idx = ns.ind( 2, 9, 'clamp' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'clamp' );
	* // returns 9
	*
	* idx = ns.ind( -1, 9, 'clamp' );
	* // returns 0
	*
	* @example
	* var idx = ns.ind( 2, 9, 'wrap' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'wrap' );
	* // returns 0
	*
	* idx = ns.ind( -1, 9, 'wrap' );
	* // returns 9
	*
	* @example
	* var idx = ns.ind( 2, 9, 'throw' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'throw' );
	* // throws <RangeError>
	*
	* idx = ns.ind( -1, 9, 'throw' );
	* // throws <RangeError>
	*/
	ind: typeof ind;

	/**
	* Converts a linear index to an array of subscripts.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   `throw`: throws an error when a linear index exceeds array dimensions.
	*     -   `wrap`: wrap around a linear index exceeding array dimensions using modulo arithmetic.
	*     -   `clamp`: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
	*
	* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function interprets the linear index as an index into the underlying data buffer for the array, thus returning subscripts from the perspective of that buffer. If an `offset` is equal to `0`, the function treats the linear index as an index into an array view, thus returning subscripts from the perspective of that view.
	*
	*     ```text
	*     Dims: 2x2
	*     Buffer: [ 1, 2, 3, 4 ]
	*
	*     View = [ a00, a01,
	*              a10, a11 ]
	*
	*     Strides: 2,1
	*     Offset: 0
	*
	*     View = [ 1, 2,
	*              3, 4 ]
	*
	*     Strides: 2,-1
	*     Offset: 1
	*
	*     View = [ 2, 1,
	*              4, 3 ]
	*
	*     Strides: -2,1
	*     Offset: 2
	*
	*     View = [ 3, 4,
	*              1, 2 ]
	*
	*     Strides: -2,-1
	*     Offset: 3
	*
	*     View = [ 4, 3,
	*              2, 1 ]
	*     ```
	*
	*     ```javascript
	*     var shape = [ 2, 2 ];
	*     var order = 'row-major';
	*     var strides = [ -2, 1 ];
	*     var offset = 2;
	*     var mode = 'throw';
	*
	*     // From the perspective of a view...
	*     var s = ind2sub( shape, strides, 0, order, 0, mode );
	*     // returns [ 0, 0 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 1, mode );
	*     // returns [ 0, 1 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 2, mode );
	*     // returns [ 1, 0 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 3, mode );
	*     // returns [ 1, 1 ]
	*
	*     // From the perspective of an underlying buffer...
	*     s = ind2sub( shape, strides, offset, order, 0, mode );
	*     // returns [ 1, 0 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 1, mode );
	*     // returns [ 1, 1 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 2, mode );
	*     // returns [ 0, 0 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 3, mode );
	*     // returns [ 0, 1 ]
	*     ```
	*
	*     In short, from the perspective of a view, view data is always ordered.
	*
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns subscripts
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var strides = [ 9, 6, 1 ];
	* var offset = 0;
	* var order = 'row-major';
	*
	* var s = ns.ind2sub( shape, strides, offset, order, 17, 'throw' );
	* // returns [ 1, 2, 2 ]
	*/
	ind2sub: typeof ind2sub;

	/**
	* Returns array iteration order.
	*
	* ## Notes
	*
	* -   Return value key:
	*
	*     -   `0`: unordered (i.e., strides of mixed sign; e.g., `[ 9, -3, 1 ]`)
	*     -   `1`: ordered left-to-right (i.e., all nonnegative strides)
	*     -   `-1`: ordered right-to-left (i.e., all negative strides)
	*
	* @param strides - stride array
	* @returns iteration order
	*
	* @example
	* var o = ns.iterationOrder( [ 2, 1 ] );
	* // returns 1
	*
	* o = ns.iterationOrder( [ -2, 1 ] );
	* // returns 0
	*
	* o = ns.iterationOrder( [ -2, -1 ] );
	* // returns -1
	*/
	iterationOrder: typeof iterationOrder;

	/**
	* Computes the maximum linear index in an underlying data buffer accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear index
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 0;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 99;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 0;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 99;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*/
	maxViewBufferIndex: typeof maxViewBufferIndex;

	/**
	* Broadcasts an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.
	*
	* ## Notes
	*
	* -   The function throws an error if a provided ndarray is incompatible with a provided shape.
	* -   If a provided ndarray has the same shape as the specified shape, the function returns the provided ndarray.
	* -   If a provided ndarray has a different (broadcast compatible) shape than the specified shape, the function returns a new (base) ndarray view of the provided ndarray's data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the view may affect multiple elements. If you need to write to the returned array, copy the array before performing operations which may mutate elements.
	* -   A returned array view is a "base" ndarray, and, thus, a returned array view does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to broadcast an ndarray-like object within internal implementations and to do so with minimal overhead.
	*
	* @param arr - input array
	* @param shape - desired shape
	* @throws input array cannot have more dimensions than the desired shape
	* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
	* @throws input array and desired shape must be broadcast compatible
	* @returns broadcasted array
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.maybeBroadcastArray( x, [ 3, 2, 2 ] );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 3, 2, 2 ]
	*
	* var v = y.get( 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 1 );
	* // returns 2
	*
	* v = y.get( 1, 0, 0 );
	* // returns 1
	*
	* v = y.get( 1, 1, 0 );
	* // returns 3
	*
	* v = y.get( 2, 0, 0 );
	* // returns 1
	*
	* v = y.get( 2, 1, 1 );
	* // returns 4
	*/
	maybeBroadcastArray: typeof maybeBroadcastArray;

	/**
	* Defines non-enumerable read-only properties which expose ndarray function meta data.
	*
	* @param meta - function meta data
	* @param meta.nargs - total number of arguments
	* @param meta.nin - total number of input arrays
	* @param meta.nout - total number of output arrays
	* @param dtypes - list of ndarray data types
	* @param obj - object on which to define properties
	* @returns object on which properties were defined
	*
	* @example
	* // Define ndarray function meta data:
	* var meta = {
	*     'nargs': 2,
	*     'nin': 1,
	*     'nout': 1
	* };
	*
	* // Define the list of ndarray data types:
	* var dtypes = [
	*     'float64', 'float64',
	*     'float32', 'float32',
	*     'generic', 'generic'
	* ];
	*
	* // Define an object/function on which to set the properties:
	* var obj = {};
	*
	* // Set the properties:
	* ns.metaDataProps( meta, dtypes, obj );
	*/
	metaDataProps: typeof metaDataProps;

	/**
	* Computes the minimum linear index in an underlying data buffer accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear index
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 10;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 109;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 10;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 109;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*/
	minViewBufferIndex: typeof minViewBufferIndex;

	/**
	* Computes the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear indices
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 10;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 10, 109 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 99;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 0, 99 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 10;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 10, 109 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 99;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 0, 99 ]
	*/
	minmaxViewBufferIndex: typeof minmaxViewBufferIndex;

	/**
	* Converts an ndarray-like to an object likely to have the same "shape".
	*
	* ## Notes
	*
	* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding ndarray meta data to ensure that internal functions operating on ndarrays are provided consistent argument "shapes".
	*
	* @param x - input ndarray
	* @returns object containing ndarray data
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
	*
	* var obj = ns.ndarraylike2object( x );
	* // returns {...}
	*/
	ndarraylike2object: typeof ndarraylike2object;

	/**
	* Returns the number of non-singleton dimensions.
	*
	* ## Notes
	*
	* -   A singleton dimension is a dimension whose size is equal to `1`.
	*
	* @param shape - array shape
	* @returns number of non-singleton dimensions
	*
	* @example
	* var n = ns.nonsingletonDimensions( [ 3, 3, 1, 2 ] );
	* // returns 3
	*
	* @example
	* var n = ns.nonsingletonDimensions( [ 1, 1 ] );
	* // returns 0
	*/
	nonsingletonDimensions: typeof nonsingletonDimensions;

	/**
	* Applies a nullary callback and assigns results to elements in an output ndarray.
	*
	* @param arrays - array-like object containing an output ndarray
	* @param fcn - nullary callback
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* function fcn() {
	*     return 10.0;
	* }
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( 12 );
	*
	* // Define the shape of the output array:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	*
	* // Define the index offset:
	* var ox = 1;
	*
	* // Create the output ndarray:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	*
	* // Apply the ns.nullary function:
	* ns.nullary( [ x ], fcn );
	*
	* console.log( x.data );
	* // => <Float64Array>[ 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0 ]
	*/
	nullary: typeof nullary;

	/**
	* Reorders ndarray dimensions and associated strides for loop interchange.
	*
	* ## Notes
	*
	* -   The returned object has the following properties:
	*
	*     -   **sh**: dimensions sorted in loop order.
	*     -   **sx**: ndarray strides sorted in loop order.
	*
	* -   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, loop interchange is a technique used in loop nest optimization to improve locality of reference and take advantage of CPU cache.
	*
	*     The purpose of this function is to order ndarray dimensions according to the magnitude of array strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimize cache misses and ensure locality of reference.
	*
	* @param sh - array dimensions
	* @param sx - array stride lengths
	* @returns loop interchange data
	*
	* @example
	* var sh = [ 2, 3, 4 ];
	*
	* var sx = [ 12, 4, 1 ]; // row-major
	*
	* var o = ns.nullaryLoopOrder( sh, sx );
	* // returns {...}
	*
	* var ssh = o.sh;
	* // returns [ 4, 3, 2 ]
	*
	* var ssx = o.sx;
	* // returns [ 1, 4, 12 ]
	*/
	nullaryLoopOrder: typeof nullaryLoopOrder;

	/**
	* Returns a loop block size for multi-dimensional array tiled loops.
	*
	* @param dtypeX - array data type
	* @returns block size (in units of elements)
	*
	* @example
	* var bsize = ns.nullaryBlockSize( 'float64' );
	* // returns <number>
	*/
	nullaryBlockSize: typeof nullaryBlockSize;

	/**
	* Returns the number of elements in an array.
	*
	* @param shape - array shape
	* @returns number of elements
	*
	* @example
	* var n = ns.numel( [ 3, 3, 3 ] );
	* // returns 27
	*/
	numel: typeof numel;

	/**
	* Returns an array with a specified number of prepended singleton dimensions.
	*
	* @param x - input array
	* @param n - number of singleton dimensions to prepend
	* @returns output array
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 2, 2 ]
	*
	* var y = ns.prependSingletonDimensions( x, 3 );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 1, 1, 1, 2, 2 ]
	*
	* var v = y.get( 0, 0, 0, 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 0, 0, 0, 1 );
	* // returns 2
	*
	* v = y.get( 0, 0, 0, 1, 0 );
	* // returns 3
	*
	* v = y.get( 0, 0, 0, 1, 1 );
	* // returns 4
	*/
	prependSingletonDimensions: typeof prependSingletonDimensions;

	/**
	* Returns an array without singleton dimensions.
	*
	* ## Notes
	*
	* -   If a provided ndarray does not have any singleton dimensions, the function returns the provided ndarray unchanged.
	* -   If a provided ndarray does have singleton dimensions, the function returns a new ndarray view.
	*
	* @param x - input array
	* @returns squeezed array
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
	*     'ndmin': 5
	* });
	* // returns <ndarray>
	*
	* var shx = x.shape;
	* // returns [ 1, 1, 1, 2, 2 ]
	*
	* var y = ns.removeSingletonDimensions( x );
	* // returns <ndarray>
	*
	* var shy = y.shape;
	* // returns [ 2, 2 ]
	*
	* var v = y.get( 0, 0 );
	* // returns 1
	*
	* v = y.get( 0, 1 );
	* // returns 2
	*
	* v = y.get( 1, 0 );
	* // returns 3
	*
	* v = y.get( 1, 1 );
	* // returns 4
	*/
	removeSingletonDimensions: typeof removeSingletonDimensions;

	/**
	* Serializes ndarray meta data.
	*
	* ## Notes
	*
	* -   Serialization is performed according to host byte order (endianness).
	*
	* -   Meta data format:
	*
	*     ```text
	*     | <endianness> (1 byte) | <dtype> (2 bytes) | <ndims> (8 bytes) | <shape> (ndims*8 bytes) | <strides> (ndims*8 bytes) | <offset> (8 bytes) | <order> (1 byte) | <mode> (1 byte) | <nsubmodes> (8 bytes) | <submodes> (nsubmodes*1 bytes) | <flags> (4 bytes) |
	*     ```
	*
	*     which translates to the following `ArrayBuffer` layout:
	*
	*     ```text
	*     ArrayBuffer[
	*         <endianness>[int8],
	*         <dtype>[int16],
	*         <ndims>[int64],
	*         <shape>[ndims*int64],
	*         <strides>[ndims*int64],
	*         <offset>[int64],
	*         <order>[int8],
	*         <mode>[int8],
	*         <nsubmodes>[int64],
	*         <submodes>[nsubmodes*int8]
	*         <flags>[int32]
	*     ]
	*     ```
	*
	*     where `strides` and `offset` are in units of bytes.
	*
	* -   If the endianness is `1`, the byte order is little endian. If the endianness is `0`, the byte order is big endian.
	*
	* -   Buffer length:
	*
	*     ```text
	*     1 + 2 + 8 + (ndims*8) + (ndims*8) + 8 + 1 + 1 + 8 + (nsubmodes*1) + 4 = 33 + (ndims*16) + nsubmodes
	*     ```
	*
	*     For example, consider a three-dimensional ndarray with one subscript index mode (submode):
	*
	*     ```text
	*     33 + (3*16) + 1 = 82 bytes
	*     ```
	*
	* -   Views:
	*
	*     -   endianness: `Int8Array( buf, 0, 1 )`
	*     -   dtype: `Int16Array( buf, 1, 1 )`
	*     -   ndims: `Int64Array( buf, 3, 1 )`
	*     -   shape: `Int64Array( buf, 11, ndims )`
	*     -   strides: `Int64Array( buf, 11+(ndims*8), ndims )`
	*     -   offset: `Int64Array( buf, 11+(ndims*16), 1 )`
	*     -   order: `Int8Array( buf, 19+(ndims*16), 1 )`
	*     -   mode: `Int8Array( buf, 20+(ndims*16), 1 )`
	*     -   nsubmodes: `Int64Array( buf, 21+(ndims*16), 1 )`
	*     -   submodes: `Int8Array( buf, 29+(ndims*16), nsubmodes )`
	*     -   flags: `Int32Array( buf, 29+(ndims*16)+nsubmodes, 1)`
	*
	* @param x - input ndarray
	* @returns serialized meta data
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	*
	* var dv = ns.serializeMetaData( x );
	* // returns <DataView>
	*/
	serializeMetaData: typeof serializeMetaData;

	/**
	* Generates a stride array from an array shape.
	*
	* @param shape - array shape
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns array strides
	*
	* @example
	* var s = ns.shape2strides( [ 3, 2 ], 'row-major' );
	* // returns [ 2, 1 ]
	*
	* s = ns.shape2strides( [ 3, 2 ], 'column-major' );
	* // returns [ 1, 3 ]
	*/
	shape2strides: typeof shape2strides;

	/**
	* Returns the number of singleton dimensions.
	*
	* ## Notes
	*
	* -   A singleton dimension is a dimension whose size is equal to `1`.
	*
	* @param shape - array shape
	* @returns number of singleton dimensions
	*
	* @example
	* var n = ns.singletonDimensions( [ 3, 3, 1, 2 ] );
	* // returns 1
	*
	* @example
	* var n = ns.singletonDimensions( [ 2, 2 ] );
	* // returns 0
	*/
	singletonDimensions: typeof singletonDimensions;

	/**
	* Returns the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @returns offset
	*
	* @example
	* var shape = [ 2, 3, 10 ];
	* var strides = [ 30, -10, 1 ];
	*
	* var offset = ns.strides2offset( shape, strides );
	* // returns 20
	*/
	strides2offset: typeof strides2offset;

	/**
	* Determines the order of a multidimensional array based on a provided stride array.
	*
	* @param strides - stride array
	* @returns order
	*
	* @example
	* var order = ns.strides2order( [ 2, 1 ] );
	* // returns 1
	*
	* @example
	* var order = ns.strides2order( [ 1, 2 ] );
	* // returns 2
	*
	* @example
	* var order = ns.strides2order( [ 1, 1, 1 ] );
	* // returns 3
	*
	* @example
	* var order = ns.strides2order( [ 2, 3, 1 ] );
	* // returns 0
	*/
	strides2order: typeof strides2order;

	/**
	* Converts subscripts to a linear index.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   `throw`: throws an error when a subscript exceeds array dimensions.
	*     -   `wrap`: wrap around subscripts exceeding array dimensions using modulo arithmetic.
	*     -   `clamp`: set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.
	*
	* -   When provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
	*
	* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function treats subscripts as mapping to a linear index in an underlying data buffer for the array, thus returning a linear index from the perspective of that buffer. If an `offset` is equal to `0`, the function treats subscripts as mapping to a linear index in an array view, thus returning a linear index from the perspective of that view.
	*
	*     ```text
	*     Dims: 2x2
	*     Buffer: [ 1, 2, 3, 4 ]
	*
	*     View = [ a00, a01,
	*              a10, a11 ]
	*
	*     Strides: 2,1
	*     Offset: 0
	*
	*     View = [ 1, 2,
	*              3, 4 ]
	*
	*     Strides: 2,-1
	*     Offset: 1
	*
	*     View = [ 2, 1,
	*              4, 3 ]
	*
	*     Strides: -2,1
	*     Offset: 2
	*
	*     View = [ 3, 4,
	*              1, 2 ]
	*
	*     Strides: -2,-1
	*     Offset: 3
	*
	*     View = [ 4, 3,
	*              2, 1 ]
	*     ```
	*
	*     ```javascript
	*     var shape = [ 2, 2 ];
	*     var strides = [ -2, 1 ];
	*     var offset = 2;
	*     var mode = [ 'throw' ];
	*
	*     // From the perspective of a view...
	*     var idx = sub2ind( shape, strides, 0, 0, 0, mode );
	*     // returns 0
	*
	*     idx = sub2ind( shape, strides, 0, 0, 1, mode );
	*     // returns 1
	*
	*     idx = sub2ind( shape, strides, 0, 1, 0, mode );
	*     // returns 2
	*
	*     idx = sub2ind( shape, strides, 0, 1, 1, mode );
	*     // returns 3
	*
	*     // From the perspective of an underlying buffer...
	*     idx = sub2ind( shape, strides, offset, 0, 0, mode );
	*     // returns 2
	*
	*     idx = sub2ind( shape, strides, offset, 0, 1, mode );
	*     // returns 3
	*
	*     idx = sub2ind( shape, strides, offset, 1, 0, mode );
	*     // returns 0
	*
	*     idx = sub2ind( shape, strides, offset, 1, 1, mode );
	*     // returns 1
	*     ```
	*
	*     In short, from the perspective of a view, view data is always ordered.
	*
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param args - subscripts followed by a `mode` specifying how to handle subscripts which exceed array dimensions
	* @param mode - specifies how to handle subscripts which exceed array dimensions
	* @throws must provide subscripts which do not exceed array dimensions
	* @returns linear index
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var strides = [ 9, 3, 1 ];
	* var offset = 0;
	* var mode = [ 'throw' ]
	*
	* var idx = ns.sub2ind( shape, strides, offset, 1, 2, 2, mode );
	* // returns 17
	*/
	sub2ind: typeof sub2ind;

	/**
	* Converts an ndarray buffer to a generic array (which may include nested arrays).
	*
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns array (which may include nested arrays)
	*
	* @example
	* var buffer = [ 1, 2, 3, 4 ];
	* var shape = [ 2, 2 ];
	* var order = 'row-major';
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = ns.ndarray2array( buffer, shape, strides, offset, order );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*/
	ndarray2array: typeof ndarray2array;

	/**
	* Transposes a matrix (or a stack of matrices).
	*
	* @param x - input array
	* @returns ndarray view
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], {
	*     'dtype': 'generic'
	* });
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 2, 3 ]
	*
	* var y = ns.transpose( x );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 3, 2 ]
	*
	* var bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
	* // returns true
	*
	* bool = ( x.data === y.data );
	* // returns true
	*/
	transpose: typeof transpose;

	/**
	* Applies a unary callback to elements in an ndarray and assigns results to elements in an ndarray.
	*
	* @param arrays - array-like object containing one input ndarray and one output ndarray
	* @param fcn - unary callback
	* @throws arrays must have the same number of dimensions
	* @throws arrays must have the same shape
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var ybuf = new Float64Array( 6 );
	*
	* // Define the shape of the input and output arrays:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	* var sy = [ 2, 2, 1 ];
	*
	* // Define the index offsets:
	* var ox = 1;
	* var oy = 0;
	*
	* // Create the input and output ndarrays:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
	*
	* // Apply the ns.unary function:
	* ns.unary( [ x, y ], scale );
	*
	* console.log( y.data );
	* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
	*/
	unary: typeof unary;

	/**
	* Applies a unary function to elements in an ndarray and assigns results to elements in an ndarray.
	*
	* @param arrays - array-like object containing one input ndarray and one output ndarray
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @throws arrays must have the same number of dimensions
	* @throws arrays must have the same shape
	*
	* @example
	* var identity = require( `@stdlib/math/base/special/identity` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* // Create data buffers:
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	* var ybuf = new Float64Array( 6 );
	*
	* // Define the shape of the input and output arrays:
	* var shape = [ 3, 1, 2 ];
	*
	* // Define the array strides:
	* var sx = [ 4, 4, 1 ];
	* var sy = [ 2, 2, 1 ];
	*
	* // Define the index offsets:
	* var ox = 1;
	* var oy = 0;
	*
	* // Create the input and output ndarrays:
	* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
	* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
	*
	* // Apply the unary function:
	* ns.unaryBy( [ x, y ], scale, identity );
	*
	* console.log( y.data );
	* // => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
	*/
	unaryBy: typeof unaryBy;

	/**
	* Reorders ndarray dimensions and associated strides for loop interchange.
	*
	* ## Notes
	*
	* -   The returned object has the following properties:
	*
	*     -   **sh**: dimensions sorted in loop order.
	*     -   **sx**: input ndarray strides sorted in loop order.
	*     -   **sy**: output ndarray strides sorted in loop order.
	*
	* -   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, loop interchange is a technique used in loop nest optimization to improve locality of reference and take advantage of CPU cache.
	*
	*     The purpose of this function is to order ndarray dimensions according to the magnitude of **input array** strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimize cache misses and ensure locality of reference.
	*
	* -   Cache performance may be degraded if the layout order (i.e., row-major or column-major) differs for the input and output ndarrays. This function is intended to optimize cache performance for the input ndarray. If the output ndarray has a different layout order (e.g., if the input ndarray is row-major and the output ndarray is column-major), cache misses are likely for the output ndarray. In general, to ensure best performance, input and output ndarrays should have the same layout order.
	*
	* -   The function assumes that the input and output ndarrays have the same shape. Hence, loop interchange order should only be determined **after** broadcasting.
	*
	* @param sh - array dimensions
	* @param sx - input array stride lengths
	* @param sy - output array stride lengths
	* @returns loop interchange data
	*
	* @example
	* var sh = [ 2, 3, 4 ];
	*
	* var sx = [ 12, 4, 1 ]; // row-major
	* var sy = [ 1, -2, 6 ]; // column-major
	*
	* var o = ns.unaryLoopOrder( sh, sx, sy );
	* // returns {...}
	*
	* var ssh = o.sh;
	* // returns [ 4, 3, 2 ]
	*
	* var ssx = o.sx;
	* // returns [ 1, 4, 12 ]
	*
	* var ssy = o.sy;
	* // returns [ 6, -2, 1 ]
	*/
	unaryLoopOrder: typeof unaryLoopOrder;

	/**
	* Returns a loop block size for multi-dimensional array tiled loops.
	*
	* @param dtypeX - input array data type
	* @param dtypeY - output array data type
	* @returns block size (in units of elements)
	*
	* @example
	* var bsize = ns.unaryBlockSize( 'float64', 'float64' );
	* // returns <number>
	*/
	unaryBlockSize: typeof unaryBlockSize;

	/**
	* Converts a linear index in an array view to a linear index in an underlying data buffer.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index in an array view
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns linear index in an underlying data buffer
	*
	* @example
	* var shape = [ 3, 3 ];
	* var strides = [ -3, 1 ];
	* var offset = 6;
	* var order = 'row-major';
	* var mode = 'throw';
	*
	* var ind = ns.vind2bind( shape, strides, offset, order, 1, mode );
	* // returns 7
	*/
	vind2bind: typeof vind2bind;

	/**
	* Wraps an index on the interval `[0,max]`.
	*
	* @param idx - index
	* @param max - maximum index
	* @returns index
	*
	* @example
	* var idx = ns.wrapIndex( -1, 10 );
	* // returns 10
	*
	* idx = ns.wrapIndex( 13, 10 );
	* // returns 2
	*
	* idx = ns.wrapIndex( 6, 10 );
	* // returns 6
	*/
	wrapIndex: typeof wrapIndex;

	/**
	* Creates a zero-filled array having a specified shape and data type.
	*
	* @param dtype - underlying data type
	* @param shape - array shape
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns zero-filled array
	*
	* @example
	* var arr = ns.zeros( 'float32', [ 2, 2 ], 'row-major' );
	* // returns <ndarray>
	*
	* var sh = arr.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = arr.dtype;
	* // returns 'float32'
	*/
	zeros: typeof zeros;

	/**
	* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
	*
	* @param x - input array
	* @returns zero-filled array
	*
	* @example
	* var zeros = require( `@stdlib/ndarray/base/zeros` );
	*
	* var x = zeros( 'generic', [ 2, 2 ], 'row-major' );
	* // returns <ndarray>
	*
	* var sh = x.shape;
	* // returns [ 2, 2 ]
	*
	* var dt = x.dtype;
	* // returns 'generic'
	*
	* var y = ns.zerosLike( x );
	* // returns <ndarray>
	*
	* sh = y.shape;
	* // returns [ 2, 2 ]
	*
	* dt = y.dtype;
	* // returns 'generic'
	*/
	zerosLike: typeof zerosLike;
}

/**
* Base ndarray.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
