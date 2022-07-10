exports.default = function (t) {
  var n = t.disabled,
    b = t.allowFontScaling,
    p = t.backImage,
    v = t.label,
    h = t.labelStyle,
    w = t.labelVisible,
    k = undefined === w ? 'ios' === ReactNative.Platform.OS : w,
    M = t.onLabelLayout,
    L = t.onPress,
    P = t.pressColorAndroid,
    O = t.screenLayout,
    S = t.tintColor,
    E = t.titleLayout,
    C = t.truncatedLabel,
    I = undefined === C ? 'Back' : C,
    x = t.accessibilityLabel,
    j = undefined === x ? (v && 'Back' !== v ? v + ', back' : 'Go back') : x,
    R = t.style,
    W = module421.useTheme(),
    D = W.dark,
    T = W.colors,
    V = React.useState(undefined),
    F = module12.default(V, 2),
    _ = F[0],
    z = F[1],
    B =
      undefined !== S
        ? S
        : ReactNative.Platform.select({
            ios: T.primary,
            default: T.text,
          }),
    A = undefined !== P ? P : D ? 'rgba(255, 255, 255, .32)' : 'rgba(0, 0, 0, .32)',
    X = function (t) {
      if (!(null == M)) M(t);
      z(t.nativeEvent.layout.x + t.nativeEvent.layout.width);
    },
    q = function () {
      return !v || (_ && E && O && (O.width - E.width) / 2 < _ + 26);
    };

  return React.createElement(
    module556.default,
    {
      disabled: n,
      accessible: true,
      accessibilityRole: 'button',
      accessibilityComponentType: 'button',
      accessibilityLabel: j,
      accessibilityTraits: 'button',
      testID: 'header-back',
      delayPressIn: 0,
      onPress: n
        ? undefined
        : function () {
            return L && requestAnimationFrame(L);
          },
      pressColor: A,
      style: [y.container, n && y.disabled, R],
      hitSlop: ReactNative.Platform.select({
        ios: undefined,
        default: {
          top: 16,
          right: 16,
          bottom: 16,
          left: 16,
        },
      }),
      borderless: true,
    },
    React.createElement(
      React.Fragment,
      null,
      p
        ? p({
            tintColor: B,
          })
        : React.createElement(ReactNative.Image, {
            style: [
              y.icon,
              Boolean(k) && y.iconWithLabel,
              Boolean(B) && {
                tintColor: B,
              },
            ],
            source: require('./557'),
            fadeDuration: 0,
          }),
      (function () {
        var t = q() ? I : v;
        if (!k || undefined === t) return null;
        var n = React.createElement(
          ReactNative.View,
          {
            style: O
              ? [
                  y.labelWrapper,
                  {
                    minWidth: O.width / 2 - 27,
                  },
                ]
              : null,
          },
          React.createElement(
            ReactNative.Animated.Text,
            {
              accessible: false,
              onLayout: t === v ? X : undefined,
              style: [
                y.label,
                B
                  ? {
                      color: B,
                    }
                  : null,
                h,
              ],
              numberOfLines: 1,
              allowFontScaling: !!b,
            },
            t
          )
        );
        if (p || 'ios' !== ReactNative.Platform.OS) return n;
        return React.createElement(
          module552.default,
          {
            maskElement: React.createElement(
              ReactNative.View,
              {
                style: y.iconMaskContainer,
              },
              React.createElement(ReactNative.Image, {
                source: require('./558'),
                style: y.iconMask,
              }),
              React.createElement(ReactNative.View, {
                style: y.iconMaskFillerRect,
              })
            ),
          },
          n
        );
      })()
    )
  );
};

var module11 = require('./11'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = b(n);
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
  module421 = require('./421'),
  module552 = require('./552'),
  module556 = require('./556');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (b = function (t) {
    return t ? l : n;
  })(t);
}

var y = ReactNative.StyleSheet.create({
  container: module11.default(
    {
      alignItems: 'center',
      flexDirection: 'row',
    },
    ReactNative.Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    })
  ),
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: ReactNative.Platform.select({
    ios: {
      height: 21,
      width: 13,
      marginLeft: 8,
      marginRight: 22,
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [
        {
          scaleX: ReactNative.I18nManager.isRTL ? -1 : 1,
        },
      ],
    },
    default: {
      height: 24,
      width: 24,
      margin: 3,
      resizeMode: 'contain',
      transform: [
        {
          scaleX: ReactNative.I18nManager.isRTL ? -1 : 1,
        },
      ],
    },
  }),
  iconWithLabel:
    'ios' === ReactNative.Platform.OS
      ? {
          marginRight: 6,
        }
      : {},
  iconMaskContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconMaskFillerRect: {
    flex: 1,
    backgroundColor: '#000',
  },
  iconMask: {
    height: 21,
    width: 13,
    marginLeft: -14.5,
    marginVertical: 12,
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [
      {
        scaleX: ReactNative.I18nManager.isRTL ? -1 : 1,
      },
    ],
  },
});
