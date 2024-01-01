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

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/ndarray-base/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Base ndarray.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc keywords="-assertion" > -->

<div class="namespace-toc">

-   <span class="signature">[`assign( arrays )`][@stdlib/ndarray/base/assign]</span><span class="delimiter">: </span><span class="description">assign elements in an input ndarray to elements in an output ndarray.</span>
-   <span class="signature">[`binaryLoopOrder( shape, stridesX, stridesY, stridesZ )`][@stdlib/ndarray/base/binary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`binaryBlockSize( dtypeX, dtypeY, dtypeZ )`][@stdlib/ndarray/base/binary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`bind2vind( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/bind2vind]</span><span class="delimiter">: </span><span class="description">convert a linear index in an underlying data buffer to a linear index in an array view.</span>
-   <span class="signature">[`broadcastArray( arr, shape )`][@stdlib/ndarray/base/broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape.</span>
-   <span class="signature">[`broadcastArrays( arrays )`][@stdlib/ndarray/base/broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>
-   <span class="signature">[`broadcastScalar( value, dtype, shape, order )`][@stdlib/ndarray/base/broadcast-scalar]</span><span class="delimiter">: </span><span class="description">broadcast a scalar value to an `ndarray` having a specified shape.</span>
-   <span class="signature">[`broadcastShapes( shapes )`][@stdlib/ndarray/base/broadcast-shapes]</span><span class="delimiter">: </span><span class="description">broadcast array shapes to a single shape.</span>
-   <span class="signature">[`bufferCtors( dtype )`][@stdlib/ndarray/base/buffer-ctors]</span><span class="delimiter">: </span><span class="description">ndarray data buffer constructors.</span>
-   <span class="signature">[`bufferDataTypeEnum( buffer )`][@stdlib/ndarray/base/buffer-dtype-enum]</span><span class="delimiter">: </span><span class="description">return the data type enumeration constant of an ndarray data buffer.</span>
-   <span class="signature">[`bufferDataType( buffer )`][@stdlib/ndarray/base/buffer-dtype]</span><span class="delimiter">: </span><span class="description">return the data type of an ndarray data buffer.</span>
-   <span class="signature">[`buffer( dtype, size )`][@stdlib/ndarray/base/buffer]</span><span class="delimiter">: </span><span class="description">create a zero-filled contiguous linear ndarray data buffer.</span>
-   <span class="signature">[`bytesPerElement( dtype )`][@stdlib/ndarray/base/bytes-per-element]</span><span class="delimiter">: </span><span class="description">return the number of bytes per element provided an underlying array data type.</span>
-   <span class="signature">[`char2dtype( [ch] )`][@stdlib/ndarray/base/char2dtype]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a provided single letter character abbreviation.</span>
-   <span class="signature">[`clampIndex( idx, max )`][@stdlib/ndarray/base/clamp-index]</span><span class="delimiter">: </span><span class="description">restrict an index to the interval `[0,max]`.</span>
-   <span class="signature">[`ndarray( dtype, buffer, shape, strides, offset, order )`][@stdlib/ndarray/base/ctor]</span><span class="delimiter">: </span><span class="description">create a multidimensional array.</span>
-   <span class="signature">[`data( x )`][@stdlib/ndarray/base/data-buffer]</span><span class="delimiter">: </span><span class="description">return the underlying data buffer of a provided ndarray.</span>
-   <span class="signature">[`dtypeChar( [dtype] )`][@stdlib/ndarray/base/dtype-char]</span><span class="delimiter">: </span><span class="description">return the single letter abbreviation for an underlying array data type.</span>
-   <span class="signature">[`dtypeDesc( [dtype] )`][@stdlib/ndarray/base/dtype-desc]</span><span class="delimiter">: </span><span class="description">return the description for a specified data type.</span>
-   <span class="signature">[`dtypeEnum2Str( dtype )`][@stdlib/ndarray/base/dtype-enum2str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with an ndarray data type enumeration constant.</span>
-   <span class="signature">[`dtypeResolveEnum( dtype )`][@stdlib/ndarray/base/dtype-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported ndarray data type value.</span>
-   <span class="signature">[`dtypeResolveStr( dtype )`][@stdlib/ndarray/base/dtype-resolve-str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a supported ndarray data type value.</span>
-   <span class="signature">[`dtypeStr2Enum( dtype )`][@stdlib/ndarray/base/dtype-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with an ndarray data type string.</span>
-   <span class="signature">[`dtype( x )`][@stdlib/ndarray/base/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of a provided ndarray.</span>
-   <span class="signature">[`dtype2c( dtype )`][@stdlib/ndarray/base/dtype2c]</span><span class="delimiter">: </span><span class="description">return the C data type associated with a provided data type value.</span>
-   <span class="signature">[`dtypes2signatures( dtypes, nin, nout )`][@stdlib/ndarray/base/dtypes2signatures]</span><span class="delimiter">: </span><span class="description">transform a list of array argument data types into a list of signatures.</span>
-   <span class="signature">[`emptyLike( x )`][@stdlib/ndarray/base/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having the same shape and data type as a provided ndarray.</span>
-   <span class="signature">[`empty( dtype, shape, order )`][@stdlib/ndarray/base/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having a specified shape and data type.</span>
-   <span class="signature">[`expandDimensions( x, axis )`][@stdlib/ndarray/base/expand-dimensions]</span><span class="delimiter">: </span><span class="description">expand the shape of an array by inserting a new dimension of size one at a specified axis.</span>
-   <span class="signature">[`flag( x, name )`][@stdlib/ndarray/base/flag]</span><span class="delimiter">: </span><span class="description">return a specified flag for a provided ndarray.</span>
-   <span class="signature">[`flags( x, copy )`][@stdlib/ndarray/base/flags]</span><span class="delimiter">: </span><span class="description">return the flags of a provided ndarray.</span>
-   <span class="signature">[`fliplr( x, writable )`][@stdlib/ndarray/base/fliplr]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along the last dimension is reversed.</span>
-   <span class="signature">[`flipud( x, writable )`][@stdlib/ndarray/base/flipud]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along the second-to-last dimension is reversed.</span>
-   <span class="signature">[`scalar2ndarray( value, dtype, order )`][@stdlib/ndarray/base/from-scalar]</span><span class="delimiter">: </span><span class="description">convert a scalar value to a zero-dimensional ndarray.</span>
-   <span class="signature">[`ind( idx, max, mode )`][@stdlib/ndarray/base/ind]</span><span class="delimiter">: </span><span class="description">return an index given an index mode.</span>
-   <span class="signature">[`ind2sub( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/ind2sub]</span><span class="delimiter">: </span><span class="description">convert a linear index to an array of subscripts.</span>
-   <span class="signature">[`iterationOrder( strides )`][@stdlib/ndarray/base/iteration-order]</span><span class="delimiter">: </span><span class="description">given a stride array, determine array iteration order.</span>
-   <span class="signature">[`maxViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/max-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the maximum linear index in an underlying data buffer accessible to an array view.</span>
-   <span class="signature">[`maybeBroadcastArray( arr, shape )`][@stdlib/ndarray/base/maybe-broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.</span>
-   <span class="signature">[`maybeBroadcastArrays( arrays )`][@stdlib/ndarray/base/maybe-broadcast-arrays]</span><span class="delimiter">: </span><span class="description">broadcast ndarrays to a common shape.</span>
-   <span class="signature">[`metaDataProps( meta, dtypes, obj )`][@stdlib/ndarray/base/meta-data-props]</span><span class="delimiter">: </span><span class="description">define non-enumerable read-only properties which expose ndarray function meta data.</span>
-   <span class="signature">[`minViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/min-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the minimum linear index in an underlying data buffer accessible to an array view.</span>
-   <span class="signature">[`minmaxViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/minmax-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.</span>
-   <span class="signature">[`ndarraylike2object( x )`][@stdlib/ndarray/base/ndarraylike2object]</span><span class="delimiter">: </span><span class="description">convert an `ndarray`-like object to an object likely to have the same "shape".</span>
-   <span class="signature">[`ndims( x )`][@stdlib/ndarray/base/ndims]</span><span class="delimiter">: </span><span class="description">return the number of ndarray dimensions.</span>
-   <span class="signature">[`nextCartesianIndex( shape, order, idx, dim )`][@stdlib/ndarray/base/next-cartesian-index]</span><span class="delimiter">: </span><span class="description">return the next Cartesian index (i.e., set of subscripts/dimension indices).</span>
-   <span class="signature">[`nonsingletonDimensions( shape )`][@stdlib/ndarray/base/nonsingleton-dimensions]</span><span class="delimiter">: </span><span class="description">return the number of non-singleton dimensions.</span>
-   <span class="signature">[`normalizeIndex( idx, max )`][@stdlib/ndarray/base/normalize-index]</span><span class="delimiter">: </span><span class="description">normalize an index to the interval `[0,max]`.</span>
-   <span class="signature">[`nullaryLoopOrder( shape, stridesX )`][@stdlib/ndarray/base/nullary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`nullaryBlockSize( dtypeX )`][@stdlib/ndarray/base/nullary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`nullary( arrays, fcn )`][@stdlib/ndarray/base/nullary]</span><span class="delimiter">: </span><span class="description">apply a nullary callback and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`numel( shape )`][@stdlib/ndarray/base/numel]</span><span class="delimiter">: </span><span class="description">return the number of elements in an array.</span>
-   <span class="signature">[`offset( x )`][@stdlib/ndarray/base/offset]</span><span class="delimiter">: </span><span class="description">return the index offset specifying the underlying buffer index of the first iterated ndarray element.</span>
-   <span class="signature">[`order( x )`][@stdlib/ndarray/base/order]</span><span class="delimiter">: </span><span class="description">return the layout order of a provided ndarray.</span>
-   <span class="signature">[`outputPolicyEnum2Str( policy )`][@stdlib/ndarray/base/output-policy-enum2str]</span><span class="delimiter">: </span><span class="description">return the policy string associated with an output ndarray data type policy enumeration constant.</span>
-   <span class="signature">[`outputPolicyResolveEnum( policy )`][@stdlib/ndarray/base/output-policy-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported ndarray data type policy value.</span>
-   <span class="signature">[`outputPolicyResolveStr( dtype )`][@stdlib/ndarray/base/output-policy-resolve-str]</span><span class="delimiter">: </span><span class="description">return the policy string associated with a supported ndarray data type policy value.</span>
-   <span class="signature">[`outputPolicyStr2Enum( policy )`][@stdlib/ndarray/base/output-policy-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with an output ndarray data type policy string.</span>
-   <span class="signature">[`prependSingletonDimensions( x, n )`][@stdlib/ndarray/base/prepend-singleton-dimensions]</span><span class="delimiter">: </span><span class="description">prepend singleton dimensions.</span>
-   <span class="signature">[`removeSingletonDimensions( x )`][@stdlib/ndarray/base/remove-singleton-dimensions]</span><span class="delimiter">: </span><span class="description">remove singleton dimensions.</span>
-   <span class="signature">[`reverseDimension( x, dim, writable )`][@stdlib/ndarray/base/reverse-dimension]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along a specified dimension is reversed.</span>
-   <span class="signature">[`reverse( x, writable )`][@stdlib/ndarray/base/reverse]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray in which the order of elements along each dimension is reversed.</span>
-   <span class="signature">[`serializeMetaData( x )`][@stdlib/ndarray/base/serialize-meta-data]</span><span class="delimiter">: </span><span class="description">serialize ndarray meta data.</span>
-   <span class="signature">[`shape( x, copy )`][@stdlib/ndarray/base/shape]</span><span class="delimiter">: </span><span class="description">return the shape of a provided ndarray.</span>
-   <span class="signature">[`shape2strides( shape, order )`][@stdlib/ndarray/base/shape2strides]</span><span class="delimiter">: </span><span class="description">generate a stride array from an array shape.</span>
-   <span class="signature">[`singletonDimensions( shape )`][@stdlib/ndarray/base/singleton-dimensions]</span><span class="delimiter">: </span><span class="description">return the number of singleton dimensions.</span>
-   <span class="signature">[`sliceAssign( x, y, slice, strict )`][@stdlib/ndarray/base/slice-assign]</span><span class="delimiter">: </span><span class="description">assign element values from a broadcasted input `ndarray` to corresponding elements in an output `ndarray` view.</span>
-   <span class="signature">[`sliceDimensionFrom( x, dim, start, strict, writable )`][@stdlib/ndarray/base/slice-dimension-from]</span><span class="delimiter">: </span><span class="description">return a shifted view of an input ndarray along a specified dimension.</span>
-   <span class="signature">[`sliceDimensionTo( x, dim, stop, strict, writable )`][@stdlib/ndarray/base/slice-dimension-to]</span><span class="delimiter">: </span><span class="description">return a truncated view of an input ndarray along a specified dimension.</span>
-   <span class="signature">[`sliceDimension( x, dim, slice, strict, writable )`][@stdlib/ndarray/base/slice-dimension]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray when sliced along a specified dimension.</span>
-   <span class="signature">[`sliceFrom( x, start, strict, writable )`][@stdlib/ndarray/base/slice-from]</span><span class="delimiter">: </span><span class="description">return a shifted view of an input ndarray.</span>
-   <span class="signature">[`sliceTo( x, stop, strict, writable )`][@stdlib/ndarray/base/slice-to]</span><span class="delimiter">: </span><span class="description">return a truncated view of an input ndarray.</span>
-   <span class="signature">[`slice( x, slice, strict, writable )`][@stdlib/ndarray/base/slice]</span><span class="delimiter">: </span><span class="description">return a view of an input ndarray.</span>
-   <span class="signature">[`stride( x, dim )`][@stdlib/ndarray/base/stride]</span><span class="delimiter">: </span><span class="description">return the stride along a specified dimension for a provided ndarray.</span>
-   <span class="signature">[`strides( x, copy )`][@stdlib/ndarray/base/strides]</span><span class="delimiter">: </span><span class="description">return the strides of a provided ndarray.</span>
-   <span class="signature">[`strides2offset( shape, strides )`][@stdlib/ndarray/base/strides2offset]</span><span class="delimiter">: </span><span class="description">determine the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.</span>
-   <span class="signature">[`strides2order( strides )`][@stdlib/ndarray/base/strides2order]</span><span class="delimiter">: </span><span class="description">determine the order of a multidimensional array based on a provided stride array.</span>
-   <span class="signature">[`sub2ind( shape, strides, offset, ...subscripts, mode )`][@stdlib/ndarray/base/sub2ind]</span><span class="delimiter">: </span><span class="description">convert subscripts to a linear index.</span>
-   <span class="signature">[`ndarray2array( buffer, shape, strides, offset, order )`][@stdlib/ndarray/base/to-array]</span><span class="delimiter">: </span><span class="description">convert an ndarray buffer to a generic array.</span>
-   <span class="signature">[`transpose( x )`][@stdlib/ndarray/base/transpose]</span><span class="delimiter">: </span><span class="description">transpose a matrix (or a stack of matrices).</span>
-   <span class="signature">[`unaryBy( arrays, fcn, clbk[, thisArg] )`][@stdlib/ndarray/base/unary-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element in an input ndarray according to a callback function and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`unaryLoopOrder( shape, stridesX, stridesY )`][@stdlib/ndarray/base/unary-loop-interchange-order]</span><span class="delimiter">: </span><span class="description">reorder ndarray dimensions and associated strides for loop interchange.</span>
-   <span class="signature">[`unaryOutputDataType( dtype, policy )`][@stdlib/ndarray/base/unary-output-dtype]</span><span class="delimiter">: </span><span class="description">resolve the output ndarray data type for a unary function.</span>
-   <span class="signature">[`unaryBlockSize( dtypeX, dtypeY )`][@stdlib/ndarray/base/unary-tiling-block-size]</span><span class="delimiter">: </span><span class="description">resolve a loop block size for multi-dimensional array tiled loops.</span>
-   <span class="signature">[`unary( arrays, fcn )`][@stdlib/ndarray/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in an input ndarray and assign results to elements in an output ndarray.</span>
-   <span class="signature">[`vind2bind( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/vind2bind]</span><span class="delimiter">: </span><span class="description">convert a linear index in an array view to a linear index in an underlying data buffer.</span>
-   <span class="signature">[`wrapIndex( idx, max )`][@stdlib/ndarray/base/wrap-index]</span><span class="delimiter">: </span><span class="description">wrap an index on the interval `[0,max]`.</span>
-   <span class="signature">[`zerosLike( x )`][@stdlib/ndarray/base/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having the same shape and data type as a provided ndarray.</span>
-   <span class="signature">[`zeros( dtype, shape, order )`][@stdlib/ndarray/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having a specified shape and data type.</span>

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
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

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
[umd-url]: https://github.com/stdlib-js/ndarray-base/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/ndarray/base/assert]: https://github.com/stdlib-js/ndarray-base-assert/tree/umd

[@stdlib/ndarray/base/assign]: https://github.com/stdlib-js/ndarray-base-assign/tree/umd

[@stdlib/ndarray/base/binary-loop-interchange-order]: https://github.com/stdlib-js/ndarray-base-binary-loop-interchange-order/tree/umd

[@stdlib/ndarray/base/binary-tiling-block-size]: https://github.com/stdlib-js/ndarray-base-binary-tiling-block-size/tree/umd

[@stdlib/ndarray/base/bind2vind]: https://github.com/stdlib-js/ndarray-base-bind2vind/tree/umd

[@stdlib/ndarray/base/broadcast-array]: https://github.com/stdlib-js/ndarray-base-broadcast-array/tree/umd

[@stdlib/ndarray/base/broadcast-arrays]: https://github.com/stdlib-js/ndarray-base-broadcast-arrays/tree/umd

[@stdlib/ndarray/base/broadcast-scalar]: https://github.com/stdlib-js/ndarray-base-broadcast-scalar/tree/umd

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/umd

[@stdlib/ndarray/base/buffer-ctors]: https://github.com/stdlib-js/ndarray-base-buffer-ctors/tree/umd

[@stdlib/ndarray/base/buffer-dtype-enum]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum/tree/umd

[@stdlib/ndarray/base/buffer-dtype]: https://github.com/stdlib-js/ndarray-base-buffer-dtype/tree/umd

[@stdlib/ndarray/base/buffer]: https://github.com/stdlib-js/ndarray-base-buffer/tree/umd

[@stdlib/ndarray/base/bytes-per-element]: https://github.com/stdlib-js/ndarray-base-bytes-per-element/tree/umd

[@stdlib/ndarray/base/char2dtype]: https://github.com/stdlib-js/ndarray-base-char2dtype/tree/umd

[@stdlib/ndarray/base/clamp-index]: https://github.com/stdlib-js/ndarray-base-clamp-index/tree/umd

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray-base-ctor/tree/umd

[@stdlib/ndarray/base/data-buffer]: https://github.com/stdlib-js/ndarray-base-data-buffer/tree/umd

[@stdlib/ndarray/base/dtype-char]: https://github.com/stdlib-js/ndarray-base-dtype-char/tree/umd

[@stdlib/ndarray/base/dtype-desc]: https://github.com/stdlib-js/ndarray-base-dtype-desc/tree/umd

[@stdlib/ndarray/base/dtype-enum2str]: https://github.com/stdlib-js/ndarray-base-dtype-enum2str/tree/umd

[@stdlib/ndarray/base/dtype-resolve-enum]: https://github.com/stdlib-js/ndarray-base-dtype-resolve-enum/tree/umd

[@stdlib/ndarray/base/dtype-resolve-str]: https://github.com/stdlib-js/ndarray-base-dtype-resolve-str/tree/umd

[@stdlib/ndarray/base/dtype-str2enum]: https://github.com/stdlib-js/ndarray-base-dtype-str2enum/tree/umd

[@stdlib/ndarray/base/dtype]: https://github.com/stdlib-js/ndarray-base-dtype/tree/umd

[@stdlib/ndarray/base/dtype2c]: https://github.com/stdlib-js/ndarray-base-dtype2c/tree/umd

[@stdlib/ndarray/base/dtypes2signatures]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures/tree/umd

[@stdlib/ndarray/base/empty-like]: https://github.com/stdlib-js/ndarray-base-empty-like/tree/umd

[@stdlib/ndarray/base/empty]: https://github.com/stdlib-js/ndarray-base-empty/tree/umd

[@stdlib/ndarray/base/expand-dimensions]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/tree/umd

[@stdlib/ndarray/base/flag]: https://github.com/stdlib-js/ndarray-base-flag/tree/umd

[@stdlib/ndarray/base/flags]: https://github.com/stdlib-js/ndarray-base-flags/tree/umd

[@stdlib/ndarray/base/fliplr]: https://github.com/stdlib-js/ndarray-base-fliplr/tree/umd

[@stdlib/ndarray/base/flipud]: https://github.com/stdlib-js/ndarray-base-flipud/tree/umd

[@stdlib/ndarray/base/from-scalar]: https://github.com/stdlib-js/ndarray-base-from-scalar/tree/umd

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray-base-ind/tree/umd

[@stdlib/ndarray/base/ind2sub]: https://github.com/stdlib-js/ndarray-base-ind2sub/tree/umd

[@stdlib/ndarray/base/iteration-order]: https://github.com/stdlib-js/ndarray-base-iteration-order/tree/umd

[@stdlib/ndarray/base/max-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-max-view-buffer-index/tree/umd

[@stdlib/ndarray/base/maybe-broadcast-array]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array/tree/umd

[@stdlib/ndarray/base/maybe-broadcast-arrays]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-arrays/tree/umd

[@stdlib/ndarray/base/meta-data-props]: https://github.com/stdlib-js/ndarray-base-meta-data-props/tree/umd

[@stdlib/ndarray/base/min-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-min-view-buffer-index/tree/umd

[@stdlib/ndarray/base/minmax-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-minmax-view-buffer-index/tree/umd

[@stdlib/ndarray/base/ndarraylike2object]: https://github.com/stdlib-js/ndarray-base-ndarraylike2object/tree/umd

[@stdlib/ndarray/base/ndims]: https://github.com/stdlib-js/ndarray-base-ndims/tree/umd

[@stdlib/ndarray/base/next-cartesian-index]: https://github.com/stdlib-js/ndarray-base-next-cartesian-index/tree/umd

[@stdlib/ndarray/base/nonsingleton-dimensions]: https://github.com/stdlib-js/ndarray-base-nonsingleton-dimensions/tree/umd

[@stdlib/ndarray/base/normalize-index]: https://github.com/stdlib-js/ndarray-base-normalize-index/tree/umd

[@stdlib/ndarray/base/nullary-loop-interchange-order]: https://github.com/stdlib-js/ndarray-base-nullary-loop-interchange-order/tree/umd

[@stdlib/ndarray/base/nullary-tiling-block-size]: https://github.com/stdlib-js/ndarray-base-nullary-tiling-block-size/tree/umd

[@stdlib/ndarray/base/nullary]: https://github.com/stdlib-js/ndarray-base-nullary/tree/umd

[@stdlib/ndarray/base/numel]: https://github.com/stdlib-js/ndarray-base-numel/tree/umd

[@stdlib/ndarray/base/offset]: https://github.com/stdlib-js/ndarray-base-offset/tree/umd

[@stdlib/ndarray/base/order]: https://github.com/stdlib-js/ndarray-base-order/tree/umd

[@stdlib/ndarray/base/output-policy-enum2str]: https://github.com/stdlib-js/ndarray-base-output-policy-enum2str/tree/umd

[@stdlib/ndarray/base/output-policy-resolve-enum]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/tree/umd

[@stdlib/ndarray/base/output-policy-resolve-str]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-str/tree/umd

[@stdlib/ndarray/base/output-policy-str2enum]: https://github.com/stdlib-js/ndarray-base-output-policy-str2enum/tree/umd

[@stdlib/ndarray/base/prepend-singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-prepend-singleton-dimensions/tree/umd

[@stdlib/ndarray/base/remove-singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-remove-singleton-dimensions/tree/umd

[@stdlib/ndarray/base/reverse-dimension]: https://github.com/stdlib-js/ndarray-base-reverse-dimension/tree/umd

[@stdlib/ndarray/base/reverse]: https://github.com/stdlib-js/ndarray-base-reverse/tree/umd

[@stdlib/ndarray/base/serialize-meta-data]: https://github.com/stdlib-js/ndarray-base-serialize-meta-data/tree/umd

[@stdlib/ndarray/base/shape]: https://github.com/stdlib-js/ndarray-base-shape/tree/umd

[@stdlib/ndarray/base/shape2strides]: https://github.com/stdlib-js/ndarray-base-shape2strides/tree/umd

[@stdlib/ndarray/base/singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-singleton-dimensions/tree/umd

[@stdlib/ndarray/base/slice-assign]: https://github.com/stdlib-js/ndarray-base-slice-assign/tree/umd

[@stdlib/ndarray/base/slice-dimension-from]: https://github.com/stdlib-js/ndarray-base-slice-dimension-from/tree/umd

[@stdlib/ndarray/base/slice-dimension-to]: https://github.com/stdlib-js/ndarray-base-slice-dimension-to/tree/umd

[@stdlib/ndarray/base/slice-dimension]: https://github.com/stdlib-js/ndarray-base-slice-dimension/tree/umd

[@stdlib/ndarray/base/slice-from]: https://github.com/stdlib-js/ndarray-base-slice-from/tree/umd

[@stdlib/ndarray/base/slice-to]: https://github.com/stdlib-js/ndarray-base-slice-to/tree/umd

[@stdlib/ndarray/base/slice]: https://github.com/stdlib-js/ndarray-base-slice/tree/umd

[@stdlib/ndarray/base/stride]: https://github.com/stdlib-js/ndarray-base-stride/tree/umd

[@stdlib/ndarray/base/strides]: https://github.com/stdlib-js/ndarray-base-strides/tree/umd

[@stdlib/ndarray/base/strides2offset]: https://github.com/stdlib-js/ndarray-base-strides2offset/tree/umd

[@stdlib/ndarray/base/strides2order]: https://github.com/stdlib-js/ndarray-base-strides2order/tree/umd

[@stdlib/ndarray/base/sub2ind]: https://github.com/stdlib-js/ndarray-base-sub2ind/tree/umd

[@stdlib/ndarray/base/to-array]: https://github.com/stdlib-js/ndarray-base-to-array/tree/umd

[@stdlib/ndarray/base/transpose]: https://github.com/stdlib-js/ndarray-base-transpose/tree/umd

[@stdlib/ndarray/base/unary-by]: https://github.com/stdlib-js/ndarray-base-unary-by/tree/umd

[@stdlib/ndarray/base/unary-loop-interchange-order]: https://github.com/stdlib-js/ndarray-base-unary-loop-interchange-order/tree/umd

[@stdlib/ndarray/base/unary-output-dtype]: https://github.com/stdlib-js/ndarray-base-unary-output-dtype/tree/umd

[@stdlib/ndarray/base/unary-tiling-block-size]: https://github.com/stdlib-js/ndarray-base-unary-tiling-block-size/tree/umd

[@stdlib/ndarray/base/unary]: https://github.com/stdlib-js/ndarray-base-unary/tree/umd

[@stdlib/ndarray/base/vind2bind]: https://github.com/stdlib-js/ndarray-base-vind2bind/tree/umd

[@stdlib/ndarray/base/wrap-index]: https://github.com/stdlib-js/ndarray-base-wrap-index/tree/umd

[@stdlib/ndarray/base/zeros-like]: https://github.com/stdlib-js/ndarray-base-zeros-like/tree/umd

[@stdlib/ndarray/base/zeros]: https://github.com/stdlib-js/ndarray-base-zeros/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
