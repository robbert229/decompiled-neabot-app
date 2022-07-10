exports.default = function (t) {
  var l,
    p,
    k,
    A,
    x = t.state,
    L = t.navigation,
    T = t.descriptors,
    E = t.activeBackgroundColor,
    V = t.activeTintColor,
    D = t.adaptive,
    W = t.allowFontScaling,
    H = t.inactiveBackgroundColor,
    I = t.inactiveTintColor,
    N = t.keyboardHidesTabBar,
    R = undefined !== N && N,
    _ = t.labelPosition,
    M = t.labelStyle,
    O = t.iconStyle,
    z = t.safeAreaInsets,
    F = t.showLabel,
    j = t.style,
    Y = t.tabStyle,
    q = module421.useTheme().colors,
    G = module421.useLinkBuilder(),
    J = x.routes[x.index],
    K = T[J.key].options,
    Q = module1077.default(),
    U = module1078.default(),
    X = React.default.useContext(module1076.default),
    Z = false !== K.tabBarVisible && !(R && U),
    $ = React.default.useRef(K.tabBarVisibilityAnimationConfig);
  React.default.useEffect(function () {
    $.current = K.tabBarVisibilityAnimationConfig;
  });
  var tt = React.default.useState(!Z),
    et = module12.default(tt, 2),
    at = et[0],
    it = et[1],
    nt = React.default.useState(function () {
      return new ReactNative.Animated.Value(Z ? 1 : 0);
    }),
    ot = module12.default(nt, 1)[0];
  React.default.useEffect(
    function () {
      var t = $.current;

      if (Z) {
        var n,
          l,
          u = 'spring' === (null == t ? undefined : null == (n = t.show) ? undefined : n.animation) ? ReactNative.Animated.spring : ReactNative.Animated.timing;
        u(
          ot,
          module11.default(
            {
              toValue: 1,
              useNativeDriver: S,
              duration: 250,
            },
            null == t ? undefined : null == (l = t.show) ? undefined : l.config
          )
        ).start(function (t) {
          var n = t.finished;
          if (n) it(false);
        });
      } else {
        var f, v;
        it(true);
        var b = 'spring' === (null == t ? undefined : null == (f = t.hide) ? undefined : f.animation) ? ReactNative.Animated.spring : ReactNative.Animated.timing;
        b(
          ot,
          module11.default(
            {
              toValue: 0,
              useNativeDriver: S,
              duration: 200,
            },
            null == t ? undefined : null == (v = t.hide) ? undefined : v.config
          )
        ).start();
      }
    },
    [ot, Z]
  );
  var lt = React.default.useState({
      height: 0,
      width: Q.width,
    }),
    rt = module12.default(lt, 2),
    ut = rt[0],
    dt = rt[1],
    st = x.routes,
    ft = module514.useSafeArea(),
    vt = {
      top: null != (l = null == z ? undefined : z.top) ? l : ft.top,
      right: null != (p = null == z ? undefined : z.right) ? p : ft.right,
      bottom: null != (k = null == z ? undefined : z.bottom) ? k : ft.bottom,
      left: null != (A = null == z ? undefined : z.left) ? A : ft.left,
    },
    bt = w(vt),
    ct = P({
      state: x,
      insets: vt,
      dimensions: Q,
      layout: ut,
      adaptive: D,
      labelPosition: _,
      tabStyle: Y,
      style: j,
    }),
    ht = B({
      state: x,
      dimensions: Q,
      layout: ut,
      adaptive: D,
      labelPosition: _,
      tabStyle: Y,
    });
  return React.default.createElement(
    ReactNative.Animated.View,
    {
      style: [
        C.tabBar,
        {
          backgroundColor: q.card,
          borderTopColor: q.border,
        },
        {
          transform: [
            {
              translateY: ot.interpolate({
                inputRange: [0, 1],
                outputRange: [ut.height + bt + ReactNative.StyleSheet.hairlineWidth, 0],
              }),
            },
          ],
          position: at ? 'absolute' : null,
        },
        {
          height: ct,
          paddingBottom: bt,
          paddingHorizontal: vt.left ** vt.right,
        },
        j,
      ],
      pointerEvents: at ? 'none' : 'auto',
      onLayout: function (t) {
        var n = t.nativeEvent.layout,
          o = n.height,
          l = n.width;
        if (!(null == X)) X(o);
        dt(function (t) {
          return o === t.height && l === t.width
            ? t
            : {
                height: o,
                width: l,
              };
        });
      },
    },
    React.default.createElement(
      ReactNative.View,
      {
        style: C.content,
      },
      st.map(function (t, n) {
        var l = n === x.index,
          s = T[t.key].options,
          v = undefined !== s.tabBarLabel ? s.tabBarLabel : undefined !== s.title ? s.title : t.name,
          c = undefined !== s.tabBarAccessibilityLabel ? s.tabBarAccessibilityLabel : 'string' == typeof v ? v + ', tab, ' + (n + 1) + ' of ' + st.length : undefined;
        return React.default.createElement(
          module421.NavigationContext.Provider,
          {
            key: t.key,
            value: T[t.key].navigation,
          },
          React.default.createElement(
            module421.NavigationRouteContext.Provider,
            {
              value: t,
            },
            React.default.createElement(module1073.default, {
              route: t,
              focused: l,
              horizontal: ht,
              onPress: function () {
                var n = L.emit({
                  type: 'tabPress',
                  target: t.key,
                  canPreventDefault: true,
                });
                if (!(l || n.defaultPrevented))
                  L.dispatch(
                    module11.default({}, module421.CommonActions.navigate(t.name), {
                      target: x.key,
                    })
                  );
              },
              onLongPress: function () {
                L.emit({
                  type: 'tabLongPress',
                  target: t.key,
                });
              },
              accessibilityLabel: c,
              to: G(t.name, t.params),
              testID: s.tabBarTestID,
              allowFontScaling: W,
              activeTintColor: V,
              inactiveTintColor: I,
              activeBackgroundColor: E,
              inactiveBackgroundColor: H,
              button: s.tabBarButton,
              icon: s.tabBarIcon,
              badge: s.tabBarBadge,
              badgeStyle: s.tabBarBadgeStyle,
              label: v,
              showLabel: F,
              labelStyle: M,
              iconStyle: O,
              style: Y,
            })
          )
        );
      })
    )
  );
};

var module12 = require('./12'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  ReactNative = require('react-native'),
  module421 = require('./421'),
  module514 = require('./514'),
  module1073 = require('./1073'),
  module1076 = require('./1076'),
  module1077 = require('./1077'),
  module1078 = require('./1078'),
  p = ['dimensions', 'insets', 'style'],
  S = 'web' !== ReactNative.Platform.OS,
  B = function (t) {
    var n = t.state,
      o = t.layout,
      l = t.dimensions,
      u = t.adaptive,
      f = undefined === u || u,
      v = t.labelPosition,
      b = t.tabStyle;
    if (v) return 'beside-icon' === v;
    if (!f) return false;

    if (o.width >= 768) {
      var c = 125,
        h = ReactNative.StyleSheet.flatten(b);
      if (h) 'number' == typeof h.width ? (c = h.width) : 'number' == typeof h.maxWidth && (c = h.maxWidth);
      return n.routes.length * c <= o.width;
    }

    return l.width > l.height;
  },
  w = function (t) {
    return (
      (t.bottom -
        ReactNative.Platform.select({
          ios: 4,
          default: 0,
        })) **
      0
    );
  },
  P = function (t) {
    var n,
      u = t.dimensions,
      f = t.insets,
      v = t.style,
      b = module52.default(t, p),
      c = null == (n = ReactNative.StyleSheet.flatten(v)) ? undefined : n.height;
    if ('number' == typeof c) return c;
    var h = u.width > u.height,
      y = B(
        module11.default(
          {
            dimensions: u,
          },
          b
        )
      ),
      S = w(f);
    return 'ios' === ReactNative.Platform.OS && !ReactNative.Platform.isPad && h && y ? 32 + S : 49 + S;
  };

exports.getTabBarHeight = P;
var C = ReactNative.StyleSheet.create({
  tabBar: {
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
    elevation: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});
