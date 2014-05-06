# URLUtils

Modern browsers all have a `window.URL` constructor that implements the `URLUtils` interface. It allows parsing and manipulating of URLs. This package offers a shim for Node to implement similar behaviour. It's based on the popular [URIjs](http://medialize.github.io/URI.js/).

## Installation

Command line:
`npm install urlutils`

## Usage

```js
var URL = require('urlutils');
new URL('http://example.com/foobar').pathname; // "/foobar"
```

## References

WHATWG URL Living Standard
<http://url.spec.whatwg.org/>

MDN URL Documentation
<https://developer.mozilla.org/en-US/docs/Web/API/URL>
