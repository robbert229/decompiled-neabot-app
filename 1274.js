var o, t;
o = this;

t = function (o) {
  (function (t) {
    var h = o,
      n = h.lib,
      f = n.WordArray,
      c = n.Hasher,
      s = h.x64.Word,
      l = h.algo,
      v = [],
      u = [],
      w = [];
    !(function () {
      for (var o = 1, t = 0, h = 0; h < 24; h++) {
        v[o + 5 * t] = (((h + 1) * (h + 2)) / 2) % 64;
        var n = (2 * o + 3 * t) % 5;
        o = t % 5;
        t = n;
      }

      for (o = 0; o < 5; o++) for (t = 0; t < 5; t++) u[o + 5 * t] = t + ((2 * o + 3 * t) % 5) * 5;

      for (var f = 1, c = 0; c < 24; c++) {
        for (var l = 0, _ = 0, p = 0; p < 7; p++) {
          if (1 & f) {
            var H = (1 << p) - 1;
            if (H < 32) _ ^= 1 << H;
            else l ^= 1 << (H - 32);
          }

          if (128 & f) f = (f << 1) ^ 113;
          else f <<= 1;
        }

        w[c] = s.create(l, _);
      }
    })();
    var _ = [];
    !(function () {
      for (var o = 0; o < 25; o++) _[o] = s.create();
    })();
    var p = (l.SHA3 = c.extend({
      cfg: c.cfg.extend({
        outputLength: 512,
      }),
      _doReset: function () {
        for (var o = (this._state = []), t = 0; t < 25; t++) o[t] = new s.init();

        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
      },
      _doProcessBlock: function (o, t) {
        for (var h = this._state, n = this.blockSize / 2, f = 0; f < n; f++) {
          var c = o[t + 2 * f],
            s = o[t + 2 * f + 1];
          c = (16711935 & ((c << 8) | (c >>> 24))) | (4278255360 & ((c << 24) | (c >>> 8)));
          s = (16711935 & ((s << 8) | (s >>> 24))) | (4278255360 & ((s << 24) | (s >>> 8)));
          (J = h[f]).high ^= s;
          J.low ^= c;
        }

        for (var l = 0; l < 24; l++) {
          for (var p = 0; p < 5; p++) {
            for (var H = 0, S = 0, y = 0; y < 5; y++) {
              H ^= (J = h[p + 5 * y]).high;
              S ^= J.low;
            }

            var b = _[p];
            b.high = H;
            b.low = S;
          }

          for (p = 0; p < 5; p++) {
            var x = _[(p + 4) % 5],
              A = _[(p + 1) % 5],
              k = A.high,
              z = A.low;

            for (H = x.high ^ ((k << 1) | (z >>> 31)), S = x.low ^ ((z << 1) | (k >>> 31)), y = 0; y < 5; y++) {
              (J = h[p + 5 * y]).high ^= H;
              J.low ^= S;
            }
          }

          for (var B = 1; B < 25; B++) {
            var L = (J = h[B]).high,
              W = J.low,
              j = v[B];

            if (j < 32) {
              H = (L << j) | (W >>> (32 - j));
              S = (W << j) | (L >>> (32 - j));
            } else {
              H = (W << (j - 32)) | (L >>> (64 - j));
              S = (L << (j - 32)) | (W >>> (64 - j));
            }

            var C = _[u[B]];
            C.high = H;
            C.low = S;
          }

          var D = _[0],
            F = h[0];
          D.high = F.high;
          D.low = F.low;

          for (p = 0; p < 5; p++)
            for (y = 0; y < 5; y++) {
              var J = h[(B = p + 5 * y)],
                M = _[B],
                P = _[((p + 1) % 5) + 5 * y],
                R = _[((p + 2) % 5) + 5 * y];
              J.high = M.high ^ (~P.high & R.high);
              J.low = M.low ^ (~P.low & R.low);
            }

          J = h[0];
          var q = w[l];
          J.high ^= q.high;
          J.low ^= q.low;
        }
      },
      _doFinalize: function () {
        this._nDataBytes;
        var o = this._data,
          h = o.words,
          n = 8 * o.sigBytes,
          c = 32 * this.blockSize;
        h[n >>> 5] |= 1 << (24 - (n % 32));
        h[((t.ceil((n + 1) / c) * c) >>> 5) - 1] |= 128;
        o.sigBytes = 4 * h.length;

        this._process();

        for (var s = this._state, l = this.cfg.outputLength / 8, v = l / 8, u = [], w = 0; w < v; w++) {
          var _ = s[w],
            p = _.high,
            H = _.low;
          p = (16711935 & ((p << 8) | (p >>> 24))) | (4278255360 & ((p << 24) | (p >>> 8)));
          H = (16711935 & ((H << 8) | (H >>> 24))) | (4278255360 & ((H << 24) | (H >>> 8)));
          u.push(H);
          u.push(p);
        }

        return new f.init(u, l);
      },
      clone: function () {
        for (var o = c.clone.call(this), t = (o._state = this._state.slice(0)), h = 0; h < 25; h++) t[h] = t[h].clone();

        return o;
      },
    }));
    h.SHA3 = c._createHelper(p);
    h.HmacSHA3 = c._createHmacHelper(p);
  })(Math);

  return o.SHA3;
};

if ('object' == typeof exports) module.exports = exports = t(require('crypto-js'), require('./1263'));
else if ('function' == typeof define && define.amd) define(['./core', './x64-core'], t);
else t(o.CryptoJS);
