var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = y(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  s = ['style', 'theme'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

var v = function (t) {
  var l = t.style,
    p = t.theme,
    y = module52.default(t, s),
    v = p.colors,
    O = p.fonts.medium,
    h = module564.default(v.text).alpha(0.54).rgb().string();
  return <module1529.default />;
};

v.displayName = 'List.Subheader';
var b = ReactNative.StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 13,
    },
  }),
  O = module1495.withTheme(v);
exports.default = O;
