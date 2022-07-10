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
    var o = w(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var u = l ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (u && (u.get || u.set)) Object.defineProperty(s, p, u);
        else s[p] = t[p];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module528 = require('./528'),
  module524 = require('./524');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
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

var R = 0.05,
  O = (function (t) {
    module35.default(b, t);

    var w = b,
      O = S(),
      A = function () {
        var t,
          n = module34.default(w);

        if (O) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var s;
      module24.default(this, b);

      (s = A.call(this, t)).updateAnimatedEvent = function (t, n) {
        var o = t.friction,
          l = t.overshootFriction,
          p = n.dragX,
          u = n.rowTranslation,
          f = n.leftWidth,
          c = undefined === f ? 0 : f,
          v = n.rowWidth,
          w = undefined === v ? 0 : v,
          S = n.rightOffset,
          R = undefined === S ? w : S,
          O = 0 ** (w - R),
          y = t.overshootLeft,
          A = undefined === y ? c > 0 : y,
          b = t.overshootRight,
          W = undefined === b ? O > 0 : b,
          E = ReactNative.Animated.add(
            u,
            p.interpolate({
              inputRange: [0, o],
              outputRange: [0, 1],
            })
          ).interpolate({
            inputRange: [-O - (W ? 1 : l), -O, c, c + (A ? 1 : l)],
            outputRange: [-O - (W || l > 1 ? 1 : 0), -O, c, c + (A || l > 1 ? 1 : 0)],
          });
        s.transX = E;
        s.showLeftAction =
          c > 0
            ? E.interpolate({
                inputRange: [-1, 0, c],
                outputRange: [0, 0, 1],
              })
            : new ReactNative.Animated.Value(0);
        s.leftActionTranslate = s.showLeftAction.interpolate({
          inputRange: [0, Number.MIN_VALUE],
          outputRange: [-1e4, 0],
          extrapolate: 'clamp',
        });
        s.showRightAction =
          O > 0
            ? E.interpolate({
                inputRange: [-O, 0, 1],
                outputRange: [1, 0, 0],
              })
            : new ReactNative.Animated.Value(0);
        s.rightActionTranslate = s.showRightAction.interpolate({
          inputRange: [0, Number.MIN_VALUE],
          outputRange: [-1e4, 0],
          extrapolate: 'clamp',
        });
      };

      s.onTapHandlerStateChange = function (t) {
        if (t.nativeEvent.oldState === module524.State.ACTIVE) s.close();
      };

      s.onHandlerStateChange = function (t) {
        if (t.nativeEvent.oldState === module524.State.ACTIVE) s.handleRelease(t);
      };

      s.handleRelease = function (t) {
        var n = t.nativeEvent,
          o = n.velocityX,
          l = n.translationX,
          p = s.state,
          u = p.leftWidth,
          f = undefined === u ? 0 : u,
          h = p.rowWidth,
          c = undefined === h ? 0 : h,
          v = p.rowState,
          w = s.state.rightOffset,
          S = c - (undefined === w ? c : w),
          O = s.props,
          y = O.friction,
          A = O.leftThreshold,
          b = undefined === A ? f / 2 : A,
          W = O.rightThreshold,
          E = undefined === W ? S / 2 : W,
          L = s.currentOffset() + l / y,
          T = (l + R * o) / y,
          V = 0;
        if (0 === v) T > b ? (V = f) : T < -E && (V = -S);
        else if (1 === v) {
          if (T > -b) V = f;
        } else if (T < E) V = -S;
        s.animateRow(L, V, o / y);
      };

      s.animateRow = function (t, o, l) {
        var p = s.state,
          u = p.dragX,
          f = p.rowTranslation;
        u.setValue(0);
        f.setValue(t);
        s.setState({
          rowState: Math.sign(o),
        });
        ReactNative.Animated.spring(
          f,
          module11.default(
            {
              restSpeedThreshold: 1.7,
              restDisplacementThreshold: 0.4,
              velocity: l,
              bounciness: 0,
              toValue: o,
              useNativeDriver: s.props.useNativeAnimations,
            },
            s.props.animationOptions
          )
        ).start(function (t) {
          if (t.finished) {
            if (o > 0 && s.props.onSwipeableLeftOpen) s.props.onSwipeableLeftOpen();
            else if (o < 0 && s.props.onSwipeableRightOpen) s.props.onSwipeableRightOpen();
            if (0 === o) {
              if (!(null == s.props.onSwipeableClose)) s.props.onSwipeableClose();
            } else if (!(null == s.props.onSwipeableOpen)) s.props.onSwipeableOpen();
          }
        });
        if (o > 0 && s.props.onSwipeableLeftWillOpen) s.props.onSwipeableLeftWillOpen();
        else if (o < 0 && s.props.onSwipeableRightWillOpen) s.props.onSwipeableRightWillOpen();
        if (0 === o) {
          if (!(null == s.props.onSwipeableWillClose)) s.props.onSwipeableWillClose();
        } else if (!(null == s.props.onSwipeableWillOpen)) s.props.onSwipeableWillOpen();
      };

      s.onRowLayout = function (t) {
        var n = t.nativeEvent;
        s.setState({
          rowWidth: n.layout.width,
        });
      };

      s.currentOffset = function () {
        var t = s.state,
          n = t.leftWidth,
          o = undefined === n ? 0 : n,
          l = t.rowWidth,
          p = undefined === l ? 0 : l,
          u = t.rowState,
          f = s.state.rightOffset;
        return 1 === u ? o : -1 === u ? -(p - (undefined === f ? p : f)) : 0;
      };

      s.close = function () {
        s.animateRow(s.currentOffset(), 0);
      };

      s.openLeft = function () {
        var t = s.state.leftWidth,
          n = undefined === t ? 0 : t;
        s.animateRow(s.currentOffset(), n);
      };

      s.openRight = function () {
        var t = s.state.rowWidth,
          n = undefined === t ? 0 : t,
          o = s.state.rightOffset,
          l = n - (undefined === o ? n : o);
        s.animateRow(s.currentOffset(), -l);
      };

      var l = new ReactNative.Animated.Value(0);
      s.state = {
        dragX: l,
        rowTranslation: new ReactNative.Animated.Value(0),
        rowState: 0,
        leftWidth: undefined,
        rightOffset: undefined,
        rowWidth: undefined,
      };
      s.updateAnimatedEvent(t, s.state);
      s.onGestureEvent = ReactNative.Animated.event(
        [
          {
            nativeEvent: {
              translationX: l,
            },
          },
        ],
        {
          useNativeDriver: t.useNativeAnimations,
        }
      );
      return s;
    }

    module25.default(b, [
      {
        key: 'UNSAFE_componentWillUpdate',
        value: function (t, n) {
          if (
            !(
              this.props.friction === t.friction &&
              this.props.overshootLeft === t.overshootLeft &&
              this.props.overshootRight === t.overshootRight &&
              this.props.overshootFriction === t.overshootFriction &&
              this.state.leftWidth === n.leftWidth &&
              this.state.rightOffset === n.rightOffset &&
              this.state.rowWidth === n.rowWidth
            )
          )
            this.updateAnimatedEvent(t, n);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.state.rowState,
            s = this.props,
            l = s.children,
            p = s.renderLeftActions,
            u = s.renderRightActions,
            v =
              p &&
              React.createElement(
                ReactNative.Animated.View,
                {
                  style: [
                    y.leftActions,
                    {
                      transform: [
                        {
                          translateX: this.leftActionTranslate,
                        },
                      ],
                    },
                  ],
                },
                p(this.showLeftAction, this.transX),
                React.createElement(ReactNative.View, {
                  onLayout: function (n) {
                    var o = n.nativeEvent;
                    return t.setState({
                      leftWidth: o.layout.x,
                    });
                  },
                })
              ),
            w =
              u &&
              React.createElement(
                ReactNative.Animated.View,
                {
                  style: [
                    y.rightActions,
                    {
                      transform: [
                        {
                          translateX: this.rightActionTranslate,
                        },
                      ],
                    },
                  ],
                },
                u(this.showRightAction, this.transX),
                React.createElement(ReactNative.View, {
                  onLayout: function (n) {
                    var o = n.nativeEvent;
                    return t.setState({
                      rightOffset: o.layout.x,
                    });
                  },
                })
              );
          return React.createElement(
            module528.PanGestureHandler,
            module11.default(
              {
                activeOffsetX: [-10, 10],
              },
              this.props,
              {
                onGestureEvent: this.onGestureEvent,
                onHandlerStateChange: this.onHandlerStateChange,
              }
            ),
            React.createElement(
              ReactNative.Animated.View,
              {
                onLayout: this.onRowLayout,
                style: [y.container, this.props.containerStyle],
              },
              v,
              w,
              React.createElement(
                module528.TapGestureHandler,
                {
                  enabled: 0 !== o,
                  onHandlerStateChange: this.onTapHandlerStateChange,
                },
                React.createElement(
                  ReactNative.Animated.View,
                  {
                    pointerEvents: 0 === o ? 'auto' : 'box-only',
                    style: [
                      {
                        transform: [
                          {
                            translateX: this.transX,
                          },
                        ],
                      },
                      this.props.childrenContainerStyle,
                    ],
                  },
                  l
                )
              )
            )
          );
        },
      },
    ]);
    return b;
  })(React.Component);

exports.default = O;
O.defaultProps = {
  friction: 1,
  overshootFriction: 1,
  useNativeAnimations: true,
};
var y = ReactNative.StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  leftActions: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
    flexDirection: ReactNative.I18nManager.isRTL ? 'row-reverse' : 'row',
  }),
  rightActions: module11.default({}, ReactNative.StyleSheet.absoluteFillObject, {
    flexDirection: ReactNative.I18nManager.isRTL ? 'row' : 'row-reverse',
  }),
});
