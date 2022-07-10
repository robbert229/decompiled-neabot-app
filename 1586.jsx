var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module564 = require('./564'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = E(l);
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
  module1543 = require('./1543'),
  module1545 = require('./1545'),
  module1572 = require('./1572'),
  module1525 = require('./1525'),
  module1529 = require('./1529'),
  module1532 = require('./1532'),
  module1494 = require('./1494'),
  module1495 = require('./1495'),
  module1526 = require('./1526'),
  k = [
    'small',
    'icon',
    'label',
    'accessibilityLabel',
    'accessibilityState',
    'animated',
    'color',
    'disabled',
    'onPress',
    'onLongPress',
    'theme',
    'style',
    'visible',
    'uppercase',
    'loading',
    'testID',
  ];

function E(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (E = function (t) {
    return t ? n : l;
  })(t);
}

module1526.default;

var O = function (t) {
    var w = t.small,
      E = t.icon,
      O = t.label,
      D = t.accessibilityLabel,
      L = undefined === D ? O : D,
      S = t.accessibilityState,
      _ = t.animated,
      A = undefined === _ || _,
      C = t.color,
      M = t.disabled,
      T = t.onPress,
      x = t.onLongPress,
      z = t.theme,
      I = t.style,
      R = t.visible,
      V = undefined === R || R,
      W = t.uppercase,
      B = undefined === W || W,
      F = t.loading,
      H = t.testID,
      N = module52.default(t, k),
      q = React.useRef(new ReactNative.Animated.Value(V ? 1 : 0)).current,
      G = z.animation.scale;
    React.useEffect(
      function () {
        if (V)
          ReactNative.Animated.timing(q, {
            toValue: 1,
            duration: 200 * G,
            useNativeDriver: true,
          }).start();
        else
          ReactNative.Animated.timing(q, {
            toValue: 0,
            duration: 150 * G,
            useNativeDriver: true,
          }).start();
      },
      [V, G, q]
    );
    var J,
      K = A ? module1572.default : module1525.default,
      Q = module564
        .default(z.dark ? module1494.white : module1494.black)
        .alpha(0.12)
        .rgb()
        .string(),
      U = (ReactNative.StyleSheet.flatten(I) || {}).backgroundColor,
      X = undefined === U ? (M ? Q : z.colors.accent) : U;
    J =
      undefined !== C
        ? C
        : M
        ? module564
            .default(z.dark ? module1494.white : module1494.black)
            .alpha(0.32)
            .rgb()
            .string()
        : module1526.default(X, module1494.white, 'rgba(0, 0, 0, .54)');
    var Y = module564.default(J).alpha(0.32).rgb().string();
    return (
      <module1545.default>
        <module1532.default
          borderless
          onPress={T}
          onLongPress={x}
          rippleColor={Y}
          disabled={M}
          accessibilityLabel={L}
          accessibilityTraits={M ? ['button', 'disabled'] : 'button'}
          accessibilityComponentType="button"
          accessibilityRole="button"
          accessibilityState={module11.default({}, S, {
            disabled: M,
          })}
          style={j.touchable}
          testID={H}
        >
          <ReactNative.View style={[j.content, O ? j.extended : w ? j.small : j.standard]} pointerEvents="none">
            {E && true !== F ? <K source={E} size={24} color={J} /> : null}
            {F ? <module1543.default size={18} color={J} /> : null}
            {O ? (
              <module1529.default
                selectable={false}
                style={[
                  j.label,
                  B && j.uppercaseLabel,
                  module11.default(
                    {
                      color: J,
                    },
                    z.fonts.medium
                  ),
                ]}
              >
                {O}
              </module1529.default>
            ) : null}
          </ReactNative.View>
        </module1532.default>
      </module1545.default>
    );
  },
  j = ReactNative.StyleSheet.create({
    container: {
      borderRadius: 28,
      elevation: 6,
    },
    touchable: {
      borderRadius: 28,
    },
    standard: {
      height: 56,
      width: 56,
    },
    small: {
      height: 40,
      width: 40,
    },
    extended: {
      height: 48,
      paddingHorizontal: 16,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      marginHorizontal: 8,
    },
    uppercaseLabel: {
      textTransform: 'uppercase',
    },
    disabled: {
      elevation: 0,
    },
  }),
  D = module1495.withTheme(O);

exports.default = D;
var L = module1495.withTheme(O);
exports.FAB = L;
