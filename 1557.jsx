var module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
        else f[c] = t[c];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  ReactNative = require('react-native'),
  module1558 = require('./1558');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

var c = function (t) {
  return <module1558.default />;
};

exports.default = c;
var p = ReactNative.StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 20,
    marginVertical: 2,
    letterSpacing: 0.4,
  },
});
