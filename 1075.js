exports.default = function (t) {
  var h = t.visible,
    b = undefined === h || h,
    O = t.size,
    w = undefined === O ? 18 : O,
    S = t.children,
    j = t.style,
    k = module52.default(t, p),
    M = React.useState(function () {
      return new ReactNative.Animated.Value(b ? 1 : 0);
    }),
    P = module12.default(M, 1)[0],
    _ = React.useState(!!b),
    z = module12.default(_, 2),
    A = z[0],
    W = z[1],
    x = module421.useTheme();

  React.useEffect(
    function () {
      if (A)
        ReactNative.Animated.timing(P, {
          toValue: b ? 1 : 0,
          duration: 150,
          useNativeDriver: true,
        }).start(function (t) {
          if (t.finished && !b) W(false);
        });
    },
    [P, A, b]
  );
  if (b && !A) W(true);
  if (!b && !A) return null;
  var C = ReactNative.StyleSheet.flatten(j) || {},
    D = C.backgroundColor,
    R = undefined === D ? x.colors.notification : D,
    E = module52.default(C, v),
    H = module564.default(R).isLight() ? 'black' : 'white',
    L = w / 2,
    T = Math.floor((3 * w) / 4);
  return React.createElement(
    ReactNative.Animated.Text,
    module11.default(
      {
        numberOfLines: 1,
        style: [
          {
            opacity: P,
            transform: [
              {
                scale: P.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
            backgroundColor: R,
            color: H,
            fontSize: T,
            lineHeight: w - 1,
            height: w,
            minWidth: w,
            borderRadius: L,
          },
          y.container,
          E,
        ],
      },
      k
    ),
    S
  );
};

var module11 = require('./11'),
  module12 = require('./12'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = h(n);
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
  module421 = require('./421'),
  p = ['visible', 'size', 'children', 'style'],
  v = ['backgroundColor'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

var y = ReactNative.StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    paddingHorizontal: 4,
    overflow: 'hidden',
  },
});
