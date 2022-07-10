var module20 = require('./20'),
  module12 = require('./12'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module415 = require('./415'),
  module564 = require('./564'),
  module1522 = require('./1522'),
  module1525 = require('./1525'),
  module1545 = require('./1545'),
  module1542 = require('./1542'),
  module1532 = require('./1532'),
  module1529 = require('./1529'),
  module1494 = require('./1494'),
  module1495 = require('./1495'),
  module1548 = require('./1548'),
  module1550 = require('./1550'),
  module1551 = require('./1551'),
  A = ['route', 'style', 'children', 'borderless', 'centered', 'rippleColor'],
  R = ['component'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

var P = module415.getBottomSpace(),
  D = 'web' === ReactNative.Platform.OS ? 0 : 9999,
  L = function (t) {
    t.route;
    var n = t.style,
      o = t.children,
      f = t.borderless,
      p = t.centered,
      b = t.rippleColor,
      y = module52.default(t, A);
    return module1532.default.supported ? (
      <module1532.default>{o}</module1532.default>
    ) : (
      <ReactNative.TouchableWithoutFeedback>
        <ReactNative.View style={n}>{o}</ReactNative.View>
      </ReactNative.TouchableWithoutFeedback>
    );
  },
  W = React.memo(function (t) {
    var n = t.component,
      o = module52.default(t, R);
    return <n />;
  }),
  j = function (t) {
    var l,
      u,
      f,
      w = t.navigationState,
      S = t.renderScene,
      A = t.renderIcon,
      R = t.renderLabel,
      O = t.renderTouchable,
      W =
        undefined === O
          ? function (t) {
              return <L />;
            }
          : O,
      j = t.getLabelText,
      T =
        undefined === j
          ? function (t) {
              return t.route.title;
            }
          : j,
      H = t.getBadge,
      K =
        undefined === H
          ? function (t) {
              return t.route.badge;
            }
          : H,
      M = t.getColor,
      z =
        undefined === M
          ? function (t) {
              return t.route.color;
            }
          : M,
      _ = t.getAccessibilityLabel,
      B =
        undefined === _
          ? function (t) {
              return t.route.accessibilityLabel;
            }
          : _,
      F = t.getTestID,
      N =
        undefined === F
          ? function (t) {
              return t.route.testID;
            }
          : F,
      Y = t.activeColor,
      q = t.inactiveColor,
      G = t.keyboardHidesNavigationBar,
      J = undefined === G || G,
      Q = t.barStyle,
      U = t.labeled,
      X = undefined === U || U,
      Z = t.style,
      $ = t.theme,
      ee = t.sceneAnimationEnabled,
      te = undefined !== ee && ee,
      ne = t.onTabPress,
      re = t.onIndexChange,
      oe = t.shifting,
      ae = undefined === oe ? w.routes.length > 3 : oe,
      ie = t.safeAreaInsets,
      le = $.animation.scale,
      ue = w.routes[w.index].key,
      de = module1548.default(1),
      ce = module1550.default(
        w.routes.map(function (t, n) {
          return n === w.index ? 1 : 0;
        })
      ),
      se = module1550.default(
        w.routes.map(function (t, n) {
          return n === w.index ? 0 : 1;
        })
      ),
      fe = module1548.default(w.index),
      pe = module1548.default(0.001),
      be = module1551.default(),
      me = module12.default(be, 2),
      ye = me[0],
      ge = me[1],
      ve = React.useState([ue]),
      he = module12.default(ve, 2),
      we = he[0],
      Ee = he[1];
    if (!we.includes(ue))
      Ee(function (t) {
        return [].concat(module20.default(t), [ue]);
      });
    var ke = React.useState(false),
      Se = module12.default(ke, 2),
      Ve = Se[0],
      Ce = Se[1],
      xe = React.useCallback(
        function () {
          Ce(true);
          ReactNative.Animated.timing(de, {
            toValue: 0,
            duration: 150 * le,
            useNativeDriver: true,
          }).start();
        },
        [le, de]
      ),
      Ae = React.useCallback(
        function () {
          ReactNative.Animated.timing(de, {
            toValue: 1,
            duration: 100 * le,
            useNativeDriver: true,
          }).start(function () {
            Ce(false);
          });
        },
        [le, de]
      ),
      Re = React.useCallback(
        function (t) {
          pe.setValue(0.001);
          ReactNative.Animated.parallel(
            [
              ReactNative.Animated.timing(pe, {
                toValue: 1,
                duration: ae ? 400 * le : 0,
                useNativeDriver: true,
              }),
            ].concat(
              module20.default(
                w.routes.map(function (n, o) {
                  return ReactNative.Animated.timing(ce[o], {
                    toValue: o === t ? 1 : 0,
                    duration: ae ? 150 * le : 0,
                    useNativeDriver: true,
                  });
                })
              )
            )
          ).start(function (n) {
            var o = n.finished;
            ce.map(function (n, o) {
              return n.setValue(o === t ? 1 : 0);
            });
            fe.setValue(t);
            pe.setValue(0.001);
            if (o)
              se.forEach(function (n, o) {
                if (o === t) n.setValue(0);
                else n.setValue(1);
              });
          });
        },
        [fe, ae, w.routes, se, pe, le, ce]
      );
    React.useEffect(function () {
      Re(w.index);
    }, []);
    React.useEffect(
      function () {
        if ('ios' === ReactNative.Platform.OS) {
          ReactNative.Keyboard.addListener('keyboardWillShow', xe);
          ReactNative.Keyboard.addListener('keyboardWillHide', Ae);
        } else {
          ReactNative.Keyboard.addListener('keyboardDidShow', xe);
          ReactNative.Keyboard.addListener('keyboardDidHide', Ae);
        }

        return function () {
          if ('ios' === ReactNative.Platform.OS) {
            ReactNative.Keyboard.removeListener('keyboardWillShow', xe);
            ReactNative.Keyboard.removeListener('keyboardWillHide', Ae);
          } else {
            ReactNative.Keyboard.removeListener('keyboardDidShow', xe);
            ReactNative.Keyboard.removeListener('keyboardDidHide', Ae);
          }
        };
      },
      [Ae, xe]
    );
    var Oe = React.useRef();
    React.useEffect(
      function () {
        se.forEach(function (t, n) {
          var o;
          if (!(n !== w.index && n !== (null == (o = Oe.current) ? undefined : o.index))) t.setValue(0);
        });
        Re(w.index);
      },
      [w.index, Re, se]
    );

    var Pe = function (t) {
        var n = {
          route: w.routes[t],
          defaultPrevented: false,
          preventDefault: function () {
            n.defaultPrevented = true;
          },
        };
        if (!(null == ne)) ne(n);
        if (!n.defaultPrevented) t !== w.index && re(t);
      },
      De = React.useCallback(
        function (t) {
          var n = w.routes.findIndex(function (n) {
            return n.key === t;
          });
          re(n);
        },
        [w.routes, re]
      ),
      Le = w.routes,
      We = $.colors,
      je = $.dark,
      Te = $.mode,
      Ie = ReactNative.StyleSheet.flatten(Q) || {},
      He = Ie.backgroundColor,
      Ke = Ie.elevation,
      Me = undefined === Ke ? 4 : Ke,
      ze = He || (je && 'adaptive' === Te ? module1522.default(Me, We.surface) : We.primary),
      _e = ae
        ? fe.interpolate({
            inputRange: Le.map(function (t, n) {
              return n;
            }),
            outputRange: Le.map(function (t) {
              return (
                z({
                  route: t,
                }) || ze
              );
            }),
          })
        : ze,
      Be = 'string' != typeof ze || !module564.default(ze).isLight() ? module1494.white : module1494.black,
      Fe = undefined !== Y ? Y : Be,
      Ne = undefined !== q ? q : module564.default(Be).alpha(0.5).rgb().string(),
      Ye = module564
        .default(Y || Fe)
        .alpha(0.12)
        .rgb()
        .string(),
      qe = (Le.length > 3 ? 96 : 168) * Le.length,
      Ge = ye.width ** qe / Le.length,
      Je = ye.width / 4,
      Qe = {
        left: null != (l = null == ie ? undefined : ie.left) ? l : 0,
        right: null != (u = null == ie ? undefined : ie.right) ? u : 0,
        bottom: null != (f = null == ie ? undefined : ie.bottom) ? f : P,
      };

    return (
      <ReactNative.View style={[I.container, Z]}>
        <ReactNative.View
          style={[
            I.content,
            {
              backgroundColor: We.background,
            },
          ]}
        >
          {Le.map(function (t, n) {
            if (!we.includes(t.key)) return null;
            var o = w.index === n,
              l = te ? ce[n] : o ? 1 : 0,
              u = te
                ? se[n].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, D],
                  })
                : o
                ? 0
                : D;
            return React.createElement(
              ReactNative.Animated.View,
              {
                key: t.key,
                pointerEvents: o ? 'auto' : 'none',
                accessibilityElementsHidden: !o,
                importantForAccessibility: o ? 'auto' : 'no-hide-descendants',
                style: [
                  ReactNative.StyleSheet.absoluteFill,
                  {
                    opacity: l,
                  },
                ],
                collapsable: false,
                removeClippedSubviews: 'ios' !== ReactNative.Platform.OS || w.index !== n,
              },
              React.createElement(
                ReactNative.Animated.View,
                {
                  style: [
                    I.content,
                    {
                      top: u,
                    },
                  ],
                },
                S({
                  route: t,
                  jumpTo: De,
                })
              )
            );
          })}
        </ReactNative.View>
        <module1545.default
          style={[
            I.bar,
            J
              ? {
                  transform: [
                    {
                      translateY: de.interpolate({
                        inputRange: [0, 1],
                        outputRange: [ye.height, 0],
                      }),
                    },
                  ],
                  position: Ve ? 'absolute' : null,
                }
              : null,
            Q,
          ]}
          pointerEvents={ye.measured ? (J && Ve ? 'none' : 'auto') : 'none'}
          onLayout={ge}
        >
          {React.createElement(
            ReactNative.Animated.View,
            {
              style: [
                I.barContent,
                {
                  backgroundColor: _e,
                },
              ],
            },
            React.createElement(
              ReactNative.View,
              {
                style: [
                  I.items,
                  {
                    marginBottom: Qe.bottom,
                    marginHorizontal: Qe.left ** Qe.right,
                    maxWidth: qe,
                  },
                ],
                accessibilityRole: 'tablist',
              },
              ae
                ? React.createElement(ReactNative.Animated.View, {
                    pointerEvents: 'none',
                    style: [
                      I.ripple,
                      {
                        top: (56 - Je) / 2,
                        left: Ge * (w.index + 0.5) - Je / 2,
                        height: Je,
                        width: Je,
                        borderRadius: Je / 2,
                        backgroundColor: z({
                          route: Le[w.index],
                        }),
                        transform: [
                          {
                            scale: pe.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, 8],
                            }),
                          },
                        ],
                        opacity: pe.interpolate({
                          inputRange: [0, 0.001, 0.3, 1],
                          outputRange: [0, 0, 1, 1],
                        }),
                      },
                    ],
                  })
                : null,
              Le.map(function (t, n) {
                var o = w.index === n,
                  l = ce[n],
                  u =
                    X && ae
                      ? l.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.5, 1],
                        })
                      : 1,
                  f = X
                    ? ae
                      ? l.interpolate({
                          inputRange: [0, 1],
                          outputRange: [7, 0],
                        })
                      : 0
                    : 7,
                  p = l,
                  b = l.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                  v = K({
                    route: t,
                  });
                return W({
                  key: t.key,
                  route: t,
                  borderless: true,
                  centered: true,
                  rippleColor: Ye,
                  onPress: function () {
                    return Pe(n);
                  },
                  testID: N({
                    route: t,
                  }),
                  accessibilityLabel: B({
                    route: t,
                  }),
                  accessibilityTraits: o ? ['button', 'selected'] : 'button',
                  accessibilityComponentType: 'button',
                  accessibilityRole: 'ios' === ReactNative.Platform.OS ? 'button' : 'tab',
                  accessibilityState: {
                    selected: o,
                  },
                  style: I.item,
                  children: React.createElement(
                    ReactNative.View,
                    {
                      pointerEvents: 'none',
                    },
                    React.createElement(
                      ReactNative.Animated.View,
                      {
                        style: [
                          I.iconContainer,
                          {
                            transform: [
                              {
                                translateY: f,
                              },
                            ],
                          },
                        ],
                      },
                      React.createElement(
                        ReactNative.Animated.View,
                        {
                          style: [
                            I.iconWrapper,
                            {
                              opacity: p,
                            },
                          ],
                        },
                        A
                          ? A({
                              route: t,
                              focused: true,
                              color: Fe,
                            })
                          : React.createElement(module1525.default, {
                              source: t.icon,
                              color: Fe,
                              size: 24,
                            })
                      ),
                      React.createElement(
                        ReactNative.Animated.View,
                        {
                          style: [
                            I.iconWrapper,
                            {
                              opacity: b,
                            },
                          ],
                        },
                        A
                          ? A({
                              route: t,
                              focused: false,
                              color: Ne,
                            })
                          : React.createElement(module1525.default, {
                              source: t.icon,
                              color: Ne,
                              size: 24,
                            })
                      ),
                      React.createElement(
                        ReactNative.View,
                        {
                          style: [
                            I.badgeContainer,
                            {
                              right: (null != v && 'boolean' != typeof v ? -2 * String(v).length : 0) - 2,
                            },
                          ],
                        },
                        'boolean' == typeof v
                          ? React.createElement(module1542.default, {
                              visible: v,
                              size: 8,
                            })
                          : React.createElement(
                              module1542.default,
                              {
                                visible: null != v,
                                size: 16,
                              },
                              v
                            )
                      )
                    ),
                    X
                      ? React.createElement(
                          ReactNative.Animated.View,
                          {
                            style: [
                              I.labelContainer,
                              {
                                transform: [
                                  {
                                    scale: u,
                                  },
                                ],
                              },
                            ],
                          },
                          React.createElement(
                            ReactNative.Animated.View,
                            {
                              style: [
                                I.labelWrapper,
                                {
                                  opacity: p,
                                },
                              ],
                            },
                            R
                              ? R({
                                  route: t,
                                  focused: true,
                                  color: Fe,
                                })
                              : React.createElement(
                                  module1529.default,
                                  {
                                    style: [
                                      I.label,
                                      {
                                        color: Fe,
                                      },
                                    ],
                                  },
                                  T({
                                    route: t,
                                  })
                                )
                          ),
                          ae
                            ? null
                            : React.createElement(
                                ReactNative.Animated.View,
                                {
                                  style: [
                                    I.labelWrapper,
                                    {
                                      opacity: b,
                                    },
                                  ],
                                },
                                R
                                  ? R({
                                      route: t,
                                      focused: false,
                                      color: Ne,
                                    })
                                  : React.createElement(
                                      module1529.default,
                                      {
                                        selectable: false,
                                        style: [
                                          I.label,
                                          {
                                            color: Ne,
                                          },
                                        ],
                                      },
                                      T({
                                        route: t,
                                      })
                                    )
                              )
                        )
                      : React.createElement(ReactNative.View, {
                          style: I.labelContainer,
                        })
                  ),
                });
              })
            )
          )}
        </module1545.default>
      </ReactNative.View>
    );
  };

j.SceneMap = function (t) {
  return function (n) {
    var o = n.route,
      l = n.jumpTo;
    return React.createElement(W, {
      key: o.key,
      component: t[o.key ? o.key : ''],
      route: o,
      jumpTo: l,
    });
  };
};

var T = module1495.withTheme(j);
exports.default = T;
var I = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
  bar: {
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 4,
  },
  barContent: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  items: module11.default(
    {
      flexDirection: 'row',
    },
    'web' === ReactNative.Platform.OS
      ? {
          width: '100%',
        }
      : null
  ),
  item: {
    flex: 1,
    paddingVertical: 6,
  },
  ripple: {
    position: 'absolute',
  },
  iconContainer: {
    height: 24,
    width: 24,
    marginTop: 2,
    marginHorizontal: 12,
    alignSelf: 'center',
  },
  iconWrapper: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
    alignItems: 'center',
  }),
  labelContainer: {
    height: 16,
    paddingBottom: 2,
  },
  labelWrapper: module11.default({}, ReactNative.StyleSheet.absoluteFillObject),
  label: module11.default(
    {
      fontSize: 12,
      textAlign: 'center',
      backgroundColor: 'transparent',
    },
    'web' === ReactNative.Platform.OS
      ? {
          whiteSpace: 'nowrap',
          alignSelf: 'center',
        }
      : null
  ),
  badgeContainer: {
    position: 'absolute',
    left: 0,
    top: -2,
  },
});
