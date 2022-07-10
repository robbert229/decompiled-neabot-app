var module789 = require('./789'),
  module703 = require('./703'),
  module706 = require('./706'),
  module750 = require('./750'),
  module718 = require('./718'),
  module797 = require('./797');

module.exports = function (v, c, h) {
  for (var _ = -1, b = (c = module789(c, v)).length, k = false; ++_ < b; ) {
    var p = module797(c[_]);
    if (!(k = null != v && h(v, p))) break;
    v = v[p];
  }

  return k || ++_ != b ? k : !!(b = null == v ? 0 : v.length) && module718(b) && module750(p, b) && (module706(v) || module703(v));
};
