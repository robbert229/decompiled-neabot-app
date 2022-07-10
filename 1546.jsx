var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = w(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, s, u);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1543 = require('./1543'),
  module1525 = require('./1525'),
  module1545 = require('./1545'),
  module1529 = require('./1529'),
  module1532 = require('./1532'),
  module1494 = require('./1494'),
  module1495 = require('./1495'),
  S = [
    'disabled',
    'compact',
    'mode',
    'dark',
    'loading',
    'icon',
    'color',
    'children',
    'uppercase',
    'accessibilityLabel',
    'onPress',
    'onLongPress',
    'style',
    'theme',
    'contentStyle',
    'labelStyle',
    'testID',
    'accessible',
  ];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (w = function (t) {
    return t ? l : n;
  })(t);
}

var P = ReactNative.StyleSheet.create({
    button: {
      minWidth: 64,
      borderStyle: 'solid',
    },
    compact: {
      minWidth: 'auto',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginLeft: 12,
      marginRight: -4,
    },
    iconReverse: {
      marginRight: 12,
      marginLeft: -4,
    },
    label: {
      textAlign: 'center',
      letterSpacing: 1,
      marginVertical: 9,
      marginHorizontal: 16,
    },
    compactLabel: {
      marginHorizontal: 8,
    },
    uppercaseLabel: {
      textTransform: 'uppercase',
    },
  }),
  L = module1495.withTheme(function (t) {
    var v,
      w = t.disabled,
      L = t.compact,
      k = t.mode,
      O = undefined === k ? 'text' : k,
      D = t.dark,
      R = t.loading,
      j = t.icon,
      E = t.color,
      V = t.children,
      W = t.uppercase,
      I = undefined === W || W,
      _ = t.accessibilityLabel,
      x = t.onPress,
      z = t.onLongPress,
      C = t.style,
      M = t.theme,
      A = t.contentStyle,
      T = t.labelStyle,
      H = t.testID,
      N = t.accessible,
      q = module52.default(t, S),
      B = React.useRef(new ReactNative.Animated.Value('contained' === O ? 2 : 0)).current;
    React.useEffect(
      function () {
        B.setValue('contained' === O ? 2 : 0);
      },
      [O, B]
    );
    var F,
      G,
      J,
      K,
      Q = M.colors,
      U = M.roundness,
      X = M.fonts.medium;
    F =
      'contained' === O
        ? w
          ? module564
              .default(M.dark ? module1494.white : module1494.black)
              .alpha(0.12)
              .rgb()
              .string()
          : E || Q.primary
        : 'transparent';

    if ('outlined' === O) {
      G = module564
        .default(M.dark ? module1494.white : module1494.black)
        .alpha(0.29)
        .rgb()
        .string();
      K = ReactNative.StyleSheet.hairlineWidth;
    } else {
      G = 'transparent';
      K = 0;
    }

    J = w
      ? module564
          .default(M.dark ? module1494.white : module1494.black)
          .alpha(0.32)
          .rgb()
          .string()
      : 'contained' === O
      ? ('boolean' == typeof D ? D : 'transparent' !== F && !module564.default(F).isLight())
        ? module1494.white
        : module1494.black
      : E || Q.primary;
    var Y = module564.default(J).alpha(0.32).rgb().string(),
      Z = {
        backgroundColor: F,
        borderColor: G,
        borderWidth: K,
        borderRadius: U,
      },
      $ = {
        borderRadius: (C && (ReactNative.StyleSheet.flatten(C) || {}).borderRadius) || U,
      },
      ee = ReactNative.StyleSheet.flatten(T) || {},
      te = ee.color,
      ae = ee.fontSize,
      ne = module11.default(
        {
          color: J,
        },
        X
      ),
      re = w || 'contained' !== O ? 0 : B,
      ie = 'row-reverse' === (null == (v = ReactNative.StyleSheet.flatten(A)) ? undefined : v.flexDirection) ? P.iconReverse : P.icon;
    return (
      <module1545.default>
        <module1532.default
          borderless
          delayPressIn={0}
          onPress={x}
          onLongPress={z}
          onPressIn={function () {
            if ('contained' === O) {
              var t = M.animation.scale;
              ReactNative.Animated.timing(B, {
                toValue: 8,
                duration: 200 * t,
                useNativeDriver: true,
              }).start();
            }
          }}
          onPressOut={function () {
            if ('contained' === O) {
              var t = M.animation.scale;
              ReactNative.Animated.timing(B, {
                toValue: 2,
                duration: 150 * t,
                useNativeDriver: true,
              }).start();
            }
          }}
          accessibilityLabel={_}
          accessibilityTraits={w ? ['button', 'disabled'] : 'button'}
          accessibilityComponentType="button"
          accessibilityRole="button"
          accessibilityState={{
            disabled: w,
          }}
          accessible={N}
          disabled={w}
          rippleColor={Y}
          style={$}
          testID={H}
        >
          <ReactNative.View style={[P.content, A]}>
            {j && true !== R ? (
              <ReactNative.View style={ie}>
                <module1525.default source={j} size={null != ae ? ae : 16} color={'string' == typeof te ? te : J} />
              </ReactNative.View>
            ) : null}
            {R ? <module1543.default size={null != ae ? ae : 16} color={'string' == typeof te ? te : J} style={ie} /> : null}
            <module1529.default selectable={false} numberOfLines={1} style={[P.label, L && P.compactLabel, I && P.uppercaseLabel, ne, X, T]}>
              {V}
            </module1529.default>
          </ReactNative.View>
        </module1532.default>
      </module1545.default>
    );
  });
exports.default = L;
