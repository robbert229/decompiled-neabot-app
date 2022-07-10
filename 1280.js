var c, o;
c = this;

o = function (c) {
  c.mode.CFB = (function () {
    var o = c.lib.BlockCipherMode.extend();

    function t(c, o, t, n) {
      var s,
        l = this._iv;

      if (l) {
        s = l.slice(0);
        this._iv = undefined;
      } else s = this._prevBlock;

      n.encryptBlock(s, 0);

      for (var p = 0; p < t; p++) c[o + p] ^= s[p];
    }

    o.Encryptor = o.extend({
      processBlock: function (c, o) {
        var n = this._cipher,
          s = n.blockSize;
        t.call(this, c, o, s, n);
        this._prevBlock = c.slice(o, o + s);
      },
    });
    o.Decryptor = o.extend({
      processBlock: function (c, o) {
        var n = this._cipher,
          s = n.blockSize,
          l = c.slice(o, o + s);
        t.call(this, c, o, s, n);
        this._prevBlock = l;
      },
    });
    return o;
  })();

  return c.mode.CFB;
};

if ('object' == typeof exports) module.exports = exports = o(require('crypto-js'), require('./1279'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], o);
else o(c.CryptoJS);
