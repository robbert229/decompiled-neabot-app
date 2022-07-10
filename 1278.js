var t, n;
t = this;

n = function (t) {
  var n, o, c, f, s, u, h;
  o = (n = t).lib;
  c = o.Base;
  f = o.WordArray;
  s = n.algo;
  u = s.MD5;
  h = s.EvpKDF = c.extend({
    cfg: c.extend({
      keySize: 4,
      hasher: u,
      iterations: 1,
    }),
    init: function (t) {
      this.cfg = this.cfg.extend(t);
    },
    compute: function (t, n) {
      for (var o, c = this.cfg, s = c.hasher.create(), u = f.create(), h = u.words, p = c.keySize, v = c.iterations; h.length < p; ) {
        if (o) s.update(o);
        o = s.update(t).finalize(n);
        s.reset();

        for (var y = 1; y < v; y++) {
          o = s.finalize(o);
          s.reset();
        }

        u.concat(o);
      }

      u.sigBytes = 4 * p;
      return u;
    },
  });

  n.EvpKDF = function (t, n, o) {
    return h.create(o).compute(t, n);
  };

  return t.EvpKDF;
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'), require('./1269'), require('./1276'));
else if ('function' == typeof define && define.amd) define(['./core', './sha1', './hmac'], n);
else n(t.CryptoJS);
