exports.default = function (t) {
  var n = t.getState,
    o = t.emitter,
    c = t.beforeRemoveListeners,
    v = React.useContext(module439.default).addKeyedListener,
    y = React.useContext(module442.default),
    s = null == y ? undefined : y.key;
  React.useEffect(
    function () {
      if (s)
        return null == v
          ? undefined
          : v('beforeRemove', s, function (t) {
              var u = n();
              return b(o, c, u.routes, [], t);
            });
    },
    [v, c, o, n, s]
  );
};

var module260 = require('./260'),
  module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var v = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (v && (v.get || v.set)) Object.defineProperty(u, l, v);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module439 = require('./439'),
  module442 = require('./442');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

function v(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = y(t)) || (n && t && 'number' == typeof t.length)) {
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

function y(t, n) {
  if (t) {
    if ('string' == typeof t) return s(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(t, n) : undefined;
  }
}

function s(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

var p = Symbol('VISITED_ROUTE_KEYS'),
  b = function (t, u, f, l, c) {
    for (
      var y,
        s,
        b = l.map(function (t) {
          return t.key;
        }),
        h = f
          .filter(function (t) {
            return !b.includes(t.key);
          })
          .reverse(),
        O = null != (y = c[p]) ? y : new Set(),
        j = module11.default({}, c, module260.default({}, p, O)),
        k = v(h);
      !(s = k()).done;

    ) {
      var P,
        S = s.value;

      if (!O.has(S.key)) {
        if (null == (P = u[S.key]) ? undefined : P.call(u, j)) return true;
        if (
          (O.add(S.key),
          t.emit({
            type: 'beforeRemove',
            target: S.key,
            data: {
              action: j,
            },
            canPreventDefault: true,
          }).defaultPrevented)
        )
          return true;
      }
    }

    return false;
  };

exports.shouldPreventRemove = b;
