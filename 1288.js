var n, t;
n = this;

t = function (n) {
  n.pad.ZeroPadding = {
    pad: function (n, t) {
      var o = 4 * t;
      n.clamp();
      n.sigBytes += o - (n.sigBytes % o || o);
    },
    unpad: function (n) {
      var t = n.words,
        o = n.sigBytes - 1;

      for (o = n.sigBytes - 1; o >= 0; o--)
        if ((t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) {
          n.sigBytes = o + 1;
          break;
        }
    },
  };
  return n.pad.ZeroPadding;
};

if ('object' == typeof exports) module.exports = exports = t(require('crypto-js'), require('./1279'));
else if ('function' == typeof define && define.amd) define(['./core', './cipher-core'], t);
else t(n.CryptoJS);
