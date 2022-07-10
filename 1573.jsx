var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  module12 = require('./12'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = x(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var h = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (h && (h.get || h.set)) Object.defineProperty(s, l, h);
        else s[l] = t[l];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module1495 = require('./1495'),
  module1574 = require('./1574'),
  module1545 = require('./1545'),
  module1576 = require('./1576'),
  module1577 = require('./1577');

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (x = function (t) {
    return t ? o : n;
  })(t);
}

function D() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var P = 250,
  R = ReactNative.Easing.bezier(0.4, 0, 0.2, 1),
  E = (function (t, ...args) {
    module35.default(x, t);

    var module1495 = x,
      module1576 = D(),
      A = function () {
        var t,
          n = module34.default(module1495);

        if (module1576) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function x() {
      var t;
      module24.default(this, x);
      (t = A.call(this, ...args)).state = {
        rendered: t.props.visible,
        top: 0,
        left: 0,
        menuLayout: {
          width: 0,
          height: 0,
        },
        anchorLayout: {
          width: 0,
          height: 0,
        },
        opacityAnimation: new ReactNative.Animated.Value(0),
        scaleAnimation: new ReactNative.Animated.ValueXY({
          x: 0,
          y: 0,
        }),
      };
      t.anchor = null;
      t.menu = null;

      t.isCoordinate = function (t) {
        return !React.isValidElement(t) && 'number' == typeof (null == t ? undefined : t.x) && 'number' == typeof (null == t ? undefined : t.y);
      };

      t.measureMenuLayout = function () {
        return new Promise(function (n) {
          if (t.menu)
            t.menu.measureInWindow(function (t, o, s, u) {
              n({
                x: t,
                y: o,
                width: s,
                height: u,
              });
            });
        });
      };

      t.measureAnchorLayout = function () {
        return new Promise(function (n) {
          var o = t.props.anchor;
          if (t.isCoordinate(o))
            n({
              x: o.x,
              y: o.y,
              width: 0,
              height: 0,
            });
          else if (t.anchor)
            t.anchor.measureInWindow(function (t, o, s, u) {
              n({
                x: t,
                y: o,
                width: s,
                height: u,
              });
            });
        });
      };

      t.updateVisibility = function () {
        return regeneratorRuntime.default.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  o.next = 2;
                  return regeneratorRuntime.default.awrap(Promise.resolve());

                case 2:
                  if (t.props.visible) t.show();
                  else t.hide();

                case 3:
                case 'end':
                  return o.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };

      t.isBrowser = function () {
        return 'web' === ReactNative.Platform.OS && 'document' in globals;
      };

      t.focusFirstDOMNode = function (n) {
        if (n && t.isBrowser()) {
          var o = ReactNative.findNodeHandle(n).querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (!(null == o)) o.focus();
        }
      };

      t.handleDismiss = function () {
        if (t.props.visible) t.props.onDismiss();
        return true;
      };

      t.handleKeypress = function (n) {
        if ('Escape' === n.key) t.props.onDismiss();
      };

      t.attachListeners = function () {
        ReactNative.BackHandler.addEventListener('hardwareBackPress', t.handleDismiss);
        ReactNative.Dimensions.addEventListener('change', t.handleDismiss);
        if (t.isBrowser()) document.addEventListener('keyup', t.handleKeypress);
      };

      t.removeListeners = function () {
        ReactNative.BackHandler.removeEventListener('hardwareBackPress', t.handleDismiss);
        ReactNative.Dimensions.removeEventListener('change', t.handleDismiss);
        if (t.isBrowser()) document.removeEventListener('keyup', t.handleKeypress);
      };

      t.show = function () {
        var o, u, l, h, c;
        return regeneratorRuntime.default.async(
          function (p) {
            for (;;)
              switch ((p.prev = p.next)) {
                case 0:
                  o = ReactNative.Dimensions.get('window');
                  p.next = 3;
                  return regeneratorRuntime.default.awrap(Promise.all([t.measureMenuLayout(), t.measureAnchorLayout()]));

                case 3:
                  if (
                    ((u = p.sent),
                    (l = module12.default(u, 2)),
                    (h = l[0]),
                    (c = l[1]),
                    o.width && o.height && h.width && h.height && (c.width || t.isCoordinate(t.props.anchor)) && (c.height || t.isCoordinate(t.props.anchor)))
                  ) {
                    p.next = 10;
                    break;
                  }

                  requestAnimationFrame(t.show);
                  return p.abrupt('return');

                case 10:
                  t.setState(
                    function () {
                      return {
                        left: c.x,
                        top: c.y,
                        anchorLayout: {
                          height: c.height,
                          width: c.width,
                        },
                        menuLayout: {
                          width: h.width,
                          height: h.height,
                        },
                      };
                    },
                    function () {
                      t.attachListeners();
                      var n = t.props.theme.animation;
                      ReactNative.Animated.parallel([
                        ReactNative.Animated.timing(t.state.scaleAnimation, {
                          toValue: {
                            x: h.width,
                            y: h.height,
                          },
                          duration: P * n.scale,
                          easing: R,
                          useNativeDriver: true,
                        }),
                        ReactNative.Animated.timing(t.state.opacityAnimation, {
                          toValue: 1,
                          duration: P * n.scale,
                          easing: R,
                          useNativeDriver: true,
                        }),
                      ]).start(function (n) {
                        if (n.finished) t.focusFirstDOMNode(t.menu);
                      });
                    }
                  );

                case 11:
                case 'end':
                  return p.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };

      t.hide = function () {
        t.removeListeners();
        var n = t.props.theme.animation;
        ReactNative.Animated.timing(t.state.opacityAnimation, {
          toValue: 0,
          duration: P * n.scale,
          easing: R,
          useNativeDriver: true,
        }).start(function (n) {
          if (n.finished) {
            t.setState({
              menuLayout: {
                width: 0,
                height: 0,
              },
              rendered: false,
            });
            t.state.scaleAnimation.setValue({
              x: 0,
              y: 0,
            });
            t.focusFirstDOMNode(t.anchor);
          }
        });
      };

      return t;
    }

    module25.default(
      x,
      [
        {
          key: 'componentDidUpdate',
          value: function (t) {
            if (t.visible !== this.props.visible) this.updateVisibility();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.removeListeners();
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.props,
              s = n.visible,
              u = n.anchor,
              l = n.contentStyle,
              h = n.style,
              c = n.children,
              p = n.theme,
              w = n.statusBarHeight,
              L = n.onDismiss,
              A = n.overlayAccessibilityLabel,
              x = this.state,
              D = x.rendered,
              P = x.menuLayout,
              R = x.anchorLayout,
              E = x.opacityAnimation,
              V = x.scaleAnimation,
              O = this.state,
              M = O.left,
              B = O.top,
              S = ReactNative.Platform.select({
                android: w,
                default: 0,
              }),
              C = [
                {
                  scaleX: V.x.interpolate({
                    inputRange: [0, P.width],
                    outputRange: [0, 1],
                  }),
                },
                {
                  scaleY: V.y.interpolate({
                    inputRange: [0, P.height],
                    outputRange: [0, 1],
                  }),
                },
              ],
              F = ReactNative.Dimensions.get('window'),
              _ = [];

            if (M <= F.width - P.width - 8) {
              _.push({
                translateX: V.x.interpolate({
                  inputRange: [0, P.width],
                  outputRange: [-P.width / 2, 0],
                }),
              });

              if (M < 8) M = 8;
            } else {
              _.push({
                translateX: V.x.interpolate({
                  inputRange: [0, P.width],
                  outputRange: [P.width / 2, 0],
                }),
              });

              if ((M += R.width - P.width) + P.width > F.width - 8) M = F.width - 8 - P.width;
            }

            var j = 0;

            if (
              (B >= F.height - P.height - 8 - S && B <= F.height - B
                ? (j = F.height - B - 8 - S)
                : B >= F.height - P.height - 8 - S && B >= F.height - B && B <= P.height - R.height + 8 - S && (j = B + R.height - 8 + S),
              (j = j > F.height - 16 ? F.height - 16 : j),
              B <= F.height - P.height - 8 - S || (B >= F.height - P.height - 8 - S && B <= F.height - B))
            ) {
              _.push({
                translateY: V.y.interpolate({
                  inputRange: [0, P.height],
                  outputRange: [-(j || P.height) / 2, 0],
                }),
              });

              if (B < 8) B = 8;
            } else {
              _.push({
                translateY: V.y.interpolate({
                  inputRange: [0, P.height],
                  outputRange: [(j || P.height) / 2, 0],
                }),
              });

              if ((B += R.height - (j || P.height)) + (j || P.height) + S > F.height - 8) B = j === F.height - 16 ? -16 : F.height - P.height - 8 - S;
            }

            var H = module11.default(
                {
                  opacity: E,
                  transform: C,
                  borderRadius: p.roundness,
                },
                j
                  ? {
                      height: j,
                    }
                  : {}
              ),
              N = module11.default(
                {
                  top: this.isCoordinate(u) ? B : B + S,
                },
                ReactNative.I18nManager.isRTL
                  ? {
                      right: M,
                    }
                  : {
                      left: M,
                    }
              );
            return (
              <ReactNative.View
                ref={function (n) {
                  t.anchor = n;
                }}
                collapsable={false}
              >
                {this.isCoordinate(u) ? null : u}
                {D ? (
                  <module1574.default>
                    <ReactNative.TouchableWithoutFeedback accessibilityLabel={A} accessibilityRole="button" onPress={L}>
                      <ReactNative.View style={ReactNative.StyleSheet.absoluteFill} />
                    </ReactNative.TouchableWithoutFeedback>
                    <ReactNative.View
                      ref={function (n) {
                        t.menu = n;
                      }}
                      collapsable={false}
                      accessibilityViewIsModal={s}
                      style={[k.wrapper, N, h]}
                      pointerEvents={s ? 'box-none' : 'none'}
                      onAccessibilityEscape={L}
                    >
                      {React.createElement(
                        ReactNative.Animated.View,
                        {
                          style: {
                            transform: _,
                          },
                        },
                        React.createElement(
                          module1545.default,
                          {
                            style: [k.shadowMenuContainer, H, l],
                          },
                          (j && React.createElement(ReactNative.ScrollView, null, c)) || React.createElement(React.Fragment, null, c)
                        )
                      )}
                    </ReactNative.View>
                  </module1574.default>
                ) : null}
              </ReactNative.View>
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            return t.visible && !n.rendered
              ? {
                  rendered: true,
                }
              : null;
          },
        },
      ]
    );
    return x;
  })(React.Component);

E.Item = module1576.default;
E.defaultProps = {
  statusBarHeight: module1577.APPROX_STATUSBAR_HEIGHT,
  overlayAccessibilityLabel: 'Close menu',
};
var k = ReactNative.StyleSheet.create({
    wrapper: {
      position: 'absolute',
    },
    shadowMenuContainer: {
      opacity: 0,
      paddingVertical: 8,
      elevation: 8,
    },
  }),
  V = module1495.withTheme(E);
exports.default = V;
