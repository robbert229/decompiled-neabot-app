var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, s, u);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1505 = require('./1505'),
  module1532 = require('./1532'),
  module1495 = require('./1495'),
  h = ['status', 'theme', 'disabled', 'onPress', 'testID'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var y = function (t) {
  var b = t.status,
    p = t.theme,
    y = t.disabled,
    k = t.onPress,
    w = t.testID,
    C = module52.default(t, h),
    x = React.useRef(new ReactNative.Animated.Value(1)).current,
    A = React.useRef(true),
    O = p.animation.scale;
  React.useEffect(
    function () {
      if (A.current) A.current = false;
      else {
        var t = 'checked' === b;
        ReactNative.Animated.sequence([
          ReactNative.Animated.timing(x, {
            toValue: 0.85,
            duration: t ? 100 * O : 0,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(x, {
            toValue: 1,
            duration: t ? 100 * O : 100 * O * 1.75,
            useNativeDriver: false,
          }),
        ]).start();
      }
    },
    [b, x, O]
  );
  var P,
    j,
    D = 'checked' === b,
    R = 'indeterminate' === b,
    E = C.color || p.colors.accent,
    S =
      C.uncheckedColor ||
      module564
        .default(p.colors.text)
        .alpha(p.dark ? 0.7 : 0.54)
        .rgb()
        .string();

  if (y) {
    P = module564.default(p.colors.text).alpha(0.16).rgb().string();
    j = p.colors.disabled;
  } else {
    P = module564.default(E).fade(0.32).rgb().string();
    j = D ? E : S;
  }

  var V = x.interpolate({
      inputRange: [0.8, 1],
      outputRange: [7, 0],
    }),
    _ = R ? 'minus-box' : D ? 'checkbox-marked' : 'checkbox-blank-outline';

  return (
    <module1532.default>
      {React.createElement(
        ReactNative.Animated.View,
        {
          style: {
            transform: [
              {
                scale: x,
              },
            ],
          },
        },
        React.createElement(module1505.default, {
          allowFontScaling: false,
          name: _,
          size: 24,
          color: j,
          direction: 'ltr',
        }),
        React.createElement(
          ReactNative.View,
          {
            style: [ReactNative.StyleSheet.absoluteFill, v.fillContainer],
          },
          React.createElement(ReactNative.Animated.View, {
            style: [
              v.fill,
              {
                borderColor: j,
              },
              {
                borderWidth: V,
              },
            ],
          })
        )
      )}
    </module1532.default>
  );
};

y.displayName = 'Checkbox.Android';
var v = ReactNative.StyleSheet.create({
    container: {
      borderRadius: 18,
      width: 36,
      height: 36,
      padding: 6,
    },
    fillContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    fill: {
      height: 14,
      width: 14,
    },
  }),
  k = module1495.withTheme(y);
exports.default = k;
var w = module1495.withTheme(y);
exports.CheckboxAndroid = w;
