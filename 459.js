var module260 = require('./260'),
  module12 = require('./12'),
  module11 = require('./11'),
  module20 = require('./20');

function c(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = s(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var u = 0;
    return function () {
      return u >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[u++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function s(t, n) {
  if (t) {
    if ('string' == typeof t) return l(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? l(t, n) : undefined;
  }
}

function l(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

var module460 = require('./460'),
  module461 = require('./461'),
  module462 = require('./462'),
  module463 = require('./463'),
  b = Symbol('encodeFragmentIdentifier');

function k(t) {
  switch (t.arrayFormat) {
    case 'index':
      return function (n) {
        return function (o, c) {
          var s = o.length;
          return undefined === c || (t.skipNull && null === c) || (t.skipEmptyString && '' === c)
            ? o
            : [].concat(module20(o), null === c ? [[F(n, t), '[', s, ']'].join('')] : [[F(n, t), '[', F(s, t), ']=', F(c, t)].join('')]);
        };
      };

    case 'bracket':
      return function (n) {
        return function (o, c) {
          return undefined === c || (t.skipNull && null === c) || (t.skipEmptyString && '' === c)
            ? o
            : [].concat(module20(o), null === c ? [[F(n, t), '[]'].join('')] : [[F(n, t), '[]=', F(c, t)].join('')]);
        };
      };

    case 'comma':
    case 'separator':
    case 'bracket-separator':
      var n = 'bracket-separator' === t.arrayFormat ? '[]=' : '=';
      return function (o) {
        return function (u, c) {
          if (undefined === c || (t.skipNull && null === c) || (t.skipEmptyString && '' === c)) return u;
          else {
            c = null === c ? '' : c;
            return 0 === u.length ? [[F(o, t), n, F(c, t)].join('')] : [[u, F(c, t)].join(t.arrayFormatSeparator)];
          }
        };
      };

    default:
      return function (n) {
        return function (o, c) {
          return undefined === c || (t.skipNull && null === c) || (t.skipEmptyString && '' === c)
            ? o
            : [].concat(module20(o), null === c ? [F(n, t)] : [[F(n, t), '=', F(c, t)].join('')]);
        };
      };
  }
}

function j(t) {
  var n;

  switch (t.arrayFormat) {
    case 'index':
      return function (t, o, u) {
        n = /\[(\d*)\]$/.exec(t);
        t = t.replace(/\[\d*\]$/, '');

        if (n) {
          if (undefined === u[t]) u[t] = {};
          u[t][n[1]] = o;
        } else u[t] = o;
      };

    case 'bracket':
      return function (t, o, u) {
        n = /(\[\])$/.exec(t);
        t = t.replace(/\[\]$/, '');
        if (n) undefined !== u[t] ? (u[t] = [].concat(u[t], o)) : (u[t] = [o]);
        else u[t] = o;
      };

    case 'comma':
    case 'separator':
      return function (n, o, u) {
        var c = 'string' == typeof o && o.includes(t.arrayFormatSeparator),
          s = 'string' == typeof o && !c && h(o, t).includes(t.arrayFormatSeparator);
        o = s ? h(o, t) : o;
        var l =
          c || s
            ? o.split(t.arrayFormatSeparator).map(function (n) {
                return h(n, t);
              })
            : null === o
            ? o
            : h(o, t);
        u[n] = l;
      };

    case 'bracket-separator':
      return function (n, o, u) {
        var c = /(\[\])$/.test(n);

        if (((n = n.replace(/\[\]$/, '')), c)) {
          var s =
            null === o
              ? []
              : o.split(t.arrayFormatSeparator).map(function (n) {
                  return h(n, t);
                });
          if (undefined !== u[n]) u[n] = [].concat(u[n], s);
          else u[n] = s;
        } else u[n] = o ? h(o, t) : o;
      };

    default:
      return function (t, n, o) {
        if (undefined !== o[t]) o[t] = [].concat(o[t], n);
        else o[t] = n;
      };
  }
}

function S(t) {
  if ('string' != typeof t || 1 !== t.length) throw new TypeError('arrayFormatSeparator must be single character string');
}

function F(t, n) {
  return n.encode ? (n.strict ? module460(t) : encodeURIComponent(t)) : t;
}

function h(t, n) {
  return n.decode ? module461(t) : t;
}

function A(t) {
  return Array.isArray(t)
    ? t.sort()
    : 'object' == typeof t
    ? A(Object.keys(t))
        .sort(function (t, n) {
          return Number(t) - Number(n);
        })
        .map(function (n) {
          return t[n];
        })
    : t;
}

function N(t) {
  var n = t.indexOf('#');
  if (-1 !== n) t = t.slice(0, n);
  return t;
}

function O(t) {
  var n = '',
    o = t.indexOf('#');
  if (-1 !== o) n = t.slice(o);
  return n;
}

function I(t) {
  var n = (t = N(t)).indexOf('?');
  return -1 === n ? '' : t.slice(n + 1);
}

function x(t, n) {
  if (n.parseNumbers && !Number.isNaN(Number(t)) && 'string' == typeof t && '' !== t.trim()) t = Number(t);
  else if (!(!n.parseBooleans || null === t || ('true' !== t.toLowerCase() && 'false' !== t.toLowerCase()))) t = 'true' === t.toLowerCase();
  return t;
}

function w(t, u) {
  S(
    (u = module11(
      {
        decode: true,
        sort: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: false,
        parseBooleans: false,
      },
      u
    )).arrayFormatSeparator
  );
  var s = j(u),
    l = Object.create(null);
  if ('string' != typeof t) return l;
  if (!(t = t.trim().replace(/^[?#&]/, ''))) return l;

  for (var f, p = c(t.split('&')); !(f = p()).done; ) {
    var v = f.value;

    if ('' !== v) {
      var b = module462(u.decode ? v.replace(/\+/g, ' ') : v, '='),
        k = module12(b, 2),
        F = k[0],
        N = k[1];
      N = undefined === N ? null : ['comma', 'separator', 'bracket-separator'].includes(u.arrayFormat) ? N : h(N, u);
      s(h(F, u), N, l);
    }
  }

  for (var O = 0, I = Object.keys(l); O < I.length; O++) {
    var w = I[O],
      E = l[w];
    if ('object' == typeof E && null !== E)
      for (var $ = 0, U = Object.keys(E); $ < U.length; $++) {
        var C = U[$];
        E[C] = x(E[C], u);
      }
    else l[w] = x(E, u);
  }

  return false === u.sort
    ? l
    : (true === u.sort ? Object.keys(l).sort() : Object.keys(l).sort(u.sort)).reduce(function (t, n) {
        var o = l[n];
        if (Boolean(o) && 'object' == typeof o && !Array.isArray(o)) t[n] = A(o);
        else t[n] = o;
        return t;
      }, Object.create(null));
}

exports.extract = I;
exports.parse = w;

exports.stringify = function (t, n) {
  if (!t) return '';
  S(
    (n = module11(
      {
        encode: true,
        strict: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
      },
      n
    )).arrayFormatSeparator
  );

  for (
    var u = function (o) {
        return n.skipNull ? null === (u = t[o]) || undefined === u : n.skipEmptyString && '' === t[o];
        var u;
      },
      c = k(n),
      s = {},
      l = 0,
      f = Object.keys(t);
    l < f.length;
    l++
  ) {
    var p = f[l];
    if (!u(p)) s[p] = t[p];
  }

  var y = Object.keys(s);
  if (false !== n.sort) y.sort(n.sort);
  return y
    .map(function (o) {
      var u = t[o];
      return undefined === u
        ? ''
        : null === u
        ? F(o, n)
        : Array.isArray(u)
        ? 0 === u.length && 'bracket-separator' === n.arrayFormat
          ? F(o, n) + '[]'
          : u.reduce(c(o), []).join('&')
        : F(o, n) + '=' + F(u, n);
    })
    .filter(function (t) {
      return t.length > 0;
    })
    .join('&');
};

exports.parseUrl = function (t, u) {
  u = module11(
    {
      decode: true,
    },
    u
  );
  var c = module462(t, '#'),
    s = module12(c, 2),
    l = s[0],
    f = s[1];
  return module11(
    {
      url: l.split('?')[0] || '',
      query: w(I(t), u),
    },
    u && u.parseFragmentIdentifier && f
      ? {
          fragmentIdentifier: h(f, u),
        }
      : {}
  );
};

exports.stringifyUrl = function (n, u) {
  u = module11(
    module260(
      {
        encode: true,
        strict: true,
      },
      b,
      true
    ),
    u
  );
  var c = N(n.url).split('?')[0] || '',
    s = exports.extract(n.url),
    l = exports.parse(s, {
      sort: false,
    }),
    f = module11(l, n.query),
    p = exports.stringify(f, u);
  if (p) p = '?' + p;
  var y = O(n.url);
  if (n.fragmentIdentifier) y = '#' + (u[b] ? F(n.fragmentIdentifier, u) : n.fragmentIdentifier);
  return '' + c + p + y;
};

exports.pick = function (n, u, c) {
  c = module11(
    module260(
      {
        parseFragmentIdentifier: true,
      },
      b,
      false
    ),
    c
  );
  var s = exports.parseUrl(n, c),
    l = s.url,
    f = s.query,
    p = s.fragmentIdentifier;
  return exports.stringifyUrl(
    {
      url: l,
      query: module463(f, u),
      fragmentIdentifier: p,
    },
    c
  );
};

exports.exclude = function (t, n, o) {
  var u = Array.isArray(n)
    ? function (t) {
        return !n.includes(t);
      }
    : function (t, o) {
        return !n(t, o);
      };
  return exports.pick(t, u, o);
};
