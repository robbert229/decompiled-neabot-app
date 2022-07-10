var module643 = require('./643'),
  module644 = require('./644');

module.exports = function (t, f, u) {
  var l = (f && u) || 0;

  if ('string' == typeof t) {
    f = 'binary' === t ? new Array(16) : null;
    t = null;
  }

  var v = (t = t || {}).random || (t.rng || module643)();
  if (((v[6] = (15 & v[6]) | 64), (v[8] = (63 & v[8]) | 128), f)) for (var y = 0; y < 16; ++y) f[l + y] = v[y];
  return f || module644(v);
};
