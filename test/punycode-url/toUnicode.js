// @flow

import test from 'ava';
import {
  toUnicode,
} from '../../src';

test('converts punycode domain to unicode', (t) => {
  t.is(toUnicode('//xn--gjs-ela5j.com'), '//gájùs.com');
});

test('converts punycode sub-domain to unicode', (t) => {
  t.is(toUnicode('//xn--gjs-ela5j.xn--gjs-ela5j.com'), '//gájùs.gájùs.com');
});
