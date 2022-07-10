var t, n;
t = this;

n = function (t) {
  (function () {
    var n = t,
      f = n.lib.WordArray;
    n.enc.Base64url = {
      stringify: function (t) {
        var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
          f = t.words,
          o = t.sigBytes,
          s = n ? this._safe_map : this._map;
        t.clamp();

        for (var h = [], c = 0; c < o; c += 3)
          for (
            var p =
                (((f[c >>> 2] >>> (24 - (c % 4) * 8)) & 255) << 16) |
                (((f[(c + 1) >>> 2] >>> (24 - ((c + 1) % 4) * 8)) & 255) << 8) |
                ((f[(c + 2) >>> 2] >>> (24 - ((c + 2) % 4) * 8)) & 255),
              v = 0;
            v < 4 && c + 0.75 * v < o;
            v++
          )
            h.push(s.charAt((p >>> (6 * (3 - v))) & 63));

        var u = s.charAt(64);
        if (u) for (; h.length % 4; ) h.push(u);
        return h.join('');
      },
      parse: function (t) {
        var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
          f = t.length,
          s = n ? this._safe_map : this._map,
          h = this._reverseMap;

        if (!h) {
          h = this._reverseMap = [];

          for (var c = 0; c < s.length; c++) h[s.charCodeAt(c)] = c;
        }

        var p = s.charAt(64);

        if (p) {
          var v = t.indexOf(p);
          if (-1 !== v) f = v;
        }

        return o(t, f, h);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
    };

    function o(t, n, o) {
      for (var s = [], h = 0, c = 0; c < n; c++)
        if (c % 4) {
          var p = (o[t.charCodeAt(c - 1)] << ((c % 4) * 2)) | (o[t.charCodeAt(c)] >>> (6 - (c % 4) * 2));
          s[h >>> 2] |= p << (24 - (h % 4) * 8);
          h++;
        }

      return f.create(s, h);
    }
  })();

  return t.enc.Base64url;
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);
