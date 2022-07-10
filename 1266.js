var t, n;
t = this;

n = function (t) {
  (function () {
    var n = t,
      o = n.lib.WordArray;
    n.enc.Base64 = {
      stringify: function (t) {
        var n = t.words,
          o = t.sigBytes,
          f = this._map;
        t.clamp();

        for (var c = [], s = 0; s < o; s += 3)
          for (
            var h =
                (((n[s >>> 2] >>> (24 - (s % 4) * 8)) & 255) << 16) |
                (((n[(s + 1) >>> 2] >>> (24 - ((s + 1) % 4) * 8)) & 255) << 8) |
                ((n[(s + 2) >>> 2] >>> (24 - ((s + 2) % 4) * 8)) & 255),
              v = 0;
            v < 4 && s + 0.75 * v < o;
            v++
          )
            c.push(f.charAt((h >>> (6 * (3 - v))) & 63));

        var p = f.charAt(64);
        if (p) for (; c.length % 4; ) c.push(p);
        return c.join('');
      },
      parse: function (t) {
        var n = t.length,
          o = this._map,
          c = this._reverseMap;

        if (!c) {
          c = this._reverseMap = [];

          for (var s = 0; s < o.length; s++) c[o.charCodeAt(s)] = s;
        }

        var h = o.charAt(64);

        if (h) {
          var v = t.indexOf(h);
          if (-1 !== v) n = v;
        }

        return f(t, n, c);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    };

    function f(t, n, f) {
      for (var c = [], s = 0, h = 0; h < n; h++)
        if (h % 4) {
          var v = (f[t.charCodeAt(h - 1)] << ((h % 4) * 2)) | (f[t.charCodeAt(h)] >>> (6 - (h % 4) * 2));
          c[s >>> 2] |= v << (24 - (s % 4) * 8);
          s++;
        }

      return o.create(c, s);
    }
  })();

  return t.enc.Base64;
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);
