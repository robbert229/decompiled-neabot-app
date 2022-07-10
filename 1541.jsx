var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = s(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  module564 = require('./564'),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  module1494 = require('./1494'),
  p = ['inset', 'style', 'theme'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (s = function (t) {
    return t ? l : n;
  })(t);
}

var y = ReactNative.StyleSheet.create({
    light: {
      backgroundColor: module564.default(module1494.black).alpha(0.12).rgb().string(),
      height: ReactNative.StyleSheet.hairlineWidth,
    },
    dark: {
      backgroundColor: module564.default(module1494.white).alpha(0.12).rgb().string(),
      height: ReactNative.StyleSheet.hairlineWidth,
    },
    inset: {
      marginLeft: 72,
    },
  }),
  b = module1495.withTheme(function (t) {
    var o = t.inset,
      c = t.style,
      h = t.theme,
      s = module52.default(t, p),
      b = h.dark;
    return <ReactNative.View />;
  });
exports.default = b;
