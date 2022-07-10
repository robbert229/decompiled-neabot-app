exports.default = function (t) {
  var s = t.tintColor,
    y = t.style,
    v = module52.default(t, c),
    O = module421.useTheme().colors;
  return React.createElement(
    ReactNative.Animated.Text,
    module11.default(
      {
        accessibilityRole: 'header',
        'aria-level': '1',
        numberOfLines: 1,
      },
      v,
      {
        style: [
          p.title,
          {
            color: undefined === s ? O.text : s,
          },
          y,
        ],
      }
    )
  );
};

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  c = ['tintColor', 'style'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

var p = ReactNative.StyleSheet.create({
  title: ReactNative.Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600',
    },
    android: {
      fontSize: 20,
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    default: {
      fontSize: 18,
      fontWeight: '500',
    },
  }),
});
