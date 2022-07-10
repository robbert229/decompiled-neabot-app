var module829 = require('./829')(function (n, t) {
  for (var u = t, f = 0; f < n.length; ) {
    if (null == u) return;
    u = u[n[f]];
    f += 1;
  }

  return u;
});

module.exports = module829;
