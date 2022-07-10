var t, n;
t = this;

n = function (t) {
  var n, s, o;
  s = (n = t).lib.Base;
  o = n.enc.Utf8;
  n.algo.HMAC = s.extend({
    init: function (t, n) {
      t = this._hasher = new t.init();
      if ('string' == typeof n) n = o.parse(n);
      var s = t.blockSize,
        f = 4 * s;
      if (n.sigBytes > f) n = t.finalize(n);
      n.clamp();

      for (var h = (this._oKey = n.clone()), c = (this._iKey = n.clone()), u = h.words, l = c.words, y = 0; y < s; y++) {
        u[y] ^= 1549556828;
        l[y] ^= 909522486;
      }

      h.sigBytes = c.sigBytes = f;
      this.reset();
    },
    reset: function () {
      var t = this._hasher;
      t.reset();
      t.update(this._iKey);
    },
    update: function (t) {
      this._hasher.update(t);

      return this;
    },
    finalize: function (t) {
      var n = this._hasher,
        s = n.finalize(t);
      n.reset();
      return n.finalize(this._oKey.clone().concat(s));
    },
  });
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);
