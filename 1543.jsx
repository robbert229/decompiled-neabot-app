var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
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
  module1495 = require('./1495'),
  c = ['animating', 'color', 'hidesWhenStopped', 'size', 'style', 'theme'];

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

var p = ReactNative.StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    layer: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
      justifyContent: 'center',
      alignItems: 'center',
    }),
  }),
  y = module1495.withTheme(function (t) {
    var s = t.animating,
      f = undefined === s || s,
      y = t.color,
      h = t.hidesWhenStopped,
      v = undefined === h || h,
      w = t.size,
      b = undefined === w ? 'small' : w,
      A = t.style,
      V = t.theme,
      E = module52.default(t, c),
      O = React.useRef(new ReactNative.Animated.Value(0)).current,
      j = React.useRef(new ReactNative.Animated.Value(!f && v ? 0 : 1)).current,
      R = React.useRef(undefined),
      S = V.animation.scale,
      P = React.useCallback(
        function () {
          ReactNative.Animated.timing(j, {
            duration: 200 * S,
            toValue: 1,
            isInteraction: false,
            useNativeDriver: true,
          }).start();

          if (R.current) {
            O.setValue(0);
            ReactNative.Animated.loop(R.current).start();
          }
        },
        [S, j, O]
      ),
      W = function () {
        if (R.current) R.current.stop();
      };

    React.useEffect(
      function () {
        if (undefined === R.current)
          R.current = ReactNative.Animated.timing(O, {
            duration: 2400,
            easing: ReactNative.Easing.linear,
            useNativeDriver: 'web' !== ReactNative.Platform.OS,
            toValue: 1,
            isInteraction: false,
          });
        if (f) P();
        else if (v)
          ReactNative.Animated.timing(j, {
            duration: 200 * S,
            toValue: 0,
            useNativeDriver: true,
            isInteraction: false,
          }).start(W);
        else W();
      },
      [f, j, v, P, S, O]
    );

    var _ = y || V.colors.primary,
      k = 'string' == typeof b ? ('small' === b ? 24 : 48) : b || 24,
      D = ReactNative.Easing.bezier(0.4, 0, 0.7, 1),
      I = {
        width: k,
        height: k / 2,
        overflow: 'hidden',
      };

    return (
      <ReactNative.View>
        {React.createElement(
          ReactNative.Animated.View,
          {
            style: [
              {
                width: k,
                height: k,
                opacity: j,
              },
            ],
            collapsable: false,
          },
          [0, 1].map(function (t) {
            var n = Array.from(new Array(144), function (t, n) {
                return n / 143;
              }),
              o = Array.from(new Array(144), function (n, o) {
                var l = (2 * o) / 143,
                  u = t ? 345 : -165;
                if (l > 1) l = 2 - l;
                return 150 * (t ? -1 : 1) * D(l) + u + 'deg';
              }),
              s = {
                width: k,
                height: k,
                transform: [
                  {
                    rotate: O.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['45deg', '765deg'],
                    }),
                  },
                ],
              },
              c = {
                width: k,
                height: k,
                transform: [
                  {
                    translateY: t ? -k / 2 : 0,
                  },
                  {
                    rotate: O.interpolate({
                      inputRange: n,
                      outputRange: o,
                    }),
                  },
                ],
              },
              f = t
                ? {
                    top: k / 2,
                  }
                : null,
              y = {
                width: k,
                height: k,
                borderColor: _,
                borderWidth: k / 10,
                borderRadius: k / 2,
              };
            return React.createElement(
              ReactNative.Animated.View,
              {
                key: t,
                style: [p.layer],
              },
              React.createElement(
                ReactNative.Animated.View,
                {
                  style: s,
                },
                React.createElement(
                  ReactNative.Animated.View,
                  {
                    style: [I, f],
                    collapsable: false,
                  },
                  React.createElement(
                    ReactNative.Animated.View,
                    {
                      style: c,
                    },
                    React.createElement(
                      ReactNative.Animated.View,
                      {
                        style: I,
                        collapsable: false,
                      },
                      React.createElement(ReactNative.Animated.View, {
                        style: y,
                      })
                    )
                  )
                )
              )
            );
          })
        )}
      </ReactNative.View>
    );
  });
exports.default = y;
