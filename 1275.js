var t, n;
t = this;

n = function (t) {
  (function (n) {
    var o = t,
      s = o.lib,
      c = s.WordArray,
      u = s.Hasher,
      f = o.algo,
      h = c.create([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13,
      ]),
      _ = c.create([
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11,
      ]),
      l = c.create([
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6,
      ]),
      v = c.create([
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11,
      ]),
      w = c.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
      p = c.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
      y = (f.RIPEMD160 = u.extend({
        _doReset: function () {
          this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function (t, n) {
          for (var o = 0; o < 16; o++) {
            var s = n + o,
              c = t[s];
            t[s] = (16711935 & ((c << 8) | (c >>> 24))) | (4278255360 & ((c << 24) | (c >>> 8)));
          }

          var u,
            f,
            y,
            E,
            I,
            b,
            x,
            j,
            k,
            z,
            A,
            C = this._hash.words,
            F = w.words,
            J = p.words,
            S = h.words,
            W = _.words,
            q = l.words,
            G = v.words;
          b = u = C[0];
          x = f = C[1];
          j = y = C[2];
          k = E = C[3];
          z = I = C[4];

          for (o = 0; o < 80; o += 1) {
            A = (u + t[n + S[o]]) | 0;
            A += o < 16 ? D(f, y, E) + F[0] : o < 32 ? H(f, y, E) + F[1] : o < 48 ? M(f, y, E) + F[2] : o < 64 ? P(f, y, E) + F[3] : R(f, y, E) + F[4];
            A = ((A = B((A |= 0), q[o])) + I) | 0;
            u = I;
            I = E;
            E = B(y, 10);
            y = f;
            f = A;
            A = (b + t[n + W[o]]) | 0;
            A += o < 16 ? R(x, j, k) + J[0] : o < 32 ? P(x, j, k) + J[1] : o < 48 ? M(x, j, k) + J[2] : o < 64 ? H(x, j, k) + J[3] : D(x, j, k) + J[4];
            A = ((A = B((A |= 0), G[o])) + z) | 0;
            b = z;
            z = k;
            k = B(j, 10);
            j = x;
            x = A;
          }

          A = (C[1] + y + k) | 0;
          C[1] = (C[2] + E + z) | 0;
          C[2] = (C[3] + I + b) | 0;
          C[3] = (C[4] + u + x) | 0;
          C[4] = (C[0] + f + j) | 0;
          C[0] = A;
        },
        _doFinalize: function () {
          var t = this._data,
            n = t.words,
            o = 8 * this._nDataBytes,
            s = 8 * t.sigBytes;
          n[s >>> 5] |= 128 << (24 - (s % 32));
          n[14 + (((s + 64) >>> 9) << 4)] = (16711935 & ((o << 8) | (o >>> 24))) | (4278255360 & ((o << 24) | (o >>> 8)));
          t.sigBytes = 4 * (n.length + 1);

          this._process();

          for (var c = this._hash, u = c.words, f = 0; f < 5; f++) {
            var h = u[f];
            u[f] = (16711935 & ((h << 8) | (h >>> 24))) | (4278255360 & ((h << 24) | (h >>> 8)));
          }

          return c;
        },
        clone: function () {
          var t = u.clone.call(this);
          t._hash = this._hash.clone();
          return t;
        },
      }));

    function D(t, n, o) {
      return t ^ n ^ o;
    }

    function H(t, n, o) {
      return (t & n) | (~t & o);
    }

    function M(t, n, o) {
      return (t | ~n) ^ o;
    }

    function P(t, n, o) {
      return (t & o) | (n & ~o);
    }

    function R(t, n, o) {
      return t ^ (n | ~o);
    }

    function B(t, n) {
      return (t << n) | (t >>> (32 - n));
    }

    o.RIPEMD160 = u._createHelper(y);
    o.HmacRIPEMD160 = u._createHmacHelper(y);
  })(Math);

  return t.RIPEMD160;
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);
