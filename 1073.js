exports.default = function (t) {
  var v = t.focused,
    S = t.route,
    h = t.label,
    p = t.icon,
    P = t.badge,
    x = t.badgeStyle,
    C = t.to,
    L = t.button,
    T =
      undefined === L
        ? function (t) {
            var u = t.children,
              b = t.style,
              v = t.onPress,
              S = t.to,
              h = t.accessibilityRole,
              p = t.accessibilityState,
              P = module52.default(t, f);
            return 'web' === ReactNative.Platform.OS && S
              ? React.default.createElement(
                  module421.Link,
                  module11.default({}, P, {
                    to: S,
                    style: [y.button, b],
                    onPress: function (t) {
                      if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || (null != t.button && 0 !== t.button))) {
                        t.preventDefault();
                        if (!(null == v)) v(t);
                      }
                    },
                  }),
                  u
                )
              : React.default.createElement(
                  ReactNative.TouchableWithoutFeedback,
                  module11.default({}, P, {
                    accessibilityRole: h,
                    accessibilityState: p,
                    onPress: v,
                  }),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: b,
                    },
                    u
                  )
                );
          }
        : L,
    w = t.accessibilityLabel,
    k = t.testID,
    B = t.onPress,
    E = t.onLongPress,
    D = t.horizontal,
    O = t.activeTintColor,
    z = t.inactiveTintColor,
    F = t.activeBackgroundColor,
    I = undefined === F ? 'transparent' : F,
    K = t.inactiveBackgroundColor,
    R = undefined === K ? 'transparent' : K,
    _ = t.showLabel,
    j = undefined === _ || _,
    A = t.allowFontScaling,
    M = t.labelStyle,
    V = t.iconStyle,
    W = t.style,
    q = module421.useTheme().colors,
    G = undefined === O ? q.primary : O,
    H = undefined === z ? module564.default(q.text).mix(module564.default(q.card), 0.5).hex() : z,
    J = {
      route: S,
      focused: v,
    },
    N = v ? I : R;
  return T({
    to: C,
    onPress: B,
    onLongPress: E,
    testID: k,
    accessibilityLabel: w,
    accessibilityRole: 'button',
    accessibilityState: {
      selected: v,
    },
    accessibilityStates: v ? ['selected'] : [],
    style: [
      y.tab,
      {
        backgroundColor: N,
      },
      D ? y.tabLandscape : y.tabPortrait,
      W,
    ],
    children: React.default.createElement(
      React.default.Fragment,
      null,
      (function (t) {
        var l = t.focused;
        if (undefined === p) return null;
        var n = l ? 1 : 0,
          c = l ? 0 : 1;
        return React.default.createElement(module1074.default, {
          route: S,
          horizontal: D,
          badge: P,
          badgeStyle: x,
          activeOpacity: n,
          inactiveOpacity: c,
          activeTintColor: G,
          inactiveTintColor: H,
          renderIcon: p,
          style: V,
        });
      })(J),
      (function (t) {
        var l = t.focused;
        if (false === j) return null;
        var n = l ? G : H;
        if ('string' == typeof h)
          return React.default.createElement(
            ReactNative.Text,
            {
              numberOfLines: 1,
              style: [
                y.label,
                {
                  color: n,
                },
                D ? y.labelBeside : y.labelBeneath,
                M,
              ],
              allowFontScaling: A,
            },
            h
          );
        return h({
          focused: l,
          color: n,
          position: D ? 'beside-icon' : 'below-icon',
        });
      })(J)
    ),
  });
};

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  module564 = require('./564'),
  module1074 = require('./1074'),
  f = ['children', 'style', 'onPress', 'to', 'accessibilityRole', 'accessibilityState'];

var y = ReactNative.StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabPortrait: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  tabLandscape: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  labelBeneath: {
    fontSize: 10,
  },
  labelBeside: {
    fontSize: 13,
    marginLeft: 20,
    marginTop: 3,
  },
  button: {
    display: 'flex',
  },
});
