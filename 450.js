exports.default = function (t) {
  var c = React.useRef(f),
    o = React.useRef(false),
    l = React.useRef(true);
  React.useEffect(function () {
    l.current = true;
    return function () {
      l.current = false;
    };
  }, []);
  if (c.current === f) c.current = 'function' == typeof t ? t() : t;
  var s = React.useState(c.current),
    p = module12.default(s, 2),
    y = p[0],
    b = p[1],
    v = React.useCallback(function () {
      return c.current;
    }, []),
    O = React.useCallback(function (t) {
      if (t !== c.current && l.current) {
        c.current = t;
        if (!o.current) b(t);
      }
    }, []),
    j = React.useCallback(function (t) {
      o.current = true;

      try {
        t();
      } finally {
        o.current = false;
      }
    }, []),
    k = React.useCallback(function () {
      if (l.current) b(c.current);
    }, []);
  if (y !== c.current) b(c.current);
  var P = c.current;
  React.useDebugValue(P);
  return [P, v, O, j, k];
};

var module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = c(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = o ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, l, s);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react'));

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (c = function (t) {
    return t ? u : n;
  })(t);
}

var f = {};
