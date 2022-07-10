require('./945');

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
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
    var o = L(n);
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
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  y = ['style', 'containerStyle'],
  P = [
    'style',
    'children',
    'containerStyle',
    'maxScale',
    'minScale',
    'inertial',
    'magnetic',
    'tension',
    'onWillTransform',
    'onTransforming',
    'onDidTransform',
    'onWillInertialMove',
    'onDidInertialMove',
    'onWillMagnetic',
    'onDidMagnetic',
    'onPress',
    'onLongPress',
    'onLayout',
  ];

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (L = function (t) {
    return t ? o : n;
  })(t);
}

function T() {
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

var _ = (function (t) {
  module35.default(w, t);

  var PropTypes = w,
    L = T(),
    _ = function () {
      var t,
        n = module34.default(PropTypes);

      if (L) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var n;
    module24.default(this, w);

    (n = _.call(this, t)).createPanResponder();

    n.prevTouches = [];
    n.viewLayout = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    n.initContentLayout = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    n.state = {
      translateX: new ReactNative.Animated.Value(0),
      translateY: new ReactNative.Animated.Value(0),
      scale: new ReactNative.Animated.Value(1),
    };
    return n;
  }

  module25.default(w, [
    {
      key: 'contentLayout',
      get: function () {
        var t = this.state,
          n = t.translateX,
          o = t.translateY,
          l = t.scale,
          s = this.initContentLayout.x + this.initContentLayout.width / 2,
          u = this.initContentLayout.y + this.initContentLayout.height / 2,
          c = s + n._value,
          h = u + o._value,
          v = this.initContentLayout.width * l._value,
          f = this.initContentLayout.height * l._value;
        return {
          x: c - v / 2,
          y: h - f / 2,
          width: v,
          height: f,
        };
      },
    },
    {
      key: 'setupLongPressTimer',
      value: function (t) {
        var n = this,
          o = this.props.onLongPress;

        if (o) {
          this.removeLongPressTimer();
          this.longPressTimer = setTimeout(function () {
            n.longPressTimer = null;
            if (o) o(t);
          }, 500);
        }
      },
    },
    {
      key: 'removeLongPressTimer',
      value: function () {
        if (this.longPressTimer) {
          clearTimeout(this.longPressTimer);
          this.longPressTimer = null;
        }
      },
    },
    {
      key: 'createPanResponder',
      value: function () {
        var t = this;
        this.panResponder = ReactNative.PanResponder.create({
          onStartShouldSetPanResponder: function (t, n) {
            return true;
          },
          onStartShouldSetPanResponderCapture: function (t, n) {
            return false;
          },
          onMoveShouldSetPanResponder: function (t, n) {
            return true;
          },
          onMoveShouldSetPanResponderCapture: function (t, n) {
            return false;
          },
          onPanResponderGrant: function (n, o) {
            return t.onPanResponderGrant(n, o);
          },
          onPanResponderMove: function (n, o) {
            return t.onPanResponderMove(n, o);
          },
          onPanResponderTerminationRequest: function (t, n) {
            return true;
          },
          onPanResponderRelease: function (n, o) {
            return t.onPanResponderRelease(n, o);
          },
          onPanResponderTerminate: function (t, n) {
            return null;
          },
          onShouldBlockNativeResponder: function (t, n) {
            return true;
          },
        });
      },
    },
    {
      key: 'onPanResponderGrant',
      value: function (t, n) {
        this.setupLongPressTimer(t);
        this.touchMoved = false;
        this.lockDirection = 'none';
        this.dxSum = 0;
        this.dySum = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.touchTime = new Date();
        this.prevTouches = t.nativeEvent.touches;
        var o = this.props.onWillTransform,
          l = this.state,
          s = l.translateX,
          u = l.translateY,
          c = l.scale;
        if (o) o(s._value, u._value, c._value);
      },
    },
    {
      key: 'onPanResponderMove',
      value: function (t, n) {
        var o = this;
        this.handleTouches(t.nativeEvent.touches, function (n, l, s, u, c) {
          var h = o.props,
            v = h.tension,
            f = h.onTransforming,
            p = o.state,
            y = p.translateX,
            P = p.translateY,
            L = p.scale,
            T = o.contentLayout,
            _ = T.x,
            w = T.y,
            M = T.width,
            S = T.height;

          if (v) {
            if (_ > o.initContentLayout.x) n /= 3;
            else if (_ + M < o.initContentLayout.x + o.initContentLayout.width) n /= 3;
            if (w > o.initContentLayout.y) l /= 3;
            else if (w + S < o.initContentLayout.y + o.initContentLayout.height) l /= 3;
          }

          o.dxSum += n;
          o.dySum += l;
          o.speedX = s;
          o.speedY = u;
          var R = Math.abs(o.dxSum),
            D = Math.abs(o.dySum),
            k = Math.abs(c - 1);

          if (!(!o.touchMoved && R < 6 && D < 6 && k < 0.01)) {
            switch (
              (1 == t.nativeEvent.touches.length &&
                'none' === o.lockDirection &&
                (R > D && S <= o.viewLayout.height ? (o.lockDirection = 'y') : R < D && M <= o.viewLayout.width && (o.lockDirection = 'x')),
              o.lockDirection)
            ) {
              case 'x':
                y.setValue(0);
                P.setValue(P._value + l);
                break;

              case 'y':
                y.setValue(y._value + n);
                P.setValue(0);
                break;

              default:
                y.setValue(y._value + n);
                P.setValue(P._value + l);
                L.setValue(L._value * c);
            }

            o.removeLongPressTimer();
            o.touchMoved = true;
            if (f) f(y._value, P._value, L._value);
          }
        });
      },
    },
    {
      key: 'onPanResponderRelease',
      value: function (t, n) {
        this.removeLongPressTimer();
        this.prevTouches = [];
        this.handleRelease();
        var o = this.props,
          l = o.onDidTransform,
          s = o.onPress,
          u = this.state,
          c = u.translateX,
          h = u.translateY,
          v = u.scale;
        if (l) l(c._value, h._value, v._value);
        var f = new Date();
        if (!(this.touchTime || (this.touchTime = f), this.touchMoved)) f.getTime() - this.touchTime.getTime() < 500 && s && s(t);
      },
    },
    {
      key: 'handleTouches',
      value: function (t, n) {
        var o = this.prevTouches;

        if (((this.prevTouches = t), 0 != t.length && t.length == o.length)) {
          for (var l = 0; l < t.length; ++l) if (t[l].identifier != o[l].identifier) return;

          var s, u;

          if (1 == t.length) {
            s = {
              x: o[0].pageX,
              y: o[0].pageY,
            };
            u = {
              x: t[0].pageX,
              y: t[0].pageY,
            };
          } else {
            s = {
              x: (o[0].pageX + o[1].pageX) / 2,
              y: (o[0].pageY + o[1].pageY) / 2,
            };
            u = {
              x: (t[0].pageX + t[1].pageX) / 2,
              y: (t[0].pageY + t[1].pageY) / 2,
            };
          }

          var c = u.x - s.x,
            h = u.y - s.y,
            v = t[0].timestamp - o[0].timestamp,
            f = v ? c / v : 0,
            p = v ? h / v : 0,
            y = 0,
            P = 0;

          if (t.length >= 2) {
            var L = o[1].pageX - o[0].pageX,
              T = o[1].pageY - o[0].pageY,
              _ = t[1].pageX - t[0].pageX,
              w = t[1].pageY - t[0].pageY;

            y = Math.sqrt(L * L + T * T);
            P = Math.sqrt(_ * _ + w * w);
          }

          if (y && P) {
            var M = P / y,
              S = this.props.maxScale,
              R = this.state.scale;
            if (R._value * M > S) M = S / R._value;
            n(c, h, f, p, M);
          } else n(c, h, f, p, 1);
        }
      },
    },
    {
      key: 'handleRelease',
      value: function () {
        var t = this,
          n = this.props,
          o = n.inertial,
          l = n.onWillInertialMove,
          s = n.onDidInertialMove,
          u = this.state,
          c = u.translateX,
          h = u.translateY,
          v = 60 * this.speedX,
          f = 60 * this.speedY;

        if ((('x' === this.lockDirection || Math.abs(v) < 10) && (v = 0), ('y' === this.lockDirection || Math.abs(f) < 10) && (f = 0), (o && v) || f)) {
          var y = c._value + v,
            P = h._value + f,
            L = [];
          if (v)
            L.push(
              ReactNative.Animated.timing(c, {
                toValue: y,
                easing: ReactNative.Easing.elastic(0),
                duration: 100,
                useNativeDriver: false,
              })
            );
          if (f)
            L.push(
              ReactNative.Animated.timing(h, {
                toValue: P,
                easing: ReactNative.Easing.elastic(0),
                duration: 100,
                useNativeDriver: false,
              })
            );
          if (!l || l(c._value, h._value, y, P))
            ReactNative.Animated.parallel(L).start(function (n) {
              c.setValue(y);
              h.setValue(P);
              if (s) s(c._value, h._value, y, P);
              t.handleMagnetic();
            });
        } else this.handleMagnetic();
      },
    },
    {
      key: 'handleMagnetic',
      value: function () {
        var t = this.props,
          n = t.magnetic,
          o = t.maxScale,
          l = t.minScale,
          s = t.onDidTransform,
          u = t.onWillMagnetic,
          c = t.onDidMagnetic,
          h = this.state,
          v = h.translateX,
          f = h.translateY,
          y = h.scale,
          P = null,
          L = null,
          T = null;

        if (n) {
          var _ = this.contentLayout,
            w = _.x,
            M = _.y,
            S = _.width,
            R = _.height;

          if (S < this.initContentLayout.width || R < this.initContentLayout.height) {
            P = 0;
            L = 0;
            T = 1;
          } else {
            if (S < this.viewLayout.width) P = 0;
            else if (w > 0) P = v._value - w;
            else if (w + S < this.viewLayout.width) P = v._value + (this.viewLayout.width - (w + S));
            if (R < this.viewLayout.height) L = 0;
            else if (M > 0) L = f._value - M;
            else if (M + R < this.viewLayout.height) L = f._value + (this.viewLayout.height - (M + R));
          }
        }

        if (null === T) y._value > o ? (T = o) : y._value < l && (T = l);
        var D = [];

        if (
          (null !== P &&
            D.push(
              ReactNative.Animated.timing(v, {
                toValue: P,
                easing: ReactNative.Easing.elastic(0),
                duration: 200,
                useNativeDriver: false,
              })
            ),
          null !== L &&
            D.push(
              ReactNative.Animated.timing(f, {
                toValue: L,
                easing: ReactNative.Easing.elastic(0),
                duration: 200,
                useNativeDriver: false,
              })
            ),
          null !== T &&
            D.push(
              ReactNative.Animated.timing(y, {
                toValue: T,
                easing: ReactNative.Easing.elastic(0),
                duration: 200,
                useNativeDriver: false,
              })
            ),
          D.length > 0)
        ) {
          if (null === P) P = v._value;
          if (null === L) L = f._value;
          if (null === T) T = y._value;
          if (!u || u(v._value, f._value, y._value, P, L, T))
            ReactNative.Animated.parallel(D).start(function (t) {
              v.setValue(P);
              f.setValue(L);
              y.setValue(T);
              if (s) s(P, L, T);
              if (c) c(P, L, T);
            });
        }
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        module52.default(t, y);
        var t = this.props,
          n = t.style,
          l = this.state;
        n = ReactNative.StyleSheet.flatten(
          [
            {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            },
          ].concat(n)
        );
        return n;
      },
    },
    {
      key: 'buildContainerStyle',
      value: function () {
        var t = this.props.containerStyle,
          n = this.state,
          o = n.translateX,
          l = n.translateY,
          s = n.scale;
        t = [].concat(t).concat({
          transform: [
            {
              translateX: o,
            },
            {
              translateY: l,
            },
            {
              scale: s,
            },
          ],
        });
        return t;
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        this.viewLayout = t.nativeEvent.layout;
        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'renderContent',
      value: function () {
        return this.props.children;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = this.props,
          s = module52.default(l, P);
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {},
            s,
            {
              style: this.buildStyle(),
              onLayout: function (n) {
                return t.onLayout(n);
              },
              ref: 'view',
            },
            this.panResponder.panHandlers
          ),
          React.default.createElement(
            ReactNative.Animated.View,
            {
              style: this.buildContainerStyle(),
              ref: 'containerView',
              onLayout: function (n) {
                t.initContentLayout = n.nativeEvent.layout;
              },
            },
            this.renderContent()
          )
        );
      },
    },
  ]);
  return w;
})(React.Component);

exports.default = _;
_.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  containerStyle: ReactNative.ViewPropTypes.style,
  maxScale: PropTypes.default.number,
  minScale: PropTypes.default.number,
  inertial: PropTypes.default.bool,
  magnetic: PropTypes.default.bool,
  tension: PropTypes.default.bool,
  onWillTransform: PropTypes.default.func,
  onTransforming: PropTypes.default.func,
  onDidTransform: PropTypes.default.func,
  onWillInertialMove: PropTypes.default.func,
  onDidInertialMove: PropTypes.default.func,
  onWillMagnetic: PropTypes.default.func,
  onDidMagnetic: PropTypes.default.func,
  onPress: PropTypes.default.func,
  onLongPress: PropTypes.default.func,
});
_.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  inertial: true,
  magnetic: true,
  tension: true,
});
