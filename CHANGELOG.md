# Changelog

## 0.1.0-alpha.5 (2025-04-15)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/socialdata-api/typescript-sdk/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#29](https://github.com/socialdata-api/typescript-sdk/issues/29)) ([63cf40b](https://github.com/socialdata-api/typescript-sdk/commit/63cf40b4f723cbafad0c39a43ec49006b66bdd0c))
* **client:** send `X-Stainless-Timeout` in seconds ([#27](https://github.com/socialdata-api/typescript-sdk/issues/27)) ([77e29ee](https://github.com/socialdata-api/typescript-sdk/commit/77e29ee3647814fb87936458a85467090ddec508))
* **client:** send all configured auth headers ([#31](https://github.com/socialdata-api/typescript-sdk/issues/31)) ([dda7dc0](https://github.com/socialdata-api/typescript-sdk/commit/dda7dc0ccd831f339f462d8cbd7c6297290d28b2))
* **exports:** ensure resource imports don't require /index ([#21](https://github.com/socialdata-api/typescript-sdk/issues/21)) ([df125d3](https://github.com/socialdata-api/typescript-sdk/commit/df125d3229ccbb1781b5f4af134be1f87fd37d3c))
* **internal:** add mts file + crypto shim types ([#22](https://github.com/socialdata-api/typescript-sdk/issues/22)) ([2a81b5f](https://github.com/socialdata-api/typescript-sdk/commit/2a81b5f5b8cbe9f3d239ed7ec05ce1d5ef766d3d))
* **internal:** fix file uploads in node 18 jest ([4b4c20d](https://github.com/socialdata-api/typescript-sdk/commit/4b4c20d87294b213f8883a9f034f46f5c611c9fc))
* **mcp:** remove unused tools.ts ([#30](https://github.com/socialdata-api/typescript-sdk/issues/30)) ([91cdce1](https://github.com/socialdata-api/typescript-sdk/commit/91cdce11e46aa4e766be1c25b26721202f15a0cd))


### Chores

* **client:** minor internal fixes ([c7caf69](https://github.com/socialdata-api/typescript-sdk/commit/c7caf69094130bc769038159124db01b1c3e2ade))
* **client:** move misc public files to new `core/` directory, deprecate old paths ([#26](https://github.com/socialdata-api/typescript-sdk/issues/26)) ([ddbf3a8](https://github.com/socialdata-api/typescript-sdk/commit/ddbf3a8a91e5839c14f412c34f380cb41d3e90ed))
* **exports:** cleaner resource index imports ([#24](https://github.com/socialdata-api/typescript-sdk/issues/24)) ([b5d2ad5](https://github.com/socialdata-api/typescript-sdk/commit/b5d2ad568761e4b7d75e797b8eaeef1925673e74))
* **exports:** stop using path fallbacks ([#25](https://github.com/socialdata-api/typescript-sdk/issues/25)) ([b7860b8](https://github.com/socialdata-api/typescript-sdk/commit/b7860b87e17fe34e0085b2d404e7d044d94c4cb3))
* **internal:** add aliases for Record and Array ([#28](https://github.com/socialdata-api/typescript-sdk/issues/28)) ([75fa249](https://github.com/socialdata-api/typescript-sdk/commit/75fa249e24cc1ad19c128f6c623ad7d5539db431))
* **internal:** improve node 18 shims ([b8deb55](https://github.com/socialdata-api/typescript-sdk/commit/b8deb55dc5fbbab937247c983e6148de6163fd43))
* **internal:** minor client file refactoring ([#23](https://github.com/socialdata-api/typescript-sdk/issues/23)) ([a51f040](https://github.com/socialdata-api/typescript-sdk/commit/a51f04026f00b535af54ab8895ac63fbebdb85f8))
* **internal:** reduce CI branch coverage ([b1df171](https://github.com/socialdata-api/typescript-sdk/commit/b1df171507fd4e7b821271595ee4ad1f8f56afdb))
* **internal:** remove extra empty newlines ([#19](https://github.com/socialdata-api/typescript-sdk/issues/19)) ([4fe1748](https://github.com/socialdata-api/typescript-sdk/commit/4fe1748afc444de5b2756f90cae7a0a8a8d359e5))
* **internal:** upload builds and expand CI branch coverage ([9f0fb24](https://github.com/socialdata-api/typescript-sdk/commit/9f0fb24e1048c4ac04508c31e905cfc831e923a2))

## 0.1.0-alpha.4 (2025-03-12)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/socialdata-api/typescript-sdk/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** update via SDK Studio ([e1899bd](https://github.com/socialdata-api/typescript-sdk/commit/e1899bdfabd6cdecf254915c04d181d70c9e6333))
* **api:** update via SDK Studio ([#10](https://github.com/socialdata-api/typescript-sdk/issues/10)) ([e234e6c](https://github.com/socialdata-api/typescript-sdk/commit/e234e6cdf6d193745e0f18190ab287f9dbece4a4))
* **api:** update via SDK Studio ([#13](https://github.com/socialdata-api/typescript-sdk/issues/13)) ([da05b66](https://github.com/socialdata-api/typescript-sdk/commit/da05b66a4a6a272fe3c05dcbbc6aad4c41b726a0))
* **api:** update via SDK Studio ([#15](https://github.com/socialdata-api/typescript-sdk/issues/15)) ([9ece7ca](https://github.com/socialdata-api/typescript-sdk/commit/9ece7ca99ae7378f14acc31a04b628714cc29513))
* **api:** update via SDK Studio ([#17](https://github.com/socialdata-api/typescript-sdk/issues/17)) ([2782f62](https://github.com/socialdata-api/typescript-sdk/commit/2782f62d41e0c17b644d6c783ca3d31f033eb99a))
* **api:** update via SDK Studio ([#3](https://github.com/socialdata-api/typescript-sdk/issues/3)) ([0c723b0](https://github.com/socialdata-api/typescript-sdk/commit/0c723b04db81a5143e9b57d96c7625fe29d70cd0))
* **api:** update via SDK Studio ([#4](https://github.com/socialdata-api/typescript-sdk/issues/4)) ([47cc224](https://github.com/socialdata-api/typescript-sdk/commit/47cc224f1741692eedc9588e6dd408c474cce56d))
* **api:** update via SDK Studio ([#6](https://github.com/socialdata-api/typescript-sdk/issues/6)) ([ef8dcc7](https://github.com/socialdata-api/typescript-sdk/commit/ef8dcc7966573e72834f4d919aed740092ba8a96))
* **api:** update via SDK Studio ([#8](https://github.com/socialdata-api/typescript-sdk/issues/8)) ([179fc72](https://github.com/socialdata-api/typescript-sdk/commit/179fc7210e1363373c50ead7016a4dd3cdefab89))


### Chores

* go live ([#1](https://github.com/socialdata-api/typescript-sdk/issues/1)) ([5f77d37](https://github.com/socialdata-api/typescript-sdk/commit/5f77d378b8994e14840a369bd3ed69792feb9f68))

## 0.1.0-alpha.3 (2025-03-12)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/socialdata-api/typescript-sdk/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** update via SDK Studio ([#10](https://github.com/socialdata-api/typescript-sdk/issues/10)) ([e234e6c](https://github.com/socialdata-api/typescript-sdk/commit/e234e6cdf6d193745e0f18190ab287f9dbece4a4))

## 0.1.0-alpha.2 (2025-03-12)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/socialdata-api/typescript-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** update via SDK Studio ([#6](https://github.com/socialdata-api/typescript-sdk/issues/6)) ([ef8dcc7](https://github.com/socialdata-api/typescript-sdk/commit/ef8dcc7966573e72834f4d919aed740092ba8a96))
* **api:** update via SDK Studio ([#8](https://github.com/socialdata-api/typescript-sdk/issues/8)) ([179fc72](https://github.com/socialdata-api/typescript-sdk/commit/179fc7210e1363373c50ead7016a4dd3cdefab89))

## 0.1.0-alpha.1 (2025-03-12)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/socialdata-api/typescript-sdk/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([e1899bd](https://github.com/socialdata-api/typescript-sdk/commit/e1899bdfabd6cdecf254915c04d181d70c9e6333))
* **api:** update via SDK Studio ([#3](https://github.com/socialdata-api/typescript-sdk/issues/3)) ([0c723b0](https://github.com/socialdata-api/typescript-sdk/commit/0c723b04db81a5143e9b57d96c7625fe29d70cd0))
* **api:** update via SDK Studio ([#4](https://github.com/socialdata-api/typescript-sdk/issues/4)) ([47cc224](https://github.com/socialdata-api/typescript-sdk/commit/47cc224f1741692eedc9588e6dd408c474cce56d))


### Chores

* go live ([#1](https://github.com/socialdata-api/typescript-sdk/issues/1)) ([5f77d37](https://github.com/socialdata-api/typescript-sdk/commit/5f77d378b8994e14840a369bd3ed69792feb9f68))
