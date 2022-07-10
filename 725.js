var module659 = require('./659'),
  module726 = require('./726'),
  module705 = require('./705'),
  c = '[object Object]',
  u = Function.prototype,
  l = Object.prototype,
  f = u.toString,
  p = l.hasOwnProperty,
  s = f.call(Object);

module.exports = function (u) {
  if (!module705(u) || module659(u) != c) return false;
  var l = module726(u);
  if (null === l) return true;
  var b = p.call(l, 'constructor') && l.constructor;
  return 'function' == typeof b && b instanceof b && f.call(b) == s;
};
