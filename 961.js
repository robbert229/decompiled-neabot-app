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
    var o = k(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module958 = require('./958'),
  module959 = require('./959');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (k = function (t) {
    return t ? o : n;
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

var O = (function (t) {
  module35.default(O, t);

  var PropTypes = O,
    module959 = V(),
    k = function () {
      var t,
        n = module34.default(PropTypes);

      if (module959) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O(t) {
    var u;
    module24.default(this, O);
    (u = k.call(this, t)).viewLayout = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    module11.default(u.state, {
      marginValue: new ReactNative.Animated.Value(0),
      showed: false,
    });
    return u;
  }

  module25.default(O, [
    {
      key: 'appearAnimates',
      get: function () {
        var t = module32.default(module34.default(O.prototype), 'appearAnimates', this);
        t.push(
          ReactNative.Animated.spring(this.state.marginValue, {
            toValue: 0,
            friction: 9,
            useNativeDriver: false,
          })
        );
        return t;
      },
    },
    {
      key: 'disappearAnimates',
      get: function () {
        var t = module32.default(module34.default(O.prototype), 'disappearAnimates', this);
        t.push(
          ReactNative.Animated.spring(this.state.marginValue, {
            toValue: this.marginSize,
            friction: 9,
            useNativeDriver: false,
          })
        );
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
      key: 'marginSize',
      get: function () {
        var t = this.props.side;
        return 'left' === t || 'right' === t ? -this.viewLayout.width : -this.viewLayout.height;
      },
    },
    {
      key: 'rootTransformValue',
      get: function () {
        var t = this.props,
          n = t.side,
          o = t.rootTransform;
        if (!o || 'none' === o) return [];

        switch (o) {
          case 'translate':
            switch (n) {
              case 'top':
                return [
                  {
                    translateY: this.viewLayout.height,
                  },
                ];

              case 'left':
                return [
                  {
                    translateX: this.viewLayout.width,
                  },
                ];

              case 'right':
                return [
                  {
                    translateX: -this.viewLayout.width,
                  },
                ];

              default:
                return [
                  {
                    translateY: -this.viewLayout.height,
                  },
                ];
            }

            break;

          case 'scale':
            return [
              {
                scaleX: module945.default.overlayRootScale,
              },
              {
                scaleY: module945.default.overlayRootScale,
              },
            ];

          default:
            return o;
        }
      },
    },
    {
      key: 'appear',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.animated;
        if (t) this.state.marginValue.setValue(this.marginSize);
        module32.default(module34.default(O.prototype), 'appear', this).call(this, t);
        var n = this.props.rootTransform;
        if (n && 'none' !== n) module958.default.transform(this.rootTransformValue, t);
      },
    },
    {
      key: 'disappear',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.animated,
          n = this.props.rootTransform;
        if (n && 'none' !== n) module958.default.restore(t);
        module32.default(module34.default(O.prototype), 'disappear', this).call(this, t);
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
      key: 'buildStyle',
      value: function () {
        var t;

        switch (this.props.side) {
          case 'top':
            t = {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
            };
            break;

          case 'left':
            t = {
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
            };
            break;

          case 'right':
            t = {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'stretch',
            };
            break;

          default:
            t = {
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'stretch',
            };
        }

        return module32.default(module34.default(O.prototype), 'buildStyle', this).call(this).concat(t);
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t,
          n = this,
          o = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null,
          u = this.props,
          s = u.side,
          module35 = u.containerStyle,
          f = u.children;

        switch (s) {
          case 'top':
            t = {
              marginTop: this.state.marginValue,
            };
            break;

          case 'left':
            t = {
              marginLeft: this.state.marginValue,
            };
            break;

          case 'right':
            t = {
              marginRight: this.state.marginValue,
            };
            break;

          default:
            t = {
              marginBottom: this.state.marginValue,
            };
        }

        t.opacity = this.state.showed ? 1 : 0;
        module35 = [
          {
            backgroundColor: module945.default.defaultColor,
          },
        ]
          .concat(module35)
          .concat(t);
        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: module35,
            onLayout: function (t) {
              return n.onLayout(t);
            },
          },
          o || f
        );
      },
    },
  ]);
  return O;
})(module959.default);

exports.default = O;
O.propTypes = module11.default({}, module959.default.propTypes, {
  side: PropTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  containerStyle: ReactNative.ViewPropTypes.style,
  rootTransform: PropTypes.default.oneOfType([
    PropTypes.default.oneOf(['none', 'translate', 'scale']),
    PropTypes.default.arrayOf(
      PropTypes.default.shape({
        translateX: PropTypes.default.number,
        translateY: PropTypes.default.number,
        scaleX: PropTypes.default.number,
        scaleY: PropTypes.default.number,
      })
    ),
  ]),
});
O.defaultProps = module11.default({}, module959.default.defaultProps, {
  side: 'bottom',
  animated: true,
  rootTransform: 'none',
});
