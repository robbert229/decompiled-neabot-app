var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1494 = require('./1494'),
  module1495 = require('./1495'),
  module1526 = require('./1526'),
  v = ['children', 'size', 'style', 'theme', 'visible'],
  p = ['backgroundColor'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

var y = module1495.withTheme(function (t) {
  var c = t.children,
    h = t.size,
    y = undefined === h ? 20 : h,
    O = t.style,
    w = t.theme,
    j = t.visible,
    k = undefined === j || j,
    P = module52.default(t, v),
    S = React.useRef(new ReactNative.Animated.Value(k ? 1 : 0)).current,
    _ = React.useRef(true),
    A = w.animation.scale;

  React.useEffect(
    function () {
      if (_.current) _.current = false;
      else
        ReactNative.Animated.timing(S, {
          toValue: k ? 1 : 0,
          duration: 150 * A,
          useNativeDriver: true,
        }).start();
    },
    [k, S, A]
  );
  var M = ReactNative.StyleSheet.flatten(O) || {},
    x = M.backgroundColor,
    z = undefined === x ? w.colors.notification : x,
    W = module52.default(M, p),
    C = module1526.default(z, module1494.white, module1494.black),
    D = y / 2;
  return React.createElement(
    ReactNative.Animated.Text,
    module11.default(
      {
        numberOfLines: 1,
        style: [
          module11.default(
            {
              opacity: S,
              backgroundColor: z,
              color: C,
              fontSize: 0.5 * y,
            },
            w.fonts.regular,
            {
              lineHeight: y,
              height: y,
              minWidth: y,
              borderRadius: D,
            }
          ),
          b.container,
          W,
        ],
      },
      P
    ),
    c
  );
});
exports.default = y;
var b = ReactNative.StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 4,
    overflow: 'hidden',
  },
});
