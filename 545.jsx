var module11 = require('./11'),
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
    var o = y(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var p = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (p && (p.get || p.set)) Object.defineProperty(l, u, p);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  module3 = require('./3'),
  ReactNative = require('react-native'),
  module528 = require('./528'),
  module524 = require('./524');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function S() {
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

var b = 0.05,
  V = 'Idle',
  A = 'Dragging',
  D = 'Settling',
  E = (function (t) {
    module35.default(R, t);

    var module11 = R,
      y = S(),
      E = function () {
        var t,
          o = module34.default(module11);

        if (y) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function R(t) {
      var n;
      module24.default(this, R);
      (n = E.call(this, t)).accessibilityIsModalView = React.createRef();
      n.pointerEventsView = React.createRef();
      n.panGestureHandler = React.createRef();
      n.drawerShown = false;

      n.updateAnimatedEvent = function (t, o) {
        var l = t.drawerPosition,
          s = t.drawerWidth,
          u = t.drawerType,
          p = o.dragX,
          c = o.touchX,
          f = o.drawerTranslation,
          h = o.containerWidth,
          v = p,
          y = c;

        if ('left' !== l) {
          v = ReactNative.Animated.multiply(new ReactNative.Animated.Value(-1), p);
          y = ReactNative.Animated.add(new ReactNative.Animated.Value(h), ReactNative.Animated.multiply(new ReactNative.Animated.Value(-1), c));
          c.setValue(h);
        } else c.setValue(0);

        var S = v;

        if ('front' === u) {
          var b = ReactNative.Animated.add(y, ReactNative.Animated.multiply(new ReactNative.Animated.Value(-1), v)).interpolate({
            inputRange: [s - 1, s, s + 1],
            outputRange: [0, 0, 1],
          });
          S = ReactNative.Animated.add(v, b);
        }

        n.openValue = ReactNative.Animated.add(S, f).interpolate({
          inputRange: [0, s],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
        var V = {
          useNativeDriver: t.useNativeAnimations,
        };
        if (n.props.onDrawerSlide)
          V.listener = function (t) {
            var o = Math.floor(Math.abs(t.nativeEvent.translationX)) / n.state.containerWidth;
            if (!(null == n.props.onDrawerSlide)) n.props.onDrawerSlide(o);
          };
        n.onGestureEvent = ReactNative.Animated.event(
          [
            {
              nativeEvent: {
                translationX: p,
                x: c,
              },
            },
          ],
          V
        );
      };

      n.handleContainerLayout = function (t) {
        var o = t.nativeEvent;
        n.setState({
          containerWidth: o.layout.width,
        });
      };

      n.emitStateChanged = function (t, o) {
        if (!(null == n.props.onDrawerStateChanged)) n.props.onDrawerStateChanged(t, o);
      };

      n.openingHandlerStateChange = function (t) {
        var o = t.nativeEvent;
        if (o.oldState === module524.State.ACTIVE)
          n.handleRelease({
            nativeEvent: o,
          });
        else if (o.state === module524.State.ACTIVE) {
          n.emitStateChanged(A, false);
          if ('on-drag' === n.props.keyboardDismissMode) ReactNative.Keyboard.dismiss();
          if (n.props.hideStatusBar) ReactNative.StatusBar.setHidden(true, n.props.statusBarAnimation || 'slide');
        }
      };

      n.onTapHandlerStateChange = function (t) {
        var o = t.nativeEvent;
        if (n.drawerShown && o.oldState === module524.State.ACTIVE && 'locked-open' !== n.props.drawerLockMode) n.closeDrawer();
      };

      n.handleRelease = function (t) {
        var o = t.nativeEvent,
          l = n.props,
          s = l.drawerWidth,
          u = l.drawerPosition,
          p = l.drawerType,
          c = n.state.containerWidth,
          f = o.translationX,
          w = o.velocityX,
          h = o.x;

        if ('left' !== u) {
          f = -f;
          h = c - h;
          w = -w;
        }

        var v = h - f,
          y = 0;
        if ('front' === p) y = v > s ? v - s : 0;
        var S = f + y + (n.drawerShown ? s : 0);
        if (S + b * w > s / 2) n.animateDrawer(S, s, w);
        else n.animateDrawer(S, 0, w);
      };

      n.updateShowing = function (t) {
        var o, l, s;
        n.drawerShown = t;
        if (!(null == (o = n.accessibilityIsModalView.current)))
          o.setNativeProps({
            accessibilityViewIsModal: t,
          });
        if (!(null == (l = n.pointerEventsView.current)))
          l.setNativeProps({
            pointerEvents: t ? 'auto' : 'none',
          });
        var u = n.props,
          p = u.drawerPosition,
          c = u.minSwipeDistance,
          f = u.edgeWidth,
          w = 'left' === p,
          h = (w ? 1 : -1) * (n.drawerShown ? -1 : 1),
          v = w
            ? {
                left: 0,
                width: t ? undefined : f,
              }
            : {
                right: 0,
                width: t ? undefined : f,
              };
        if (!(null == (s = n.panGestureHandler.current)))
          s.setNativeProps({
            hitSlop: v,
            activeOffsetX: h * c,
          });
      };

      n.animateDrawer = function (t, o, l, s) {
        if ((n.state.dragX.setValue(0), n.state.touchX.setValue('left' === n.props.drawerPosition ? 0 : n.state.containerWidth), null != t)) {
          var u = t;
          if (n.props.useNativeAnimations) t < o && l > 0 ? (u = (t + l / 60) ** o) : t > o && l < 0 && (u = (t + l / 60) ** o);
          n.state.drawerTranslation.setValue(u);
        }

        var p = 0 !== o;
        n.updateShowing(p);
        n.emitStateChanged(D, p);
        if (n.props.hideStatusBar) ReactNative.StatusBar.setHidden(p, n.props.statusBarAnimation || 'slide');
        ReactNative.Animated.spring(n.state.drawerTranslation, {
          velocity: l,
          bounciness: 0,
          toValue: o,
          useNativeDriver: n.props.useNativeAnimations,
          speed: null != s ? s : undefined,
        }).start(function (t) {
          if (t.finished) {
            n.emitStateChanged(V, p);
            if (p) {
              if (!(null == n.props.onDrawerOpen)) n.props.onDrawerOpen();
            } else if (!(null == n.props.onDrawerClose)) n.props.onDrawerClose();
          }
        });
      };

      n.openDrawer = function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        n.animateDrawer(undefined, n.props.drawerWidth, t.velocity ? t.velocity : 0);
        n.forceUpdate();
      };

      n.closeDrawer = function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        n.animateDrawer(undefined, 0, t.velocity ? t.velocity : 0);
        n.forceUpdate();
      };

      n.renderOverlay = function () {
        module3.default(n.openValue, 'should be set');
        var t = {
          opacity: n.openValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
          backgroundColor: n.props.overlayColor,
        };
        return (
          <module528.TapGestureHandler onHandlerStateChange={n.onTapHandlerStateChange}>
            {React.createElement(ReactNative.Animated.View, {
              pointerEvents: n.drawerShown ? 'auto' : 'none',
              ref: n.pointerEventsView,
              style: [C.overlay, t],
            })}
          </module528.TapGestureHandler>
        );
      };

      n.renderDrawer = function () {
        var t,
          o = n.props,
          l = o.drawerBackgroundColor,
          s = o.drawerWidth,
          u = o.drawerPosition,
          p = o.drawerType,
          h = o.drawerContainerStyle,
          v = o.contentContainerStyle,
          y = 'left' === u,
          S = 'back' !== p,
          b = 'front' !== p,
          V = ReactNative.I18nManager.isRTL ? y : !y,
          A = {
            backgroundColor: l,
            width: s,
          },
          D = n.openValue;
        if ((module3.default(D, 'should be set'), b))
          t = {
            transform: [
              {
                translateX: D.interpolate({
                  inputRange: [0, 1],
                  outputRange: y ? [0, s] : [0, -s],
                  extrapolate: 'clamp',
                }),
              },
            ],
          };
        var E = 0;

        if (S) {
          var R = y ? -s : s;
          E = D.interpolate({
            inputRange: [0, 1],
            outputRange: [R, 0],
            extrapolate: 'clamp',
          });
        }

        var O = {
          transform: [
            {
              translateX: E,
            },
          ],
          flexDirection: V ? 'row-reverse' : 'row',
        };
        return React.createElement(
          ReactNative.Animated.View,
          {
            style: C.main,
            onLayout: n.handleContainerLayout,
          },
          React.createElement(
            ReactNative.Animated.View,
            {
              style: ['front' === p ? C.containerOnBack : C.containerInFront, t, v],
              importantForAccessibility: n.drawerShown ? 'no-hide-descendants' : 'yes',
            },
            'function' == typeof n.props.children ? n.props.children(n.openValue) : n.props.children,
            n.renderOverlay()
          ),
          React.createElement(
            ReactNative.Animated.View,
            {
              pointerEvents: 'box-none',
              ref: n.accessibilityIsModalView,
              accessibilityViewIsModal: n.drawerShown,
              style: [C.drawerContainer, O, h],
            },
            React.createElement(
              ReactNative.View,
              {
                style: A,
              },
              n.props.renderNavigationView(n.openValue)
            )
          )
        );
      };

      n.setPanGestureRef = function (t) {
        n.panGestureHandler.current = t;
        if (!(null == n.props.onGestureRef)) n.props.onGestureRef(t);
      };

      var l = new ReactNative.Animated.Value(0),
        s = new ReactNative.Animated.Value(0),
        u = new ReactNative.Animated.Value(0);
      n.state = {
        dragX: l,
        touchX: s,
        drawerTranslation: u,
        containerWidth: 0,
      };
      n.updateAnimatedEvent(t, n.state);
      return n;
    }

    module25.default(R, [
      {
        key: 'UNSAFE_componentWillUpdate',
        value: function (t, n) {
          if (
            !(
              this.props.drawerPosition === t.drawerPosition &&
              this.props.drawerWidth === t.drawerWidth &&
              this.props.drawerType === t.drawerType &&
              this.state.containerWidth === n.containerWidth
            )
          )
            this.updateAnimatedEvent(t, n);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.drawerPosition,
            o = t.drawerLockMode,
            l = t.edgeWidth,
            s = t.minSwipeDistance,
            u = 'left' === n,
            p = (u ? 1 : -1) * (this.drawerShown ? -1 : 1),
            f = u
              ? {
                  left: 0,
                  width: this.drawerShown ? undefined : l,
                }
              : {
                  right: 0,
                  width: this.drawerShown ? undefined : l,
                };
          return React.createElement(
            module528.PanGestureHandler,
            {
              ref: this.setPanGestureRef,
              hitSlop: f,
              activeOffsetX: p * s,
              failOffsetY: [-15, 15],
              onGestureEvent: this.onGestureEvent,
              onHandlerStateChange: this.openingHandlerStateChange,
              enableTrackpadTwoFingerGesture: this.props.enableTrackpadTwoFingerGesture,
              enabled: 'locked-closed' !== o && 'locked-open' !== o,
            },
            this.renderDrawer()
          );
        },
      },
    ]);
    return R;
  })(React.Component);

exports.default = E;
E.defaultProps = {
  drawerWidth: 200,
  drawerPosition: 'left',
  useNativeAnimations: true,
  drawerType: 'front',
  edgeWidth: 20,
  minSwipeDistance: 3,
  overlayColor: 'rgba(0, 0, 0, 0.7)',
  drawerLockMode: 'unlocked',
  enableTrackpadTwoFingerGesture: false,
};
E.positions = {
  Left: 'left',
  Right: 'right',
};
var C = ReactNative.StyleSheet.create({
  drawerContainer: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
    zIndex: 1001,
    flexDirection: 'row',
  }),
  containerInFront: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
    zIndex: 1002,
  }),
  containerOnBack: module11.default({}, ReactNative.StyleSheet.absoluteFillObject),
  main: {
    flex: 1,
    zIndex: 0,
    overflow: 'hidden',
  },
  overlay: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
    zIndex: 1e3,
  }),
});
