exports.default = function (t, u, f) {
  if ('string' == typeof t) return module564.default(t).isLight() ? f : u;
  return u;
};

var module564 = require('./564');
