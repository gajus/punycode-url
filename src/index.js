// @flow

import punycode from 'punycode';
import ParsedUrl from 'url-parse';

export const toASCII = (url: string): string => {
  const tokens = new ParsedUrl(url);

  tokens.host = tokens.host
    .split('.')
    .map((token) => {
      return punycode.toASCII(token);
    })
    .join('.');

  return tokens.toString();
};

export const toUnicode = (url: string): string => {
  const tokens = new ParsedUrl(url);

  tokens.host = tokens.host
    .split('.')
    .map((token) => {
      return punycode.toUnicode(token);
    })
    .join('.');

  return tokens.toString();
};
