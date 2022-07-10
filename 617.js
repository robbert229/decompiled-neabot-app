require('./618');

var module619 = require('./619'),
  n =
    'undefined' != typeof WeakMap
      ? WeakMap
      : function () {
          var t = [],
            n = [];
          return {
            set: function (o, f) {
              t.push(o);
              n.push(f);
            },
            get: function (o) {
              for (var f = 0; f < t.length; f++) if (t[f] === o) return n[f];
            },
          };
        };

exports.decycle = function o(f, s, c) {
  'use strict';

  var u = new n(),
    y = !Object.prototype.hasOwnProperty.call(s, 'circular'),
    p = false !== s.refs;
  return (function n(f, j, l) {
    var $,
      b,
      N,
      O = 'function' == typeof c ? c(l || '', f) : f;
    if (s.date && O instanceof Date)
      return {
        $jsan: 'd' + O.getTime(),
      };
    if (s.regex && O instanceof RegExp)
      return {
        $jsan: 'r' + module619.getRegexFlags(O) + ',' + O.source,
      };
    if (s.function && 'function' == typeof O)
      return {
        $jsan: 'f' + module619.stringifyFunction(O, s.function),
      };
    if (s.nan && 'number' == typeof O && isNaN(O))
      return {
        $jsan: 'n',
      };

    if (s.infinity) {
      if (Number.POSITIVE_INFINITY === O)
        return {
          $jsan: 'i',
        };
      if (Number.NEGATIVE_INFINITY === O)
        return {
          $jsan: 'y',
        };
    }

    if (s[undefined] && undefined === O)
      return {
        $jsan: 'u',
      };
    if (s.error && O instanceof Error)
      return {
        $jsan: 'e' + O.message,
      };

    if (s.symbol && 'symbol' == typeof O) {
      var S = Symbol.keyFor(O);
      return undefined !== S
        ? {
            $jsan: 'g' + S,
          }
        : {
            $jsan: 's' + O.toString().slice(7, -1),
          };
    }

    if (s.map && 'function' == typeof Map && O instanceof Map && 'function' == typeof Array.from)
      return {
        $jsan: 'm' + JSON.stringify(o(Array.from(O), s, c)),
      };
    if (s.set && 'function' == typeof Set && O instanceof Set && 'function' == typeof Array.from)
      return {
        $jsan: 'l' + JSON.stringify(o(Array.from(O), s, c)),
      };
    if (O && 'function' == typeof O.toJSON)
      try {
        O = O.toJSON(l);
      } catch (t) {
        var v = l || '$';
        return "toJSON failed for '" + (u.get(O) || v) + "'";
      }

    if (
      !(
        'object' != typeof O ||
        null === O ||
        O instanceof Boolean ||
        O instanceof Date ||
        O instanceof Number ||
        O instanceof RegExp ||
        O instanceof String ||
        'symbol' == typeof O ||
        O instanceof Error
      )
    ) {
      if ('object' == typeof O) {
        var I = u.get(O);

        if (I) {
          if (y && p)
            return {
              $jsan: I,
            };
          if (0 === j.indexOf(I))
            return y
              ? {
                  $jsan: I,
                }
              : 'function' == typeof s.circular
              ? s.circular(O, j, I)
              : s.circular;
          if (p)
            return {
              $jsan: I,
            };
        }

        u.set(O, j);
      }

      if ('[object Array]' === Object.prototype.toString.apply(O)) for (N = [], $ = 0; $ < O.length; $ += 1) N[$] = n(O[$], j + '[' + $ + ']', $);
      else
        for (b in ((N = {}), O))
          if (Object.prototype.hasOwnProperty.call(O, b)) {
            var h = /^\w+$/.test(b) ? '.' + b : '[' + JSON.stringify(b) + ']';
            N[b] = '$jsan' === b ? [n(O[b], j + h)] : n(O[b], j + h, b);
          }
      return N;
    }

    return O;
  })(f, '$');
};

exports.retrocycle = function (n) {
  'use strict';

  return (function o(f) {
    var s, c, u;
    if (f && 'object' == typeof f)
      if ('[object Array]' === Object.prototype.toString.apply(f))
        for (s = 0; s < f.length; s += 1) (c = f[s]) && 'object' == typeof c && (c.$jsan ? (f[s] = module619.restore(c.$jsan, n)) : o(c));
      else
        for (u in f) {
          if ('string' == typeof f[u] && '$jsan' === u) return module619.restore(f.$jsan, n);
          '$jsan' === u && (f[u] = f[u][0]);
          'object' == typeof f[u] && (c = f[u]) && 'object' == typeof c && (c.$jsan ? (f[u] = module619.restore(c.$jsan, n)) : o(c));
        }
    return f;
  })(n);
};
