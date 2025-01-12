# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-01-12)

<section class="packages">

### Packages

<section class="package" id="ndarray-base-unreleased">

#### [@stdlib/ndarray/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base)

<details>

<section class="features">

##### Features

-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706)
-   [`741b6f1`](https://github.com/stdlib-js/stdlib/commit/741b6f1df8ce11e77fb22c279cee6bbae3323176) - add `spreadDimensions` to namespace
-   [`908239e`](https://github.com/stdlib-js/stdlib/commit/908239e7cc6b4b3e260d0cc1f5aebb9af35d83c6) - add `toUniqueNormalizedIndices` to namespace
-   [`524e854`](https://github.com/stdlib-js/stdlib/commit/524e854202862d5b37d66470d719fac1270e33c1) - add `toNormalizedIndices` to namespace
-   [`7bb4167`](https://github.com/stdlib-js/stdlib/commit/7bb4167cb5017f6ab6a1f4018bd1e0b28f57eb44) - add `normalizeIndices` to namespace
-   [`33b46cb`](https://github.com/stdlib-js/stdlib/commit/33b46cbab14e25a72a7464d6d923f09a56ee0d44) - update namespace TypeScript declarations [(#4426)](https://github.com/stdlib-js/stdlib/pull/4426)
-   [`1ddeba9`](https://github.com/stdlib-js/stdlib/commit/1ddeba98295bb53fb8098d1016f0de4b7f544e96) - add `scalar2ndarrayLike` to namespace
-   [`58e795d`](https://github.com/stdlib-js/stdlib/commit/58e795db467b7bd1d3dc6c5847f91a97fed2ccff) - update namespace TypeScript declarations [(#3937)](https://github.com/stdlib-js/stdlib/pull/3937)
-   [`14427c7`](https://github.com/stdlib-js/stdlib/commit/14427c79bc62f82b16cbadc9d34749901e48d105) - add `fill`, `map`, and `toReversed` to namespace
-   [`a0d6619`](https://github.com/stdlib-js/stdlib/commit/a0d66193409576538d0f16aa89cbaeedec7898be) - add `minSignedIntegerDataType` and `minUnsignedIntegerDataType` to namespace
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`54262c8`](https://github.com/stdlib-js/stdlib/commit/54262c89e70eae566591c6e87ece69b68ca09488) - add `ndarraylike2ndarray` to namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-unreleased">

#### [@stdlib/ndarray/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert)

<details>

<section class="features">

##### Features

-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706)
-   [`a94dcea`](https://github.com/stdlib-js/stdlib/commit/a94dceaa9469c774ee4622567e4c15a15e215bcf) - add `isColumnMajorString` to namespace
-   [`5e1be08`](https://github.com/stdlib-js/stdlib/commit/5e1be08ff661fb981dc4a91c2e9d37d7396327f5) - add `isRowMajorString` to namespace
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`98e4809`](https://github.com/stdlib-js/stdlib/commit/98e480997058c3f21d3016b97d25f4c4e62231b9) - add `isBooleanDataType` to namespace
-   [`3e7f2ca`](https://github.com/stdlib-js/stdlib/commit/3e7f2ca3c987040575b732129281c384c453e0b8) - add `hasEqualShape` to namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-has-equal-shape-unreleased">

#### [@stdlib/ndarray/base/assert/has-equal-shape](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/has-equal-shape)

<details>

<section class="features">

##### Features

-   [`6e74647`](https://github.com/stdlib-js/stdlib/commit/6e74647839e3ca184dd7df80df9bd0ede9505469) - add `ndarray/base/assert/has-equal-shape`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-column-major-string-unreleased">

#### [@stdlib/ndarray/base/assert/is-column-major-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-column-major-string)

<details>

<section class="features">

##### Features

-   [`76872c7`](https://github.com/stdlib-js/stdlib/commit/76872c76f1c655afe5e87d9d894be37f6a07c08b) - add `ndarray/base/assert/is-column-major-string`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-row-major-string-unreleased">

#### [@stdlib/ndarray/base/assert/is-row-major-string](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-row-major-string)

<details>

<section class="features">

##### Features

-   [`8cce31a`](https://github.com/stdlib-js/stdlib/commit/8cce31aadb16c58d167e89b6b9f8483d9314715f) - add `ndarray/base/assert/is-row-major-string`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assign-unreleased">

#### [@stdlib/ndarray/base/assign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assign)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`96c7ddf`](https://github.com/stdlib-js/stdlib/commit/96c7ddfdbcecc6ff60fcb56681db16463d19020e) - use computed order and fix strides in examples

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ctor-unreleased">

#### [@stdlib/ndarray/base/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ctor)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`5e2bbef`](https://github.com/stdlib-js/stdlib/commit/5e2bbef14efd5937e23047c01af0e740e6cbd4f6) - add missing boolean array support
-   [`aea44c9`](https://github.com/stdlib-js/stdlib/commit/aea44c9c8699a4d748c0db70d4a60801bfc03c40) - update loop limit

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-expand-dimensions-unreleased">

#### [@stdlib/ndarray/base/expand-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/expand-dimensions)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`712a9a8`](https://github.com/stdlib-js/stdlib/commit/712a9a8554f59fdfe520c4e2daafdbfd93637c76) - compute singleton strides as if strides computed apriori

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-fill-unreleased">

#### [@stdlib/ndarray/base/fill](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/fill)

<details>

<section class="features">

##### Features

-   [`6a6bc1d`](https://github.com/stdlib-js/stdlib/commit/6a6bc1da925c3c3f24463cf0d381d0d38e84868b) - add `ndarray/base/fill` [(#2817)](https://github.com/stdlib-js/stdlib/pull/2817)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-for-each-unreleased">

#### [@stdlib/ndarray/base/for-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/for-each)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`4e6b2eb`](https://github.com/stdlib-js/stdlib/commit/4e6b2eb39e01d193302cd93ebf93dd2f42c71291) - update type for indices
-   [`c57d1d8`](https://github.com/stdlib-js/stdlib/commit/c57d1d880a32cfaff0c57744c81ef641640cddef) - return subscripts from perspective of ndarray view, not buffer

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-from-scalar-like-unreleased">

#### [@stdlib/ndarray/base/from-scalar-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/from-scalar-like)

<details>

<section class="features">

##### Features

-   [`b2dcaa0`](https://github.com/stdlib-js/stdlib/commit/b2dcaa0d97eeb11585ab4cae5b7c319308e6b3c2) - add `ndarray/base/from-scalar-like`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-map-unreleased">

#### [@stdlib/ndarray/base/map](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/map)

<details>

<section class="features">

##### Features

-   [`72ed2e1`](https://github.com/stdlib-js/stdlib/commit/72ed2e1e6331858c078564e22b6dca041f5daaca) - add `ndarray/base/map` [(#2715)](https://github.com/stdlib-js/stdlib/pull/2715)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b4502fb`](https://github.com/stdlib-js/stdlib/commit/b4502fbc4da03910f86c66e68b53e93e99e3e933) - remove perf logic in order to ensure expected indices in callback

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-min-signed-integer-dtype-unreleased">

#### [@stdlib/ndarray/base/min-signed-integer-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/min-signed-integer-dtype)

<details>

<section class="features">

##### Features

-   [`c3bffe5`](https://github.com/stdlib-js/stdlib/commit/c3bffe513318480e2ce4645bb05895df8148ee1e) - add `ndarray/base/min-signed-integer-dtype`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-min-unsigned-integer-dtype-unreleased">

#### [@stdlib/ndarray/base/min-unsigned-integer-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/min-unsigned-integer-dtype)

<details>

<section class="features">

##### Features

-   [`97e8c1a`](https://github.com/stdlib-js/stdlib/commit/97e8c1aff4f7c1a3b0946d15354a926d82e2120a) - add `ndarray/base/min-unsigned-integer-dtype`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ndarraylike2ndarray-unreleased">

#### [@stdlib/ndarray/base/ndarraylike2ndarray](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ndarraylike2ndarray)

<details>

<section class="features">

##### Features

-   [`5d01561`](https://github.com/stdlib-js/stdlib/commit/5d015616e9731e40d20f7d4dca6b136ae47cc9bc) - add `ndarray/base/ndarraylike2ndarray`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-normalize-indices-unreleased">

#### [@stdlib/ndarray/base/normalize-indices](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/normalize-indices)

<details>

<section class="features">

##### Features

-   [`8615f56`](https://github.com/stdlib-js/stdlib/commit/8615f568459d831a04b78034ec5141567f13d1d9) - add `ndarray/base/normalize-indices`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-reverse-unreleased">

#### [@stdlib/ndarray/base/reverse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/reverse)

<details>

<section class="features">

##### Features

-   [`8bcb738`](https://github.com/stdlib-js/stdlib/commit/8bcb738f0fc355eae92b40541cc61550fda1fbef) - add `ndarray/base/to-reversed` [(#2861)](https://github.com/stdlib-js/stdlib/pull/2861)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-from-unreleased">

#### [@stdlib/ndarray/base/slice-dimension-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension-from)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-to-unreleased">

#### [@stdlib/ndarray/base/slice-dimension-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension-to)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-spread-dimensions-unreleased">

#### [@stdlib/ndarray/base/spread-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/spread-dimensions)

<details>

<section class="features">

##### Features

-   [`3767255`](https://github.com/stdlib-js/stdlib/commit/3767255c7cfe85f09cea5c007e21297cd628245d) - add `ndarray/base/spread-dimensions`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-to-normalized-indices-unreleased">

#### [@stdlib/ndarray/base/to-normalized-indices](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/to-normalized-indices)

<details>

<section class="features">

##### Features

-   [`9f1d586`](https://github.com/stdlib-js/stdlib/commit/9f1d586a2c8d619deb5c6c6334e1c0fadb452075) - add `ndarray/base/to-normalized-indices`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-to-reversed-unreleased">

#### [@stdlib/ndarray/base/to-reversed](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/to-reversed)

<details>

<section class="features">

##### Features

-   [`8bcb738`](https://github.com/stdlib-js/stdlib/commit/8bcb738f0fc355eae92b40541cc61550fda1fbef) - add `ndarray/base/to-reversed` [(#2861)](https://github.com/stdlib-js/stdlib/pull/2861)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-to-unique-normalized-indices-unreleased">

#### [@stdlib/ndarray/base/to-unique-normalized-indices](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/to-unique-normalized-indices)

<details>

<section class="features">

##### Features

-   [`494a92b`](https://github.com/stdlib-js/stdlib/commit/494a92bf8a9fba830cbffcc7017097fae36dd73b) - add `ndarray/base/to-unique-normalized-indices`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-transpose-unreleased">

#### [@stdlib/ndarray/base/transpose](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/transpose)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-unreleased">

#### [@stdlib/ndarray/base/unary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`1375823`](https://github.com/stdlib-js/stdlib/commit/1375823f58c93aeac8c687147f40e78d52adec04) - use computed order and fix strides in examples

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-accumulate-unreleased">

#### [@stdlib/ndarray/base/unary-accumulate](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-accumulate)

<details>

<section class="features">

##### Features

-   [`cc6f711`](https://github.com/stdlib-js/stdlib/commit/cc6f7116815dd33f196292a66017b832b6ff0e30) - add main entry point
-   [`c90c354`](https://github.com/stdlib-js/stdlib/commit/c90c354affab090f1c91ce1401dcf3acf8320fbe) - add an n-d accessors accumulator
-   [`064a8f9`](https://github.com/stdlib-js/stdlib/commit/064a8f9fdcc19b02659a44db6dd05b3d5b32a7b3) - add an n-d accumulator
-   [`2d93dfb`](https://github.com/stdlib-js/stdlib/commit/2d93dfbfa7953c84fd9b03bda5df082b59b309e3) - add 9d blocked accessors accumulator
-   [`fdc3131`](https://github.com/stdlib-js/stdlib/commit/fdc3131072c2b6c0804092cb8df9fc2860e01021) - add 9d blocked accumulator
-   [`ea6b38c`](https://github.com/stdlib-js/stdlib/commit/ea6b38c252925110fa3240f8c9cab2aac7d4d0f4) - add 9d accessors accumulators
-   [`3c51978`](https://github.com/stdlib-js/stdlib/commit/3c5197834ef9003436d9a6a2e65827649a28e97d) - add 9d accumulator
-   [`24c8a3a`](https://github.com/stdlib-js/stdlib/commit/24c8a3a234cc9ba047815f21d4c994bf85989494) - add 8d blocked accessors accumulator
-   [`e320953`](https://github.com/stdlib-js/stdlib/commit/e32095351dc5560b67c30e4d1e00282279a04edf) - add 8d blocked accumulator
-   [`a995be8`](https://github.com/stdlib-js/stdlib/commit/a995be8e3cb2c9a80442ed24056abee15a21a4f4) - add 8d accessors accumulator
-   [`0a6350e`](https://github.com/stdlib-js/stdlib/commit/0a6350e19d048ce3df15fcba526ad4572089e97d) - add 8d accumulator
-   [`fe22938`](https://github.com/stdlib-js/stdlib/commit/fe2293857a27ba412cd1bfc7f757ec8b7ab78643) - add 7d blocked accessors accumulator
-   [`1617255`](https://github.com/stdlib-js/stdlib/commit/1617255739ae2282d166b237c38b05f38303c9b4) - add 7d blocked accumulator
-   [`627699c`](https://github.com/stdlib-js/stdlib/commit/627699ceb1abe555d9fa6320373c239750e82a9c) - add 7d accessors accumulator
-   [`39f87db`](https://github.com/stdlib-js/stdlib/commit/39f87db060078addf749b53326670548e02eb34b) - add 7d accumulator
-   [`c02cc5e`](https://github.com/stdlib-js/stdlib/commit/c02cc5ec7f4834b968878c80df04e6cd5390bc6c) - add 6d blocked accessors accumulator
-   [`79a6c7c`](https://github.com/stdlib-js/stdlib/commit/79a6c7cc87aa714c9b9e900d532cc44906088743) - add 6d blocked accumulator
-   [`70d0d2a`](https://github.com/stdlib-js/stdlib/commit/70d0d2aa36f0a3d430aaaf37e018c3b54fec7bb1) - add 6d accessors accumulator
-   [`3e0c232`](https://github.com/stdlib-js/stdlib/commit/3e0c2323b5d09296cda154271dc0a775deb4bb61) - add 6d accumulator
-   [`42e1358`](https://github.com/stdlib-js/stdlib/commit/42e13587ea8c874482ccd9d054914e7853c868e3) - add 5d blocked accessors accumulator
-   [`828a6a6`](https://github.com/stdlib-js/stdlib/commit/828a6a659015cd0187b8b85a3a83105d2f50807c) - add 5d blocked accumulator
-   [`298fb43`](https://github.com/stdlib-js/stdlib/commit/298fb438f7996eaef6ffb9069057b524d17c4a23) - add 5d accessors accumulator
-   [`9678ff8`](https://github.com/stdlib-js/stdlib/commit/9678ff84f0823d1272b893c7c638d6b014b17523) - add 5d accumulator
-   [`ace6b17`](https://github.com/stdlib-js/stdlib/commit/ace6b177e8e4ba85b47c6c3fae39540b70609e0c) - add 4d blocked accessors accumulator
-   [`c686569`](https://github.com/stdlib-js/stdlib/commit/c68656944c4ff05c3cdcd6ff8f084354b207d86a) - add 4d blocked accumulator
-   [`afe0d98`](https://github.com/stdlib-js/stdlib/commit/afe0d98c95b5ed839049014e161f368d81d6852f) - add 4d accessors accumulator
-   [`714ab64`](https://github.com/stdlib-js/stdlib/commit/714ab64dcbc8911f317ffc4e3b315b1c48192eb6) - add 4d accumulator
-   [`062be58`](https://github.com/stdlib-js/stdlib/commit/062be5859727da44f5af9d38cde6de39f61b51f7) - add 3d blocked accessors accumulator
-   [`a78f2b1`](https://github.com/stdlib-js/stdlib/commit/a78f2b162c32840702e0b02e8d730ae1b568ae97) - add 3d blocked accumulator
-   [`ea33936`](https://github.com/stdlib-js/stdlib/commit/ea339369e379fd22a635e1e11c7e9412a4385528) - add 3d accessors accumulator
-   [`33036b0`](https://github.com/stdlib-js/stdlib/commit/33036b038cecaa5b98e1b4793d41077cc9168513) - add 3d accumulator
-   [`45fe885`](https://github.com/stdlib-js/stdlib/commit/45fe885cc5f595cf68804bf605f5dc4fdc5a3580) - add 2d blocked accessors accumulator
-   [`4c080fd`](https://github.com/stdlib-js/stdlib/commit/4c080fd599fdff49cade83dbd29d6b75f862c7bb) - add 2d blocked accumulator
-   [`caf7397`](https://github.com/stdlib-js/stdlib/commit/caf7397f94553933295586c183275201e7df96e7) - add 2d accessors accumulator
-   [`1a5172d`](https://github.com/stdlib-js/stdlib/commit/1a5172d9de881e97d4300b022201a154eb1e0ca0) - add 2d accumulator
-   [`74d9fef`](https://github.com/stdlib-js/stdlib/commit/74d9fefaff44947b314862a3574857e0cdb7ab03) - add 1d accessors accumulator
-   [`2d97fb5`](https://github.com/stdlib-js/stdlib/commit/2d97fb548f0d0c7722bc1d4c540b352b203ff236) - add 1d accumulator
-   [`db61fca`](https://github.com/stdlib-js/stdlib/commit/db61fcae67ae7bb23ac2b9ce0084eb1f67b18cf6) - add 10d blocked accessor accumulator
-   [`8bc84b3`](https://github.com/stdlib-js/stdlib/commit/8bc84b33f635d90af7c2da209bcf6fb4fce0e15f) - add 10d blocked accumulator
-   [`b516586`](https://github.com/stdlib-js/stdlib/commit/b51658624b80eb39eddeb5d752b781f77a2c3b5a) - add 10d accessors accumulator
-   [`f36a0ab`](https://github.com/stdlib-js/stdlib/commit/f36a0ab4aaa1cdf08748fcde1339fe41b335eca2) - add 10d accumulator
-   [`7601be7`](https://github.com/stdlib-js/stdlib/commit/7601be773588756a38c537b4dbc48f1ae4d2c90a) - add 0d accessor accumulator
-   [`a049375`](https://github.com/stdlib-js/stdlib/commit/a04937599dfcc1cb4dbd1c3998748f8fd72e7610) - add 0d accumulator

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-by-unreleased">

#### [@stdlib/ndarray/base/unary-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-by)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`e2b7fb5`](https://github.com/stdlib-js/stdlib/commit/e2b7fb5df61f15ae7dbf148ec0c0412ff434b123) - use computed order and fix strides in examples

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-loop-interchange-order-unreleased">

#### [@stdlib/ndarray/base/unary-loop-interchange-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-loop-interchange-order)

<details>

<section class="features">

##### Features

-   [`0d360b3`](https://github.com/stdlib-js/stdlib/commit/0d360b33eba8019d2d638f265986d861ed22642a) - return index array as part of the results object

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - **feat:** update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706) _(by stdlib-bot)_
-   [`cff470f`](https://github.com/stdlib-js/stdlib/commit/cff470f9608165100c8c122fce70c40b1af864ec) - **docs:** update namespace table of contents (#4708) _(by stdlib-bot, Planeshifter)_
-   [`741b6f1`](https://github.com/stdlib-js/stdlib/commit/741b6f1df8ce11e77fb22c279cee6bbae3323176) - **feat:** add `spreadDimensions` to namespace _(by Athan Reines)_
-   [`3767255`](https://github.com/stdlib-js/stdlib/commit/3767255c7cfe85f09cea5c007e21297cd628245d) - **feat:** add `ndarray/base/spread-dimensions` _(by Athan Reines)_
-   [`712a9a8`](https://github.com/stdlib-js/stdlib/commit/712a9a8554f59fdfe520c4e2daafdbfd93637c76) - **fix:** compute singleton strides as if strides computed apriori _(by Athan Reines)_
-   [`c634089`](https://github.com/stdlib-js/stdlib/commit/c634089f1fdf724c589c016b55da015a1d779709) - **refactor:** use ndarray utility to normalize an index _(by Athan Reines)_
-   [`a94dcea`](https://github.com/stdlib-js/stdlib/commit/a94dceaa9469c774ee4622567e4c15a15e215bcf) - **feat:** add `isColumnMajorString` to namespace _(by Athan Reines)_
-   [`76872c7`](https://github.com/stdlib-js/stdlib/commit/76872c76f1c655afe5e87d9d894be37f6a07c08b) - **feat:** add `ndarray/base/assert/is-column-major-string` _(by Athan Reines)_
-   [`5e1be08`](https://github.com/stdlib-js/stdlib/commit/5e1be08ff661fb981dc4a91c2e9d37d7396327f5) - **feat:** add `isRowMajorString` to namespace _(by Athan Reines)_
-   [`8cce31a`](https://github.com/stdlib-js/stdlib/commit/8cce31aadb16c58d167e89b6b9f8483d9314715f) - **feat:** add `ndarray/base/assert/is-row-major-string` _(by Athan Reines)_
-   [`851a95f`](https://github.com/stdlib-js/stdlib/commit/851a95f2201a21f8a1535f61cd002de260bd2236) - **bench:** simplify value selection _(by Athan Reines)_
-   [`264a2fc`](https://github.com/stdlib-js/stdlib/commit/264a2fce5b1fcfdf53cb27fe16980f5414564baf) - **refactor:** use base array utility _(by Athan Reines)_
-   [`e588900`](https://github.com/stdlib-js/stdlib/commit/e5889000cb438ee4ea7f1ba8c9a2922b71a9c462) - **chore:** fix meta data _(by Athan Reines)_
-   [`11c2592`](https://github.com/stdlib-js/stdlib/commit/11c25926baf0e0c76912c482663b5c3daf4abd1d) - **chore:** fix meta data _(by Athan Reines)_
-   [`838bb5b`](https://github.com/stdlib-js/stdlib/commit/838bb5be71f0e7f5304cc38c7769653df0d03bd1) - **chore:** fix meta data _(by Athan Reines)_
-   [`908239e`](https://github.com/stdlib-js/stdlib/commit/908239e7cc6b4b3e260d0cc1f5aebb9af35d83c6) - **feat:** add `toUniqueNormalizedIndices` to namespace _(by Athan Reines)_
-   [`494a92b`](https://github.com/stdlib-js/stdlib/commit/494a92bf8a9fba830cbffcc7017097fae36dd73b) - **feat:** add `ndarray/base/to-unique-normalized-indices` _(by Athan Reines)_
-   [`14073ce`](https://github.com/stdlib-js/stdlib/commit/14073ce88718e9a4979110bb5390c9e6fd53a322) - **docs:** fix return type _(by Athan Reines)_
-   [`abcceb2`](https://github.com/stdlib-js/stdlib/commit/abcceb2d29719b7f1ac25c9fa8dd7f41992a5553) - **docs:** fix example return value _(by Athan Reines)_
-   [`524e854`](https://github.com/stdlib-js/stdlib/commit/524e854202862d5b37d66470d719fac1270e33c1) - **feat:** add `toNormalizedIndices` to namespace _(by Athan Reines)_
-   [`9f1d586`](https://github.com/stdlib-js/stdlib/commit/9f1d586a2c8d619deb5c6c6334e1c0fadb452075) - **feat:** add `ndarray/base/to-normalized-indices` _(by Athan Reines)_
-   [`5e72ffb`](https://github.com/stdlib-js/stdlib/commit/5e72ffbd59654061d22173d326e9d66dfe4ed0d3) - **refactor:** allow input to be any array-like object of numbers _(by Athan Reines)_
-   [`7bb4167`](https://github.com/stdlib-js/stdlib/commit/7bb4167cb5017f6ab6a1f4018bd1e0b28f57eb44) - **feat:** add `normalizeIndices` to namespace _(by Athan Reines)_
-   [`8615f56`](https://github.com/stdlib-js/stdlib/commit/8615f568459d831a04b78034ec5141567f13d1d9) - **feat:** add `ndarray/base/normalize-indices` _(by Athan Reines)_
-   [`d2d8a05`](https://github.com/stdlib-js/stdlib/commit/d2d8a05f2b3de75e8a1537e8b71b00f32f71c57b) - **docs:** add TypeScript declarations _(by Athan Reines)_
-   [`ad85c44`](https://github.com/stdlib-js/stdlib/commit/ad85c446105fdd4922bc89900e1cccc003e4ddf3) - **docs:** add repl help _(by Athan Reines)_
-   [`a768ca7`](https://github.com/stdlib-js/stdlib/commit/a768ca7e554ff8224b58e7c9ca5abdbd4994bce2) - **docs:** add example _(by Athan Reines)_
-   [`f706f53`](https://github.com/stdlib-js/stdlib/commit/f706f53580a821ca491a314462a09fd7ef72494e) - **chore:** update copyright years _(by Athan Reines)_
-   [`cc6f711`](https://github.com/stdlib-js/stdlib/commit/cc6f7116815dd33f196292a66017b832b6ff0e30) - **feat:** add main entry point _(by Athan Reines)_
-   [`c90c354`](https://github.com/stdlib-js/stdlib/commit/c90c354affab090f1c91ce1401dcf3acf8320fbe) - **feat:** add an n-d accessors accumulator _(by Athan Reines)_
-   [`064a8f9`](https://github.com/stdlib-js/stdlib/commit/064a8f9fdcc19b02659a44db6dd05b3d5b32a7b3) - **feat:** add an n-d accumulator _(by Athan Reines)_
-   [`2d93dfb`](https://github.com/stdlib-js/stdlib/commit/2d93dfbfa7953c84fd9b03bda5df082b59b309e3) - **feat:** add 9d blocked accessors accumulator _(by Athan Reines)_
-   [`fdc3131`](https://github.com/stdlib-js/stdlib/commit/fdc3131072c2b6c0804092cb8df9fc2860e01021) - **feat:** add 9d blocked accumulator _(by Athan Reines)_
-   [`ea6b38c`](https://github.com/stdlib-js/stdlib/commit/ea6b38c252925110fa3240f8c9cab2aac7d4d0f4) - **feat:** add 9d accessors accumulators _(by Athan Reines)_
-   [`3c51978`](https://github.com/stdlib-js/stdlib/commit/3c5197834ef9003436d9a6a2e65827649a28e97d) - **feat:** add 9d accumulator _(by Athan Reines)_
-   [`24c8a3a`](https://github.com/stdlib-js/stdlib/commit/24c8a3a234cc9ba047815f21d4c994bf85989494) - **feat:** add 8d blocked accessors accumulator _(by Athan Reines)_
-   [`e320953`](https://github.com/stdlib-js/stdlib/commit/e32095351dc5560b67c30e4d1e00282279a04edf) - **feat:** add 8d blocked accumulator _(by Athan Reines)_
-   [`a995be8`](https://github.com/stdlib-js/stdlib/commit/a995be8e3cb2c9a80442ed24056abee15a21a4f4) - **feat:** add 8d accessors accumulator _(by Athan Reines)_
-   [`0a6350e`](https://github.com/stdlib-js/stdlib/commit/0a6350e19d048ce3df15fcba526ad4572089e97d) - **feat:** add 8d accumulator _(by Athan Reines)_
-   [`fe22938`](https://github.com/stdlib-js/stdlib/commit/fe2293857a27ba412cd1bfc7f757ec8b7ab78643) - **feat:** add 7d blocked accessors accumulator _(by Athan Reines)_
-   [`1617255`](https://github.com/stdlib-js/stdlib/commit/1617255739ae2282d166b237c38b05f38303c9b4) - **feat:** add 7d blocked accumulator _(by Athan Reines)_
-   [`627699c`](https://github.com/stdlib-js/stdlib/commit/627699ceb1abe555d9fa6320373c239750e82a9c) - **feat:** add 7d accessors accumulator _(by Athan Reines)_
-   [`39f87db`](https://github.com/stdlib-js/stdlib/commit/39f87db060078addf749b53326670548e02eb34b) - **feat:** add 7d accumulator _(by Athan Reines)_
-   [`c02cc5e`](https://github.com/stdlib-js/stdlib/commit/c02cc5ec7f4834b968878c80df04e6cd5390bc6c) - **feat:** add 6d blocked accessors accumulator _(by Athan Reines)_
-   [`79a6c7c`](https://github.com/stdlib-js/stdlib/commit/79a6c7cc87aa714c9b9e900d532cc44906088743) - **feat:** add 6d blocked accumulator _(by Athan Reines)_
-   [`70d0d2a`](https://github.com/stdlib-js/stdlib/commit/70d0d2aa36f0a3d430aaaf37e018c3b54fec7bb1) - **feat:** add 6d accessors accumulator _(by Athan Reines)_
-   [`3e0c232`](https://github.com/stdlib-js/stdlib/commit/3e0c2323b5d09296cda154271dc0a775deb4bb61) - **feat:** add 6d accumulator _(by Athan Reines)_
-   [`42e1358`](https://github.com/stdlib-js/stdlib/commit/42e13587ea8c874482ccd9d054914e7853c868e3) - **feat:** add 5d blocked accessors accumulator _(by Athan Reines)_
-   [`828a6a6`](https://github.com/stdlib-js/stdlib/commit/828a6a659015cd0187b8b85a3a83105d2f50807c) - **feat:** add 5d blocked accumulator _(by Athan Reines)_
-   [`298fb43`](https://github.com/stdlib-js/stdlib/commit/298fb438f7996eaef6ffb9069057b524d17c4a23) - **feat:** add 5d accessors accumulator _(by Athan Reines)_
-   [`9678ff8`](https://github.com/stdlib-js/stdlib/commit/9678ff84f0823d1272b893c7c638d6b014b17523) - **feat:** add 5d accumulator _(by Athan Reines)_
-   [`ace6b17`](https://github.com/stdlib-js/stdlib/commit/ace6b177e8e4ba85b47c6c3fae39540b70609e0c) - **feat:** add 4d blocked accessors accumulator _(by Athan Reines)_
-   [`c686569`](https://github.com/stdlib-js/stdlib/commit/c68656944c4ff05c3cdcd6ff8f084354b207d86a) - **feat:** add 4d blocked accumulator _(by Athan Reines)_
-   [`afe0d98`](https://github.com/stdlib-js/stdlib/commit/afe0d98c95b5ed839049014e161f368d81d6852f) - **feat:** add 4d accessors accumulator _(by Athan Reines)_
-   [`714ab64`](https://github.com/stdlib-js/stdlib/commit/714ab64dcbc8911f317ffc4e3b315b1c48192eb6) - **feat:** add 4d accumulator _(by Athan Reines)_
-   [`062be58`](https://github.com/stdlib-js/stdlib/commit/062be5859727da44f5af9d38cde6de39f61b51f7) - **feat:** add 3d blocked accessors accumulator _(by Athan Reines)_
-   [`a78f2b1`](https://github.com/stdlib-js/stdlib/commit/a78f2b162c32840702e0b02e8d730ae1b568ae97) - **feat:** add 3d blocked accumulator _(by Athan Reines)_
-   [`ea33936`](https://github.com/stdlib-js/stdlib/commit/ea339369e379fd22a635e1e11c7e9412a4385528) - **feat:** add 3d accessors accumulator _(by Athan Reines)_
-   [`33036b0`](https://github.com/stdlib-js/stdlib/commit/33036b038cecaa5b98e1b4793d41077cc9168513) - **feat:** add 3d accumulator _(by Athan Reines)_
-   [`45fe885`](https://github.com/stdlib-js/stdlib/commit/45fe885cc5f595cf68804bf605f5dc4fdc5a3580) - **feat:** add 2d blocked accessors accumulator _(by Athan Reines)_
-   [`4c080fd`](https://github.com/stdlib-js/stdlib/commit/4c080fd599fdff49cade83dbd29d6b75f862c7bb) - **feat:** add 2d blocked accumulator _(by Athan Reines)_
-   [`35ef28d`](https://github.com/stdlib-js/stdlib/commit/35ef28d935caeb85d7369cfe0e8b984abb61ef8b) - **docs:** fix comment _(by Athan Reines)_
-   [`48e9197`](https://github.com/stdlib-js/stdlib/commit/48e919759ec6c48d3c3f328014af204ee81c0981) - **docs:** fix comment _(by Athan Reines)_
-   [`caf7397`](https://github.com/stdlib-js/stdlib/commit/caf7397f94553933295586c183275201e7df96e7) - **feat:** add 2d accessors accumulator _(by Athan Reines)_
-   [`1a5172d`](https://github.com/stdlib-js/stdlib/commit/1a5172d9de881e97d4300b022201a154eb1e0ca0) - **feat:** add 2d accumulator _(by Athan Reines)_
-   [`74d9fef`](https://github.com/stdlib-js/stdlib/commit/74d9fefaff44947b314862a3574857e0cdb7ab03) - **feat:** add 1d accessors accumulator _(by Athan Reines)_
-   [`2d97fb5`](https://github.com/stdlib-js/stdlib/commit/2d97fb548f0d0c7722bc1d4c540b352b203ff236) - **feat:** add 1d accumulator _(by Athan Reines)_
-   [`db61fca`](https://github.com/stdlib-js/stdlib/commit/db61fcae67ae7bb23ac2b9ce0084eb1f67b18cf6) - **feat:** add 10d blocked accessor accumulator _(by Athan Reines)_
-   [`8bc84b3`](https://github.com/stdlib-js/stdlib/commit/8bc84b33f635d90af7c2da209bcf6fb4fce0e15f) - **feat:** add 10d blocked accumulator _(by Athan Reines)_
-   [`b516586`](https://github.com/stdlib-js/stdlib/commit/b51658624b80eb39eddeb5d752b781f77a2c3b5a) - **feat:** add 10d accessors accumulator _(by Athan Reines)_
-   [`f36a0ab`](https://github.com/stdlib-js/stdlib/commit/f36a0ab4aaa1cdf08748fcde1339fe41b335eca2) - **feat:** add 10d accumulator _(by Athan Reines)_
-   [`7601be7`](https://github.com/stdlib-js/stdlib/commit/7601be773588756a38c537b4dbc48f1ae4d2c90a) - **feat:** add 0d accessor accumulator _(by Athan Reines)_
-   [`a049375`](https://github.com/stdlib-js/stdlib/commit/a04937599dfcc1cb4dbd1c3998748f8fd72e7610) - **feat:** add 0d accumulator _(by Athan Reines)_
-   [`e0af8c4`](https://github.com/stdlib-js/stdlib/commit/e0af8c4bf522a77f3c0073acbb0b1a0679575809) - **docs:** fix description _(by Athan Reines)_
-   [`10a14b5`](https://github.com/stdlib-js/stdlib/commit/10a14b576aa39aba24959261860788f82efdcd26) - **docs:** fix description _(by Athan Reines)_
-   [`9f49cfb`](https://github.com/stdlib-js/stdlib/commit/9f49cfb0e8047348ee5dc24d64bf82afbc7ca644) - **docs:** fix description _(by Athan Reines)_
-   [`33b46cb`](https://github.com/stdlib-js/stdlib/commit/33b46cbab14e25a72a7464d6d923f09a56ee0d44) - **feat:** update namespace TypeScript declarations [(#4426)](https://github.com/stdlib-js/stdlib/pull/4426) _(by stdlib-bot, Philipp Burckhardt)_
-   [`edae311`](https://github.com/stdlib-js/stdlib/commit/edae3110b4b7cc1d675d44e211ffffcff77d6153) - **docs:** update namespace table of contents [(#4428)](https://github.com/stdlib-js/stdlib/pull/4428) _(by stdlib-bot, Philipp Burckhardt)_
-   [`1ddeba9`](https://github.com/stdlib-js/stdlib/commit/1ddeba98295bb53fb8098d1016f0de4b7f544e96) - **feat:** add `scalar2ndarrayLike` to namespace _(by Athan Reines)_
-   [`b2dcaa0`](https://github.com/stdlib-js/stdlib/commit/b2dcaa0d97eeb11585ab4cae5b7c319308e6b3c2) - **feat:** add `ndarray/base/from-scalar-like` _(by Athan Reines)_
-   [`7dc5c14`](https://github.com/stdlib-js/stdlib/commit/7dc5c14b995c7c4bd286087d04a20497057c0e71) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`5e2bbef`](https://github.com/stdlib-js/stdlib/commit/5e2bbef14efd5937e23047c01af0e740e6cbd4f6) - **fix:** add missing boolean array support _(by Athan Reines)_
-   [`aea44c9`](https://github.com/stdlib-js/stdlib/commit/aea44c9c8699a4d748c0db70d4a60801bfc03c40) - **fix:** update loop limit _(by Athan Reines)_
-   [`58e795d`](https://github.com/stdlib-js/stdlib/commit/58e795db467b7bd1d3dc6c5847f91a97fed2ccff) - **feat:** update namespace TypeScript declarations [(#3937)](https://github.com/stdlib-js/stdlib/pull/3937) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c106b69`](https://github.com/stdlib-js/stdlib/commit/c106b69cc141efc8c32e79d55ad8acf07f3c9c0a) - **docs:** update namespace table of contents [(#3939)](https://github.com/stdlib-js/stdlib/pull/3939) _(by stdlib-bot, Philipp Burckhardt)_
-   [`58f02bf`](https://github.com/stdlib-js/stdlib/commit/58f02bf605d6879cd80152f11f913451df2ad494) - **docs:** fix comment _(by Athan Reines)_
-   [`baffefb`](https://github.com/stdlib-js/stdlib/commit/baffefb25177147fa3bafa5c1d0562a7528d5054) - **docs:** fix comment _(by Athan Reines)_
-   [`14427c7`](https://github.com/stdlib-js/stdlib/commit/14427c79bc62f82b16cbadc9d34749901e48d105) - **feat:** add `fill`, `map`, and `toReversed` to namespace _(by Athan Reines)_
-   [`a0d6619`](https://github.com/stdlib-js/stdlib/commit/a0d66193409576538d0f16aa89cbaeedec7898be) - **feat:** add `minSignedIntegerDataType` and `minUnsignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`97e8c1a`](https://github.com/stdlib-js/stdlib/commit/97e8c1aff4f7c1a3b0946d15354a926d82e2120a) - **feat:** add `ndarray/base/min-unsigned-integer-dtype` _(by Athan Reines)_
-   [`c3bffe5`](https://github.com/stdlib-js/stdlib/commit/c3bffe513318480e2ce4645bb05895df8148ee1e) - **feat:** add `ndarray/base/min-signed-integer-dtype` _(by Athan Reines)_
-   [`b4502fb`](https://github.com/stdlib-js/stdlib/commit/b4502fbc4da03910f86c66e68b53e93e99e3e933) - **fix:** remove perf logic in order to ensure expected indices in callback _(by Athan Reines)_
-   [`a80835b`](https://github.com/stdlib-js/stdlib/commit/a80835b8f9959a15751adfce5572bb2b29cfeeed) - **refactor:** declare parameters and pointer as const _(by Philipp Burckhardt)_
-   [`6c020d3`](https://github.com/stdlib-js/stdlib/commit/6c020d33665c4aec232196fd86214b296ddc7d36) - **chore:** use relative paths to load package.json file _(by Philipp Burckhardt)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_
-   [`99cca3d`](https://github.com/stdlib-js/stdlib/commit/99cca3dc8a07ef39b9821468b8a0f7a4d6cacf72) - **chore:** declare parameter as const array _(by Philipp Burckhardt)_
-   [`2c4e5d8`](https://github.com/stdlib-js/stdlib/commit/2c4e5d824e0c5dc8fd536bf79ff565cee100ce46) - **build:** disable additional lint rule in TS tests _(by Philipp Burckhardt)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - **fix:** remove unused imports from TS declaration file _(by Philipp Burckhardt)_
-   [`975147f`](https://github.com/stdlib-js/stdlib/commit/975147f3125c786ec1672acb3d2564ca16eaa790) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`8f72b43`](https://github.com/stdlib-js/stdlib/commit/8f72b432c0fc81a78641d5689722ecc9671c6f02) - **style:** add missing spaces around parentheses _(by Philipp Burckhardt)_
-   [`2e00b1f`](https://github.com/stdlib-js/stdlib/commit/2e00b1f79b968e3436fbb2cf406b308029cd7156) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`bcc9d29`](https://github.com/stdlib-js/stdlib/commit/bcc9d29f11ad54bd388625ae257668304d829a5c) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`8436f67`](https://github.com/stdlib-js/stdlib/commit/8436f675a80d4824d8571b2b1ce91c5c17e3938d) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`b675172`](https://github.com/stdlib-js/stdlib/commit/b675172498c9449ca0e957f4af9694b8bc0f8dc6) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_
-   [`95ef049`](https://github.com/stdlib-js/stdlib/commit/95ef04997f2f0f98406dbdf59c5c0ff757c5637a) - **docs:** fix grammar _(by Athan Reines)_
-   [`037a7a8`](https://github.com/stdlib-js/stdlib/commit/037a7a81819bbbf2c0d784678b42d423f47d62ce) - **refactor:** use `const` qualifier and update examples _(by Athan Reines)_
-   [`00651e7`](https://github.com/stdlib-js/stdlib/commit/00651e7847283dadfb29ef6c90addd78380a3c5b) - **refactor:** use `const` qualifier and update examples _(by Athan Reines)_
-   [`114f651`](https://github.com/stdlib-js/stdlib/commit/114f651d1f29cc711adf2990a10d56470650af48) - **refactor:** use base array assertion utility _(by Athan Reines)_
-   [`98e4809`](https://github.com/stdlib-js/stdlib/commit/98e480997058c3f21d3016b97d25f4c4e62231b9) - **feat:** add `isBooleanDataType` to namespace _(by Athan Reines)_
-   [`3e7f2ca`](https://github.com/stdlib-js/stdlib/commit/3e7f2ca3c987040575b732129281c384c453e0b8) - **feat:** add `hasEqualShape` to namespace _(by Athan Reines)_
-   [`6e74647`](https://github.com/stdlib-js/stdlib/commit/6e74647839e3ca184dd7df80df9bd0ede9505469) - **feat:** add `ndarray/base/assert/has-equal-shape` _(by Athan Reines)_
-   [`5debe82`](https://github.com/stdlib-js/stdlib/commit/5debe8216a1449be68fad01af52d896e63163191) - **test:** add tests to `ndarray/base/map` [(#2810)](https://github.com/stdlib-js/stdlib/pull/2810) _(by Muhammad Haris, Athan Reines)_
-   [`0c5f1bc`](https://github.com/stdlib-js/stdlib/commit/0c5f1bc12678832bf4aafddbf2a960e98612327b) - **chore:** rename folder from benchmarks to benchmark _(by Philipp Burckhardt)_
-   [`6a6bc1d`](https://github.com/stdlib-js/stdlib/commit/6a6bc1da925c3c3f24463cf0d381d0d38e84868b) - **feat:** add `ndarray/base/fill` [(#2817)](https://github.com/stdlib-js/stdlib/pull/2817) _(by Muhammad Haris, Athan Reines)_
-   [`8bcb738`](https://github.com/stdlib-js/stdlib/commit/8bcb738f0fc355eae92b40541cc61550fda1fbef) - **feat:** add `ndarray/base/to-reversed` [(#2861)](https://github.com/stdlib-js/stdlib/pull/2861) _(by Muhammad Haris, Athan Reines)_
-   [`df3ed1e`](https://github.com/stdlib-js/stdlib/commit/df3ed1ee7fdc62c9f49bfa38eb1df240fb752a6e) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`6a3b3d7`](https://github.com/stdlib-js/stdlib/commit/6a3b3d731ca697a62e3d58900e1b6cb06e7667dd) - **chore:** update directories meta data _(by Athan Reines)_
-   [`dd48932`](https://github.com/stdlib-js/stdlib/commit/dd489326b8dcee32f41f2ef7c2bafcaa4eb6ce46) - **docs:** fix descriptions _(by Athan Reines)_
-   [`54262c8`](https://github.com/stdlib-js/stdlib/commit/54262c89e70eae566591c6e87ece69b68ca09488) - **feat:** add `ndarraylike2ndarray` to namespace _(by Athan Reines)_
-   [`5d01561`](https://github.com/stdlib-js/stdlib/commit/5d015616e9731e40d20f7d4dca6b136ae47cc9bc) - **feat:** add `ndarray/base/ndarraylike2ndarray` _(by Athan Reines)_
-   [`72ed2e1`](https://github.com/stdlib-js/stdlib/commit/72ed2e1e6331858c078564e22b6dca041f5daaca) - **feat:** add `ndarray/base/map` [(#2715)](https://github.com/stdlib-js/stdlib/pull/2715) _(by Muhammad Haris, Athan Reines)_
-   [`96c7ddf`](https://github.com/stdlib-js/stdlib/commit/96c7ddfdbcecc6ff60fcb56681db16463d19020e) - **fix:** use computed order and fix strides in examples _(by Athan Reines)_
-   [`e2b7fb5`](https://github.com/stdlib-js/stdlib/commit/e2b7fb5df61f15ae7dbf148ec0c0412ff434b123) - **fix:** use computed order and fix strides in examples _(by Athan Reines)_
-   [`1375823`](https://github.com/stdlib-js/stdlib/commit/1375823f58c93aeac8c687147f40e78d52adec04) - **fix:** use computed order and fix strides in examples _(by Athan Reines)_
-   [`bc07347`](https://github.com/stdlib-js/stdlib/commit/bc07347c2ebd7ea17befbb91f3c422776acf0c42) - **docs:** fix strides _(by Athan Reines)_
-   [`e261bc2`](https://github.com/stdlib-js/stdlib/commit/e261bc2c64bb3ac5236abc447b9ae3f40acf31ab) - **docs:** fix strides _(by Athan Reines)_
-   [`0d360b3`](https://github.com/stdlib-js/stdlib/commit/0d360b33eba8019d2d638f265986d861ed22642a) - **feat:** return index array as part of the results object _(by Athan Reines)_
-   [`5fe7f2e`](https://github.com/stdlib-js/stdlib/commit/5fe7f2e437b3bf7ff82db46944d8f928c7fc4090) - **style:** remove backticks _(by Athan Reines)_
-   [`dab89ca`](https://github.com/stdlib-js/stdlib/commit/dab89ca7cb89b404eef61ae48cfb84afec543222) - **style:** remove backticks _(by Athan Reines)_
-   [`22c4d29`](https://github.com/stdlib-js/stdlib/commit/22c4d29898e2b5bb4cb071a6b7f62536027eaf28) - **docs:** remove blank line _(by Athan Reines)_
-   [`4e6b2eb`](https://github.com/stdlib-js/stdlib/commit/4e6b2eb39e01d193302cd93ebf93dd2f42c71291) - **fix:** update type for indices _(by Athan Reines)_
-   [`c57d1d8`](https://github.com/stdlib-js/stdlib/commit/c57d1d880a32cfaff0c57744c81ef641640cddef) - **fix:** return subscripts from perspective of ndarray view, not buffer _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-29)

<section class="packages">

### Packages

<section class="package" id="ndarray-base-v0.3.0">

#### [@stdlib/ndarray/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base)

<details>

<section class="features">

##### Features

-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681)
-   [`d31e751`](https://github.com/stdlib-js/stdlib/commit/d31e7515b71dc5b76751173c7724d73d943b1473) - add `forEach` to namespace
-   [`de17de3`](https://github.com/stdlib-js/stdlib/commit/de17de32867461079aae166d5cecbecb1da7f922) - update namespace TypeScript declarations [(#2593)](https://github.com/stdlib-js/stdlib/pull/2593)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-boolean--v0.3.0">

#### [@stdlib/ndarray/base/assert/is-boolean-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-boolean-)

<details>

<section class="features">

##### Features

-   [`979cf48`](https://github.com/stdlib-js/stdlib/commit/979cf4883141c4c5545860ac59ae056b2ecd3e43) - add `ndarray/base/assert/is-boolean-data-type` [(#2575)](https://github.com/stdlib-js/stdlib/pull/2575)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assign-v0.3.0">

#### [@stdlib/ndarray/base/assign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assign)

<details>

<section class="features">

##### Features

-   [`6ea880c`](https://github.com/stdlib-js/stdlib/commit/6ea880ccabbf770cf13a2def4f9ce806daa2b2f6) - add boolean dtype support to `ndarray/base/assign` [(#2598)](https://github.com/stdlib-js/stdlib/pull/2598)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-v0.3.0">

#### [@stdlib/ndarray/base/buffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer)

<details>

<section class="features">

##### Features

-   [`fa118f2`](https://github.com/stdlib-js/stdlib/commit/fa118f279848e1c85ea6e5cf9799f3089649214c) - add boolean dtype support to `ndarray/base/buffer` [(#2574)](https://github.com/stdlib-js/stdlib/pull/2574)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-ctors-v0.3.0">

#### [@stdlib/ndarray/base/buffer-ctors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-ctors)

<details>

<section class="features">

##### Features

-   [`0f0dbca`](https://github.com/stdlib-js/stdlib/commit/0f0dbcaa7eddb30c09c8cc394224cd4a409b90a6) - add boolean dtype support to `ndarray/base/buffer-ctors` [(#2571)](https://github.com/stdlib-js/stdlib/pull/2571)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-dtype-v0.3.0">

#### [@stdlib/ndarray/base/buffer-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-dtype)

<details>

<section class="features">

##### Features

-   [`efecd32`](https://github.com/stdlib-js/stdlib/commit/efecd32448520402335cdf8fdb34ee88b96556b9) - add boolean dtype support to `ndarray/base/buffer-dtype` [(#2572)](https://github.com/stdlib-js/stdlib/pull/2572)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-v0.3.0">

#### [@stdlib/ndarray/base/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-like-v0.3.0">

#### [@stdlib/ndarray/base/empty-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty-like)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-for-each-v0.3.0">

#### [@stdlib/ndarray/base/for-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/for-each)

<details>

<section class="features">

##### Features

-   [`e3fe1fa`](https://github.com/stdlib-js/stdlib/commit/e3fe1fad242ff60466807239c3d156c302885104) - add `ndarray/base/for-each`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-v0.3.0">

#### [@stdlib/ndarray/base/nullary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary)

<details>

<section class="features">

##### Features

-   [`19d4a8d`](https://github.com/stdlib-js/stdlib/commit/19d4a8da27facd0cc72b6162dc7e6b0d66d7a63c) - add boolean dtype support to `ndarray/base/nullary` [(#2586)](https://github.com/stdlib-js/stdlib/pull/2586)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2229](https://github.com/stdlib-js/stdlib/issues/2229)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-v0.3.0">

#### [@stdlib/ndarray/base/unary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary)

<details>

<section class="features">

##### Features

-   [`a360f04`](https://github.com/stdlib-js/stdlib/commit/a360f048dde8429a3ffcc60d36abe9ad33038c73) - add boolean dtype support to `ndarray/base/unary` [(#2587)](https://github.com/stdlib-js/stdlib/pull/2587)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-v0.3.0">

#### [@stdlib/ndarray/base/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-like-v0.3.0">

#### [@stdlib/ndarray/base/zeros-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros-like)

<details>

<section class="features">

##### Features

-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#2229](https://github.com/stdlib-js/stdlib/issues/2229)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jaysukh Makvana
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - **feat:** update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7ee91a5`](https://github.com/stdlib-js/stdlib/commit/7ee91a531462ec823da632c6ae8ff65a8d16549e) - **docs:** update namespace table of contents [(#2674)](https://github.com/stdlib-js/stdlib/pull/2674) _(by stdlib-bot, Athan Reines)_
-   [`d31e751`](https://github.com/stdlib-js/stdlib/commit/d31e7515b71dc5b76751173c7724d73d943b1473) - **feat:** add `forEach` to namespace _(by Athan Reines)_
-   [`147a189`](https://github.com/stdlib-js/stdlib/commit/147a1897cc5ec7c05a97f8b4d4526ed6e6f224c1) - **docs:** reorder notes _(by Athan Reines)_
-   [`e3fe1fa`](https://github.com/stdlib-js/stdlib/commit/e3fe1fad242ff60466807239c3d156c302885104) - **feat:** add `ndarray/base/for-each` _(by Athan Reines)_
-   [`cace2b4`](https://github.com/stdlib-js/stdlib/commit/cace2b43ed6624d28afdc5d85fb6551f7f0155b1) - **test:** add tests to `ndarray/base/nullary` [(#2663)](https://github.com/stdlib-js/stdlib/pull/2663) _(by Muhammad Haris, Athan Reines)_
-   [`468eb7f`](https://github.com/stdlib-js/stdlib/commit/468eb7f2d12876dc0713c081a53043961c70feda) - **test:** add tests to `ndarray/base/nullary` [(#2655)](https://github.com/stdlib-js/stdlib/pull/2655) _(by Muhammad Haris, Athan Reines)_
-   [`fa34b48`](https://github.com/stdlib-js/stdlib/commit/fa34b48968bddc6eb016fd4991833d7942e2a9a9) - **test:** add tests to `ndarray/base/nullary` [(#2652)](https://github.com/stdlib-js/stdlib/pull/2652) _(by Muhammad Haris, Athan Reines)_
-   [`0dfdd7d`](https://github.com/stdlib-js/stdlib/commit/0dfdd7da997c13178f0a2bd7a9895a4618629a46) - **test:** add tests to `ndarray/base/nullary` [(#2645)](https://github.com/stdlib-js/stdlib/pull/2645) _(by Muhammad Haris, Athan Reines)_
-   [`14a2930`](https://github.com/stdlib-js/stdlib/commit/14a2930e995e2a92b2886146514c82f637807724) - **test:** add tests to `ndarray/base/nullary` [(#2644)](https://github.com/stdlib-js/stdlib/pull/2644) _(by Muhammad Haris, Athan Reines)_
-   [`06b4d43`](https://github.com/stdlib-js/stdlib/commit/06b4d4334a2c56bb39787c902fadfb9bb794779d) - **test:** add tests to `ndarray/base/nullary` [(#2634)](https://github.com/stdlib-js/stdlib/pull/2634) _(by Muhammad Haris, Athan Reines)_
-   [`e4cd553`](https://github.com/stdlib-js/stdlib/commit/e4cd5534b04ce1c7277126fdd1811b845f95d1f2) - **test:** add tests to `ndarray/base/nullary` [(#2609)](https://github.com/stdlib-js/stdlib/pull/2609) _(by Muhammad Haris, Athan Reines)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`9abdead`](https://github.com/stdlib-js/stdlib/commit/9abdead65457225ccbf44f4bab8caf96167a71c5) - **test:** add tests for three-dimensional arrays [(#2599)](https://github.com/stdlib-js/stdlib/pull/2599) _(by Muhammad Haris, Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`6ea880c`](https://github.com/stdlib-js/stdlib/commit/6ea880ccabbf770cf13a2def4f9ce806daa2b2f6) - **feat:** add boolean dtype support to `ndarray/base/assign` [(#2598)](https://github.com/stdlib-js/stdlib/pull/2598) _(by Jaysukh Makvana, Athan Reines)_
-   [`903c51c`](https://github.com/stdlib-js/stdlib/commit/903c51c7d0a06d9186a6f2be1b01fa25f770a3eb) - **test:** add tests to `@stdlib/ndarray-base/nullary` [(#2350)](https://github.com/stdlib-js/stdlib/pull/2350) _(by Muhammad Haris, Athan Reines)_
-   [`de17de3`](https://github.com/stdlib-js/stdlib/commit/de17de32867461079aae166d5cecbecb1da7f922) - **feat:** update namespace TypeScript declarations [(#2593)](https://github.com/stdlib-js/stdlib/pull/2593) _(by stdlib-bot, Athan Reines)_
-   [`71cf5a0`](https://github.com/stdlib-js/stdlib/commit/71cf5a05a13d12aed627d332147642adc4694ab9) - **feat:** add boolean dtype support to `ndarray/empty*` and `ndarray/base/empty*` packages [(#2588)](https://github.com/stdlib-js/stdlib/pull/2588) _(by Jaysukh Makvana, Athan Reines)_
-   [`a360f04`](https://github.com/stdlib-js/stdlib/commit/a360f048dde8429a3ffcc60d36abe9ad33038c73) - **feat:** add boolean dtype support to `ndarray/base/unary` [(#2587)](https://github.com/stdlib-js/stdlib/pull/2587) _(by Jaysukh Makvana)_
-   [`19d4a8d`](https://github.com/stdlib-js/stdlib/commit/19d4a8da27facd0cc72b6162dc7e6b0d66d7a63c) - **feat:** add boolean dtype support to `ndarray/base/nullary` [(#2586)](https://github.com/stdlib-js/stdlib/pull/2586) _(by Jaysukh Makvana)_
-   [`c067b6c`](https://github.com/stdlib-js/stdlib/commit/c067b6c990c99b8f4cf315b5378af8574098962b) - **docs:** update namespace table of contents [(#2576)](https://github.com/stdlib-js/stdlib/pull/2576) _(by stdlib-bot, Philipp Burckhardt)_
-   [`d71c3a9`](https://github.com/stdlib-js/stdlib/commit/d71c3a91bd81b7dff1a24b151ef429c427e5875b) - **docs:** update namespace TypeScript declarations [(#2584)](https://github.com/stdlib-js/stdlib/pull/2584) _(by stdlib-bot, Athan Reines)_
-   [`979cf48`](https://github.com/stdlib-js/stdlib/commit/979cf4883141c4c5545860ac59ae056b2ecd3e43) - **feat:** add `ndarray/base/assert/is-boolean-data-type` [(#2575)](https://github.com/stdlib-js/stdlib/pull/2575) _(by Jaysukh Makvana, Athan Reines)_
-   [`fa118f2`](https://github.com/stdlib-js/stdlib/commit/fa118f279848e1c85ea6e5cf9799f3089649214c) - **feat:** add boolean dtype support to `ndarray/base/buffer` [(#2574)](https://github.com/stdlib-js/stdlib/pull/2574) _(by Jaysukh Makvana, Athan Reines)_
-   [`efecd32`](https://github.com/stdlib-js/stdlib/commit/efecd32448520402335cdf8fdb34ee88b96556b9) - **feat:** add boolean dtype support to `ndarray/base/buffer-dtype` [(#2572)](https://github.com/stdlib-js/stdlib/pull/2572) _(by Jaysukh Makvana, Athan Reines)_
-   [`0f0dbca`](https://github.com/stdlib-js/stdlib/commit/0f0dbcaa7eddb30c09c8cc394224cd4a409b90a6) - **feat:** add boolean dtype support to `ndarray/base/buffer-ctors` [(#2571)](https://github.com/stdlib-js/stdlib/pull/2571) _(by Jaysukh Makvana, Athan Reines)_
-   [`41a5c49`](https://github.com/stdlib-js/stdlib/commit/41a5c4954cc46899abfe20145987627b2e86fc94) - **test:** update tests in `ndarray/base/*` to support boolean dtypes [(#2505)](https://github.com/stdlib-js/stdlib/pull/2505) _(by Jaysukh Makvana, Athan Reines)_
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - **fix:** update include paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="packages">

### Packages

<section class="package" id="ndarray-base-v0.2.0">

#### [@stdlib/ndarray/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`46c964b`](https://github.com/stdlib-js/stdlib/commit/46c964b8697cd49865726bcf1bf37574a5ff6386) - add `numelDimension` to namespace
-   [`36d1ecc`](https://github.com/stdlib-js/stdlib/commit/36d1eccee290162d423283a088d9467f3a06d475) - add `flag` to namespace
-   [`25bde3f`](https://github.com/stdlib-js/stdlib/commit/25bde3f0411e0256e1f93ab2537ece9eefebd5df) - add `flags` to namespace
-   [`b97dcf0`](https://github.com/stdlib-js/stdlib/commit/b97dcf02f8b10885152891ba521f3ed72706d397) - add `maybeBroadcastArrays` to namespace
-   [`dc5bb62`](https://github.com/stdlib-js/stdlib/commit/dc5bb62c65148f6d6dadb351a2b9d0a26134473d) - add `broadcastArrays` to namespace
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170)
-   [`9f19a74`](https://github.com/stdlib-js/stdlib/commit/9f19a74b5e8907f2925f3bc21f002a260031c564) - add `stride` to namespace
-   [`8a27986`](https://github.com/stdlib-js/stdlib/commit/8a279869a4a7c154d239f4e7af037833350e208f) - add support for `normalize` index mode
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`d90228a`](https://github.com/stdlib-js/stdlib/commit/d90228a01f71e0b0a9e443377e711549040ecf31) - add `sliceDimensionFrom` to namespace
-   [`229ab6e`](https://github.com/stdlib-js/stdlib/commit/229ab6efd7b1b93991b78a9399d071e23522e633) - add `sliceDimensionTo` to namespace
-   [`67592b8`](https://github.com/stdlib-js/stdlib/commit/67592b82b088e4b8516f4f5e210368c96cbb4c11) - add `normalizeIndex` to namespace
-   [`a41ecbd`](https://github.com/stdlib-js/stdlib/commit/a41ecbd20541d1f60bc30db109b2599021cc4e47) - add `sliceFrom` to namespace
-   [`54401ac`](https://github.com/stdlib-js/stdlib/commit/54401acffc828b45fbe3cabe6b17f305cb4170b0) - add `sliceTo` to namespace
-   [`2934e57`](https://github.com/stdlib-js/stdlib/commit/2934e576d314c60fc6198228d33282a1ab4f76c1) - add `flipud` to namespace
-   [`013beaa`](https://github.com/stdlib-js/stdlib/commit/013beaa9f51f64fb56a25ab95dc85a0f849dc1ad) - add `fliplr` to namespace
-   [`b390e0b`](https://github.com/stdlib-js/stdlib/commit/b390e0bdfc5f184568b70ddd3d9b4a9cd92dbf9e) - add `reverseDimension` to namespace
-   [`be83095`](https://github.com/stdlib-js/stdlib/commit/be83095aaf7d0dec724ac1d42135459f33ca38af) - add `reverse` to namespace
-   [`f4cb44c`](https://github.com/stdlib-js/stdlib/commit/f4cb44c4a2f34211b7f53aa1e7e49e564445268b) - add `assign` to namespace
-   [`b985417`](https://github.com/stdlib-js/stdlib/commit/b9854176622b79eb7338247ac9d77ec0d22dc3a7) - add `data` to namespace
-   [`0786d6c`](https://github.com/stdlib-js/stdlib/commit/0786d6c0bc1087b5748b42632c6b8efebcb147ad) - add `ndarray/base/data-buffer`
-   [`3a2e182`](https://github.com/stdlib-js/stdlib/commit/3a2e182a27fd4d6ca7d5b518cf24570c273a2556) - add `order` to namespace
-   [`88e5849`](https://github.com/stdlib-js/stdlib/commit/88e58498365a51ba56218c74a4767e89eb5061cc) - add `dtype` to namespace
-   [`ed14448`](https://github.com/stdlib-js/stdlib/commit/ed1444886a2b28f68d09d313c7fe550be337d2b4) - add `sliceDimension` to namespace
-   [`b6571b2`](https://github.com/stdlib-js/stdlib/commit/b6571b2e436559d99e92767a95e95588857205c8) - add `strides` to namespace
-   [`ed378b7`](https://github.com/stdlib-js/stdlib/commit/ed378b72c05992f0473dc5891dc4664773949148) - add `shape` to namespace
-   [`0f8bc08`](https://github.com/stdlib-js/stdlib/commit/0f8bc0882a61b2c54219f37e6d2cb80c50985194) - add `offset` to namespace
-   [`6b48944`](https://github.com/stdlib-js/stdlib/commit/6b48944663c08f64956469340e8561704d9923f8) - add `ndims` to namespace
-   [`49e1d21`](https://github.com/stdlib-js/stdlib/commit/49e1d216375e904a5448da4bf414a3261e1f68ba) - add `nextCartesianIndex` to namespace
-   [`212c1fa`](https://github.com/stdlib-js/stdlib/commit/212c1fa13fd177b87d0ddfa4e70d411e587d5560) - add `sliceAssign` to namespace
-   [`15373b4`](https://github.com/stdlib-js/stdlib/commit/15373b4bc5df65314a0fffe20184429f7ad29616) - add `slice` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-v0.2.0">

#### [@stdlib/ndarray/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert)

<details>

<section class="features">

##### Features

-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`1aefe83`](https://github.com/stdlib-js/stdlib/commit/1aefe83e90f109989a001e85ca25ed278a7c3a50) - add `isMostlySafeDataTypeCast` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-allowed--v0.2.0">

#### [@stdlib/ndarray/base/assert/is-allowed-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-allowed-)

<details>

<section class="features">

##### Features

-   [`733ee49`](https://github.com/stdlib-js/stdlib/commit/733ee4954b08c24007460390d688fe86bb1e8fae) - add support for a `mostly-safe` casting mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-mostly-safe--v0.2.0">

#### [@stdlib/ndarray/base/assert/is-mostly-safe-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-mostly-safe-)

<details>

<section class="features">

##### Features

-   [`a8290c4`](https://github.com/stdlib-js/stdlib/commit/a8290c4059e1aa16ed2388a02c5637e58659ae01) - add `ndarray/base/assert/is-mostly-safe-data-type-cast`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assign-v0.2.0">

#### [@stdlib/ndarray/base/assign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assign)

<details>

<section class="features">

##### Features

-   [`aabbb4e`](https://github.com/stdlib-js/stdlib/commit/aabbb4eaff80556d2320d75cf9520f5b01352e50) - add loop functions for downcasting floating-point dtypes
-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - add `ndarray/base/assign`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c8417b0`](https://github.com/stdlib-js/stdlib/commit/c8417b07e7637b7c5c2336191d9b3288a0e5a228) - add support for assigning real-valued elements to complex-valued elements
-   [`46d5210`](https://github.com/stdlib-js/stdlib/commit/46d52108725f354f62312121e797195cbbfe7611) - address unterminated macro
-   [`39b2b0d`](https://github.com/stdlib-js/stdlib/commit/39b2b0da7407b46375ee9897ce60452f5179cf1b) - use correct type for dispatch object

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-broadcast-arrays-v0.2.0">

#### [@stdlib/ndarray/base/broadcast-arrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-arrays)

<details>

<section class="features">

##### Features

-   [`d47c764`](https://github.com/stdlib-js/stdlib/commit/d47c7648f41c6622489321f7ee36b875acd117f6) - add `ndarray/base/broadcast-arrays`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-v0.2.0">

#### [@stdlib/ndarray/base/dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype)

<details>

<section class="features">

##### Features

-   [`9d9b5ca`](https://github.com/stdlib-js/stdlib/commit/9d9b5ca04c251db89351dabfd1d3868fdee22fd2) - add `ndarray/base/dtype`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-v0.2.0">

#### [@stdlib/ndarray/base/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`def989d`](https://github.com/stdlib-js/stdlib/commit/def989d20c35d4cb0834e91324177abc8f522626) - resolve type declaration typo by removing stray lint directive

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-like-v0.2.0">

#### [@stdlib/ndarray/base/empty-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty-like)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`65d964f`](https://github.com/stdlib-js/stdlib/commit/65d964fc0d0cde545a0e15fd34bcfcdec5eb01b6) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-expand-dimensions-v0.2.0">

#### [@stdlib/ndarray/base/expand-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/expand-dimensions)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`61aa8e7`](https://github.com/stdlib-js/stdlib/commit/61aa8e7e7d3d64e9bac8b51d34b1b734a24a84de) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-flag-v0.2.0">

#### [@stdlib/ndarray/base/flag](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/flag)

<details>

<section class="features">

##### Features

-   [`e557f2b`](https://github.com/stdlib-js/stdlib/commit/e557f2bd167692a6d0c67e8b9b0133a72d91903c) - add `ndarray/base/flag`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-flags-v0.2.0">

#### [@stdlib/ndarray/base/flags](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/flags)

<details>

<section class="features">

##### Features

-   [`181c73e`](https://github.com/stdlib-js/stdlib/commit/181c73e2f2b9a88ddfe95df533e975a1b1c3a469) - add `ndarray/base/flags`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-fliplr-v0.2.0">

#### [@stdlib/ndarray/base/fliplr](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/fliplr)

<details>

<section class="features">

##### Features

-   [`bb9e0a4`](https://github.com/stdlib-js/stdlib/commit/bb9e0a4dc183c68ffd21fecc1130cb4bac303597) - add `ndarray/base/fliplr`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-flipud-v0.2.0">

#### [@stdlib/ndarray/base/flipud](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/flipud)

<details>

<section class="features">

##### Features

-   [`316273f`](https://github.com/stdlib-js/stdlib/commit/316273feed1a28304e7e4a1612831e257fc6e9e2) - add `ndarray/base/flipud`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ind-v0.2.0">

#### [@stdlib/ndarray/base/ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ind)

<details>

<section class="features">

##### Features

-   [`f3d3f4f`](https://github.com/stdlib-js/stdlib/commit/f3d3f4f4d69804a3f31bdb542abf1aca9f3576d9) - add a `factory` method to allow for partial application
-   [`a7d2960`](https://github.com/stdlib-js/stdlib/commit/a7d2960bebae832e80d61cadeb2a1b6d719f0db1) - add support for returning a normalized index

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`aaaf01e`](https://github.com/stdlib-js/stdlib/commit/aaaf01e43bfef9b8b3c2c9d3f703b3e95e0524b9) - use correct format specifier in error message

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ind2sub-v0.2.0">

#### [@stdlib/ndarray/base/ind2sub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ind2sub)

<details>

<section class="features">

##### Features

-   [`8e18e43`](https://github.com/stdlib-js/stdlib/commit/8e18e43bbd0b553e32bd5e8df1d36d4a8cc9d8c3) - add support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-maybe-broadcast-array-v0.2.0">

#### [@stdlib/ndarray/base/maybe-broadcast-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/maybe-broadcast-array)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`c142624`](https://github.com/stdlib-js/stdlib/commit/c1426240f375b6c864a2d59368694ac09d7637f6) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-maybe-broadcast-arrays-v0.2.0">

#### [@stdlib/ndarray/base/maybe-broadcast-arrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/maybe-broadcast-arrays)

<details>

<section class="features">

##### Features

-   [`74d4f9f`](https://github.com/stdlib-js/stdlib/commit/74d4f9f193420a70ea40fb576d667d582da5cd6f) - add `ndarray/base/maybe-broadcast-arrays`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ndarraylike2object-v0.2.0">

#### [@stdlib/ndarray/base/ndarraylike2object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ndarraylike2object)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`c539bd1`](https://github.com/stdlib-js/stdlib/commit/c539bd17b8cd17ca3a37a958626dbd6df2e25477) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ndims-v0.2.0">

#### [@stdlib/ndarray/base/ndims](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ndims)

<details>

<section class="features">

##### Features

-   [`dd72b0f`](https://github.com/stdlib-js/stdlib/commit/dd72b0f28dc570151a855a31c9c831fe86f91169) - add `ndarray/base/ndims`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-next-cartesian-index-v0.2.0">

#### [@stdlib/ndarray/base/next-cartesian-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/next-cartesian-index)

<details>

<section class="features">

##### Features

-   [`b8de2da`](https://github.com/stdlib-js/stdlib/commit/b8de2dab6ca473794f646945254f97c839fc31af) - add `ndarray/base/next-cartesian-index`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-normalize-index-v0.2.0">

#### [@stdlib/ndarray/base/normalize-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/normalize-index)

<details>

<section class="features">

##### Features

-   [`512c8a8`](https://github.com/stdlib-js/stdlib/commit/512c8a8f75a158a42f9ea9113bda929e0c28519e) - add `ndarray/base/normalize-index`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-v0.2.0">

#### [@stdlib/ndarray/base/nullary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary)

<details>

<section class="features">

##### Features

-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - add `ndarray/base/assign`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ba92c62`](https://github.com/stdlib-js/stdlib/commit/ba92c62429e3f7165f526c72ad37824283b459d7) - remove related section

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-loop-interchange-order-v0.2.0">

#### [@stdlib/ndarray/base/nullary-loop-interchange-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary-loop-interchange-order)

<details>

<section class="features">

##### Features

-   [`c73cbe7`](https://github.com/stdlib-js/stdlib/commit/c73cbe76e440cf2e4211467d0db69d752409054d) - add support for returning dimension indices

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-numel-dimension-v0.2.0">

#### [@stdlib/ndarray/base/numel-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/numel-dimension)

<details>

<section class="features">

##### Features

-   [`6224528`](https://github.com/stdlib-js/stdlib/commit/62245282f95e98d2fe25e5aadc92f9d196ff25c5) - add `ndarray/base/numel-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-offset-v0.2.0">

#### [@stdlib/ndarray/base/offset](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/offset)

<details>

<section class="features">

##### Features

-   [`08dd5cd`](https://github.com/stdlib-js/stdlib/commit/08dd5cdbbfb2370bc88cf0e223a1371473243c09) - add `ndarray/base/offset`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-order-v0.2.0">

#### [@stdlib/ndarray/base/order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/order)

<details>

<section class="features">

##### Features

-   [`857a8c7`](https://github.com/stdlib-js/stdlib/commit/857a8c79fd6099e8a34cec07d9b6c89a8e29e77f) - add `ndarray/base/order`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-prepend-singleton-dimensions-v0.2.0">

#### [@stdlib/ndarray/base/prepend-singleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/prepend-singleton-dimensions)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`a5ce155`](https://github.com/stdlib-js/stdlib/commit/a5ce155e3f2da8176e848e5fd75833a7a943fdb6) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-remove-singleton-dimensions-v0.2.0">

#### [@stdlib/ndarray/base/remove-singleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/remove-singleton-dimensions)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`9741d55`](https://github.com/stdlib-js/stdlib/commit/9741d5527de099260554aa7f4e2e4ca4c3e2cd2a) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-reverse-v0.2.0">

#### [@stdlib/ndarray/base/reverse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/reverse)

<details>

<section class="features">

##### Features

-   [`aff949b`](https://github.com/stdlib-js/stdlib/commit/aff949b5c2ee01b9aef69e471c735691b27ec370) - add `ndarray/base/reverse`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-reverse-dimension-v0.2.0">

#### [@stdlib/ndarray/base/reverse-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/reverse-dimension)

<details>

<section class="features">

##### Features

-   [`86f5a89`](https://github.com/stdlib-js/stdlib/commit/86f5a894a141d677a19ee54e1263dacb165a177c) - add `ndarray/base/reverse-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-serialize-meta--v0.2.0">

#### [@stdlib/ndarray/base/serialize-meta-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/serialize-meta-)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`6a6225d`](https://github.com/stdlib-js/stdlib/commit/6a6225d3d7a9a7e97387c1d1b3dff09c702eddd7) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-shape-v0.2.0">

#### [@stdlib/ndarray/base/shape](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/shape)

<details>

<section class="features">

##### Features

-   [`7a6cc2b`](https://github.com/stdlib-js/stdlib/commit/7a6cc2b58a83de238126dc3e899d663b5939167b) - add `ndarray/base/shape`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-v0.2.0">

#### [@stdlib/ndarray/base/slice](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice)

<details>

<section class="features">

##### Features

-   [`48cb9aa`](https://github.com/stdlib-js/stdlib/commit/48cb9aabdfbeb58af82ad69ebf0754e2802797fd) - add support for returning a mutable ndarray view
-   [`37ddf6d`](https://github.com/stdlib-js/stdlib/commit/37ddf6d4d84a64c83743a3e18863ad5ea8fd0d6f) - add `ndarray/base/slice`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b75bcc2`](https://github.com/stdlib-js/stdlib/commit/b75bcc2e8807ea3f2ec8d8803bb6f4106bd11d0f) - add missing argument
-   [`09b4354`](https://github.com/stdlib-js/stdlib/commit/09b435430b5f5a1809e409d8b64bd3974fc56ccb) - rename parameter to match docs
-   [`c636c08`](https://github.com/stdlib-js/stdlib/commit/c636c084bae9899fff1e667f00ecf9a71dd61175) - address bug when resolving buffer index of the first element indexed by a slice

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-assign-v0.2.0">

#### [@stdlib/ndarray/base/slice-assign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-assign)

<details>

<section class="features">

##### Features

-   [`c90e739`](https://github.com/stdlib-js/stdlib/commit/c90e7393fb2abf6d563581c2e47e8fe707b4cc33) - add `ndarray/base/slice-assign`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c13a4d5`](https://github.com/stdlib-js/stdlib/commit/c13a4d58f04d875125481add5d68e1e2052b19ce) - add missing argument

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-v0.2.0">

#### [@stdlib/ndarray/base/slice-dimension](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension)

<details>

<section class="features">

##### Features

-   [`5ca2f0e`](https://github.com/stdlib-js/stdlib/commit/5ca2f0e339d3580058c55d401045f8e66caaf543) - add `ndarray/base/slice-dimension`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-from-v0.2.0">

#### [@stdlib/ndarray/base/slice-dimension-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension-from)

<details>

<section class="features">

##### Features

-   [`de5ef5e`](https://github.com/stdlib-js/stdlib/commit/de5ef5e1b15d235a28570f92fb5c12b1958227b5) - add `ndarray/base/slice-dimension-from`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-dimension-to-v0.2.0">

#### [@stdlib/ndarray/base/slice-dimension-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-dimension-to)

<details>

<section class="features">

##### Features

-   [`3eb7c44`](https://github.com/stdlib-js/stdlib/commit/3eb7c445c25a352075cd32b826ec399fdb8f2775) - add `ndarray/base/slice-dimension-to`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-from-v0.2.0">

#### [@stdlib/ndarray/base/slice-from](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-from)

<details>

<section class="features">

##### Features

-   [`7f80a7c`](https://github.com/stdlib-js/stdlib/commit/7f80a7cdf828e50f98b963df45b2c9262c501a14) - add `ndarray/base/slice-from`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`c8241c2`](https://github.com/stdlib-js/stdlib/commit/c8241c254b2ab5e5116f293ad2f8165c38ac9f4e) - ensure ability to return an empty slice in strict mode

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-slice-to-v0.2.0">

#### [@stdlib/ndarray/base/slice-to](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/slice-to)

<details>

<section class="features">

##### Features

-   [`4da3db2`](https://github.com/stdlib-js/stdlib/commit/4da3db265d7a7ab8dd6e91eb55d3ab393a2789f3) - add `ndarray/base/slice-to`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-stride-v0.2.0">

#### [@stdlib/ndarray/base/stride](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/stride)

<details>

<section class="features">

##### Features

-   [`b4aa572`](https://github.com/stdlib-js/stdlib/commit/b4aa5729cbf528faac2a81b2bf73d11f9f3ad39f) - add `ndarray/base/stride`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-strides-v0.2.0">

#### [@stdlib/ndarray/base/strides](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/strides)

<details>

<section class="features">

##### Features

-   [`5a0c235`](https://github.com/stdlib-js/stdlib/commit/5a0c23554e53b29fe6c36148c351699dfefe4ea7) - add `ndarray/base/strides`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`8874562`](https://github.com/stdlib-js/stdlib/commit/8874562a8e3383393bef0e1220080fb20a99880f) - add missing support for minimal ndarray-like objects not supporting a strides property

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-sub2ind-v0.2.0">

#### [@stdlib/ndarray/base/sub2ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/sub2ind)

<details>

<section class="features">

##### Features

-   [`5363916`](https://github.com/stdlib-js/stdlib/commit/5363916b97a8b70622fff6d8663760d3582e4336) - add support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-v0.2.0">

#### [@stdlib/ndarray/base/unary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary)

<details>

<section class="features">

##### Features

-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - add `ndarray/base/assign`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-vind2-v0.2.0">

#### [@stdlib/ndarray/base/vind2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/vind2)

<details>

<section class="features">

##### Features

-   [`274da55`](https://github.com/stdlib-js/stdlib/commit/274da55cfd025bbc1f1bf59d5c7e71ed12250ae4) - add support for `normalize` index mode

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-v0.2.0">

#### [@stdlib/ndarray/base/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`def989d`](https://github.com/stdlib-js/stdlib/commit/def989d20c35d4cb0834e91324177abc8f522626) - resolve type declaration typo by removing stray lint directive

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`b501073`](https://github.com/stdlib-js/stdlib/commit/b5010734a696fcd8b0415dfbf302636d408a33e3) - **bench:** simplify array access logic to avoid influencing results _(by Athan Reines)_
-   [`0ad4756`](https://github.com/stdlib-js/stdlib/commit/0ad4756c8d54c35bd503e14d78f5133f6cd6a09d) - **docs:** update examples _(by Athan Reines)_
-   [`e8cab88`](https://github.com/stdlib-js/stdlib/commit/e8cab8848dec80fd00d4355169db890b556fd128) - **docs:** update examples _(by Athan Reines)_
-   [`4c4509f`](https://github.com/stdlib-js/stdlib/commit/4c4509f9a4c6a8aec7dbe57ae8a5d732af2a0095) - **docs:** update examples _(by Athan Reines)_
-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - **feat:** update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287) _(by stdlib-bot, Athan Reines)_
-   [`c73cbe7`](https://github.com/stdlib-js/stdlib/commit/c73cbe76e440cf2e4211467d0db69d752409054d) - **feat:** add support for returning dimension indices _(by Athan Reines)_
-   [`a33d506`](https://github.com/stdlib-js/stdlib/commit/a33d506252c11f20153e0de408996ee8798bb4ae) - **docs:** fix comments _(by Athan Reines)_
-   [`8cec00e`](https://github.com/stdlib-js/stdlib/commit/8cec00e2ba3e5a446a378a932beae01eb400ea8a) - **docs:** fix copy-paste error _(by Athan Reines)_
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - **feat:** update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221) _(by stdlib-bot, Philipp Burckhardt)_
-   [`96489fa`](https://github.com/stdlib-js/stdlib/commit/96489fa603a2920bef92fb38b49ca9468851714d) - **docs:** update namespace table of contents [(#1251)](https://github.com/stdlib-js/stdlib/pull/1251) _(by stdlib-bot, Philipp Burckhardt)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`46c964b`](https://github.com/stdlib-js/stdlib/commit/46c964b8697cd49865726bcf1bf37574a5ff6386) - **feat:** add `numelDimension` to namespace _(by Athan Reines)_
-   [`6224528`](https://github.com/stdlib-js/stdlib/commit/62245282f95e98d2fe25e5aadc92f9d196ff25c5) - **feat:** add `ndarray/base/numel-dimension` _(by Athan Reines)_
-   [`1b94b32`](https://github.com/stdlib-js/stdlib/commit/1b94b32f45d7f1728d5b352043fa0dda99fbbaab) - **test:** fix test description _(by Athan Reines)_
-   [`a405ab5`](https://github.com/stdlib-js/stdlib/commit/a405ab5dd0d868566f7e4efe2dcf605908367632) - **refactor:** use base utility to resolve an ndarray flag _(by Athan Reines)_
-   [`a6eb07f`](https://github.com/stdlib-js/stdlib/commit/a6eb07f21ba96025798827e611c337d4239492aa) - **docs:** update namespace table of contents [(#1245)](https://github.com/stdlib-js/stdlib/pull/1245) _(by stdlib-bot, Athan Reines)_
-   [`7e1700c`](https://github.com/stdlib-js/stdlib/commit/7e1700c858e6cc93086ef4ac25d41c2ac12de629) - **docs:** fix description _(by Athan Reines)_
-   [`8713747`](https://github.com/stdlib-js/stdlib/commit/87137479521daec5b4df0376fe9038107727d7b2) - **refactor:** preserve type information for individual flags _(by Athan Reines)_
-   [`558baf5`](https://github.com/stdlib-js/stdlib/commit/558baf5c1626333a9a198c75fc0889ddc131e489) - **refactor:** use `Flags` interface _(by Athan Reines)_
-   [`36d1ecc`](https://github.com/stdlib-js/stdlib/commit/36d1eccee290162d423283a088d9467f3a06d475) - **feat:** add `flag` to namespace _(by Athan Reines)_
-   [`e557f2b`](https://github.com/stdlib-js/stdlib/commit/e557f2bd167692a6d0c67e8b9b0133a72d91903c) - **feat:** add `ndarray/base/flag` _(by Athan Reines)_
-   [`25bde3f`](https://github.com/stdlib-js/stdlib/commit/25bde3f0411e0256e1f93ab2537ece9eefebd5df) - **feat:** add `flags` to namespace _(by Athan Reines)_
-   [`181c73e`](https://github.com/stdlib-js/stdlib/commit/181c73e2f2b9a88ddfe95df533e975a1b1c3a469) - **feat:** add `ndarray/base/flags` _(by Athan Reines)_
-   [`053eb7a`](https://github.com/stdlib-js/stdlib/commit/053eb7a9e7fdca4cb4014fbf2d832c7cc0176407) - **docs:** update namespace table of contents [(#1235)](https://github.com/stdlib-js/stdlib/pull/1235) _(by stdlib-bot, Athan Reines)_
-   [`7de0830`](https://github.com/stdlib-js/stdlib/commit/7de08307c48bc60701dd4fab8a7effe7421882f7) - **bench:** fix description _(by Athan Reines)_
-   [`f5242e4`](https://github.com/stdlib-js/stdlib/commit/f5242e4c0c8087451d4851a7873ce35eeddcec8d) - **bench:** fix description _(by Athan Reines)_
-   [`b97dcf0`](https://github.com/stdlib-js/stdlib/commit/b97dcf02f8b10885152891ba521f3ed72706d397) - **feat:** add `maybeBroadcastArrays` to namespace _(by Athan Reines)_
-   [`74d4f9f`](https://github.com/stdlib-js/stdlib/commit/74d4f9f193420a70ea40fb576d667d582da5cd6f) - **feat:** add `ndarray/base/maybe-broadcast-arrays` _(by Athan Reines)_
-   [`0beacd0`](https://github.com/stdlib-js/stdlib/commit/0beacd0c0007da402d8219c5e7078c7bb1d1ec88) - **docs:** update examples and fix typos _(by Athan Reines)_
-   [`d105983`](https://github.com/stdlib-js/stdlib/commit/d105983b65fd6dbbbf4cf49a6ae00d2d8176fac9) - **docs:** update namespace table of contents [(#1230)](https://github.com/stdlib-js/stdlib/pull/1230) _(by stdlib-bot, Athan Reines)_
-   [`dc5bb62`](https://github.com/stdlib-js/stdlib/commit/dc5bb62c65148f6d6dadb351a2b9d0a26134473d) - **feat:** add `broadcastArrays` to namespace _(by Athan Reines)_
-   [`d47c764`](https://github.com/stdlib-js/stdlib/commit/d47c7648f41c6622489321f7ee36b875acd117f6) - **feat:** add `ndarray/base/broadcast-arrays` _(by Athan Reines)_
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - **feat:** update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170) _(by stdlib-bot, Athan Reines)_
-   [`6ff6caf`](https://github.com/stdlib-js/stdlib/commit/6ff6cafeb4e71cb856ded8e0b42957a627fe617d) - **docs:** update namespace table of contents [(#1162)](https://github.com/stdlib-js/stdlib/pull/1162 ) _(by stdlib-bot)_
-   [`c8241c2`](https://github.com/stdlib-js/stdlib/commit/c8241c254b2ab5e5116f293ad2f8165c38ac9f4e) - **fix:** ensure ability to return an empty slice in strict mode _(by Athan Reines)_
-   [`654e776`](https://github.com/stdlib-js/stdlib/commit/654e776d259d189482267931abbc4df6f9f544a0) - **refactor:** avoid copying the strides array if possible _(by Athan Reines)_
-   [`4b79950`](https://github.com/stdlib-js/stdlib/commit/4b799504ac2ef9b99526f08f34aba26041f4421a) - **docs:** add note _(by Athan Reines)_
-   [`9f19a74`](https://github.com/stdlib-js/stdlib/commit/9f19a74b5e8907f2925f3bc21f002a260031c564) - **feat:** add `stride` to namespace _(by Athan Reines)_
-   [`b4aa572`](https://github.com/stdlib-js/stdlib/commit/b4aa5729cbf528faac2a81b2bf73d11f9f3ad39f) - **feat:** add `ndarray/base/stride` _(by Athan Reines)_
-   [`57592a3`](https://github.com/stdlib-js/stdlib/commit/57592a33a922a782cf7395fc132260ce6789aa71) - **style:** add missing space _(by Athan Reines)_
-   [`f3d3f4f`](https://github.com/stdlib-js/stdlib/commit/f3d3f4f4d69804a3f31bdb542abf1aca9f3576d9) - **feat:** add a `factory` method to allow for partial application _(by Athan Reines)_
-   [`446b4cb`](https://github.com/stdlib-js/stdlib/commit/446b4cbdd8e1e8099fa66e60e5d680a9bb0e3498) - **bench:** fix value range _(by Athan Reines)_
-   [`ca9cb28`](https://github.com/stdlib-js/stdlib/commit/ca9cb280bfa24e713f465838c98328b7aea5a153) - **docs:** ensure notes use consistent grammar _(by Athan Reines)_
-   [`274da55`](https://github.com/stdlib-js/stdlib/commit/274da55cfd025bbc1f1bf59d5c7e71ed12250ae4) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`5363916`](https://github.com/stdlib-js/stdlib/commit/5363916b97a8b70622fff6d8663760d3582e4336) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`8e18e43`](https://github.com/stdlib-js/stdlib/commit/8e18e43bbd0b553e32bd5e8df1d36d4a8cc9d8c3) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`a7d2960`](https://github.com/stdlib-js/stdlib/commit/a7d2960bebae832e80d61cadeb2a1b6d719f0db1) - **feat:** add support for returning a normalized index _(by Athan Reines)_
-   [`4f15a40`](https://github.com/stdlib-js/stdlib/commit/4f15a4060127c61a00f7ebb395afadee3ecf7736) - **test:** add tests to ensure support for `normalize` index mode _(by Athan Reines)_
-   [`8a27986`](https://github.com/stdlib-js/stdlib/commit/8a279869a4a7c154d239f4e7af037833350e208f) - **feat:** add support for `normalize` index mode _(by Athan Reines)_
-   [`dffeaf2`](https://github.com/stdlib-js/stdlib/commit/dffeaf27e1c892ddb13dc581a1525abfa9b0a8ff) - **refactor:** use array contains utility and add support for `normalize` index mode _(by Athan Reines)_
-   [`30e3541`](https://github.com/stdlib-js/stdlib/commit/30e35413446e1f46eb385bb811db2297bfc66bb0) - **refactor:** update require path _(by Athan Reines)_
-   [`f87e2ee`](https://github.com/stdlib-js/stdlib/commit/f87e2eecc0cb47d8ad15f63dc0d94405e040ac2f) - **refactor:** update require path _(by Athan Reines)_
-   [`def989d`](https://github.com/stdlib-js/stdlib/commit/def989d20c35d4cb0834e91324177abc8f522626) - **fix:** resolve type declaration typo by removing stray lint directive _(by Philipp Burckhardt)_
-   [`23114c6`](https://github.com/stdlib-js/stdlib/commit/23114c65f67ea8c17fc835e280408c39544dfa76) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`b496b72`](https://github.com/stdlib-js/stdlib/commit/b496b72595355b5a794c940bd7f81ea5223b91bd) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`46d049b`](https://github.com/stdlib-js/stdlib/commit/46d049b5d38f9ef6e426d6a517ac8925c94d7642) - **build:** replace tslint directive _(by Philipp Burckhardt)_
-   [`8c8e3d1`](https://github.com/stdlib-js/stdlib/commit/8c8e3d15f6698c81c75fc94fa10a7e2b9fb8b5d9) - **docs:** update links _(by Athan Reines)_
-   [`ba92c62`](https://github.com/stdlib-js/stdlib/commit/ba92c62429e3f7165f526c72ad37824283b459d7) - **fix:** remove related section _(by Athan Reines)_
-   [`1e55c4b`](https://github.com/stdlib-js/stdlib/commit/1e55c4be392d4453a136bed034653452986821d7) - **docs:** remove related packages _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`bf2cf8b`](https://github.com/stdlib-js/stdlib/commit/bf2cf8b0424e608a4e3abb6d18a8b44d790aa99c) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - **feat:** update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122) _(by stdlib-bot, Athan Reines)_
-   [`a17f2aa`](https://github.com/stdlib-js/stdlib/commit/a17f2aaed3f2449944d5c5d348e9550087ff7a87) - **docs:** update namespace table of contents [(#1116)](https://github.com/stdlib-js/stdlib/pull/1116) _(by stdlib-bot, Athan Reines)_
-   [`ce8a312`](https://github.com/stdlib-js/stdlib/commit/ce8a3129e8f00c590cc4c7350d25dacef0873ea8) - **test:** update test description _(by Athan Reines)_
-   [`3fc3d44`](https://github.com/stdlib-js/stdlib/commit/3fc3d44bb885d6d8b31a2a31b614941d074c01d8) - **docs:** fix example _(by Athan Reines)_
-   [`7193f92`](https://github.com/stdlib-js/stdlib/commit/7193f92f82b1335c5527c6a8b3d1f36f866cff2e) - **test:** update test description to use consistent language _(by Athan Reines)_
-   [`d90228a`](https://github.com/stdlib-js/stdlib/commit/d90228a01f71e0b0a9e443377e711549040ecf31) - **feat:** add `sliceDimensionFrom` to namespace _(by Athan Reines)_
-   [`de5ef5e`](https://github.com/stdlib-js/stdlib/commit/de5ef5e1b15d235a28570f92fb5c12b1958227b5) - **feat:** add `ndarray/base/slice-dimension-from` _(by Athan Reines)_
-   [`229ab6e`](https://github.com/stdlib-js/stdlib/commit/229ab6efd7b1b93991b78a9399d071e23522e633) - **feat:** add `sliceDimensionTo` to namespace _(by Athan Reines)_
-   [`cb19b0e`](https://github.com/stdlib-js/stdlib/commit/cb19b0ed2878a48c3fe70cef41695ac587fa1907) - **docs:** update parameter description _(by Athan Reines)_
-   [`177eb1f`](https://github.com/stdlib-js/stdlib/commit/177eb1f9403d09272254662c38eb92ecf2bb2398) - **docs:** update parameter description _(by Athan Reines)_
-   [`3eb7c44`](https://github.com/stdlib-js/stdlib/commit/3eb7c445c25a352075cd32b826ec399fdb8f2775) - **feat:** add `ndarray/base/slice-dimension-to` _(by Athan Reines)_
-   [`4ee7e66`](https://github.com/stdlib-js/stdlib/commit/4ee7e66b7800ec8f720d5120a746c0f7a01662c9) - **docs:** fix typo _(by Athan Reines)_
-   [`21396dd`](https://github.com/stdlib-js/stdlib/commit/21396dd772ca631e3c6899999e40ab72925bc771) - **docs:** fix typo _(by Athan Reines)_
-   [`244aa35`](https://github.com/stdlib-js/stdlib/commit/244aa355c7767363ecc7745ca02744067c619f5f) - **docs:** remove unused requires _(by Athan Reines)_
-   [`0ac2169`](https://github.com/stdlib-js/stdlib/commit/0ac21696a8b6a4c9fca124edb92beaa923de2143) - **docs:** remove unused requires _(by Athan Reines)_
-   [`3aeb245`](https://github.com/stdlib-js/stdlib/commit/3aeb2455e4c6293f9c979355e2ea0755a250501b) - **docs:** remove unused requires _(by Athan Reines)_
-   [`af588fe`](https://github.com/stdlib-js/stdlib/commit/af588fed3d9d59a4e775ab691ee5d01d5d52fa1d) - **docs:** remove unused requires _(by Athan Reines)_
-   [`9061852`](https://github.com/stdlib-js/stdlib/commit/9061852038a6d4dc558baddfed0ff5d05ab2e6ae) - **docs:** remove unused requires _(by Athan Reines)_
-   [`d717347`](https://github.com/stdlib-js/stdlib/commit/d717347f290f6c738c47131a1557da42228ccd39) - **refactor:** use utility to normalize an index _(by Athan Reines)_
-   [`67592b8`](https://github.com/stdlib-js/stdlib/commit/67592b82b088e4b8516f4f5e210368c96cbb4c11) - **feat:** add `normalizeIndex` to namespace _(by Athan Reines)_
-   [`d57a9aa`](https://github.com/stdlib-js/stdlib/commit/d57a9aa0e900bde98c302a7ee711aed8be127056) - **docs:** update heading _(by Athan Reines)_
-   [`4b3b43d`](https://github.com/stdlib-js/stdlib/commit/4b3b43d45f39775896743ec9d5d2df8c0baa4d79) - **docs:** update heading _(by Athan Reines)_
-   [`512c8a8`](https://github.com/stdlib-js/stdlib/commit/512c8a8f75a158a42f9ea9113bda929e0c28519e) - **feat:** add `ndarray/base/normalize-index` _(by Athan Reines)_
-   [`a41ecbd`](https://github.com/stdlib-js/stdlib/commit/a41ecbd20541d1f60bc30db109b2599021cc4e47) - **feat:** add `sliceFrom` to namespace _(by Athan Reines)_
-   [`7f80a7c`](https://github.com/stdlib-js/stdlib/commit/7f80a7cdf828e50f98b963df45b2c9262c501a14) - **feat:** add `ndarray/base/slice-from` _(by Athan Reines)_
-   [`6a52a46`](https://github.com/stdlib-js/stdlib/commit/6a52a46aa5478a0ee2fc6b946a8665788dbbaec7) - **refactor:** use assertion utility _(by Athan Reines)_
-   [`54401ac`](https://github.com/stdlib-js/stdlib/commit/54401acffc828b45fbe3cabe6b17f305cb4170b0) - **feat:** add `sliceTo` to namespace _(by Athan Reines)_
-   [`4da3db2`](https://github.com/stdlib-js/stdlib/commit/4da3db265d7a7ab8dd6e91eb55d3ab393a2789f3) - **feat:** add `ndarray/base/slice-to` _(by Athan Reines)_
-   [`2934e57`](https://github.com/stdlib-js/stdlib/commit/2934e576d314c60fc6198228d33282a1ab4f76c1) - **feat:** add `flipud` to namespace _(by Athan Reines)_
-   [`316273f`](https://github.com/stdlib-js/stdlib/commit/316273feed1a28304e7e4a1612831e257fc6e9e2) - **feat:** add `ndarray/base/flipud` _(by Athan Reines)_
-   [`013beaa`](https://github.com/stdlib-js/stdlib/commit/013beaa9f51f64fb56a25ab95dc85a0f849dc1ad) - **feat:** add `fliplr` to namespace _(by Athan Reines)_
-   [`bb9e0a4`](https://github.com/stdlib-js/stdlib/commit/bb9e0a4dc183c68ffd21fecc1130cb4bac303597) - **feat:** add `ndarray/base/fliplr` _(by Athan Reines)_
-   [`b390e0b`](https://github.com/stdlib-js/stdlib/commit/b390e0bdfc5f184568b70ddd3d9b4a9cd92dbf9e) - **feat:** add `reverseDimension` to namespace _(by Athan Reines)_
-   [`86f5a89`](https://github.com/stdlib-js/stdlib/commit/86f5a894a141d677a19ee54e1263dacb165a177c) - **feat:** add `ndarray/base/reverse-dimension` _(by Athan Reines)_
-   [`c6128d2`](https://github.com/stdlib-js/stdlib/commit/c6128d2bd4505180493013dfefaa2b3292d4404a) - **test:** add test cases for negative dimension indices _(by Athan Reines)_
-   [`d1efd51`](https://github.com/stdlib-js/stdlib/commit/d1efd5153de57df1926a497ac56bb66c0f23329a) - **refactor:** use base array utility to create argument array _(by Athan Reines)_
-   [`be83095`](https://github.com/stdlib-js/stdlib/commit/be83095aaf7d0dec724ac1d42135459f33ca38af) - **feat:** add `reverse` to namespace _(by Athan Reines)_
-   [`aff949b`](https://github.com/stdlib-js/stdlib/commit/aff949b5c2ee01b9aef69e471c735691b27ec370) - **feat:** add `ndarray/base/reverse` _(by Athan Reines)_
-   [`0fa588f`](https://github.com/stdlib-js/stdlib/commit/0fa588fa4f4eb1b45f405838d2252a8b9a4aab88) - **refactor:** use utility to create a MultiSlice from a list of arguments _(by Athan Reines)_
-   [`aabbb4e`](https://github.com/stdlib-js/stdlib/commit/aabbb4eaff80556d2320d75cf9520f5b01352e50) - **feat:** add loop functions for downcasting floating-point dtypes _(by Athan Reines)_
-   [`b621204`](https://github.com/stdlib-js/stdlib/commit/b621204db5caea8e9474ca11a17390426a6481c3) - **refactor:** use assertion utility for mostly safe casts _(by Athan Reines)_
-   [`733ee49`](https://github.com/stdlib-js/stdlib/commit/733ee4954b08c24007460390d688fe86bb1e8fae) - **feat:** add support for a `mostly-safe` casting mode _(by Athan Reines)_
-   [`1aefe83`](https://github.com/stdlib-js/stdlib/commit/1aefe83e90f109989a001e85ca25ed278a7c3a50) - **feat:** add `isMostlySafeDataTypeCast` to namespace _(by Athan Reines)_
-   [`a8290c4`](https://github.com/stdlib-js/stdlib/commit/a8290c4059e1aa16ed2388a02c5637e58659ae01) - **feat:** add `ndarray/base/assert/is-mostly-safe-data-type-cast` _(by Athan Reines)_
-   [`32d8d05`](https://github.com/stdlib-js/stdlib/commit/32d8d0583c9810eb6eb740a54a84921f7a712a3e) - **docs:** document support for `mostly-safe` casting mode _(by Athan Reines)_
-   [`e5e8db8`](https://github.com/stdlib-js/stdlib/commit/e5e8db8c741f5195fe0b9d823a6eff6d1011b6a6) - **chore:** add TODO _(by Athan Reines)_
-   [`5ec7c84`](https://github.com/stdlib-js/stdlib/commit/5ec7c84218508cd2c188764951042c838167bc8f) - **chore:** add TODO _(by Athan Reines)_
-   [`a174903`](https://github.com/stdlib-js/stdlib/commit/a174903fecf53776cf2a283c932f1602145326ce) - **chore:** add TODO _(by Athan Reines)_
-   [`f4cb44c`](https://github.com/stdlib-js/stdlib/commit/f4cb44c4a2f34211b7f53aa1e7e49e564445268b) - **feat:** add `assign` to namespace _(by Athan Reines)_
-   [`4711195`](https://github.com/stdlib-js/stdlib/commit/471119503f0230ea0078a40a93d9f790cfec3e02) - **style:** disable lint rule _(by Athan Reines)_
-   [`5a97436`](https://github.com/stdlib-js/stdlib/commit/5a97436e934c0759dce08a5b9ba46717b370fd31) - **refactor:** use `ndarray/base/assign` for assignment _(by Athan Reines)_
-   [`c8417b0`](https://github.com/stdlib-js/stdlib/commit/c8417b07e7637b7c5c2336191d9b3288a0e5a228) - **fix:** add support for assigning real-valued elements to complex-valued elements _(by Athan Reines)_
-   [`46d5210`](https://github.com/stdlib-js/stdlib/commit/46d52108725f354f62312121e797195cbbfe7611) - **fix:** address unterminated macro _(by Athan Reines)_
-   [`39b2b0d`](https://github.com/stdlib-js/stdlib/commit/39b2b0da7407b46375ee9897ce60452f5179cf1b) - **fix:** use correct type for dispatch object _(by Athan Reines)_
-   [`ec59584`](https://github.com/stdlib-js/stdlib/commit/ec59584921dfb496f926c6a72f0278f667b01a02) - **docs:** fix providing of extraneous argument _(by Athan Reines)_
-   [`c28a16e`](https://github.com/stdlib-js/stdlib/commit/c28a16e50e84bc0fb8dd16b644f83b60248fe3b7) - **feat:** add `ndarray/base/assign` _(by Athan Reines)_
-   [`ae27776`](https://github.com/stdlib-js/stdlib/commit/ae27776d5d4827f695a9ad316234d207bf1038d9) - **test:** fix declaration tests _(by Athan Reines)_
-   [`532089a`](https://github.com/stdlib-js/stdlib/commit/532089aa75aaa057c8902ccfe56c245e731bfb30) - **docs:** fix return annotation _(by Athan Reines)_
-   [`9df2f0a`](https://github.com/stdlib-js/stdlib/commit/9df2f0ab1385d4ce8763e5770aa5a099ac324ef1) - **docs:** fix heading _(by Athan Reines)_
-   [`b2569d3`](https://github.com/stdlib-js/stdlib/commit/b2569d342a0e9fee8214cb18de258e61ab0efdd4) - **test:** add missing tests for error conditions _(by Athan Reines)_
-   [`d5e5b40`](https://github.com/stdlib-js/stdlib/commit/d5e5b40c2af6d821edafb3e4827c7e61b6e704e9) - **test:** add test case to ensure full test coverage _(by Athan Reines)_
-   [`c794d6b`](https://github.com/stdlib-js/stdlib/commit/c794d6b070e23aa1ab14d7f7e9a5bf9d8b43b837) - **test:** add test case to ensure full test coverage _(by Athan Reines)_
-   [`836aaf4`](https://github.com/stdlib-js/stdlib/commit/836aaf48a1824e3002122cc67aae3d01a17451a5) - **test:** add test case for zero-dimensional ndarray-like object _(by Athan Reines)_
-   [`8874562`](https://github.com/stdlib-js/stdlib/commit/8874562a8e3383393bef0e1220080fb20a99880f) - **fix:** add missing support for minimal ndarray-like objects not supporting a strides property _(by Athan Reines)_
-   [`b75bcc2`](https://github.com/stdlib-js/stdlib/commit/b75bcc2e8807ea3f2ec8d8803bb6f4106bd11d0f) - **fix:** add missing argument _(by Athan Reines)_
-   [`c13a4d5`](https://github.com/stdlib-js/stdlib/commit/c13a4d58f04d875125481add5d68e1e2052b19ce) - **fix:** add missing argument _(by Athan Reines)_
-   [`6a6225d`](https://github.com/stdlib-js/stdlib/commit/6a6225d3d7a9a7e97387c1d1b3dff09c702eddd7) - **fix:** add missing argument _(by Athan Reines)_
-   [`9741d55`](https://github.com/stdlib-js/stdlib/commit/9741d5527de099260554aa7f4e2e4ca4c3e2cd2a) - **fix:** add missing argument _(by Athan Reines)_
-   [`a5ce155`](https://github.com/stdlib-js/stdlib/commit/a5ce155e3f2da8176e848e5fd75833a7a943fdb6) - **fix:** add missing argument _(by Athan Reines)_
-   [`c539bd1`](https://github.com/stdlib-js/stdlib/commit/c539bd17b8cd17ca3a37a958626dbd6df2e25477) - **fix:** add missing argument _(by Athan Reines)_
-   [`c142624`](https://github.com/stdlib-js/stdlib/commit/c1426240f375b6c864a2d59368694ac09d7637f6) - **fix:** add missing argument _(by Athan Reines)_
-   [`61aa8e7`](https://github.com/stdlib-js/stdlib/commit/61aa8e7e7d3d64e9bac8b51d34b1b734a24a84de) - **fix:** add missing argument _(by Athan Reines)_
-   [`65d964f`](https://github.com/stdlib-js/stdlib/commit/65d964fc0d0cde545a0e15fd34bcfcdec5eb01b6) - **fix:** add missing argument _(by Athan Reines)_
-   [`11d1d5d`](https://github.com/stdlib-js/stdlib/commit/11d1d5d61ac0b89f10982bfd44566d4f7fd03408) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`d3d1190`](https://github.com/stdlib-js/stdlib/commit/d3d119010e4cb5a21fc8f07e8ea5508e7bea2111) - **refactor:** use accessor utilities and add TODO _(by Athan Reines)_
-   [`da14441`](https://github.com/stdlib-js/stdlib/commit/da1444138eccd12ecee59c0872ff99655899374f) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`59fe5b7`](https://github.com/stdlib-js/stdlib/commit/59fe5b79e6328439e4e6eccc7563cd1ef2dc8ad9) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`6b7aed1`](https://github.com/stdlib-js/stdlib/commit/6b7aed1cb8f67d76b9a1676fd48d7964f168d3b3) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`725cf2d`](https://github.com/stdlib-js/stdlib/commit/725cf2d5e22b6d745c5c0565dee497b06594d730) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`f0abdf8`](https://github.com/stdlib-js/stdlib/commit/f0abdf87ef922a985a0b5a727dd1a25e06cac934) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`5325a1c`](https://github.com/stdlib-js/stdlib/commit/5325a1c582f04488de7cfb0cf5f4c08a9bef014d) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`ab25d92`](https://github.com/stdlib-js/stdlib/commit/ab25d926bec34f375717276ed31e62c34f97c293) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`b1146ea`](https://github.com/stdlib-js/stdlib/commit/b1146ea457769d51a1c83a95c397f49631716923) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`9e143f8`](https://github.com/stdlib-js/stdlib/commit/9e143f811371fc79236fb9d0b3e97234637749ad) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`43bd26c`](https://github.com/stdlib-js/stdlib/commit/43bd26c238ffadf082186cfb08799b130375e06f) - **refactor:** use accessor utilities _(by Athan Reines)_
-   [`b985417`](https://github.com/stdlib-js/stdlib/commit/b9854176622b79eb7338247ac9d77ec0d22dc3a7) - **feat:** add `data` to namespace _(by Athan Reines)_
-   [`0786d6c`](https://github.com/stdlib-js/stdlib/commit/0786d6c0bc1087b5748b42632c6b8efebcb147ad) - **feat:** add `ndarray/base/data-buffer` _(by Athan Reines)_
-   [`3a2e182`](https://github.com/stdlib-js/stdlib/commit/3a2e182a27fd4d6ca7d5b518cf24570c273a2556) - **feat:** add `order` to namespace _(by Athan Reines)_
-   [`857a8c7`](https://github.com/stdlib-js/stdlib/commit/857a8c79fd6099e8a34cec07d9b6c89a8e29e77f) - **feat:** add `ndarray/base/order` _(by Athan Reines)_
-   [`88e5849`](https://github.com/stdlib-js/stdlib/commit/88e58498365a51ba56218c74a4767e89eb5061cc) - **feat:** add `dtype` to namespace _(by Athan Reines)_
-   [`9d9b5ca`](https://github.com/stdlib-js/stdlib/commit/9d9b5ca04c251db89351dabfd1d3868fdee22fd2) - **feat:** add `ndarray/base/dtype` _(by Athan Reines)_
-   [`13a81fe`](https://github.com/stdlib-js/stdlib/commit/13a81fee0748b91d9d3b5d763054020c72676b6d) - **docs:** fix description _(by Athan Reines)_
-   [`ed14448`](https://github.com/stdlib-js/stdlib/commit/ed1444886a2b28f68d09d313c7fe550be337d2b4) - **feat:** add `sliceDimension` to namespace _(by Athan Reines)_
-   [`5ca2f0e`](https://github.com/stdlib-js/stdlib/commit/5ca2f0e339d3580058c55d401045f8e66caaf543) - **feat:** add `ndarray/base/slice-dimension` _(by Athan Reines)_
-   [`a8c0a5e`](https://github.com/stdlib-js/stdlib/commit/a8c0a5e69523eab335a311ca8f86dc4eeeb01eb3) - **docs:** remove throws annotation _(by Athan Reines)_
-   [`6cae75a`](https://github.com/stdlib-js/stdlib/commit/6cae75ae7be925b6bcca3fb503d7371b2ca22894) - **docs:** fix variable names _(by Athan Reines)_
-   [`b6571b2`](https://github.com/stdlib-js/stdlib/commit/b6571b2e436559d99e92767a95e95588857205c8) - **feat:** add `strides` to namespace _(by Athan Reines)_
-   [`5a0c235`](https://github.com/stdlib-js/stdlib/commit/5a0c23554e53b29fe6c36148c351699dfefe4ea7) - **feat:** add `ndarray/base/strides` _(by Athan Reines)_
-   [`ed378b7`](https://github.com/stdlib-js/stdlib/commit/ed378b72c05992f0473dc5891dc4664773949148) - **feat:** add `shape` to namespace _(by Athan Reines)_
-   [`7a6cc2b`](https://github.com/stdlib-js/stdlib/commit/7a6cc2b58a83de238126dc3e899d663b5939167b) - **feat:** add `ndarray/base/shape` _(by Athan Reines)_
-   [`43cc884`](https://github.com/stdlib-js/stdlib/commit/43cc884dad74ade7d7dee24f4764ab6c613b497d) - **bench:** fix buffer size _(by Athan Reines)_
-   [`0f8bc08`](https://github.com/stdlib-js/stdlib/commit/0f8bc0882a61b2c54219f37e6d2cb80c50985194) - **feat:** add `offset` to namespace _(by Athan Reines)_
-   [`08dd5cd`](https://github.com/stdlib-js/stdlib/commit/08dd5cdbbfb2370bc88cf0e223a1371473243c09) - **feat:** add `ndarray/base/offset` _(by Athan Reines)_
-   [`6b48944`](https://github.com/stdlib-js/stdlib/commit/6b48944663c08f64956469340e8561704d9923f8) - **feat:** add `ndims` to namespace _(by Athan Reines)_
-   [`dd72b0f`](https://github.com/stdlib-js/stdlib/commit/dd72b0f28dc570151a855a31c9c831fe86f91169) - **feat:** add `ndarray/base/ndims` _(by Athan Reines)_
-   [`4471b9a`](https://github.com/stdlib-js/stdlib/commit/4471b9a4ab23dc789069d77eb9c9eb6a08b4b557) - **docs:** fix description _(by Athan Reines)_
-   [`634cb2a`](https://github.com/stdlib-js/stdlib/commit/634cb2a9ca66d1ec8f9b16b2d003a6856913702e) - **docs:** fix duplicate note and fix benchmark loop _(by Athan Reines)_
-   [`49e1d21`](https://github.com/stdlib-js/stdlib/commit/49e1d216375e904a5448da4bf414a3261e1f68ba) - **feat:** add `nextCartesianIndex` to namespace _(by Athan Reines)_
-   [`b355ef7`](https://github.com/stdlib-js/stdlib/commit/b355ef7f0a5a8b653773812a0ee91c486d5b3120) - **test:** add `assign` tests _(by Athan Reines)_
-   [`b8de2da`](https://github.com/stdlib-js/stdlib/commit/b8de2dab6ca473794f646945254f97c839fc31af) - **feat:** add `ndarray/base/next-cartesian-index` _(by Athan Reines)_
-   [`b1c31b3`](https://github.com/stdlib-js/stdlib/commit/b1c31b32ccffd3dbdd7ebb29a8e0728c02784631) - **bench:** fix branch check _(by Athan Reines)_
-   [`657a07f`](https://github.com/stdlib-js/stdlib/commit/657a07f32040037dbc2d10d9429e1f8496895f46) - **docs:** update comment _(by Athan Reines)_
-   [`3aa8ff7`](https://github.com/stdlib-js/stdlib/commit/3aa8ff7bab4bc2837509e30f494de310c2e7f676) - **docs:** add notes concerning applicability of `writable` parameter _(by Athan Reines)_
-   [`0e5e49b`](https://github.com/stdlib-js/stdlib/commit/0e5e49bbbf3f9d9e206e19372425c5a1bd3a6a9f) - **refactor:** rename parameter from `mutable` to `writable` _(by Athan Reines)_
-   [`389bd3f`](https://github.com/stdlib-js/stdlib/commit/389bd3f2007941c6774cfdc95efc082105afc31e) - **docs:** fix heading _(by Athan Reines)_
-   [`fc66ad8`](https://github.com/stdlib-js/stdlib/commit/fc66ad870122e33f24f390ecd682283e2aba076a) - **docs:** fix import identifier _(by Athan Reines)_
-   [`212c1fa`](https://github.com/stdlib-js/stdlib/commit/212c1fa13fd177b87d0ddfa4e70d411e587d5560) - **feat:** add `sliceAssign` to namespace _(by Athan Reines)_
-   [`e348e20`](https://github.com/stdlib-js/stdlib/commit/e348e203c4da3c570cea0924b4eb0320999adbc7) - **test:** add casting tests _(by Athan Reines)_
-   [`152ee45`](https://github.com/stdlib-js/stdlib/commit/152ee451e095a2cd2fc94a34331e14c83a3d98e5) - **test:** add broadcasting tests _(by Athan Reines)_
-   [`c90e739`](https://github.com/stdlib-js/stdlib/commit/c90e7393fb2abf6d563581c2e47e8fe707b4cc33) - **feat:** add `ndarray/base/slice-assign` _(by Athan Reines)_
-   [`48cb9aa`](https://github.com/stdlib-js/stdlib/commit/48cb9aabdfbeb58af82ad69ebf0754e2802797fd) - **feat:** add support for returning a mutable ndarray view _(by Athan Reines)_
-   [`09b4354`](https://github.com/stdlib-js/stdlib/commit/09b435430b5f5a1809e409d8b64bd3974fc56ccb) - **fix:** rename parameter to match docs _(by Athan Reines)_
-   [`70088a4`](https://github.com/stdlib-js/stdlib/commit/70088a43e057dc3227ecd7180491e165ffd31c51) - **style:** remove extra blank line _(by Athan Reines)_
-   [`976d69a`](https://github.com/stdlib-js/stdlib/commit/976d69a7c27bad4d43cfaf8bdd0d2838363a6d91) - **test:** add tests _(by Athan Reines)_
-   [`2321699`](https://github.com/stdlib-js/stdlib/commit/23216991ba4e9a1d853790581f2108b7fd4318d9) - **test:** add tests _(by Athan Reines)_
-   [`05d7722`](https://github.com/stdlib-js/stdlib/commit/05d7722b6b9941eae7571fc7b8b4dd1c16e3d182) - **test:** add tests _(by Athan Reines)_
-   [`aaaf01e`](https://github.com/stdlib-js/stdlib/commit/aaaf01e43bfef9b8b3c2c9d3f703b3e95e0524b9) - **fix:** use correct format specifier in error message _(by Athan Reines)_
-   [`c636c08`](https://github.com/stdlib-js/stdlib/commit/c636c084bae9899fff1e667f00ecf9a71dd61175) - **fix:** address bug when resolving buffer index of the first element indexed by a slice _(by Athan Reines)_
-   [`987a311`](https://github.com/stdlib-js/stdlib/commit/987a311a1242d4db19d57be1c9e01b6dc5ba813a) - **test:** add tests _(by Athan Reines)_
-   [`15373b4`](https://github.com/stdlib-js/stdlib/commit/15373b4bc5df65314a0fffe20184429f7ad29616) - **feat:** add `slice` to namespace _(by Athan Reines)_
-   [`37ddf6d`](https://github.com/stdlib-js/stdlib/commit/37ddf6d4d84a64c83743a3e18863ad5ea8fd0d6f) - **feat:** add `ndarray/base/slice` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="packages">

### Packages

<section class="package" id="ndarray-base-v0.1.0">

#### [@stdlib/ndarray/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`98c37fa`](https://github.com/stdlib-js/stdlib/commit/98c37fa381ef03c24703d76a5b0be4f95727243c) - add `unaryOutputDataType` to namespace
-   [`6ca0ecb`](https://github.com/stdlib-js/stdlib/commit/6ca0ecb07f89d0ff6041ac2d2cb4a91cdad0059d) - add policy APIs to namespace
-   [`00b4630`](https://github.com/stdlib-js/stdlib/commit/00b46302fa85b4a133c2b93d13ac4cedd427bc11) - add `emptyLike` to namespace
-   [`33e76ef`](https://github.com/stdlib-js/stdlib/commit/33e76efad5564bbd2455f492c34b04a4fbfc8988) - add `empty` to namespace
-   [`0661629`](https://github.com/stdlib-js/stdlib/commit/06616293c16e65f85a2b9b72fc9e036e20cff6ab) - add `broadcastScalar` to namespace
-   [`9800cc4`](https://github.com/stdlib-js/stdlib/commit/9800cc4f8df8d96db8bac00b51ae1491fa579666) - add `nullary` to namespace
-   [`4e94bf0`](https://github.com/stdlib-js/stdlib/commit/4e94bf079c6677f10e5ea1f4eaca93dc52dac8f3) - add `binaryLoopOrder` to namespace
-   [`d151153`](https://github.com/stdlib-js/stdlib/commit/d151153ac4aced58a04e795607000b7138feb05d) - add `ndarray/base/binary-loop-interchange-order`
-   [`0ac8825`](https://github.com/stdlib-js/stdlib/commit/0ac88258a1b720982b47661c5ddeb5a932cf56d4) - add `binaryBlockSize` to namespace
-   [`2600d28`](https://github.com/stdlib-js/stdlib/commit/2600d28341fe75b74e3ab7c02779ee856d0d53ad) - add `ndarray/base/binary-tiling-block-size`
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951)
-   [`6b7c54d`](https://github.com/stdlib-js/stdlib/commit/6b7c54dd2aa970a48a5f73d89c160c7ab6b6ba28) - add `nullaryLoopOrder` to namespace
-   [`760a0a1`](https://github.com/stdlib-js/stdlib/commit/760a0a1aab281e0a1b043b526eac9592551cffb8) - add `nullaryBlockSize` to namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-v0.1.0">

#### [@stdlib/ndarray/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53) - rename `isIntegralDataType` to `isIntegerDataType`
-   [`d0eb2cf`](https://github.com/stdlib-js/stdlib/commit/d0eb2cf2a86e9c9002b3b78218297f3aa57a5ff5) - add `isRealDataType` to namespace
-   [`901dc93`](https://github.com/stdlib-js/stdlib/commit/901dc93c3954e048073b711818553f2a065476f1) - add `isNumericDataType` to namespace
-   [`d3d2708`](https://github.com/stdlib-js/stdlib/commit/d3d2708eb6919b2eace1fb6f0fa06afac138f117) - add `isComplexFloatingPointDataType` to namespace
-   [`088f3e9`](https://github.com/stdlib-js/stdlib/commit/088f3e9fea4a7090b1c1c09765d264acc832094b) - add `isRealFloatingPointDataType` to namespace
-   [`61a6fee`](https://github.com/stdlib-js/stdlib/commit/61a6feec47761cf559d455264a6908a1f4ac545e) - add `isFloatingPointDataType` to namespace
-   [`f1b2025`](https://github.com/stdlib-js/stdlib/commit/f1b20259563e3e94ef269e3c98cec028af4e87ae) - add `isIntegralDataType` to namespace
-   [`74d366e`](https://github.com/stdlib-js/stdlib/commit/74d366e11957a3016839fa6836a021f49e2d4337) - add `isUnsignedIntegerDataType` to namespace
-   [`35dc02a`](https://github.com/stdlib-js/stdlib/commit/35dc02a0c40af961cfe20e14e4ceddaa4012bc4d) - add `isSignedIntegerDataType` to namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53): rename `isIntegralDataType` to `isIntegerDataType`

    -   To migrate, users should update their usage accordingly.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-allowed--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-allowed-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-allowed-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-buffer-length-compatible-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-buffer-length-compatible](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-buffer-length-compatible)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-buffer-length-compatible-shape-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-buffer-length-compatible-shape)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-casting-mode-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-casting-mode](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-casting-mode)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-column-major-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-column-major](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-column-major)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-column-major-contiguous-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-column-major-contiguous](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-column-major-contiguous)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-complex-floating-point--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-complex-floating-point-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-complex-floating-point-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`7b0d1b0`](https://github.com/stdlib-js/stdlib/commit/7b0d1b09616c4d92e0733564ef3c8b420a9ddb4f) - add `ndarray/base/assert/is-complex-floating-point-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-contiguous-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-contiguous](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-contiguous)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-floating-point--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-floating-point-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-floating-point-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`31ad686`](https://github.com/stdlib-js/stdlib/commit/31ad686cf56d70e9cd1d24043330eb3f4a688684) - add `ndarray/base/assert/is-floating-point-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-index-mode-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-index-mode](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-index-mode)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-integer--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-integer-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-integer-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`d96fdc9`](https://github.com/stdlib-js/stdlib/commit/d96fdc905898b96fffcc8ab210ad4b4d6c700565) - add `ndarray/base/assert/is-integer-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-integral--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-integral-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-integral-)

<details>

<section class="features">

##### Features

-   [`e2f9bb3`](https://github.com/stdlib-js/stdlib/commit/e2f9bb3c9d922cddeb3bbdac52744c46f4fa6186) - add `ndarray/base/assert/is-integral-data-type`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-numeric--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-numeric-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-numeric-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`c326c3f`](https://github.com/stdlib-js/stdlib/commit/c326c3fe89ba54c362395aa53e442ec70a2ad69d) - add `ndarray/base/assert/is-numeric-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-order-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-read-only-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-read-only](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-read-only)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-real--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-real-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-real-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`889da69`](https://github.com/stdlib-js/stdlib/commit/889da694559f4b0da7670277001dc2414e55edd9) - add `ndarray/base/assert/is-real-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-real-floating-point--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-real-floating-point-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-real-floating-point-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`41d3972`](https://github.com/stdlib-js/stdlib/commit/41d3972e82c51bdd6522708d9446fce378e30c8a) - add `ndarray/base/assert/is-real-floating-point-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-row-major-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-row-major](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-row-major)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-row-major-contiguous-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-row-major-contiguous](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-row-major-contiguous)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-safe--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-safe-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-safe-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-same-kind--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-same-kind-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-same-kind-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-signed-integer--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-signed-integer-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-signed-integer-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`063b647`](https://github.com/stdlib-js/stdlib/commit/063b6475df8c93d7b199e77b28325928e960e18b) - add `ndarray/base/assert/is-signed-integer-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-single-segment-compatible-v0.1.0">

#### [@stdlib/ndarray/base/assert/is-single-segment-compatible](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-single-segment-compatible)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-assert-is-unsigned-integer--v0.1.0">

#### [@stdlib/ndarray/base/assert/is-unsigned-integer-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/assert/is-unsigned-integer-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`f2fd134`](https://github.com/stdlib-js/stdlib/commit/f2fd1344eee163ede1839e2be9a537be2d4ec240) - add `ndarray/base/assert/is-unsigned-integer-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-broadcast-array-v0.1.0">

#### [@stdlib/ndarray/base/broadcast-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-array)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-broadcast-scalar-v0.1.0">

#### [@stdlib/ndarray/base/broadcast-scalar](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-scalar)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`efe7c22`](https://github.com/stdlib-js/stdlib/commit/efe7c226d5fb5ac7fb0c36dec4b5925d4484ee43) - add `ndarray/base/broadcast-scalar`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-broadcast-shapes-v0.1.0">

#### [@stdlib/ndarray/base/broadcast-shapes](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-shapes)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-v0.1.0">

#### [@stdlib/ndarray/base/buffer](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-ctors-v0.1.0">

#### [@stdlib/ndarray/base/buffer-ctors](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-ctors)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-dtype-v0.1.0">

#### [@stdlib/ndarray/base/buffer-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-buffer-dtype-enum-v0.1.0">

#### [@stdlib/ndarray/base/buffer-dtype-enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/buffer-dtype-enum)

<details>

<section class="features">

##### Features

-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd) - increase minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`0deb1be`](https://github.com/stdlib-js/stdlib/commit/0deb1be1f1efe2cc98bd944ab1c50cc885cf523b) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd): increase minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-bytes-per-element-v0.1.0">

#### [@stdlib/ndarray/base/bytes-per-element](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/bytes-per-element)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-char2dtype-v0.1.0">

#### [@stdlib/ndarray/base/char2dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/char2dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-clamp-index-v0.1.0">

#### [@stdlib/ndarray/base/clamp-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/clamp-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ctor-v0.1.0">

#### [@stdlib/ndarray/base/ctor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ctor)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-char-v0.1.0">

#### [@stdlib/ndarray/base/dtype-char](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-char)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-desc-v0.1.0">

#### [@stdlib/ndarray/base/dtype-desc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-desc)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-enum2str-v0.1.0">

#### [@stdlib/ndarray/base/dtype-enum2str](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-enum2str)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`fe527ef`](https://github.com/stdlib-js/stdlib/commit/fe527ef22a44592d7eaa0adbded47730248eaa74) - fix require path

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-resolve-enum-v0.1.0">

#### [@stdlib/ndarray/base/dtype-resolve-enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-resolve-enum)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-resolve-str-v0.1.0">

#### [@stdlib/ndarray/base/dtype-resolve-str](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-resolve-str)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype-str2enum-v0.1.0">

#### [@stdlib/ndarray/base/dtype-str2enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype-str2enum)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtype2c-v0.1.0">

#### [@stdlib/ndarray/base/dtype2c](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtype2c)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-dtypes2signatures-v0.1.0">

#### [@stdlib/ndarray/base/dtypes2signatures](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/dtypes2signatures)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-v0.1.0">

#### [@stdlib/ndarray/base/empty](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`c593502`](https://github.com/stdlib-js/stdlib/commit/c593502093613634a80bdb6c6806b8d2477d17d4) - add `ndarray/base/empty`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-empty-like-v0.1.0">

#### [@stdlib/ndarray/base/empty-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/empty-like)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`9f1c2f3`](https://github.com/stdlib-js/stdlib/commit/9f1c2f30fd1fc23c8159c2d8df5df0f14b679ce8) - add `ndarray/base/empty-like`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-expand-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/expand-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/expand-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-from-scalar-v0.1.0">

#### [@stdlib/ndarray/base/from-scalar](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/from-scalar)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c) - add support for providing `order` argument

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c): must provide `order` argument.

    -   To migrate, users should explicitly provide an `order` argument as
        a third argument when invoking `scalar2ndarray`.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-function-object-v0.1.0">

#### [@stdlib/ndarray/base/function-object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/function-object)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ind-v0.1.0">

#### [@stdlib/ndarray/base/ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ind)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ind2sub-v0.1.0">

#### [@stdlib/ndarray/base/ind2sub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ind2sub)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-iteration-order-v0.1.0">

#### [@stdlib/ndarray/base/iteration-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/iteration-order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-max-view-buffer-index-v0.1.0">

#### [@stdlib/ndarray/base/max-view-buffer-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/max-view-buffer-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-maybe-broadcast-array-v0.1.0">

#### [@stdlib/ndarray/base/maybe-broadcast-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/maybe-broadcast-array)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-meta--v0.1.0">

#### [@stdlib/ndarray/base/meta-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/meta-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-min-view-buffer-index-v0.1.0">

#### [@stdlib/ndarray/base/min-view-buffer-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/min-view-buffer-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-minmax-view-buffer-index-v0.1.0">

#### [@stdlib/ndarray/base/minmax-view-buffer-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/minmax-view-buffer-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-v0.1.0">

#### [@stdlib/ndarray/base/napi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-addon-arguments-v0.1.0">

#### [@stdlib/ndarray/base/napi/addon-arguments](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi/addon-arguments)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-dtype-string-to-dtype-v0.1.0">

#### [@stdlib/ndarray/base/napi/dtype-string-to-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi/dtype-string-to-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-typedarray-type-to-dtype-v0.1.0">

#### [@stdlib/ndarray/base/napi/typedarray-type-to-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi/typedarray-type-to-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-napi-unary-v0.1.0">

#### [@stdlib/ndarray/base/napi/unary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/napi/unary)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-ndarraylike2object-v0.1.0">

#### [@stdlib/ndarray/base/ndarraylike2object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/ndarraylike2object)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`0deb1be`](https://github.com/stdlib-js/stdlib/commit/0deb1be1f1efe2cc98bd944ab1c50cc885cf523b) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nonsingleton-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/nonsingleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nonsingleton-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-v0.1.0">

#### [@stdlib/ndarray/base/nullary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`28c87ca`](https://github.com/stdlib-js/stdlib/commit/28c87ca422d9953a5d5ee583e904b24d66e59682) - add `ndarray/base/nullary`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - resolve C lint errors

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-loop-interchange-order-v0.1.0">

#### [@stdlib/ndarray/base/nullary-loop-interchange-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary-loop-interchange-order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`45b2ba9`](https://github.com/stdlib-js/stdlib/commit/45b2ba9a82ac496a9c00c697839453cd2aef285a) - add `@stdlib/ndarray-base/nullary-loop-interchange-order`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-nullary-tiling-block-size-v0.1.0">

#### [@stdlib/ndarray/base/nullary-tiling-block-size](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/nullary-tiling-block-size)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`0ed2dc6`](https://github.com/stdlib-js/stdlib/commit/0ed2dc6083a20d0f90e653191778da2a9ddf9105) - add `@stdlib/ndarray-base/nullary-tiling-block-size`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-numel-v0.1.0">

#### [@stdlib/ndarray/base/numel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/numel)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-output-policy-enum2str-v0.1.0">

#### [@stdlib/ndarray/base/output-policy-enum2str](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/output-policy-enum2str)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`144d739`](https://github.com/stdlib-js/stdlib/commit/144d7393381f2430219962e39287792bf69374b8) - add `ndarray/base/output-policy-enum2str`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`b4dbeae`](https://github.com/stdlib-js/stdlib/commit/b4dbeaebb752c2494a156cd6f92d7055bea024ec) - set correct package names

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-output-policy-resolve-enum-v0.1.0">

#### [@stdlib/ndarray/base/output-policy-resolve-enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/output-policy-resolve-enum)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`c0d63fe`](https://github.com/stdlib-js/stdlib/commit/c0d63fe91fe1de62e13334ade3bb157aa3ccdb4a) - add `ndarray/base/output-policy-resolve-enum`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-output-policy-resolve-str-v0.1.0">

#### [@stdlib/ndarray/base/output-policy-resolve-str](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/output-policy-resolve-str)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`375a3e8`](https://github.com/stdlib-js/stdlib/commit/375a3e851b300eb1b936520f43e6d303c253ba26) - add `ndarray/base/output-policy-resolve-str`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-output-policy-str2enum-v0.1.0">

#### [@stdlib/ndarray/base/output-policy-str2enum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/output-policy-str2enum)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`66e4d33`](https://github.com/stdlib-js/stdlib/commit/66e4d331999220774c45c093900470e88fb6953a) - add `ndarray/base/output-policy-str2enum`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-prepend-singleton-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/prepend-singleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/prepend-singleton-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-remove-singleton-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/remove-singleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/remove-singleton-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-serialize-meta--v0.1.0">

#### [@stdlib/ndarray/base/serialize-meta-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/serialize-meta-)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-shape2strides-v0.1.0">

#### [@stdlib/ndarray/base/shape2strides](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/shape2strides)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-singleton-dimensions-v0.1.0">

#### [@stdlib/ndarray/base/singleton-dimensions](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/singleton-dimensions)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-strides2offset-v0.1.0">

#### [@stdlib/ndarray/base/strides2offset](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/strides2offset)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-strides2order-v0.1.0">

#### [@stdlib/ndarray/base/strides2order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/strides2order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-sub2ind-v0.1.0">

#### [@stdlib/ndarray/base/sub2ind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/sub2ind)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-to-array-v0.1.0">

#### [@stdlib/ndarray/base/to-array](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/to-array)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-transpose-v0.1.0">

#### [@stdlib/ndarray/base/transpose](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/transpose)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-v0.1.0">

#### [@stdlib/ndarray/base/unary](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - resolve C lint errors
-   [`64a7e92`](https://github.com/stdlib-js/stdlib/commit/64a7e9272da47f0b0a7afd8a5f4d5be613cbfb8d) - add missing variable declaration

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-by-v0.1.0">

#### [@stdlib/ndarray/base/unary-by](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-by)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-loop-interchange-order-v0.1.0">

#### [@stdlib/ndarray/base/unary-loop-interchange-order](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-loop-interchange-order)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-output-dtype-v0.1.0">

#### [@stdlib/ndarray/base/unary-output-dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-output-dtype)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`eec20f6`](https://github.com/stdlib-js/stdlib/commit/eec20f6aba797b451addbf452384c2c4f2ff1add) - add `ndarray/base/unary-output-dtype`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-unary-tiling-block-size-v0.1.0">

#### [@stdlib/ndarray/base/unary-tiling-block-size](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/unary-tiling-block-size)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-vind2-v0.1.0">

#### [@stdlib/ndarray/base/vind2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/vind2)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-wrap-index-v0.1.0">

#### [@stdlib/ndarray/base/wrap-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/wrap-index)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-v0.1.0">

#### [@stdlib/ndarray/base/zeros](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="ndarray-base-zeros-like-v0.1.0">

#### [@stdlib/ndarray/base/zeros-like](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/zeros-like)

<details>

<section class="features">

##### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd): increase minimum TypeScript version
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53): rename `isIntegralDataType` to `isIntegerDataType`

    -   To migrate, users should update their usage accordingly.

-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c): must provide `order` argument.

    -   To migrate, users should explicitly provide an `order` argument as
        a third argument when invoking `scalar2ndarray`.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`0deb1be`](https://github.com/stdlib-js/stdlib/commit/0deb1be1f1efe2cc98bd944ab1c50cc885cf523b) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`b4dbeae`](https://github.com/stdlib-js/stdlib/commit/b4dbeaebb752c2494a156cd6f92d7055bea024ec) - **fix:** set correct package names _(by Philipp Burckhardt)_
-   [`ab5d324`](https://github.com/stdlib-js/stdlib/commit/ab5d324b547870938b21ebdeecc1f7fda132f321) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`55866ea`](https://github.com/stdlib-js/stdlib/commit/55866ea8ef1282528b839fd9ce9c43c6a80056f8) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`015ff99`](https://github.com/stdlib-js/stdlib/commit/015ff99285585b1a9267a8ad3f8c856e64742dfd) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`23b99ac`](https://github.com/stdlib-js/stdlib/commit/23b99acc256b4c9034347ed42ba21f202caedda8) - **fix:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`a36b160`](https://github.com/stdlib-js/stdlib/commit/a36b160369dcac098c064e78245e4437008885d2) - **docs:** update namespace table of contents [(#995)](https://github.com/stdlib-js/stdlib/pull/995) _(by stdlib-bot, Athan Reines)_
-   [`adc0378`](https://github.com/stdlib-js/stdlib/commit/adc037897e98e120616fcbb0d854ff8b24445b6d) - **docs:** update namespace TypeScript declarations [(#993)](https://github.com/stdlib-js/stdlib/pull/993) _(by stdlib-bot, Athan Reines)_
-   [`98c37fa`](https://github.com/stdlib-js/stdlib/commit/98c37fa381ef03c24703d76a5b0be4f95727243c) - **feat:** add `unaryOutputDataType` to namespace _(by Athan Reines)_
-   [`eec20f6`](https://github.com/stdlib-js/stdlib/commit/eec20f6aba797b451addbf452384c2c4f2ff1add) - **feat:** add `ndarray/base/unary-output-dtype` _(by Athan Reines)_
-   [`2e884c5`](https://github.com/stdlib-js/stdlib/commit/2e884c5c86b0c66990c0aca78f1c0c8eadd18620) - **remove:** remove `ndarray/base/assert/is-integral-data-type` _(by Athan Reines)_
-   [`40af3d0`](https://github.com/stdlib-js/stdlib/commit/40af3d0d70ffdbbf65d863a2d0f6061c9d98f406) - **test:** use `integer` rather than `integral` _(by Athan Reines)_
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53) - **feat:** rename `isIntegralDataType` to `isIntegerDataType` _(by Athan Reines)_
-   [`d96fdc9`](https://github.com/stdlib-js/stdlib/commit/d96fdc905898b96fffcc8ab210ad4b4d6c700565) - **feat:** add `ndarray/base/assert/is-integer-data-type` _(by Athan Reines)_
-   [`8707511`](https://github.com/stdlib-js/stdlib/commit/87075115748ada8a4b6872c78c7196d9b6a934fd) - **test:** update list of test values _(by Athan Reines)_
-   [`86d02e2`](https://github.com/stdlib-js/stdlib/commit/86d02e26cd8dd87d061ec308a03fb21a54065a0e) - **test:** add comments to explain test value distinction _(by Athan Reines)_
-   [`d0eb2cf`](https://github.com/stdlib-js/stdlib/commit/d0eb2cf2a86e9c9002b3b78218297f3aa57a5ff5) - **feat:** add `isRealDataType` to namespace _(by Athan Reines)_
-   [`889da69`](https://github.com/stdlib-js/stdlib/commit/889da694559f4b0da7670277001dc2414e55edd9) - **feat:** add `ndarray/base/assert/is-real-data-type` _(by Athan Reines)_
-   [`f4e6d5e`](https://github.com/stdlib-js/stdlib/commit/f4e6d5e67845c36dfa62db34eb7bc5e7e707c381) - **test:** update list of policies and add link _(by Athan Reines)_
-   [`59c61bc`](https://github.com/stdlib-js/stdlib/commit/59c61bc90a3ad633d0eda9d6d2acc32d532c940a) - **test:** update list of policies and add link _(by Athan Reines)_
-   [`330207b`](https://github.com/stdlib-js/stdlib/commit/330207b291744c37c851c00bbf934d4ef1957c75) - **test:** update list of policies and add link _(by Athan Reines)_
-   [`1ada629`](https://github.com/stdlib-js/stdlib/commit/1ada629c4201c8190c510cbad971fd57c5045db3) - **test:** update list of policies and add link _(by Athan Reines)_
-   [`901dc93`](https://github.com/stdlib-js/stdlib/commit/901dc93c3954e048073b711818553f2a065476f1) - **feat:** add `isNumericDataType` to namespace _(by Athan Reines)_
-   [`c326c3f`](https://github.com/stdlib-js/stdlib/commit/c326c3fe89ba54c362395aa53e442ec70a2ad69d) - **feat:** add `ndarray/base/assert/is-numeric-data-type` _(by Athan Reines)_
-   [`d3d2708`](https://github.com/stdlib-js/stdlib/commit/d3d2708eb6919b2eace1fb6f0fa06afac138f117) - **feat:** add `isComplexFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`7b0d1b0`](https://github.com/stdlib-js/stdlib/commit/7b0d1b09616c4d92e0733564ef3c8b420a9ddb4f) - **feat:** add `ndarray/base/assert/is-complex-floating-point-data-type` _(by Athan Reines)_
-   [`088f3e9`](https://github.com/stdlib-js/stdlib/commit/088f3e9fea4a7090b1c1c09765d264acc832094b) - **feat:** add `isRealFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`41d3972`](https://github.com/stdlib-js/stdlib/commit/41d3972e82c51bdd6522708d9446fce378e30c8a) - **feat:** add `ndarray/base/assert/is-real-floating-point-data-type` _(by Athan Reines)_
-   [`b4e24c3`](https://github.com/stdlib-js/stdlib/commit/b4e24c345f1bbff346cd95286bc55cbcbaa6f2c9) - **docs:** fix description _(by Athan Reines)_
-   [`61a6fee`](https://github.com/stdlib-js/stdlib/commit/61a6feec47761cf559d455264a6908a1f4ac545e) - **feat:** add `isFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`31ad686`](https://github.com/stdlib-js/stdlib/commit/31ad686cf56d70e9cd1d24043330eb3f4a688684) - **feat:** add `ndarray/base/assert/is-floating-point-data-type` _(by Athan Reines)_
-   [`f1b2025`](https://github.com/stdlib-js/stdlib/commit/f1b20259563e3e94ef269e3c98cec028af4e87ae) - **feat:** add `isIntegralDataType` to namespace _(by Athan Reines)_
-   [`e2f9bb3`](https://github.com/stdlib-js/stdlib/commit/e2f9bb3c9d922cddeb3bbdac52744c46f4fa6186) - **feat:** add `ndarray/base/assert/is-integral-data-type` _(by Athan Reines)_
-   [`74d366e`](https://github.com/stdlib-js/stdlib/commit/74d366e11957a3016839fa6836a021f49e2d4337) - **feat:** add `isUnsignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`f2fd134`](https://github.com/stdlib-js/stdlib/commit/f2fd1344eee163ede1839e2be9a537be2d4ec240) - **feat:** add `ndarray/base/assert/is-unsigned-integer-data-type` _(by Athan Reines)_
-   [`35dc02a`](https://github.com/stdlib-js/stdlib/commit/35dc02a0c40af961cfe20e14e4ceddaa4012bc4d) - **feat:** add `isSignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`063b647`](https://github.com/stdlib-js/stdlib/commit/063b6475df8c93d7b199e77b28325928e960e18b) - **feat:** add `ndarray/base/assert/is-signed-integer-data-type` _(by Athan Reines)_
-   [`8fa429a`](https://github.com/stdlib-js/stdlib/commit/8fa429ae2ad40fcf40be3c65c7f8fe4af0bf5ca3) - **refactor:** use array utility to perform iteration _(by Athan Reines)_
-   [`6ca0ecb`](https://github.com/stdlib-js/stdlib/commit/6ca0ecb07f89d0ff6041ac2d2cb4a91cdad0059d) - **feat:** add policy APIs to namespace _(by Athan Reines)_
-   [`c0d63fe`](https://github.com/stdlib-js/stdlib/commit/c0d63fe91fe1de62e13334ade3bb157aa3ccdb4a) - **feat:** add `ndarray/base/output-policy-resolve-enum` _(by Athan Reines)_
-   [`375a3e8`](https://github.com/stdlib-js/stdlib/commit/375a3e851b300eb1b936520f43e6d303c253ba26) - **feat:** add `ndarray/base/output-policy-resolve-str` _(by Athan Reines)_
-   [`144d739`](https://github.com/stdlib-js/stdlib/commit/144d7393381f2430219962e39287792bf69374b8) - **feat:** add `ndarray/base/output-policy-enum2str` _(by Athan Reines)_
-   [`66e4d33`](https://github.com/stdlib-js/stdlib/commit/66e4d331999220774c45c093900470e88fb6953a) - **feat:** add `ndarray/base/output-policy-str2enum` _(by Athan Reines)_
-   [`fe527ef`](https://github.com/stdlib-js/stdlib/commit/fe527ef22a44592d7eaa0adbded47730248eaa74) - **fix:** fix require path _(by Athan Reines)_
-   [`00b4630`](https://github.com/stdlib-js/stdlib/commit/00b46302fa85b4a133c2b93d13ac4cedd427bc11) - **feat:** add `emptyLike` to namespace _(by Athan Reines)_
-   [`9f1c2f3`](https://github.com/stdlib-js/stdlib/commit/9f1c2f30fd1fc23c8159c2d8df5df0f14b679ce8) - **feat:** add `ndarray/base/empty-like` _(by Athan Reines)_
-   [`33e76ef`](https://github.com/stdlib-js/stdlib/commit/33e76efad5564bbd2455f492c34b04a4fbfc8988) - **feat:** add `empty` to namespace _(by Athan Reines)_
-   [`c593502`](https://github.com/stdlib-js/stdlib/commit/c593502093613634a80bdb6c6806b8d2477d17d4) - **feat:** add `ndarray/base/empty` _(by Athan Reines)_
-   [`171fc57`](https://github.com/stdlib-js/stdlib/commit/171fc571b800ceb803d7d925cd871fc9bbcd7e8c) - **feat:** add support for providing `order` argument _(by Athan Reines)_
-   [`dace169`](https://github.com/stdlib-js/stdlib/commit/dace169a8a53022f0ffcabf4084f61a7f0f49a8f) - **docs:** update namespace table of contents [(#986)](https://github.com/stdlib-js/stdlib/pull/986) _(by stdlib-bot, Athan Reines)_
-   [`e34d9a0`](https://github.com/stdlib-js/stdlib/commit/e34d9a09e864d8f25460974f6e3e4eb3b03ea6a2) - **docs:** update namespace TypeScript declarations [(#984)](https://github.com/stdlib-js/stdlib/pull/984) _(by stdlib-bot, Athan Reines)_
-   [`54cafbf`](https://github.com/stdlib-js/stdlib/commit/54cafbf8e5253b2be8816446a7b850cc6a8ada30) - **docs:** add notes _(by Athan Reines)_
-   [`3c02553`](https://github.com/stdlib-js/stdlib/commit/3c025537f1151a7aa31eaea2be86e994628907f3) - **docs:** fix description _(by Athan Reines)_
-   [`0661629`](https://github.com/stdlib-js/stdlib/commit/06616293c16e65f85a2b9b72fc9e036e20cff6ab) - **feat:** add `broadcastScalar` to namespace _(by Athan Reines)_
-   [`4df8427`](https://github.com/stdlib-js/stdlib/commit/4df84275bcd530d638f053f25f2f4f7dcd27ee98) - **docs:** fix example _(by Athan Reines)_
-   [`efe7c22`](https://github.com/stdlib-js/stdlib/commit/efe7c226d5fb5ac7fb0c36dec4b5925d4484ee43) - **feat:** add `ndarray/base/broadcast-scalar` _(by Athan Reines)_
-   [`5fda197`](https://github.com/stdlib-js/stdlib/commit/5fda19741c7bb19742c34670494d8d7c907d65b0) - **docs:** update namespace TypeScript declarations [(#977)](https://github.com/stdlib-js/stdlib/pull/977) _(by stdlib-bot, Athan Reines)_
-   [`bfaff0d`](https://github.com/stdlib-js/stdlib/commit/bfaff0d60a7cbc3f0f067d479d68ebd634fb9a5c) - **docs:** fix grammar in comments _(by Athan Reines)_
-   [`3b85626`](https://github.com/stdlib-js/stdlib/commit/3b85626ca3e81438fa113ee94f78fa2603127702) - **docs:** update namespace table of contents [(#966)](https://github.com/stdlib-js/stdlib/pull/966) _(by stdlib-bot, Athan Reines)_
-   [`8953419`](https://github.com/stdlib-js/stdlib/commit/89534192da77bc7d8765012acb6199fab49c50d2) - **docs:** fix comments _(by Athan Reines)_
-   [`48f86bd`](https://github.com/stdlib-js/stdlib/commit/48f86bd9e771b715c09a409573b96e8c3c9bf511) - **docs:** update comment _(by Athan Reines)_
-   [`eabd48c`](https://github.com/stdlib-js/stdlib/commit/eabd48caae18191fd18d6661a1d1e9d3daaa8edc) - **docs:** fix comments _(by Athan Reines)_
-   [`9800cc4`](https://github.com/stdlib-js/stdlib/commit/9800cc4f8df8d96db8bac00b51ae1491fa579666) - **feat:** add `nullary` to namespace _(by Athan Reines)_
-   [`28c87ca`](https://github.com/stdlib-js/stdlib/commit/28c87ca422d9953a5d5ee583e904b24d66e59682) - **feat:** add `ndarray/base/nullary` _(by Athan Reines)_
-   [`f290865`](https://github.com/stdlib-js/stdlib/commit/f29086561a2be3125ceac5a4f98b81b30065bf67) - **style:** add missing space _(by Athan Reines)_
-   [`c503012`](https://github.com/stdlib-js/stdlib/commit/c50301205c0ef890c7c446a930faa922db444b97) - **style:** fix indentation _(by Athan Reines)_
-   [`7974538`](https://github.com/stdlib-js/stdlib/commit/79745389154e682f111d371a13870f54cabe6297) - **docs:** fix example requires _(by Athan Reines)_
-   [`9936867`](https://github.com/stdlib-js/stdlib/commit/99368675b7c86eb3c858cb578575bca34250b4c7) - **refactor:** add shebang to script _(by Athan Reines)_
-   [`1982cd2`](https://github.com/stdlib-js/stdlib/commit/1982cd225f5970145499c1746ce04e6f5b5fa064) - **docs:** fix variable name _(by Athan Reines)_
-   [`4e94bf0`](https://github.com/stdlib-js/stdlib/commit/4e94bf079c6677f10e5ea1f4eaca93dc52dac8f3) - **feat:** add `binaryLoopOrder` to namespace _(by Athan Reines)_
-   [`d151153`](https://github.com/stdlib-js/stdlib/commit/d151153ac4aced58a04e795607000b7138feb05d) - **feat:** add `ndarray/base/binary-loop-interchange-order` _(by Athan Reines)_
-   [`0ac8825`](https://github.com/stdlib-js/stdlib/commit/0ac88258a1b720982b47661c5ddeb5a932cf56d4) - **feat:** add `binaryBlockSize` to namespace _(by Athan Reines)_
-   [`2600d28`](https://github.com/stdlib-js/stdlib/commit/2600d28341fe75b74e3ab7c02779ee856d0d53ad) - **feat:** add `ndarray/base/binary-tiling-block-size` _(by Athan Reines)_
-   [`64a7e92`](https://github.com/stdlib-js/stdlib/commit/64a7e9272da47f0b0a7afd8a5f4d5be613cbfb8d) - **fix:** add missing variable declaration _(by Athan Reines)_
-   [`924b525`](https://github.com/stdlib-js/stdlib/commit/924b52594f4b21b42eb4fa3d40c6d36ea97f1723) - **docs:** fix typo _(by Athan Reines)_
-   [`80b8444`](https://github.com/stdlib-js/stdlib/commit/80b8444ae4991062d8961b2a020d24c2fe7a8a48) - **docs:** fix typo _(by Athan Reines)_
-   [`8078b8c`](https://github.com/stdlib-js/stdlib/commit/8078b8c58eedf23e46e5f9083053b6db52514641) - **docs:** fix typo _(by Athan Reines)_
-   [`5b98beb`](https://github.com/stdlib-js/stdlib/commit/5b98beb85e5468e604175c8140bef795a92686a3) - **docs:** update namespace table of contents [(#953)](https://github.com/stdlib-js/stdlib/pull/953) _(by stdlib-bot, Athan Reines)_
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - **feat:** update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951) _(by stdlib-bot, Athan Reines)_
-   [`6b7c54d`](https://github.com/stdlib-js/stdlib/commit/6b7c54dd2aa970a48a5f73d89c160c7ab6b6ba28) - **feat:** add `nullaryLoopOrder` to namespace _(by Athan Reines)_
-   [`45b2ba9`](https://github.com/stdlib-js/stdlib/commit/45b2ba9a82ac496a9c00c697839453cd2aef285a) - **feat:** add `@stdlib/ndarray-base/nullary-loop-interchange-order` _(by Athan Reines)_
-   [`99b2138`](https://github.com/stdlib-js/stdlib/commit/99b2138aa1168adc84815286ccb1dd8cdb8208f5) - **docs:** update description _(by Athan Reines)_
-   [`8df288a`](https://github.com/stdlib-js/stdlib/commit/8df288ad176e2b374f61112a37091b47462f0ec5) - **docs:** fix comment _(by Athan Reines)_
-   [`760a0a1`](https://github.com/stdlib-js/stdlib/commit/760a0a1aab281e0a1b043b526eac9592551cffb8) - **feat:** add `nullaryBlockSize` to namespace _(by Athan Reines)_
-   [`0ed2dc6`](https://github.com/stdlib-js/stdlib/commit/0ed2dc6083a20d0f90e653191778da2a9ddf9105) - **feat:** add `@stdlib/ndarray-base/nullary-tiling-block-size` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

