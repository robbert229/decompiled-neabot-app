var t, n;
t = this;

n = function (t) {
  var n, o, s, h, c;
  o = (n = t).lib;
  s = o.Base;
  h = o.WordArray;
  (c = n.x64 = {}).Word = s.extend({
    init: function (t, n) {
      this.high = t;
      this.low = n;
    },
  });
  c.WordArray = s.extend({
    init: function (t, n) {
      t = this.words = t || [];
      this.sigBytes = undefined != n ? n : 8 * t.length;
    },
    toX32: function () {
      for (var t = this.words, n = t.length, o = [], s = 0; s < n; s++) {
        var c = t[s];
        o.push(c.high);
        o.push(c.low);
      }

      return h.create(o, this.sigBytes);
    },
    clone: function () {
      for (var t = s.clone.call(this), n = (t.words = this.words.slice(0)), o = n.length, h = 0; h < o; h++) n[h] = n[h].clone();

      return t;
    },
  });
  return t;
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'));
else if ('function' == typeof define && define.amd) define(['./core'], n);
else n(t.CryptoJS);
