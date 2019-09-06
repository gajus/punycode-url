// @flow

import test from 'ava';
import {
  toASCII,
} from '../../src';

test('converts unicode domain to punycode', (t) => {
  t.is(toASCII('//gájùs.com'), '//xn--gjs-ela5j.com');
});

test('converts unicode sub-domain to punycode', (t) => {
  t.is(toASCII('//gájùs.gájùs.com'), '//xn--gjs-ela5j.xn--gjs-ela5j.com');
});
