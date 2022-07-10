var n, t;
n = this;

t = function (n) {
  n.mode.CTRGladman = (function () {
    var t = n.lib.BlockCipherMode.extend();

    function o(n) {
      if (255 == ((n >> 24) & 255)) {
        var t = (n >> 16) & 255,
          o = (n >> 8) & 255,
          c = 255 & n;

        if (255 === t) {
          t = 0;

          if (255 === o) {
            o = 0;
            if (255 === c) c = 0;
            else ++c;
          } else ++o;
        } else ++t;

        n = 0;
        n += t << 16;
        n += o << 8;
        n += c;
      } else n += 16777216;

      return n;
    }

    function c(n) {
      if (0 === (n[0] = o(n[0]))) n[1] = o(n[1]);
      return n;
    }

    var f = (t.Encryptor = t.extend({
      processBlock: function (n, t) {
        var o = this._cipher,
          f = o.blockSize,
          u = this._iv,
          s = this._counter;

        if (u) {
          s = this._counter = u.slice(0);
          this._iv = undefined;
        }

        c(s);
        var p = s.slice(0);
        o.encryptBlock(p, 0);

        for (var l = 0; l < f; l++) n[t + l] ^= p[l];
      },
    }));
    t.Decryptor = f;
    return t;
  })();

  return n.mode.CTRGladman;
};

if ('object' == typeof exports) module.exports = exports = t(require('crypto-js'), require('./1279'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], t);
else t(n.CryptoJS);
