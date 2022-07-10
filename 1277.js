var t, n;
t = this;

n = function (t) {
  var n, o, c, f, s, h, u, p;
  o = (n = t).lib;
  c = o.Base;
  f = o.WordArray;
  s = n.algo;
  h = s.SHA1;
  u = s.HMAC;
  p = s.PBKDF2 = c.extend({
    cfg: c.extend({
      keySize: 4,
      hasher: h,
      iterations: 1,
    }),
    init: function (t) {
      this.cfg = this.cfg.extend(t);
    },
    compute: function (t, n) {
      for (var o = this.cfg, c = u.create(o.hasher, t), s = f.create(), h = f.create([1]), p = s.words, y = h.words, l = o.keySize, v = o.iterations; p.length < l; ) {
        var B = c.update(n).finalize(h);
        c.reset();

        for (var w = B.words, x = w.length, z = B, S = 1; S < v; S++) {
          z = c.finalize(z);
          c.reset();

          for (var A = z.words, D = 0; D < x; D++) w[D] ^= A[D];
        }

        s.concat(B);
        y[0]++;
      }

      s.sigBytes = 4 * l;
      return s;
    },
  });

  n.PBKDF2 = function (t, n, o) {
    return p.create(o).compute(t, n);
  };

  return t.PBKDF2;
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'), require('./1269'), require('./1276'));
else if ('function' == typeof define && define.amd) define(['./core', './sha1', './hmac'], n);
else n(t.CryptoJS);
