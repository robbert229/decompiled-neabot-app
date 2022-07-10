var module701 = require('./701'),
  module702 = require('./702');

module.exports = function o(f, u, v, c, h) {
  var l = -1,
    _ = f.length;

  for (v || (v = module702), h || (h = []); ++l < _; ) {
    var p = f[l];
    if (u > 0 && v(p)) u > 1 ? o(p, u - 1, v, c, h) : module701(h, p);
    else if (!c) h[h.length] = p;
  }

  return h;
};
