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

# Base

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base ndarray.

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/ndarray-base' );
```

#### ns

Base ndarray.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc keywords="-assertion" > -->

<div class="namespace-toc">

-   <span class="signature">[`bind2vind( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/bind2vind]</span><span class="delimiter">: </span><span class="description">convert a linear index in an underlying data buffer to a linear index in an array view.</span>
-   <span class="signature">[`broadcastArray( arr, shape )`][@stdlib/ndarray/base/broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape.</span>
-   <span class="signature">[`broadcastShapes( shapes )`][@stdlib/ndarray/base/broadcast-shapes]</span><span class="delimiter">: </span><span class="description">broadcast array shapes to a single shape.</span>
-   <span class="signature">[`bufferCtors( dtype )`][@stdlib/ndarray/base/buffer-ctors]</span><span class="delimiter">: </span><span class="description">ndarray data buffer constructors.</span>
-   <span class="signature">[`bufferDataTypeEnum( buffer )`][@stdlib/ndarray/base/buffer-dtype-enum]</span><span class="delimiter">: </span><span class="description">return the data type enumeration constant of an ndarray data buffer.</span>
-   <span class="signature">[`bufferDataType( buffer )`][@stdlib/ndarray/base/buffer-dtype]</span><span class="delimiter">: </span><span class="description">return the data type of an ndarray data buffer.</span>
-   <span class="signature">[`buffer( dtype, size )`][@stdlib/ndarray/base/buffer]</span><span class="delimiter">: </span><span class="description">create a zero-filled contiguous linear ndarray data buffer.</span>
-   <span class="signature">[`bytesPerElement( dtype )`][@stdlib/ndarray/base/bytes-per-element]</span><span class="delimiter">: </span><span class="description">return the number of bytes per element provided an underlying array data type.</span>
-   <span class="signature">[`char2dtype( [ch] )`][@stdlib/ndarray/base/char2dtype]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a provided single letter character abbreviation.</span>
-   <span class="signature">[`clampIndex( idx, max )`][@stdlib/ndarray/base/clamp-index]</span><span class="delimiter">: </span><span class="description">restrict an index to the interval `[0,max]`.</span>
-   <span class="signature">[`ndarray( dtype, buffer, shape, strides, offset, order )`][@stdlib/ndarray/base/ctor]</span><span class="delimiter">: </span><span class="description">create a multidimensional array.</span>
-   <span class="signature">[`dtypeChar( [dtype] )`][@stdlib/ndarray/base/dtype-char]</span><span class="delimiter">: </span><span class="description">return the single letter abbreviation for an underlying array data type.</span>
-   <span class="signature">[`dtypeDesc( [dtype] )`][@stdlib/ndarray/base/dtype-desc]</span><span class="delimiter">: </span><span class="description">return the description for a specified data type.</span>
-   <span class="signature">[`dtypeEnum2Str( dtype )`][@stdlib/ndarray/base/dtype-enum2str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with an ndarray data type enumeration constant.</span>
-   <span class="signature">[`dtypeResolveEnum( dtype )`][@stdlib/ndarray/base/dtype-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported ndarray data type value.</span>
-   <span class="signature">[`dtypeResolveStr( dtype )`][@stdlib/ndarray/base/dtype-resolve-str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a supported ndarray data type value.</span>
-   <span class="signature">[`dtypeStr2Enum( dtype )`][@stdlib/ndarray/base/dtype-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with an ndarray data type string.</span>
-   <span class="signature">[`dtype2c( dtype )`][@stdlib/ndarray/base/dtype2c]</span><span class="delimiter">: </span><span class="description">return the C data type associated with a provided data type value.</span>
-   <span class="signature">[`dtypes2signatures( dtypes, nin, nout )`][@stdlib/ndarray/base/dtypes2signatures]</span><span class="delimiter">: </span><span class="description">transform a list of array argument data types into a list of signatures.</span>
-   <span class="signature">[`expandDimensions( x, axis )`][@stdlib/ndarray/base/expand-dimensions]</span><span class="delimiter">: </span><span class="description">expand the shape of an array by inserting a new dimension of size one at a specified axis.</span>
-   <span class="signature">[`scalar2ndarray( value, dtype )`][@stdlib/ndarray/base/from-scalar]</span><span class="delimiter">: </span><span class="description">convert a scalar value to a zero-dimensional ndarray.</span>
-   <span class="signature">[`ind( idx, max, mode )`][@stdlib/ndarray/base/ind]</span><span class="delimiter">: </span><span class="description">return an index given an index mode.</span>
-   <span class="signature">[`ind2sub( shape, strides, offset, order, idx, mode )`][@stdlib/ndarray/base/ind2sub]</span><span class="delimiter">: </span><span class="description">convert a linear index to an array of subscripts.</span>
-   <span class="signature">[`iterationOrder( strides )`][@stdlib/ndarray/base/iteration-order]</span><span class="delimiter">: </span><span class="description">given a stride array, determine array iteration order.</span>
-   <span class="signature">[`maxViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/max-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the maximum linear index in an underlying data buffer accessible to an array view.</span>
-   <span class="signature">[`maybeBroadcastArray( arr, shape )`][@stdlib/ndarray/base/maybe-broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.</span>
-   <span class="signature">[`metaDataProps( meta, dtypes, obj )`][@stdlib/ndarray/base/meta-data-props]</span><span class="delimiter">: </span><span class="description">define non-enumerable read-only properties which expose ndarray function meta data.</span>
-   <span class="signature">[`minViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/min-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the minimum linear index in an underlying data buffer accessible to an array view.</span>
-   <span class="signature">[`minmaxViewBufferIndex( shape, strides, offset )`][@stdlib/ndarray/base/minmax-view-buffer-index]</span><span class="delimiter">: </span><span class="description">compute the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.</span>
-   <span class="signature">[`ndarraylike2object( x )`][@stdlib/ndarray/base/ndarraylike2object]</span><span class="delimiter">: </span><span class="description">convert an `ndarray`-like object to an object likely to have the same "shape".</span>
-   <span class="signature">[`nonsingletonDimensions( shape )`][@stdlib/ndarray/base/nonsingleton-dimensions]</span><span class="delimiter">: </span><span class="description">return the number of non-singleton dimensions.</span>
-   <span class="signature">[`numel( shape )`][@stdlib/ndarray/base/numel]</span><span class="delimiter">: </span><span class="description">return the number of elements in an array.</span>
-   <span class="signature">[`prependSingletonDimensions( x, n )`][@stdlib/ndarray/base/prepend-singleton-dimensions]</span><span class="delimiter">: </span><span class="description">prepend singleton dimensions.</span>
-   <span class="signature">[`removeSingletonDimensions( x )`][@stdlib/ndarray/base/remove-singleton-dimensions]</span><span class="delimiter">: </span><span class="description">remove singleton dimensions.</span>
-   <span class="signature">[`serializeMetaData( x )`][@stdlib/ndarray/base/serialize-meta-data]</span><span class="delimiter">: </span><span class="description">serialize ndarray meta data.</span>
-   <span class="signature">[`shape2strides( shape, order )`][@stdlib/ndarray/base/shape2strides]</span><span class="delimiter">: </span><span class="description">generate a stride array from an array shape.</span>
-   <span class="signature">[`singletonDimensions( shape )`][@stdlib/ndarray/base/singleton-dimensions]</span><span class="delimiter">: </span><span class="description">return the number of singleton dimensions.</span>
-   <span class="signature">[`strides2offset( shape, strides )`][@stdlib/ndarray/base/strides2offset]</span><span class="delimiter">: </span><span class="description">determine the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.</span>
-   <span class="signature">[`strides2order( strides )`][@stdlib/ndarray/base/strides2order]</span><span class="delimiter">: </span><span class="description">determine the order of a multidimensional array based on a provided stride array.</span>
-   <span class="signature">[`sub2ind( shape, strides, offset, ...subscripts, mode )`][@stdlib/ndarray/base/sub2ind]</span><span class="delimiter">: </span><span class="description">convert subscripts to a linear index.</span>
-   <span class="signature">[`ndarray2array( buffer, shape, strides, offset, order )`][@stdlib/ndarray/base/to-array]</span><span class="delimiter">: </span><span class="description">convert an ndarray buffer to a generic array.</span>
-   <span class="signature">[`transpose( x )`][@stdlib/ndarray/base/transpose]</span><span class="delimiter">: </span><span class="description">transpose a matrix (or a stack of matrices).</span>
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

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/ndarray-base' );

console.log( objectKeys( ns ) );
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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

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

[@stdlib/ndarray/base/assert]: https://github.com/stdlib-js/ndarray-base-assert

[@stdlib/ndarray/base/bind2vind]: https://github.com/stdlib-js/ndarray-base-bind2vind

[@stdlib/ndarray/base/broadcast-array]: https://github.com/stdlib-js/ndarray-base-broadcast-array

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

[@stdlib/ndarray/base/buffer-ctors]: https://github.com/stdlib-js/ndarray-base-buffer-ctors

[@stdlib/ndarray/base/buffer-dtype-enum]: https://github.com/stdlib-js/ndarray-base-buffer-dtype-enum

[@stdlib/ndarray/base/buffer-dtype]: https://github.com/stdlib-js/ndarray-base-buffer-dtype

[@stdlib/ndarray/base/buffer]: https://github.com/stdlib-js/ndarray-base-buffer

[@stdlib/ndarray/base/bytes-per-element]: https://github.com/stdlib-js/ndarray-base-bytes-per-element

[@stdlib/ndarray/base/char2dtype]: https://github.com/stdlib-js/ndarray-base-char2dtype

[@stdlib/ndarray/base/clamp-index]: https://github.com/stdlib-js/ndarray-base-clamp-index

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray-base-ctor

[@stdlib/ndarray/base/dtype-char]: https://github.com/stdlib-js/ndarray-base-dtype-char

[@stdlib/ndarray/base/dtype-desc]: https://github.com/stdlib-js/ndarray-base-dtype-desc

[@stdlib/ndarray/base/dtype-enum2str]: https://github.com/stdlib-js/ndarray-base-dtype-enum2str

[@stdlib/ndarray/base/dtype-resolve-enum]: https://github.com/stdlib-js/ndarray-base-dtype-resolve-enum

[@stdlib/ndarray/base/dtype-resolve-str]: https://github.com/stdlib-js/ndarray-base-dtype-resolve-str

[@stdlib/ndarray/base/dtype-str2enum]: https://github.com/stdlib-js/ndarray-base-dtype-str2enum

[@stdlib/ndarray/base/dtype2c]: https://github.com/stdlib-js/ndarray-base-dtype2c

[@stdlib/ndarray/base/dtypes2signatures]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures

[@stdlib/ndarray/base/expand-dimensions]: https://github.com/stdlib-js/ndarray-base-expand-dimensions

[@stdlib/ndarray/base/from-scalar]: https://github.com/stdlib-js/ndarray-base-from-scalar

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray-base-ind

[@stdlib/ndarray/base/ind2sub]: https://github.com/stdlib-js/ndarray-base-ind2sub

[@stdlib/ndarray/base/iteration-order]: https://github.com/stdlib-js/ndarray-base-iteration-order

[@stdlib/ndarray/base/max-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-max-view-buffer-index

[@stdlib/ndarray/base/maybe-broadcast-array]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array

[@stdlib/ndarray/base/meta-data-props]: https://github.com/stdlib-js/ndarray-base-meta-data-props

[@stdlib/ndarray/base/min-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-min-view-buffer-index

[@stdlib/ndarray/base/minmax-view-buffer-index]: https://github.com/stdlib-js/ndarray-base-minmax-view-buffer-index

[@stdlib/ndarray/base/ndarraylike2object]: https://github.com/stdlib-js/ndarray-base-ndarraylike2object

[@stdlib/ndarray/base/nonsingleton-dimensions]: https://github.com/stdlib-js/ndarray-base-nonsingleton-dimensions

[@stdlib/ndarray/base/numel]: https://github.com/stdlib-js/ndarray-base-numel

[@stdlib/ndarray/base/prepend-singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-prepend-singleton-dimensions

[@stdlib/ndarray/base/remove-singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-remove-singleton-dimensions

[@stdlib/ndarray/base/serialize-meta-data]: https://github.com/stdlib-js/ndarray-base-serialize-meta-data

[@stdlib/ndarray/base/shape2strides]: https://github.com/stdlib-js/ndarray-base-shape2strides

[@stdlib/ndarray/base/singleton-dimensions]: https://github.com/stdlib-js/ndarray-base-singleton-dimensions

[@stdlib/ndarray/base/strides2offset]: https://github.com/stdlib-js/ndarray-base-strides2offset

[@stdlib/ndarray/base/strides2order]: https://github.com/stdlib-js/ndarray-base-strides2order

[@stdlib/ndarray/base/sub2ind]: https://github.com/stdlib-js/ndarray-base-sub2ind

[@stdlib/ndarray/base/to-array]: https://github.com/stdlib-js/ndarray-base-to-array

[@stdlib/ndarray/base/transpose]: https://github.com/stdlib-js/ndarray-base-transpose

[@stdlib/ndarray/base/vind2bind]: https://github.com/stdlib-js/ndarray-base-vind2bind

[@stdlib/ndarray/base/wrap-index]: https://github.com/stdlib-js/ndarray-base-wrap-index

[@stdlib/ndarray/base/zeros-like]: https://github.com/stdlib-js/ndarray-base-zeros-like

[@stdlib/ndarray/base/zeros]: https://github.com/stdlib-js/ndarray-base-zeros

<!-- </toc-links> -->

</section>

<!-- /.links -->
