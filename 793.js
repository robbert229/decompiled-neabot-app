var module794 = require('./794'),
  c = 500;

module.exports = function (t) {
  var u = module794(t, function (n) {
      if (o.size === c) o.clear();
      return n;
    }),
    o = u.cache;
  return u;
};
