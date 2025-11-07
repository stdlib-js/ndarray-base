<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Base

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base ndarray.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { any, anyBy, array2ndarray, assert, assign, binary, binaryBlockSize, binaryInputCastingDataType, binaryLoopOrder, binaryOutputDataType, binaryReduceStrided1d, binaryReduceStrided1dDispatch, binaryReduceStrided1dDispatchFactory, bind2vind, broadcastArray, broadcastArrayExceptDimensions, broadcastArrays, broadcastScalar, broadcastShapes, buffer, bufferCtors, bufferDataType, bufferDataTypeEnum, bytesPerElement, char2dtype, clampIndex, copy, countFalsy, countIf, countTruthy, data, dtype, dtype2c, dtypeAlignment, dtypeChar, dtypeChars, dtypeDesc, dtypeEnum2Str, dtypeEnums, dtypeObjects, dtypeResolveEnum, dtypeResolveStr, dtypeStr2Enum, dtypeStrings, dtypes2enums, dtypes2signatures, empty, emptyLike, every, everyBy, expandDimensions, fill, fillBy, find, flag, flags, flattenShape, flattenShapeFrom, fliplr, flipud, forEach, includes, ind, ind2sub, iterationOrder, loopOrder, map, maxViewBufferIndex, maybeBroadcastArray, maybeBroadcastArrays, metaDataProps, minSignedIntegerDataType, minUnsignedIntegerDataType, minViewBufferIndex, minmaxViewBufferIndex, ndarray, ndarray2array, ndarraylike2ndarray, ndarraylike2object, ndarraylike2scalar, ndims, nextCartesianIndex, nonsingletonDimensions, normalizeIndex, normalizeIndices, nullary, nullaryBlockSize, nullaryLoopOrder, nullaryStrided1d, nullaryStrided1dDispatch, nullaryStrided1dDispatchFactory, numel, numelDimension, offset, order, outputDataType, outputPolicyEnum2Str, outputPolicyResolveEnum, outputPolicyResolveStr, outputPolicyStr2Enum, pop, prependSingletonDimensions, promoteDataTypes, removeSingletonDimensions, reverse, reverseDimension, scalar2ndarray, scalar2ndarrayLike, serializeMetaData, shape, shape2strides, shift, singletonDimensions, slice, sliceAssign, sliceDimension, sliceDimensionFrom, sliceDimensionTo, sliceFrom, sliceTo, some, someBy, spreadDimensions, stride, strides, strides2offset, strides2order, sub2ind, toNormalizedIndices, toReversed, toUniqueNormalizedIndices, transpose, unary, unaryAccumulate, unaryAddonDispatch, unaryBlockSize, unaryBy, unaryInputCastingDataType, unaryLoopOrder, unaryOutputDataType, unaryReduceStrided1d, unaryReduceStrided1dAssignStruct, unaryReduceStrided1dBy, unaryReduceStrided1dDispatch, unaryReduceStrided1dDispatchBy, unaryReduceStrided1dDispatchByFactory, unaryReduceStrided1dDispatchFactory, unaryReduceSubarray, unaryReduceSubarrayBy, unaryStrided1d, unaryStrided1dDispatch, unaryStrided1dDispatchFactory, vind2bind, wrapIndex, zeros, zerosLike, zip2views1d } from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base@esm/index.mjs';
```

#### ns

Base ndarray.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc keywords="-assertion" > -->

<div class="namespace-toc">

-   <span class="signature">[`anyBy( arrays, predicate[, thisArg] )`][@stdlib/ndarray/base/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one element in an ndarray passes a test implemented by a predicate function.</span>
-   <span class="signature">[`any( arrays )`][@stdlib/ndarray/base/any]</span><span class="delimiter">: </span><span class="description">test whether at least one element in an ndarray is truthy.</span>
-   <span class="signature">[`assign( arrays )`][@stdlib/ndarray/base/assign]</span><span class="delimiter">: </span><span class="description">assign elements in an input ndarray to elements in an output ndarray.</span>
-   <span class="signature">[`binaryInputCastingDataType( idtype1, idtype2, odtype, policy )`][@stdlib/ndarray/base/binary-input-casting-dtype]</span><span class="delimiter">: </span><span class="description">resolve the casting data type for an input ndarray provided to a binary function.</span>
-   <span class="signature">[`binaryLoopOrder( shape, stridesX, stridesY, stridesZ )`][@stdlib/ndarray/base/binary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`binaryOutputDataType( xdtype, ydtype, policy )`][@stdlib/ndarray/base/binary-output-dtype]</span><span class="delimiter">: </span><span class="description">resolve the output ndarray data type for a binary function.</span>
-   <span class="signature">[`binaryReduceStrided1dDispatchFactory( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/binary-reduce-strided1d-dispatch-factory]</span><span class="delimiter">: </span><span class="description">create a function for performing reduction on two input ndarrays.</span>
-   <span class="signature">[`binaryReduceStrided1dDispatch( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/binary-reduce-strided1d-dispatch]</span><span class="delimiter">: </span><span class="description">constructor for performing a reduction on two input ndarrays.</span>
-   <span class="signature">[`binaryReduceStrided1d( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/binary-reduce-strided1d]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in two input ndarrays via a one-dimensional strided array binary reduction function and assign results to a provided output ndarray.</span>
-   <span class="signature">[`binaryBlockSize( dtypeX, dtypeY, dtypeZ )`][@stdlib/ndarray/base/binary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`binary( arrays, fcn )`][@stdlib/ndarray/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in input ndarrays and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`bind2vind( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/bind2vind]</span><span class="delimiter">: </span><span class="description">convert a linear index in an underlying data buffer to a linear index in an array view.</span>
-   <span class="signature">[`broadcastArrayExceptDimensions( arr, shape, dims )`][@stdlib/ndarray/base/broadcast-array-except-dimensions]</span><span class="delimiter">: </span><span class="description">broadcast an input ndarray to a target shape while keeping a list of specified dimensions unchanged.</span>
-   <span class="signature">[`broadcastArray( arr, shape )`][@stdlib/ndarray/base/broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape.</span>
-   <span class="signature">[`broadcastArrays( arrays )`][@stdlib/ndarray/base/broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>
-   <span class="signature">[`broadcastScalar( value, dtype, shape, order )`][@stdlib/ndarray/base/broadcast-scalar]</span><span class="delimiter">: </span><span class="description">broadcast a scalar value to an `ndarray` having a specified shape.</span>
-   <span class="signature">[`broadcastShapes( shapes )`][@stdlib/ndarray/base/broadcast-shapes]</span><span class="delimiter">: </span><span class="description">broadcast array shapes to a single shape.</span>
-   <span class="signature">[`bufferCtors( dtype )`][@stdlib/ndarray/base/buffer-ctors]</span><span class="delimiter">: </span><span class="description">ndarray data buffer constructors.</span>
-   <span class="signature">[`bufferDataTypeEnum( buffer )`][@stdlib/ndarray/base/buffer-dtype-enum]</span><span class="delimiter">: </span><span class="description">return the data type enumeration constant of an ndarray data buffer.</span>
-   <span class="signature">[`bufferDataType( buffer )`][@stdlib/ndarray/base/buffer-dtype]</span><span class="delimiter">: </span><span class="description">return the data type of an ndarray data buffer.</span>
-   <span class="signature">[`buffer( dtype, size )`][@stdlib/ndarray/base/buffer]</span><span class="delimiter">: </span><span class="description">create a contiguous linear ndarray data buffer.</span>
-   <span class="signature">[`bytesPerElement( dtype )`][@stdlib/ndarray/base/bytes-per-element]</span><span class="delimiter">: </span><span class="description">return the number of bytes per element for a provided underlying ndarray data type.</span>
-   <span class="signature">[`char2dtype( [ch] )`][@stdlib/ndarray/base/char2dtype]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a provided single letter character abbreviation.</span>
-   <span class="signature">[`clampIndex( idx, max )`][@stdlib/ndarray/base/clamp-index]</span><span class="delimiter">: </span><span class="description">restrict an index to the interval `[0,max]`.</span>
-   <span class="signature">[`copy( x )`][@stdlib/ndarray/base/copy]</span><span class="delimiter">: </span><span class="description">copy an input ndarray to a new ndarray having the same shape and data type.</span>
-   <span class="signature">[`countFalsy( arrays )`][@stdlib/ndarray/base/count-falsy]</span><span class="delimiter">: </span><span class="description">count the number of falsy elements in an ndarray.</span>
-   <span class="signature">[`countIf( arrays, predicate[, thisArg] )`][@stdlib/ndarray/base/count-if]</span><span class="delimiter">: </span><span class="description">count the number of elements in an ndarray which pass a test implemented by a predicate function.</span>
-   <span class="signature">[`countTruthy( arrays )`][@stdlib/ndarray/base/count-truthy]</span><span class="delimiter">: </span><span class="description">count the number of truthy elements in an ndarray.</span>
-   <span class="signature">[`ndarray( dtype, buffer, shape, strides, offset, order )`][@stdlib/ndarray/base/ctor]</span><span class="delimiter">: </span><span class="description">create a multidimensional array.</span>
-   <span class="signature">[`data( x )`][@stdlib/ndarray/base/data-buffer]</span><span class="delimiter">: </span><span class="description">return the underlying data buffer of a provided ndarray.</span>
-   <span class="signature">[`dtypeAlignment( [dtype] )`][@stdlib/ndarray/base/dtype-alignment]</span><span class="delimiter">: </span><span class="description">return the alignment (in bytes) for an underlying array data type.</span>
-   <span class="signature">[`dtypeChar( [dtype] )`][@stdlib/ndarray/base/dtype-char]</span><span class="delimiter">: </span><span class="description">return the single letter abbreviation for an underlying array data type.</span>
-   <span class="signature">[`dtypeChars( [kind] )`][@stdlib/ndarray/base/dtype-chars]</span><span class="delimiter">: </span><span class="description">list of ndarray data type single letter character abbreviations.</span>
-   <span class="signature">[`dtypeDesc( [dtype] )`][@stdlib/ndarray/base/dtype-desc]</span><span class="delimiter">: </span><span class="description">return the description for a specified data type.</span>
-   <span class="signature">[`dtypeEnum2Str( dtype )`][@stdlib/ndarray/base/dtype-enum2str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with an ndarray data type enumeration constant.</span>
-   <span class="signature">[`dtypeEnums()`][@stdlib/ndarray/base/dtype-enums]</span><span class="delimiter">: </span><span class="description">return an object mapping supported data type strings to enumeration constants.</span>
-   <span class="signature">[`dtypeObjects()`][@stdlib/ndarray/base/dtype-objects]</span><span class="delimiter">: </span><span class="description">return an object mapping supported data type strings to data type objects.</span>
-   <span class="signature">[`dtypeResolveEnum( dtype )`][@stdlib/ndarray/base/dtype-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported ndarray data type value.</span>
-   <span class="signature">[`dtypeResolveStr( dtype )`][@stdlib/ndarray/base/dtype-resolve-str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a supported ndarray data type value.</span>
-   <span class="signature">[`dtypeStr2Enum( dtype )`][@stdlib/ndarray/base/dtype-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with an ndarray data type string.</span>
-   <span class="signature">[`dtypeStrings( [kind] )`][@stdlib/ndarray/base/dtype-strings]</span><span class="delimiter">: </span><span class="description">list of ndarray data type strings.</span>
-   <span class="signature">[`dtype( x )`][@stdlib/ndarray/base/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of a provided ndarray.</span>
-   <span class="signature">[`dtype2c( dtype )`][@stdlib/ndarray/base/dtype2c]</span><span class="delimiter">: </span><span class="description">return the C data type associated with a provided data type value.</span>
-   <span class="signature">[`dtypes2enums( dtypes )`][@stdlib/ndarray/base/dtypes2enums]</span><span class="delimiter">: </span><span class="description">resolve a list of data type enumeration constants.</span>
-   <span class="signature">[`dtypes2signatures( dtypes, nin, nout )`][@stdlib/ndarray/base/dtypes2signatures]</span><span class="delimiter">: </span><span class="description">transform a list of array argument data types into a list of signatures.</span>
-   <span class="signature">[`emptyLike( x )`][@stdlib/ndarray/base/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having the same shape and data type as a provided ndarray.</span>
-   <span class="signature">[`empty( dtype, shape, order )`][@stdlib/ndarray/base/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having a specified shape and data type.</span>
-   <span class="signature">[`everyBy( arrays, predicate[, thisArg] )`][@stdlib/ndarray/base/every-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in an ndarray pass a test implemented by a predicate function.</span>
-   <span class="signature">[`every( arrays )`][@stdlib/ndarray/base/every]</span><span class="delimiter">: </span><span class="description">test whether every element in an ndarray is truthy.</span>
-   <span class="signature">[`expandDimensions( x, axis )`][@stdlib/ndarray/base/expand-dimensions]</span><span class="delimiter">: </span><span class="description">expand the shape of an array by inserting a new dimension of size one at a specified axis.</span>
-   <span class="signature">[`fillBy( x, fcn[, thisArg] )`][@stdlib/ndarray/base/fill-by]</span><span class="delimiter">: </span><span class="description">fill an input ndarray according to a callback function.</span>
-   <span class="signature">[`fill( x, value )`][@stdlib/ndarray/base/fill]</span><span class="delimiter">: </span><span class="description">fill an input ndarray with a specified value.</span>
-   <span class="signature">[`find( arrays, predicate[, thisArg] )`][@stdlib/ndarray/base/find]</span><span class="delimiter">: </span><span class="description">return the first element in an ndarray which passes a test implemented by a predicate function.</span>
-   <span class="signature">[`flag( x, name )`][@stdlib/ndarray/base/flag]</span><span class="delimiter">: </span><span class="description">return a specified flag for a provided ndarray.</span>
-   <span class="signature">[`flags( x, copy )`][@stdlib/ndarray/base/flags]</span><span class="delimiter">: </span><span class="description">return the flags of a provided ndarray.</span>
-   <span class="signature">[`flattenShapeFrom( shape, dim )`][@stdlib/ndarray/base/flatten-shape-from]</span><span class="delimiter">: </span><span class="description">flatten a shape starting from a specified dimension.</span>
-   <span class="signature">[`flattenShape( shape, depth )`][@stdlib/ndarray/base/flatten-shape]</span><span class="delimiter">: </span><span class="description">flatten a shape to a specified depth.</span>
-   <span class="signature">[`fliplr( x, writable )`][@stdlib/ndarray/base/fliplr]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along the last dimension is reversed.</span>
-   <span class="signature">[`flipud( x, writable )`][@stdlib/ndarray/base/flipud]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along the second-to-last dimension is reversed.</span>
-   <span class="signature">[`forEach( arrays, fcn[, thisArg] )`][@stdlib/ndarray/base/for-each]</span><span class="delimiter">: </span><span class="description">invoke a callback function once for each ndarray element.</span>
-   <span class="signature">[`array2ndarray( buf, order )`][@stdlib/ndarray/base/from-array]</span><span class="delimiter">: </span><span class="description">convert an array to a one-dimensional ndarray.</span>
-   <span class="signature">[`scalar2ndarrayLike( x, value )`][@stdlib/ndarray/base/from-scalar-like]</span><span class="delimiter">: </span><span class="description">convert a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.</span>
-   <span class="signature">[`scalar2ndarray( value, dtype, order )`][@stdlib/ndarray/base/from-scalar]</span><span class="delimiter">: </span><span class="description">convert a scalar value to a zero-dimensional ndarray.</span>
-   <span class="signature">[`includes( arrays )`][@stdlib/ndarray/base/includes]</span><span class="delimiter">: </span><span class="description">test whether an ndarray contains a specified value.</span>
-   <span class="signature">[`ind( idx, max, mode )`][@stdlib/ndarray/base/ind]</span><span class="delimiter">: </span><span class="description">return an index given an index mode.</span>
-   <span class="signature">[`ind2sub( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/ind2sub]</span><span class="delimiter">: </span><span class="description">convert a linear index to an array of subscripts.</span>
-   <span class="signature">[`iterationOrder( strides )`][@stdlib/ndarray/base/iteration-order]</span><span class="delimiter">: </span><span class="description">given a stride array, determine array iteration order.</span>
-   <span class="signature">[`loopOrder( shape, strides )`][@stdlib/ndarray/base/loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`map( arrays, fcn[, thisArg] )`][@stdlib/ndarray/base/map]</span><span class="delimiter">: </span><span class="description">apply a callback function to elements in an input ndarray and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`maxViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/max-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the maximum linear index in an underlying data buffer accessible to an array view.</span>
-   <span class="signature">[`maybeBroadcastArray( arr, shape )`][@stdlib/ndarray/base/maybe-broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.</span>
-   <span class="signature">[`maybeBroadcastArrays( arrays )`][@stdlib/ndarray/base/maybe-broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>
-   <span class="signature">[`metaDataProps( meta, dtypes, obj )`][@stdlib/ndarray/base/meta-data-props]</span><span class="delimiter">: </span><span class="description">define non-enumerable read-only properties which expose ndarray function meta data.</span>
-   <span class="signature">[`minSignedIntegerDataType( value )`][@stdlib/ndarray/base/min-signed-integer-dtype]</span><span class="delimiter">: </span><span class="description">determine the minimum ndarray data type for storing a provided signed integer value.</span>
-   <span class="signature">[`minUnsignedIntegerDataType( value )`][@stdlib/ndarray/base/min-unsigned-integer-dtype]</span><span class="delimiter">: </span><span class="description">determine the minimum ndarray data type for storing a provided unsigned integer value.</span>
-   <span class="signature">[`minViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/min-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the minimum linear index in an underlying data buffer accessible to an array view.</span>
-   <span class="signature">[`minmaxViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/minmax-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.</span>
-   <span class="signature">[`ndarraylike2ndarray( x )`][@stdlib/ndarray/base/ndarraylike2ndarray]</span><span class="delimiter">: </span><span class="description">convert an ndarray-like object to an `ndarray`.</span>
-   <span class="signature">[`ndarraylike2object( x )`][@stdlib/ndarray/base/ndarraylike2object]</span><span class="delimiter">: </span><span class="description">convert an `ndarray`-like object to an object likely to have the same "shape".</span>
-   <span class="signature">[`ndarraylike2scalar( x )`][@stdlib/ndarray/base/ndarraylike2scalar]</span><span class="delimiter">: </span><span class="description">convert an ndarray-like object to a scalar value.</span>
-   <span class="signature">[`ndims( x )`][@stdlib/ndarray/base/ndims]</span><span class="delimiter">: </span><span class="description">return the number of ndarray dimensions.</span>
-   <span class="signature">[`nextCartesianIndex( shape, order, idx, dim )`][@stdlib/ndarray/base/next-cartesian-index]</span><span class="delimiter">: </span><span class="description">return the next Cartesian index (i.e., set of subscripts/dimension indices).</span>
-   <span class="signature">[`nonsingletonDimensions( shape )`][@stdlib/ndarray/base/nonsingleton-dimensions]</span><span class="delimiter">: </span><span class="description">return the number of non-singleton dimensions.</span>
-   <span class="signature">[`normalizeIndex( idx, max )`][@stdlib/ndarray/base/normalize-index]</span><span class="delimiter">: </span><span class="description">normalize an index to the interval `[0,max]`.</span>
-   <span class="signature">[`normalizeIndices( indices, max )`][@stdlib/ndarray/base/normalize-indices]</span><span class="delimiter">: </span><span class="description">normalize a list of indices to the interval `[0,max]`.</span>
-   <span class="signature">[`nullaryLoopOrder( shape, stridesX )`][@stdlib/ndarray/base/nullary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`nullaryStrided1dDispatchFactory( table, idtypes, odtypes[, options] )`][@stdlib/ndarray/base/nullary-strided1d-dispatch-factory]</span><span class="delimiter">: </span><span class="description">create a function for applying a strided function to an ndarray.</span>
-   <span class="signature">[`nullaryStrided1dDispatch( table, idtypes, odtypes[, options] )`][@stdlib/ndarray/base/nullary-strided1d-dispatch]</span><span class="delimiter">: </span><span class="description">constructor for applying a strided function to an ndarray.</span>
-   <span class="signature">[`nullaryStrided1d( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/nullary-strided1d]</span><span class="delimiter">: </span><span class="description">apply a one-dimensional strided array function to a list of specified dimensions in an ndarray.</span>
-   <span class="signature">[`nullaryBlockSize( dtypeX )`][@stdlib/ndarray/base/nullary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`nullary( arrays, fcn )`][@stdlib/ndarray/base/nullary]</span><span class="delimiter">: </span><span class="description">apply a nullary callback and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`numelDimension( x, dim )`][@stdlib/ndarray/base/numel-dimension]</span><span class="delimiter">: </span><span class="description">return the size (i.e., number of elements) of a specified dimension for a provided ndarray.</span>
-   <span class="signature">[`numel( shape )`][@stdlib/ndarray/base/numel]</span><span class="delimiter">: </span><span class="description">return the number of elements in an array.</span>
-   <span class="signature">[`offset( x )`][@stdlib/ndarray/base/offset]</span><span class="delimiter">: </span><span class="description">return the index offset specifying the underlying buffer index of the first iterated ndarray element.</span>
-   <span class="signature">[`order( x )`][@stdlib/ndarray/base/order]</span><span class="delimiter">: </span><span class="description">return the layout order of a provided ndarray.</span>
-   <span class="signature">[`outputDataType( dtypes, policy )`][@stdlib/ndarray/base/output-dtype]</span><span class="delimiter">: </span><span class="description">resolve the output ndarray data type from a list of input ndarray data types.</span>
-   <span class="signature">[`outputPolicyEnum2Str( policy )`][@stdlib/ndarray/base/output-policy-enum2str]</span><span class="delimiter">: </span><span class="description">return the policy string associated with an output ndarray data type policy enumeration constant.</span>
-   <span class="signature">[`outputPolicyResolveEnum( policy )`][@stdlib/ndarray/base/output-policy-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported ndarray data type policy value.</span>
-   <span class="signature">[`outputPolicyResolveStr( dtype )`][@stdlib/ndarray/base/output-policy-resolve-str]</span><span class="delimiter">: </span><span class="description">return the policy string associated with a supported ndarray data type policy value.</span>
-   <span class="signature">[`outputPolicyStr2Enum( policy )`][@stdlib/ndarray/base/output-policy-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with an output ndarray data type policy string.</span>
-   <span class="signature">[`pop( x, dim, writable )`][@stdlib/ndarray/base/pop]</span><span class="delimiter">: </span><span class="description">return an array containing a truncated view of an input ndarray and a view of the last element(s) along a specified dimension.</span>
-   <span class="signature">[`prependSingletonDimensions( x, n )`][@stdlib/ndarray/base/prepend-singleton-dimensions]</span><span class="delimiter">: </span><span class="description">prepend singleton dimensions.</span>
-   <span class="signature">[`promoteDataTypes( dtypes )`][@stdlib/ndarray/base/promote-dtypes]</span><span class="delimiter">: </span><span class="description">resolve the data type that results from applying promotion rules to a provided list of data types.</span>
-   <span class="signature">[`removeSingletonDimensions( x )`][@stdlib/ndarray/base/remove-singleton-dimensions]</span><span class="delimiter">: </span><span class="description">remove singleton dimensions.</span>
-   <span class="signature">[`reverseDimension( x, dim, writable )`][@stdlib/ndarray/base/reverse-dimension]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along a specified dimension is reversed.</span>
-   <span class="signature">[`reverse( x, writable )`][@stdlib/ndarray/base/reverse]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along each dimension is reversed.</span>
-   <span class="signature">[`serializeMetaData( x )`][@stdlib/ndarray/base/serialize-meta-data]</span><span class="delimiter">: </span><span class="description">serialize ndarray meta data.</span>
-   <span class="signature">[`shape( x, copy )`][@stdlib/ndarray/base/shape]</span><span class="delimiter">: </span><span class="description">return the shape of a provided ndarray.</span>
-   <span class="signature">[`shape2strides( shape, order )`][@stdlib/ndarray/base/shape2strides]</span><span class="delimiter">: </span><span class="description">generate a stride array from an array shape.</span>
-   <span class="signature">[`shift( x, dim, writable )`][@stdlib/ndarray/base/shift]</span><span class="delimiter">: </span><span class="description">return an array containing a truncated view of an input ndarray and a view of the first element(s) along a specified dimension.</span>
-   <span class="signature">[`singletonDimensions( shape )`][@stdlib/ndarray/base/singleton-dimensions]</span><span class="delimiter">: </span><span class="description">return the number of singleton dimensions.</span>
-   <span class="signature">[`sliceAssign( x, y, slice, strict )`][@stdlib/ndarray/base/slice-assign]</span><span class="delimiter">: </span><span class="description">assign element values from a broadcasted input `ndarray` to corresponding elements in an output `ndarray` view.</span>
-   <span class="signature">[`sliceDimensionFrom( x, dim, start, strict, writable )`][@stdlib/ndarray/base/slice-dimension-from]</span><span class="delimiter">: </span><span class="description">return a shifted view of an input ndarray along a specified dimension.</span>
-   <span class="signature">[`sliceDimensionTo( x, dim, stop, strict, writable )`][@stdlib/ndarray/base/slice-dimension-to]</span><span class="delimiter">: </span><span class="description">return a truncated view of an input ndarray along a specified dimension.</span>
-   <span class="signature">[`sliceDimension( x, dim, slice, strict, writable )`][@stdlib/ndarray/base/slice-dimension]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray when sliced along a specified dimension.</span>
-   <span class="signature">[`sliceFrom( x, start, strict, writable )`][@stdlib/ndarray/base/slice-from]</span><span class="delimiter">: </span><span class="description">return a shifted view of an input ndarray.</span>
-   <span class="signature">[`sliceTo( x, stop, strict, writable )`][@stdlib/ndarray/base/slice-to]</span><span class="delimiter">: </span><span class="description">return a truncated view of an input ndarray.</span>
-   <span class="signature">[`slice( x, slice, strict, writable )`][@stdlib/ndarray/base/slice]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray.</span>
-   <span class="signature">[`someBy( arrays, predicate[, thisArg ] )`][@stdlib/ndarray/base/some-by]</span><span class="delimiter">: </span><span class="description">test whether at least `n` elements in an ndarray pass a test implemented by a predicate function.</span>
-   <span class="signature">[`some( arrays )`][@stdlib/ndarray/base/some]</span><span class="delimiter">: </span><span class="description">test whether at least `n` elements in an ndarray are truthy.</span>
-   <span class="signature">[`spreadDimensions( ndims, x, dims )`][@stdlib/ndarray/base/spread-dimensions]</span><span class="delimiter">: </span><span class="description">expand the shape of an array to a specified dimensionality by spreading its dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.</span>
-   <span class="signature">[`stride( x, dim )`][@stdlib/ndarray/base/stride]</span><span class="delimiter">: </span><span class="description">return the stride along a specified dimension for a provided ndarray.</span>
-   <span class="signature">[`strides( x, copy )`][@stdlib/ndarray/base/strides]</span><span class="delimiter">: </span><span class="description">return the strides of a provided ndarray.</span>
-   <span class="signature">[`strides2offset( shape, strides )`][@stdlib/ndarray/base/strides2offset]</span><span class="delimiter">: </span><span class="description">determine the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.</span>
-   <span class="signature">[`strides2order( strides )`][@stdlib/ndarray/base/strides2order]</span><span class="delimiter">: </span><span class="description">determine the order of a multidimensional array based on a provided stride array.</span>
-   <span class="signature">[`sub2ind( shape, strides, offset, ...subscripts, mode )`][@stdlib/ndarray/base/sub2ind]</span><span class="delimiter">: </span><span class="description">convert subscripts to a linear index.</span>
-   <span class="signature">[`ndarray2array( buffer, shape, strides, offset, order )`][@stdlib/ndarray/base/to-array]</span><span class="delimiter">: </span><span class="description">convert an ndarray buffer to a generic array.</span>
-   <span class="signature">[`toNormalizedIndices( indices, max )`][@stdlib/ndarray/base/to-normalized-indices]</span><span class="delimiter">: </span><span class="description">normalize a list of indices to the interval `[0,max]`.</span>
-   <span class="signature">[`toReversed( x )`][@stdlib/ndarray/base/to-reversed]</span><span class="delimiter">: </span><span class="description">return a new ndarray where the order of elements of an input ndarray is reversed along each dimension.</span>
-   <span class="signature">[`toUniqueNormalizedIndices( indices, max )`][@stdlib/ndarray/base/to-unique-normalized-indices]</span><span class="delimiter">: </span><span class="description">return a list of unique indices after normalizing to the interval `[0,max]`.</span>
-   <span class="signature">[`transpose( x )`][@stdlib/ndarray/base/transpose]</span><span class="delimiter">: </span><span class="description">transpose a matrix (or a stack of matrices).</span>
-   <span class="signature">[`unaryAccumulate( arrays, initial, clbk )`][@stdlib/ndarray/base/unary-accumulate]</span><span class="delimiter">: </span><span class="description">perform a reduction over elements in an input ndarray.</span>
-   <span class="signature">[`unaryAddonDispatch( addon, fallback )`][@stdlib/ndarray/base/unary-addon-dispatch]</span><span class="delimiter">: </span><span class="description">dispatch to a native add-on applying a unary function to an input ndarray.</span>
-   <span class="signature">[`unaryBy( arrays, fcn, clbk[, thisArg] )`][@stdlib/ndarray/base/unary-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element in an input ndarray according to a callback function and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`unaryInputCastingDataType( idtype, odtype, policy )`][@stdlib/ndarray/base/unary-input-casting-dtype]</span><span class="delimiter">: </span><span class="description">resolve the input ndarray casting data type for a unary function.</span>
-   <span class="signature">[`unaryLoopOrder( shape, stridesX, stridesY )`][@stdlib/ndarray/base/unary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`unaryOutputDataType( dtype, policy )`][@stdlib/ndarray/base/unary-output-dtype]</span><span class="delimiter">: </span><span class="description">resolve the output ndarray data type for a unary function.</span>
-   <span class="signature">[`unaryReduceStrided1dAssignStruct( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/unary-reduce-strided1d-assign-struct]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function which accepts an output `struct` object and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryReduceStrided1dBy( fcn, arrays, dims[, options], clbk[, thisArg] )`][@stdlib/ndarray/base/unary-reduce-strided1d-by]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function accepting a callback and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryReduceStrided1dDispatchByFactory( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by-factory]</span><span class="delimiter">: </span><span class="description">create a function for performing a reduction on an input ndarray according to a callback function.</span>
-   <span class="signature">[`unaryReduceStrided1dDispatchBy( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by]</span><span class="delimiter">: </span><span class="description">constructor for performing a reduction on an input ndarray according to a callback function.</span>
-   <span class="signature">[`unaryReduceStrided1dDispatchFactory( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory]</span><span class="delimiter">: </span><span class="description">create a function for performing a reduction on an input ndarray.</span>
-   <span class="signature">[`unaryReduceStrided1dDispatch( table, idtypes, odtypes, policies )`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch]</span><span class="delimiter">: </span><span class="description">constructor for performing a reduction on an input ndarray.</span>
-   <span class="signature">[`unaryReduceStrided1d( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/unary-reduce-strided1d]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray via a one-dimensional strided array reduction function and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryReduceSubarrayBy( fcn, arrays, dims[, options], clbk[, thisArg] )`][@stdlib/ndarray/base/unary-reduce-subarray-by]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray according to a callback function and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryReduceSubarray( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/unary-reduce-subarray]</span><span class="delimiter">: </span><span class="description">perform a reduction over a list of specified dimensions in an input ndarray and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryStrided1dDispatchFactory( table, idtypes, odtypes, policies[, options] )`][@stdlib/ndarray/base/unary-strided1d-dispatch-factory]</span><span class="delimiter">: </span><span class="description">create a function for applying a strided function an input ndarray.</span>
-   <span class="signature">[`unaryStrided1dDispatch( table, idtypes, odtypes, policies[, options] )`][@stdlib/ndarray/base/unary-strided1d-dispatch]</span><span class="delimiter">: </span><span class="description">constructor for applying a strided function to an input ndarray.</span>
-   <span class="signature">[`unaryStrided1d( fcn, arrays, dims[, options] )`][@stdlib/ndarray/base/unary-strided1d]</span><span class="delimiter">: </span><span class="description">apply a one-dimensional strided array function to a list of specified dimensions in an input ndarray and assign results to a provided output ndarray.</span>
-   <span class="signature">[`unaryBlockSize( dtypeX, dtypeY )`][@stdlib/ndarray/base/unary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`unary( arrays, fcn )`][@stdlib/ndarray/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in an input ndarray and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`vind2bind( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/vind2bind]</span><span class="delimiter">: </span><span class="description">convert a linear index in an array view to a linear index in an underlying data buffer.</span>
-   <span class="signature">[`wrapIndex( idx, max )`][@stdlib/ndarray/base/wrap-index]</span><span class="delimiter">: </span><span class="description">wrap an index on the interval `[0,max]`.</span>
-   <span class="signature">[`zerosLike( x )`][@stdlib/ndarray/base/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having the same shape and data type as a provided ndarray.</span>
-   <span class="signature">[`zeros( dtype, shape, order )`][@stdlib/ndarray/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having a specified shape and data type.</span>
-   <span class="signature">[`zip2views1d( arrays, labels )`][@stdlib/ndarray/base/zip2views1d]</span><span class="delimiter">: </span><span class="description">zip one or more one-dimensional ndarrays to an array of composite views.</span>

</div>

<!-- </toc> -->

The namespace contains the following sub-namespaces:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`assert`][@stdlib/ndarray/base/assert]</span><span class="delimiter">: </span><span class="description">base ndarray assertion utilities.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base

[test-image]: https://github.com/stdlib-js/ndarray-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/ndarray/base/assert]: https://github.com/stdlib-js/ndarray-base-assert/tree/esm

[@stdlib/ndarray/base/any-by]: https://github.com/stdlib-js/ndarray-base-any-by/tree/esm

[@stdlib/ndarray/base/any]: https://github.com/stdlib-js/ndarray-base-any/tree/esm

[@stdlib/ndarray/base/assign]: https://github.com/stdlib-js/ndarray-base-assign/tree/esm

[@stdlib/ndarray/base/binary-input-casting-dtype]: https://github.com/stdlib-js/ndarray-base-binary-input-casting-dtype/tree/esm

[@stdlib/ndarray/base/binary-loop-interchange-order]: https://github.com/stdlib-js/ndarray-base-binary-loop-interchange-order/tree/esm

[@stdlib/ndarray/base/binary-output-dtype]: https://github.com/stdlib-js/ndarray-base-binary-output-dtype/tree/esm

[@stdlib/ndarray/base/binary-reduce-strided1d-dispatch-factory]: https://github.com/stdlib-js/ndarray-base-binary-reduce-strided1d-dispatch-factory/tree/esm

[@stdlib/ndarray/base/binary-reduce-strided1d-dispatch]: https://github.com/stdlib-js/ndarray-base-binary-reduce-strided1d-dispatch/tree/esm

[@stdlib/ndarray/base/binary-reduce-strided1d]: https://github.com/stdlib-js/ndarray-base-binary-reduce-strided1d/tree/esm

[@stdlib/ndarray/base/binary-tiling-block-size]: https://github.com/stdlib-js/ndarray-base-binary-tiling-block-size/tree/esm

[@stdlib/ndarray/base/binary]: https://github.com/stdlib-js/ndarray-base-binary/tree/esm

[@stdlib/ndarray/base/bind2vind]: https://github.com/stdlib-js/ndarray-base-bind2vind/tree/esm

[@stdlib/ndarray/base/broadcast-array-except-dimensions]: https://github.com/stdlib-js/ndarray-base-broadcast-array-except-dimensions/tree/esm

[@stdlib/ndarray/base/broadcast-array]: https://github.com/stdlib-js/ndarray-base-broadcast-array/tree/esm

[@stdlib/ndarray/base/broadcast-arrays]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/tree/esm

[@stdlib/ndarray/base/broadcast-scalar]: https://github.com/stdlib-js/ndarray-base-broadcast-scalar/tree/esm

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/esm

[@stdlib/ndarray/base/buffer-ctors]: https://github.com/stdlib-js/ndarray-base-buffer-ctors/tree/esm

[@stdlib/ndarray/base/buffer-dtype-enum]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum/tree/esm

[@stdlib/ndarray/base/buffer-dtype]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/tree/esm

[@stdlib/ndarray/base/buffer]: https://github.com/stdlib-js/ndarray-base-buffer/tree/esm

[@stdlib/ndarray/base/bytes-per-element]: https://github.com/stdlib-js/ndarray-base-bytes-per-element/tree/esm

[@stdlib/ndarray/base/char2dtype]: https://github.com/stdlib-js/ndarray-base-char2dtype/tree/esm

[@stdlib/ndarray/base/clamp-index]: https://github.com/stdlib-js/ndarray-base-clamp-index/tree/esm

[@stdlib/ndarray/base/copy]: https://github.com/stdlib-js/ndarray-base-copy/tree/esm

[@stdlib/ndarray/base/count-falsy]: https://github.com/stdlib-js/ndarray-base-count-falsy/tree/esm

[@stdlib/ndarray/base/count-if]: https://github.com/stdlib-js/ndarray-base-count-if/tree/esm

[@stdlib/ndarray/base/count-truthy]: https://github.com/stdlib-js/ndarray-base-count-truthy/tree/esm

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray-base-ctor/tree/esm

[@stdlib/ndarray/base/data-buffer]: https://github.com/stdlib-js/ndarray-base-data-buffer/tree/esm

[@stdlib/ndarray/base/dtype-alignment]: https://github.com/stdlib-js/ndarray-base-dtype-alignment/tree/esm

[@stdlib/ndarray/base/dtype-char]: https://github.com/stdlib-js/ndarray-base-dtype-char/tree/esm

[@stdlib/ndarray/base/dtype-chars]: https://github.com/stdlib-js/ndarray-base-dtype-chars/tree/esm

[@stdlib/ndarray/base/dtype-desc]: https://github.com/stdlib-js/ndarray-base-dtype-desc/tree/esm

[@stdlib/ndarray/base/dtype-enum2str]: https://github.com/stdlib-js/ndarray-base-dtype-enum2str/tree/esm

[@stdlib/ndarray/base/dtype-enums]: https://github.com/stdlib-js/ndarray-base-dtype-enums/tree/esm

[@stdlib/ndarray/base/dtype-objects]: https://github.com/stdlib-js/ndarray-base-dtype-objects/tree/esm

[@stdlib/ndarray/base/dtype-resolve-enum]: https://github.com/stdlib-js/ndarray-base-dtype-resolve-enum/tree/esm

[@stdlib/ndarray/base/dtype-resolve-str]: https://github.com/stdlib-js/ndarray-base-dtype-resolve-str/tree/esm

[@stdlib/ndarray/base/dtype-str2enum]: https://github.com/stdlib-js/ndarray-base-dtype-str2enum/tree/esm

[@stdlib/ndarray/base/dtype-strings]: https://github.com/stdlib-js/ndarray-base-dtype-strings/tree/esm

[@stdlib/ndarray/base/dtype]: https://github.com/stdlib-js/ndarray-base-dtype/tree/esm

[@stdlib/ndarray/base/dtype2c]: https://github.com/stdlib-js/ndarray-base-dtype2c/tree/esm

[@stdlib/ndarray/base/dtypes2enums]: https://github.com/stdlib-js/ndarray-base-dtypes2enums/tree/esm

[@stdlib/ndarray/base/dtypes2signatures]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures/tree/esm

[@stdlib/ndarray/base/empty-like]: https://github.com/stdlib-js/ndarray-base-empty-like/tree/esm

[@stdlib/ndarray/base/empty]: https://github.com/stdlib-js/ndarray-base-empty/tree/esm

[@stdlib/ndarray/base/every-by]: https://github.com/stdlib-js/ndarray-base-every-by/tree/esm

[@stdlib/ndarray/base/every]: https://github.com/stdlib-js/ndarray-base-every/tree/esm

[@stdlib/ndarray/base/expand-dimensions]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/tree/esm

[@stdlib/ndarray/base/fill-by]: https://github.com/stdlib-js/ndarray-base-fill-by/tree/esm

[@stdlib/ndarray/base/fill]: https://github.com/stdlib-js/ndarray-base-fill/tree/esm

[@stdlib/ndarray/base/find]: https://github.com/stdlib-js/ndarray-base-find/tree/esm

[@stdlib/ndarray/base/flag]: https://github.com/stdlib-js/ndarray-base-flag/tree/esm

[@stdlib/ndarray/base/flags]: https://github.com/stdlib-js/ndarray-base-flags/tree/esm

[@stdlib/ndarray/base/flatten-shape-from]: https://github.com/stdlib-js/ndarray-base-flatten-shape-from/tree/esm

[@stdlib/ndarray/base/flatten-shape]: https://github.com/stdlib-js/ndarray-base-flatten-shape/tree/esm

[@stdlib/ndarray/base/fliplr]: https://github.com/stdlib-js/ndarray-base-fliplr/tree/esm

[@stdlib/ndarray/base/flipud]: https://github.com/stdlib-js/ndarray-base-flipud/tree/esm

[@stdlib/ndarray/base/for-each]: https://github.com/stdlib-js/ndarray-base-for-each/tree/esm

[@stdlib/ndarray/base/from-array]: https://github.com/stdlib-js/ndarray-base-from-array/tree/esm

[@stdlib/ndarray/base/from-scalar-like]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/tree/esm

[@stdlib/ndarray/base/from-scalar]: https://github.com/stdlib-js/ndarray-base-from-scalar/tree/esm

[@stdlib/ndarray/base/includes]: https://github.com/stdlib-js/ndarray-base-includes/tree/esm

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray-base-ind/tree/esm

[@stdlib/ndarray/base/ind2sub]: https://github.com/stdlib-js/ndarray-base-ind2sub/tree/esm

[@stdlib/ndarray/base/iteration-order]: https://github.com/stdlib-js/ndarray-base-iteration-order/tree/esm

[@stdlib/ndarray/base/loop-interchange-order]: https://github.com/stdlib-js/ndarray-base-loop-interchange-order/tree/esm

[@stdlib/ndarray/base/map]: https://github.com/stdlib-js/ndarray-base-map/tree/esm

[@stdlib/ndarray/base/max-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-max-view-buffer-index/tree/esm

[@stdlib/ndarray/base/maybe-broadcast-array]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array/tree/esm

[@stdlib/ndarray/base/maybe-broadcast-arrays]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-arrays/tree/esm

[@stdlib/ndarray/base/meta-data-props]: https://github.com/stdlib-js/ndarray-base-meta-data-props/tree/esm

[@stdlib/ndarray/base/min-signed-integer-dtype]: https://github.com/stdlib-js/ndarray-base-min-signed-integer-dtype/tree/esm

[@stdlib/ndarray/base/min-unsigned-integer-dtype]: https://github.com/stdlib-js/ndarray-base-min-unsigned-integer-dtype/tree/esm

[@stdlib/ndarray/base/min-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-min-view-buffer-index/tree/esm

[@stdlib/ndarray/base/minmax-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-minmax-view-buffer-index/tree/esm

[@stdlib/ndarray/base/ndarraylike2ndarray]: https://github.com/stdlib-js/ndarray-base-ndarraylike2ndarray/tree/esm

[@stdlib/ndarray/base/ndarraylike2object]: https://github.com/stdlib-js/ndarray-base-ndarraylike2object/tree/esm

[@stdlib/ndarray/base/ndarraylike2scalar]: https://github.com/stdlib-js/ndarray-base-ndarraylike2scalar/tree/esm

[@stdlib/ndarray/base/ndims]: https://github.com/stdlib-js/ndarray-base-ndims/tree/esm

[@stdlib/ndarray/base/next-cartesian-index]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/tree/esm

[@stdlib/ndarray/base/nonsingleton-dimensions]: https://github.com/stdlib-js/ndarray-base-nonsingleton-dimensions/tree/esm

[@stdlib/ndarray/base/normalize-index]: https://github.com/stdlib-js/ndarray-base-normalize-index/tree/esm

[@stdlib/ndarray/base/normalize-indices]: https://github.com/stdlib-js/ndarray-base-normalize-indices/tree/esm

[@stdlib/ndarray/base/nullary-loop-interchange-order]: https://github.com/stdlib-js/ndarray-base-nullary-loop-interchange-order/tree/esm

[@stdlib/ndarray/base/nullary-strided1d-dispatch-factory]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch-factory/tree/esm

[@stdlib/ndarray/base/nullary-strided1d-dispatch]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/tree/esm

[@stdlib/ndarray/base/nullary-strided1d]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d/tree/esm

[@stdlib/ndarray/base/nullary-tiling-block-size]: https://github.com/stdlib-js/ndarray-base-nullary-tiling-block-size/tree/esm

[@stdlib/ndarray/base/nullary]: https://github.com/stdlib-js/ndarray-base-nullary/tree/esm

[@stdlib/ndarray/base/numel-dimension]: https://github.com/stdlib-js/ndarray-base-numel-dimension/tree/esm

[@stdlib/ndarray/base/numel]: https://github.com/stdlib-js/ndarray-base-numel/tree/esm

[@stdlib/ndarray/base/offset]: https://github.com/stdlib-js/ndarray-base-offset/tree/esm

[@stdlib/ndarray/base/order]: https://github.com/stdlib-js/ndarray-base-order/tree/esm

[@stdlib/ndarray/base/output-dtype]: https://github.com/stdlib-js/ndarray-base-output-dtype/tree/esm

[@stdlib/ndarray/base/output-policy-enum2str]: https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/tree/esm

[@stdlib/ndarray/base/output-policy-resolve-enum]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/tree/esm

[@stdlib/ndarray/base/output-policy-resolve-str]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-str/tree/esm

[@stdlib/ndarray/base/output-policy-str2enum]: https://github.com/stdlib-js/ndarray-base-output-policy-str2enum/tree/esm

[@stdlib/ndarray/base/pop]: https://github.com/stdlib-js/ndarray-base-pop/tree/esm

[@stdlib/ndarray/base/prepend-singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-prepend-singleton-dimensions/tree/esm

[@stdlib/ndarray/base/promote-dtypes]: https://github.com/stdlib-js/ndarray-base-promote-dtypes/tree/esm

[@stdlib/ndarray/base/remove-singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-remove-singleton-dimensions/tree/esm

[@stdlib/ndarray/base/reverse-dimension]: https://github.com/stdlib-js/ndarray-base-reverse-dimension/tree/esm

[@stdlib/ndarray/base/reverse]: https://github.com/stdlib-js/ndarray-base-reverse/tree/esm

[@stdlib/ndarray/base/serialize-meta-data]: https://github.com/stdlib-js/ndarray-base-serialize-meta-data/tree/esm

[@stdlib/ndarray/base/shape]: https://github.com/stdlib-js/ndarray-base-shape/tree/esm

[@stdlib/ndarray/base/shape2strides]: https://github.com/stdlib-js/ndarray-base-shape2strides/tree/esm

[@stdlib/ndarray/base/shift]: https://github.com/stdlib-js/ndarray-base-shift/tree/esm

[@stdlib/ndarray/base/singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-singleton-dimensions/tree/esm

[@stdlib/ndarray/base/slice-assign]: https://github.com/stdlib-js/ndarray-base-slice-assign/tree/esm

[@stdlib/ndarray/base/slice-dimension-from]: https://github.com/stdlib-js/ndarray-base-slice-dimension-from/tree/esm

[@stdlib/ndarray/base/slice-dimension-to]: https://github.com/stdlib-js/ndarray-base-slice-dimension-to/tree/esm

[@stdlib/ndarray/base/slice-dimension]: https://github.com/stdlib-js/ndarray-base-slice-dimension/tree/esm

[@stdlib/ndarray/base/slice-from]: https://github.com/stdlib-js/ndarray-base-slice-from/tree/esm

[@stdlib/ndarray/base/slice-to]: https://github.com/stdlib-js/ndarray-base-slice-to/tree/esm

[@stdlib/ndarray/base/slice]: https://github.com/stdlib-js/ndarray-base-slice/tree/esm

[@stdlib/ndarray/base/some-by]: https://github.com/stdlib-js/ndarray-base-some-by/tree/esm

[@stdlib/ndarray/base/some]: https://github.com/stdlib-js/ndarray-base-some/tree/esm

[@stdlib/ndarray/base/spread-dimensions]: https://github.com/stdlib-js/ndarray-base-spread-dimensions/tree/esm

[@stdlib/ndarray/base/stride]: https://github.com/stdlib-js/ndarray-base-stride/tree/esm

[@stdlib/ndarray/base/strides]: https://github.com/stdlib-js/ndarray-base-strides/tree/esm

[@stdlib/ndarray/base/strides2offset]: https://github.com/stdlib-js/ndarray-base-strides2offset/tree/esm

[@stdlib/ndarray/base/strides2order]: https://github.com/stdlib-js/ndarray-base-strides2order/tree/esm

[@stdlib/ndarray/base/sub2ind]: https://github.com/stdlib-js/ndarray-base-sub2ind/tree/esm

[@stdlib/ndarray/base/to-array]: https://github.com/stdlib-js/ndarray-base-to-array/tree/esm

[@stdlib/ndarray/base/to-normalized-indices]: https://github.com/stdlib-js/ndarray-base-to-normalized-indices/tree/esm

[@stdlib/ndarray/base/to-reversed]: https://github.com/stdlib-js/ndarray-base-to-reversed/tree/esm

[@stdlib/ndarray/base/to-unique-normalized-indices]: https://github.com/stdlib-js/ndarray-base-to-unique-normalized-indices/tree/esm

[@stdlib/ndarray/base/transpose]: https://github.com/stdlib-js/ndarray-base-transpose/tree/esm

[@stdlib/ndarray/base/unary-accumulate]: https://github.com/stdlib-js/ndarray-base-unary-accumulate/tree/esm

[@stdlib/ndarray/base/unary-addon-dispatch]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/tree/esm

[@stdlib/ndarray/base/unary-by]: https://github.com/stdlib-js/ndarray-base-unary-by/tree/esm

[@stdlib/ndarray/base/unary-input-casting-dtype]: https://github.com/stdlib-js/ndarray-base-unary-input-casting-dtype/tree/esm

[@stdlib/ndarray/base/unary-loop-interchange-order]: https://github.com/stdlib-js/ndarray-base-unary-loop-interchange-order/tree/esm

[@stdlib/ndarray/base/unary-output-dtype]: https://github.com/stdlib-js/ndarray-base-unary-output-dtype/tree/esm

[@stdlib/ndarray/base/unary-reduce-strided1d-assign-struct]: https://github.com/stdlib-js/ndarray-base-unary-reduce-strided1d-assign-struct/tree/esm

[@stdlib/ndarray/base/unary-reduce-strided1d-by]: https://github.com/stdlib-js/ndarray-base-unary-reduce-strided1d-by/tree/esm

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by-factory]: https://github.com/stdlib-js/ndarray-base-unary-reduce-strided1d-dispatch-by-factory/tree/esm

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by]: https://github.com/stdlib-js/ndarray-base-unary-reduce-strided1d-dispatch-by/tree/esm

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory]: https://github.com/stdlib-js/ndarray-base-unary-reduce-strided1d-dispatch-factory/tree/esm

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch]: https://github.com/stdlib-js/ndarray-base-unary-reduce-strided1d-dispatch/tree/esm

[@stdlib/ndarray/base/unary-reduce-strided1d]: https://github.com/stdlib-js/ndarray-base-unary-reduce-strided1d/tree/esm

[@stdlib/ndarray/base/unary-reduce-subarray-by]: https://github.com/stdlib-js/ndarray-base-unary-reduce-subarray-by/tree/esm

[@stdlib/ndarray/base/unary-reduce-subarray]: https://github.com/stdlib-js/ndarray-base-unary-reduce-subarray/tree/esm

[@stdlib/ndarray/base/unary-strided1d-dispatch-factory]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch-factory/tree/esm

[@stdlib/ndarray/base/unary-strided1d-dispatch]: https://github.com/stdlib-js/ndarray-base-unary-strided1d-dispatch/tree/esm

[@stdlib/ndarray/base/unary-strided1d]: https://github.com/stdlib-js/ndarray-base-unary-strided1d/tree/esm

[@stdlib/ndarray/base/unary-tiling-block-size]: https://github.com/stdlib-js/ndarray-base-unary-tiling-block-size/tree/esm

[@stdlib/ndarray/base/unary]: https://github.com/stdlib-js/ndarray-base-unary/tree/esm

[@stdlib/ndarray/base/vind2bind]: https://github.com/stdlib-js/ndarray-base-vind2bind/tree/esm

[@stdlib/ndarray/base/wrap-index]: https://github.com/stdlib-js/ndarray-base-wrap-index/tree/esm

[@stdlib/ndarray/base/zeros-like]: https://github.com/stdlib-js/ndarray-base-zeros-like/tree/esm

[@stdlib/ndarray/base/zeros]: https://github.com/stdlib-js/ndarray-base-zeros/tree/esm

[@stdlib/ndarray/base/zip2views1d]: https://github.com/stdlib-js/ndarray-base-zip2views1d/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
