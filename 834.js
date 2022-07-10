var module828 = require('./828'),
  module831 = require('./831');

module.exports = function h(l, o, u) {
  return function () {
    for (var f = [], c = 0, p = l, v = 0; v < o.length || c < arguments.length; ) {
      var s;
      if (v < o.length && (!module831(o[v]) || c >= arguments.length)) s = o[v];
      else {
        s = arguments[c];
        c += 1;
      }
      f[v] = s;
      if (!module831(s)) p -= 1;
      v += 1;
    }

    return p <= 0 ? u.apply(this, f) : module828(p, h(l, f, u));
  };
};
