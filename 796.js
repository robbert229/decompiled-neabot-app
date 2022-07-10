var module660 = require('./660'),
  module697 = require('./697'),
  module706 = require('./706'),
  module791 = require('./791'),
  u = module660 ? module660.prototype : undefined,
  p = u ? u.toString : undefined;

module.exports = function t(u) {
  if ('string' == typeof u) return u;
  if (module706(u)) return module697(u, t) + '';
  if (module791(u)) return p ? p.call(u) : '';
  var v = u + '';
  return '0' == v && 1 / u == -1 / 0 ? '-0' : v;
};
