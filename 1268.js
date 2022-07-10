var n, t;
n = this;

t = function (n) {
  (function (t) {
    var o = n,
      s = o.lib,
      c = s.WordArray,
      f = s.Hasher,
      h = o.algo,
      u = [];
    !(function () {
      for (var n = 0; n < 64; n++) u[n] = (4294967296 * t.abs(t.sin(n + 1))) | 0;
    })();
    var v = (h.MD5 = f.extend({
      _doReset: function () {
        this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]);
      },
      _doProcessBlock: function (n, t) {
        for (var o = 0; o < 16; o++) {
          var s = t + o,
            c = n[s];
          n[s] = (16711935 & ((c << 8) | (c >>> 24))) | (4278255360 & ((c << 24) | (c >>> 8)));
        }

        var f = this._hash.words,
          h = n[t + 0],
          v = n[t + 1],
          D = n[t + 2],
          H = n[t + 3],
          M = n[t + 4],
          w = n[t + 5],
          B = n[t + 6],
          b = n[t + 7],
          x = n[t + 8],
          j = n[t + 9],
          k = n[t + 10],
          z = n[t + 11],
          A = n[t + 12],
          C = n[t + 13],
          F = n[t + 14],
          J = n[t + 15],
          P = f[0],
          R = f[1],
          S = f[2],
          W = f[3];
        R = y(
          (R = y(
            (R = y(
              (R = y(
                (R = p(
                  (R = p(
                    (R = p(
                      (R = p(
                        (R = l(
                          (R = l(
                            (R = l(
                              (R = l(
                                (R = _(
                                  (R = _(
                                    (R = _(
                                      (R = _(R, (S = _(S, (W = _(W, (P = _(P, R, S, W, h, 7, u[0])), R, S, v, 12, u[1])), P, R, D, 17, u[2])), W, P, H, 22, u[3])),
                                      (S = _(S, (W = _(W, (P = _(P, R, S, W, M, 7, u[4])), R, S, w, 12, u[5])), P, R, B, 17, u[6])),
                                      W,
                                      P,
                                      b,
                                      22,
                                      u[7]
                                    )),
                                    (S = _(S, (W = _(W, (P = _(P, R, S, W, x, 7, u[8])), R, S, j, 12, u[9])), P, R, k, 17, u[10])),
                                    W,
                                    P,
                                    z,
                                    22,
                                    u[11]
                                  )),
                                  (S = _(S, (W = _(W, (P = _(P, R, S, W, A, 7, u[12])), R, S, C, 12, u[13])), P, R, F, 17, u[14])),
                                  W,
                                  P,
                                  J,
                                  22,
                                  u[15]
                                )),
                                (S = l(S, (W = l(W, (P = l(P, R, S, W, v, 5, u[16])), R, S, B, 9, u[17])), P, R, z, 14, u[18])),
                                W,
                                P,
                                h,
                                20,
                                u[19]
                              )),
                              (S = l(S, (W = l(W, (P = l(P, R, S, W, w, 5, u[20])), R, S, k, 9, u[21])), P, R, J, 14, u[22])),
                              W,
                              P,
                              M,
                              20,
                              u[23]
                            )),
                            (S = l(S, (W = l(W, (P = l(P, R, S, W, j, 5, u[24])), R, S, F, 9, u[25])), P, R, H, 14, u[26])),
                            W,
                            P,
                            x,
                            20,
                            u[27]
                          )),
                          (S = l(S, (W = l(W, (P = l(P, R, S, W, C, 5, u[28])), R, S, D, 9, u[29])), P, R, b, 14, u[30])),
                          W,
                          P,
                          A,
                          20,
                          u[31]
                        )),
                        (S = p(S, (W = p(W, (P = p(P, R, S, W, w, 4, u[32])), R, S, x, 11, u[33])), P, R, z, 16, u[34])),
                        W,
                        P,
                        F,
                        23,
                        u[35]
                      )),
                      (S = p(S, (W = p(W, (P = p(P, R, S, W, v, 4, u[36])), R, S, M, 11, u[37])), P, R, b, 16, u[38])),
                      W,
                      P,
                      k,
                      23,
                      u[39]
                    )),
                    (S = p(S, (W = p(W, (P = p(P, R, S, W, C, 4, u[40])), R, S, h, 11, u[41])), P, R, H, 16, u[42])),
                    W,
                    P,
                    B,
                    23,
                    u[43]
                  )),
                  (S = p(S, (W = p(W, (P = p(P, R, S, W, j, 4, u[44])), R, S, A, 11, u[45])), P, R, J, 16, u[46])),
                  W,
                  P,
                  D,
                  23,
                  u[47]
                )),
                (S = y(S, (W = y(W, (P = y(P, R, S, W, h, 6, u[48])), R, S, b, 10, u[49])), P, R, F, 15, u[50])),
                W,
                P,
                w,
                21,
                u[51]
              )),
              (S = y(S, (W = y(W, (P = y(P, R, S, W, A, 6, u[52])), R, S, H, 10, u[53])), P, R, k, 15, u[54])),
              W,
              P,
              v,
              21,
              u[55]
            )),
            (S = y(S, (W = y(W, (P = y(P, R, S, W, x, 6, u[56])), R, S, J, 10, u[57])), P, R, B, 15, u[58])),
            W,
            P,
            C,
            21,
            u[59]
          )),
          (S = y(S, (W = y(W, (P = y(P, R, S, W, M, 6, u[60])), R, S, z, 10, u[61])), P, R, D, 15, u[62])),
          W,
          P,
          j,
          21,
          u[63]
        );
        f[0] = (f[0] + P) | 0;
        f[1] = (f[1] + R) | 0;
        f[2] = (f[2] + S) | 0;
        f[3] = (f[3] + W) | 0;
      },
      _doFinalize: function () {
        var n = this._data,
          o = n.words,
          s = 8 * this._nDataBytes,
          c = 8 * n.sigBytes;
        o[c >>> 5] |= 128 << (24 - (c % 32));
        var f = t.floor(s / 4294967296),
          h = s;
        o[15 + (((c + 64) >>> 9) << 4)] = (16711935 & ((f << 8) | (f >>> 24))) | (4278255360 & ((f << 24) | (f >>> 8)));
        o[14 + (((c + 64) >>> 9) << 4)] = (16711935 & ((h << 8) | (h >>> 24))) | (4278255360 & ((h << 24) | (h >>> 8)));
        n.sigBytes = 4 * (o.length + 1);

        this._process();

        for (var u = this._hash, v = u.words, _ = 0; _ < 4; _++) {
          var l = v[_];
          v[_] = (16711935 & ((l << 8) | (l >>> 24))) | (4278255360 & ((l << 24) | (l >>> 8)));
        }

        return u;
      },
      clone: function () {
        var n = f.clone.call(this);
        n._hash = this._hash.clone();
        return n;
      },
    }));

    function _(n, t, o, s, c, f, h) {
      var u = n + ((t & o) | (~t & s)) + c + h;
      return ((u << f) | (u >>> (32 - f))) + t;
    }

    function l(n, t, o, s, c, f, h) {
      var u = n + ((t & s) | (o & ~s)) + c + h;
      return ((u << f) | (u >>> (32 - f))) + t;
    }

    function p(n, t, o, s, c, f, h) {
      var u = n + (t ^ o ^ s) + c + h;
      return ((u << f) | (u >>> (32 - f))) + t;
    }

    function y(n, t, o, s, c, f, h) {
      var u = n + (o ^ (t | ~s)) + c + h;
      return ((u << f) | (u >>> (32 - f))) + t;
    }

    o.MD5 = f._createHelper(v);
    o.HmacMD5 = f._createHmacHelper(v);
  })(Math);

  return n.MD5;
};

if ('object' == typeof exports) module.exports = exports = t(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], t);
else t(n.CryptoJS);
