var module11 = require('./11'),
  module20 = require('./20'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = v(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, c, u);
        else o[c] = t[c];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1586 = require('./1586'),
  module1529 = require('./1529'),
  module1552 = require('./1552'),
  module1495 = require('./1495');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (v = function (t) {
    return t ? l : n;
  })(t);
}

var w = function (t) {
  var n = t.actions,
    y = t.icon,
    v = t.open,
    w = t.onPress,
    A = t.accessibilityLabel,
    E = t.theme,
    V = t.style,
    P = t.fabStyle,
    j = t.visible,
    k = t.testID,
    x = t.onStateChange,
    D = t.color,
    O = React.useRef(new ReactNative.Animated.Value(0)).current,
    S = React.useRef(
      n.map(function () {
        return new ReactNative.Animated.Value(v ? 1 : 0);
      })
    ),
    R = React.useState(null),
    T = module12.default(R, 2),
    C = T[0],
    L = T[1],
    F = E.animation.scale;
  React.useEffect(
    function () {
      if (v)
        ReactNative.Animated.parallel([
          ReactNative.Animated.timing(O, {
            toValue: 1,
            duration: 250 * F,
            useNativeDriver: true,
          }),
          ReactNative.Animated.stagger(
            50 * F,
            S.current
              .map(function (t) {
                return ReactNative.Animated.timing(t, {
                  toValue: 1,
                  duration: 150 * F,
                  useNativeDriver: true,
                });
              })
              .reverse()
          ),
        ]).start();
      else
        ReactNative.Animated.parallel(
          [
            ReactNative.Animated.timing(O, {
              toValue: 0,
              duration: 200 * F,
              useNativeDriver: true,
            }),
          ].concat(
            module20.default(
              S.current.map(function (t) {
                return ReactNative.Animated.timing(t, {
                  toValue: 0,
                  duration: 150 * F,
                  useNativeDriver: true,
                });
              })
            )
          )
        ).start();
    },
    [v, n, O, F]
  );

  var I = function () {
      return x({
        open: false,
      });
    },
    _ = E.colors,
    B = E.dark ? _.text : module564.default(_.text).fade(0.54).rgb().string(),
    M = v
      ? O.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 1, 1],
        })
      : O,
    N = S.current,
    z = N.map(function (t) {
      return v
        ? t.interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          })
        : 1;
    });

  if (n.length !== (null == C ? undefined : C.length)) {
    S.current = n.map(function (t, n) {
      return S.current[n] || new ReactNative.Animated.Value(v ? 1 : 0);
    });
    L(n);
  }

  return (
    <ReactNative.View pointerEvents="box-none" style={[h.container, V]}>
      <ReactNative.TouchableWithoutFeedback onPress={I}>
        {React.createElement(ReactNative.Animated.View, {
          pointerEvents: v ? 'auto' : 'none',
          style: [
            h.backdrop,
            {
              opacity: M,
              backgroundColor: _.backdrop,
            },
          ],
        })}
      </ReactNative.TouchableWithoutFeedback>
      <ReactNative.SafeAreaView pointerEvents="box-none" style={h.safeArea}>
        <ReactNative.View pointerEvents={v ? 'box-none' : 'none'}>
          {n.map(function (t, n) {
            return React.createElement(
              ReactNative.View,
              {
                key: n,
                style: [
                  h.item,
                  {
                    marginHorizontal: undefined === t.small || t.small ? 24 : 16,
                  },
                ],
                pointerEvents: v ? 'box-none' : 'none',
              },
              t.label &&
                React.createElement(
                  ReactNative.View,
                  null,
                  React.createElement(
                    module1552.default,
                    {
                      style: [
                        h.label,
                        {
                          transform: [
                            {
                              scale: z[n],
                            },
                          ],
                          opacity: N[n],
                        },
                      ],
                      onPress: function () {
                        t.onPress();
                        I();
                      },
                      accessibilityLabel: 'undefined' !== t.accessibilityLabel ? t.accessibilityLabel : t.label,
                      accessibilityTraits: 'button',
                      accessibilityComponentType: 'button',
                      accessibilityRole: 'button',
                    },
                    React.createElement(
                      module1529.default,
                      {
                        style: {
                          color: B,
                        },
                      },
                      t.label
                    )
                  )
                ),
              React.createElement(module1586.default, {
                small: undefined === t.small || t.small,
                icon: t.icon,
                color: t.color,
                style: [
                  {
                    transform: [
                      {
                        scale: z[n],
                      },
                    ],
                    opacity: N[n],
                    backgroundColor: E.colors.surface,
                  },
                  t.style,
                ],
                onPress: function () {
                  t.onPress();
                  I();
                },
                accessibilityLabel: undefined !== t.accessibilityLabel ? t.accessibilityLabel : t.label,
                accessibilityTraits: 'button',
                accessibilityComponentType: 'button',
                accessibilityRole: 'button',
                testID: t.testID,
                visible: v,
              })
            );
          })}
        </ReactNative.View>
        <module1586.default
          onPress={function () {
            if (!(null == w)) w();
            x({
              open: !v,
            });
          }}
          icon={y}
          color={D}
          accessibilityLabel={A}
          accessibilityTraits="button"
          accessibilityComponentType="button"
          accessibilityRole="button"
          accessibilityState={{
            expanded: v,
          }}
          style={[h.fab, P]}
          visible={j}
          testID={k}
        />
      </ReactNative.SafeAreaView>
    </ReactNative.View>
  );
};

w.displayName = 'FAB.Group';
var A = module1495.withTheme(w);
exports.default = A;
var E = module1495.withTheme(w);
exports.FABGroup = E;
var h = ReactNative.StyleSheet.create({
  safeArea: {
    alignItems: 'flex-end',
  },
  container: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
    justifyContent: 'flex-end',
  }),
  fab: {
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 0,
  },
  backdrop: module11.default({}, ReactNative.StyleSheet.absoluteFillObject),
  label: {
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  item: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
