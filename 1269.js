var t, n;
t = this;

n = function (t) {
  var n, o, s, h, c, f;
  o = (n = t).lib;
  s = o.WordArray;
  h = o.Hasher;
  c = [];
  f = n.algo.SHA1 = h.extend({
    _doReset: function () {
      this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (t, n) {
      for (var o = this._hash.words, s = o[0], h = o[1], f = o[2], _ = o[3], l = o[4], u = 0; u < 80; u++) {
        if (u < 16) c[u] = 0 | t[n + u];
        else {
          var H = c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16];
          c[u] = (H << 1) | (H >>> 31);
        }
        var p = ((s << 5) | (s >>> 27)) + l + c[u];
        p += u < 20 ? 1518500249 + ((h & f) | (~h & _)) : u < 40 ? 1859775393 + (h ^ f ^ _) : u < 60 ? ((h & f) | (h & _) | (f & _)) - 1894007588 : (h ^ f ^ _) - 899497514;
        l = _;
        _ = f;
        f = (h << 30) | (h >>> 2);
        h = s;
        s = p;
      }

      o[0] = (o[0] + s) | 0;
      o[1] = (o[1] + h) | 0;
      o[2] = (o[2] + f) | 0;
      o[3] = (o[3] + _) | 0;
      o[4] = (o[4] + l) | 0;
    },
    _doFinalize: function () {
      var t = this._data,
        n = t.words,
        o = 8 * this._nDataBytes,
        s = 8 * t.sigBytes;
      n[s >>> 5] |= 128 << (24 - (s % 32));
      n[14 + (((s + 64) >>> 9) << 4)] = Math.floor(o / 4294967296);
      n[15 + (((s + 64) >>> 9) << 4)] = o;
      t.sigBytes = 4 * n.length;

      this._process();

      return this._hash;
    },
    clone: function () {
      var t = h.clone.call(this);
      t._hash = this._hash.clone();
      return t;
    },
  });
  n.SHA1 = h._createHelper(f);
  n.HmacSHA1 = h._createHmacHelper(f);
  return t.SHA1;
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);
