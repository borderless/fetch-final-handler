# Fetch Final Handler

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Final HTTP 404 responder for [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), e.g. Cloudflare Workers.

## Installation

```sh
npm install @borderless/fetch-final-handler --save
```

## Usage

```js
import { compose } from "throwback";
import { finalHandler } from "@borderless/fetch-final-handler";

const app = compose([get(), post()]);
const req = new Request("/");

app(req, finalHandler());
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@borderless/fetch-final-handler.svg?style=flat
[npm-url]: https://npmjs.org/package/@borderless/fetch-final-handler
[downloads-image]: https://img.shields.io/npm/dm/@borderless/fetch-final-handler.svg?style=flat
[downloads-url]: https://npmjs.org/package/@borderless/fetch-final-handler
[travis-image]: https://img.shields.io/travis/BorderlessLabs/fetch-final-handler.svg?style=flat
[travis-url]: https://travis-ci.org/BorderlessLabs/fetch-final-handler
[coveralls-image]: https://img.shields.io/coveralls/BorderlessLabs/fetch-final-handler.svg?style=flat
[coveralls-url]: https://coveralls.io/r/BorderlessLabs/fetch-final-handler?branch=master
