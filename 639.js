var t = (function () {
  'use strict';

  function t(t, n) {
    return null != n && t instanceof n;
  }

  var n, o, c;

  try {
    n = Map;
  } catch (t) {
    n = function () {};
  }

  try {
    o = Set;
  } catch (t) {
    o = function () {};
  }

  try {
    c = Promise;
  } catch (t) {
    c = function () {};
  }

  function f(u, p, s, b, y) {
    if ('object' == typeof p) {
      s = p.depth;
      b = p.prototype;
      y = p.includeNonEnumerable;
      p = p.circular;
    }

    var j = [],
      O = [],
      v = 'undefined' != typeof Buffer;
    if (undefined === p) p = true;
    if (undefined === s) s = 1 / 0;
    return (function u(s, _) {
      if (null === s) return null;
      if (0 === _) return s;
      var w, h;
      if ('object' != typeof s) return s;
      if (t(s, n)) w = new n();
      else if (t(s, o)) w = new o();
      else if (t(s, c))
        w = new c(function (t, n) {
          s.then(
            function (n) {
              t(u(n, _ - 1));
            },
            function (t) {
              n(u(t, _ - 1));
            }
          );
        });
      else if (f.__isArray(s)) w = [];
      else if (f.__isRegExp(s)) {
        w = new RegExp(s.source, l(s));
        if (s.lastIndex) w.lastIndex = s.lastIndex;
      } else if (f.__isDate(s)) w = new Date(s.getTime());
      else {
        if (v && Buffer.isBuffer(s)) {
          w = new Buffer(s.length);
          s.copy(w);
          return w;
        }

        if (t(s, Error)) w = Object.create(s);
        else if (undefined === b) {
          h = Object.getPrototypeOf(s);
          w = Object.create(h);
        } else {
          w = Object.create(b);
          h = b;
        }
      }

      if (p) {
        var x = j.indexOf(s);
        if (-1 != x) return O[x];
        j.push(s);
        O.push(w);
      }

      for (var P in (t(s, n) &&
        s.forEach(function (t, n) {
          var o = u(n, _ - 1),
            c = u(t, _ - 1);
          w.set(o, c);
        }),
      t(s, o) &&
        s.forEach(function (t) {
          var n = u(t, _ - 1);
          w.add(n);
        }),
      s)) {
        var E;
        if (h) E = Object.getOwnPropertyDescriptor(h, P);
        if (!(E && null == E.set)) w[P] = u(s[P], _ - 1);
      }

      if (Object.getOwnPropertySymbols) {
        var D = Object.getOwnPropertySymbols(s);

        for (P = 0; P < D.length; P++) {
          var R = D[P];

          if (!(B = Object.getOwnPropertyDescriptor(s, R)) || B.enumerable || y) {
            w[R] = u(s[R], _ - 1);
            if (!B.enumerable)
              Object.defineProperty(w, R, {
                enumerable: false,
              });
          }
        }
      }

      if (y) {
        var S = Object.getOwnPropertyNames(s);

        for (P = 0; P < S.length; P++) {
          var B,
            A = S[P];

          if (!((B = Object.getOwnPropertyDescriptor(s, A)) && B.enumerable)) {
            w[A] = u(s[A], _ - 1);
            Object.defineProperty(w, A, {
              enumerable: false,
            });
          }
        }
      }

      return w;
    })(u, s);
  }

  function u(t) {
    return Object.prototype.toString.call(t);
  }

  function l(t) {
    var n = '';
    if (t.global) n += 'g';
    if (t.ignoreCase) n += 'i';
    if (t.multiline) n += 'm';
    return n;
  }

  f.clonePrototype = function (t) {
    if (null === t) return null;

    var n = function () {};

    n.prototype = t;
    return new n();
  };

  f.__objToStr = u;

  f.__isDate = function (t) {
    return 'object' == typeof t && '[object Date]' === u(t);
  };

  f.__isArray = function (t) {
    return 'object' == typeof t && '[object Array]' === u(t);
  };

  f.__isRegExp = function (t) {
    return 'object' == typeof t && '[object RegExp]' === u(t);
  };

  f.__getRegExpFlags = l;
  return f;
})();

if ('object' == typeof module && module.exports) module.exports = t;
