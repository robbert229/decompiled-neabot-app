var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = b(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = b(require('react-native')),
  module945 = require('./945'),
  module960 = require('./960');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (k = function (t) {
    return t ? o : n;
  })(t);
}

function b(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = k(n);
  if (o && o.has(t)) return o.get(t);
  var s = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var u in t)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
      var p = l ? Object.getOwnPropertyDescriptor(t, u) : null;
      if (p && (p.get || p.set)) Object.defineProperty(s, u, p);
      else s[u] = t[u];
    }

  s.default = t;
  if (o) o.set(t, s);
  return s;
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

var P = (function (t) {
  module35.default(P, t);

  var PropTypes = P,
    k = O(),
    b = function () {
      var t,
        n = module34.default(PropTypes);

      if (k) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P(t) {
    var n;
    module24.default(this, P);
    (n = b.call(this, t)).panResponder = ReactNative.PanResponder.create({
      onStartShouldSetPanResponder: function (t, n) {
        return true;
      },
      onPanResponderGrant: function (t, o) {
        return (n.touchStateID = o.stateID);
      },
      onPanResponderRelease: function (t, o) {
        return n.touchStateID == o.stateID ? n.closeRequest() : null;
      },
    });
    n.state = {
      overlayOpacity: new ReactNative.Animated.Value(0),
    };
    return n;
  }

  module25.default(P, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;

        if ((this.appearAfterMount && this.appear(), 'android' === ReactNative.Platform.OS)) {
          var n = ReactNative.default.BackHandler ? ReactNative.default.BackHandler : ReactNative.default.BackAndroid;
          this.backListener = n.addEventListener('hardwareBackPress', function () {
            return !!t.props.closeOnHardwareBackPress && (t.closeRequest(), true);
          });
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.removeBackListener();
      },
    },
    {
      key: 'removeBackListener',
      value: function () {
        if (this.backListener) {
          this.backListener.remove();
          this.backListener = null;
        }
      },
    },
    {
      key: 'overlayOpacity',
      get: function () {
        var t = this.props.overlayOpacity;
        return t || 0 === t ? t : module945.default.overlayOpacity;
      },
    },
    {
      key: 'appearAnimates',
      get: function () {
        return [
          ReactNative.Animated.timing(this.state.overlayOpacity, {
            toValue: this.overlayOpacity,
            duration: 200,
            useNativeDriver: false,
          }),
        ];
      },
    },
    {
      key: 'disappearAnimates',
      get: function () {
        return [
          ReactNative.Animated.timing(this.state.overlayOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ];
      },
    },
    {
      key: 'appearAfterMount',
      get: function () {
        return true;
      },
    },
    {
      key: 'overlayPointerEvents',
      get: function () {
        return this.props.overlayPointerEvents;
      },
    },
    {
      key: 'appear',
      value: function () {
        var t = this,
          n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.animated,
          o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;

        if (n) {
          this.state.overlayOpacity.setValue(0);
          ReactNative.Animated.parallel(this.appearAnimates.concat(o)).start(function (n) {
            return t.appearCompleted();
          });
        } else {
          this.state.overlayOpacity.setValue(this.overlayOpacity);
          this.appearCompleted();
        }
      },
    },
    {
      key: 'disappear',
      value: function () {
        var t = this,
          n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.animated,
          o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;

        if (n) {
          ReactNative.Animated.parallel(this.disappearAnimates.concat(o)).start(function (n) {
            return t.disappearCompleted();
          });
          this.state.overlayOpacity.addListener(function (n) {
            if (n.value < 0.01) {
              t.state.overlayOpacity.stopAnimation();
              t.state.overlayOpacity.removeAllListeners();
            }
          });
        } else this.disappearCompleted();
      },
    },
    {
      key: 'appearCompleted',
      value: function () {
        var t = this.props.onAppearCompleted;
        if (t) t();
      },
    },
    {
      key: 'disappearCompleted',
      value: function () {
        var t = this.props.onDisappearCompleted;
        if (t) t();
      },
    },
    {
      key: 'close',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.animated;
        return !!this.closed || ((this.closed = true), this.removeBackListener(), this.disappear(t), true);
      },
    },
    {
      key: 'closeRequest',
      value: function () {
        var t = this.props,
          n = t.modal,
          o = t.onCloseRequest;
        if (o) o(this);
        else if (!n) this.close();
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            flex: 1,
          },
        ].concat(t);
        return t;
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
        var t = this.props.autoKeyboardInsets;
        return React.default.createElement(
          ReactNative.View,
          {
            style: C.screen,
            pointerEvents: this.overlayPointerEvents,
          },
          React.default.createElement(
            ReactNative.Animated.View,
            module11.default(
              {
                style: [
                  C.screen,
                  {
                    backgroundColor: '#000',
                    opacity: this.state.overlayOpacity,
                  },
                ],
              },
              this.panResponder.panHandlers
            )
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: this.buildStyle(),
              pointerEvents: 'box-none',
            },
            this.renderContent()
          ),
          t ? React.default.createElement(module960.default, null) : null
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = P;
P.propTypes = {
  style: ReactNative.ViewPropTypes.style,
  modal: PropTypes.default.bool,
  animated: PropTypes.default.bool,
  overlayOpacity: PropTypes.default.number,
  overlayPointerEvents: ReactNative.ViewPropTypes.pointerEvents,
  autoKeyboardInsets: PropTypes.default.bool,
  closeOnHardwareBackPress: PropTypes.default.bool,
  onAppearCompleted: PropTypes.default.func,
  onDisappearCompleted: PropTypes.default.func,
  onCloseRequest: PropTypes.default.func,
};
P.defaultProps = {
  modal: false,
  animated: false,
  overlayPointerEvents: 'auto',
  autoKeyboardInsets: false,
  closeOnHardwareBackPress: true,
};
var C = ReactNative.StyleSheet.create({
  screen: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
