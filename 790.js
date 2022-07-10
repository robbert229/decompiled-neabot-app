var module706 = require('./706'),
  module791 = require('./791'),
  o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  u = /^\w*$/;

module.exports = function (l, b) {
  if (module706(l)) return false;
  var f = typeof l;
  return !('number' != f && 'symbol' != f && 'boolean' != f && null != l && !module791(l)) || u.test(l) || !o.test(l) || (null != b && l in Object(b));
};
