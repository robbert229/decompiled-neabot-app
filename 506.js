var module424 = require('./424'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var v = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (v && (v.get || v.set)) Object.defineProperty(u, l, v);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module507 = require('./507');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

var c = React.forwardRef(function (t, f) {
  var c = t.children,
    l = t.location;
  React.useEffect(function () {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  var v = {};

  if (f) {
    var p = {
      getCurrentOptions: function () {
        return v.options;
      },
    };
    if ('function' == typeof f) f(p);
    else f.current = p;
  }

  return React.createElement(
    module507.default.Provider,
    {
      value: {
        location: l,
      },
    },
    React.createElement(
      module424.CurrentRenderContext.Provider,
      {
        value: v,
      },
      c
    )
  );
});
exports.default = c;
