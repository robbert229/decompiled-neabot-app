var n, t;
n = this;

t = function (n) {
  (function () {
    if ('function' == typeof ArrayBuffer) {
      var t = n.lib.WordArray,
        f = t.init;
      (t.init = function (n) {
        if (
          (n instanceof ArrayBuffer && (n = new Uint8Array(n)),
          (n instanceof Int8Array ||
            ('undefined' != typeof Uint8ClampedArray && n instanceof Uint8ClampedArray) ||
            n instanceof Int16Array ||
            n instanceof Uint16Array ||
            n instanceof Int32Array ||
            n instanceof Uint32Array ||
            n instanceof Float32Array ||
            n instanceof Float64Array) &&
            (n = new Uint8Array(n.buffer, n.byteOffset, n.byteLength)),
          n instanceof Uint8Array)
        ) {
          for (var t = n.byteLength, o = [], y = 0; y < t; y++) o[y >>> 2] |= n[y] << (24 - (y % 4) * 8);

          f.call(this, o, t);
        } else f.apply(this, arguments);
      }).prototype = t;
    }
  })();

  return n.lib.WordArray;
};

if ('object' == typeof exports) module.exports = exports = t(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], t);
else t(n.CryptoJS);
