var module11 = require('./11'),
  module12 = require('./12'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = v(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, s, c);
        else o[s] = t[s];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1495 = require('./1495'),
  p = ['color', 'indeterminate', 'style', 'progress', 'visible', 'theme'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

var y = ReactNative.I18nManager.isRTL,
  b = ReactNative.StyleSheet.create({
    container: {
      height: 4,
      overflow: 'hidden',
    },
    progressBar: {
      flex: 1,
    },
  }),
  w = module1495.withTheme(function (t) {
    var f = t.color,
      v = t.indeterminate,
      w = t.style,
      h = t.progress,
      R = undefined === h ? 0 : h,
      V = t.visible,
      O = undefined === V || V,
      A = t.theme,
      j = module52.default(t, p),
      k = React.useRef(new ReactNative.Animated.Value(0)).current,
      P = React.useRef(new ReactNative.Animated.Value(0)).current,
      D = React.useState(0),
      E = module12.default(D, 2),
      M = E[0],
      S = E[1],
      _ = React.useState(0),
      I = module12.default(_, 2),
      C = I[0],
      N = I[1],
      W = React.useRef(null),
      x = A.animation.scale,
      B = React.useCallback(
        function () {
          ReactNative.Animated.timing(P, {
            duration: 200 * x,
            toValue: 1,
            useNativeDriver: true,
            isInteraction: false,
          }).start();

          if (v) {
            if (!W.current)
              W.current = ReactNative.Animated.timing(k, {
                duration: 2e3,
                toValue: 1,
                useNativeDriver: 'web' !== ReactNative.Platform.OS,
                isInteraction: false,
              });
            k.setValue(0);
            ReactNative.Animated.loop(W.current).start();
          } else
            ReactNative.Animated.timing(k, {
              duration: 200 * x,
              toValue: R || 0,
              useNativeDriver: true,
              isInteraction: false,
            }).start();
        },
        [x, k, R, v, P]
      ),
      L = React.useCallback(
        function () {
          if (W.current) W.current.stop();
          ReactNative.Animated.timing(P, {
            duration: 200 * x,
            toValue: 0,
            useNativeDriver: true,
            isInteraction: false,
          }).start();
        },
        [P, x]
      );

    React.useEffect(
      function () {
        if (O) B();
        else L();
      },
      [O, B, L]
    );
    React.useEffect(
      function () {
        if (O && 0 === C) B();
      },
      [C, B, O]
    );
    var T = f || A.colors.primary,
      X = module564.default(T).alpha(0.38).rgb().string();
    return (
      <ReactNative.View>
        {React.createElement(
          ReactNative.Animated.View,
          {
            style: [
              b.container,
              {
                backgroundColor: X,
                opacity: P,
              },
              w,
            ],
          },
          React.createElement(ReactNative.Animated.View, {
            style: [
              b.progressBar,
              {
                backgroundColor: T,
                width: M,
                transform: [
                  {
                    translateX: k.interpolate(
                      v
                        ? {
                            inputRange: [0, 0.5, 1],
                            outputRange: [0.5 * (y ? 1 : -1) * M, 0.5 * (y ? 1 : -1) * 0.6 * M, 0.7 * (y ? -1 : 1) * M],
                          }
                        : {
                            inputRange: [0, 1],
                            outputRange: [0.5 * (y ? 1 : -1) * M, 0],
                          }
                    ),
                  },
                  {
                    scaleX: k.interpolate(
                      v
                        ? {
                            inputRange: [0, 0.5, 1],
                            outputRange: [1e-4, 0.6, 1e-4],
                          }
                        : {
                            inputRange: [0, 1],
                            outputRange: [1e-4, 1],
                          }
                    ),
                  },
                ],
              },
            ],
          })
        )}
      </ReactNative.View>
    );
  });
exports.default = w;
