var module830 = require('./830'),
  module849 = require('./849'),
  module850 = require('./850'),
  u = !{
    toString: null,
  }.propertyIsEnumerable('toString'),
  f = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'],
  c = (function () {
    'use strict';

    return arguments.propertyIsEnumerable('length');
  })(),
  l = function (t, n) {
    for (var o = 0; o < t.length; ) {
      if (t[o] === n) return true;
      o += 1;
    }

    return false;
  },
  s = module830(
    'function' != typeof Object.keys || c
      ? function (t) {
          if (Object(t) !== t) return [];
          var s,
            p,
            y = [],
            b = c && module850(t);

          for (s in t) !module849(s, t) || (b && 'length' === s) || (y[y.length] = s);

          if (u)
            for (p = f.length - 1; p >= 0; ) {
              if (module849((s = f[p]), t) && !l(y, s)) y[y.length] = s;
              p -= 1;
            }
          return y;
        }
      : function (t) {
          return Object(t) !== t ? [] : Object.keys(t);
        }
  );

module.exports = s;
