# hangout-chat-tester [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A testing &#34;library&#34; exported as a single function to test locally whether your payload will will render in hangouts chat

## Installation

```sh
$ npm install --save hangout-chat-tester
```

## Usage

```js
// Usage in test files
const isValid = require('hangout-chat-tester');

assert(isValid(cardObject))
```

```js
// Usage in source code
const isValid = require('hangout-chat-tester');

if(isValid(cardObject)){
    res.send(cardObject);
}else{
    res.send({text:"An error occurred"});
}

```
## License

Apache-2.0 © [BaReinhard](https://brettreinhard.com)


[npm-image]: https://badge.fury.io/js/hangout-chat-tester.svg
[npm-url]: https://npmjs.org/package/hangout-chat-tester
[travis-image]: https://travis-ci.org/BaReinhard/hangout-chat-tester.svg?branch=master
[travis-url]: https://travis-ci.org/BaReinhard/hangout-chat-tester
[daviddm-image]: https://david-dm.org/BaReinhard/hangout-chat-tester.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/BaReinhard/hangout-chat-tester
[coveralls-image]: https://coveralls.io/repos/BaReinhard/hangout-chat-tester/badge.svg
[coveralls-url]: https://coveralls.io/r/BaReinhard/hangout-chat-tester
