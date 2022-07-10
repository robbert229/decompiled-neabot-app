var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (l && (l.get || l.set)) Object.defineProperty(f, p, l);
        else f[p] = t[p];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('react')),
  module1505 = require('./1505');

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

var f = React.createContext({
    icon: module1505.default,
  }),
  c = f.Provider,
  p = f.Consumer;
exports.Consumer = p;
exports.Provider = c;
