var module12 = require('./12'),
  React = f(require('react')),
  ReactNative = require('react-native'),
  module1525 = f(require('./1525'));

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

function f(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = c(n);
  if (o && o.has(t)) return o.get(t);
  var u = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var s = l ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (s && (s.get || s.set)) Object.defineProperty(u, f, s);
      else u[f] = t[f];
    }

  u.default = t;
  if (o) o.set(t, u);
  return u;
}

var module1495 = require('./1495').withTheme(function (t) {
  var c = t.color,
    f = t.size,
    s = t.source,
    y = t.theme,
    v = React.useState(function () {
      return s;
    }),
    w = module12.default(v, 2),
    h = w[0],
    b = w[1],
    O = React.useState(null),
    j = module12.default(O, 2),
    E = j[0],
    R = j[1],
    V = React.useRef(new ReactNative.Animated.Value(1)).current,
    P = y.animation.scale;

  if (h !== s) {
    R(function () {
      return h;
    });
    b(function () {
      return s;
    });
  }

  React.useEffect(
    function () {
      if (module1525.isValidIcon(E) && !module1525.isEqualIcon(E, h)) {
        V.setValue(1);
        ReactNative.Animated.timing(V, {
          duration: 200 * P,
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
    [h, E, V, P]
  );
  var _ = V,
    M = E
      ? V.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        })
      : 1,
    A = V.interpolate({
      inputRange: [0, 1],
      outputRange: ['-90deg', '0deg'],
    }),
    S = E
      ? V.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '-180deg'],
        })
      : '0deg';
  return (
    <ReactNative.View
      style={[
        p.content,
        {
          height: f,
          width: f,
        },
      ]}
    >
      {E
        ? React.createElement(
            ReactNative.Animated.View,
            {
              style: [
                p.icon,
                {
                  opacity: _,
                  transform: [
                    {
                      rotate: A,
                    },
                  ],
                },
              ],
            },
            React.createElement(module1525.default, {
              source: E,
              size: f,
              color: c,
            })
          )
        : null}
      {React.createElement(
        ReactNative.Animated.View,
        {
          style: [
            p.icon,
            {
              opacity: M,
              transform: [
                {
                  rotate: S,
                },
              ],
            },
          ],
        },
        React.createElement(module1525.default, {
          source: h,
          size: f,
          color: c,
        })
      )}
    </ReactNative.View>
  );
});

exports.default = module1495;
var p = ReactNative.StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
