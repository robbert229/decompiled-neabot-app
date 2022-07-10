var o, t;
o = this;

t = function (o) {
  var t, c;
  o.mode.OFB =
    ((t = o.lib.BlockCipherMode.extend()),
    (c = t.Encryptor = t.extend({
      processBlock: function (o, t) {
        var c = this._cipher,
          n = c.blockSize,
          s = this._iv,
          p = this._keystream;

        if (s) {
          p = this._keystream = s.slice(0);
          this._iv = undefined;
        }

        c.encryptBlock(p, 0);

        for (var f = 0; f < n; f++) o[t + f] ^= p[f];
      },
    })),
    (t.Decryptor = c),
    t);
  return o.mode.OFB;
};

if ('object' == typeof exports) module.exports = exports = t(require('crypto-js'), require('./1279'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], t);
else t(o.CryptoJS);
