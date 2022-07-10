var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = w(n);
    if (u && u.has(t)) return u.get(t);
    var s = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, l, c);
        else s[l] = t[l];
      }

    s.default = t;
    if (u) u.set(t, s);
    return s;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module959 = require('./959');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (w = function (t) {
    return t ? u : n;
  })(t);
}

function V() {
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

var A = (function (t) {
  module35.default(A, t);

  var PropTypes = A,
    module959 = V(),
    w = function () {
      var t,
        n = module34.default(PropTypes);

      if (module959) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function A(t) {
    var s;
    module24.default(this, A);
    (s = w.call(this, t)).viewLayout = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    module11.default(s.state, {
      opacity: new ReactNative.Animated.Value(1),
      translateX: new ReactNative.Animated.Value(0),
      translateY: new ReactNative.Animated.Value(0),
      scaleX: new ReactNative.Animated.Value(1),
      scaleY: new ReactNative.Animated.Value(1),
      showed: false,
    });
    return s;
  }

  module25.default(A, [
    {
      key: 'appearAnimates',
      get: function () {
        var t = module32.default(module34.default(A.prototype), 'appearAnimates', this);
        t = t.concat([
          ReactNative.Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(this.state.translateX, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(this.state.translateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(this.state.scaleX, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(this.state.scaleY, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }),
        ]);
        return t;
      },
    },
    {
      key: 'disappearAnimates',
      get: function () {
        var t = module32.default(module34.default(A.prototype), 'disappearAnimates', this),
          n = this.fromTransform;
        t = t.concat([
          ReactNative.Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(this.state.translateX, {
            toValue: n.translateX,
            duration: 200,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(this.state.translateY, {
            toValue: n.translateY,
            duration: 200,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(this.state.scaleX, {
            toValue: n.scaleX,
            duration: 200,
            useNativeDriver: false,
          }),
          ReactNative.Animated.timing(this.state.scaleY, {
            toValue: n.scaleY,
            duration: 200,
            useNativeDriver: false,
          }),
        ]);
        return t;
      },
    },
    {
      key: 'appearAfterMount',
      get: function () {
        return false;
      },
    },
    {
      key: 'fromBounds',
      get: function () {
        var t,
          n = this.props,
          u = n.type,
          s = n.customBounds;
        if (('custom' !== u || s || console.error('OverlayPopView: customBounds can not be null when type is "custom"'), 'custom' === u && s)) t = s;
        else {
          var o = 'zoomIn' === u ? 0.3 : 1.2,
            l = this.viewLayout,
            c = l.x,
            f = l.y,
            h = l.width,
            p = l.height;
          t = {
            x: c - (h * o - h) / 2,
            y: f - (p * o - p) / 2,
            width: h * o,
            height: p * o,
          };
        }
        return t;
      },
    },
    {
      key: 'fromTransform',
      get: function () {
        var t = this.fromBounds,
          n = this.viewLayout;
        return {
          translateX: t.x + t.width / 2 - (n.x + n.width / 2),
          translateY: t.y + t.height / 2 - (n.y + n.height / 2),
          scaleX: t.width / n.width,
          scaleY: t.height / n.height,
        };
      },
    },
    {
      key: 'appear',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.animated;

        if (t) {
          var n = this.state,
            u = n.opacity,
            s = n.translateX,
            l = n.translateY,
            c = n.scaleX,
            h = n.scaleY,
            p = this.fromTransform;
          u.setValue(0);
          s.setValue(p.translateX);
          l.setValue(p.translateY);
          c.setValue(p.scaleX);
          h.setValue(p.scaleY);
        }

        module32.default(module34.default(A.prototype), 'appear', this).call(this, t);
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        this.viewLayout = t.nativeEvent.layout;

        if (!this.state.showed) {
          this.setState({
            showed: true,
          });
          this.appear();
        }
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t = this,
          n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null,
          u = this.props,
          module25 = u.containerStyle,
          o = u.children,
          l = this.state,
          c = l.opacity,
          f = l.translateX,
          p = l.translateY,
          v = l.scaleX,
          w = l.scaleY;
        module25 = [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            minWidth: 1,
            minHeight: 1,
          },
        ]
          .concat(module25)
          .concat({
            opacity: this.state.showed ? c : 0,
            transform: [
              {
                translateX: f,
              },
              {
                translateY: p,
              },
              {
                scaleX: v,
              },
              {
                scaleY: w,
              },
            ],
          });
        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: module25,
            pointerEvents: 'box-none',
            onLayout: function (n) {
              return t.onLayout(n);
            },
          },
          n || o
        );
      },
    },
  ]);
  return A;
})(module959.default);

exports.default = A;
A.propTypes = module11.default({}, module959.default.propTypes, {
  type: PropTypes.default.oneOf(['zoomOut', 'zoomIn', 'custom']),
  containerStyle: ReactNative.ViewPropTypes.style,
  customBounds: PropTypes.default.shape({
    x: PropTypes.default.number.isRequired,
    y: PropTypes.default.number.isRequired,
    width: PropTypes.default.number.isRequired,
    height: PropTypes.default.number.isRequired,
  }),
});
A.defaultProps = module11.default({}, module959.default.defaultProps, {
  type: 'zoomOut',
  animated: true,
});
