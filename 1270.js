var t, n;
t = this;

n = function (t) {
  (function (n) {
    var o = t,
      s = o.lib,
      c = s.WordArray,
      f = s.Hasher,
      h = o.algo,
      u = [],
      l = [];
    !(function () {
      function t(t) {
        for (var o = n.sqrt(t), s = 2; s <= o; s++) if (!(t % s)) return false;

        return true;
      }

      function o(t) {
        return (4294967296 * (t - (0 | t))) | 0;
      }

      for (var s = 2, c = 0; c < 64; ) {
        if (t(s)) {
          if (c < 8) u[c] = o(s ** 0.5);
          l[c] = o(s ** 0.3333333333333333);
          c++;
        }

        s++;
      }
    })();
    var _ = [],
      v = (h.SHA256 = f.extend({
        _doReset: function () {
          this._hash = new c.init(u.slice(0));
        },
        _doProcessBlock: function (t, n) {
          for (var o = this._hash.words, s = o[0], c = o[1], f = o[2], h = o[3], u = o[4], v = o[5], p = o[6], H = o[7], y = 0; y < 64; y++) {
            if (y < 16) _[y] = 0 | t[n + y];
            else {
              var w = _[y - 15],
                A = ((w << 25) | (w >>> 7)) ^ ((w << 14) | (w >>> 18)) ^ (w >>> 3),
                S = _[y - 2],
                B = ((S << 15) | (S >>> 17)) ^ ((S << 13) | (S >>> 19)) ^ (S >>> 10);
              _[y] = A + _[y - 7] + B + _[y - 16];
            }
            var b = (s & c) ^ (s & f) ^ (c & f),
              x = ((s << 30) | (s >>> 2)) ^ ((s << 19) | (s >>> 13)) ^ ((s << 10) | (s >>> 22)),
              j = H + (((u << 26) | (u >>> 6)) ^ ((u << 21) | (u >>> 11)) ^ ((u << 7) | (u >>> 25))) + ((u & v) ^ (~u & p)) + l[y] + _[y];
            H = p;
            p = v;
            v = u;
            u = (h + j) | 0;
            h = f;
            f = c;
            c = s;
            s = (j + (x + b)) | 0;
          }

          o[0] = (o[0] + s) | 0;
          o[1] = (o[1] + c) | 0;
          o[2] = (o[2] + f) | 0;
          o[3] = (o[3] + h) | 0;
          o[4] = (o[4] + u) | 0;
          o[5] = (o[5] + v) | 0;
          o[6] = (o[6] + p) | 0;
          o[7] = (o[7] + H) | 0;
        },
        _doFinalize: function () {
          var t = this._data,
            o = t.words,
            s = 8 * this._nDataBytes,
            c = 8 * t.sigBytes;
          o[c >>> 5] |= 128 << (24 - (c % 32));
          o[14 + (((c + 64) >>> 9) << 4)] = n.floor(s / 4294967296);
          o[15 + (((c + 64) >>> 9) << 4)] = s;
          t.sigBytes = 4 * o.length;

          this._process();

          return this._hash;
        },
        clone: function () {
          var t = f.clone.call(this);
          t._hash = this._hash.clone();
          return t;
        },
      }));
    o.SHA256 = f._createHelper(v);
    o.HmacSHA256 = f._createHmacHelper(v);
  })(Math);

  return t.SHA256;
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);
