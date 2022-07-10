exports.default = function (t) {
  var v = t.mode,
    p = t.scenes,
    y = t.layout,
    h = t.insets,
    b = t.getPreviousScene,
    w = t.getFocusedRoute,
    E = t.onContentHeightChange,
    O = t.gestureDirection,
    P = t.styleInterpolator,
    S = t.style,
    j = w(),
    k = React.useContext(module578.default);
  return React.createElement(
    ReactNative.Animated.View,
    {
      pointerEvents: 'box-none',
      style: S,
    },
    p.slice(-3).map(function (t, c, p) {
      var w;
      if (('screen' === v && c !== p.length - 1) || !t) return null;
      var S = t.descriptor.options || {},
        _ = S.header,
        x = S.headerShown,
        C = undefined === x || x,
        M = S.headerTransparent;
      if (!C) return null;
      var A = j.key === t.route.key,
        D =
          null !=
          (w = b({
            route: t.route,
          }))
            ? w
            : k,
        N = p[c - 1],
        R = p[c + 1],
        W = (null == N ? undefined : N.descriptor.options) || {},
        F = W.headerShown,
        H = undefined === F || F,
        I = (null == R ? undefined : R.descriptor.options) || {},
        L = I.headerShown,
        V = undefined === L || L,
        z = (false === H && !R) || false === V,
        T = {
          mode: v,
          layout: y,
          insets: h,
          scene: t,
          previous: D,
          navigation: t.descriptor.navigation,
          styleInterpolator:
            'float' === v
              ? z
                ? 'vertical' === O || 'vertical-inverted' === O
                  ? module417.forSlideUp
                  : 'horizontal-inverted' === O
                  ? module417.forSlideRight
                  : module417.forSlideLeft
                : P
              : module417.forNoAnimation,
        };
      return React.createElement(
        module421.NavigationContext.Provider,
        {
          key: t.route.key,
          value: t.descriptor.navigation,
        },
        React.createElement(
          module421.NavigationRouteContext.Provider,
          {
            value: t.route,
          },
          React.createElement(
            ReactNative.View,
            {
              onLayout: E
                ? function (n) {
                    var o = n.nativeEvent.layout.height;
                    E({
                      route: t.route,
                      height: o,
                    });
                  }
                : undefined,
              pointerEvents: A ? 'box-none' : 'none',
              accessibilityElementsHidden: !A,
              importantForAccessibility: A ? 'auto' : 'no-hide-descendants',
              style: ('float' === v && !A) || M ? f.header : null,
            },
            undefined !== _ ? _(T) : React.createElement(module581.default, T)
          )
        )
      );
    })
  );
};

var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = v(n);
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
  module421 = require('./421'),
  module581 = require('./581'),
  module417 = require('./417'),
  module578 = require('./578');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

var f = ReactNative.StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
