import server from './server';

require('@babel/register')({
  presets: ['env'],
});
export function idempotentBabelPolyfill() {
  if (
    !global._babelPolyfill &&
    // eslint-disable-next-line no-undef
    (typeof window === 'undefined' || !window._babelPolyfill)
  ) {
    return require('@babel/polyfill');
  }
  return null;
}
require('dotenv').config();

export default server;
