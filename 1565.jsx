var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = P(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, c, u);
        else o[c] = t[c];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1525 = require('./1525'),
  module1505 = require('./1505'),
  module1545 = require('./1545'),
  module1529 = require('./1529'),
  module1532 = require('./1532'),
  module1495 = require('./1495'),
  module1494 = require('./1494'),
  w = [
    'mode',
    'children',
    'icon',
    'avatar',
    'selected',
    'disabled',
    'accessibilityLabel',
    'closeIconAccessibilityLabel',
    'onPress',
    'onLongPress',
    'onClose',
    'textStyle',
    'style',
    'theme',
    'testID',
    'selectedColor',
    'ellipsizeMode',
  ];

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (P = function (t) {
    return t ? n : l;
  })(t);
}

var S = ReactNative.StyleSheet.create({
    container: {
      borderWidth: ReactNative.StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      flexDirection: 'row',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 4,
      position: 'relative',
    },
    icon: {
      padding: 4,
      alignSelf: 'center',
    },
    closeIcon: {
      marginRight: 4,
    },
    text: {
      minHeight: 24,
      lineHeight: 24,
      textAlignVertical: 'center',
      marginVertical: 4,
    },
    avatar: {
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    avatarWrapper: {
      marginRight: 4,
    },
    avatarSelected: {
      position: 'absolute',
      top: 4,
      left: 4,
      backgroundColor: 'rgba(0, 0, 0, .29)',
    },
    closeButtonStyle: {
      position: 'absolute',
      right: 0,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  E = module1495.withTheme(function (t) {
    var h = t.mode,
      P = undefined === h ? 'flat' : h,
      E = t.children,
      C = t.icon,
      L = t.avatar,
      O = t.selected,
      k = undefined !== O && O,
      I = t.disabled,
      R = undefined !== I && I,
      V = t.accessibilityLabel,
      x = t.closeIconAccessibilityLabel,
      D = undefined === x ? 'Close' : x,
      j = t.onPress,
      M = t.onLongPress,
      W = t.onClose,
      z = t.textStyle,
      A = t.style,
      T = t.theme,
      _ = t.testID,
      B = t.selectedColor,
      H = t.ellipsizeMode,
      N = module52.default(t, w),
      F = React.useRef(new ReactNative.Animated.Value(0)).current,
      q = T.dark,
      G = T.colors,
      J = 'outlined' === P ? G.surface : q ? '#383838' : '#ebebeb',
      K = ReactNative.StyleSheet.flatten(A) || {},
      Q = K.backgroundColor,
      U = undefined === Q ? J : Q,
      X = K.borderRadius,
      Y = undefined === X ? 16 : X,
      Z =
        'outlined' === P
          ? module564
              .default(undefined !== B ? B : module564.default(q ? module1494.white : module1494.black))
              .alpha(0.29)
              .rgb()
              .string()
          : U,
      $ = R
        ? G.disabled
        : module564
            .default(undefined !== B ? B : G.text)
            .alpha(0.87)
            .rgb()
            .string(),
      ee = R
        ? G.disabled
        : module564
            .default(undefined !== B ? B : G.text)
            .alpha(0.54)
            .rgb()
            .string(),
      te = 'string' == typeof U ? U : J,
      ie = (q ? module564.default(te).lighten('outlined' === P ? 0.2 : 0.4) : module564.default(te).darken('outlined' === P ? 0.08 : 0.2)).rgb().string(),
      le = B ? module564.default(B).fade(0.5).rgb().string() : ie,
      ae = ['button'],
      re = {
        selected: k,
        disabled: R,
      };
    if (k) ae.push('selected');
    if (R) ae.push('disabled');
    return (
      <module1545.default>
        <module1532.default
          borderless
          delayPressIn={0}
          style={{
            borderRadius: Y,
          }}
          onPress={j}
          onLongPress={M}
          onPressIn={function () {
            var t = T.animation.scale;
            ReactNative.Animated.timing(F, {
              toValue: 4,
              duration: 200 * t,
              useNativeDriver: true,
            }).start();
          }}
          onPressOut={function () {
            var t = T.animation.scale;
            ReactNative.Animated.timing(F, {
              toValue: 0,
              duration: 150 * t,
              useNativeDriver: true,
            }).start();
          }}
          underlayColor={le}
          disabled={R}
          accessibilityLabel={V}
          accessibilityTraits={ae}
          accessibilityComponentType="button"
          accessibilityRole="button"
          accessibilityState={re}
          testID={_}
        >
          <ReactNative.View
            style={[
              S.content,
              {
                paddingRight: W ? 32 : 4,
              },
            ]}
          >
            {L && !C ? (
              <ReactNative.View
                style={[
                  S.avatarWrapper,
                  R && {
                    opacity: 0.26,
                  },
                ]}
              >
                {React.isValidElement(L)
                  ? React.cloneElement(L, {
                      style: [S.avatar, L.props.style],
                    })
                  : L}
              </ReactNative.View>
            ) : null}
            {C || k ? (
              <ReactNative.View style={[S.icon, L ? [S.avatar, S.avatarSelected] : null]}>
                {C ? (
                  <module1525.default source={C} color={L ? module1494.white : ee} size={18} />
                ) : (
                  <module1505.default name="check" color={L ? module1494.white : ee} size={18} direction="ltr" />
                )}
              </ReactNative.View>
            ) : null}
            <module1529.default
              selectable={false}
              numberOfLines={1}
              style={[
                S.text,
                module11.default({}, T.fonts.regular, {
                  color: $,
                  marginRight: W ? 0 : 8,
                  marginLeft: L || C || k ? 4 : 8,
                }),
                z,
              ]}
              ellipsizeMode={H}
            >
              {E}
            </module1529.default>
          </ReactNative.View>
        </module1532.default>
        {W ? (
          <ReactNative.View style={S.closeButtonStyle}>
            <ReactNative.TouchableWithoutFeedback onPress={W} accessibilityTraits="button" accessibilityComponentType="button" accessibilityRole="button" accessibilityLabel={D}>
              <ReactNative.View style={[S.icon, S.closeIcon]}>
                <module1505.default name="close-circle" size={16} color={ee} direction="ltr" />
              </ReactNative.View>
            </ReactNative.TouchableWithoutFeedback>
          </ReactNative.View>
        ) : null}
      </module1545.default>
    );
  });
exports.default = E;
