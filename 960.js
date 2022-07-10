var module24 = require('./24'),
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
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(s, f, l);
        else s[f] = t[f];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

function y() {
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

var b = (function (t) {
  module35.default(k, t);

  var PropTypes = k,
    p = y(),
    b = function () {
      var t,
        n = module34.default(PropTypes);

      if (p) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k(t) {
    var o;
    module24.default(this, k);
    (o = b.call(this, t)).showListener = null;
    o.hideListener = null;
    o.state = {
      keyboardHeight: 0,
    };
    return o;
  }

  module25.default(k, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;

        if (!this.showListener) {
          var n = 'ios' === ReactNative.Platform.OS ? 'keyboardWillShow' : 'keyboardDidShow';
          this.showListener = ReactNative.Keyboard.addListener(n, function (n) {
            return t.onKeyboardShow(n);
          });
        }

        if (!this.hideListener) {
          var o = 'ios' === ReactNative.Platform.OS ? 'keyboardWillHide' : 'keyboardDidHide';
          this.hideListener = ReactNative.Keyboard.addListener(o, function () {
            return t.onKeyboardHide();
          });
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.showListener) {
          this.showListener.remove();
          this.showListener = null;
        }

        if (this.hideListener) {
          this.hideListener.remove();
          this.hideListener = null;
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t, n) {
        if (n.keyboardHeight !== this.state.keyboardHeight)
          ReactNative.LayoutAnimation.configureNext({
            duration: 500,
            create: {
              duration: 300,
              type: ReactNative.LayoutAnimation.Types.easeInEaseOut,
              property: ReactNative.LayoutAnimation.Properties.opacity,
            },
            update: {
              type: ReactNative.LayoutAnimation.Types.spring,
              springDamping: 200,
            },
          });
      },
    },
    {
      key: 'onKeyboardShow',
      value: function (t) {
        if (t && t.endCoordinates && t.endCoordinates.height) {
          var n = t.endCoordinates.height + (this.props.topInsets ? this.props.topInsets : 0);
          this.setState({
            keyboardHeight: n,
          });
        }
      },
    },
    {
      key: 'onKeyboardHide',
      value: function () {
        this.setState({
          keyboardHeight: 0,
        });
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(ReactNative.View, {
          style: [
            v.keyboardSpace,
            {
              height: this.state.keyboardHeight,
            },
          ],
        });
      },
    },
  ]);
  return k;
})(React.Component);

exports.default = b;
b.propTypes = {
  topInsets: PropTypes.default.number,
};
b.defaultProps = {
  topInsets: 0,
};
var v = ReactNative.StyleSheet.create({
  keyboardSpace: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
