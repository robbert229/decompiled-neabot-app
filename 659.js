var module660 = require('./660'),
  module663 = require('./663'),
  module664 = require('./664'),
  c = '[object Null]',
  u = '[object Undefined]',
  l = module660 ? module660.toStringTag : undefined;

module.exports = function (n) {
  if (null == n) return undefined === n ? u : c;
  else return l && l in Object(n) ? module663(n) : module664(n);
};
