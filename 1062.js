var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = w(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = w(require('react-native')),
  module945 = require('./945'),
  module1025 = require('./1025'),
  module960 = require('./960'),
  P = ['style', 'children', 'scene', 'autoKeyboardInsets', 'keyboardTopInsets'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function w(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = O(n);
  if (o && o.has(t)) return o.get(t);
  var u = {},
    s = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var c = s ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
      else u[l] = t[l];
    }

  u.default = t;
  if (o) o.set(t, u);
  return u;
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

var B = (function (t) {
  module35.default(w, t);

  var PropTypes = w,
    module1025 = T(),
    O = function () {
      var t,
        n = module34.default(PropTypes);

      if (module1025) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var n;
    module24.default(this, w);
    (n = O.call(this, t)).didMount = false;
    n.isFocused = false;
    n.state = {};
    return n;
  }

  module25.default(w, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;

        if (((this.didMount = true), !this.backListener && 'android' === ReactNative.Platform.OS)) {
          var n = ReactNative.default.BackHandler ? ReactNative.default.BackHandler : ReactNative.default.BackAndroid;
          this.backListener = n.addEventListener('hardwareBackPress', function () {
            return t.onHardwareBackPress();
          });
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.backListener) {
          this.backListener.remove();
          this.backListener = null;
        }

        this.didMount = false;
      },
    },
    {
      key: 'navigator',
      get: function () {
        if (this.context.navigator) return this.context.navigator();
        else {
          console.error('The root component is NOT TeaNavigator, then you can not use BasePage.navigator.');
          return null;
        }
      },
    },
    {
      key: 'onDidFocus',
      value: function () {
        this.isFocused = true;
      },
    },
    {
      key: 'onWillFocus',
      value: function () {},
    },
    {
      key: 'onHardwareBackPress',
      value: function () {
        if (!this.context.navigator) return false;
        var t = this.context.navigator();
        return !!t && t.getCurrentRoutes().length > 1 && (t.pop(), true);
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            flex: 1,
            backgroundColor: module945.default.pageColor,
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderPage',
      value: function () {
        return null;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.autoKeyboardInsets,
          s = t.keyboardTopInsets,
          l = module52.default(t, P);
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: this.buildStyle(),
            },
            l
          ),
          this.renderPage(),
          u
            ? React.default.createElement(module960.default, {
                topInsets: s,
              })
            : null
        );
      },
    },
  ]);
  return w;
})(React.Component);

exports.default = B;
B.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  scene: PropTypes.default.object,
  autoKeyboardInsets: PropTypes.default.bool,
  keyboardTopInsets: PropTypes.default.number,
});
B.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  scene: module1025.default.SceneConfigs.Replace,
  autoKeyboardInsets: 'ios' === ReactNative.Platform.OS,
  keyboardTopInsets: 0,
});
B.contextTypes = {
  navigator: PropTypes.default.func,
};
