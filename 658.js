var module659 = require('./659'),
  module665 = require('./665'),
  o = '[object AsyncFunction]',
  c = '[object Function]',
  u = '[object GeneratorFunction]',
  b = '[object Proxy]';

module.exports = function (j) {
  if (!module665(j)) return false;
  var f = module659(j);
  return f == c || f == u || f == o || f == b;
};
