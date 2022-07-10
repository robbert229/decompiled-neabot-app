exports.default = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0;

  if (t instanceof ReactNative.Animated.Value) {
    var o = [0, 1, 2, 3, 8, 24];
    return {
      shadowColor: u,
      shadowOffset: {
        width: new ReactNative.Animated.Value(0),
        height: t.interpolate({
          inputRange: o,
          outputRange: [0, 0.5, 0.75, 2, 7, 23],
        }),
      },
      shadowOpacity: t.interpolate({
        inputRange: [0, 1],
        outputRange: [0, f],
        extrapolate: 'clamp',
      }),
      shadowRadius: t.interpolate({
        inputRange: o,
        outputRange: [0, 0.75, 1.5, 3, 8, 24],
      }),
    };
  }

  if (0 === t) return {};
  var p, l;

  switch (t) {
    case 1:
      p = 0.5;
      l = 0.75;
      break;

    case 2:
      p = 0.75;
      l = 1.5;
      break;

    default:
      p = t - 1;
      l = t;
  }

  return {
    shadowColor: u,
    shadowOffset: {
      width: 0,
      height: p,
    },
    shadowOpacity: f,
    shadowRadius: l,
  };
};

var module1494 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      p = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = p ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(f, l, c);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./1494')),
  ReactNative = require('react-native');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

var u = module1494.black,
  f = 0.24;
