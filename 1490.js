var module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = f(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, l, p);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module1491 = require('./1491');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}

var c = React.default.createContext();

exports.ThemeProvider = function (t) {
  var f = t.theme,
    l = t.children,
    p = React.useState(f || module1491.default),
    v = module12.default(p, 2),
    h = v[0],
    s = v[1],
    y = function (t) {
      s(t);
    },
    O = React.useMemo(
      function () {
        return {
          theme: h,
          changeTheme: function (t) {
            return y(t);
          },
          toggleTheme: function () {
            if (!(1 === h.id)) y(module1491.default);
          },
        };
      },
      [h]
    );

  return React.default.createElement(
    c.Provider,
    {
      value: O,
    },
    l
  );
};

var l = c;
exports.default = l;
