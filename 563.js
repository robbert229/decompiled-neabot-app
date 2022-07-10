var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
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
    var o = A(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module573 = require('./573'),
  module520 = require('./520'),
  module574 = require('./574'),
  module575 = require('./575'),
  module576 = require('./576'),
  module561 = require('./561'),
  V = [
    'styleInterpolator',
    'index',
    'current',
    'gesture',
    'next',
    'layout',
    'insets',
    'overlay',
    'overlayEnabled',
    'shadowEnabled',
    'gestureEnabled',
    'gestureDirection',
    'pageOverflowEnabled',
    'children',
    'containerStyle',
    'contentStyle',
  ];

function A(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (A = function (t) {
    return t ? o : n;
  })(t);
}

function O() {
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

var x = 1,
  D = 0,
  I = 'web' !== ReactNative.Platform.OS,
  k = (function (t, ...args) {
    module35.default(R, t);

    var A = R,
      k = O(),
      G = function () {
        var t,
          n = module34.default(A);

        if (k) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function R() {
      var t;
      module24.default(this, R);
      (t = G.call(this, ...args)).isCurrentlyMounted = false;
      t.isClosing = new ReactNative.Animated.Value(D);
      t.inverted = new ReactNative.Animated.Value(module576.default(t.props.gestureDirection));
      t.layout = {
        width: new ReactNative.Animated.Value(t.props.layout.width),
        height: new ReactNative.Animated.Value(t.props.layout.height),
      };
      t.isSwiping = new ReactNative.Animated.Value(D);

      t.animate = function (n) {
        var l = n.closing,
          s = n.velocity,
          u = t.props,
          c = u.gesture,
          h = u.transitionSpec,
          f = u.onOpen,
          v = u.onClose,
          y = u.onTransition,
          w = t.getAnimateToValue(
            module11.default({}, t.props, {
              closing: l,
            })
          );
        t.lastToValue = w;
        var b = l ? h.close : h.open,
          E = 'spring' === b.animation ? ReactNative.Animated.spring : ReactNative.Animated.timing;
        t.setPointerEventsEnabled(!l);
        t.handleStartInteraction();
        clearTimeout(t.pendingGestureCallback);
        if (!(null == y))
          y({
            closing: l,
            gesture: undefined !== s,
          });
        E(
          c,
          module11.default({}, b.config, {
            velocity: s,
            toValue: w,
            useNativeDriver: I,
            isInteraction: false,
          })
        ).start(function (n) {
          var o = n.finished;
          t.handleEndInteraction();
          clearTimeout(t.pendingGestureCallback);

          if (o) {
            if (l) v();
            else f();
            if (t.isCurrentlyMounted) t.forceUpdate();
          }
        });
      };

      t.getAnimateToValue = function (t) {
        var n = t.closing,
          o = t.layout,
          l = t.gestureDirection;
        return n ? module575.default(o, l) : 0;
      };

      t.setPointerEventsEnabled = function (n) {
        var o,
          l = n ? 'box-none' : 'none';
        if (!(null == (o = t.contentRef.current)))
          o.setNativeProps({
            pointerEvents: l,
          });
      };

      t.handleStartInteraction = function () {
        if (undefined === t.interactionHandle) t.interactionHandle = ReactNative.InteractionManager.createInteractionHandle();
      };

      t.handleEndInteraction = function () {
        if (undefined !== t.interactionHandle) {
          ReactNative.InteractionManager.clearInteractionHandle(t.interactionHandle);
          t.interactionHandle = undefined;
        }
      };

      t.handleGestureStateChange = function (n) {
        var o = n.nativeEvent,
          l = t.props,
          s = l.layout,
          u = l.onClose,
          c = l.onGestureBegin,
          h = l.onGestureCanceled,
          f = l.onGestureEnd,
          p = l.gestureDirection,
          v = l.gestureVelocityImpact;

        switch (o.state) {
          case module520.GestureState.BEGAN:
            t.isSwiping.setValue(x);
            t.handleStartInteraction();
            if (!(null == c)) c();
            break;

          case module520.GestureState.CANCELLED:
            t.isSwiping.setValue(D);
            t.handleEndInteraction();
            var y = 'vertical' === p || 'vertical-inverted' === p ? o.velocityY : o.velocityX;
            t.animate({
              closing: t.props.closing,
              velocity: y,
            });
            if (!(null == h)) h();
            break;

          case module520.GestureState.END:
            var b, E, C;
            t.isSwiping.setValue(D);

            if ('vertical' === p || 'vertical-inverted' === p) {
              b = s.height;
              E = o.translationY;
              C = o.velocityY;
            } else {
              b = s.width;
              E = o.translationX;
              C = o.velocityX;
            }

            var V = (E + C * v) * module576.default(p) > b / 2 ? 0 !== C || 0 !== E : t.props.closing;
            t.animate({
              closing: V,
              velocity: C,
            });
            if (V)
              t.pendingGestureCallback = setTimeout(function () {
                u();
                t.forceUpdate();
              }, 32);
            if (!(null == f)) f();
        }
      };

      t.getInterpolatedStyle = module561.default(function (n, o, l, s, u, c, h, f, p) {
        return n({
          index: o,
          current: {
            progress: l,
          },
          next: s && {
            progress: s,
          },
          closing: t.isClosing,
          swiping: t.isSwiping,
          inverted: t.inverted,
          layouts: {
            screen: u,
          },
          insets: {
            top: c,
            right: h,
            bottom: f,
            left: p,
          },
        });
      });
      t.getCardAnimationContext = module561.default(function (n, o, l, s, u, c, h, f) {
        return {
          index: n,
          current: {
            progress: o,
          },
          next: l && {
            progress: l,
          },
          closing: t.isClosing,
          swiping: t.isSwiping,
          inverted: t.inverted,
          layouts: {
            screen: s,
          },
          insets: {
            top: u,
            right: c,
            bottom: h,
            left: f,
          },
        };
      });
      t.contentRef = React.createRef();
      return t;
    }

    module25.default(R, [
      {
        key: 'componentDidMount',
        value: function () {
          this.animate({
            closing: this.props.closing,
          });
          this.isCurrentlyMounted = true;
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this.props,
            o = n.layout,
            l = n.gestureDirection,
            s = n.closing,
            u = o.width,
            c = o.height;
          if (u !== t.layout.width) this.layout.width.setValue(u);
          if (c !== t.layout.height) this.layout.height.setValue(c);
          if (l !== t.gestureDirection) this.inverted.setValue(module576.default(l));
          var h = this.getAnimateToValue(this.props);
          if (!(this.getAnimateToValue(t) === h && this.lastToValue === h))
            this.animate({
              closing: s,
            });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.isCurrentlyMounted = false;
          this.handleEndInteraction();
        },
      },
      {
        key: 'gestureActivationCriteria',
        value: function () {
          var t = this.props,
            n = t.layout,
            o = t.gestureDirection,
            l = t.gestureResponseDistance,
            s =
              'vertical' === o || 'vertical-inverted' === o
                ? undefined !== (null == l ? undefined : l.vertical)
                  ? l.vertical
                  : 135
                : undefined !== (null == l ? undefined : l.horizontal)
                ? l.horizontal
                : 50;
          if ('vertical' === o)
            return {
              maxDeltaX: 15,
              minOffsetY: 5,
              hitSlop: {
                bottom: -n.height + s,
              },
            };
          if ('vertical-inverted' === o)
            return {
              maxDeltaX: 15,
              minOffsetY: -5,
              hitSlop: {
                top: -n.height + s,
              },
            };
          var u = -n.width + s;
          return 1 === module576.default(o)
            ? {
                minOffsetX: 5,
                maxDeltaY: 20,
                hitSlop: {
                  right: u,
                },
              }
            : {
                minOffsetX: -5,
                maxDeltaY: 20,
                hitSlop: {
                  left: u,
                },
              };
        },
      },
      {
        key: 'render',
        value: function () {
          var t,
            l = this.props,
            s = l.styleInterpolator,
            u = l.index,
            c = l.current,
            h = l.gesture,
            E = l.next,
            S = l.layout,
            C = l.insets,
            A = l.overlay,
            O = l.overlayEnabled,
            x = l.shadowEnabled,
            D = l.gestureEnabled,
            k = l.gestureDirection,
            G = l.pageOverflowEnabled,
            R = l.children,
            H = l.containerStyle,
            M = l.contentStyle,
            T = module52.default(l, V),
            X = this.getInterpolatedStyle(s, u, c, E, S, C.top, C.right, C.bottom, C.left),
            Y = this.getCardAnimationContext(u, c, E, S, C.top, C.right, C.bottom, C.left),
            j = X.containerStyle,
            z = X.cardStyle,
            B = X.overlayStyle,
            N = X.shadowStyle,
            _ = D
              ? ReactNative.Animated.event(
                  [
                    {
                      nativeEvent:
                        'vertical' === k || 'vertical-inverted' === k
                          ? {
                              translationY: h,
                            }
                          : {
                              translationX: h,
                            },
                    },
                  ],
                  {
                    useNativeDriver: I,
                  }
                )
              : undefined,
            L = ReactNative.StyleSheet.flatten(M || {}).backgroundColor,
            U = 'string' == typeof L && 0 === module564.default(L).alpha();

          return React.createElement(
            module574.default.Provider,
            {
              value: Y,
            },
            React.createElement(ReactNative.Animated.View, {
              style: {
                opacity: c,
              },
              collapsable: false,
            }),
            React.createElement(
              ReactNative.View,
              module11.default(
                {
                  pointerEvents: 'box-none',
                },
                T
              ),
              O
                ? React.createElement(
                    ReactNative.View,
                    {
                      pointerEvents: 'box-none',
                      style: ReactNative.StyleSheet.absoluteFill,
                    },
                    A({
                      style: B,
                    })
                  )
                : null,
              React.createElement(
                ReactNative.Animated.View,
                {
                  needsOffscreenAlphaCompositing: ((t = j), !!t && null != ReactNative.StyleSheet.flatten(t).opacity),
                  style: [P.container, j, H],
                  pointerEvents: 'box-none',
                },
                React.createElement(
                  module520.PanGestureHandler,
                  module11.default(
                    {
                      enabled: 0 !== S.width && D,
                      onGestureEvent: _,
                      onHandlerStateChange: this.handleGestureStateChange,
                    },
                    this.gestureActivationCriteria()
                  ),
                  React.createElement(
                    ReactNative.Animated.View,
                    {
                      style: [P.container, z],
                    },
                    x && N && !U
                      ? React.createElement(ReactNative.Animated.View, {
                          style: [
                            P.shadow,
                            'horizontal' === k
                              ? [P.shadowHorizontal, P.shadowLeft]
                              : 'horizontal-inverted' === k
                              ? [P.shadowHorizontal, P.shadowRight]
                              : 'vertical' === k
                              ? [P.shadowVertical, P.shadowTop]
                              : [P.shadowVertical, P.shadowBottom],
                            {
                              backgroundColor: L,
                            },
                            N,
                          ],
                          pointerEvents: 'none',
                        })
                      : null,
                    React.createElement(
                      module573.default,
                      {
                        ref: this.contentRef,
                        enabled: G,
                        layout: S,
                        style: M,
                      },
                      R
                    )
                  )
                )
              )
            )
          );
        },
      },
    ]);
    return R;
  })(React.Component);

exports.default = k;
k.defaultProps = {
  overlayEnabled: 'ios' !== ReactNative.Platform.OS,
  shadowEnabled: true,
  gestureEnabled: true,
  gestureVelocityImpact: 0.3,
  overlay: function (t) {
    var n = t.style;
    return n
      ? React.createElement(ReactNative.Animated.View, {
          pointerEvents: 'none',
          style: [P.overlay, n],
        })
      : null;
  },
};
var P = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#000',
  },
  shadow: {
    position: 'absolute',
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
  },
  shadowHorizontal: {
    top: 0,
    bottom: 0,
    width: 3,
    shadowOffset: {
      width: -1,
      height: 1,
    },
  },
  shadowLeft: {
    left: 0,
  },
  shadowRight: {
    right: 0,
  },
  shadowVertical: {
    left: 0,
    right: 0,
    height: 3,
    shadowOffset: {
      width: 1,
      height: -1,
    },
  },
  shadowTop: {
    top: 0,
  },
  shadowBottom: {
    bottom: 0,
  },
});
