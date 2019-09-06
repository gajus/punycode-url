# punycode-url

[![Travis build status](http://img.shields.io/travis/gajus/punycode-url/master.svg?style=flat-square)](https://travis-ci.org/gajus/punycode-url)
[![Coveralls](https://img.shields.io/coveralls/gajus/punycode-url.svg?style=flat-square)](https://coveralls.io/github/gajus/punycode-url)
[![NPM version](http://img.shields.io/npm/v/punycode-url.svg?style=flat-square)](https://www.npmjs.org/package/punycode-url)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Encodes/ decodes URLs to punycode/ unicode.

## Usage

```js
import punycodeUrl from 'punycode-url';

punycodeUrl.toASCII('//gájùs.gájùs.com');
// '//xn--gjs-ela5j.xn--gjs-ela5j.com'

punycodeUrl.toUnicode('//xn--gjs-ela5j.xn--gjs-ela5j.com');
// '//gájùs.gájùs.com'

```
