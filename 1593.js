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
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1594 = require('./1594'),
  module1595 = require('./1595'),
  module1532 = require('./1532'),
  module1495 = require('./1495'),
  v = ['disabled', 'onPress', 'theme', 'value', 'status', 'testID'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var y = function (t) {
  var h = t.disabled,
    p = t.onPress,
    y = t.theme,
    C = t.value,
    k = t.status,
    R = t.testID,
    V = module52.default(t, v),
    P = React.useRef(new ReactNative.Animated.Value(2)).current,
    A = React.useRef(new ReactNative.Animated.Value(1)).current,
    O = React.useRef(true),
    j = y.animation.scale;
  React.useEffect(
    function () {
      if (O.current) O.current = false;
      else if ('checked' === k) {
        A.setValue(1.2);
        ReactNative.Animated.timing(A, {
          toValue: 1,
          duration: 150 * j,
          useNativeDriver: true,
        }).start();
      } else {
        P.setValue(10);
        ReactNative.Animated.timing(P, {
          toValue: 2,
          duration: 150 * j,
          useNativeDriver: false,
        }).start();
      }
    },
    [k, P, A, j]
  );

  var _,
    D,
    E = V.color || y.colors.accent,
    M =
      V.uncheckedColor ||
      module564
        .default(y.colors.text)
        .alpha(y.dark ? 0.7 : 0.54)
        .rgb()
        .string();

  return React.createElement(module1594.RadioButtonContext.Consumer, null, function (t) {
    var o =
      'checked' ===
      module1595.isChecked({
        contextValue: null == t ? undefined : t.value,
        status: k,
        value: C,
      });

    if (h) {
      _ = module564.default(y.colors.text).alpha(0.16).rgb().string();
      D = y.colors.disabled;
    } else {
      _ = module564.default(E).fade(0.32).rgb().string();
      D = o ? E : M;
    }

    return React.createElement(
      module1532.default,
      module11.default({}, V, {
        borderless: true,
        rippleColor: _,
        onPress: h
          ? undefined
          : function () {
              module1595.handlePress({
                onPress: p,
                onValueChange: null == t ? undefined : t.onValueChange,
                value: C,
              });
            },
        accessibilityTraits: h ? ['button', 'disabled'] : 'button',
        accessibilityComponentType: o ? 'radiobutton_checked' : 'radiobutton_unchecked',
        accessibilityRole: 'radio',
        accessibilityState: {
          disabled: h,
          checked: o,
        },
        accessibilityLiveRegion: 'polite',
        style: w.container,
        testID: R,
      }),
      React.createElement(
        ReactNative.Animated.View,
        {
          style: [
            w.radio,
            {
              borderColor: D,
              borderWidth: P,
            },
          ],
        },
        o
          ? React.createElement(
              ReactNative.View,
              {
                style: [ReactNative.StyleSheet.absoluteFill, w.radioContainer],
              },
              React.createElement(ReactNative.Animated.View, {
                style: [
                  w.dot,
                  {
                    backgroundColor: D,
                    transform: [
                      {
                        scale: A,
                      },
                    ],
                  },
                ],
              })
            )
          : null
      )
    );
  });
};

y.displayName = 'RadioButton.Android';
var w = ReactNative.StyleSheet.create({
    container: {
      borderRadius: 18,
    },
    radioContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    radio: {
      height: 20,
      width: 20,
      borderRadius: 10,
      margin: 8,
    },
    dot: {
      height: 10,
      width: 10,
      borderRadius: 5,
    },
  }),
  C = module1495.withTheme(y);
exports.default = C;
var k = module1495.withTheme(y);
exports.RadioButtonAndroid = k;
