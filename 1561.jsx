var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = l(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1562 = require('./1562'),
  module1563 = require('./1563'),
  module1495 = require('./1495');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

var p = function (t) {
    return 'ios' === ReactNative.Platform.OS ? <module1562.default /> : <module1563.default />;
  },
  v = module1495.withTheme(p);

exports.default = v;
var y = module1495.withTheme(p);
exports.Checkbox = y;
