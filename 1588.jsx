var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = v(n);
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
  module564 = require('./564'),
  ReactNative = require('react-native'),
  module1589 = require('./1589'),
  module1495 = require('./1495'),
  s = ['style', 'type', 'visible', 'theme', 'onLayout', 'padding'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

var y = ReactNative.StyleSheet.create({
    text: {
      fontSize: 12,
      paddingVertical: 4,
    },
    padding: {
      paddingHorizontal: 12,
    },
  }),
  h = module1495.withTheme(function (t) {
    var p = t.style,
      v = t.type,
      h = undefined === v ? 'info' : v,
      b = t.visible,
      O = undefined === b || b,
      j = t.theme,
      w = t.onLayout,
      P = t.padding,
      _ = undefined === P ? 'normal' : P,
      M = module52.default(t, s),
      k = React.useRef(new ReactNative.Animated.Value(O ? 1 : 0)).current,
      D = React.useRef(0).current,
      R = j.animation.scale;

    React.useEffect(
      function () {
        if (O)
          ReactNative.Animated.timing(k, {
            toValue: 1,
            duration: 150 * R,
            useNativeDriver: true,
          }).start();
        else
          ReactNative.Animated.timing(k, {
            toValue: 0,
            duration: 180 * R,
            useNativeDriver: true,
          }).start();
      },
      [O, R, k]
    );
    var V = j.colors,
      x = j.dark,
      A =
        'error' === h
          ? V.error
          : module564
              .default(V.text)
              .alpha(x ? 0.7 : 0.54)
              .rgb()
              .string();
    return <module1589.default>{M.children}</module1589.default>;
  });
exports.default = h;
