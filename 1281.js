var o, t;
o = this;

t = function (o) {
  var t, c;
  o.mode.CTR =
    ((t = o.lib.BlockCipherMode.extend()),
    (c = t.Encryptor = t.extend({
      processBlock: function (o, t) {
        var c = this._cipher,
          n = c.blockSize,
          p = this._iv,
          s = this._counter;

        if (p) {
          s = this._counter = p.slice(0);
          this._iv = undefined;
        }

        var f = s.slice(0);
        c.encryptBlock(f, 0);
        s[n - 1] = (s[n - 1] + 1) | 0;

        for (var h = 0; h < n; h++) o[t + h] ^= f[h];
      },
    })),
    (t.Decryptor = c),
    t);
  return o.mode.CTR;
};

if ('object' == typeof exports) module.exports = exports = t(require('crypto-js'), require('./1279'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], t);
else t(o.CryptoJS);
