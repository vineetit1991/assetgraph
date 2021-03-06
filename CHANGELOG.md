### v5.8.1 (2019-03-03)
- [Preserve comments despite assetGraph.sourceMaps being false](https://github.com/assetgraph/assetgraph/commit/243f367dca0cc12d533f3a6a77996b8b1a8d0a2c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [autoprefixer transform: Skip unloaded assets](https://github.com/assetgraph/assetgraph/commit/5f5ac7dcaa82c5764bfe1e24468a70bcb7de8af7) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.8.0 (2019-03-03)

#### Pull requests

- [#987](https://github.com/assetgraph/assetgraph/pull/987) autoprefixer: Add errorIfNotFound option ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#985](https://github.com/assetgraph/assetgraph/pull/985) Switch to the split out font-tracer module ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#983](https://github.com/assetgraph/assetgraph/pull/983) Make the loading the default stylesheets rollup-friendly, avoid fs.readFile ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#984](https://github.com/assetgraph/assetgraph/pull/984) getTextByFontProperties: Don't require the AssetGraph instance ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

#### Commits to master

- [Avoid typeless assertions, silencing Unexpected 11 deprecation warning](https://github.com/assetgraph/assetgraph/commit/8cecdf6eb26c3f56b06622f123577bc6c7cb55ca) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.7.1 (2019-02-23)
- [Don't break if canonicalRoot is given as undefined](https://github.com/assetgraph/assetgraph/commit/4e57ec16ef08b9de63cf2c8297e788d203608377) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [mountRoot =&gt; rootRelativeCanonicalRoot](https://github.com/assetgraph/assetgraph/commit/a23b9c34f77f4098c1983dccc5cdd0acfa93009f) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.7.0 (2019-02-23)
- [Pass the mount root as part of the canonicalRoot instead](https://github.com/assetgraph/assetgraph/commit/94a956f5da9c10e581ab54a0cee6ac51f6fdae3d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Complain if both canonicalRoot and mountRoot are given, and canonicalRoot has a different path](https://github.com/assetgraph/assetgraph/commit/ccfbaca8fc3f3aebc59c1e863aee082acb91b45e) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [mountRoot POC](https://github.com/assetgraph/assetgraph/commit/cea42248518d9725b766af8ec0959356a6c1abb2) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Quick and dirty implementation of a mount root](https://github.com/assetgraph/assetgraph/commit/203d10f28242600de5ba3b04ff3928317c04756f) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.6.4 (2019-02-21)

#### Pull requests

- [#981](https://github.com/assetgraph/assetgraph/pull/981) Upgrade mocha to version 6.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#976](https://github.com/assetgraph/assetgraph/pull/976) Allow custom sw-precache configuration ([Márton Salomváry](mailto:salomvary@gmail.com))
- [#977](https://github.com/assetgraph/assetgraph/pull/977) Upgrade cssnano to version 4.1.10 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [Fix Asset\#replaceWith when the replacement asset is inline and contains a root-relative url](https://github.com/assetgraph/assetgraph/commit/d9a666fc997d76165436dafc1bbf63a2eaa9b1f5) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Switch back to the official escodegen now that estools\/escodegen\#389 was merged and released in 1.11.1](https://github.com/assetgraph/assetgraph/commit/513b9871e7ee9137e775c59e8727774b31861736) ([Andreas Lind](mailto:andreas.lind@peakon.com))
- [addPrecache...: Throw if staticFileGlobs is passed](https://github.com/assetgraph/assetgraph/commit/403e0a0025f1141131f3f79162969db8ffda041c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Switch to sw-precache's promise interface, fixes error reporting](https://github.com/assetgraph/assetgraph/commit/9ccfc73d4bd95b315a12b621694d45a4fcad426e) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Interpret config paths as relative to process.cwd\(\)](https://github.com/assetgraph/assetgraph/commit/1a471712902f51db7a584445a3627c2009dc33d2) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+2 more](https://github.com/assetgraph/assetgraph/compare/v5.6.3...v5.6.4)

### v5.6.3 (2019-02-15)

#### Pull requests

- [#975](https://github.com/assetgraph/assetgraph/pull/975) Upgrade cssnano to version 4.1.9 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [JavaScriptExport tests: Fix indentation of code snippets](https://github.com/assetgraph/assetgraph/commit/f9ea3e205b1977a3a13f22182b6c3926f5ce3620) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Don't model "bare" imports and exports as relations, fix hrefType switching](https://github.com/assetgraph/assetgraph/commit/97b394dd6930f102f3da7481abae26b4dc16c03e) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.6.2 (2019-02-12)
- [Relation\#refreshHref: Only prepend .\/ to the relative url if the current href has it](https://github.com/assetgraph/assetgraph/commit/bb7eaa40cb9f1f7b850ea2300de3273b02033662) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.6.1 (2019-02-12)
- [JavaScript{Im,Ex}port: Preserve .\/ in relative urls](https://github.com/assetgraph/assetgraph/commit/97db7dc2dd94ed642202654083b7220e0e888227) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix indentation of template strings](https://github.com/assetgraph/assetgraph/commit/df62decb897b51d05ef2daf1f0b080c8808423a2) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.6.0 (2019-02-10)

#### Pull requests

- [#953](https://github.com/assetgraph/assetgraph/pull/953) Add support for some CSS Fonts Module 4 features + variable font with non-variable fallback ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#973](https://github.com/assetgraph/assetgraph/pull/973) Add support for terser and use it as the default JavaScript compressor ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

#### Commits to master

- [Oh, there was one more](https://github.com/assetgraph/assetgraph/commit/a3c25da42fc546862fc7f75cb19388199b78b951) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix the remaining occurrences manually](https://github.com/assetgraph/assetgraph/commit/a96dfb3d4f718f80f97697d254551fa04fe9a890) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [eslint --fix .](https://github.com/assetgraph/assetgraph/commit/7fd9a27f3b73e2c572dceb1e65f57fceae4b7c8d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [.eslintrc: Enable the prefer-const rule](https://github.com/assetgraph/assetgraph/commit/1a82a3a2e19387e2ed3a7cfcad6cab6696df2cfa) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix formatting in files where \/\*eslint-disable\*\/ previously disabled prettier, too](https://github.com/assetgraph/assetgraph/commit/73d3dedeb3109f3aa6a6ba76bb61b33aa5407bda) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v5.5.1...v5.6.0)

### v5.5.1 (2019-02-03)
- [Asset\#origin: Fix regression introduced in ae7d28c0](https://github.com/assetgraph/assetgraph/commit/7ae646db157548578e0ea48ad237073353a17218) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.5.0 (2019-02-01)
- [HtmlScript: Follow type=module](https://github.com/assetgraph/assetgraph/commit/4cf47dcfeba45fcb141fb81695e4265a0b471f75) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Small adjustments](https://github.com/assetgraph/assetgraph/commit/af2fbfbfea485e882277f3e1d1e2f01504bb4fb5) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.4.2 (2019-01-30)

#### Pull requests

- [#971](https://github.com/assetgraph/assetgraph/pull/971) Upgrade eslint-config-prettier to version 4.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#970](https://github.com/assetgraph/assetgraph/pull/970) New version of jsdom \(13.2.0\) broke the build ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#966](https://github.com/assetgraph/assetgraph/pull/966) Upgrade postcss to version 7.0.13 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#964](https://github.com/assetgraph/assetgraph/pull/964) Update linting setup ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#963](https://github.com/assetgraph/assetgraph/pull/963) Handle non-ascii characters in urls ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

#### Commits to master

- [vscode debugger config: Don't step through node internals](https://github.com/assetgraph/assetgraph/commit/b5b240ffd9c9c9e97dcb2b4b035ab4e782116d2d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Comment out the last one](https://github.com/assetgraph/assetgraph/commit/06b2dc003c8d139034740473650da0a1640db617) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Comment out the two failing bundleWebpack tests](https://github.com/assetgraph/assetgraph/commit/3300f12d7caa4e129720612f070e66bcf2ce2f40) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Empty commit to see if that might fix the build](https://github.com/assetgraph/assetgraph/commit/3d47ff23f48bb00ccabd7639759b3c3755eda70b) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update prettier to version 1.16.0](https://github.com/assetgraph/assetgraph/commit/2724a807efe5f35617287131cd809c3e53a61193) ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [+4 more](https://github.com/assetgraph/assetgraph/compare/v5.4.1...v5.4.2)

### v5.4.1 (2019-01-09)

#### Pull requests

- [#957](https://github.com/assetgraph/assetgraph/pull/957) Upgrade cssnano to version 4.1.8 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#956](https://github.com/assetgraph/assetgraph/pull/956) Upgrade file-loader to version 3.0.1 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#954](https://github.com/assetgraph/assetgraph/pull/954) Upgrade css-loader to version 2.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#952](https://github.com/assetgraph/assetgraph/pull/952) Upgrade espurify to version 2.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#950](https://github.com/assetgraph/assetgraph/pull/950) downloadGoogleFonts: Fix retrieval of .ttf fonts ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#949](https://github.com/assetgraph/assetgraph/pull/949) Fetch woff2 fonts from GWF with a Windows Chrome User-Agent header instead of a Mac one so that Truetype hints are included ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#947](https://github.com/assetgraph/assetgraph/pull/947) subsetFonts: Trace @supports {...} conditionally ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#945](https://github.com/assetgraph/assetgraph/pull/945) Upgrade cssnano to version 4.1.7 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [Replace escodegen with escodegen-papandreou, fixes \#649](https://github.com/assetgraph/assetgraph/commit/a996b9d220036c18ae9ab5ea08aa536011413bf0) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Test that source maps served as application\/octet-stream work out](https://github.com/assetgraph/assetgraph/commit/78d0bd60d6bdd1617aaa7267640e2bac67067c57) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix missing empty line in test](https://github.com/assetgraph/assetgraph/commit/9d50799f5d381d1e0ccb0c99bc249eeba5a8a082) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update unexpected to 11.0.0-1](https://github.com/assetgraph/assetgraph/commit/e0d5509f0cb90229b0e8ebdc628dce8156319bd0) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Tests: Use expect.it to prepare for Unexpected 11](https://github.com/assetgraph/assetgraph/commit/32953f3a5c71977319f2bbecce683848700b7458) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+12 more](https://github.com/assetgraph/assetgraph/compare/v5.4.0...v5.4.1)

### v5.4.0 (2018-10-17)

#### Pull requests

- [#942](https://github.com/assetgraph/assetgraph/pull/942) Upgrade sinon to version 7.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#941](https://github.com/assetgraph/assetgraph/pull/941) Upgrade sift to version 7.0.1 ([Andreas Lind](mailto:andreaslindpetersen@gmail.com), [depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [subsetFonts: Ignore ::-ms-input-placeholder pseudo element \(not supported by nwsapi\)](https://github.com/assetgraph/assetgraph/commit/5ab1a97c6a2f983b9d200be16b335bbd5da7362f) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix JavaScript quote serialization test](https://github.com/assetgraph/assetgraph/commit/386300ef8edaa95b0efb1d7c52f57d78cc608859) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix accidental commenting out](https://github.com/assetgraph/assetgraph/commit/d966ffa6a86175c486355a53275430c5171bf67c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Asset\#replaceWith: Fix replacement of an inline asset](https://github.com/assetgraph/assetgraph/commit/7b367bce4ef8f2c06494fd2f3f1639aba09b8ccd) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.3.1 (2018-10-03)

#### Pull requests

- [#939](https://github.com/assetgraph/assetgraph/pull/939) Upgrade eslint-plugin-prettier to version 3.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#938](https://github.com/assetgraph/assetgraph/pull/938) Upgrade cssnano to version 4.1.4 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#937](https://github.com/assetgraph/assetgraph/pull/937) Upgrade cssnano to version 4.1.3 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#936](https://github.com/assetgraph/assetgraph/pull/936) Upgrade capitalize to version 2.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#934](https://github.com/assetgraph/assetgraph/pull/934) loadAssets: Allow a file: url with a glob pattern ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#933](https://github.com/assetgraph/assetgraph/pull/933) Implement pretty-printing of HTML via domspace ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

#### Commits to master

- [JavaScript: Set format.quotes='auto' when serializing via escodegen](https://github.com/assetgraph/assetgraph/commit/91f262ace6b1522c28f23fe197bb64a86520a594) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Improve quotes in subsetfonts js-based preload polyfill](https://github.com/assetgraph/assetgraph/commit/2335c54bb4703743034939849a3a3db89180cbfe) ([Peter Müller](mailto:munter@fumle.dk))

### v5.3.0 (2018-09-22)

#### Pull requests

- [#932](https://github.com/assetgraph/assetgraph/pull/932) Add HTTP Referer header to HTTP --&gt; HTTP population requests ([Peter Müller](mailto:munter@fumle.dk))
- [#931](https://github.com/assetgraph/assetgraph/pull/931) Upgrade postcss-values-parser to version 2.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#930](https://github.com/assetgraph/assetgraph/pull/930) New version of lodash \(4.17.11\) broke the build ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [Travis: Stick with node.js 8.11](https://github.com/assetgraph/assetgraph/commit/4d2c0954d2eb5839732f21835e83b323cb9eb86c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Don't break because Function\#toString omits the space after function in node 10](https://github.com/assetgraph/assetgraph/commit/c88bfa14d2b6cd40222315401ee142511574f055) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [.nvmrc: Bump node.js to 10.x](https://github.com/assetgraph/assetgraph/commit/4304b753391da4b7df77a2741eeff5bf0a229e28) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update prettier to ~1.14.2](https://github.com/assetgraph/assetgraph/commit/aec0d9fcb0c662c87557b8bcda6340f98b29bf74) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [eslint --fix .](https://github.com/assetgraph/assetgraph/commit/59bb4ae4abb4e6bc94d129fba613a5b93bd376dc) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.2.0 (2018-09-06)

#### Pull requests

- [#928](https://github.com/assetgraph/assetgraph/pull/928) Upgrade uglify-js to version 3.4.9 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#927](https://github.com/assetgraph/assetgraph/pull/927) Upgrade nyc to version 13.0.1 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#926](https://github.com/assetgraph/assetgraph/pull/926) Upgrade style-loader to version 0.23.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#925](https://github.com/assetgraph/assetgraph/pull/925) Upgrade cssnano to version 4.1.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#924](https://github.com/assetgraph/assetgraph/pull/924) Upgrade uglify-js to version 3.4.8 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#922](https://github.com/assetgraph/assetgraph/pull/922) Upgrade docdash to version 1.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#921](https://github.com/assetgraph/assetgraph/pull/921) Upgrade file-loader to version 2.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#918](https://github.com/assetgraph/assetgraph/pull/918) Upgrade uglify-js to version 3.4.7 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [reviewContentSecurityPolicy: Adapt to changes in the CSP3 draft spec](https://github.com/assetgraph/assetgraph/commit/91b326f3bb481da55f20125d8309c0556ef3e52a) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Adapt to jsdom 12's new node location API](https://github.com/assetgraph/assetgraph/commit/42b899066e5191e32b94150a34854a53760fdc4d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update jsdom to version 12.0.0](https://github.com/assetgraph/assetgraph/commit/2c9ea6cea0764af5a0ba32d58766373808e0fc0c) ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

### v5.1.1 (2018-08-09)

#### Pull requests

- [#916](https://github.com/assetgraph/assetgraph/pull/916) Upgrade style-loader to version 0.22.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [Exclude font-display and other irrelevant properties when detecting unused variants of fonts that have had subsets created](https://github.com/assetgraph/assetgraph/commit/159b3ab14cfcc0f71ef11623b048b296be00cf3d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Strip local\(...\) tokens when injecting @font-face for the \_\_subset version of unused variants](https://github.com/assetgraph/assetgraph/commit/e89ac70a61e0dddfd35fa3e10f0c1fec0a6eb5dd) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Add utility for stripping local\(...\) tokens from a @font-face src property](https://github.com/assetgraph/assetgraph/commit/178a8302fc10608e8c3c496d87d577aefb1e695d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Expand template string instead of combining it with .join](https://github.com/assetgraph/assetgraph/commit/547c2e15a02099aac5b19d093dd9dde53d6d112b) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [checkIncompatibleTypes: Improve an error message slightly](https://github.com/assetgraph/assetgraph/commit/a4e7e9f4b9f25375de41ef84ea4a1dd9f27cca4d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.1.0 (2018-07-29)

#### Pull requests

- [#915](https://github.com/assetgraph/assetgraph/pull/915) subsetFonts: Inject \_\_subset @font-face declarations for the unused variants when subsetting a font ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#914](https://github.com/assetgraph/assetgraph/pull/914) Upgrade prettier to version 1.14.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [eslint --fix lib\/util\/determineFileType.js](https://github.com/assetgraph/assetgraph/commit/2451f5e2ce9b54fda26a907eb8d8cf1a19c44a7e) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [subsetFonts test: Fix describe nesting](https://github.com/assetgraph/assetgraph/commit/47e1c8691d93d9185e04b236123134571508309d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v5.0.0 (2018-07-28)
- [#891](https://github.com/assetgraph/assetgraph/pull/891) Move all the type check warning to a transform ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.13.0 (2018-07-27)

#### Pull requests

- [#913](https://github.com/assetgraph/assetgraph/pull/913) Upgrade uglify-js to version 3.4.6 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#900](https://github.com/assetgraph/assetgraph/pull/900) Add unicode-range to font-face declaration output ([Peter Müller](mailto:munter@fumle.dk))
- [#904](https://github.com/assetgraph/assetgraph/pull/904) Added function to download google fonts ([Peter Müller](mailto:munter@fumle.dk))
- [#910](https://github.com/assetgraph/assetgraph/pull/910) Fix multiple @font-face declarations with the same src but different font-family ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#912](https://github.com/assetgraph/assetgraph/pull/912) Upgrade cssnano to version 4.0.4 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [Don't detect text files as C source code on a mac](https://github.com/assetgraph/assetgraph/commit/26ab2af06107185f3220be41eb5a882520c5916c) ([Peter Müller](mailto:munter@fumle.dk))
- [Make a test for broken HTML even more broken so it's not affected by the change to the isFragment heuristic](https://github.com/assetgraph/assetgraph/commit/1490861e7abbf73c0535abf9076fe8e32b6849e2) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [eslint --fix .](https://github.com/assetgraph/assetgraph/commit/3263729d201ad0de721c8c34d13289c87c47bf66) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Avoid false positive fragment detection](https://github.com/assetgraph/assetgraph/commit/f31c3fad820ed7033d1bafae28ed9a771c55b904) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [subsetFonts: Ignore ::-webkit-scrollbar pseudo element \(not supported by nwsapi\)](https://github.com/assetgraph/assetgraph/commit/af140b3a12532fa1c642a974efecf58d964ec83c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+18 more](https://github.com/assetgraph/assetgraph/compare/v4.12.1...v4.13.0)

### v4.12.1 (2018-07-21)

#### Pull requests

- [#908](https://github.com/assetgraph/assetgraph/pull/908) Match font-family property values case insensitively ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#909](https://github.com/assetgraph/assetgraph/pull/909) Upgrade cssnano to version 4.0.3 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#907](https://github.com/assetgraph/assetgraph/pull/907) Upgrade specificity to version 0.4.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#906](https://github.com/assetgraph/assetgraph/pull/906) Upgrade uglify-js to version 3.4.5 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#905](https://github.com/assetgraph/assetgraph/pull/905) Upgrade autoprefixer to version 9.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#903](https://github.com/assetgraph/assetgraph/pull/903) Upgrade postcss to version 7.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#902](https://github.com/assetgraph/assetgraph/pull/902) subsetFonts: Error out when encountering @font-face { unicode-range: ... } ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

#### Commits to master

- [Fix webpack test case after update](https://github.com/assetgraph/assetgraph/commit/c12e37be47a4f87ae31e63758f0cbd65854f2b21) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update in-range dev deps](https://github.com/assetgraph/assetgraph/commit/517ffbce834c655952174bc497823236f576f91f) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Collapse two identical ifs](https://github.com/assetgraph/assetgraph/commit/af3531a97900ae168cf03c7873dc7d7a03bf0386) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Do not throw away the font-style and font-weight bits when patching up the font shorthand](https://github.com/assetgraph/assetgraph/commit/fac5d28932131d3b4bacd438a746d090dd762fa0) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [addPrecacheServiceWorker: Skip more relation types when traversing for assets to include](https://github.com/assetgraph/assetgraph/commit/4b2e51a59167f065dbdabd0064d46d18ba73f149) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v4.12.0...v4.12.1)

### v4.12.0 (2018-07-15)

#### Pull requests

- [#899](https://github.com/assetgraph/assetgraph/pull/899) subsetFonts: Gather stats about the byte sizes of the original and subset fonts ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#897](https://github.com/assetgraph/assetgraph/pull/897) Upgrade cssnano to version 4.0.2 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#894](https://github.com/assetgraph/assetgraph/pull/894) Upgrade cssnano to version 4.0.1 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#890](https://github.com/assetgraph/assetgraph/pull/890) Upgrade uglify-js to version 3.4.4 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#889](https://github.com/assetgraph/assetgraph/pull/889) Upgrade css-loader to version 1.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#884](https://github.com/assetgraph/assetgraph/pull/884) New version of cssnano \(4.0.0\) broke the build ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#883](https://github.com/assetgraph/assetgraph/pull/883) Upgrade uglify-js to version 3.4.3 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [Remove accidentally committed file](https://github.com/assetgraph/assetgraph/commit/90984d8ab1e25bb3b4b0ba668aa3c0cb34bc5127) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Array\#indexOf =&gt; Array\#includes](https://github.com/assetgraph/assetgraph/commit/2c9350ec602a9ece4a52547a845dcb4567c2d799) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [subsetFonts: Strip some more pseudo elements that aren't supported by jsdom\/nwsapi](https://github.com/assetgraph/assetgraph/commit/ec1ae9f43c6cc0143f6b9bd8d07d42b1d97eac8e) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix more tests](https://github.com/assetgraph/assetgraph/commit/e0e9a32b1fa86665d10f0698175d8b8c488643fb) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix another failing test where space crept in](https://github.com/assetgraph/assetgraph/commit/a93d59c441e929e4feb2fe616a621e974abedba8) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+2 more](https://github.com/assetgraph/assetgraph/compare/v4.11.1...v4.12.0)

### v4.11.1 (2018-06-30)

#### Pull requests

- [#882](https://github.com/assetgraph/assetgraph/pull/882) Upgrade uglify-js to version 3.4.2 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#881](https://github.com/assetgraph/assetgraph/pull/881) Upgrade eslint-config-pretty-standard to version 2.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [compileQuery: Simplify preprocessing](https://github.com/assetgraph/assetgraph/commit/1a86b0474622a9367564910244d8f77ab53a6b42) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Assign an id sooner to avoid hitting a very expensive code path in the query engine](https://github.com/assetgraph/assetgraph/commit/8212eb98c0c80325904d87c135668a1fb73c1be6) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [populate: Use object spread](https://github.com/assetgraph/assetgraph/commit/4923282d2dc240de32a6d5aa567db3f69047671b) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [subsetFonts: Test that we assume font-weight:normal and font-style:normal when not explicitly mentioned in the @font-face block](https://github.com/assetgraph/assetgraph/commit/47c18dcf7002a1d04c3c50793559939677238e5a) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.11.0 (2018-06-24)

#### Pull requests

- [#874](https://github.com/assetgraph/assetgraph/pull/874) Trace custom CSS properties ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#879](https://github.com/assetgraph/assetgraph/pull/879) Upgrade eslint to version 5.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#877](https://github.com/assetgraph/assetgraph/pull/877) Upgrade read-pkg-up to version 4.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#876](https://github.com/assetgraph/assetgraph/pull/876) Upgrade sift to version 6.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#875](https://github.com/assetgraph/assetgraph/pull/875) Upgrade sinon to version 6.0.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [eslint --fix .](https://github.com/assetgraph/assetgraph/commit/09892e9ac6a293ff4f7405f8145bd63b20a2b37a) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update prettier to ~1.13.5](https://github.com/assetgraph/assetgraph/commit/e772c891345d19044b17334d3d44492e43a42824) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Use 1-based line and column numbers when warning about missing glyphs](https://github.com/assetgraph/assetgraph/commit/ec33e4dfd22a7941e0def9904f260f4e1617d607) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [subsetFonts: Mention the font-weight and font-style when warning about missing glyphs](https://github.com/assetgraph/assetgraph/commit/cf4b81945afb77fe85aa5dda7e27b9a547130e56) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Use array spread instead of concat](https://github.com/assetgraph/assetgraph/commit/3500c662e5812022f422ac8d7d83ecaabd2bad4c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+4 more](https://github.com/assetgraph/assetgraph/compare/v4.10.1...v4.11.0)

### v4.10.1 (2018-06-09)
- [writeStatsToStderr: Skip redirects](https://github.com/assetgraph/assetgraph/commit/a55350a143f130341e04d31eb1c463cd12a1653b) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.10.0 (2018-06-09)
- [Set Asset\#isRedirect for assets that represent a file- or http-based redirect](https://github.com/assetgraph/assetgraph/commit/4b8f9d11a63c5db6e61a446b67679cb8ed76fc89) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Tracing: Remove workaround now that nwsapi supports the case insensitive modifier for attribute selectors](https://github.com/assetgraph/assetgraph/commit/a9cfbf1d7b4db39b4feb5bc48e301fc6d75010a1) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.9.1 (2018-06-06)
- [Dumb down another query in moveAssetsInOrder](https://github.com/assetgraph/assetgraph/commit/2a18a9453cfd0e1c5cee6f1c0efd878c35baaa38) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.9.0 (2018-06-06)

#### Pull requests

- [#872](https://github.com/assetgraph/assetgraph/pull/872) Remove local font references in generated subset font declaration ([Peter Müller](mailto:munter@fumle.dk))
- [#869](https://github.com/assetgraph/assetgraph/pull/869) Add more verbose errors for missing glyphs to allow the user to locat… ([Peter Müller](mailto:munter@fumle.dk))
- [#871](https://github.com/assetgraph/assetgraph/pull/871) Upgrade uglify-js to version 3.4.0 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#868](https://github.com/assetgraph/assetgraph/pull/868) Upgrade nyc to version 12.0.1 ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#867](https://github.com/assetgraph/assetgraph/pull/867) New version of uglify-js \(3.3.28\) broke the build ([depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))
- [#866](https://github.com/assetgraph/assetgraph/pull/866) subsetFonts: Support the 'font' shorthand ([Andreas Lind](mailto:andreaslindpetersen@gmail.com), [Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Dumb down the queries even more](https://github.com/assetgraph/assetgraph/commit/04c44ce5a01d8fa06dce82ef2901cbc2067b292e) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [bundleRelations: Fix inefficient findRelations queries](https://github.com/assetgraph/assetgraph/commit/c5eedff0c6d58578c9110373c19636014066a8be) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Asset: Memoize the inferred type](https://github.com/assetgraph/assetgraph/commit/c97c71d6579f935f151a86b0167073bda2474fe5) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [\_tryUpgrade: Short circuit if the asset already has the given type](https://github.com/assetgraph/assetgraph/commit/0b785e492000d8887b4caa5a76d17cbd57df7f78) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update README.md](https://github.com/assetgraph/assetgraph/commit/29ac64965480f77029b6d211dce2ab212332a6dd) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+6 more](https://github.com/assetgraph/assetgraph/compare/v4.8.0...v4.9.0)

### v4.8.0 (2018-05-26)

#### Pull requests

- [#865](https://github.com/assetgraph/assetgraph/pull/865) New version of jsdom \(11.11.0\) broke the build ([Andreas Lind](mailto:andreaslindpetersen@gmail.com), [depfu[bot]](mailto:depfu[bot]@users.noreply.github.com))

#### Commits to master

- [addPrecacheServiceWorker: Support minify:true option](https://github.com/assetgraph/assetgraph/commit/4de468da32c15b1eb930b58c51ee37a0f349e969) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Keep using a ^ range for jsdom](https://github.com/assetgraph/assetgraph/commit/dc8b342ff4efb96954b285a9e24368af386c8a75) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [subsetFonts: Don't break if there is an existing reference to a Google Web Font CSS inside a script](https://github.com/assetgraph/assetgraph/commit/8d263e4993d3c41c8a08bae1a9a3f8757ce288ed) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.7.3 (2018-05-21)
- [#864](https://github.com/assetgraph/assetgraph/pull/864) Add missing HtmlResourceHint valid as-property values according to up… ([Peter Müller](mailto:munter@fumle.dk))

### v4.7.2 (2018-05-16)
- [Actually fix Munter\/subfont\#24](https://github.com/assetgraph/assetgraph/commit/f88a064a0621336428d2678ce5a650b3b0eec13a) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.7.1 (2018-05-15)
- [Fix Munter\/subfont\#24](https://github.com/assetgraph/assetgraph/commit/66cf94ff857f27b49656a53338f702a8d1639120) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.7.0 (2018-05-14)

#### Pull requests

- [#862](https://github.com/assetgraph/assetgraph/pull/862) Upgrade webpack to version 4.8.3 ([Andreas Lind](mailto:andreaslindpetersen@gmail.com), [depfu[bot]](mailto:bot@depfu.com))
- [#857](https://github.com/assetgraph/assetgraph/pull/857) Upgrade css-list-helpers to version 2.0.0 ([depfu[bot]](mailto:bot@depfu.com))

#### Commits to master

- [sinon.sandbox.create =&gt; sinon.createSandbox](https://github.com/assetgraph/assetgraph/commit/6d62705f3c5ad72bd43110c3d4cfb71e810a0668) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.6.2 (2018-05-01)

#### Pull requests

- [#855](https://github.com/assetgraph/assetgraph/pull/855) Upgrade sinon to version 5.0.1 ([depfu[bot]](mailto:bot@depfu.com))
- [#854](https://github.com/assetgraph/assetgraph/pull/854) Upgrade httpception to version 2.0.0 ([depfu[bot]](mailto:bot@depfu.com))

#### Commits to master

- [getTextByFontProperties: Don't die when there's a :host\(...\) selector that alters properties that we are tracing](https://github.com/assetgraph/assetgraph/commit/ecbc16bf4f0e63c959fac00c71e7467c0417477d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Revert "Travis: Run with node.js 10"](https://github.com/assetgraph/assetgraph/commit/63b485f355d144afc198623c09aa31521c8056de) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Travis: Run with node.js 10](https://github.com/assetgraph/assetgraph/commit/61a9c92fdd3f08b04c1dea4e049e14b18c5f2705) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix undeffing order broken by da206a6](https://github.com/assetgraph/assetgraph/commit/14e097a2e2bc1436c17600706b92c84319615797) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [SourceMap: Set this.\_consumer to undefined when the text, rawSrc or parse tree changes](https://github.com/assetgraph/assetgraph/commit/c540415b93ed466490426b636a72f3b62eabb7a5) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v4.6.1...v4.6.2)

### v4.6.1 (2018-04-21)

#### Pull requests

- [#852](https://github.com/assetgraph/assetgraph/pull/852) Improve message about missing fonttools ([Peter Müller](mailto:munter@fumle.dk))
- [#851](https://github.com/assetgraph/assetgraph/pull/851) Filter out assets that are essentially file redirects when writing to disc ([Peter Müller](mailto:munter@fumle.dk))
- [#850](https://github.com/assetgraph/assetgraph/pull/850) Upgrade style-loader to version 0.21.0 ([depfu[bot]](mailto:bot@depfu.com))

#### Commits to master

- [Silence postcss warning when minifying css](https://github.com/assetgraph/assetgraph/commit/706aa4e7ba624b5b3166eedfb1faa3b20a670a2f) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Whoops, forgot to call the function](https://github.com/assetgraph/assetgraph/commit/6272a7ddfe61fa8e61512eb7d64b7fa104e5873f) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix lint](https://github.com/assetgraph/assetgraph/commit/fc64fe03562b1a67b533a805486c31aea2ea1e99) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix proxyquire syntax](https://github.com/assetgraph/assetgraph/commit/799131a163eca5421306d09f21f3d2be12425bbe) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.6.0 (2018-04-17)

#### Pull requests

- [#848](https://github.com/assetgraph/assetgraph/pull/848) New version of jsdom \(11.8.0\) broke the build ([Andreas Lind](mailto:andreaslindpetersen@gmail.com), [depfu[bot]](mailto:bot@depfu.com))
- [#846](https://github.com/assetgraph/assetgraph/pull/846) Upgrade style-loader to version 0.20.3 ([depfu[bot]](mailto:bot@depfu.com))
- [#844](https://github.com/assetgraph/assetgraph/pull/844) Upgrade mocha to version 5.1.0 ([Andreas Lind](mailto:andreaslindpetersen@gmail.com), [depfu[bot]](mailto:bot@depfu.com))
- [#843](https://github.com/assetgraph/assetgraph/pull/843) Upgrade magicpen-prism to version 2.4.0 ([depfu[bot]](mailto:bot@depfu.com))
- [#841](https://github.com/assetgraph/assetgraph/pull/841) Upgrade autoprefixer to version 8.2.0 ([depfu[bot]](mailto:bot@depfu.com))

#### Commits to master

- [Add hack to make sure that \*Redirect relations are added and can be queried](https://github.com/assetgraph/assetgraph/commit/19e01c50cb27aff9fa415be9b76f78114778bba3) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Split out parts of unload to \_unpopulate](https://github.com/assetgraph/assetgraph/commit/cceaba99e406c9a9512864b6f8c1a42a947cdf6a) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Keep using a ^ dep for jsdom](https://github.com/assetgraph/assetgraph/commit/e50e818e27c57570ede0f94a15536241ab484a36) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Revert "Remove estraverse \(we use estraverse-fb now\)"](https://github.com/assetgraph/assetgraph/commit/7e1e129d6cdf717e38547d3b34c4b537f38237d6) ([Andreas Lind](mailto:andreas.lind@peakon.com))
- [Remove estraverse \(we use estraverse-fb now\)](https://github.com/assetgraph/assetgraph/commit/acbad800b6309be8cce3ffa7acf7c03e520cc639) ([Andreas Lind](mailto:andreas.lind@peakon.com))
- [+7 more](https://github.com/assetgraph/assetgraph/compare/v4.5.0...v4.6.0)

### v4.5.0 (2018-04-01)
- [Allow upgrading an asset before it is loaded again](https://github.com/assetgraph/assetgraph/commit/ef6b8b07edc87eb4d6fb65de36affbeff0201bdf) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.4.0 (2018-04-01)

#### Pull requests

- [#838](https://github.com/assetgraph/assetgraph/pull/838) Do not upgrade the type of an asset loaded via http unless the Content-Type matches ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

#### Commits to master

- [Fix SourceMap\#findOutgoingRelationsInParseTree \(follow-up to b4ef30354\)](https://github.com/assetgraph/assetgraph/commit/c857174f5102ec1182f293fbe448c331fd960aa1) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Asset\#externalRelations: Don't skip unloaded assets so that \(File|Http\)Redirect relations are still traversed](https://github.com/assetgraph/assetgraph/commit/c12a8e23283ee1f18f8e20bddee697e0b2f70f61) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [assets.\*.findOutgoingRelationsInParseTree: Don't break when the asset isn't loaded](https://github.com/assetgraph/assetgraph/commit/b4ef30354327bb50324786e24704d8f417235bab) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Html\#unload: Don't break if the asset isn't already loaded](https://github.com/assetgraph/assetgraph/commit/99d3c8fdaf1f0a61b7dcb4a807a434b26cf43b52) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Fix parsing of the charset parameter from the Content-Type header \(broken by 047864702\)](https://github.com/assetgraph/assetgraph/commit/9e4636b40b91e539ed9495423b2597b000b132c6) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+2 more](https://github.com/assetgraph/assetgraph/compare/v4.3.1...v4.4.0)

### v4.3.1 (2018-03-30)
- [Don't complain when an HTTP redirect response is missing a Content-Type](https://github.com/assetgraph/assetgraph/commit/87821b7f36e731ea1f3d40745e04cdc764138306) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [eslint --fix .](https://github.com/assetgraph/assetgraph/commit/ffbddc968ee3941694f078791c1b2b3af92274dc) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.3.0 (2018-03-30)
- [Complain when Content-Type is missing or invalid](https://github.com/assetgraph/assetgraph/commit/6b2d9a652c00d02aca253b578efc2a1dbf299031) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.2.1 (2018-03-30)
- [Kill the other "enourmous" splitCss test](https://github.com/assetgraph/assetgraph/commit/cb928913b3dd0aef92893df043d6eb982f7791c1) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Make SourceMap inherit from Json, fixing a warning about source maps served as application\/json](https://github.com/assetgraph/assetgraph/commit/046c766819fe6a5331edfcb81f35369a799804bc) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.2.0 (2018-03-30)

#### Pull requests

- [#836](https://github.com/assetgraph/assetgraph/pull/836) Switch data-url resolving to use data-urls package ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Ditch the annoying "enourmous" splitCssIfIeLimitIsReached test case](https://github.com/assetgraph/assetgraph/commit/ee4da295a6fccc113bc46d4b7985e1096c4681da) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Make sure that we preserve the href of relations that maintain it as a direct property](https://github.com/assetgraph/assetgraph/commit/110e907a60fb9798e520e08475e7ff6385731a60) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Asset\#\_warnIncompatibleTypes: Attach err.asset](https://github.com/assetgraph/assetgraph/commit/4f5ec437de7b99ed4f734d31d2ef5d586d3f7f6a) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Remove accidentally added bogus package-lock file](https://github.com/assetgraph/assetgraph/commit/f4f06c5ddcb36d4632d8eda5d69e738e9b2588e7) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Reformat comment](https://github.com/assetgraph/assetgraph/commit/0e71e8ac073fcb400874be37a260fa964a61d87e) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+7 more](https://github.com/assetgraph/assetgraph/compare/v4.1.0...v4.2.0)

### v4.1.0 (2018-03-24)
- [addPrecacheServiceWorker: Also serve the referencing HTML file](https://github.com/assetgraph/assetgraph/commit/70f01cd48857dfc3454d999a9e391395170798d4) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [addPrecacheServiceWorker: Also bypass Css source maps](https://github.com/assetgraph/assetgraph/commit/583ede6169fc0c4399402cd85892adc8eb6e08f6) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update copyright holder's name and year in LICENSE](https://github.com/assetgraph/assetgraph/commit/8a12003c115900073db89205867a10ce40b06073) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update my email address](https://github.com/assetgraph/assetgraph/commit/e64c2a626ac406f7369876a719e73c801a179ef4) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [eslint --fix .](https://github.com/assetgraph/assetgraph/commit/96c1a42db38abe1529ab8a85c199007972f0123c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.0.6 (2018-03-23)
- [Relax validation of canonicalRoot](https://github.com/assetgraph/assetgraph/commit/f0382a46b436e2093af60a13813effaeda027161) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.0.5 (2018-03-22)
- [Html: Clean up the jsdom instance when unloading](https://github.com/assetgraph/assetgraph/commit/479c6069a5a619a483cb074e79ab4cb81a1b1fca) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.0.4 (2018-03-21)
- [subsetFonts: Be more verbose when glyphs are missing from an intermediate font](https://github.com/assetgraph/assetgraph/commit/9b873cad765c10a0c1c082cc824f277968521cac) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Hackingly map application\/x-font-woff to Woff](https://github.com/assetgraph/assetgraph/commit/d35d77d42e7b577aff0c07c7568412af60d75723) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [cssPseudoElementRegExp: Add -moz-placeholder to the blacklist \(seen on opendyslexic.org\)](https://github.com/assetgraph/assetgraph/commit/f0740f9b410e39b4f70321177c81bcd3cc91ed54) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.0.3 (2018-03-21)
- [subsetFonts transform: Always return an info object, even when not doing anything](https://github.com/assetgraph/assetgraph/commit/bbcb7ade6de48570ee64a1381b62ad3537fdd647) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [eslint --fix .](https://github.com/assetgraph/assetgraph/commit/e3e95de12a67af9b7342a9246cdb76a7be798e69) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.0.2 (2018-03-20)
- [splitCssIfIeLimitIsReached: Remove the original stylesheet reference when splitting](https://github.com/assetgraph/assetgraph/commit/516c75b0bf50295d2bb98a01624de0a9de9d5bd9) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [eslint --fix .](https://github.com/assetgraph/assetgraph/commit/f9907ef1188ff8744ca5b2de0cf7c1bf30bf39bf) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v4.0.1 (2018-03-17)

#### Pull requests

- [#833](https://github.com/assetgraph/assetgraph/pull/833) Sweep through README, update some, remove some outdated parts ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

#### Commits to master

- [Unbreak Asset\#unload for inline assets that reference themselves via a relation](https://github.com/assetgraph/assetgraph/commit/82c9fd083f2551e66170cf4407a38a933dc4c5bf) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [More jsdoc improvements](https://github.com/assetgraph/assetgraph/commit/47d682c09164f9d07004e7f9d2ded7ca92162024) ([Peter Müller](mailto:munter@fumle.dk))
- [Externalize AssetConfig type definition in jsdoc](https://github.com/assetgraph/assetgraph/commit/67aec16de2d6c6d37dc7893eb669ad3f71525a15) ([Peter Müller](mailto:munter@fumle.dk))
- [Document Asset config object for constructor](https://github.com/assetgraph/assetgraph/commit/2d09ad3aebf7bbec3615232011406d80c263b69f) ([Peter Müller](mailto:munter@fumle.dk))
- [More jsdoc updates](https://github.com/assetgraph/assetgraph/commit/fe9995cf0bd03b41db9d51b8807e1f4da31d5dba) ([Peter Müller](mailto:munter@fumle.dk))
- [+10 more](https://github.com/assetgraph/assetgraph/compare/v4.0.0...v4.0.1)

### v4.0.0 (2018-03-05)

#### Pull requests

- [#834](https://github.com/assetgraph/assetgraph/pull/834) Enable jsdoc documentation generation ([Peter Müller](mailto:munter@fumle.dk))
- [#832](https://github.com/assetgraph/assetgraph/pull/832) Drop the minifyCss transform and go back to a Css\#minify method ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#830](https://github.com/assetgraph/assetgraph/pull/830) Add prettier\/eslint setup, run lebab ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#808](https://github.com/assetgraph/assetgraph/pull/808) Implement a transform that inlines assets with ?inline in the url ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#814](https://github.com/assetgraph/assetgraph/pull/814) Replace the built-in query engine with sift.js ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#822](https://github.com/assetgraph/assetgraph/pull/822) Implement Asset\#{username,password,host,hostname,path,port,protocol} getters\/setters ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#825](https://github.com/assetgraph/assetgraph/pull/825) Added format-property on Css declaration of CssFontFaceSrc asset config ([Peter Müller](mailto:munter@fumle.dk))
- [#821](https://github.com/assetgraph/assetgraph/pull/821) Implement Relation\#fragment getter\/setter ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#819](https://github.com/assetgraph/assetgraph/pull/819) ag4ify\/es6ify the subsetFonts transform ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#812](https://github.com/assetgraph/assetgraph/pull/812) Clean up the cssnano config, give normalizeUrl and mergeLonghand another chance ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#815](https://github.com/assetgraph/assetgraph/pull/815) isMinified =&gt; \_toBeMinified ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#810](https://github.com/assetgraph/assetgraph/pull/810) Update to cssnano@next, replace Css\#minify with a minifyCss transform ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#807](https://github.com/assetgraph/assetgraph/pull/807) Asset: Implement a Proxy-based query getter\/setter ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#806](https://github.com/assetgraph/assetgraph/pull/806) Implement AssetGraph\#addAssets, as discussed in the gitter channel ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#803](https://github.com/assetgraph/assetgraph/pull/803) Support &lt;img decoding=...&gt;, fixes \#802 ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#762](https://github.com/assetgraph/assetgraph/pull/762) Switch AssetGraph\#\_assets over to a Set instance ([Andreas Lind](mailto:andreas@one.com))
- [#794](https://github.com/assetgraph/assetgraph/pull/794) Stop using type:'Asset' to mean unknown type in the public API, use undefined instead ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#795](https://github.com/assetgraph/assetgraph/pull/795) Update dependencies ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#793](https://github.com/assetgraph/assetgraph/pull/793)  Make Asset\#type a getter that offers a guess based on Content-Type, incoming relations, file extension etc. ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#787](https://github.com/assetgraph/assetgraph/pull/787) Model &lt;noscript&gt;...&lt;\/noscript&gt; as an inline Html asset ([Andreas Lind](mailto:andreas.lind@peakon.com))
- [#785](https://github.com/assetgraph/assetgraph/pull/785) Propagate the fulfillment\/return value of the transform to the returned promise \(or the callback\) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#768](https://github.com/assetgraph/assetgraph/pull/768) Turn Relation\#to into a setter and try to DTRT when it's updated ([Andreas Lind](mailto:andreas@one.com))
- [#771](https://github.com/assetgraph/assetgraph/pull/771) Implement JavaScriptImport and JavaScriptExport relations ([Andreas Lind](mailto:andreas@one.com))
- [#761](https://github.com/assetgraph/assetgraph/pull/761) Rework AssetGraph\#addAsset, explore API tweaks ([Andreas Lind](mailto:andreas@one.com))
- [#755](https://github.com/assetgraph/assetgraph/pull/755) Represent unpopulated assets as Asset instances, delay type identification until an asset is loaded, let Content-Type take precedence ([Andreas Lind](mailto:andreas@one.com), [Munawwar](mailto:munawwarfiroz@hotmail.com))
- [#750](https://github.com/assetgraph/assetgraph/pull/750) es6\/2017-ify transforms ([Andreas Lind](mailto:andreas@one.com))
- [#751](https://github.com/assetgraph/assetgraph/pull/751) Upgrade webpack to ^3.0.0 and also update the related dev deps ([Andreas Lind](mailto:andreas@one.com))
- [#741](https://github.com/assetgraph/assetgraph/pull/741) Add transform that uses sw-precache to generate a service worker ([Andreas Lind](mailto:andreas@one.com))
- [#749](https://github.com/assetgraph/assetgraph/pull/749) Update style-loader to version 0.18.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [Fix template string indent](https://github.com/assetgraph/assetgraph/commit/9044536fd90d5b79fd7094d266790bf3ab3bcf8e) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Remove fragile regresison test for https:\/\/github.com\/mishoo\/UglifyJS2\/issues\/2313](https://github.com/assetgraph/assetgraph/commit/90cf2d049298cc3adf04d84a073627d5bd3da60a) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Remove the nextSuffixToTry loop from Asset\#externalize now that it's handled by the Asset\#url setter](https://github.com/assetgraph/assetgraph/commit/7b1118a10b06d0b20952e8671f7d85efaa9465ff) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Adapt to an output change in uglify-js 3.3.13](https://github.com/assetgraph/assetgraph/commit/bff8a7289dbf7c2006c3116546e295b30a2cff5d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Asset\#url setter: Move the other asset out of the way in case of a url collision](https://github.com/assetgraph/assetgraph/commit/eb880ab445ec2609ada22c7b819f14fee718b654) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [+195 more](https://github.com/assetgraph/assetgraph/compare/v3.14.2...v4.0.0)

### v3.14.2 (2018-02-26)
- [Update escodegen to ^1.9.1](https://github.com/assetgraph/assetgraph/commit/9c9421343cc5a9424c82c4e7a99827846a38c59d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.14.1 (2018-02-23)
- [bundleWebpack: Allow disabling source maps, fixes \#831](https://github.com/assetgraph/assetgraph/commit/54350904fd7f8c42492249e002f068df615b6999) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.14.0 (2018-01-23)
- [#816](https://github.com/assetgraph/assetgraph/pull/816) Trace ::first-letter and ::first-line when subsetting fonts ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#828](https://github.com/assetgraph/assetgraph/pull/828) reviewContentSecurityPolicy: Omit the schema when adding new source expressions to CSP directives ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.13.7 (2018-01-22)
- [Asset\#replaceWith: Set URL on the replacement before swapping it in.](https://github.com/assetgraph/assetgraph/commit/ad9eac6e19ca28b42e556f1167c7136a7c17bcc8) ([Gustav Nikolaj Olsen](mailto:gno@one.com))

### v3.13.6 (2018-01-10)
- [Html\#findOutgoingRelationsInParseTree: Don't dive into &lt;svg&gt; islands](https://github.com/assetgraph/assetgraph/commit/b96530f4027dacf9bc4aa3df0a5f351152a8112d) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update html-minifier to ^3.5.8](https://github.com/assetgraph/assetgraph/commit/6f4cfceced5c8046d6128ccdc642536a54a555b5) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.13.5 (2018-01-06)
- [bundleWebpack: Simplify source map postprocessing now that urltools.buildRootRelativeUrl handles file: urls pointing out of the root](https://github.com/assetgraph/assetgraph/commit/53a67d372e3db645d509baedcbc3839b64b4658c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update urltools to ^0.4.0](https://github.com/assetgraph/assetgraph/commit/4626a8db0a7943a47a633436f79daab192f97616) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.13.4 (2018-01-04)
- [bundleWebpack: Make sources: \[...\] references relative when they point out of the web root](https://github.com/assetgraph/assetgraph/commit/6acb728d61b12dc42f3cfbf9d41532c33944256c) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.13.3 (2018-01-04)
- [bundleRelations & serializeSourceMaps: Make sure that sourcesContent is preserved](https://github.com/assetgraph/assetgraph/commit/f143bfd9d9400e557d35892294ecf8fa1db02442) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Insource the sourcemap-to-ast library](https://github.com/assetgraph/assetgraph/commit/851ad70fbe3bad923a11381653a7c24a8dc4e316) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.13.2 (2018-01-02)
- [Remove old workarounds for uglify-js' serialization bugs](https://github.com/assetgraph/assetgraph/commit/7fd142c43c823b9464203f5ca742e4891246d08b) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Update uglify-js to ^3.3.4](https://github.com/assetgraph/assetgraph/commit/3a7f0809bd41b3b21d8aaa98542972a437ea5302) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Remove accidentally checked in package-lock.json](https://github.com/assetgraph/assetgraph/commit/9fb3e8f9a116cc6081369b117d25a4e1ccbca440) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Invert the noscript:true predicate so it's script:false](https://github.com/assetgraph/assetgraph/commit/2fde98f7c8c21073407c524cf0ea509a148e4eec) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.13.1 (2017-12-14)
- [Fix wrong match on google font asset urls. Make it protocl agnostic](https://github.com/assetgraph/assetgraph/commit/244b3c110af165abcd48ddfae69fea7509b240d2) ([Peter Müller](mailto:munter@fumle.dk))
- [Trace all inherited properties when encountering font-weight: bolder|lighter](https://github.com/assetgraph/assetgraph/commit/d4727ff7fa6beafd960936f143b0b2795e79761b) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.13.0 (2017-12-09)

#### Pull requests

- [#796](https://github.com/assetgraph/assetgraph/pull/796) Also trace Firefox' default stylesheet when subsetting fonts ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#801](https://github.com/assetgraph/assetgraph/pull/801) subsetFonts: Emit a warning when the highest prioritized font is missing some chars ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#798](https://github.com/assetgraph/assetgraph/pull/798) subsetFonts: Don't break when there's an existing &lt;link rel=preload as=font ...&gt; ([Peter Müller](mailto:munter@fumle.dk))
- [#799](https://github.com/assetgraph/assetgraph/pull/799) Add support for text-transform while subsetting ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#800](https://github.com/assetgraph/assetgraph/pull/800) Include a hyphen when a text node contains a soft hyphen ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

#### Commits to master

- [Improve naming of transforms inside transforms\/subsetFonts](https://github.com/assetgraph/assetgraph/commit/bda3d139d4e3d636747b60d9711526a0d6cfe2f4) ([Peter Müller](mailto:munter@fumle.dk))
- [getTextByFontProperties test: Be more strict about valid &lt;input value=...&gt; with time types](https://github.com/assetgraph/assetgraph/commit/1a8569a3a15052e2e3c0d34fa07f4e06ee71b7bd) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [logEvents: Fix stopOnWarning check when a warning is emitted with no active transform](https://github.com/assetgraph/assetgraph/commit/a0a9f9328dc9560cb7fcf44a7e9a08f69d43e29a) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [logEvents: Unbreak the active transform housekeeping when a transform calls other transforms](https://github.com/assetgraph/assetgraph/commit/1b74aa2d6872ccd9c2a53ee814d13f12d60d4b56) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.12.0 (2017-12-02)

#### Pull requests

- [#797](https://github.com/assetgraph/assetgraph/pull/797) Javascript font preloading ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [counterRendererByListStyleType: Add a renderer for list-style-type:none](https://github.com/assetgraph/assetgraph/commit/a8610de4a43444cbc76ca614de9cf6c500ebc8c7) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Rename the remaining files \(follow-up to eb91bc2b\)](https://github.com/assetgraph/assetgraph/commit/dfb2a4fb70ff0e0623f936b08078e29fcb144af6) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [combinePredicates: Return undefined in case of conflict instead of a null value](https://github.com/assetgraph/assetgraph/commit/9c6d628ab9e8bc575d433991925ecd4c4d72f927) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Rename: gatherStylesheetsWith{IncomingMedia =&gt; Predicates}, as that's what it does now](https://github.com/assetgraph/assetgraph/commit/eb91bc2bc1b120fbd5fba79993caa7e7d4e79038) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))

### v3.11.0 (2017-11-23)

#### Pull requests

- [#792](https://github.com/assetgraph/assetgraph/pull/792) Rename subset webfont transform ([Peter Müller](mailto:munter@fumle.dk))
- [#790](https://github.com/assetgraph/assetgraph/pull/790) Feature\/subset noscript ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#791](https://github.com/assetgraph/assetgraph/pull/791) Subset local fonts with pyftsubset ([Andreas Lind](mailto:andreas.lind@peakon.com), [Peter Müller](mailto:munter@fumle.dk))
- [#789](https://github.com/assetgraph/assetgraph/pull/789) Subsetting: Track the predicates via a single object instead of \(true|false\)Predicates ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#788](https://github.com/assetgraph/assetgraph/pull/788) Support conditional comments when tracing subsets ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [#786](https://github.com/assetgraph/assetgraph/pull/786) Subset google fonts using font face declaration ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Enable test for getTextByFontProperties that depended on now backported HtmlNoscript implementation](https://github.com/assetgraph/assetgraph/commit/56068d91f9e06cdb1ec3df2fc4f3f87e9bcce78c) ([Peter Müller](mailto:munter@fumle.dk))
- [Backport 42d42985 to v3: Model &lt;noscript&gt;...&lt;\/noscript&gt; as an inline Html asset](https://github.com/assetgraph/assetgraph/commit/e7289baa69905f3f9674eceab28a70e469cee310) ([Andreas Lind](mailto:andreas.lind@peakon.com))
- [Add vscode launch config for the test suite, allows easy single-step debugging through tests](https://github.com/assetgraph/assetgraph/commit/8e64359491c0ba2dbca12d75d6384f20b604e48b) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [Don't bother adding styledText entries for pseudo elements whose content expands to nothing](https://github.com/assetgraph/assetgraph/commit/b35e613825469811c74bbc7917c355aae6ee19db) ([Andreas Lind](mailto:andreaslindpetersen@gmail.com))
- [populate: Fix followRelations: \[ ... \]](https://github.com/assetgraph/assetgraph/commit/993cb99c6927cd3d6f97b0072d0fb7e0cc4ca709) ([Andreas Lind](mailto:andreas@one.com))

### v3.10.0 (2017-10-05)

#### Pull requests

- [#781](https://github.com/assetgraph/assetgraph/pull/781) Font subsetting: Pick up intermediate font-weight values from CSS transitions to pseudo class states ([Andreas Lind](mailto:andreas@one.com))
- [#784](https://github.com/assetgraph/assetgraph/pull/784) transforms\/subsetGoogleFonts: Explicitly set 'as' property to 'font' … ([Peter Müller](mailto:munter@fumle.dk))
- [#782](https://github.com/assetgraph/assetgraph/pull/782) transforms\/subsetGoogleFonts: Added fontDisplay option ([Peter Müller](mailto:munter@fumle.dk))
- [#780](https://github.com/assetgraph/assetgraph/pull/780) Trace CSS animations ([Andreas Lind](mailto:andreas@one.com))

#### Commits to master

- [Fix wrap test case \(was missing require.js because it was based on the broken v3 version of the paths test\)](https://github.com/assetgraph/assetgraph/commit/25faa3e668222ce54189246f8956dda1c440b5d0) ([Andreas Lind](mailto:andreas@one.com))
- [Fix whitespace in test data](https://github.com/assetgraph/assetgraph/commit/6c1b01b6a4f295149406a78eda52ae67ca8a41b0) ([Andreas Lind](mailto:andreas@one.com))
- [bundleRequireJs: Test that the wrap option is passed to the require.js optimizer](https://github.com/assetgraph/assetgraph/commit/2e203ed9f8844bc237c52050c8c6f65fe6a2b681) ([Andreas Lind](mailto:andreas@one.com))
- [Support display:list-item when the value includes more tokens](https://github.com/assetgraph/assetgraph/commit/94248a55b770efcc62c7b20425ff9234a542ea68) ([Andreas Lind](mailto:andreas@one.com))
- [Merge two ifs](https://github.com/assetgraph/assetgraph/commit/ceeb26be4f322dccb63b63d8b513b90e6d14fb74) ([Andreas Lind](mailto:andreas@one.com))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v3.9.1...v3.10.0)

### v3.9.1 (2017-09-19)
- [Fix extraction of text from a chain of fallback counters](https://github.com/assetgraph/assetgraph/commit/58a20efb21130a7ad6c3f5b6b08aad8c3244cfd2) ([Andreas Lind](mailto:andreas@one.com))

### v3.9.0 (2017-09-19)

#### Pull requests

- [#777](https://github.com/assetgraph/assetgraph/pull/777) Include list indicators in subset ([Andreas Lind](mailto:andreas@one.com))

#### Commits to master

- [transforms\/subsetGoogleFonts: Make relation query for google subset CSS strict enough to not include relations to original google CSS](https://github.com/assetgraph/assetgraph/commit/8ed68b1de9027e6e2e564aa3dce6ed58b1b161e5) ([Peter Müller](mailto:munter@fumle.dk))

### v3.8.3 (2017-09-18)
- [compressJavaScript: Re-enable collapse\_vars and cascade](https://github.com/assetgraph/assetgraph/commit/84098def5f12003b406b0970be19186c3fc8a320) ([Andreas Lind](mailto:andreas@one.com))
- [Update uglify-js to 3.1.1](https://github.com/assetgraph/assetgraph/commit/fd5f15bd63c534f6ec806a3a26ca772e918d4046) ([Andreas Lind](mailto:andreas@one.com))

### v3.8.2 (2017-09-15)
- [compressJavaScript: Disable UglifyJS' collapse\_vars and cascade options](https://github.com/assetgraph/assetgraph/commit/512a88c8ed1044b41a56fc150e36efe1b387d0ad) ([Andreas Lind](mailto:andreas@one.com))
- [Fix wrong indentation in transforms\/subsetGoogleFonts](https://github.com/assetgraph/assetgraph/commit/ed01a1d031de65148847ca86985caa7e65211ad0) ([Peter Müller](mailto:munter@fumle.dk))

### v3.8.1 (2017-09-12)
- [Update html-minifier to ^3.5.5](https://github.com/assetgraph/assetgraph/commit/a83f4f28c90977afda4c2e18f5e003a3deb53930) ([Andreas Lind](mailto:andreas@one.com))
- [Fix formatting.](https://github.com/assetgraph/assetgraph/commit/7af16eb906ca5a7675ffb2a7d11a7e62431520f2) ([Bram Stein](mailto:stein@adobe.com))
- [Add test-cases for spaces.](https://github.com/assetgraph/assetgraph/commit/2bc4c4144be144b3dae06a43ecf0b2b914eabe88) ([Bram Stein](mailto:stein@adobe.com))
- [Remove webfont population step in subsetGoogleFonts. Avoids emitting warnings during run](https://github.com/assetgraph/assetgraph/commit/b51bbbe1477b83b66005255906dc97e2a038faef) ([Peter Müller](mailto:munter@fumle.dk))
- [mocha.opts: Allow requirejsVars to leak again \(caused by the css-font-parser module\)](https://github.com/assetgraph/assetgraph/commit/285c8d8b179085e8f907da086f4520d486385056) ([Andreas Lind](mailto:andreas@one.com))

### v3.8.0 (2017-09-04)
- [#776](https://github.com/assetgraph/assetgraph/pull/776) Implement font subsetting. Refs \#729 ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))

### v3.7.3 (2017-09-04)
- [Asset\#url setter: Don't break unresolved relations when the asset is inline](https://github.com/assetgraph/assetgraph/commit/c40297bbace4a5a6812c9ea2100d50978ac7e725) ([Andreas Lind](mailto:andreas@one.com))

### v3.7.2 (2017-09-04)
- [Hack handling of unresolved relations with a fragment identifier](https://github.com/assetgraph/assetgraph/commit/a50f9743bdeb1baa7a9a065802e55b9a9be6d056) ([Andreas Lind](mailto:andreas@one.com))

### v3.7.1 (2017-09-04)
- [moveAssetsInOrder: Exclude self-relations when working out the dependencies between assets](https://github.com/assetgraph/assetgraph/commit/9ba6f82c77c31ff3b17fed3cd113fc911af65c2a) ([Andreas Lind](mailto:andreas@one.com))

### v3.7.0 (2017-08-25)
- [Add .ejs to Html\#supportedExtensions \(see \#773\)](https://github.com/assetgraph/assetgraph/commit/49f78ccf89fb9d63d367f65bf29c31d09ac39b5b) ([Andreas Lind](mailto:andreas@one.com))
- [Add a couple of Asset\#fileName tests](https://github.com/assetgraph/assetgraph/commit/cd4652e68c452c78e7803cdca41a9617720ae031) ([Andreas Lind](mailto:andreas@one.com))

### v3.6.3 (2017-08-02)

#### Pull requests

- [#747](https://github.com/assetgraph/assetgraph/pull/747) Simplify HTML minification and allow customizing it ([Andreas Lind](mailto:andreas@one.com))
- [#740](https://github.com/assetgraph/assetgraph/pull/740) Update uglify-js to version 3.0.3 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#738](https://github.com/assetgraph/assetgraph/pull/738) Update postcss to version 6.0.1 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#736](https://github.com/assetgraph/assetgraph/pull/736) Update autoprefixer to version 7.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#734](https://github.com/assetgraph/assetgraph/pull/734) Update httpception to version 0.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#733](https://github.com/assetgraph/assetgraph/pull/733) Update style-loader to version 0.17.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#728](https://github.com/assetgraph/assetgraph/pull/728) Insert HtmlScript bundles at the point of the last asset in the bundl… ([Peter Müller](mailto:munter@fumle.dk))
- [#652](https://github.com/assetgraph/assetgraph/pull/652) Make relations owned by the asset containing them ([Andreas Lind](mailto:andreas@one.com))
- [#726](https://github.com/assetgraph/assetgraph/pull/726) Update eslint to version 3.19.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#725](https://github.com/assetgraph/assetgraph/pull/725) Update file-loader to version 0.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#720](https://github.com/assetgraph/assetgraph/pull/720) Pick up .html files output by HtmlWebpackPlugin ([Andreas Lind](mailto:andreas@one.com))
- [#724](https://github.com/assetgraph/assetgraph/pull/724) Update css-loader to version 0.28.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#723](https://github.com/assetgraph/assetgraph/pull/723) Webpack 2 compatibility ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#715](https://github.com/assetgraph/assetgraph/pull/715) When esprima.parse\(text, {..., sourceType: 'module'}\) fails, try falling back to sourceType: 'script' ([Andreas Lind](mailto:andreas@one.com))
- [#719](https://github.com/assetgraph/assetgraph/pull/719) Update style-loader to version 0.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#722](https://github.com/assetgraph/assetgraph/pull/722) Update uglify-js to version 2.8.18 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#717](https://github.com/assetgraph/assetgraph/pull/717) Support webpack code splitting ([Andreas Lind](mailto:andreas@one.com))
- [#716](https://github.com/assetgraph/assetgraph/pull/716) bundleWebpack: Only build the bundles that are referenced by relations ([Andreas Lind](mailto:andreas@one.com))
- [#712](https://github.com/assetgraph/assetgraph/pull/712) ES6 support ([Andreas Lind](mailto:andreas@one.com))
- [#714](https://github.com/assetgraph/assetgraph/pull/714) Update httpception to version 0.4.1 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#710](https://github.com/assetgraph/assetgraph/pull/710) Fix relation canonical getter ([Peter Müller](mailto:munter@fumle.dk))
- [#707](https://github.com/assetgraph/assetgraph/pull/707) Update uglify-js to version 2.8.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#706](https://github.com/assetgraph/assetgraph/pull/706) Update eslint to version 3.18.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#705](https://github.com/assetgraph/assetgraph/pull/705) Update uglify-js to version 2.8.13 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#704](https://github.com/assetgraph/assetgraph/pull/704) Update sinon to version 2.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#703](https://github.com/assetgraph/assetgraph/pull/703) Update jsdom to version 9.12.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#697](https://github.com/assetgraph/assetgraph/pull/697) Update uglify-js to version 2.8.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#688](https://github.com/assetgraph/assetgraph/pull/688) Update requirejs to version 2.3.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#690](https://github.com/assetgraph/assetgraph/pull/690) Update eslint to version 3.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#696](https://github.com/assetgraph/assetgraph/pull/696) Update uglify-js to version 2.8.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#693](https://github.com/assetgraph/assetgraph/pull/693) Update uglify-js to version 2.8.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#686](https://github.com/assetgraph/assetgraph/pull/686) unexpected@10.26.0 breaks build 🚨 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#687](https://github.com/assetgraph/assetgraph/pull/687) Implement relations\/MsApplicationConfigPollingUri. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#684](https://github.com/assetgraph/assetgraph/pull/684) Added relations\/MsApplicationConfigImage. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#685](https://github.com/assetgraph/assetgraph/pull/685) Update jsdom to version 9.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#683](https://github.com/assetgraph/assetgraph/pull/683) Implement assets\/MsApplicationConfig. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#682](https://github.com/assetgraph/assetgraph/pull/682) Added relations\/HtmlMsAppllicationConfig. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#681](https://github.com/assetgraph/assetgraph/pull/681) Update jsdom to version 9.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#680](https://github.com/assetgraph/assetgraph/pull/680) Update eslint to version 3.15.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#677](https://github.com/assetgraph/assetgraph/pull/677) Update systemjs-builder to version 0.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#676](https://github.com/assetgraph/assetgraph/pull/676) Update svgo to version 0.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#675](https://github.com/assetgraph/assetgraph/pull/675) Update file-loader to version 0.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#674](https://github.com/assetgraph/assetgraph/pull/674) Update eslint to version 3.14.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#669](https://github.com/assetgraph/assetgraph/pull/669) Update perfectionist to version 2.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#668](https://github.com/assetgraph/assetgraph/pull/668) Update less to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#667](https://github.com/assetgraph/assetgraph/pull/667) Implement transform to inline critical CSS rules ([Peter Müller](mailto:munter@fumle.dk))
- [#666](https://github.com/assetgraph/assetgraph/pull/666) Update bluebird to version 3.4.7 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#654](https://github.com/assetgraph/assetgraph/pull/654) html-minifier@3.2.1 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#665](https://github.com/assetgraph/assetgraph/pull/665) Update jsdom to version 9.9.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#663](https://github.com/assetgraph/assetgraph/pull/663) Fix code formatting to please ESLint 3.12 ([Ariya Hidayat](mailto:ariya.hidayat@gmail.com))
- [#661](https://github.com/assetgraph/assetgraph/pull/661) Update webpack to version 1.14.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#660](https://github.com/assetgraph/assetgraph/pull/660) Update uglify-js to version 2.7.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#655](https://github.com/assetgraph/assetgraph/pull/655) Update urltools to version 0.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#646](https://github.com/assetgraph/assetgraph/pull/646) webpack: add support for publicPath output options ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [#651](https://github.com/assetgraph/assetgraph/pull/651) Update webpack to version 1.13.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#650](https://github.com/assetgraph/assetgraph/pull/650) Update jsdom to version 9.8.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#644](https://github.com/assetgraph/assetgraph/pull/644) Update uglify-js to version 2.7.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#642](https://github.com/assetgraph/assetgraph/pull/642) Model \(self-\)relations whose href is the empty string or \#fragment ([Andreas Lind](mailto:andreas@one.com))
- [#640](https://github.com/assetgraph/assetgraph/pull/640) Don't include a document fragment in the asset url, treat it as part of the relation href ([Andreas Lind](mailto:andreas@one.com))
- [#641](https://github.com/assetgraph/assetgraph/pull/641) Rate limit file command ([Andreas Lind](mailto:andreas@one.com))
- [#639](https://github.com/assetgraph/assetgraph/pull/639) Update jsdom to version 9.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#626](https://github.com/assetgraph/assetgraph/pull/626) Add ability to handle canonical relative urls ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#630](https://github.com/assetgraph/assetgraph/pull/630) Support independent conditional layers ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#633](https://github.com/assetgraph/assetgraph/pull/633) Update jsdom to version 9.6.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#631](https://github.com/assetgraph/assetgraph/pull/631) Update perfectionist to version 2.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#629](https://github.com/assetgraph/assetgraph/pull/629) Update svgo to version 0.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#625](https://github.com/assetgraph/assetgraph/pull/625) Feature\/multiple condition values to trace ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#624](https://github.com/assetgraph/assetgraph/pull/624) Update requirejs to version 2.3.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#623](https://github.com/assetgraph/assetgraph/pull/623) Add relation\/HtmlServiceWorkerRegistration. Closes \#493 ([Peter Müller](mailto:munter@fumle.dk))
- [#622](https://github.com/assetgraph/assetgraph/pull/622) Implement open graph relations support ([Peter Müller](mailto:munter@fumle.dk))
- [#621](https://github.com/assetgraph/assetgraph/pull/621) Implement relation\/HtmlPreconnectLink. Closes \#613 ([Peter Müller](mailto:munter@fumle.dk))
- [#620](https://github.com/assetgraph/assetgraph/pull/620) Implement relation\/HtmlDnsPrefetchLink ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#618](https://github.com/assetgraph/assetgraph/pull/618) reviewContentSecurityPolicy: Issue absolute links when updating the CSP instead of whitelisting whole host names. ([Andreas Lind](mailto:andreas@one.com))
- [#619](https://github.com/assetgraph/assetgraph/pull/619) Add relations\/HtmlPrerenderLink. Closes \#611 ([Peter Müller](mailto:munter@fumle.dk))
- [#617](https://github.com/assetgraph/assetgraph/pull/617) Feature\/html prefetch link ([Peter Müller](mailto:munter@fumle.dk))
- [#616](https://github.com/assetgraph/assetgraph/pull/616) Feature\/html preload link ([Peter Müller](mailto:munter@fumle.dk))
- [#604](https://github.com/assetgraph/assetgraph/pull/604) Update esprima to version 3.0.0 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#609](https://github.com/assetgraph/assetgraph/pull/609) Update postcss to version 5.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#603](https://github.com/assetgraph/assetgraph/pull/603) Add support for builds with multiple system.js conditions ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#608](https://github.com/assetgraph/assetgraph/pull/608) Update requirejs to version 2.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#607](https://github.com/assetgraph/assetgraph/pull/607) Update perfectionist to version 2.3.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#606](https://github.com/assetgraph/assetgraph/pull/606) Update requirejs to version 2.3.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#605](https://github.com/assetgraph/assetgraph/pull/605) Update jsdom to version 9.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#602](https://github.com/assetgraph/assetgraph/pull/602) Update bluebird to version 3.4.6 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#601](https://github.com/assetgraph/assetgraph/pull/601) Update bluebird to version 3.4.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#597](https://github.com/assetgraph/assetgraph/pull/597) Update bluebird to version 3.4.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#600](https://github.com/assetgraph/assetgraph/pull/600) Update jsdom to version 9.4.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#595](https://github.com/assetgraph/assetgraph/pull/595) unexpected-mitm@9.2.0 breaks build ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#592](https://github.com/assetgraph/assetgraph/pull/592) Update jsdom to 9.4.2. ([Andreas Lind](mailto:andreas@one.com))
- [#593](https://github.com/assetgraph/assetgraph/pull/593) Update perfectionist to version 2.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#589](https://github.com/assetgraph/assetgraph/pull/589) Update normalizeurl to version 1.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#588](https://github.com/assetgraph/assetgraph/pull/588) Update webpack to version 1.13.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#587](https://github.com/assetgraph/assetgraph/pull/587) Update uglify-js to version 2.7.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#586](https://github.com/assetgraph/assetgraph/pull/586) unexpected-mitm@9.1.4 untested ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#585](https://github.com/assetgraph/assetgraph/pull/585) Update uglify-js to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#583](https://github.com/assetgraph/assetgraph/pull/583) Update uglify-js to version 2.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#582](https://github.com/assetgraph/assetgraph/pull/582) Html anchor no blank opener ([Peter Müller](mailto:munter@fumle.dk))
- [#581](https://github.com/assetgraph/assetgraph/pull/581) Update mocha to version 3.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#579](https://github.com/assetgraph/assetgraph/pull/579) Update perfectionist to version 2.1.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#563](https://github.com/assetgraph/assetgraph/pull/563) Add webpack support ([Andreas Lind](mailto:andreas@one.com))
- [#575](https://github.com/assetgraph/assetgraph/pull/575) semver@5.3.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#573](https://github.com/assetgraph/assetgraph/pull/573) Update postcss to version 5.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#568](https://github.com/assetgraph/assetgraph/pull/568) Update eslint to version 3.0.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#565](https://github.com/assetgraph/assetgraph/pull/565) Remove support for transpiling ([Andreas Lind](mailto:andreas@one.com))
- [#564](https://github.com/assetgraph/assetgraph/pull/564) Simplify base asset resolution and housekeeping ([Andreas Lind](mailto:andreas@one.com))
- [#562](https://github.com/assetgraph/assetgraph/pull/562) Web worker support ([Andreas Lind](mailto:andreas@one.com))
- [#567](https://github.com/assetgraph/assetgraph/pull/567) Update uglify-js to version 2.7.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#566](https://github.com/assetgraph/assetgraph/pull/566) relations\/JavaScriptFetch implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#561](https://github.com/assetgraph/assetgraph/pull/561) Update eslint to version 3.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#560](https://github.com/assetgraph/assetgraph/pull/560) teepee@2.23.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#547](https://github.com/assetgraph/assetgraph/pull/547) Rework require.js bundling support ([Andreas Lind](mailto:andreas@one.com))

#### Commits to master

- [Whoops, don't use let due to node.js 4](https://github.com/assetgraph/assetgraph/commit/a4256aea0b422250875e05c63d7ccef9c7dbe2a1) ([Andreas Lind](mailto:andreas@one.com))
- [compressJavaScript: Fix passing of the ie8 option to uglifyJs.minify \(broke with the upgrade to uglify 3\)](https://github.com/assetgraph/assetgraph/commit/0bd6b3231360c5dc79591225f3bbafce0be5f94f) ([Andreas Lind](mailto:andreas@one.com))
- [inlineHtmlTemplates: Inject the &lt;script type=text\/html&gt; templates into &lt;head&gt; instead of &lt;body&gt;](https://github.com/assetgraph/assetgraph/commit/8548aa8e9de066fbf6ffc714d0b8573dd4e1077e) ([Andreas Lind](mailto:andreas@one.com))
- [Add support for new AssetGraph\({disableFetch: true}\) to disable the JavaScriptFetch relation](https://github.com/assetgraph/assetgraph/commit/c229c92d67550ca81080b4c5f065d1c1cffe09f1) ([Andreas Lind](mailto:andreas@one.com))
- [eslintrc: Permit es6 syntax so we can at least use the features supported by node.js 4 in v3](https://github.com/assetgraph/assetgraph/commit/8a70a004a8bc3b568903e35515358fb67c6fd83f) ([Andreas Lind](mailto:andreas@one.com))
- [+244 more](https://github.com/assetgraph/assetgraph/compare/v2.17.4...v3.6.3)

### v2.17.4 (2017-08-02)
- [Update urltools to 0.3.5](https://github.com/assetgraph/assetgraph/commit/ce836dad00e418296c0132183bdbd0fd7981253a) ([Andreas Lind](mailto:andreas@one.com))

### v2.17.3 (2017-08-02)
- [Update urltools to 0.3.4](https://github.com/assetgraph/assetgraph/commit/8a7863cac0c15977b80c4f849b4309b131f3049f) ([Andreas Lind](mailto:andreas@one.com))

### v2.17.2 (2017-08-02)
- [Asset\#populate: Normalize relation.to when it's left in the unresolved state](https://github.com/assetgraph/assetgraph/commit/0cd0c82e1c29a7ebca1e35b096d597bcc61e4825) ([Andreas Lind](mailto:andreas@one.com))
- [Update html-minifier to ^3.5.2](https://github.com/assetgraph/assetgraph/commit/df0eeefed6b8951e4d0b27882767b691df98019c) ([Andreas Lind](mailto:andreas@one.com))
- [Revert "Replace html-minifier with html-minifier-papandreou"](https://github.com/assetgraph/assetgraph/commit/3b29aef18f4d3f6b94b5620fb0e13b8449124776) ([Andreas Lind](mailto:andreas@one.com))
- [Replace html-minifier with html-minifier-papandreou](https://github.com/assetgraph/assetgraph/commit/7b9c07d0f9d5e1cf08e0b33d18b4ecfdac932411) ([Andreas Lind](mailto:andreas@one.com))

### v3.6.2 (2017-07-04)
- [Whoops, don't use let due to node.js 4](https://github.com/assetgraph/assetgraph/commit/a4256aea0b422250875e05c63d7ccef9c7dbe2a1) ([Andreas Lind](mailto:andreas@one.com))

### v3.6.1 (2017-07-04)
- [compressJavaScript: Fix passing of the ie8 option to uglifyJs.minify \(broke with the upgrade to uglify 3\)](https://github.com/assetgraph/assetgraph/commit/0bd6b3231360c5dc79591225f3bbafce0be5f94f) ([Andreas Lind](mailto:andreas@one.com))
- [inlineHtmlTemplates: Inject the &lt;script type=text\/html&gt; templates into &lt;head&gt; instead of &lt;body&gt;](https://github.com/assetgraph/assetgraph/commit/8548aa8e9de066fbf6ffc714d0b8573dd4e1077e) ([Andreas Lind](mailto:andreas@one.com))

### v3.5.0 (2017-06-23)

#### Pull requests

- [#747](https://github.com/assetgraph/assetgraph/pull/747) Simplify HTML minification and allow customizing it ([Andreas Lind](mailto:andreas@one.com))
- [#740](https://github.com/assetgraph/assetgraph/pull/740) Update uglify-js to version 3.0.3 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#738](https://github.com/assetgraph/assetgraph/pull/738) Update postcss to version 6.0.1 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#736](https://github.com/assetgraph/assetgraph/pull/736) Update autoprefixer to version 7.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#734](https://github.com/assetgraph/assetgraph/pull/734) Update httpception to version 0.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#733](https://github.com/assetgraph/assetgraph/pull/733) Update style-loader to version 0.17.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#728](https://github.com/assetgraph/assetgraph/pull/728) Insert HtmlScript bundles at the point of the last asset in the bundl… ([Peter Müller](mailto:munter@fumle.dk))
- [#652](https://github.com/assetgraph/assetgraph/pull/652) Make relations owned by the asset containing them ([Andreas Lind](mailto:andreas@one.com))
- [#726](https://github.com/assetgraph/assetgraph/pull/726) Update eslint to version 3.19.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#725](https://github.com/assetgraph/assetgraph/pull/725) Update file-loader to version 0.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#720](https://github.com/assetgraph/assetgraph/pull/720) Pick up .html files output by HtmlWebpackPlugin ([Andreas Lind](mailto:andreas@one.com))
- [#724](https://github.com/assetgraph/assetgraph/pull/724) Update css-loader to version 0.28.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#723](https://github.com/assetgraph/assetgraph/pull/723) Webpack 2 compatibility ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#715](https://github.com/assetgraph/assetgraph/pull/715) When esprima.parse\(text, {..., sourceType: 'module'}\) fails, try falling back to sourceType: 'script' ([Andreas Lind](mailto:andreas@one.com))
- [#719](https://github.com/assetgraph/assetgraph/pull/719) Update style-loader to version 0.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#722](https://github.com/assetgraph/assetgraph/pull/722) Update uglify-js to version 2.8.18 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#717](https://github.com/assetgraph/assetgraph/pull/717) Support webpack code splitting ([Andreas Lind](mailto:andreas@one.com))
- [#716](https://github.com/assetgraph/assetgraph/pull/716) bundleWebpack: Only build the bundles that are referenced by relations ([Andreas Lind](mailto:andreas@one.com))
- [#712](https://github.com/assetgraph/assetgraph/pull/712) ES6 support ([Andreas Lind](mailto:andreas@one.com))
- [#714](https://github.com/assetgraph/assetgraph/pull/714) Update httpception to version 0.4.1 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#710](https://github.com/assetgraph/assetgraph/pull/710) Fix relation canonical getter ([Peter Müller](mailto:munter@fumle.dk))
- [#707](https://github.com/assetgraph/assetgraph/pull/707) Update uglify-js to version 2.8.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#706](https://github.com/assetgraph/assetgraph/pull/706) Update eslint to version 3.18.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#705](https://github.com/assetgraph/assetgraph/pull/705) Update uglify-js to version 2.8.13 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#704](https://github.com/assetgraph/assetgraph/pull/704) Update sinon to version 2.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#703](https://github.com/assetgraph/assetgraph/pull/703) Update jsdom to version 9.12.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#697](https://github.com/assetgraph/assetgraph/pull/697) Update uglify-js to version 2.8.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#688](https://github.com/assetgraph/assetgraph/pull/688) Update requirejs to version 2.3.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#690](https://github.com/assetgraph/assetgraph/pull/690) Update eslint to version 3.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#696](https://github.com/assetgraph/assetgraph/pull/696) Update uglify-js to version 2.8.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#693](https://github.com/assetgraph/assetgraph/pull/693) Update uglify-js to version 2.8.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#686](https://github.com/assetgraph/assetgraph/pull/686) unexpected@10.26.0 breaks build 🚨 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#687](https://github.com/assetgraph/assetgraph/pull/687) Implement relations\/MsApplicationConfigPollingUri. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#684](https://github.com/assetgraph/assetgraph/pull/684) Added relations\/MsApplicationConfigImage. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#685](https://github.com/assetgraph/assetgraph/pull/685) Update jsdom to version 9.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#683](https://github.com/assetgraph/assetgraph/pull/683) Implement assets\/MsApplicationConfig. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#682](https://github.com/assetgraph/assetgraph/pull/682) Added relations\/HtmlMsAppllicationConfig. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#681](https://github.com/assetgraph/assetgraph/pull/681) Update jsdom to version 9.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#680](https://github.com/assetgraph/assetgraph/pull/680) Update eslint to version 3.15.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#677](https://github.com/assetgraph/assetgraph/pull/677) Update systemjs-builder to version 0.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#676](https://github.com/assetgraph/assetgraph/pull/676) Update svgo to version 0.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#675](https://github.com/assetgraph/assetgraph/pull/675) Update file-loader to version 0.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#674](https://github.com/assetgraph/assetgraph/pull/674) Update eslint to version 3.14.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#669](https://github.com/assetgraph/assetgraph/pull/669) Update perfectionist to version 2.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#668](https://github.com/assetgraph/assetgraph/pull/668) Update less to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#667](https://github.com/assetgraph/assetgraph/pull/667) Implement transform to inline critical CSS rules ([Peter Müller](mailto:munter@fumle.dk))
- [#666](https://github.com/assetgraph/assetgraph/pull/666) Update bluebird to version 3.4.7 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#654](https://github.com/assetgraph/assetgraph/pull/654) html-minifier@3.2.1 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#665](https://github.com/assetgraph/assetgraph/pull/665) Update jsdom to version 9.9.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#663](https://github.com/assetgraph/assetgraph/pull/663) Fix code formatting to please ESLint 3.12 ([Ariya Hidayat](mailto:ariya.hidayat@gmail.com))
- [#661](https://github.com/assetgraph/assetgraph/pull/661) Update webpack to version 1.14.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#660](https://github.com/assetgraph/assetgraph/pull/660) Update uglify-js to version 2.7.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#655](https://github.com/assetgraph/assetgraph/pull/655) Update urltools to version 0.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#646](https://github.com/assetgraph/assetgraph/pull/646) webpack: add support for publicPath output options ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [#651](https://github.com/assetgraph/assetgraph/pull/651) Update webpack to version 1.13.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#650](https://github.com/assetgraph/assetgraph/pull/650) Update jsdom to version 9.8.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#644](https://github.com/assetgraph/assetgraph/pull/644) Update uglify-js to version 2.7.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#642](https://github.com/assetgraph/assetgraph/pull/642) Model \(self-\)relations whose href is the empty string or \#fragment ([Andreas Lind](mailto:andreas@one.com))
- [#640](https://github.com/assetgraph/assetgraph/pull/640) Don't include a document fragment in the asset url, treat it as part of the relation href ([Andreas Lind](mailto:andreas@one.com))
- [#641](https://github.com/assetgraph/assetgraph/pull/641) Rate limit file command ([Andreas Lind](mailto:andreas@one.com))
- [#639](https://github.com/assetgraph/assetgraph/pull/639) Update jsdom to version 9.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#626](https://github.com/assetgraph/assetgraph/pull/626) Add ability to handle canonical relative urls ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#630](https://github.com/assetgraph/assetgraph/pull/630) Support independent conditional layers ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#633](https://github.com/assetgraph/assetgraph/pull/633) Update jsdom to version 9.6.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#631](https://github.com/assetgraph/assetgraph/pull/631) Update perfectionist to version 2.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#629](https://github.com/assetgraph/assetgraph/pull/629) Update svgo to version 0.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#625](https://github.com/assetgraph/assetgraph/pull/625) Feature\/multiple condition values to trace ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#624](https://github.com/assetgraph/assetgraph/pull/624) Update requirejs to version 2.3.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#623](https://github.com/assetgraph/assetgraph/pull/623) Add relation\/HtmlServiceWorkerRegistration. Closes \#493 ([Peter Müller](mailto:munter@fumle.dk))
- [#622](https://github.com/assetgraph/assetgraph/pull/622) Implement open graph relations support ([Peter Müller](mailto:munter@fumle.dk))
- [#621](https://github.com/assetgraph/assetgraph/pull/621) Implement relation\/HtmlPreconnectLink. Closes \#613 ([Peter Müller](mailto:munter@fumle.dk))
- [#620](https://github.com/assetgraph/assetgraph/pull/620) Implement relation\/HtmlDnsPrefetchLink ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#618](https://github.com/assetgraph/assetgraph/pull/618) reviewContentSecurityPolicy: Issue absolute links when updating the CSP instead of whitelisting whole host names. ([Andreas Lind](mailto:andreas@one.com))
- [#619](https://github.com/assetgraph/assetgraph/pull/619) Add relations\/HtmlPrerenderLink. Closes \#611 ([Peter Müller](mailto:munter@fumle.dk))
- [#617](https://github.com/assetgraph/assetgraph/pull/617) Feature\/html prefetch link ([Peter Müller](mailto:munter@fumle.dk))
- [#616](https://github.com/assetgraph/assetgraph/pull/616) Feature\/html preload link ([Peter Müller](mailto:munter@fumle.dk))
- [#604](https://github.com/assetgraph/assetgraph/pull/604) Update esprima to version 3.0.0 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#609](https://github.com/assetgraph/assetgraph/pull/609) Update postcss to version 5.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#603](https://github.com/assetgraph/assetgraph/pull/603) Add support for builds with multiple system.js conditions ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#608](https://github.com/assetgraph/assetgraph/pull/608) Update requirejs to version 2.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#607](https://github.com/assetgraph/assetgraph/pull/607) Update perfectionist to version 2.3.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#606](https://github.com/assetgraph/assetgraph/pull/606) Update requirejs to version 2.3.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#605](https://github.com/assetgraph/assetgraph/pull/605) Update jsdom to version 9.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#602](https://github.com/assetgraph/assetgraph/pull/602) Update bluebird to version 3.4.6 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#601](https://github.com/assetgraph/assetgraph/pull/601) Update bluebird to version 3.4.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#597](https://github.com/assetgraph/assetgraph/pull/597) Update bluebird to version 3.4.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#600](https://github.com/assetgraph/assetgraph/pull/600) Update jsdom to version 9.4.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#595](https://github.com/assetgraph/assetgraph/pull/595) unexpected-mitm@9.2.0 breaks build ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#592](https://github.com/assetgraph/assetgraph/pull/592) Update jsdom to 9.4.2. ([Andreas Lind](mailto:andreas@one.com))
- [#593](https://github.com/assetgraph/assetgraph/pull/593) Update perfectionist to version 2.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#589](https://github.com/assetgraph/assetgraph/pull/589) Update normalizeurl to version 1.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#588](https://github.com/assetgraph/assetgraph/pull/588) Update webpack to version 1.13.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#587](https://github.com/assetgraph/assetgraph/pull/587) Update uglify-js to version 2.7.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#586](https://github.com/assetgraph/assetgraph/pull/586) unexpected-mitm@9.1.4 untested ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#585](https://github.com/assetgraph/assetgraph/pull/585) Update uglify-js to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#583](https://github.com/assetgraph/assetgraph/pull/583) Update uglify-js to version 2.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#582](https://github.com/assetgraph/assetgraph/pull/582) Html anchor no blank opener ([Peter Müller](mailto:munter@fumle.dk))
- [#581](https://github.com/assetgraph/assetgraph/pull/581) Update mocha to version 3.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#579](https://github.com/assetgraph/assetgraph/pull/579) Update perfectionist to version 2.1.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#563](https://github.com/assetgraph/assetgraph/pull/563) Add webpack support ([Andreas Lind](mailto:andreas@one.com))
- [#575](https://github.com/assetgraph/assetgraph/pull/575) semver@5.3.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#573](https://github.com/assetgraph/assetgraph/pull/573) Update postcss to version 5.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#568](https://github.com/assetgraph/assetgraph/pull/568) Update eslint to version 3.0.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#565](https://github.com/assetgraph/assetgraph/pull/565) Remove support for transpiling ([Andreas Lind](mailto:andreas@one.com))
- [#564](https://github.com/assetgraph/assetgraph/pull/564) Simplify base asset resolution and housekeeping ([Andreas Lind](mailto:andreas@one.com))
- [#562](https://github.com/assetgraph/assetgraph/pull/562) Web worker support ([Andreas Lind](mailto:andreas@one.com))
- [#567](https://github.com/assetgraph/assetgraph/pull/567) Update uglify-js to version 2.7.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#566](https://github.com/assetgraph/assetgraph/pull/566) relations\/JavaScriptFetch implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#561](https://github.com/assetgraph/assetgraph/pull/561) Update eslint to version 3.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#560](https://github.com/assetgraph/assetgraph/pull/560) teepee@2.23.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#547](https://github.com/assetgraph/assetgraph/pull/547) Rework require.js bundling support ([Andreas Lind](mailto:andreas@one.com))

#### Commits to master

- [Add support for new AssetGraph\({disableFetch: true}\) to disable the JavaScriptFetch relation](https://github.com/assetgraph/assetgraph/commit/c229c92d67550ca81080b4c5f065d1c1cffe09f1) ([Andreas Lind](mailto:andreas@one.com))
- [eslintrc: Permit es6 syntax so we can at least use the features supported by node.js 4 in v3](https://github.com/assetgraph/assetgraph/commit/8a70a004a8bc3b568903e35515358fb67c6fd83f) ([Andreas Lind](mailto:andreas@one.com))
- [logEvents: Mention the name of the failing transform when exiting early due to stopOnWarning](https://github.com/assetgraph/assetgraph/commit/a8c0a6eb1e62470bc49e44e50fb7b148029e80fb) ([Andreas Lind](mailto:andreas@one.com))
- [bundleWebpack: Disable mangling and compression when UglifyJsPlugin is detected so that we can detect relations in the generated webpack loader](https://github.com/assetgraph/assetgraph/commit/253d1b430511928d840506ff73662ac995774889) ([Andreas Lind](mailto:andreas@one.com))
- [bundleWebpack: Add support for rewriting to JavaScriptStaticUrl when webpack is configured with a chunkFilename config](https://github.com/assetgraph/assetgraph/commit/68c9ff2eeba8a69c66361a4dc62be123bc3f25ab) ([Andreas Lind](mailto:andreas@one.com))
- [+241 more](https://github.com/assetgraph/assetgraph/compare/v2.17.1...v3.5.0)

### v2.17.1 (2017-05-24)
- [Replace html-minifier with html-minifier-papandreou](https://github.com/assetgraph/assetgraph/commit/7b9c07d0f9d5e1cf08e0b33d18b4ecfdac932411) ([Andreas Lind](mailto:andreas@one.com))

### v3.3.0 (2017-05-22)

#### Pull requests

- [#747](https://github.com/assetgraph/assetgraph/pull/747) Simplify HTML minification and allow customizing it ([Andreas Lind](mailto:andreas@one.com))
- [#740](https://github.com/assetgraph/assetgraph/pull/740) Update uglify-js to version 3.0.3 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#738](https://github.com/assetgraph/assetgraph/pull/738) Update postcss to version 6.0.1 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#736](https://github.com/assetgraph/assetgraph/pull/736) Update autoprefixer to version 7.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#734](https://github.com/assetgraph/assetgraph/pull/734) Update httpception to version 0.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#733](https://github.com/assetgraph/assetgraph/pull/733) Update style-loader to version 0.17.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#728](https://github.com/assetgraph/assetgraph/pull/728) Insert HtmlScript bundles at the point of the last asset in the bundl… ([Peter Müller](mailto:munter@fumle.dk))
- [#652](https://github.com/assetgraph/assetgraph/pull/652) Make relations owned by the asset containing them ([Andreas Lind](mailto:andreas@one.com))
- [#726](https://github.com/assetgraph/assetgraph/pull/726) Update eslint to version 3.19.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#725](https://github.com/assetgraph/assetgraph/pull/725) Update file-loader to version 0.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#720](https://github.com/assetgraph/assetgraph/pull/720) Pick up .html files output by HtmlWebpackPlugin ([Andreas Lind](mailto:andreas@one.com))
- [#724](https://github.com/assetgraph/assetgraph/pull/724) Update css-loader to version 0.28.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#723](https://github.com/assetgraph/assetgraph/pull/723) Webpack 2 compatibility ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#715](https://github.com/assetgraph/assetgraph/pull/715) When esprima.parse\(text, {..., sourceType: 'module'}\) fails, try falling back to sourceType: 'script' ([Andreas Lind](mailto:andreas@one.com))
- [#719](https://github.com/assetgraph/assetgraph/pull/719) Update style-loader to version 0.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#722](https://github.com/assetgraph/assetgraph/pull/722) Update uglify-js to version 2.8.18 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#717](https://github.com/assetgraph/assetgraph/pull/717) Support webpack code splitting ([Andreas Lind](mailto:andreas@one.com))
- [#716](https://github.com/assetgraph/assetgraph/pull/716) bundleWebpack: Only build the bundles that are referenced by relations ([Andreas Lind](mailto:andreas@one.com))
- [#712](https://github.com/assetgraph/assetgraph/pull/712) ES6 support ([Andreas Lind](mailto:andreas@one.com))
- [#714](https://github.com/assetgraph/assetgraph/pull/714) Update httpception to version 0.4.1 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#710](https://github.com/assetgraph/assetgraph/pull/710) Fix relation canonical getter ([Peter Müller](mailto:munter@fumle.dk))
- [#707](https://github.com/assetgraph/assetgraph/pull/707) Update uglify-js to version 2.8.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#706](https://github.com/assetgraph/assetgraph/pull/706) Update eslint to version 3.18.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#705](https://github.com/assetgraph/assetgraph/pull/705) Update uglify-js to version 2.8.13 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#704](https://github.com/assetgraph/assetgraph/pull/704) Update sinon to version 2.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#703](https://github.com/assetgraph/assetgraph/pull/703) Update jsdom to version 9.12.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#697](https://github.com/assetgraph/assetgraph/pull/697) Update uglify-js to version 2.8.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#688](https://github.com/assetgraph/assetgraph/pull/688) Update requirejs to version 2.3.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#690](https://github.com/assetgraph/assetgraph/pull/690) Update eslint to version 3.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#696](https://github.com/assetgraph/assetgraph/pull/696) Update uglify-js to version 2.8.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#693](https://github.com/assetgraph/assetgraph/pull/693) Update uglify-js to version 2.8.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#686](https://github.com/assetgraph/assetgraph/pull/686) unexpected@10.26.0 breaks build 🚨 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#687](https://github.com/assetgraph/assetgraph/pull/687) Implement relations\/MsApplicationConfigPollingUri. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#684](https://github.com/assetgraph/assetgraph/pull/684) Added relations\/MsApplicationConfigImage. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#685](https://github.com/assetgraph/assetgraph/pull/685) Update jsdom to version 9.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#683](https://github.com/assetgraph/assetgraph/pull/683) Implement assets\/MsApplicationConfig. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#682](https://github.com/assetgraph/assetgraph/pull/682) Added relations\/HtmlMsAppllicationConfig. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#681](https://github.com/assetgraph/assetgraph/pull/681) Update jsdom to version 9.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#680](https://github.com/assetgraph/assetgraph/pull/680) Update eslint to version 3.15.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#677](https://github.com/assetgraph/assetgraph/pull/677) Update systemjs-builder to version 0.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#676](https://github.com/assetgraph/assetgraph/pull/676) Update svgo to version 0.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#675](https://github.com/assetgraph/assetgraph/pull/675) Update file-loader to version 0.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#674](https://github.com/assetgraph/assetgraph/pull/674) Update eslint to version 3.14.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#669](https://github.com/assetgraph/assetgraph/pull/669) Update perfectionist to version 2.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#668](https://github.com/assetgraph/assetgraph/pull/668) Update less to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#667](https://github.com/assetgraph/assetgraph/pull/667) Implement transform to inline critical CSS rules ([Peter Müller](mailto:munter@fumle.dk))
- [#666](https://github.com/assetgraph/assetgraph/pull/666) Update bluebird to version 3.4.7 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#654](https://github.com/assetgraph/assetgraph/pull/654) html-minifier@3.2.1 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#665](https://github.com/assetgraph/assetgraph/pull/665) Update jsdom to version 9.9.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#663](https://github.com/assetgraph/assetgraph/pull/663) Fix code formatting to please ESLint 3.12 ([Ariya Hidayat](mailto:ariya.hidayat@gmail.com))
- [#661](https://github.com/assetgraph/assetgraph/pull/661) Update webpack to version 1.14.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#660](https://github.com/assetgraph/assetgraph/pull/660) Update uglify-js to version 2.7.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#655](https://github.com/assetgraph/assetgraph/pull/655) Update urltools to version 0.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#646](https://github.com/assetgraph/assetgraph/pull/646) webpack: add support for publicPath output options ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [#651](https://github.com/assetgraph/assetgraph/pull/651) Update webpack to version 1.13.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#650](https://github.com/assetgraph/assetgraph/pull/650) Update jsdom to version 9.8.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#644](https://github.com/assetgraph/assetgraph/pull/644) Update uglify-js to version 2.7.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#642](https://github.com/assetgraph/assetgraph/pull/642) Model \(self-\)relations whose href is the empty string or \#fragment ([Andreas Lind](mailto:andreas@one.com))
- [#640](https://github.com/assetgraph/assetgraph/pull/640) Don't include a document fragment in the asset url, treat it as part of the relation href ([Andreas Lind](mailto:andreas@one.com))
- [#641](https://github.com/assetgraph/assetgraph/pull/641) Rate limit file command ([Andreas Lind](mailto:andreas@one.com))
- [#639](https://github.com/assetgraph/assetgraph/pull/639) Update jsdom to version 9.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#626](https://github.com/assetgraph/assetgraph/pull/626) Add ability to handle canonical relative urls ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#630](https://github.com/assetgraph/assetgraph/pull/630) Support independent conditional layers ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#633](https://github.com/assetgraph/assetgraph/pull/633) Update jsdom to version 9.6.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#631](https://github.com/assetgraph/assetgraph/pull/631) Update perfectionist to version 2.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#629](https://github.com/assetgraph/assetgraph/pull/629) Update svgo to version 0.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#625](https://github.com/assetgraph/assetgraph/pull/625) Feature\/multiple condition values to trace ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#624](https://github.com/assetgraph/assetgraph/pull/624) Update requirejs to version 2.3.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#623](https://github.com/assetgraph/assetgraph/pull/623) Add relation\/HtmlServiceWorkerRegistration. Closes \#493 ([Peter Müller](mailto:munter@fumle.dk))
- [#622](https://github.com/assetgraph/assetgraph/pull/622) Implement open graph relations support ([Peter Müller](mailto:munter@fumle.dk))
- [#621](https://github.com/assetgraph/assetgraph/pull/621) Implement relation\/HtmlPreconnectLink. Closes \#613 ([Peter Müller](mailto:munter@fumle.dk))
- [#620](https://github.com/assetgraph/assetgraph/pull/620) Implement relation\/HtmlDnsPrefetchLink ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#618](https://github.com/assetgraph/assetgraph/pull/618) reviewContentSecurityPolicy: Issue absolute links when updating the CSP instead of whitelisting whole host names. ([Andreas Lind](mailto:andreas@one.com))
- [#619](https://github.com/assetgraph/assetgraph/pull/619) Add relations\/HtmlPrerenderLink. Closes \#611 ([Peter Müller](mailto:munter@fumle.dk))
- [#617](https://github.com/assetgraph/assetgraph/pull/617) Feature\/html prefetch link ([Peter Müller](mailto:munter@fumle.dk))
- [#616](https://github.com/assetgraph/assetgraph/pull/616) Feature\/html preload link ([Peter Müller](mailto:munter@fumle.dk))
- [#604](https://github.com/assetgraph/assetgraph/pull/604) Update esprima to version 3.0.0 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#609](https://github.com/assetgraph/assetgraph/pull/609) Update postcss to version 5.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#603](https://github.com/assetgraph/assetgraph/pull/603) Add support for builds with multiple system.js conditions ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#608](https://github.com/assetgraph/assetgraph/pull/608) Update requirejs to version 2.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#607](https://github.com/assetgraph/assetgraph/pull/607) Update perfectionist to version 2.3.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#606](https://github.com/assetgraph/assetgraph/pull/606) Update requirejs to version 2.3.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#605](https://github.com/assetgraph/assetgraph/pull/605) Update jsdom to version 9.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#602](https://github.com/assetgraph/assetgraph/pull/602) Update bluebird to version 3.4.6 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#601](https://github.com/assetgraph/assetgraph/pull/601) Update bluebird to version 3.4.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#597](https://github.com/assetgraph/assetgraph/pull/597) Update bluebird to version 3.4.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#600](https://github.com/assetgraph/assetgraph/pull/600) Update jsdom to version 9.4.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#595](https://github.com/assetgraph/assetgraph/pull/595) unexpected-mitm@9.2.0 breaks build ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#592](https://github.com/assetgraph/assetgraph/pull/592) Update jsdom to 9.4.2. ([Andreas Lind](mailto:andreas@one.com))
- [#593](https://github.com/assetgraph/assetgraph/pull/593) Update perfectionist to version 2.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#589](https://github.com/assetgraph/assetgraph/pull/589) Update normalizeurl to version 1.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#588](https://github.com/assetgraph/assetgraph/pull/588) Update webpack to version 1.13.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#587](https://github.com/assetgraph/assetgraph/pull/587) Update uglify-js to version 2.7.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#586](https://github.com/assetgraph/assetgraph/pull/586) unexpected-mitm@9.1.4 untested ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#585](https://github.com/assetgraph/assetgraph/pull/585) Update uglify-js to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#583](https://github.com/assetgraph/assetgraph/pull/583) Update uglify-js to version 2.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#582](https://github.com/assetgraph/assetgraph/pull/582) Html anchor no blank opener ([Peter Müller](mailto:munter@fumle.dk))
- [#581](https://github.com/assetgraph/assetgraph/pull/581) Update mocha to version 3.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#579](https://github.com/assetgraph/assetgraph/pull/579) Update perfectionist to version 2.1.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#563](https://github.com/assetgraph/assetgraph/pull/563) Add webpack support ([Andreas Lind](mailto:andreas@one.com))
- [#575](https://github.com/assetgraph/assetgraph/pull/575) semver@5.3.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#573](https://github.com/assetgraph/assetgraph/pull/573) Update postcss to version 5.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#568](https://github.com/assetgraph/assetgraph/pull/568) Update eslint to version 3.0.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#565](https://github.com/assetgraph/assetgraph/pull/565) Remove support for transpiling ([Andreas Lind](mailto:andreas@one.com))
- [#564](https://github.com/assetgraph/assetgraph/pull/564) Simplify base asset resolution and housekeeping ([Andreas Lind](mailto:andreas@one.com))
- [#562](https://github.com/assetgraph/assetgraph/pull/562) Web worker support ([Andreas Lind](mailto:andreas@one.com))
- [#567](https://github.com/assetgraph/assetgraph/pull/567) Update uglify-js to version 2.7.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#566](https://github.com/assetgraph/assetgraph/pull/566) relations\/JavaScriptFetch implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#561](https://github.com/assetgraph/assetgraph/pull/561) Update eslint to version 3.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#560](https://github.com/assetgraph/assetgraph/pull/560) teepee@2.23.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#547](https://github.com/assetgraph/assetgraph/pull/547) Rework require.js bundling support ([Andreas Lind](mailto:andreas@one.com))

#### Commits to master

- [compressJavaScript: Report the line and column number when UglifyJS cannot parse the source code](https://github.com/assetgraph/assetgraph/commit/95921f3e4d84b01ea97d90a02b30fe98492a7aa6) ([Andreas Lind](mailto:andreas@one.com))
- [Fix: Getting the .text of an unloaded CSS asset causes a stack overflow, but it should just return undefined](https://github.com/assetgraph/assetgraph/commit/3068e125ac0708f4a4066faf0647df4ef1941d6f) ([Andreas Lind](mailto:andreas@one.com))
- [writeStatsToStderr: Render the extension of assets that aren't directly supported \(instead of "Asset"\)](https://github.com/assetgraph/assetgraph/commit/c86e5c16e031e61075582871baa2400da7ee810c) ([Andreas Lind](mailto:andreas@one.com))
- [Asset\#dataUrl: Don't percent-encode the comma character.](https://github.com/assetgraph/assetgraph/commit/1206e4525b648224a5c7774655e053dd70f8e348) ([Andreas Lind](mailto:andreas@one.com))
- [bundleWebpack: Don't skip every other outgoing relation when reattaching relations.](https://github.com/assetgraph/assetgraph/commit/19c5f9ee5d95c001d39e183187d5fb481378fa80) ([Andreas Lind](mailto:andreas@one.com))
- [+235 more](https://github.com/assetgraph/assetgraph/compare/v2.17.0...v3.3.0)

### v2.17.0 (2017-05-22)
- [Add test tracking the ability to selectively turn off whitespace trimming per element](https://github.com/assetgraph/assetgraph/commit/b5c54c249d62e7a4a107ae3a138a070d7a37e6da) ([Andreas Lind](mailto:andreas@one.com))
- [Allow overriding the HTML minifier options per asset](https://github.com/assetgraph/assetgraph/commit/93181b3bf0c528e7f3039a97749c76503e2de752) ([Andreas Lind](mailto:andreas@one.com))
- [Drop our custom HTML minifaction code and just rely on html-minifier's](https://github.com/assetgraph/assetgraph/commit/cf6b963ae7efe0ea6b4cef34b2eb8509aef62edc) ([Andreas Lind](mailto:andreas@one.com))
- [Update html-minifier to ^3.5.1](https://github.com/assetgraph/assetgraph/commit/a4ce1d7a057a8b677ed0783dc083abb2a09744bd) ([Andreas Lind](mailto:andreas@one.com))

### v2.16.1 (2017-05-17)
- [Don't change any "metadata" asset properties to undefined upon loading the asset.](https://github.com/assetgraph/assetgraph/commit/0887b45b7062e6f42efe29420d2e0aef7136c2ad) ([Andreas Lind](mailto:andreas@one.com))

### v2.16.0 (2017-05-17)
- [Travis: Drop node.js 1, 2, and 3 support as it started to fail randomly.](https://github.com/assetgraph/assetgraph/commit/915e73165bc7b8557feab67e834f2a330ce063f7) ([Andreas Lind](mailto:andreas@one.com))
- [Allow define to be leaked \(revert on master\).](https://github.com/assetgraph/assetgraph/commit/cd30db82225f383ce3f0c4ab753686551f49beea) ([Andreas Lind](mailto:andreas@one.com))

### v3.2.0 (2017-05-12)

#### Pull requests

- [#740](https://github.com/assetgraph/assetgraph/pull/740) Update uglify-js to version 3.0.3 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#738](https://github.com/assetgraph/assetgraph/pull/738) Update postcss to version 6.0.1 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#736](https://github.com/assetgraph/assetgraph/pull/736) Update autoprefixer to version 7.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#734](https://github.com/assetgraph/assetgraph/pull/734) Update httpception to version 0.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#733](https://github.com/assetgraph/assetgraph/pull/733) Update style-loader to version 0.17.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [compressJavaScript: Report the line and column number when UglifyJS cannot parse the source code](https://github.com/assetgraph/assetgraph/commit/95921f3e4d84b01ea97d90a02b30fe98492a7aa6) ([Andreas Lind](mailto:andreas@one.com))
- [Fix: Getting the .text of an unloaded CSS asset causes a stack overflow, but it should just return undefined](https://github.com/assetgraph/assetgraph/commit/3068e125ac0708f4a4066faf0647df4ef1941d6f) ([Andreas Lind](mailto:andreas@one.com))
- [writeStatsToStderr: Render the extension of assets that aren't directly supported \(instead of "Asset"\)](https://github.com/assetgraph/assetgraph/commit/c86e5c16e031e61075582871baa2400da7ee810c) ([Andreas Lind](mailto:andreas@one.com))
- [Asset\#dataUrl: Don't percent-encode the comma character.](https://github.com/assetgraph/assetgraph/commit/1206e4525b648224a5c7774655e053dd70f8e348) ([Andreas Lind](mailto:andreas@one.com))
- [bundleWebpack: Don't skip every other outgoing relation when reattaching relations.](https://github.com/assetgraph/assetgraph/commit/19c5f9ee5d95c001d39e183187d5fb481378fa80) ([Andreas Lind](mailto:andreas@one.com))
- [+1 more](https://github.com/assetgraph/assetgraph/compare/v3.1.0...v3.2.0)

### v3.1.0 (2017-04-11)
- [#728](https://github.com/assetgraph/assetgraph/pull/728) Insert HtmlScript bundles at the point of the last asset in the bundl… ([Peter Müller](mailto:munter@fumle.dk))

### v3.0.1 (2017-04-11)
- [Asset\#unload: Fix cleanup of inline assets](https://github.com/assetgraph/assetgraph/commit/51b3bada64c28fa56178a08f123681afece5f18c) ([Andreas Lind](mailto:andreas@one.com))
- [Travis: Build with node.js 7](https://github.com/assetgraph/assetgraph/commit/626b26090232c9a8fc9937fc8aca4951b95c094e) ([Andreas Lind](mailto:andreas@one.com))
- [Css asset: Fix copy\/paste error in fallback sourceUrl.](https://github.com/assetgraph/assetgraph/commit/9aa0cfec72da28e1c30ed16ca629c5b2226c48e6) ([Andreas Lind](mailto:andreas@one.com))
- [package.json: Remove beta tag.](https://github.com/assetgraph/assetgraph/commit/5e11d64f9be83c022bb326c111fbb6d21bfe29d5) ([Andreas Lind](mailto:andreas@one.com))

### v3.0.0 (2017-04-10)

#### Pull requests

- [#652](https://github.com/assetgraph/assetgraph/pull/652) Make relations owned by the asset containing them ([Andreas Lind](mailto:andreas@one.com))
- [#726](https://github.com/assetgraph/assetgraph/pull/726) Update eslint to version 3.19.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#725](https://github.com/assetgraph/assetgraph/pull/725) Update file-loader to version 0.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#720](https://github.com/assetgraph/assetgraph/pull/720) Pick up .html files output by HtmlWebpackPlugin ([Andreas Lind](mailto:andreas@one.com))
- [#724](https://github.com/assetgraph/assetgraph/pull/724) Update css-loader to version 0.28.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#723](https://github.com/assetgraph/assetgraph/pull/723) Webpack 2 compatibility ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#715](https://github.com/assetgraph/assetgraph/pull/715) When esprima.parse\(text, {..., sourceType: 'module'}\) fails, try falling back to sourceType: 'script' ([Andreas Lind](mailto:andreas@one.com))
- [#719](https://github.com/assetgraph/assetgraph/pull/719) Update style-loader to version 0.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#722](https://github.com/assetgraph/assetgraph/pull/722) Update uglify-js to version 2.8.18 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#717](https://github.com/assetgraph/assetgraph/pull/717) Support webpack code splitting ([Andreas Lind](mailto:andreas@one.com))
- [#716](https://github.com/assetgraph/assetgraph/pull/716) bundleWebpack: Only build the bundles that are referenced by relations ([Andreas Lind](mailto:andreas@one.com))
- [#712](https://github.com/assetgraph/assetgraph/pull/712) ES6 support ([Andreas Lind](mailto:andreas@one.com))
- [#714](https://github.com/assetgraph/assetgraph/pull/714) Update httpception to version 0.4.1 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#710](https://github.com/assetgraph/assetgraph/pull/710) Fix relation canonical getter ([Peter Müller](mailto:munter@fumle.dk))
- [#707](https://github.com/assetgraph/assetgraph/pull/707) Update uglify-js to version 2.8.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#706](https://github.com/assetgraph/assetgraph/pull/706) Update eslint to version 3.18.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#705](https://github.com/assetgraph/assetgraph/pull/705) Update uglify-js to version 2.8.13 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#704](https://github.com/assetgraph/assetgraph/pull/704) Update sinon to version 2.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#703](https://github.com/assetgraph/assetgraph/pull/703) Update jsdom to version 9.12.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#697](https://github.com/assetgraph/assetgraph/pull/697) Update uglify-js to version 2.8.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#688](https://github.com/assetgraph/assetgraph/pull/688) Update requirejs to version 2.3.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#690](https://github.com/assetgraph/assetgraph/pull/690) Update eslint to version 3.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#696](https://github.com/assetgraph/assetgraph/pull/696) Update uglify-js to version 2.8.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#693](https://github.com/assetgraph/assetgraph/pull/693) Update uglify-js to version 2.8.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#686](https://github.com/assetgraph/assetgraph/pull/686) unexpected@10.26.0 breaks build 🚨 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#687](https://github.com/assetgraph/assetgraph/pull/687) Implement relations\/MsApplicationConfigPollingUri. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#684](https://github.com/assetgraph/assetgraph/pull/684) Added relations\/MsApplicationConfigImage. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#685](https://github.com/assetgraph/assetgraph/pull/685) Update jsdom to version 9.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#683](https://github.com/assetgraph/assetgraph/pull/683) Implement assets\/MsApplicationConfig. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#682](https://github.com/assetgraph/assetgraph/pull/682) Added relations\/HtmlMsAppllicationConfig. Refs \#636 ([Peter Müller](mailto:munter@fumle.dk))
- [#681](https://github.com/assetgraph/assetgraph/pull/681) Update jsdom to version 9.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#680](https://github.com/assetgraph/assetgraph/pull/680) Update eslint to version 3.15.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#677](https://github.com/assetgraph/assetgraph/pull/677) Update systemjs-builder to version 0.16.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#676](https://github.com/assetgraph/assetgraph/pull/676) Update svgo to version 0.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#675](https://github.com/assetgraph/assetgraph/pull/675) Update file-loader to version 0.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#674](https://github.com/assetgraph/assetgraph/pull/674) Update eslint to version 3.14.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#669](https://github.com/assetgraph/assetgraph/pull/669) Update perfectionist to version 2.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#668](https://github.com/assetgraph/assetgraph/pull/668) Update less to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#667](https://github.com/assetgraph/assetgraph/pull/667) Implement transform to inline critical CSS rules ([Peter Müller](mailto:munter@fumle.dk))
- [#666](https://github.com/assetgraph/assetgraph/pull/666) Update bluebird to version 3.4.7 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#654](https://github.com/assetgraph/assetgraph/pull/654) html-minifier@3.2.1 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#665](https://github.com/assetgraph/assetgraph/pull/665) Update jsdom to version 9.9.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#663](https://github.com/assetgraph/assetgraph/pull/663) Fix code formatting to please ESLint 3.12 ([Ariya Hidayat](mailto:ariya.hidayat@gmail.com))
- [#661](https://github.com/assetgraph/assetgraph/pull/661) Update webpack to version 1.14.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#660](https://github.com/assetgraph/assetgraph/pull/660) Update uglify-js to version 2.7.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#655](https://github.com/assetgraph/assetgraph/pull/655) Update urltools to version 0.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#646](https://github.com/assetgraph/assetgraph/pull/646) webpack: add support for publicPath output options ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [#651](https://github.com/assetgraph/assetgraph/pull/651) Update webpack to version 1.13.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#650](https://github.com/assetgraph/assetgraph/pull/650) Update jsdom to version 9.8.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#644](https://github.com/assetgraph/assetgraph/pull/644) Update uglify-js to version 2.7.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#642](https://github.com/assetgraph/assetgraph/pull/642) Model \(self-\)relations whose href is the empty string or \#fragment ([Andreas Lind](mailto:andreas@one.com))
- [#640](https://github.com/assetgraph/assetgraph/pull/640) Don't include a document fragment in the asset url, treat it as part of the relation href ([Andreas Lind](mailto:andreas@one.com))
- [#641](https://github.com/assetgraph/assetgraph/pull/641) Rate limit file command ([Andreas Lind](mailto:andreas@one.com))
- [#639](https://github.com/assetgraph/assetgraph/pull/639) Update jsdom to version 9.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#626](https://github.com/assetgraph/assetgraph/pull/626) Add ability to handle canonical relative urls ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#630](https://github.com/assetgraph/assetgraph/pull/630) Support independent conditional layers ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#633](https://github.com/assetgraph/assetgraph/pull/633) Update jsdom to version 9.6.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#631](https://github.com/assetgraph/assetgraph/pull/631) Update perfectionist to version 2.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#629](https://github.com/assetgraph/assetgraph/pull/629) Update svgo to version 0.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#625](https://github.com/assetgraph/assetgraph/pull/625) Feature\/multiple condition values to trace ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#624](https://github.com/assetgraph/assetgraph/pull/624) Update requirejs to version 2.3.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#623](https://github.com/assetgraph/assetgraph/pull/623) Add relation\/HtmlServiceWorkerRegistration. Closes \#493 ([Peter Müller](mailto:munter@fumle.dk))
- [#622](https://github.com/assetgraph/assetgraph/pull/622) Implement open graph relations support ([Peter Müller](mailto:munter@fumle.dk))
- [#621](https://github.com/assetgraph/assetgraph/pull/621) Implement relation\/HtmlPreconnectLink. Closes \#613 ([Peter Müller](mailto:munter@fumle.dk))
- [#620](https://github.com/assetgraph/assetgraph/pull/620) Implement relation\/HtmlDnsPrefetchLink ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#618](https://github.com/assetgraph/assetgraph/pull/618) reviewContentSecurityPolicy: Issue absolute links when updating the CSP instead of whitelisting whole host names. ([Andreas Lind](mailto:andreas@one.com))
- [#619](https://github.com/assetgraph/assetgraph/pull/619) Add relations\/HtmlPrerenderLink. Closes \#611 ([Peter Müller](mailto:munter@fumle.dk))
- [#617](https://github.com/assetgraph/assetgraph/pull/617) Feature\/html prefetch link ([Peter Müller](mailto:munter@fumle.dk))
- [#616](https://github.com/assetgraph/assetgraph/pull/616) Feature\/html preload link ([Peter Müller](mailto:munter@fumle.dk))
- [#604](https://github.com/assetgraph/assetgraph/pull/604) Update esprima to version 3.0.0 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#609](https://github.com/assetgraph/assetgraph/pull/609) Update postcss to version 5.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#603](https://github.com/assetgraph/assetgraph/pull/603) Add support for builds with multiple system.js conditions ([Andreas Lind](mailto:andreas@one.com), [guybedford](mailto:guybedford@gmail.com))
- [#608](https://github.com/assetgraph/assetgraph/pull/608) Update requirejs to version 2.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#607](https://github.com/assetgraph/assetgraph/pull/607) Update perfectionist to version 2.3.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#606](https://github.com/assetgraph/assetgraph/pull/606) Update requirejs to version 2.3.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#605](https://github.com/assetgraph/assetgraph/pull/605) Update jsdom to version 9.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#602](https://github.com/assetgraph/assetgraph/pull/602) Update bluebird to version 3.4.6 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#601](https://github.com/assetgraph/assetgraph/pull/601) Update bluebird to version 3.4.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#597](https://github.com/assetgraph/assetgraph/pull/597) Update bluebird to version 3.4.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#600](https://github.com/assetgraph/assetgraph/pull/600) Update jsdom to version 9.4.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#595](https://github.com/assetgraph/assetgraph/pull/595) unexpected-mitm@9.2.0 breaks build ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#592](https://github.com/assetgraph/assetgraph/pull/592) Update jsdom to 9.4.2. ([Andreas Lind](mailto:andreas@one.com))
- [#593](https://github.com/assetgraph/assetgraph/pull/593) Update perfectionist to version 2.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#589](https://github.com/assetgraph/assetgraph/pull/589) Update normalizeurl to version 1.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#588](https://github.com/assetgraph/assetgraph/pull/588) Update webpack to version 1.13.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#587](https://github.com/assetgraph/assetgraph/pull/587) Update uglify-js to version 2.7.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#586](https://github.com/assetgraph/assetgraph/pull/586) unexpected-mitm@9.1.4 untested ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#585](https://github.com/assetgraph/assetgraph/pull/585) Update uglify-js to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#583](https://github.com/assetgraph/assetgraph/pull/583) Update uglify-js to version 2.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#582](https://github.com/assetgraph/assetgraph/pull/582) Html anchor no blank opener ([Peter Müller](mailto:munter@fumle.dk))
- [#581](https://github.com/assetgraph/assetgraph/pull/581) Update mocha to version 3.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#579](https://github.com/assetgraph/assetgraph/pull/579) Update perfectionist to version 2.1.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#563](https://github.com/assetgraph/assetgraph/pull/563) Add webpack support ([Andreas Lind](mailto:andreas@one.com))
- [#575](https://github.com/assetgraph/assetgraph/pull/575) semver@5.3.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#573](https://github.com/assetgraph/assetgraph/pull/573) Update postcss to version 5.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#568](https://github.com/assetgraph/assetgraph/pull/568) Update eslint to version 3.0.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#565](https://github.com/assetgraph/assetgraph/pull/565) Remove support for transpiling ([Andreas Lind](mailto:andreas@one.com))
- [#564](https://github.com/assetgraph/assetgraph/pull/564) Simplify base asset resolution and housekeeping ([Andreas Lind](mailto:andreas@one.com))
- [#562](https://github.com/assetgraph/assetgraph/pull/562) Web worker support ([Andreas Lind](mailto:andreas@one.com))
- [#567](https://github.com/assetgraph/assetgraph/pull/567) Update uglify-js to version 2.7.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#566](https://github.com/assetgraph/assetgraph/pull/566) relations\/JavaScriptFetch implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#561](https://github.com/assetgraph/assetgraph/pull/561) Update eslint to version 3.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#560](https://github.com/assetgraph/assetgraph/pull/560) teepee@2.23.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#547](https://github.com/assetgraph/assetgraph/pull/547) Rework require.js bundling support ([Andreas Lind](mailto:andreas@one.com))

#### Commits to master

- [Fix grammar mistake in info message.](https://github.com/assetgraph/assetgraph/commit/121abdacec4ce7bc127c98df84b44bd4e8cd40c0) ([Andreas Lind](mailto:andreas@one.com))
- [Whoops, fix tests.](https://github.com/assetgraph/assetgraph/commit/49eb1ff2bb821833ca965120206c6292e95cacb7) ([Andreas Lind](mailto:andreas@one.com))
- [minifySvgAssetsWithSvgo: Specify a floatPrecision of 6 to avoid being too lossy](https://github.com/assetgraph/assetgraph/commit/bf5edf5b15c81a9dd7d65aab84faafe8bc813c4f) ([Andreas Lind](mailto:andreas@one.com))
- [Switch xmldom to a liberal version range](https://github.com/assetgraph/assetgraph/commit/f1d328dae4e4c01dadd52489642f06565dc9d85c) ([Andreas Lind](mailto:andreas@one.com))
- [Switch most dependencies over to liberal ranges.](https://github.com/assetgraph/assetgraph/commit/81fac4ef103bf742bfeced5ae9cd7367ca3fe8f2) ([Andreas Lind](mailto:andreas@one.com))
- [+225 more](https://github.com/assetgraph/assetgraph/compare/v2.15.3...v3.0.0)

### v2.15.3 (2017-02-23)
- [unexpectedAssetGraph: Fix unused parameter that Unexpected 10.26 complains about.](https://github.com/assetgraph/assetgraph/commit/bcc9f1fb140b1c64ffe5f6e1b43897b2e6712ecb) ([Andreas Lind](mailto:andreas@one.com))

### v2.15.2 (2017-01-10)
- [Update cssnano-paras20xx to 3.7.3-patch2.](https://github.com/assetgraph/assetgraph/commit/3861fab9acfd45af2ead691ff877335bfeff916d) ([Andreas Lind](mailto:andreas@one.com))
- [Update unexpected et al.](https://github.com/assetgraph/assetgraph/commit/aa77e967109396580f02eb116d1c8a47b1fd34c7) ([Andreas Lind](mailto:andreas@one.com))

### v2.15.1 (2016-11-21)
- [Update normalizeurl to 1.0.0.](https://github.com/assetgraph/assetgraph/commit/1d5c29d592a055567056df58b1a0abe42b662bc8) ([Andreas Lind](mailto:andreas@one.com))

### v2.15.0 (2016-11-21)
- [HtmlImageSrcSet: Fix tokenization when urls contain comma.](https://github.com/assetgraph/assetgraph/commit/7773c9015da093bba1706c0460dadea3f33bad0c) ([Andreas Lind](mailto:andreas@one.com))
- [Do not normalize unencoded commas, ampersands and pluses in urls \(it breaks the image processing pipeline\).](https://github.com/assetgraph/assetgraph/commit/332da8174cb653525b8b80e683cc451d07f4d463) ([Andreas Lind](mailto:andreas@one.com))
- [Update urltools to 0.3.1.](https://github.com/assetgraph/assetgraph/commit/25a749d0940215c333369dae878647b62a45508a) ([Andreas Lind](mailto:andreas@one.com))

### v2.14.0 (2016-08-10)
- [minifySvgAssetsWithSvgo: Avoid losing custom top-level &lt;svg&gt; attributes when minifying an &lt;svg&gt; island in HTML.](https://github.com/assetgraph/assetgraph/commit/6b67a11ca25df5e2c11ed863d22221f63fdd43da) ([Andreas Lind](mailto:andreas@one.com))

### v2.13.0 (2016-07-22)
- [Html: Fix JavaScript serialization options for HttpDataBindAttribute, HtmlKnockoutContainerless, and HtmlInlineEventHandler.](https://github.com/assetgraph/assetgraph/commit/9b43fd7bff1cd1295b0ac47722dfc8768fa07a19) ([Andreas Lind](mailto:andreas@one.com))

### v2.12.6 (2016-07-13)
- [Update cssnano-paras20xx to 3.7.3-patch1.](https://github.com/assetgraph/assetgraph/commit/db701f44d706e336afdda8f05843dbc210c6e7af) ([Andreas Lind](mailto:andreas@one.com))

### v2.12.5 (2016-07-07)
- [Css minification: Disable the normalizeUrl plugin for cssnano as it has some weird bugs.](https://github.com/assetgraph/assetgraph/commit/946abc48438aab9f8760f938fc1118208f6eb8f2) ([Andreas Lind](mailto:andreas@one.com))

### v2.12.4 (2016-07-06)
- [CssUrlTokenRelation.findUrlsInPropertyValue: Fix some important cases with escaped characters.](https://github.com/assetgraph/assetgraph/commit/44669e9dd9bc41059a759f0dfc38ed21a4312877) ([Andreas Lind](mailto:andreas@one.com))

### v2.12.3 (2016-07-04)
- [Stop using http:\/\/www.someexamplerssdomain.com\/ in tests. https:\/\/github.com\/assetgraph\/assetgraph\/pull\/560](https://github.com/assetgraph/assetgraph/commit/57f45693c137b52d73aa112883a1db491ce81b4f) ([Andreas Lind](mailto:andreas@one.com))
- [Revert "Re-land the seq =&gt; async replacement in loadAssets with a fix for the keepUnpopulated bug."](https://github.com/assetgraph/assetgraph/commit/9be1de46190f6f08baad608df72b5bba38adf638) ([Andreas Lind](mailto:andreas@one.com))

### v2.12.2 (2016-06-27)
- [Also use the new cloneWithRaws implementation in the splitCssIfIeLimitIsReached transform.](https://github.com/assetgraph/assetgraph/commit/24583ae1813bc9c786969fd638e5338f380f8db0) ([Andreas Lind](mailto:andreas@one.com))
- [Fix regression introduced in 5674fb1 \("raws" not passed to cssnano\).](https://github.com/assetgraph/assetgraph/commit/23dee0c58fec8eb81b21f7834e7623cb6fc9d5dd) ([Andreas Lind](mailto:andreas@one.com))

### v2.12.1 (2016-06-24)
- [Use postcss' built-in clone method instead \(the cloneWithRaws hack broke assetgraph-builder\).](https://github.com/assetgraph/assetgraph/commit/07f170b8cf1d33f91402c877da8de37e22340e07) ([Andreas Lind](mailto:andreas@one.com))

### v2.12.0 (2016-06-24)

#### Pull requests

- [#558](https://github.com/assetgraph/assetgraph/pull/558) Update uglify-js to version 2.6.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#557](https://github.com/assetgraph/assetgraph/pull/557) glob@7.0.5 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#556](https://github.com/assetgraph/assetgraph/pull/556) Update eslint to version 2.13.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#555](https://github.com/assetgraph/assetgraph/pull/555) Update uglify-js to version 2.6.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#554](https://github.com/assetgraph/assetgraph/pull/554) Update eslint to version 2.13.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#553](https://github.com/assetgraph/assetgraph/pull/553) Update systemjs-builder to version 0.15.23 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [Css.minify\(\): Prevent mangling of the parse tree.](https://github.com/assetgraph/assetgraph/commit/5674fb1ddc274070f6975e018fe01e5ed5c3d1d7) ([Andreas Lind](mailto:andreas@one.com))
- [Remove unused var.](https://github.com/assetgraph/assetgraph/commit/81a7a7547fa703246b1332d26d96dec0ff7142db) ([Andreas Lind](mailto:andreas@one.com))
- [Remove flaky http resolver tests that should be covered by the teepee test suite.](https://github.com/assetgraph/assetgraph/commit/0b098fb564264bb55c3867f931983daf75ba8a62) ([Andreas Lind](mailto:andreas@one.com))

### v2.11.1 (2016-06-15)
- [Update esanimate to 1.1.0.](https://github.com/assetgraph/assetgraph/commit/640ef6366465c27fca1cf5a1a686cee970f467d0) ([Andreas Lind](mailto:andreas@one.com))
- [Update jsdom-papandreou to 0.11.0-patch4.](https://github.com/assetgraph/assetgraph/commit/00a11d181d13bfacd3ee0a3be51b562e6ce0cc47) ([Andreas Lind](mailto:andreas@one.com))

### v2.11.0 (2016-06-13)

#### Pull requests

- [#551](https://github.com/assetgraph/assetgraph/pull/551) Update systemjs-builder to version 0.15.22 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#550](https://github.com/assetgraph/assetgraph/pull/550) Update systemjs-builder to version 0.15.21 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#549](https://github.com/assetgraph/assetgraph/pull/549) Update eslint to version 2.12.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#548](https://github.com/assetgraph/assetgraph/pull/548) Update systemjs-builder to version 0.15.20 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#546](https://github.com/assetgraph/assetgraph/pull/546) Add error message if dot command is not available ([Sebastian Fastner](mailto:s.fastner@sebastian-software.de), [Sebastian Werner](mailto:s.werner@sebastian-software.de))
- [#531](https://github.com/assetgraph/assetgraph/pull/531) setHtmlImageDimensions: Set the width and height attributes of &lt;img&gt; pointing at SVGs that have &lt;svg width=... height=...&gt; ([Andreas Lind](mailto:andreas@one.com))
- [#544](https://github.com/assetgraph/assetgraph/pull/544) Update eslint to version 2.11.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#543](https://github.com/assetgraph/assetgraph/pull/543) Update eslint to version 2.11.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [writeAssetsToDisc: Fix missing cb causing "callback called more than once" and the transform ending too early.](https://github.com/assetgraph/assetgraph/commit/b4ad4cc75f388f5937025825eabdcf6e269a4bb0) ([Andreas Lind](mailto:andreas@one.com))
- [Fix lint](https://github.com/assetgraph/assetgraph/commit/71d19437ca4c293e6892b607f81a54d597e451de) ([Andreas Lind](mailto:andreas@one.com))
- [Update systemjs-builder to 0.15.19, adapt tests slightly.](https://github.com/assetgraph/assetgraph/commit/e94975ad8f33c141769434c231754ae8e102a59e) ([Andreas Lind](mailto:andreas@one.com))
- [writeAssetsToDisc: Replace seq with async.](https://github.com/assetgraph/assetgraph/commit/0c113e05ee688f62625a20a9f3b62512ee50486f) ([Andreas Lind](mailto:andreas@one.com))
- [populate: Replace seq with async.](https://github.com/assetgraph/assetgraph/commit/1231cbc028b8d9019898585f0a1b9b9dc32e385d) ([Andreas Lind](mailto:andreas@one.com))
- [+2 more](https://github.com/assetgraph/assetgraph/compare/v2.10.1...v2.11.0)

### v2.10.1 (2016-05-25)
- [Revert "loadAssets: Replace seq with async."](https://github.com/assetgraph/assetgraph/commit/84b38d52db8089319ef550fb621aa9d52a36913f) ([Andreas Lind](mailto:andreas@one.com))

### v2.10.0 (2016-05-24)
- [#540](https://github.com/assetgraph/assetgraph/pull/540) Using cssnano-paras20xx v3.6.2-patch1 \(required for supporting Node v0.10\) ([Priyank Parashar](mailto:paras20xx@users.noreply.github.com))
- [#537](https://github.com/assetgraph/assetgraph/pull/537) Update accord to version 0.24.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

### v2.9.0 (2016-05-18)

#### Pull requests

- [#536](https://github.com/assetgraph/assetgraph/pull/536) Update cssnano to version 3.6.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [Adopt the removeDuplicateHtmlStyles transform from assetgraph-builder.](https://github.com/assetgraph/assetgraph/commit/3c3d8bc44af10cf095dedcaa0c5a23bf21a937d9) ([Andreas Lind](mailto:andreas@one.com))
- [Adopt the stripDebug transform from assetgraph-builder.](https://github.com/assetgraph/assetgraph/commit/76c572af3ed739cdedd4ceac0dd02ca33ed75e19) ([Andreas Lind](mailto:andreas@one.com))
- [Adopt the duplicateFavicon transform from assetgraph-builder.](https://github.com/assetgraph/assetgraph/commit/3c15614cbab36d4183138183300fb7133d3488ae) ([Andreas Lind](mailto:andreas@one.com))
- [Adopt the setAsyncOrDeferOnHtmlScripts transform from assetgraph-builder.](https://github.com/assetgraph/assetgraph/commit/2db9a091539c94879d08ee797fead589819ebf08) ([Andreas Lind](mailto:andreas@one.com))
- [Adopt the autoprefixer transform from assetgraph-builder.](https://github.com/assetgraph/assetgraph/commit/501272cf15f1ca5c4a94a9c04b66e469c923359b) ([Andreas Lind](mailto:andreas@one.com))
- [+6 more](https://github.com/assetgraph/assetgraph/compare/v2.8.0...v2.9.0)

### v2.8.0 (2016-05-18)

#### Pull requests

- [#527](https://github.com/assetgraph/assetgraph/pull/527) Added transform for manipulating the sourceRoot of source maps ([Sebastian Werner](mailto:s.werner@sebastian-software.de))
- [#533](https://github.com/assetgraph/assetgraph/pull/533) Update eslint to version 2.10.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#532](https://github.com/assetgraph/assetgraph/pull/532) Update eslint to version 2.10.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [Remove annoying console.warn.](https://github.com/assetgraph/assetgraph/commit/161fcd9e248610229fa6f5c9be5d8236d6936bbf) ([Andreas Lind](mailto:andreas@one.com))
- [setSourceMapRoot: Update SourceMapSource relations.](https://github.com/assetgraph/assetgraph/commit/786abac37888e4c910700ac3f03b8b857928662e) ([Andreas Lind](mailto:andreas@one.com))
- [file resolver: Permit mutating the url property before rawSrcProxy is called.](https://github.com/assetgraph/assetgraph/commit/dcd8a8b57ceda36bf94c9ecf0024ffe5dd843e6a) ([Andreas Lind](mailto:andreas@one.com))
- [Take sourceRoot into account using a custom baseUrl getter instead.](https://github.com/assetgraph/assetgraph/commit/3547e66bccd6684668c6b7f810003e28114f49b6) ([Andreas Lind](mailto:andreas@one.com))
- [Avoid String.prototype.endsWith, restoring node.js 0.10 support.](https://github.com/assetgraph/assetgraph/commit/ee7f65eba89119d6dc7bad9b9f2e9ec8e2530804) ([Andreas Lind](mailto:andreas@one.com))

### v2.7.0 (2016-05-14)

#### Pull requests

- [#530](https://github.com/assetgraph/assetgraph/pull/530) Update eslint to version 2.10.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [loadAssets: Replace seq with async.](https://github.com/assetgraph/assetgraph/commit/967e4248cab373175c03db03d154c2f800083edb) ([Andreas Lind](mailto:andreas@one.com))
- [resolveAssetConfig: Replace seq with async.](https://github.com/assetgraph/assetgraph/commit/936efcf2608a1ae9bfd82265dd2e55f12063895f) ([Andreas Lind](mailto:andreas@one.com))

### v2.6.0 (2016-05-12)
- [#529](https://github.com/assetgraph/assetgraph/pull/529) Fix circular dependency with source maps when using moveAssetsInOrder transform ([Sebastian Werner](mailto:s.werner@sebastian-software.de))
- [#528](https://github.com/assetgraph/assetgraph/pull/528) Update accord to version 0.24.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

### v2.5.3 (2016-05-09)

#### Pull requests

- [#525](https://github.com/assetgraph/assetgraph/pull/525) Update less to version 2.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#526](https://github.com/assetgraph/assetgraph/pull/526) Fixed of previous contrib to support sourceRoot for sourceMaps ([Sebastian Werner](mailto:s.werner@sebastian-software.de))

#### Commits to master

- [Test: Avoid serializing the error message twice.](https://github.com/assetgraph/assetgraph/commit/86a92e18ea6fb7e1b0c6f46332de538fdbefea00) ([Andreas Lind](mailto:andreas@one.com))

### v2.5.2 (2016-05-09)
- [#524](https://github.com/assetgraph/assetgraph/pull/524) Respect source root as prefix for all sources \(same like Chrome, etc. do\). ([Sebastian Werner](mailto:s.werner@sebastian-software.de))

### v2.5.1 (2016-05-09)

#### Pull requests

- [#522](https://github.com/assetgraph/assetgraph/pull/522) Add support for modelling preload relations. ([Andreas Lind](mailto:andreas@one.com), [Bram Stein](mailto:stein@adobe.com))
- [#521](https://github.com/assetgraph/assetgraph/pull/521) Update less to version 2.7.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#520](https://github.com/assetgraph/assetgraph/pull/520) Update accord to version 0.23.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [Whoops, that postcss version wasn't published yet.](https://github.com/assetgraph/assetgraph/commit/022b8a5463ab1319b3e0099a6c79c0e9d03b8745) ([Andreas Lind](mailto:andreas@one.com))
- [Update postcss to ~5.0.22.](https://github.com/assetgraph/assetgraph/commit/ecec6cd6db73cc1fbf37a971c0e11b56d808e474) ([Andreas Lind](mailto:andreas@one.com))

### v2.5.0 (2016-05-02)

#### Pull requests

- [#517](https://github.com/assetgraph/assetgraph/pull/517) Update source-map to version 0.5.6 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#518](https://github.com/assetgraph/assetgraph/pull/518) Update lodash to version 4.11.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#516](https://github.com/assetgraph/assetgraph/pull/516) Update html-minifier to version 2.1.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#515](https://github.com/assetgraph/assetgraph/pull/515) Update eslint-config-onelint to version 1.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [Update uglify-js to 2.6.2.](https://github.com/assetgraph/assetgraph/commit/a968f2e596aea51163b52c42ac83fd56ef6942f5) ([Andreas Lind](mailto:andreas@one.com))
- [compressJavaScript: Try to be more like the uglify-js binary, thus avoiding compute\_char\_frequency, use a "read name" cache.](https://github.com/assetgraph/assetgraph/commit/4b97e20c599bb9b27106f1c6e0c42a5ded4a3b92) ([Andreas Lind](mailto:andreas@one.com))
- [Use liberal version ranges for a bunch of "low risk" libs.](https://github.com/assetgraph/assetgraph/commit/4119ef234434c0b1d47f3de32af2236f243757e3) ([Andreas Lind](mailto:andreas@one.com))

### v2.4.0 (2016-05-02)

#### Pull requests

- [#512](https://github.com/assetgraph/assetgraph/pull/512) Update eslint to version 2.9.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#501](https://github.com/assetgraph/assetgraph/pull/501) Update source-map to version 0.5.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#510](https://github.com/assetgraph/assetgraph/pull/510) stylus@0.54.5 breaks build ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#506](https://github.com/assetgraph/assetgraph/pull/506) iconv@2.2.0 breaks build ⚠️ ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#505](https://github.com/assetgraph/assetgraph/pull/505) Add node.js 6 to .travis.yml. ([Andreas Lind](mailto:andreas@one.com))
- [#497](https://github.com/assetgraph/assetgraph/pull/497) Update source-map to version 0.5.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#496](https://github.com/assetgraph/assetgraph/pull/496) Update node-sass to version 3.5.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#491](https://github.com/assetgraph/assetgraph/pull/491) Update eslint to version 2.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#488](https://github.com/assetgraph/assetgraph/pull/488) Update urltools to version 0.2.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#485](https://github.com/assetgraph/assetgraph/pull/485) upgrade lodash to 4.9.0 ([Gustav Nikolaj Olsen](mailto:gno@one.com))

#### Commits to master

- [Update svgo to 0.6.6.](https://github.com/assetgraph/assetgraph/commit/d581df9f47a9d31f575c6190574b0dd743b9558e) ([Andreas Lind](mailto:andreas@one.com))
- [Update postcss to 5.0.20, remove some FIXMEs from the tests. Closes \#513.](https://github.com/assetgraph/assetgraph/commit/588433e13c6dd7aa9d7cdc1f699313f86849bdb1) ([Andreas Lind](mailto:andreas@one.com))
- [Try systemjs\/builder\#master](https://github.com/assetgraph/assetgraph/commit/49791ce0f35e7d0ec60c144f26a4f193dcfeb34d) ([Andreas Lind](mailto:andreas@one.com))
- [compile{Scss,Less}ToCss: Avoid passing undefined to Path.dirname.](https://github.com/assetgraph/assetgraph/commit/0d8142e97129786eb5a8393183e9f65b57645bad) ([Andreas Lind](mailto:andreas@one.com))
- [chore\(package\): update teepee to version 2.21.4 \(\#508\)](https://github.com/assetgraph/assetgraph/commit/621726302708f3615d45b7d638d840709fd8b587) ([Greenkeeper](mailto:support@greenkeeper.io))
- [+11 more](https://github.com/assetgraph/assetgraph/compare/v2.3.0...v2.4.0)

### v2.3.0 (2016-04-05)

#### Pull requests

- [#479](https://github.com/assetgraph/assetgraph/pull/479) Update eslint to version 2.7.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#475](https://github.com/assetgraph/assetgraph/pull/475) Update unexpected-mitm to version 9.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#471](https://github.com/assetgraph/assetgraph/pull/471) Update systemjs-builder to version 0.15.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#469](https://github.com/assetgraph/assetgraph/pull/469) Update chalk to version 1.1.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#468](https://github.com/assetgraph/assetgraph/pull/468) Update eslint to version 2.5.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#463](https://github.com/assetgraph/assetgraph/pull/463) eslint onelint setup ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [#467](https://github.com/assetgraph/assetgraph/pull/467) Update accord to version 0.22.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#431](https://github.com/assetgraph/assetgraph/pull/431) Update createerror to version 1.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#439](https://github.com/assetgraph/assetgraph/pull/439) Update repeat-string to version 1.5.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#430](https://github.com/assetgraph/assetgraph/pull/430) Update teepee to version 2.21.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#446](https://github.com/assetgraph/assetgraph/pull/446) Update stylus to version 0.54.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#443](https://github.com/assetgraph/assetgraph/pull/443) Update less to version 2.6.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#445](https://github.com/assetgraph/assetgraph/pull/445) Update glob to version 7.0.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#457](https://github.com/assetgraph/assetgraph/pull/457) unexpected-sinon@10.2.0 breaks build 🚨 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#466](https://github.com/assetgraph/assetgraph/pull/466) Update espurify to version 1.5.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [Css.minify: Disable the mergeLonghand transform as it's producing invalid results.](https://github.com/assetgraph/assetgraph/commit/0386ca265150b124a56faa3950dae73354678960) ([Andreas Lind](mailto:andreas@one.com))
- [Update eslint to version 2.6.0 🚀](https://github.com/assetgraph/assetgraph/commit/6b99e72aa8d66af715c1833c8afe1011b6d78a2b) ([Greenkeeper](mailto:support@greenkeeper.io))
- [Travis: Try building with node.js 5.](https://github.com/assetgraph/assetgraph/commit/831312a8d388f2d0727f71a43dec0df2f99c6631) ([Andreas Lind](mailto:andreas@one.com))
- [Update postcss to 5.0.19.](https://github.com/assetgraph/assetgraph/commit/912bf0b1ec2081e585ff1ce3ca565f873f3469f1) ([Andreas Lind](mailto:andreas@one.com))
- [Update estraverse to 4.2.0.](https://github.com/assetgraph/assetgraph/commit/80514170712393f9dfd0bbbed30eba36b17e40cf) ([Andreas Lind](mailto:andreas@one.com))
- [+1 more](https://github.com/assetgraph/assetgraph/compare/v2.2.1...v2.3.0)

### v2.2.1 (2016-03-16)
- [bundleRelations: Also reattach relations to unresolved assets to the bundle.](https://github.com/assetgraph/assetgraph/commit/565e5288bd0c02eb9d83e07da35a5f4cf30778bd) ([Andreas Lind](mailto:andreas@one.com))
- [mocha.opts: Add another allowed global leak.](https://github.com/assetgraph/assetgraph/commit/090c34452b41df471cb8a2b46842dcfcb9abea08) ([Andreas Lind](mailto:andreas@one.com))

### v2.2.0 (2016-03-04)

#### Pull requests

- [#436](https://github.com/assetgraph/assetgraph/pull/436) Update postcss to version 5.0.17 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#425](https://github.com/assetgraph/assetgraph/pull/425) Update systemjs-builder to version 0.15.8 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#423](https://github.com/assetgraph/assetgraph/pull/423) Update cssnano to version 3.5.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#420](https://github.com/assetgraph/assetgraph/pull/420) Update postcss to version 5.0.15 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [JavaScript: Separate the isPretty state from isMinified like we do with Css.](https://github.com/assetgraph/assetgraph/commit/49615402d968f9ab4e1ae5adb74419157eb5be3d) ([Andreas Lind](mailto:andreas@one.com))

### v2.1.1 (2016-02-11)

#### Pull requests

- [#413](https://github.com/assetgraph/assetgraph/pull/413) Update systemjs-builder to version 0.15.7 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#418](https://github.com/assetgraph/assetgraph/pull/418) Update glob to version 7.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#416](https://github.com/assetgraph/assetgraph/pull/416) Update rsvp to version 3.2.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#419](https://github.com/assetgraph/assetgraph/pull/419) Update cssnano to version 3.5.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#414](https://github.com/assetgraph/assetgraph/pull/414) Update rsvp to version 3.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#376](https://github.com/assetgraph/assetgraph/pull/376) Update minimize to version 1.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#377](https://github.com/assetgraph/assetgraph/pull/377) Update glob to version 6.0.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#383](https://github.com/assetgraph/assetgraph/pull/383) Update perfectionist to version 2.1.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#406](https://github.com/assetgraph/assetgraph/pull/406) Update less to version 2.6.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#407](https://github.com/assetgraph/assetgraph/pull/407) Update xmldom to version 0.1.22 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#408](https://github.com/assetgraph/assetgraph/pull/408) Update accord to version 0.22.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#410](https://github.com/assetgraph/assetgraph/pull/410) Update teepee to version 2.20.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#411](https://github.com/assetgraph/assetgraph/pull/411) Update esprima to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#385](https://github.com/assetgraph/assetgraph/pull/385) Update unexpected-sinon to version 9.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#370](https://github.com/assetgraph/assetgraph/pull/370) Update accord to version 0.21.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#364](https://github.com/assetgraph/assetgraph/pull/364) Update async to version 1.5.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#365](https://github.com/assetgraph/assetgraph/pull/365) Update escodegen to version 1.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#366](https://github.com/assetgraph/assetgraph/pull/366) Update postcss to version 5.0.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#363](https://github.com/assetgraph/assetgraph/pull/363) Update glob to version 6.0.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#360](https://github.com/assetgraph/assetgraph/pull/360) Update unexpected to version 10.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#359](https://github.com/assetgraph/assetgraph/pull/359) Update espurify to version 1.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#358](https://github.com/assetgraph/assetgraph/pull/358) Update espurify to version 1.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#357](https://github.com/assetgraph/assetgraph/pull/357) Update systemjs-builder to version 0.14.15 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#355](https://github.com/assetgraph/assetgraph/pull/355) Update systemjs-builder to version 0.14.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#354](https://github.com/assetgraph/assetgraph/pull/354) Update systemjs-builder to version 0.14.13 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#352](https://github.com/assetgraph/assetgraph/pull/352) Update stylus to version 0.53.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#351](https://github.com/assetgraph/assetgraph/pull/351) Update coveralls to version 2.11.6 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#350](https://github.com/assetgraph/assetgraph/pull/350) Update coveralls to version 2.11.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#349](https://github.com/assetgraph/assetgraph/pull/349) Update esprima to version 2.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#347](https://github.com/assetgraph/assetgraph/pull/347) Update cssnano to version 3.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#348](https://github.com/assetgraph/assetgraph/pull/348) Update unexpected to version 10.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#346](https://github.com/assetgraph/assetgraph/pull/346) Update accord to version 0.20.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#246](https://github.com/assetgraph/assetgraph/pull/246) Replace the request library with teepee ([Andreas Lind](mailto:andreas@one.com))
- [#335](https://github.com/assetgraph/assetgraph/pull/335) Update unexpected to version 10.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#339](https://github.com/assetgraph/assetgraph/pull/339) Update istanbul to version 0.4.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#340](https://github.com/assetgraph/assetgraph/pull/340) Update escodegen to version 1.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#344](https://github.com/assetgraph/assetgraph/pull/344) Update unexpected-mitm to version 8.1.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#326](https://github.com/assetgraph/assetgraph/pull/326) Source map support for JS\/CSS, switch from CSSOM to postcss ([Andreas Lind](mailto:andreas@one.com))
- [#331](https://github.com/assetgraph/assetgraph/pull/331) Update unexpected to version 10.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#330](https://github.com/assetgraph/assetgraph/pull/330) Update systemjs-builder to version 0.14.11 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#327](https://github.com/assetgraph/assetgraph/pull/327) Update mocha to version 2.3.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#311](https://github.com/assetgraph/assetgraph/pull/311) Update closure-compiler to version 0.2.12 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#325](https://github.com/assetgraph/assetgraph/pull/325) Update node-sass to version 3.4.2 🚀 ([Peter Müller](mailto:munter@fumle.dk), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#316](https://github.com/assetgraph/assetgraph/pull/316) Update glob to version 6.0.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#313](https://github.com/assetgraph/assetgraph/pull/313) Update unexpected to version 10.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#312](https://github.com/assetgraph/assetgraph/pull/312) ApplicationManifest and all outgoing relations ([Peter Müller](mailto:munter@fumle.dk))
- [#307](https://github.com/assetgraph/assetgraph/pull/307) Update closure-compiler to version 0.2.10 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#308](https://github.com/assetgraph/assetgraph/pull/308) Update unexpected-dom to version 3.0.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#305](https://github.com/assetgraph/assetgraph/pull/305) remove engineStrict from package.json ([Sean Lang](mailto:slang800@gmail.com))
- [#297](https://github.com/assetgraph/assetgraph/pull/297) System.js support ([Andreas Lind](mailto:andreas@one.com))
- [#304](https://github.com/assetgraph/assetgraph/pull/304) Update async to version 1.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#300](https://github.com/assetgraph/assetgraph/pull/300) Update unexpected to version 10.0.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#294](https://github.com/assetgraph/assetgraph/pull/294) Update sinon to version 1.17.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#301](https://github.com/assetgraph/assetgraph/pull/301) Update source-map to version 0.5.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#303](https://github.com/assetgraph/assetgraph/pull/303) Update html-minifier to version 1.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#298](https://github.com/assetgraph/assetgraph/pull/298) Update esprima to version 2.7.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#279](https://github.com/assetgraph/assetgraph/pull/279) JavaScript: Use esprima and escodegen instead of UglifyJS' ast. ([Andreas Lind](mailto:andreas@one.com))
- [#287](https://github.com/assetgraph/assetgraph/pull/287) Update source-map to version 0.5.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#255](https://github.com/assetgraph/assetgraph/pull/255) Initial take on modeling Application Manifests. ([Morten Siebuhr](mailto:sbhr@sbhr.dk))

#### Commits to master

- [replaceSymbolsInJavaScript: Don't consider cases where the identifier is the property part of a MemberExpression \(eg. don't replace FOO when used as: window.FOO\).](https://github.com/assetgraph/assetgraph/commit/ef01f99d3a860aad9053d5dad88e988b72d426ca) ([Andreas Lind](mailto:andreas@one.com))
- [replaceSymbolsInJavaScript: Emit a 'warn' event instead of an 'info' event when a deferenced value comes out as undefined.](https://github.com/assetgraph/assetgraph/commit/d8328488530d7573f95fc41c0e8d4cf20eabf6c0) ([Andreas Lind](mailto:andreas@one.com))
- [Fix jshint complaint.](https://github.com/assetgraph/assetgraph/commit/933dd1a70c32714e34d4d65b50bf540a2aeb26e5) ([Andreas Lind](mailto:andreas@one.com))
- [Update html-minifier to 1.1.1.](https://github.com/assetgraph/assetgraph/commit/2079a094c69dcf704f556ba522f8dce150ac3b87) ([Andreas Lind](mailto:andreas@one.com))
- [Remove seemingly unused dev deps: mocha-lcov-reporter, onedox.](https://github.com/assetgraph/assetgraph/commit/cc461ebfb31b29bcc8502d9200b8eb6b9457e0a7) ([Andreas Lind](mailto:andreas@one.com))
- [+13 more](https://github.com/assetgraph/assetgraph/compare/v1.24.0...v2.1.1)

### v1.24.0 (2016-02-05)
- [package.json: Change tag to v1 so publishing legacy releases won't affect 'latest'.](https://github.com/assetgraph/assetgraph/commit/ef6b3e8542390856069ef56f966e0f184de0b648) ([Andreas Lind](mailto:andreas@one.com))
- [replaceSymbolsInJavaScript: Emit a 'warn' event instead of an 'info' event when a deferenced value comes out as undefined.](https://github.com/assetgraph/assetgraph/commit/a77f30de6375c0a260f87378ca279480aca434b6) ([Andreas Lind](mailto:andreas@one.com))

### v2.1.0 (2016-02-05)

#### Pull requests

- [#376](https://github.com/assetgraph/assetgraph/pull/376) Update minimize to version 1.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#377](https://github.com/assetgraph/assetgraph/pull/377) Update glob to version 6.0.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#383](https://github.com/assetgraph/assetgraph/pull/383) Update perfectionist to version 2.1.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#406](https://github.com/assetgraph/assetgraph/pull/406) Update less to version 2.6.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#407](https://github.com/assetgraph/assetgraph/pull/407) Update xmldom to version 0.1.22 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#408](https://github.com/assetgraph/assetgraph/pull/408) Update accord to version 0.22.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#410](https://github.com/assetgraph/assetgraph/pull/410) Update teepee to version 2.20.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#411](https://github.com/assetgraph/assetgraph/pull/411) Update esprima to version 2.7.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#385](https://github.com/assetgraph/assetgraph/pull/385) Update unexpected-sinon to version 9.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#370](https://github.com/assetgraph/assetgraph/pull/370) Update accord to version 0.21.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#364](https://github.com/assetgraph/assetgraph/pull/364) Update async to version 1.5.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#365](https://github.com/assetgraph/assetgraph/pull/365) Update escodegen to version 1.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#366](https://github.com/assetgraph/assetgraph/pull/366) Update postcss to version 5.0.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#363](https://github.com/assetgraph/assetgraph/pull/363) Update glob to version 6.0.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#360](https://github.com/assetgraph/assetgraph/pull/360) Update unexpected to version 10.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#359](https://github.com/assetgraph/assetgraph/pull/359) Update espurify to version 1.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#358](https://github.com/assetgraph/assetgraph/pull/358) Update espurify to version 1.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#357](https://github.com/assetgraph/assetgraph/pull/357) Update systemjs-builder to version 0.14.15 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#355](https://github.com/assetgraph/assetgraph/pull/355) Update systemjs-builder to version 0.14.14 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#354](https://github.com/assetgraph/assetgraph/pull/354) Update systemjs-builder to version 0.14.13 🚀 ([Andreas Lind](mailto:andreas@one.com), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#352](https://github.com/assetgraph/assetgraph/pull/352) Update stylus to version 0.53.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#351](https://github.com/assetgraph/assetgraph/pull/351) Update coveralls to version 2.11.6 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#350](https://github.com/assetgraph/assetgraph/pull/350) Update coveralls to version 2.11.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#349](https://github.com/assetgraph/assetgraph/pull/349) Update esprima to version 2.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#347](https://github.com/assetgraph/assetgraph/pull/347) Update cssnano to version 3.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#348](https://github.com/assetgraph/assetgraph/pull/348) Update unexpected to version 10.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [replaceSymbolsInJavaScript: Emit a 'warn' event instead of an 'info' event when a deferenced value comes out as undefined.](https://github.com/assetgraph/assetgraph/commit/d8328488530d7573f95fc41c0e8d4cf20eabf6c0) ([Andreas Lind](mailto:andreas@one.com))
- [Fix jshint complaint.](https://github.com/assetgraph/assetgraph/commit/933dd1a70c32714e34d4d65b50bf540a2aeb26e5) ([Andreas Lind](mailto:andreas@one.com))
- [Update html-minifier to 1.1.1.](https://github.com/assetgraph/assetgraph/commit/2079a094c69dcf704f556ba522f8dce150ac3b87) ([Andreas Lind](mailto:andreas@one.com))
- [Remove seemingly unused dev deps: mocha-lcov-reporter, onedox.](https://github.com/assetgraph/assetgraph/commit/cc461ebfb31b29bcc8502d9200b8eb6b9457e0a7) ([Andreas Lind](mailto:andreas@one.com))
- [Use liberal version ranges for more dev deps.](https://github.com/assetgraph/assetgraph/commit/be25529215de7d365842481ce5a6a4b243548ca6) ([Andreas Lind](mailto:andreas@one.com))
- [+4 more](https://github.com/assetgraph/assetgraph/compare/v2.0.1...v2.1.0)

### v2.0.1 (2015-12-04)

#### Pull requests

- [#346](https://github.com/assetgraph/assetgraph/pull/346) Update accord to version 0.20.5 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [relations\/HtmlShortcutIcon: Add robustness against html documents not maving a documentElement. google site verification html files don't have one. Refs \#247](https://github.com/assetgraph/assetgraph/commit/17009e8bb05b60390b55800cb23323c6d1658c6b) ([Peter Müller](mailto:munter@fumle.dk))

### v2.0.0 (2015-12-02)

#### Pull requests

- [#246](https://github.com/assetgraph/assetgraph/pull/246) Replace the request library with teepee ([Andreas Lind](mailto:andreas@one.com))
- [#335](https://github.com/assetgraph/assetgraph/pull/335) Update unexpected to version 10.3.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#339](https://github.com/assetgraph/assetgraph/pull/339) Update istanbul to version 0.4.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#340](https://github.com/assetgraph/assetgraph/pull/340) Update escodegen to version 1.7.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#344](https://github.com/assetgraph/assetgraph/pull/344) Update unexpected-mitm to version 8.1.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#326](https://github.com/assetgraph/assetgraph/pull/326) Source map support for JS\/CSS, switch from CSSOM to postcss ([Andreas Lind](mailto:andreas@one.com))
- [#331](https://github.com/assetgraph/assetgraph/pull/331) Update unexpected to version 10.2.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#330](https://github.com/assetgraph/assetgraph/pull/330) Update systemjs-builder to version 0.14.11 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#327](https://github.com/assetgraph/assetgraph/pull/327) Update mocha to version 2.3.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#311](https://github.com/assetgraph/assetgraph/pull/311) Update closure-compiler to version 0.2.12 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#325](https://github.com/assetgraph/assetgraph/pull/325) Update node-sass to version 3.4.2 🚀 ([Peter Müller](mailto:munter@fumle.dk), [greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#316](https://github.com/assetgraph/assetgraph/pull/316) Update glob to version 6.0.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#313](https://github.com/assetgraph/assetgraph/pull/313) Update unexpected to version 10.1.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#312](https://github.com/assetgraph/assetgraph/pull/312) ApplicationManifest and all outgoing relations ([Peter Müller](mailto:munter@fumle.dk))
- [#307](https://github.com/assetgraph/assetgraph/pull/307) Update closure-compiler to version 0.2.10 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#308](https://github.com/assetgraph/assetgraph/pull/308) Update unexpected-dom to version 3.0.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#305](https://github.com/assetgraph/assetgraph/pull/305) remove engineStrict from package.json ([Sean Lang](mailto:slang800@gmail.com))
- [#297](https://github.com/assetgraph/assetgraph/pull/297) System.js support ([Andreas Lind](mailto:andreas@one.com))
- [#304](https://github.com/assetgraph/assetgraph/pull/304) Update async to version 1.5.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#300](https://github.com/assetgraph/assetgraph/pull/300) Update unexpected to version 10.0.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#294](https://github.com/assetgraph/assetgraph/pull/294) Update sinon to version 1.17.2 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#301](https://github.com/assetgraph/assetgraph/pull/301) Update source-map to version 0.5.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#303](https://github.com/assetgraph/assetgraph/pull/303) Update html-minifier to version 1.0.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#298](https://github.com/assetgraph/assetgraph/pull/298) Update esprima to version 2.7.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#279](https://github.com/assetgraph/assetgraph/pull/279) JavaScript: Use esprima and escodegen instead of UglifyJS' ast. ([Andreas Lind](mailto:andreas@one.com))
- [#287](https://github.com/assetgraph/assetgraph/pull/287) Update source-map to version 0.5.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#255](https://github.com/assetgraph/assetgraph/pull/255) Initial take on modeling Application Manifests. ([Morten Siebuhr](mailto:sbhr@sbhr.dk))

#### Commits to master

- [If assetGraph.sourceMaps === false, avoid incurring the penalty of preserving source location info.](https://github.com/assetgraph/assetgraph/commit/6c9535da35d9e12b82cd854129e09905d61278e8) ([Andreas Lind](mailto:andreas@one.com))
- [compressJavaScript: Don't break when no compressorOptions object is passed.](https://github.com/assetgraph/assetgraph/commit/726dec027a25da84afc3edec64c8d5c9accf0379) ([Andreas Lind](mailto:andreas@one.com))
- [compressJavaScript: Add sourceMaps option, and only do the work related to loading existing source maps and serializing them afterwards if it's on.](https://github.com/assetgraph/assetgraph/commit/73e1defe766b526b5243175094f0eb309ef55e47) ([Andreas Lind](mailto:andreas@one.com))
- [Update passerror to 1.1.1.](https://github.com/assetgraph/assetgraph/commit/d9b02f076001ff2ff2bd0bfdaa7a50a8ae97c328) ([Andreas Lind](mailto:andreas@one.com))
- [Remove commented-out UglifyJS-specific hack.](https://github.com/assetgraph/assetgraph/commit/1c01803cad969d76d5a3e3dbe71daa929aa79303) ([Andreas Lind](mailto:andreas@one.com))
- [+2 more](https://github.com/assetgraph/assetgraph/compare/v1.23.1...v2.0.0)

### v1.23.1 (2015-10-18)

#### Pull requests

- [#286](https://github.com/assetgraph/assetgraph/pull/286) Update minimize to version 1.7.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#285](https://github.com/assetgraph/assetgraph/pull/285) Update setimmediate to version 1.0.4 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#284](https://github.com/assetgraph/assetgraph/pull/284) Update istanbul to version 0.4.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#282](https://github.com/assetgraph/assetgraph/pull/282) Update unexpected-dom to version 3.0.1 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#283](https://github.com/assetgraph/assetgraph/pull/283) Update setimmediate to version 1.0.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#281](https://github.com/assetgraph/assetgraph/pull/281) Update minimize to version 1.7.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#277](https://github.com/assetgraph/assetgraph/pull/277) Updated to unexpected 10 and updated tests and custom assertions ([Peter Müller](mailto:munter@fumle.dk))
- [#271](https://github.com/assetgraph/assetgraph/pull/271) Update less to version 2.5.3 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#263](https://github.com/assetgraph/assetgraph/pull/263) Updated lodash to version 3.10.1 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#269](https://github.com/assetgraph/assetgraph/pull/269) Updated minimize to version 1.7.2 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#270](https://github.com/assetgraph/assetgraph/pull/270) Update jshint to version 2.8.0 🚀 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#266](https://github.com/assetgraph/assetgraph/pull/266) Updated unexpected-dom to version 2.0.1 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#256](https://github.com/assetgraph/assetgraph/pull/256) Travis: Test on Node 4.0. ([Morten Siebuhr](mailto:sbhr@sbhr.dk))
- [#261](https://github.com/assetgraph/assetgraph/pull/261) Updated unexpected-dom to version 1.4.1 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#260](https://github.com/assetgraph/assetgraph/pull/260) Updated coffee-script to version 1.10.0 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#258](https://github.com/assetgraph/assetgraph/pull/258) Update iconv to 2.1.11 ([Peter Müller](mailto:munter@fumle.dk))
- [#253](https://github.com/assetgraph/assetgraph/pull/253) Updated stylus to version 0.52.4 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#250](https://github.com/assetgraph/assetgraph/pull/250) Updated node-sass to version 3.3.3 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#257](https://github.com/assetgraph/assetgraph/pull/257) Updated unexpected-dom to version 1.4.0 ([greenkeeperio-bot](mailto:support@greenkeeper.io))
- [#249](https://github.com/assetgraph/assetgraph/pull/249) Updated istanbul to version 0.3.21 ([greenkeeperio-bot](mailto:support@greenkeeper.io))

#### Commits to master

- [registerRequireJsConfig: Test parsing of the shim config.](https://github.com/assetgraph/assetgraph/commit/2cffaed9b0ed1a0eed2db345784277f81e49e264) ([Andreas Lind](mailto:andreas@one.com))
- [Updated devDependencies](https://github.com/assetgraph/assetgraph/commit/f8addc32a13aed7805a183399316475687a4e5cb) ([Peter Müller](mailto:munter@fumle.dk))
- [Updated cssmin to 0.4.3](https://github.com/assetgraph/assetgraph/commit/80a41300bdae8091eda0d77d482ae8dc5e352597) ([Peter Müller](mailto:munter@fumle.dk))
- [Update createerror to 1.0.1](https://github.com/assetgraph/assetgraph/commit/711521c204054e4bc90a62d99887c34d06c80aac) ([Peter Müller](mailto:munter@fumle.dk))
- [Updated html-minifier to 0.8.0](https://github.com/assetgraph/assetgraph/commit/72a9d0f98353f86b7eee74c1bc615e250e682c9e) ([Peter Müller](mailto:munter@fumle.dk))
- [+11 more](https://github.com/assetgraph/assetgraph/compare/v1.23.0...v1.23.1)

### v1.23.0 (2015-08-28)
- [JavaScriptAmdRequire: Also accept a SymbolRef as the 2nd argument.](https://github.com/assetgraph/assetgraph/commit/ac290cea033cffbd5ed2c40d5cb69a464d2495e1) ([Andreas Lind](mailto:andreas@one.com))
- [Remove noisy warning about non-static require\(\[...\], function \(\) {...}\) items.](https://github.com/assetgraph/assetgraph/commit/f561896d40ce79b00c4f40efa025d385d7f58a30) ([Andreas Lind](mailto:andreas@one.com))
- [Update unexpected to 9.6.0.](https://github.com/assetgraph/assetgraph/commit/221244c59b64f9b19aa1af43100280f0a34cc227) ([Andreas Lind](mailto:andreas@one.com))
- [package.json: Fix my name.](https://github.com/assetgraph/assetgraph/commit/f76d75ee5e453fd9856f325f41264d84c68abf78) ([Andreas Lind](mailto:andreas@one.com))
- [package.json: Use a valid SPDX license identifier.](https://github.com/assetgraph/assetgraph/commit/f811e8b540e285733abbf16b2014d38733941559) ([Andreas Lind](mailto:andreas@one.com))
- [+9 more](https://github.com/assetgraph/assetgraph/compare/v1.20.1...v1.23.0)

### v1.20.1 (2015-06-28)
- [package.json: Removed "engines" section so it doesn't refuse to install on node.js 0.12, io.js, etc.](https://github.com/assetgraph/assetgraph/commit/5d1a21706cfed69a99e17bece6235437639f0f01) ([Andreas Lind](mailto:andreas@one.com))

### v1.20.0 (2015-06-28)
- [Update unexpected-dom to 1.1.0.](https://github.com/assetgraph/assetgraph/commit/7e657ef1088f386f9ebf1a7d9426858c78dd4437) ([Andreas Lind](mailto:andreas@one.com))

### v1.19.0 (2015-06-23)
- [Add support for inline SVG "islands" inside HTML.](https://github.com/assetgraph/assetgraph/commit/7d8037bd36d2632d057004c9e7dc411244197088) ([Andreas Lind](mailto:andreas@one.com))
- [Update unexpected et al., replace unexpected-jsdom with unexpected-dom. Update mocha to 2.2.5.](https://github.com/assetgraph/assetgraph/commit/17c22799a8ae325e90cd90e8e79d580fad31f281) ([Andreas Lind](mailto:andreas@one.com))

### v1.18.2 (2015-06-22)
- [Fix hrefType of StaticUrlMapEntry relations that are the result of wildcard expansion.](https://github.com/assetgraph/assetgraph/commit/09a342b475d38cae9eed95ab49551042d1bce499) ([Andreas Lind](mailto:andreas@one.com))
- [Rearranged GETSTATICURL test data to allow for more separate test cases.](https://github.com/assetgraph/assetgraph/commit/98ade0ecff9cbf3c001d892272ac619a2dbcf00b) ([Andreas Lind](mailto:andreas@one.com))

### v1.18.1 (2015-06-09)
- [Make Text's rawSrc setter work like Asset's.](https://github.com/assetgraph/assetgraph/commit/d8c64bcc1a40b9ee6eaf4c28a6209583c5c5f8b6) ([Andreas Lind](mailto:andreas@one.com))

### v1.18.0 (2015-05-27)
- [Model &lt;use xlink:href=...&gt; as a relation.](https://github.com/assetgraph/assetgraph/commit/062a03636f89b5c669d7482e6130eb2d2224c02d) ([Andreas Lind](mailto:andreas@one.com))
- [Model &lt;pattern xlink:href=...&gt; as a relation. Fixes \#215.](https://github.com/assetgraph/assetgraph/commit/67fe43522decd05f2efa34da6d7ffedb0bc1c82b) ([Andreas Lind](mailto:andreas@one.com))

### v1.17.8 (2015-05-21)
- [Asset.populate: Fix resolution when the url is an empty string.](https://github.com/assetgraph/assetgraph/commit/5285303d2a06d731bf01eff168a39cc7cbf24c35) ([Andreas Lind](mailto:andreas@one.com))

### v1.17.7 (2015-05-05)
- [http resolver: Don't overwrite requestOptions.headers when specifying the default User-Agent request header.](https://github.com/assetgraph/assetgraph/commit/fedf2d1a234b202a535fc212d560c3c9390a9040) ([Andreas Lind](mailto:andreas@one.com))

### v1.17.6 (2015-05-04)
- [flattenStaticIncludes: Don't remove relations to .i18n assets \(breaks INCLUDEs from inline scripts\).](https://github.com/assetgraph/assetgraph/commit/0c60adb9f50662bbc417dcecefae3f67b1dab5c7) ([Andreas Lind](mailto:andreas@one.com))

### v1.17.5 (2015-04-15)
- [Added 'User-Agent'-header to http requests. Apparently a fair amount of web servers reject with a 403 if there is no User-Agent](https://github.com/assetgraph/assetgraph/commit/b628cbaa4419674a5f9f8993569a379aa93d3546) ([Peter Müller](mailto:munter@fumle.dk))

### v1.17.4 (2015-04-09)
- [#239](https://github.com/assetgraph/assetgraph/pull/239) Avoid CommonJSRequire errors in self encapsulated bundles ([Peter Müller](mailto:munter@fumle.dk))

### v1.17.3 (2015-04-08)
- [Upgrade schemes to 1.0.1](https://github.com/assetgraph/assetgraph/commit/57ae256c739df08217416d4d2a437a7843c16608) ([Peter Müller](mailto:munter@fumle.dk))
- [jshint](https://github.com/assetgraph/assetgraph/commit/a392ea350cc902b9d79c622dffe5df9833c66d2c) ([Andreas Lind](mailto:andreas@one.com))

### v1.17.2 (2015-04-08)
- [CssUrlTokenRelation: Fixed more edge cases of interpreting and updating urls with singlequotes and doublequotes.](https://github.com/assetgraph/assetgraph/commit/15decd50c74dcd134cce848414d70ef5b853a95e) ([Andreas Lind](mailto:andreas@one.com))

### v1.17.1 (2015-04-07)
- [CssUrlTokenRelation: Fix parsing of urls with singlequotes and doublequotes.](https://github.com/assetgraph/assetgraph/commit/2f0ef732b932c7e34ac240ef590c2a8797cb0ed0) ([Andreas Lind](mailto:andreas@one.com))

### v1.17.0 (2015-04-05)

#### Pull requests

- [#238](https://github.com/assetgraph/assetgraph/pull/238) transforms\/registerRequireJsConfig: Run config detection on already load... ([Peter Müller](mailto:munter@fumle.dk))
- [#237](https://github.com/assetgraph/assetgraph/pull/237) Support all types of global requirejs configuration  ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Switch to use the schemes module to define known protocols to check against when resolving protocols](https://github.com/assetgraph/assetgraph/commit/7902166f65a22a420cf4e66395accc0168c4c13a) ([Peter Müller](mailto:munter@fumle.dk))
- [resolveAssetConfig: Leave relations with unsupported protocols in the graph.](https://github.com/assetgraph/assetgraph/commit/1cdd49845e631c2e38cbc8454880875c49f303cc) ([Peter Müller](mailto:munter@fumle.dk))
- [Update unexpected etc.](https://github.com/assetgraph/assetgraph/commit/4c244d7a171b51a17cb46c38eb44786fe63103f9) ([Peter Müller](mailto:munter@fumle.dk))
- [Emit errors on missing iconv install instead of throwing. Fixes \#112](https://github.com/assetgraph/assetgraph/commit/4a30c8e7c4f753134e6a62194462194d5e405e70) ([Peter Müller](mailto:munter@fumle.dk))
- [Added test for \#177. Closes \#177](https://github.com/assetgraph/assetgraph/commit/6d8195aba22cfa2bf64144b43466eec110c0ae87) ([Peter Müller](mailto:munter@fumle.dk))

### v1.16.2 (2015-04-03)
- [Stricten up the engine requirements, since Assetgraph is currently not compatible with node 0.12 or IO.js. Refs assetgraph\/assetgraph-builder\#162 refs Munter\/hyperlink\#4](https://github.com/assetgraph/assetgraph/commit/a212bc024de4c97eda2ddbdb5a1b14e104e5faed) ([Peter Müller](mailto:munter@fumle.dk))

### v1.16.1 (2015-03-28)
- [Be more forgiving of missing requireJsConfig in transforms\/flattenRequireJs. Emit warning instead of throwing](https://github.com/assetgraph/assetgraph/commit/9f29faf3bc1ce3be5a90ab6d67b3b09e34b2394b) ([Peter Müller](mailto:munter@fumle.dk))
- [setAssetEncoding transform: Fixed deprecation message.](https://github.com/assetgraph/assetgraph/commit/bac21d146d46e186826e8adabcce666d8db90871) ([Andreas Lind](mailto:andreas@one.com))

### v1.16.0 (2015-03-18)
- [Improve error message when no base url can be found.](https://github.com/assetgraph/assetgraph/commit/e091694ac735082e7872f37fff795b6765eaf034) ([Peter Müller](mailto:munter@fumle.dk))
- [Added Relation.baseUrl getter and try to be smarter about non-relative references.](https://github.com/assetgraph/assetgraph/commit/d73ee58d6f948316a1077fb3a8d82dd8a224e14c) ([Peter Müller](mailto:munter@fumle.dk))
- [populate: Don't swallow errors encountered when resolving relations.](https://github.com/assetgraph/assetgraph/commit/2d3a2a367644def7302a633fbaf37787bf57aa8e) ([Peter Müller](mailto:munter@fumle.dk))
- [removeDeadIfsInJavaScript: Try to avoid a hard-to-reproduce issue when the parent of an 'if' AST node has a body that's not an array.](https://github.com/assetgraph/assetgraph/commit/6cb7f59ab59c61ca0672f26389bf24d15cd401a7) ([Andreas Lind](mailto:andreas@one.com))
- [Remove outdated comment.](https://github.com/assetgraph/assetgraph/commit/8ae07f05388537b86f42b4dc21f875703327dd0b) ([Andreas Lind](mailto:andreas@one.com))

### v1.15.3 (2015-01-07)
- [Update unexpected and related modules to their latest versions.](https://github.com/assetgraph/assetgraph/commit/42a26c214a03c206e62b55b29454b6f6d0847d1f) ([Andreas Lind](mailto:andreas@one.com))

### v1.15.2 (2014-12-30)
- [Add unexpected-with-plugins to package](https://github.com/assetgraph/assetgraph/commit/e36cbe5c20cba888d63b77d9a4bb09823727a872) ([Peter Müller](mailto:munter@fumle.dk))

### v1.15.1 (2014-12-29)
- [Allow using a string in Image.devicePixelRatio setter and using comma as a decimal separator. Refs assetgraph\/assetgraph-sprite\#13](https://github.com/assetgraph/assetgraph/commit/51215d4ffa606a1ef3aa5e725b953e9c2d30c0ed) ([Peter Müller](mailto:munter@fumle.dk))

### v1.15.0 (2014-12-25)

#### Pull requests

- [#233](https://github.com/assetgraph/assetgraph/pull/233) Model image device pixel ratio ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Fixed missing device pixel ratio detection and update in url setter and constructor when only passing url](https://github.com/assetgraph/assetgraph/commit/b9806c4ee23aa0fc5e517b1a851accf25d372a51) ([Peter Müller](mailto:munter@fumle.dk))
- [Revert "So that was a bad idea..."](https://github.com/assetgraph/assetgraph/commit/c8073aea85495a81322d076fc529236a324df92b) ([Peter Müller](mailto:munter@fumle.dk))
- [So that was a bad idea...](https://github.com/assetgraph/assetgraph/commit/856cdbf417e2adcb32f0998460597d7756d6502c) ([Peter Müller](mailto:munter@fumle.dk))

### v1.14.4 (2014-12-18)
- [package.json: Also publish test\/unexpectedAssetGraph.js so that other packages can use it when using assetgraph as a dev dependency.](https://github.com/assetgraph/assetgraph/commit/59faac5d1189a8f0bac576ea21d2db943cde8097) ([Andreas Lind](mailto:andreas@one.com))
- [Updated npm description. Mostly to test the travis caching feature](https://github.com/assetgraph/assetgraph/commit/be60f993ef885f7f9a7a4113adfd2d5c3a8f992b) ([Peter Müller](mailto:munter@fumle.dk))
- [Lets try this new docker travis setup with caching](https://github.com/assetgraph/assetgraph/commit/24433b06e7ddde91b9050f36c26d795cc1b04662) ([Peter Müller](mailto:munter@fumle.dk))
- [Added some test coverage to transforms\/moveAssetsInOrder](https://github.com/assetgraph/assetgraph/commit/27007355837b94d82fddb06e16b4823116fa8e01) ([Peter Müller](mailto:munter@fumle.dk))
- [Fix accidental wrong coverage badge](https://github.com/assetgraph/assetgraph/commit/486dfac03941dce113e13edafc7503ed63365cae) ([Peter Müller](mailto:munter@fumle.dk))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v1.14.3...v1.14.4)

### v1.14.3 (2014-12-12)
- [Whoops, removed accidentally global var.](https://github.com/assetgraph/assetgraph/commit/e91801a671aa1b425db95f8fbded6c4b0416d425) ([Andreas Lind](mailto:andreas@one.com))

### v1.14.2 (2014-12-12)
- [removeDeadIfsInJavaScript: Avoid looping infinitely in some cases.](https://github.com/assetgraph/assetgraph/commit/d695fef3c6d9e18aed902a2b9ac6cfc9b149d06a) ([Andreas Lind](mailto:andreas@one.com))
- [replaceSymbolsInJavaScript: Test that different instances are used when replacing multiple instances.](https://github.com/assetgraph/assetgraph/commit/946fa86d7da96c3061a926ed96a37f2d435a0a39) ([Andreas Lind](mailto:andreas@one.com))

### v1.14.1 (2014-12-11)
- [D'oh, use lodash and removed bogus output from test.](https://github.com/assetgraph/assetgraph/commit/5987c98f76dcc4dde73aa76813bf978a306b6932) ([Andreas Lind](mailto:andreas@one.com))

### v1.14.0 (2014-12-11)

#### Pull requests

- [#231](https://github.com/assetgraph/assetgraph/pull/231) Added failing test for Css asset parseTree setter ([Peter Müller](mailto:munter@fumle.dk))
- [#230](https://github.com/assetgraph/assetgraph/pull/230) Clean up HtmlJsx relation to only contain the actual difference from HtmlScript ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Added transform for removing some specific if constructs in JavaScript. Poor man's UglifyJS.](https://github.com/assetgraph/assetgraph/commit/65b70f58811d743d400ca918647655f4aace3f07) ([Andreas Lind](mailto:andreas@one.com))
- [Test: Better diffing of JavaScript ASTs.](https://github.com/assetgraph/assetgraph/commit/9ed03dbd9af9396eaf158a6135626963a6d39bda) ([Andreas Lind](mailto:andreas@one.com))
- [Test: Use magicpen-prism to get syntax highlighting.](https://github.com/assetgraph/assetgraph/commit/b5d61c96b403289181fb9f02f80947628dcc13bf) ([Andreas Lind](mailto:andreas@one.com))
- [Update istanbul to 0.3.5 and use the --include-all-sources switch so we're no longer under the illusion that untested code is fully covered.](https://github.com/assetgraph/assetgraph/commit/00355fc7d702d13c807c9d8119dc9457a69b3d94) ([Andreas Lind](mailto:andreas@one.com))
- [Improve test coverage of Asset.clone](https://github.com/assetgraph/assetgraph/commit/4df8a7dc0dda46df9e1a9046a71b1b31b5c76090) ([Peter Müller](mailto:munter@fumle.dk))
- [+23 more](https://github.com/assetgraph/assetgraph/compare/v1.13.1...v1.14.0)

### v1.13.1 (2014-11-24)
- [Update glob to 4.2.1.](https://github.com/assetgraph/assetgraph/commit/871bd1fb32e896eea47eddbd0d80b09d03f5eb91) ([Andreas Lind](mailto:andreas@one.com))
- [Emit a better error message when enountering an asset with a missing file name in tranforms\/writeAssetsToDisc](https://github.com/assetgraph/assetgraph/commit/d26e19e20d0d40e5e50a311e2a1264b2427f84ba) ([Peter Müller](mailto:munter@fumle.dk))

### v1.13.0 (2014-10-23)
- [compressJavaScript: Call .unload\(\) on the old JavaScript assets after replacing them with the compressed ones.](https://github.com/assetgraph/assetgraph/commit/a790579127fa63275eda6db418507e70bc9b97ac) ([Andreas Lind](mailto:andreas@one.com))
- [compressJavaScript: Replace seq with async.](https://github.com/assetgraph/assetgraph/commit/1411fcdac2440619bdf197c65b103abeabd402f9) ([Andreas Lind](mailto:andreas@one.com))
- [removeAssets: Accept an 'unload' option.](https://github.com/assetgraph/assetgraph/commit/2dd28000f817657ddc72242faa63624e683ceeab) ([Andreas Lind](mailto:andreas@one.com))
- [removeAssets: Take an options object, but remain backwards compatible.](https://github.com/assetgraph/assetgraph/commit/b2ce81b1e07c7a978d88e04a5f3bd48da5e20ec4) ([Andreas Lind](mailto:andreas@one.com))

### v1.12.1 (2014-09-29)
- [Be a bit nicer about not being able to load node-sass](https://github.com/assetgraph/assetgraph/commit/4fbd238b745c6b434c40d77096c4f29e713ccd99) ([Peter Müller](mailto:munter@fumle.dk))

### v1.12.0 (2014-09-29)

#### Pull requests

- [#228](https://github.com/assetgraph/assetgraph/pull/228) Added assets\/Sass, assets\/Scss, transforms\/compileScssToCss with tests ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Add transforms\/compileScssToCss to README](https://github.com/assetgraph/assetgraph/commit/b3f6464ed795188d01be6513bddce8451c85a9a7) ([Peter Müller](mailto:munter@fumle.dk))

### v1.11.3 (2014-09-24)
- [Html.prototype.minify: Removed extraneous recursive call without the correct arguments.](https://github.com/assetgraph/assetgraph/commit/464f8f2480b3eda0a881cbb052fd4c58e52e9e75) ([Andreas Lind](mailto:andreas@one.com))
- [compressJavaScript: Also support the screw\_ie8 serialization option when mangling and compressing.](https://github.com/assetgraph/assetgraph/commit/6231f925dc6ec9e475dc44f127d7489dadebfadd) ([Andreas Lind](mailto:andreas@one.com))

### v1.11.2 (2014-09-24)
- [Turn off the side\_effects option when compressing data-bind and related attributes. Previously UglifyJS would remove the ones that it deemed not to have any effect.](https://github.com/assetgraph/assetgraph/commit/bf7760e07d82ac5c4b92bb1db733c727fdb17dd3) ([Andreas Lind](mailto:andreas@one.com))
- [JavaScript: Moved quoteChar into serializationOptions, and make sure to preserve them when compressing a JavaScript asset.](https://github.com/assetgraph/assetgraph/commit/eb73aed7a8e79ce34c605923efcc546b66b8f5fa) ([Andreas Lind](mailto:andreas@one.com))
- [Update urltools to 0.2.0.](https://github.com/assetgraph/assetgraph/commit/66ebec98c8cd82e597925041dbf7dad91ea44171) ([Peter Müller](mailto:munter@fumle.dk))

### v1.11.1 (2014-09-23)
- [Fix invalid underscore references](https://github.com/assetgraph/assetgraph/commit/ae49a92e3739ddfeca2356c37170c75442bf567b) ([Peter Müller](mailto:munter@fumle.dk))

### v1.11.0 (2014-09-23)
- [JavaScript: Added 'serializationOptions' property that controls the output of the UglifyJS OutputStream.](https://github.com/assetgraph/assetgraph/commit/787ec633976b189b1179104e3778674e7e8d6025) ([Andreas Lind](mailto:andreas@one.com))
- [package.json: Removed equal signs from dependencies for compatibility with npm config set save-exact true](https://github.com/assetgraph/assetgraph/commit/2e5760aec9ec353b41b33758610708843c1890c7) ([Andreas Lind](mailto:andreas@one.com))
- [updateAssets, updateRelations: Support deep extending.](https://github.com/assetgraph/assetgraph/commit/134c34085b0af1f309c48215bcd32ce8beb3c94a) ([Andreas Lind](mailto:andreas@one.com))
- [Updated github urls to link to assetgraph org in README](https://github.com/assetgraph/assetgraph/commit/503c493e341b24d21ac3f82fa8c7b786378b2df6) ([Peter Müller](mailto:munter@fumle.dk))

### v1.10.1 (2014-09-17)
- [Html.minify: Don't pass removeRedundantAttributes:true to html-minifier as it causes styling regressions for CSS targetting input\[type="text"\] specifically. Occurs in Bootstrap.](https://github.com/assetgraph/assetgraph/commit/7143639b1435324401ef861f43c92a770e494486) ([Andreas Lind](mailto:andreas@one.com))
- [replaceSymbolsInJavaScript: Don't break when replacing bracket notation with a number, and add support for non-constant expressions in bracket notation.](https://github.com/assetgraph/assetgraph/commit/36f09c2d13229e9def7c15af01668acb7f8e3427) ([Gustav Nikolaj Olsen](mailto:gno@one.com))

### v1.10.0 (2014-09-15)
- [HtmlParamsAttribute: Actually export the correct class so that the inline method doesn't unexpectedly set a data-bind.](https://github.com/assetgraph/assetgraph/commit/aa8190719e58e18110ffc996ae490e72aab37447) ([Andreas Lind](mailto:andreas@one.com))
- [Stop duplicating the code for issuing data: urls, and try to use a non-base64 one if it's shorter.](https://github.com/assetgraph/assetgraph/commit/bdf8db98aae2b707937b8ab8f64d1af93edba676) ([Andreas Lind](mailto:andreas@one.com))

### v1.9.2 (2014-09-02)
- [Treat HtmlMetaRefresh relations the same way as HtmlAnchor.](https://github.com/assetgraph/assetgraph/commit/a067cf0c1f734c17d27d0ecc7b6068c676323602) ([Maarten Winter](mailto:mw@one.com))
- [logEvents transform: Don't leave a bogus file:\/\/ prefix when removing process.cwd\(\) from error messages.](https://github.com/assetgraph/assetgraph/commit/5d31d15c5cfdf6b01fe76239e3898b846df80722) ([Maarten Winter](mailto:mw@one.com))

### v1.9.1 (2014-09-02)
- [Allow overriding require.baseUrl before including require.js.](https://github.com/assetgraph/assetgraph/commit/014e455b32402bd5f76ddc9658d71f841232505f) ([Maarten Winter](mailto:mw@one.com))

### v1.9.0 (2014-08-31)

#### Pull requests

- [#220](https://github.com/assetgraph/assetgraph/pull/220) Add support for html fragments in Atom feeds ([Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Fixed typos in test descriptions.](https://github.com/assetgraph/assetgraph/commit/220fa12feed1b5891c60c53c5216c79e03832c2b) ([Andreas Lind](mailto:andreas@one.com))
- [Moved the \_isRelationUrl method to Asset.](https://github.com/assetgraph/assetgraph/commit/b88fe0d337eb1fd834afc69a972ec531cf78492b) ([Andreas Lind](mailto:andreas@one.com))

### v1.8.0 (2014-08-22)

#### Pull requests

- [#209](https://github.com/assetgraph/assetgraph/pull/209) Model http redirects as relations ([Andreas Lind Petersen](mailto:andreas@one.com), [Andreas Lind](mailto:andreas@one.com), [Peter Müller](mailto:munter@fumle.dk))
- [#212](https://github.com/assetgraph/assetgraph/pull/212) Inline embedded KO templates without id attribute ([Munawwar Firoz](mailto:munawwarfiroz@hotmail.com))

#### Commits to master

- [model params attributes that can be parsed as javascript as inline assets.](https://github.com/assetgraph/assetgraph/commit/97929cc4ba49028639ff788c0475e861132db84a) ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [change replaceSymbolsInJavaScript to put undefined when no key is found.](https://github.com/assetgraph/assetgraph/commit/ea3c32ce85193b2a0773e0733679660887475b71) ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [package.json: Simplified "npm run travis" so it relies on "npm run coverage".](https://github.com/assetgraph/assetgraph/commit/fcf458d7850ab800aa671d9ab13ec753f04ab353) ([Andreas Lind](mailto:andreas@one.com))
- [Updated coveralls to 2.11.1.](https://github.com/assetgraph/assetgraph/commit/70602e4ff59acc754ec528bf62c0078e21fbf003) ([Andreas Lind](mailto:andreas@one.com))
- [Tests: Minor consistency fixes.](https://github.com/assetgraph/assetgraph/commit/d143e216abd8a2635218d8301ff25cb67c7719a4) ([Andreas Lind](mailto:andreas@one.com))

### v1.7.4 (2014-07-26)
- [Update urltools to 0.1.1.](https://github.com/assetgraph/assetgraph/commit/5b67c7197ca902c0d2a6fd67a60a32a356ea248c) ([Andreas Lind](mailto:andreas@one.com))
- [Allow  as part of the protocol when resolving urls. Based on real world  example](https://github.com/assetgraph/assetgraph/commit/0c1c9fcbaec4c9b21424d52c6972536c6f14baae) ([Peter Müller](mailto:munter@fumle.dk))
- [Fix problem with infinite resolveAssetConfig loop when hitting a special case where the protocol regex doesn't match the protocol](https://github.com/assetgraph/assetgraph/commit/3575084e8fa8454682971fbcd531a02e35a868b7) ([Peter Müller](mailto:munter@fumle.dk))

### v1.7.3 (2014-07-24)
- [splitCssIfIeLimitIsReached: Refactored a bit and added support for a minimumIeVersion option.](https://github.com/assetgraph/assetgraph/commit/2d5d267fa724861f606e08872992b8f0f8412612) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [jshint.](https://github.com/assetgraph/assetgraph/commit/53acff171691f8a814b20a0417e2b72e181e0ed3) ([Andreas Lind](mailto:andreas@one.com))
- [inlineCssImagesWithLegacyFallback: Added support for specifiying the minimum IE version to support.](https://github.com/assetgraph/assetgraph/commit/2a649e1ef58e6432265b415e97a6486c2ebf3bb8) ([Andreas Lind](mailto:andreas@one.com))
- [inlineCssImagesWithLegacyFallback: Accept the size threshold as part of an options object.](https://github.com/assetgraph/assetgraph/commit/a6976b7fd2aa1fcce9964a5dffa5761fcb4f415a) ([Andreas Lind](mailto:andreas@one.com))

### v1.7.2 (2014-07-23)
- [splitCssIfIeLimitIsReached: Emit a proper Error object \(even if it's an 'info' type message\). See \#211.](https://github.com/assetgraph/assetgraph/commit/61411c5565787cbe3ec4958f8c6c294c5e0502bd) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [CacheManifest: Fixed reporting of syntax errors.](https://github.com/assetgraph/assetgraph/commit/449cedf1dedd49daaf528fcca8724096c20b0b8c) ([Andreas Lind](mailto:andreas@one.com))

### v1.7.1 (2014-07-22)

#### Pull requests

- [#207](https://github.com/assetgraph/assetgraph/pull/207) Trim hrefs before they are checked for hrefType. ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [logEvents: Be more robust towards different types of objects being sent in as errors.](https://github.com/assetgraph/assetgraph/commit/da8f4165c836d230fdc303c6dbfeebd4365e0ced) ([Peter Müller](mailto:munter@fumle.dk))
- [Moved from .npmignore to 'files' in package.json](https://github.com/assetgraph/assetgraph/commit/93cb59404f77dac4f064317b08643c34cb94159e) ([Peter Müller](mailto:munter@fumle.dk))

### v1.7.0 (2014-07-18)
- [compileLessToCss: Populate the graph after compiling if assetGraph.followRelations is specified.](https://github.com/assetgraph/assetgraph/commit/c82fb56b3c2bab725ee5d0b5519a4832374c10e1) ([Peter Müller](mailto:munter@fumle.dk))
- [populate: Default to assetGraph.followRelations if the option isn't given explicitly.](https://github.com/assetgraph/assetgraph/commit/748346a50d1bae4d417c3e57a164a2a88744e91e) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.43 (2014-07-18)

#### Pull requests

- [#204](https://github.com/assetgraph/assetgraph/pull/204) JavaScript asset test coverage ([Peter Müller](mailto:munter@fumle.dk))
- [#202](https://github.com/assetgraph/assetgraph/pull/202) Accord ([Sean Lang](mailto:slang800@gmail.com))
- [#203](https://github.com/assetgraph/assetgraph/pull/203) Improve SvgScript relation test coverage ([Peter Müller](mailto:munter@fumle.dk))
- [#201](https://github.com/assetgraph/assetgraph/pull/201) AssetGraph.query test coverage improvements ([Peter Müller](mailto:munter@fumle.dk))
- [#200](https://github.com/assetgraph/assetgraph/pull/200) relations\/XmlStylesheet: Increase test coverage ([Peter Müller](mailto:munter@fumle.dk))
- [#197](https://github.com/assetgraph/assetgraph/pull/197) Fix SvgStyle Relation ([Peter Müller](mailto:munter@fumle.dk))
- [#194](https://github.com/assetgraph/assetgraph/pull/194) Move transforms\/logEvents from assetgraph-builder to assetgraph ([Peter Müller](mailto:munter@fumle.dk))
- [#193](https://github.com/assetgraph/assetgraph/pull/193) switch from underscore to lodash ([Sean Lang](mailto:slang800@gmail.com))
- [#192](https://github.com/assetgraph/assetgraph/pull/192) use an existing setImmediate shim ([Sean Lang](mailto:slang800@gmail.com))
- [#191](https://github.com/assetgraph/assetgraph/pull/191) relations\/HtmlInlineFragment: Correctly inline relation in xml dom. Rela... ([Peter Müller](mailto:munter@fumle.dk))
- [#190](https://github.com/assetgraph/assetgraph/pull/190) Make writeAssetsToDisc more intuitive ([Peter Müller](mailto:munter@fumle.dk))
- [#189](https://github.com/assetgraph/assetgraph/pull/189) fix travis builds of node 0.8 ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [#185](https://github.com/assetgraph/assetgraph/pull/185) Add support for humans.txt\/author relations. ([Bram Stein](mailto:stein@adobe.com))
- [#176](https://github.com/assetgraph/assetgraph/pull/176) assets\/Html: Replace commonly known templating syntaxes that produce inv... ([Peter Müller](mailto:munter@fumle.dk))
- [#173](https://github.com/assetgraph/assetgraph/pull/173) Bundle discriminator strict ([Peter Müller](mailto:munter@fumle.dk))
- [#171](https://github.com/assetgraph/assetgraph/pull/171) Add script placement in &lt;head&gt; as bundle discriminator ([Peter Müller](mailto:munter@fumle.dk))
- [#165](https://github.com/assetgraph/assetgraph/pull/165) Removed unwanted comma from snippet in README ([Revath S Kumar](mailto:rsk@revathskumar.com))
- [#164](https://github.com/assetgraph/assetgraph/pull/164) Html import fix ([Peter Müller](mailto:munter@fumle.dk))
- [#163](https://github.com/assetgraph/assetgraph/pull/163) Warn when concatenating scripts that might leak strict mode to the global scope ([Peter Müller](mailto:munter@fumle.dk))
- [#160](https://github.com/assetgraph/assetgraph/pull/160) Include inline script templates ([Munawwar Firoz](mailto:munawwarfiroz@hotmail.com))
- [#158](https://github.com/assetgraph/assetgraph/pull/158) Keep consistent Javascript style ([Peter Müller](mailto:munter@fumle.dk))
- [#159](https://github.com/assetgraph/assetgraph/pull/159) data-main should take requireJsConfig.baseUrl into account ([Peter Müller](mailto:munter@fumle.dk))
- [#144](https://github.com/assetgraph/assetgraph/pull/144) Keep track of RequireJS relations on JavaScript assets to avoid UMD pattern problems in non-require cases ([Peter Müller](mailto:munter@fumle.dk))
- [#154](https://github.com/assetgraph/assetgraph/pull/154) transforms\/flattenRequireJs: When adding a require call at the end of a ... ([Peter Müller](mailto:munter@fumle.dk))
- [#151](https://github.com/assetgraph/assetgraph/pull/151) Model dart2js compiled application\/dart scripts. ([Peter Müller](mailto:munter@fumle.dk))
- [#142](https://github.com/assetgraph/assetgraph/pull/142) Lower severity level of partially parsed CSS to warning isntead of error ([Peter Müller](mailto:munter@fumle.dk))
- [#150](https://github.com/assetgraph/assetgraph/pull/150) Model Jsx files and relations ([Peter Müller](mailto:munter@fumle.dk))
- [#145](https://github.com/assetgraph/assetgraph/pull/145) cleaning out some old stuff ([Sean Lang](mailto:slang800@gmail.com))
- [#132](https://github.com/assetgraph/assetgraph/pull/132) RequireJs Almond replacement ([Peter Müller](mailto:munter@fumle.dk))
- [#121](https://github.com/assetgraph/assetgraph/pull/121) Introduce new 'info' warning level. ([Peter Müller](mailto:munter@fumle.dk))
- [#125](https://github.com/assetgraph/assetgraph/pull/125) Optionalarguments in requirejs commonjs comatible syntax ([Peter Müller](mailto:munter@fumle.dk))
- [#126](https://github.com/assetgraph/assetgraph/pull/126) Htmltemplate implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#123](https://github.com/assetgraph/assetgraph/pull/123) Model HTML imports ([Peter Müller](mailto:munter@fumle.dk))
- [#118](https://github.com/assetgraph/assetgraph/pull/118) corrected code example ([Sean Lang](mailto:slang800@gmail.com))
- [#115](https://github.com/assetgraph/assetgraph/pull/115) Added splitCssIfIeLimitIsReached transform with test cases ([Peter Müller](mailto:munter@fumle.dk))
- [#114](https://github.com/assetgraph/assetgraph/pull/114) Fixed logic to extract file name from path \(on Windows\) ([Munawwar](mailto:munawwarfiroz@hotmail.com))

#### Commits to master

- [Fixed problem with missing callback when svgo throws without returning an error first](https://github.com/assetgraph/assetgraph/commit/8fac85c5c3963f4e7bc0363471d212ebaf27f8e4) ([Peter Müller](mailto:munter@fumle.dk))
- [change name of test group for consistency](https://github.com/assetgraph/assetgraph/commit/faf9aa158bfb709cd5644605807aaf644c28fb14) ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [Added getting started blog post link to README](https://github.com/assetgraph/assetgraph/commit/984c2e522e2b4d1f4e0d468362eb01a2a76e15e0) ([Peter Müller](mailto:munter@fumle.dk))
- [Update glob to 4.0.3.](https://github.com/assetgraph/assetgraph/commit/e7f61db268610601748828dce20e4e372cd33a8c) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [http resolver: Attempt to handle more kinds of pre-response errors emitted by the request object.](https://github.com/assetgraph/assetgraph/commit/61f58dc9915b39b543646de1888927530b68e5b5) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+390 more](https://github.com/assetgraph/assetgraph/compare/v1.5.15...v1.6.43)

### v1.5.15 (2014-06-30)
- [http resolver: Attempt to handle more kinds of pre-response errors emitted by the request object.](https://github.com/assetgraph/assetgraph/commit/824c1ba440ec24bf9e71197d00f3a541abb75dc8) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Disable Travis on v1.5.](https://github.com/assetgraph/assetgraph/commit/3d42ddbb35900693ec80039b9a8210ea96b26b72) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [http resolver: Avoid swallowing errors occurring after the response has started.](https://github.com/assetgraph/assetgraph/commit/275d261715d4b2a1d58a0ffad11df64ccde0c5ff) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Don't throw an exception when getting\/setting 'href' for relation types that it doesn't make sense for.](https://github.com/assetgraph/assetgraph/commit/b24cb9ee9cbf870057fe57ee81951293942e7802) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Use setImmediate instead of process.nextTick if available. \(cherry-picked from commit 3a92a64094dfb83250b424528edc88f730015136\)](https://github.com/assetgraph/assetgraph/commit/5891959d95c19d823ba723353a1b8e70e91d7b38) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+5 more](https://github.com/assetgraph/assetgraph/compare/v1.6.42...v1.5.15)

### v1.6.42 (2014-06-28)

#### Pull requests

- [#202](https://github.com/assetgraph/assetgraph/pull/202) Accord ([Sean Lang](mailto:slang800@gmail.com))
- [#203](https://github.com/assetgraph/assetgraph/pull/203) Improve SvgScript relation test coverage ([Peter Müller](mailto:munter@fumle.dk))
- [#201](https://github.com/assetgraph/assetgraph/pull/201) AssetGraph.query test coverage improvements ([Peter Müller](mailto:munter@fumle.dk))
- [#200](https://github.com/assetgraph/assetgraph/pull/200) relations\/XmlStylesheet: Increase test coverage ([Peter Müller](mailto:munter@fumle.dk))
- [#197](https://github.com/assetgraph/assetgraph/pull/197) Fix SvgStyle Relation ([Peter Müller](mailto:munter@fumle.dk))
- [#194](https://github.com/assetgraph/assetgraph/pull/194) Move transforms\/logEvents from assetgraph-builder to assetgraph ([Peter Müller](mailto:munter@fumle.dk))
- [#193](https://github.com/assetgraph/assetgraph/pull/193) switch from underscore to lodash ([Sean Lang](mailto:slang800@gmail.com))
- [#192](https://github.com/assetgraph/assetgraph/pull/192) use an existing setImmediate shim ([Sean Lang](mailto:slang800@gmail.com))
- [#191](https://github.com/assetgraph/assetgraph/pull/191) relations\/HtmlInlineFragment: Correctly inline relation in xml dom. Rela... ([Peter Müller](mailto:munter@fumle.dk))
- [#190](https://github.com/assetgraph/assetgraph/pull/190) Make writeAssetsToDisc more intuitive ([Peter Müller](mailto:munter@fumle.dk))
- [#189](https://github.com/assetgraph/assetgraph/pull/189) fix travis builds of node 0.8 ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [#185](https://github.com/assetgraph/assetgraph/pull/185) Add support for humans.txt\/author relations. ([Bram Stein](mailto:stein@adobe.com))
- [#176](https://github.com/assetgraph/assetgraph/pull/176) assets\/Html: Replace commonly known templating syntaxes that produce inv... ([Peter Müller](mailto:munter@fumle.dk))
- [#173](https://github.com/assetgraph/assetgraph/pull/173) Bundle discriminator strict ([Peter Müller](mailto:munter@fumle.dk))
- [#171](https://github.com/assetgraph/assetgraph/pull/171) Add script placement in &lt;head&gt; as bundle discriminator ([Peter Müller](mailto:munter@fumle.dk))
- [#165](https://github.com/assetgraph/assetgraph/pull/165) Removed unwanted comma from snippet in README ([Revath S Kumar](mailto:rsk@revathskumar.com))
- [#164](https://github.com/assetgraph/assetgraph/pull/164) Html import fix ([Peter Müller](mailto:munter@fumle.dk))
- [#163](https://github.com/assetgraph/assetgraph/pull/163) Warn when concatenating scripts that might leak strict mode to the global scope ([Peter Müller](mailto:munter@fumle.dk))
- [#160](https://github.com/assetgraph/assetgraph/pull/160) Include inline script templates ([Munawwar Firoz](mailto:munawwarfiroz@hotmail.com))
- [#158](https://github.com/assetgraph/assetgraph/pull/158) Keep consistent Javascript style ([Peter Müller](mailto:munter@fumle.dk))
- [#159](https://github.com/assetgraph/assetgraph/pull/159) data-main should take requireJsConfig.baseUrl into account ([Peter Müller](mailto:munter@fumle.dk))
- [#144](https://github.com/assetgraph/assetgraph/pull/144) Keep track of RequireJS relations on JavaScript assets to avoid UMD pattern problems in non-require cases ([Peter Müller](mailto:munter@fumle.dk))
- [#154](https://github.com/assetgraph/assetgraph/pull/154) transforms\/flattenRequireJs: When adding a require call at the end of a ... ([Peter Müller](mailto:munter@fumle.dk))
- [#151](https://github.com/assetgraph/assetgraph/pull/151) Model dart2js compiled application\/dart scripts. ([Peter Müller](mailto:munter@fumle.dk))
- [#142](https://github.com/assetgraph/assetgraph/pull/142) Lower severity level of partially parsed CSS to warning isntead of error ([Peter Müller](mailto:munter@fumle.dk))
- [#150](https://github.com/assetgraph/assetgraph/pull/150) Model Jsx files and relations ([Peter Müller](mailto:munter@fumle.dk))
- [#145](https://github.com/assetgraph/assetgraph/pull/145) cleaning out some old stuff ([Sean Lang](mailto:slang800@gmail.com))
- [#132](https://github.com/assetgraph/assetgraph/pull/132) RequireJs Almond replacement ([Peter Müller](mailto:munter@fumle.dk))
- [#121](https://github.com/assetgraph/assetgraph/pull/121) Introduce new 'info' warning level. ([Peter Müller](mailto:munter@fumle.dk))
- [#125](https://github.com/assetgraph/assetgraph/pull/125) Optionalarguments in requirejs commonjs comatible syntax ([Peter Müller](mailto:munter@fumle.dk))
- [#126](https://github.com/assetgraph/assetgraph/pull/126) Htmltemplate implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#123](https://github.com/assetgraph/assetgraph/pull/123) Model HTML imports ([Peter Müller](mailto:munter@fumle.dk))
- [#118](https://github.com/assetgraph/assetgraph/pull/118) corrected code example ([Sean Lang](mailto:slang800@gmail.com))
- [#115](https://github.com/assetgraph/assetgraph/pull/115) Added splitCssIfIeLimitIsReached transform with test cases ([Peter Müller](mailto:munter@fumle.dk))
- [#114](https://github.com/assetgraph/assetgraph/pull/114) Fixed logic to extract file name from path \(on Windows\) ([Munawwar](mailto:munawwarfiroz@hotmail.com))

#### Commits to master

- [Handle errors from svgo](https://github.com/assetgraph/assetgraph/commit/9af67b53dab3e5bf16631f3ba1e73a2ac47fbc1b) ([Peter Müller](mailto:munter@fumle.dk))
- [Removed unnecessary semicolon.](https://github.com/assetgraph/assetgraph/commit/2cdf4ebb43b8d864dbe512a16ca0ad11c0eac6d9) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [http resolver: Avoid swallowing errors occurring after the response has started.](https://github.com/assetgraph/assetgraph/commit/aa125e4f6f2e6d2e30a574930d4da569b44fd788) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update cssom-papandreou to 0.2.4-patch6.](https://github.com/assetgraph/assetgraph/commit/f426937dc3bcbe3e0b9ab73fe4262cc0c2b12809) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [http resolver: Test that the retrying logic handles timeouts after the headers have been received.](https://github.com/assetgraph/assetgraph/commit/81c5e731136021e05d6340654dc8a07d06c6871d) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+385 more](https://github.com/assetgraph/assetgraph/compare/v1.5.14...v1.6.42)

### v1.5.14 (2014-06-27)
- [http resolver: Avoid swallowing errors occurring after the response has started.](https://github.com/assetgraph/assetgraph/commit/275d261715d4b2a1d58a0ffad11df64ccde0c5ff) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Don't throw an exception when getting\/setting 'href' for relation types that it doesn't make sense for.](https://github.com/assetgraph/assetgraph/commit/b24cb9ee9cbf870057fe57ee81951293942e7802) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Use setImmediate instead of process.nextTick if available. \(cherry-picked from commit 3a92a64094dfb83250b424528edc88f730015136\)](https://github.com/assetgraph/assetgraph/commit/5891959d95c19d823ba723353a1b8e70e91d7b38) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Release 1.5.11.](https://github.com/assetgraph/assetgraph/commit/fc1b56228c70b718953300799a3e9c449b232ee0) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [JavaScript.isEmpty: Don't break if the asset could not be parsed.](https://github.com/assetgraph/assetgraph/commit/25136b15e0a4ecec0dea4163b43141f61df95951) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v1.6.41...v1.5.14)

### v1.6.41 (2014-06-26)
- [Update cssom-papandreou to 0.2.4-patch6.](https://github.com/assetgraph/assetgraph/commit/f426937dc3bcbe3e0b9ab73fe4262cc0c2b12809) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [http resolver: Test that the retrying logic handles timeouts after the headers have been received.](https://github.com/assetgraph/assetgraph/commit/81c5e731136021e05d6340654dc8a07d06c6871d) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [http resolver test: Also allow an ESOCKETTIMEDOUT error when expecting an ETIMEDOUT.](https://github.com/assetgraph/assetgraph/commit/a88e661b8aef6ca91b76b039cfbdc3750160a3b5) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update mocha to 1.20.1.](https://github.com/assetgraph/assetgraph/commit/bf684c13a3cdcb0503a9f295f2b901079f29b26f) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [http resolver test: Allow ESOCKETTIMEDOUT in addition to ETIMEDOUT. Fixes Travis build.](https://github.com/assetgraph/assetgraph/commit/e8e537b2dae33f2431e593f35972fb6c29716a55) ([Andreas Lind](mailto:andreas@one.com))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v1.6.40...v1.6.41)

### v1.6.40 (2014-06-24)

#### Pull requests

- [#202](https://github.com/assetgraph/assetgraph/pull/202) Accord ([Sean Lang](mailto:slang800@gmail.com))

#### Commits to master

- [add support for named bundles of js\/css relations](https://github.com/assetgraph/assetgraph/commit/bd396a6bf81d5b9ca6e9eafdcff054107a22a7c2) ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [replaceSymbolsInJavaScript: Implemented support for replacing arbitrary LHS expressions.](https://github.com/assetgraph/assetgraph/commit/3d03a38932bfdf7cd5d9dee59e573e40ff1637cb) ([Andreas Lind](mailto:andreas@one.com))

### v1.6.39 (2014-06-19)

#### Pull requests

- [#203](https://github.com/assetgraph/assetgraph/pull/203) Improve SvgScript relation test coverage ([Peter Müller](mailto:munter@fumle.dk))
- [#201](https://github.com/assetgraph/assetgraph/pull/201) AssetGraph.query test coverage improvements ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Html: Removed no longer needed jsdom hack.](https://github.com/assetgraph/assetgraph/commit/2495e9100427e8e4df944bb1817fded137702541) ([Andreas Lind](mailto:andreas@one.com))
- [Update jsdom to 0.11.0.](https://github.com/assetgraph/assetgraph/commit/7c635574d46fb43f4ab84d313e407258a6198eb2) ([Andreas Lind](mailto:andreas@one.com))
- [Update cssom-papandreout to 0.2.4-patch5.](https://github.com/assetgraph/assetgraph/commit/d3d3615a13474bfd6b79ba0695b74366f35954d3) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [SvgStyle test: Don't expect the inline method to throw.](https://github.com/assetgraph/assetgraph/commit/ca088aa06f0af79eceb2316628fcd765e2030a2e) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.38 (2014-06-17)
- [SvgStyle: Don't throw when inline is called, just don't do anything. Fixes buildProduction.](https://github.com/assetgraph/assetgraph/commit/f4c3d73109e654eb814a4afca389b53c94d46fdd) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.37 (2014-06-17)

#### Pull requests

- [#200](https://github.com/assetgraph/assetgraph/pull/200) relations\/XmlStylesheet: Increase test coverage ([Peter Müller](mailto:munter@fumle.dk))
- [#197](https://github.com/assetgraph/assetgraph/pull/197) Fix SvgStyle Relation ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Html.minify: Preserver htmlizer containerless binding comments.](https://github.com/assetgraph/assetgraph/commit/4093f7bedb09dffb7af461d78ea23fbe4770335e) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Svg relations: Fixed usage of -NS suffixed XML DOM methods.](https://github.com/assetgraph/assetgraph/commit/d37c08f0a824c1ca2dda8787f0101a4a090998e8) ([Andreas Lind](mailto:andreas@one.com))
- [Fixed wrong name on coveralls config file](https://github.com/assetgraph/assetgraph/commit/0d3da35da0d6960efc41628ce348b31773a4ea2b) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.36 (2014-06-14)
- [Fixed HtmlInlineFragment test now that RssChannelLink is modelled.](https://github.com/assetgraph/assetgraph/commit/6b11c3bcd803b1f86c4601cceaf03a8cc8f01caf) ([Andreas Lind](mailto:andreas@one.com))
- [Added updateAssets and updateRelations transforms and deprecated some transforms that can be trivially replaced with updateAssets.](https://github.com/assetgraph/assetgraph/commit/fb6712521e96d9cc43fea4c86eed7d5143e97b89) ([Andreas Lind](mailto:andreas@one.com))
- [Rss: Model &lt;channel&gt;&lt;link&gt;...&lt;\/link&gt;&lt;\/channel&gt; as a relation.](https://github.com/assetgraph/assetgraph/commit/82aa9a5d0e95ebcfe74e49c7878d256c4fc54cfe) ([Andreas Lind](mailto:andreas@one.com))

### v1.6.35 (2014-06-13)

#### Pull requests

- [#194](https://github.com/assetgraph/assetgraph/pull/194) Move transforms\/logEvents from assetgraph-builder to assetgraph ([Peter Müller](mailto:munter@fumle.dk))
- [#193](https://github.com/assetgraph/assetgraph/pull/193) switch from underscore to lodash ([Sean Lang](mailto:slang800@gmail.com))
- [#192](https://github.com/assetgraph/assetgraph/pull/192) use an existing setImmediate shim ([Sean Lang](mailto:slang800@gmail.com))

#### Commits to master

- [logEvents: Try to make absolute paths in error messages \(such as require\('fs'\) ones\) relative to CWD before graying out the path to the root of the AssetGraph instance.](https://github.com/assetgraph/assetgraph/commit/7020625f8b3c920544fd1edf3333fb09cf0fc91a) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [populate: Use asset.urlOrDescription when reporting the assets that reference an asset that could not be loaded.](https://github.com/assetgraph/assetgraph/commit/291bee5f8af52c863c5f4137d16c1fe8c74fe81d) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Added Coveralls.io code coverage feedback](https://github.com/assetgraph/assetgraph/commit/aeacf981d0115e0c89aabd51fa98355d69baffbd) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.34 (2014-06-07)
- [transforms\/writeAssetsToDisc: Guard against missing outRoot](https://github.com/assetgraph/assetgraph/commit/3ec78371d20d622cd2c77cb6dd0a04471fcbff83) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.33 (2014-06-07)

#### Pull requests

- [#191](https://github.com/assetgraph/assetgraph/pull/191) relations\/HtmlInlineFragment: Correctly inline relation in xml dom. Rela... ([Peter Müller](mailto:munter@fumle.dk))
- [#190](https://github.com/assetgraph/assetgraph/pull/190) Make writeAssetsToDisc more intuitive ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Added coverage directory to jshintignore](https://github.com/assetgraph/assetgraph/commit/96c9f2490b61c2bd8421bffc1c0841fd854ef543) ([Peter Müller](mailto:munter@fumle.dk))
- [Fixed unused require.](https://github.com/assetgraph/assetgraph/commit/255d884adb33511aae14e7bbce2ea02656f04f45) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [compileLessToCss: Improve reporting of errors.](https://github.com/assetgraph/assetgraph/commit/24cc3eee55a0c85dabdf5666ba38417345d1745a) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [replaceSymbolsInJavascript: assert that warnings are emitted.](https://github.com/assetgraph/assetgraph/commit/ae8a88f5088cac0c2ad2137c736ed5fcb6a35006) ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [transforms\/inlineCssImagesWithLegacyFallback: Don't die if a cssImage hasn't been loaded](https://github.com/assetgraph/assetgraph/commit/3b16d03f567e2940a745fb40365829201db48b36) ([Peter Müller](mailto:munter@fumle.dk))
- [+11 more](https://github.com/assetgraph/assetgraph/compare/v1.6.32...v1.6.33)

### v1.6.32 (2014-05-28)
- [replaceSymbolsInJavaScript: Added pending tests for some nice to have features.](https://github.com/assetgraph/assetgraph/commit/e37c3f30f0261ff89b22a3f0adf3e23a84d1f2e2) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [replaceSymbolsInJavaScript: Support primitive values besides strings.](https://github.com/assetgraph/assetgraph/commit/eae2585a22ac8cb92ffc55c0139e39824a72d4be) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [replaceSymbolsInJavaScript: make it work nicely with objects.](https://github.com/assetgraph/assetgraph/commit/e53a15cb9fed636bf85a32bf6aecb8e00f575379) ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [clone the AST before inserting it.](https://github.com/assetgraph/assetgraph/commit/cdf86664df7027593708fa41ba4d18e02ef65fb9) ([Gustav Nikolaj Olsen](mailto:gno@one.com))
- [Added replaceSymbolsInJavaScript transform \(adopted from assetgraph-builder\).](https://github.com/assetgraph/assetgraph/commit/38d13b4eed8a4a0aa0a7301794208ec235f8b068) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v1.6.31...v1.6.32)

### v1.6.31 (2014-05-26)
- [ensureAssetConfigHasType: Attempt not to die when the file command cannot be executed to guess the content type of an asset with an unrecognized extension \(eg. on Windows\).](https://github.com/assetgraph/assetgraph/commit/a7b9795181d47f12beaa25ccdee293a1dc74465f) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Travis: Disable node.js 0.8.](https://github.com/assetgraph/assetgraph/commit/35297f82105e6a0b9e105cf21e7955ceadf01f64) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.30 (2014-05-23)

#### Pull requests

- [#189](https://github.com/assetgraph/assetgraph/pull/189) fix travis builds of node 0.8 ([Gustav Nikolaj Olsen](mailto:gno@one.com))

#### Commits to master

- [Added removeEmptyJavaScripts and removeEmptyStylesheets transforms.](https://github.com/assetgraph/assetgraph/commit/1c416331c370a65574724a3c788850bf487bfdbd) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [bundleRelations: Ignore the charset attribute when deciding whether a relation can be bundled.](https://github.com/assetgraph/assetgraph/commit/61958167c7e35c9eff3c28a8eed2b56f7919486f) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [HtmlStyle: Preserve all extra attributes when converting back and forth between &lt;link&gt; and &lt;style&gt;.](https://github.com/assetgraph/assetgraph/commit/2ed2aa57b60baa5ce6e5a3256456404e42be69e8) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [bundleRelations: Don't bundle stylesheets found in &lt;head&gt; with ones found in &lt;body&gt;.](https://github.com/assetgraph/assetgraph/commit/b7fe9a5970fb9cf5b8af4d218c84b6f2438f187a) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [bundleRelations: Don't attempt to bundle unloaded scripts and stylesheets.](https://github.com/assetgraph/assetgraph/commit/525425aba8efadb2f6d0e948100a5beafcba221d) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+5 more](https://github.com/assetgraph/assetgraph/compare/v1.6.29...v1.6.30)

### v1.6.29 (2014-05-20)
- [Normalize the root url.](https://github.com/assetgraph/assetgraph/commit/f414f95993ba6193e850753fa268d5bcdde1c4fc) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update unexpected to 3.2.0.](https://github.com/assetgraph/assetgraph/commit/57769395ffda87b419cebf6050662128eb07ee65) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Tests: Add custom type for relations.](https://github.com/assetgraph/assetgraph/commit/2a91ab1d18d6e29862316257464d975b5be54540) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Tests: Use unexpected-jsdom.](https://github.com/assetgraph/assetgraph/commit/5e440b7c19d8b9efd56195df9d1021bac49bce80) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Asset: Fixed test bug that passed because of a bug in unexpected.](https://github.com/assetgraph/assetgraph/commit/64f452d67b0219b9b981716039bb0d72cdec9c34) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.28 (2014-05-13)
- [Update createerror to 0.4.1.](https://github.com/assetgraph/assetgraph/commit/5adec8ff9e4ae55881d9af3416d591e87a52cadc) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.27 (2014-05-13)
- [Degrade another warning to info status.](https://github.com/assetgraph/assetgraph/commit/289b6d31df044e84db174ea5f247014a289b8618) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Reorganized test suite into directories, added mocha.opts.](https://github.com/assetgraph/assetgraph/commit/c828fc5d7d27c04b28741d8ae56f21a1e78e2cf0) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Stop depending on and running vows.](https://github.com/assetgraph/assetgraph/commit/f1eb03c86d8b93234d2456c0c528d4a6d556ed51) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Converted HtmlInlineEventHandler test to mocha.](https://github.com/assetgraph/assetgraph/commit/6dec22c8b3bc66553a931d77f8c4b852c697bcba) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Converted Xml test to mocha.](https://github.com/assetgraph/assetgraph/commit/b2dee924a4f15c951f5d7ecaf2684fe5cb06f4d1) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+105 more](https://github.com/assetgraph/assetgraph/compare/v1.6.26...v1.6.27)

### v1.6.26 (2014-04-25)
- [Fixed stupid typo that broke everything.](https://github.com/assetgraph/assetgraph/commit/64e12e5d1dc55e003c8898e98ce9738c17a49b77) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.25 (2014-04-25)
- [asset.urlOrDescription: On second thought, make file:\/\/ urls come out as file system paths relative to CWD.](https://github.com/assetgraph/assetgraph/commit/2a9d32870bb135f273cc33f716f515c226abc832) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [asset.urlOrDescription: Make the url relative to the root of the AssetGraph instance if possible.](https://github.com/assetgraph/assetgraph/commit/6832375bf4e481dddab859136e2deb58f8a89bd4) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Whoops, errors passed to 'cb' by a transform should still be emitted as 'error' events.](https://github.com/assetgraph/assetgraph/commit/9d4e216ea148a1457572c206b8981dc9c1b2f4df) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [flattenRequireJs: Comment out a test that sometimes fails due to a race condition. The code it's testing is about to get rewritten anyway.](https://github.com/assetgraph/assetgraph/commit/6240612686c0ab68fbec6d90673d79cd228c46e7) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.24 (2014-04-22)
- [Removed the dieOnError option now that 'error' events are no longer emitted.](https://github.com/assetgraph/assetgraph/commit/e1a77d64f019e2f8f93b41255dc2d504c69ec744) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Degrade all errors to warnings.](https://github.com/assetgraph/assetgraph/commit/7b6a2ee4a2e8c9dc88cf92e047dfb519e573b5b1) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.23 (2014-04-18)
- [Css.prototype.inline: Fixed test for whether the node is already &lt;style&gt; rather than &lt;link rel="stylesheet"&gt;](https://github.com/assetgraph/assetgraph/commit/cd52284134c8874ca20b08426d24597e97017c15) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.22 (2014-04-17)

#### Pull requests

- [#185](https://github.com/assetgraph/assetgraph/pull/185) Add support for humans.txt\/author relations. ([Bram Stein](mailto:stein@adobe.com))

#### Commits to master

- [HtmlShortcutIcon.attach: Default to put put the &lt;link&gt; node at the end of &lt;head&gt; if no position\/adjacentRelation is specified.](https://github.com/assetgraph/assetgraph/commit/8ca591e6b0408bbe1408218910df25f89f5db762) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.21 (2014-04-11)
- [Update glob to 3.2.9.](https://github.com/assetgraph/assetgraph/commit/063bd6124591476be9dead9ae650f5d64229c81f) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [mergeIdenticalAssets: Don't merge assets of different types.](https://github.com/assetgraph/assetgraph/commit/9262a8321efebe977f6936ef42f3cb815991f8f8) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [minifySvgAssetsWithSvgo: Emit an 'info' event rather than 'warn' if svgo isn't found.](https://github.com/assetgraph/assetgraph/commit/0b9929a7344482a72131ea67e3ea0f2e03de2b3b) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update uglify-js-papandreou to 2.4.13-patch1.](https://github.com/assetgraph/assetgraph/commit/5ba2d0dd7d3309831b69891d4d01664afa57d9fe) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.20 (2014-04-07)

#### Pull requests

- [#176](https://github.com/assetgraph/assetgraph/pull/176) assets\/Html: Replace commonly known templating syntaxes that produce inv... ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Update jsdom to 0.10.5.](https://github.com/assetgraph/assetgraph/commit/2dcc413edd1c6ff28deb035660e91cb6bfd4960b) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update jsdom to 0.10.4.](https://github.com/assetgraph/assetgraph/commit/976bb8e8795f0783264ffc9ecd3eb8902d765b3d) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [package.json: Ordered dependencies alphabetically.](https://github.com/assetgraph/assetgraph/commit/41037cd223c4d619908c44606290ad70fc0a92b0) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.19 (2014-03-27)
- [replaceRequireJsWithAlmond: Don't leave a &lt;script&gt; pointing at require.js when replacing it with almond.js \(introduced in d55ee47\).](https://github.com/assetgraph/assetgraph/commit/54f0c4e3f82115c5a75895b373c2db587392ba6d) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.18 (2014-03-27)
- [replaceRequireJsWithAlmond: Fixed some bugs and added tests.](https://github.com/assetgraph/assetgraph/commit/d55ee47ba129b10753b6bd8625e38c3972ec7880) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Fixed jshint complaints.](https://github.com/assetgraph/assetgraph/commit/62cfa4ec46765893196cdbbea0f100e6c97d66fa) ([Peter Müller](mailto:munter@fumle.dk))
- [resolveCommonJsModuleName: Fixed accidental global var.](https://github.com/assetgraph/assetgraph/commit/4a27991178aaea5b1a756eb74bc98797399dd428) ([Peter Müller](mailto:munter@fumle.dk))
- [gitter.im and travs fun](https://github.com/assetgraph/assetgraph/commit/06cc7d0a72bae367928a6fd1b558e4fb461489a3) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.17 (2014-03-26)
- [Added minifySvgAssetsWithSvgo transform.](https://github.com/assetgraph/assetgraph/commit/d54c62d435afd37570b4ea8de35fdb0828f0d4f8) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.16 (2014-03-25)
- [JavaScriptCommonJsRequire: Keep track of the hrefType.](https://github.com/assetgraph/assetgraph/commit/08d4e47e5cdf127dc6822f5dbe636b92ac728940) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Put the hack for resolving JavaScriptCommonJsRequire relations into a separate module.](https://github.com/assetgraph/assetgraph/commit/8a4e824f5c48a90984d40cafb5c2bb7454fc4266) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Model &lt;link rel="logo" href="..."&gt; as a relation.](https://github.com/assetgraph/assetgraph/commit/4c15bf266b1c4a6a3e0f73753b9d1726fe08518d) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [lookupContentType: Match known Content-Types with or without +xml suffix.](https://github.com/assetgraph/assetgraph/commit/3410bc4b80f17791974b6e923367295aa2800868) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Removed empty file: lib\/assets\/index.js](https://github.com/assetgraph/assetgraph/commit/a4a640286a03502d734e4e64c3f4935968b6597b) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+3 more](https://github.com/assetgraph/assetgraph/compare/v1.6.15...v1.6.16)

### v1.6.15 (2014-03-11)
- [Update cssom-papandreou to 0.2.4-patch4.](https://github.com/assetgraph/assetgraph/commit/c662d5169f2b70d265881c61423332fb97f70851) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Css test: Added another level inside test\/Css](https://github.com/assetgraph/assetgraph/commit/be294378afa11b87ae1487bb0ccf1f3722e1ce27) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Disabled prepublish hook. It screws us on TRavis and doesn't even work the way it was supposed to any more](https://github.com/assetgraph/assetgraph/commit/182261b5dfc67ed1496e0d6f6724ded6381de6f7) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.14 (2014-03-04)

#### Pull requests

- [#173](https://github.com/assetgraph/assetgraph/pull/173) Bundle discriminator strict ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Speed up splitCss transform tests](https://github.com/assetgraph/assetgraph/commit/0a85240cd71ef15750018038d62bfb56c7a5fbcc) ([Peter Müller](mailto:munter@fumle.dk))
- [Human readable file name output from splitCss transform](https://github.com/assetgraph/assetgraph/commit/c0979a4eecdbd9021f7def3a2f483c51161009a1) ([Peter Müller](mailto:munter@fumle.dk))
- [Release 1.6.13.](https://github.com/assetgraph/assetgraph/commit/081240541e4edbca44377538225b1fa16a396b50) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [bundleRelations: Don't rely on node.matchesSelector, which does not work for documents that don't have an &lt;html&gt; element.](https://github.com/assetgraph/assetgraph/commit/8451327d32a206c67b5326d4eada2e4e4daccbfb) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Modified flattenRequireJs test so the Travis output has a better chance of telling me why it fails.](https://github.com/assetgraph/assetgraph/commit/a660a2a82752f386b1f57a54fd38939888917a46) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+13 more](https://github.com/assetgraph/assetgraph/compare/v1.6.11...v1.6.14)

### v1.6.11 (2014-02-18)

#### Pull requests

- [#171](https://github.com/assetgraph/assetgraph/pull/171) Add script placement in &lt;head&gt; as bundle discriminator ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [Update README.md](https://github.com/assetgraph/assetgraph/commit/0d97667c186e7387d1bf70c91433fb1ed5ec45ef) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.10 (2014-02-13)

#### Pull requests

- [#165](https://github.com/assetgraph/assetgraph/pull/165) Removed unwanted comma from snippet in README ([Revath S Kumar](mailto:rsk@revathskumar.com))

#### Commits to master

- [Update package.json with new repository url](https://github.com/assetgraph/assetgraph/commit/b1861a4835cf905c56f8931d2775ce40b3866fdb) ([Peter Müller](mailto:munter@fumle.dk))
- [More badge fixes in README](https://github.com/assetgraph/assetgraph/commit/e24f170c380fdc1cfbb941d6277cef9bf2d99832) ([Peter Müller](mailto:munter@fumle.dk))
- [Updated Travis badges to point at the new organization](https://github.com/assetgraph/assetgraph/commit/214acbdf75f28b9d946ed6fed74e36531fc92252) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update cssom-papandreou to 0.2.4-patch3.](https://github.com/assetgraph/assetgraph/commit/7234d0ad5c4c3387355a3f5a8afb317670ba0df7) ([Peter Müller](mailto:munter@fumle.dk))

### v1.6.9 (2014-02-12)

#### Pull requests

- [#164](https://github.com/assetgraph/assetgraph/pull/164) Html import fix ([Peter Müller](mailto:munter@fumle.dk))
- [#163](https://github.com/assetgraph/assetgraph/pull/163) Warn when concatenating scripts that might leak strict mode to the global scope ([Peter Müller](mailto:munter@fumle.dk))
- [#160](https://github.com/assetgraph/assetgraph/pull/160) Include inline script templates ([Munawwar Firoz](mailto:munawwarfiroz@hotmail.com))
- [#158](https://github.com/assetgraph/assetgraph/pull/158) Keep consistent Javascript style ([Peter Müller](mailto:munter@fumle.dk))
- [#159](https://github.com/assetgraph/assetgraph/pull/159) data-main should take requireJsConfig.baseUrl into account ([Peter Müller](mailto:munter@fumle.dk))
- [#144](https://github.com/assetgraph/assetgraph/pull/144) Keep track of RequireJS relations on JavaScript assets to avoid UMD pattern problems in non-require cases ([Peter Müller](mailto:munter@fumle.dk))
- [#154](https://github.com/assetgraph/assetgraph/pull/154) transforms\/flattenRequireJs: When adding a require call at the end of a ... ([Peter Müller](mailto:munter@fumle.dk))
- [#151](https://github.com/assetgraph/assetgraph/pull/151) Model dart2js compiled application\/dart scripts. ([Peter Müller](mailto:munter@fumle.dk))
- [#142](https://github.com/assetgraph/assetgraph/pull/142) Lower severity level of partially parsed CSS to warning isntead of error ([Peter Müller](mailto:munter@fumle.dk))
- [#150](https://github.com/assetgraph/assetgraph/pull/150) Model Jsx files and relations ([Peter Müller](mailto:munter@fumle.dk))
- [#145](https://github.com/assetgraph/assetgraph/pull/145) cleaning out some old stuff ([Sean Lang](mailto:slang800@gmail.com))
- [#132](https://github.com/assetgraph/assetgraph/pull/132) RequireJs Almond replacement ([Peter Müller](mailto:munter@fumle.dk))
- [#121](https://github.com/assetgraph/assetgraph/pull/121) Introduce new 'info' warning level. ([Peter Müller](mailto:munter@fumle.dk))
- [#125](https://github.com/assetgraph/assetgraph/pull/125) Optionalarguments in requirejs commonjs comatible syntax ([Peter Müller](mailto:munter@fumle.dk))
- [#126](https://github.com/assetgraph/assetgraph/pull/126) Htmltemplate implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#123](https://github.com/assetgraph/assetgraph/pull/123) Model HTML imports ([Peter Müller](mailto:munter@fumle.dk))
- [#118](https://github.com/assetgraph/assetgraph/pull/118) corrected code example ([Sean Lang](mailto:slang800@gmail.com))
- [#115](https://github.com/assetgraph/assetgraph/pull/115) Added splitCssIfIeLimitIsReached transform with test cases ([Peter Müller](mailto:munter@fumle.dk))
- [#114](https://github.com/assetgraph/assetgraph/pull/114) Fixed logic to extract file name from path \(on Windows\) ([Munawwar](mailto:munawwarfiroz@hotmail.com))

#### Commits to master

- [Update jsdom to 0.10.0.](https://github.com/assetgraph/assetgraph/commit/3ce2727f78a5ba80629fa84a64e41d6865ed0ab7) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Don't throw an exception when getting\/setting 'href' for relation types that it doesn't make sense for.](https://github.com/assetgraph/assetgraph/commit/b9600fcde66555972e04a0b82ccdf204fd8cee89) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Revert "Merge pull request \#159 from One-com\/baseUrlDataMain"](https://github.com/assetgraph/assetgraph/commit/440c4bf1ddd9fce4d6f7ea7c0326a0918c214c42) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Use the just published urltools instead of git:\/\/github.com\/slang800\/url-tools.git](https://github.com/assetgraph/assetgraph/commit/05fbc69607c64303090399f1553e49b90b9fe993) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [flattenRequireJs test added in f3a87c9: Don't assert anything about how the JavaScript comes out.](https://github.com/assetgraph/assetgraph/commit/33bea15db7e598255d45980380ff24f4b49bc11d) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+149 more](https://github.com/assetgraph/assetgraph/compare/v1.5.13...v1.6.9)

### v1.5.13 (2014-02-04)
- [Don't throw an exception when getting\/setting 'href' for relation types that it doesn't make sense for.](https://github.com/assetgraph/assetgraph/commit/b24cb9ee9cbf870057fe57ee81951293942e7802) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Use setImmediate instead of process.nextTick if available. \(cherry-picked from commit 3a92a64094dfb83250b424528edc88f730015136\)](https://github.com/assetgraph/assetgraph/commit/5891959d95c19d823ba723353a1b8e70e91d7b38) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Release 1.5.11.](https://github.com/assetgraph/assetgraph/commit/fc1b56228c70b718953300799a3e9c449b232ee0) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [JavaScript.isEmpty: Don't break if the asset could not be parsed.](https://github.com/assetgraph/assetgraph/commit/25136b15e0a4ecec0dea4163b43141f61df95951) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Release 1.5.10.](https://github.com/assetgraph/assetgraph/commit/0098732bb4fe6134425ffbadbb43063774722cd1) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+2 more](https://github.com/assetgraph/assetgraph/compare/v1.6.8...v1.5.13)

### v1.6.8 (2014-01-31)
- [Revert "Merge pull request \#159 from One-com\/baseUrlDataMain"](https://github.com/assetgraph/assetgraph/commit/440c4bf1ddd9fce4d6f7ea7c0326a0918c214c42) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.7 (2014-01-28)
- [Use the just published urltools instead of git:\/\/github.com\/slang800\/url-tools.git](https://github.com/assetgraph/assetgraph/commit/05fbc69607c64303090399f1553e49b90b9fe993) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [flattenRequireJs test added in f3a87c9: Don't assert anything about how the JavaScript comes out.](https://github.com/assetgraph/assetgraph/commit/33bea15db7e598255d45980380ff24f4b49bc11d) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.6 (2014-01-28)
- [flattenRequireJs: Emit an error if a module is referred both with and without a .js extension. Previously this would silently produce a broken build.](https://github.com/assetgraph/assetgraph/commit/f3a87c90269ab4907267b0f2a68716595002746b) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.5 (2014-01-27)
- [flattenRequireJs: Degrade &lt;url&gt; is referred to as both &lt;moduleName1&gt; and &lt;moduleName2&gt; from 'warning' to 'info' status.](https://github.com/assetgraph/assetgraph/commit/74fd7f5a04e7217efebeaf7b1148f4c193051e74) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.4 (2014-01-27)

#### Pull requests

- [#160](https://github.com/assetgraph/assetgraph/pull/160) Include inline script templates ([Munawwar Firoz](mailto:munawwarfiroz@hotmail.com))
- [#158](https://github.com/assetgraph/assetgraph/pull/158) Keep consistent Javascript style ([Peter Müller](mailto:munter@fumle.dk))
- [#159](https://github.com/assetgraph/assetgraph/pull/159) data-main should take requireJsConfig.baseUrl into account ([Peter Müller](mailto:munter@fumle.dk))

#### Commits to master

- [JavaScript: Degrade 'Skipping non-string JavaScriptAmdRequire item' to 'info' status. Looks like it's quite common.](https://github.com/assetgraph/assetgraph/commit/1ab33ca23b769665497f428622b9e18ff92c8930) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update jsdom to 0.8.11. See \#141.](https://github.com/assetgraph/assetgraph/commit/95862ec7abc9298beec988f57cfb0b5e54d485cf) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.3 (2014-01-20)

#### Pull requests

- [#144](https://github.com/assetgraph/assetgraph/pull/144) Keep track of RequireJS relations on JavaScript assets to avoid UMD pattern problems in non-require cases ([Peter Müller](mailto:munter@fumle.dk))
- [#154](https://github.com/assetgraph/assetgraph/pull/154) transforms\/flattenRequireJs: When adding a require call at the end of a ... ([Peter Müller](mailto:munter@fumle.dk))
- [#151](https://github.com/assetgraph/assetgraph/pull/151) Model dart2js compiled application\/dart scripts. ([Peter Müller](mailto:munter@fumle.dk))
- [#142](https://github.com/assetgraph/assetgraph/pull/142) Lower severity level of partially parsed CSS to warning isntead of error ([Peter Müller](mailto:munter@fumle.dk))
- [#150](https://github.com/assetgraph/assetgraph/pull/150) Model Jsx files and relations ([Peter Müller](mailto:munter@fumle.dk))
- [#145](https://github.com/assetgraph/assetgraph/pull/145) cleaning out some old stuff ([Sean Lang](mailto:slang800@gmail.com))
- [#132](https://github.com/assetgraph/assetgraph/pull/132) RequireJs Almond replacement ([Peter Müller](mailto:munter@fumle.dk))
- [#121](https://github.com/assetgraph/assetgraph/pull/121) Introduce new 'info' warning level. ([Peter Müller](mailto:munter@fumle.dk))
- [#125](https://github.com/assetgraph/assetgraph/pull/125) Optionalarguments in requirejs commonjs comatible syntax ([Peter Müller](mailto:munter@fumle.dk))
- [#126](https://github.com/assetgraph/assetgraph/pull/126) Htmltemplate implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#123](https://github.com/assetgraph/assetgraph/pull/123) Model HTML imports ([Peter Müller](mailto:munter@fumle.dk))
- [#118](https://github.com/assetgraph/assetgraph/pull/118) corrected code example ([Sean Lang](mailto:slang800@gmail.com))
- [#115](https://github.com/assetgraph/assetgraph/pull/115) Added splitCssIfIeLimitIsReached transform with test cases ([Peter Müller](mailto:munter@fumle.dk))
- [#114](https://github.com/assetgraph/assetgraph/pull/114) Fixed logic to extract file name from path \(on Windows\) ([Munawwar](mailto:munawwarfiroz@hotmail.com))

#### Commits to master

- [Added Peter to maintainers](https://github.com/assetgraph/assetgraph/commit/42d0816ea91105c7be0aa381f8734c1a24a87d1f) ([Peter Müller](mailto:munter@fumle.dk))
- [Update jsdom to 0.8.10](https://github.com/assetgraph/assetgraph/commit/a4341e7e4c33796763d61607437e9042c0bdcf7f) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [package.json: Hardcode the version numbers of the mkdir and imageinfo dependencies.](https://github.com/assetgraph/assetgraph/commit/7b730df988d81b7528729b5d2fec934828bb8422) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Added transform for setting isFragment to false on assets without incoming relations \(One-com\/assetgraph-builder\#109\).](https://github.com/assetgraph/assetgraph/commit/a03feacf36bf8533ca728701cb1992bda020263f) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Disable the YUICompressor and closure compiler tests](https://github.com/assetgraph/assetgraph/commit/f95cf530a32f0637536e606d864139d0cde80372) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+140 more](https://github.com/assetgraph/assetgraph/compare/v1.5.12...v1.6.3)

### v1.5.12 (2014-01-17)
- [Use setImmediate instead of process.nextTick if available. \(cherry-picked from commit 3a92a64094dfb83250b424528edc88f730015136\)](https://github.com/assetgraph/assetgraph/commit/5891959d95c19d823ba723353a1b8e70e91d7b38) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Release 1.5.11.](https://github.com/assetgraph/assetgraph/commit/fc1b56228c70b718953300799a3e9c449b232ee0) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [JavaScript.isEmpty: Don't break if the asset could not be parsed.](https://github.com/assetgraph/assetgraph/commit/25136b15e0a4ecec0dea4163b43141f61df95951) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Release 1.5.10.](https://github.com/assetgraph/assetgraph/commit/0098732bb4fe6134425ffbadbb43063774722cd1) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [flattenStaticIncludes: Also add &lt;link rel="stylesheet" href=...&gt; tags pointing at .less files to the HTML.](https://github.com/assetgraph/assetgraph/commit/457748b9ba371cb18d5f63d62596cd92186ee775) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+1 more](https://github.com/assetgraph/assetgraph/compare/v1.6.2...v1.5.12)

### v1.6.2 (2014-01-14)
- [Added transform for setting isFragment to false on assets without incoming relations \(One-com\/assetgraph-builder\#109\).](https://github.com/assetgraph/assetgraph/commit/a03feacf36bf8533ca728701cb1992bda020263f) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Disable the YUICompressor and closure compiler tests](https://github.com/assetgraph/assetgraph/commit/f95cf530a32f0637536e606d864139d0cde80372) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.1 (2014-01-10)

#### Pull requests

- [#151](https://github.com/assetgraph/assetgraph/pull/151) Model dart2js compiled application\/dart scripts. ([Peter Müller](mailto:munter@fumle.dk))
- [#142](https://github.com/assetgraph/assetgraph/pull/142) Lower severity level of partially parsed CSS to warning isntead of error ([Peter Müller](mailto:munter@fumle.dk))
- [#150](https://github.com/assetgraph/assetgraph/pull/150) Model Jsx files and relations ([Peter Müller](mailto:munter@fumle.dk))
- [#145](https://github.com/assetgraph/assetgraph/pull/145) cleaning out some old stuff ([Sean Lang](mailto:slang800@gmail.com))

#### Commits to master

- [Update closure-compiler to 0.2.3.](https://github.com/assetgraph/assetgraph/commit/111924e0d939fef508243a9c731165f295081dd7) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Removed bufferjs dependency and require node.js &gt;= 0.8.0.](https://github.com/assetgraph/assetgraph/commit/abac7ae3ccfb3c71e2a1b8cf08d452de4a20248f) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Added GETSTATICURL test.](https://github.com/assetgraph/assetgraph/commit/4668464bdb474c0408241ba0a2902c28c9e0f734) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Ignore data-bind attributes that don't parse as Knockout.js ones \(JavaScript object literals\).](https://github.com/assetgraph/assetgraph/commit/15ace1ada403c1a712ef7683d0d15a78124a677e) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update jsdom to 0.8.9.](https://github.com/assetgraph/assetgraph/commit/9e764b15313efb0c1198bfb9c91d986f3e945dbb) ([Andreas Lind Petersen](mailto:andreas@one.com))

### v1.6.0 (2013-11-28)

#### Pull requests

- [#132](https://github.com/assetgraph/assetgraph/pull/132) RequireJs Almond replacement ([Peter Müller](mailto:munter@fumle.dk))
- [#121](https://github.com/assetgraph/assetgraph/pull/121) Introduce new 'info' warning level. ([Peter Müller](mailto:munter@fumle.dk))
- [#125](https://github.com/assetgraph/assetgraph/pull/125) Optionalarguments in requirejs commonjs comatible syntax ([Peter Müller](mailto:munter@fumle.dk))
- [#126](https://github.com/assetgraph/assetgraph/pull/126) Htmltemplate implementation ([Peter Müller](mailto:munter@fumle.dk))
- [#123](https://github.com/assetgraph/assetgraph/pull/123) Model HTML imports ([Peter Müller](mailto:munter@fumle.dk))
- [#118](https://github.com/assetgraph/assetgraph/pull/118) corrected code example ([Sean Lang](mailto:slang800@gmail.com))
- [#115](https://github.com/assetgraph/assetgraph/pull/115) Added splitCssIfIeLimitIsReached transform with test cases ([Peter Müller](mailto:munter@fumle.dk))
- [#114](https://github.com/assetgraph/assetgraph/pull/114) Fixed logic to extract file name from path \(on Windows\) ([Munawwar](mailto:munawwarfiroz@hotmail.com))
- [#100](https://github.com/assetgraph/assetgraph/pull/100) Relation.resolve for unknown protocols ([Peter Müller](mailto:munter@fumle.dk))
- [#98](https://github.com/assetgraph/assetgraph/pull/98) data-main-attribute now accepts '.js' file endings. Relates to \#97 ([Peter Müller](mailto:munter@fumle.dk))
- [#80](https://github.com/assetgraph/assetgraph/pull/80) Warn instead of error on unknown url scheme ([Peter Müller](mailto:munter@fumle.dk))
- [#72](https://github.com/assetgraph/assetgraph/pull/72) The repo your repo could be like! ([travis4all](mailto:travis4all@diamon.dz))
- [#58](https://github.com/assetgraph/assetgraph/pull/58) \[minor\] Fix a RequireJS module definition ([Karl Guillotte](mailto:karl.guillotte.1@gmail.com))
- [#46](https://github.com/assetgraph/assetgraph/pull/46) Basic support for RequireJS less! plugin ([Bram Stein](mailto:b.l.stein@gmail.com))

#### Commits to master

- [Updated cssom-papandreou to v0.2.4-patch2](https://github.com/assetgraph/assetgraph/commit/d9d4e06c11a13e70761cd809ea9a8517f7922c5f) ([Peter Müller](mailto:munter@fumle.dk))
- [.travis.yml: Disable the node.js 0.6 build job. It keeps failing because 0.6 is no longer supported by jsdom.](https://github.com/assetgraph/assetgraph/commit/da9ad2cc61c9a872010e143d2ef8718b5ab09b98) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [JavaScriptCommonJsRequire test: Fixed paths so they're not only valid on my dev machine \(argh\).](https://github.com/assetgraph/assetgraph/commit/4fb98e3b0930433863a7748970236831075f0dcb) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Release 1.6.0beta29.](https://github.com/assetgraph/assetgraph/commit/f1f23cea1f8bbb694e655983146b3fa7df4bd2fe) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [Update passerror to 1.0.0.](https://github.com/assetgraph/assetgraph/commit/dc27a2a1a3c0c56df20ef5ff0cd936d6f476bca1) ([Andreas Lind Petersen](mailto:andreas@one.com))
- [+1860 more](https://github.com/assetgraph/assetgraph/compare/d9d4e06c11a13e70761cd809ea9a8517f7922c5f%5E...v1.6.0)

