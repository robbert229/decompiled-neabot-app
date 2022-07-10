var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = v(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
        else l[u] = t[u];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module818 = require('./818');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (v = function (t) {
    return t ? n : o;
  })(t);
}

function b() {
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

var T = {
  TOP: 40 + ('ios' === ReactNative.Platform.OS ? module818.getStatusBarHeight() : 0),
  BOTTOM: -40 - ('ios' === ReactNative.Platform.OS ? module818.getBottomSpace() : 0),
  CENTER: 0,
};
exports.position = T;
var w = {
  LONG: 3500,
  SHORT: 2e3,
};
exports.duration = w;

var S = (function (t) {
  module35.default(v, t);

  var module11 = v,
    PropTypes = b(),
    y = function () {
      var t,
        n = module34.default(module11);

      if (PropTypes) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    var t;
    module24.default(this, v);
    (t = y.apply(this, arguments)).animating = false;
    t.hideTimeout = null;
    t.showTimeout = null;

    t.show = function () {
      if ((clearTimeout(t.showTimeout), !t.animating)) {
        clearTimeout(t.hideTimeout);
        t.animating = true;
        var o = t.props,
          n = o.animation,
          l = o.animationDuration,
          s = o.duration;
        ReactNative.Animated.timing(t.state.opacity, {
          toValue: 1,
          duration: n ? l : 0,
          easing: ReactNative.Easing.out(ReactNative.Easing.ease),
          useNativeDriver: true,
        }).start(function (o) {
          var n = o.finished;

          if (n) {
            t.animating = !n;
            if (s > 0)
              t.hideTimeout = setTimeout(function () {
                return t.hide();
              }, s);
          }
        });
      }
    };

    t.hide = function () {
      if ((clearTimeout(t.showTimeout), clearTimeout(t.hideTimeout), !t.animating)) {
        var o = t.props,
          n = o.animation,
          l = o.animationDuration,
          s = o.onHidden;
        ReactNative.Animated.timing(t.state.opacity, {
          toValue: 0,
          duration: n ? l : 0,
          easing: ReactNative.Easing.in(ReactNative.Easing.ease),
          useNativeDriver: true,
        }).start(function (o) {
          if (o.finished) {
            t.animating = false;
            if (s) s(t.props.siblingManager);
          }
        });
      }
    };

    t.renderMaskToast = function (o) {
      var n = t.props,
        l = n.maskColor,
        s = n.maskStyle,
        u = n.onMaskPress;
      return React.default.createElement(
        ReactNative.TouchableWithoutFeedback,
        {
          onPress: function () {
            if (u) u();
          },
        },
        React.default.createElement(
          ReactNative.View,
          {
            style: [
              k.maskStyle,
              s,
              {
                backgroundColor: l || '',
              },
            ],
          },
          o
        )
      );
    };

    t.state = {
      visible: t.props.visible,
      opacity: new ReactNative.Animated.Value(0),
    };
    return t;
  }

  module25.default(v, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        if (this.state.visible)
          this.showTimeout = setTimeout(function () {
            return t.show();
          }, this.props.delay);
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        var o = this;

        if (t.visible !== this.props.visible) {
          if (t.visible) {
            clearTimeout(this.showTimeout);
            clearTimeout(this.hideTimeout);
            this.showTimeout = setTimeout(function () {
              return o.show();
            }, this.props.delay);
          } else this.hide();

          this.setState({
            visible: t.visible,
          });
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.hide();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.position,
          n =
            0 !== o
              ? o > 0
                ? {
                    top: o,
                  }
                : {
                    bottom: -o,
                  }
              : {
                  height: '100%',
                },
          l =
            this.state.visible || this.animating
              ? React.default.createElement(
                  ReactNative.View,
                  {
                    style: [k.defaultStyle, n],
                    pointerEvents: 'box-none',
                  },
                  React.default.createElement(
                    ReactNative.Animated.View,
                    {
                      style: [
                        k.containerStyle,
                        t.containerStyle,
                        {
                          opacity: this.state.opacity,
                        },
                        t.shadow && k.shadowStyle,
                        t.shadowColor && {
                          shadowColor: t.shadowColor,
                        },
                      ],
                      pointerEvents: 'none',
                    },
                    t.imgSource &&
                      React.default.createElement(ReactNative.Image, {
                        resizeMode: 'contain',
                        style: t.imgStyle,
                        source: t.imgSource,
                      }),
                    t.loading &&
                      React.default.createElement(ReactNative.ActivityIndicator, {
                        color: '#fff',
                        size: t.indicatorSize,
                      }),
                    t.showText &&
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            k.textStyle,
                            t.textStyle,
                            t.textColor && {
                              color: t.textColor,
                            },
                          ],
                        },
                        this.props.children
                      )
                  )
                )
              : null;
        return t.mask ? this.renderMaskToast(l) : l;
      },
    },
  ]);
  return v;
})(React.Component);

S.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  containerStyle: ReactNative.ViewPropTypes.style,
  duration: PropTypes.default.number,
  delay: PropTypes.default.number,
  animationDuration: PropTypes.default.number,
  visible: PropTypes.default.bool,
  position: PropTypes.default.number,
  animation: PropTypes.default.bool,
  shadow: PropTypes.default.bool,
  shadowColor: PropTypes.default.string,
  showText: PropTypes.default.bool,
  textColor: PropTypes.default.string,
  textStyle: ReactNative.Text.propTypes.style,
  mask: PropTypes.default.bool,
  maskColor: PropTypes.default.string,
  maskStyle: ReactNative.ViewPropTypes.style,
  imgSource: PropTypes.default.any,
  imgStyle: ReactNative.Image.propTypes.style,
  loading: PropTypes.default.bool,
  indicatorSize: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
  onHidden: PropTypes.default.func,
  onMaskPress: PropTypes.default.func,
});
S.defaultProps = {
  visible: false,
  duration: w.SHORT,
  animationDuration: 200,
  animation: true,
  position: T.BOTTOM,
  delay: 0,
  showText: true,
  indicatorSize: 'large',
};
var k = ReactNative.StyleSheet.create({
    defaultStyle: {
      position: 'absolute',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerStyle: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.85)',
      borderRadius: 5,
    },
    shadowStyle: {
      shadowColor: '#000',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.8,
      shadowRadius: 6,
      elevation: 10,
    },
    textStyle: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
    },
    maskStyle: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
  }),
  O = S;
exports.default = O;
