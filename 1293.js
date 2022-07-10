var t, o;
t = this;

o = function (t) {
  (function () {
    var o = t,
      n = o.lib.StreamCipher,
      s = o.algo,
      c = (s.RC4 = n.extend({
        _doReset: function () {
          for (var t = this._key, o = t.words, n = t.sigBytes, s = (this._S = []), c = 0; c < 256; c++) s[c] = c;

          c = 0;

          for (var f = 0; c < 256; c++) {
            var _ = c % n,
              h = (o[_ >>> 2] >>> (24 - (_ % 4) * 8)) & 255;

            f = (f + s[c] + h) % 256;
            var p = s[c];
            s[c] = s[f];
            s[f] = p;
          }

          this._i = this._j = 0;
        },
        _doProcessBlock: function (t, o) {
          t[o] ^= f.call(this);
        },
        keySize: 8,
        ivSize: 0,
      }));

    function f() {
      for (var t = this._S, o = this._i, n = this._j, s = 0, c = 0; c < 4; c++) {
        n = (n + t[(o = (o + 1) % 256)]) % 256;
        var f = t[o];
        t[o] = t[n];
        t[n] = f;
        s |= t[(t[o] + t[n]) % 256] << (24 - 8 * c);
      }

      this._i = o;
      this._j = n;
      return s;
    }

    o.RC4 = n._createHelper(c);

    var _ = (s.RC4Drop = c.extend({
      cfg: c.cfg.extend({
        drop: 192,
      }),
      _doReset: function () {
        c._doReset.call(this);

        for (var t = this.cfg.drop; t > 0; t--) f.call(this);
      },
    }));

    o.RC4Drop = n._createHelper(_);
  })();

  return t.RC4;
};

if ('object' == typeof exports) module.exports = exports = o(require('crypto-js'), require('./1266'), require('./1268'), require('./1278'), require('./1279'));
else if ('function' == typeof define && define.amd) define(['./core', './enc-base64', './md5', './evpkdf', './cipher-core'], o);
else o(t.CryptoJS);
