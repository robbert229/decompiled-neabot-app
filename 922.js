require('react');

var module595 = require('./595'),
  u = /^\[missing ".*" translation\]$/,
  f = function (t, f) {
    if ('string' != typeof t) return '';
    var o = module595.default.t(t, f);
    return u.test(o) ? t : o;
  };

exports.default = f;
