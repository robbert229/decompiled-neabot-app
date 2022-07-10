var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = v(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1521 = require('./1521'),
  module1495 = require('./1495'),
  module1522 = require('./1522'),
  s = ['style', 'theme'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

var y = module1495.withTheme(function (t) {
  var c = t.style,
    v = t.theme,
    y = module52.default(t, s),
    O = (ReactNative.StyleSheet.flatten(c) || {}).elevation,
    b = undefined === O ? 4 : O,
    h = v.dark,
    j = v.mode,
    w = v.colors;
  return React.createElement(
    ReactNative.Animated.View,
    module11.default({}, y, {
      style: [
        {
          backgroundColor: h && 'adaptive' === j ? module1522.default(b, w.surface) : w.surface,
        },
        b ? module1521.default(b) : null,
        c,
      ],
    })
  );
});
exports.default = y;
