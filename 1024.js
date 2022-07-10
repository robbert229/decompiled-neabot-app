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
    var o = P(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module957 = require('./957');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
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

var x = (function (t) {
  module35.default(x, t);

  var PropTypes = x,
    module957 = b(),
    P = function () {
      var t,
        n = module34.default(PropTypes);

      if (module957) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function x(t) {
    var module25;
    module24.default(this, x);
    module25 = P.call(this, t);
    module11.default(module25.state, {
      text: t.text,
    });
    return module25;
  }

  module25.default(x, [
    {
      key: 'text',
      get: function () {
        return this.state.text;
      },
      set: function (t) {
        this.setState({
          text: t,
        });
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props,
          n = t.position;
        return [
          {
            paddingLeft: module945.default.miScreenPaddingLeft,
            paddingRight: module945.default.miScreenPaddingRight,
            paddingTop: module945.default.miScreenPaddingTop,
            paddingBottom: module945.default.miScreenPaddingBottom,
            justifyContent: 'top' === n ? 'flex-start' : 'bottom' === n ? 'flex-end' : 'center',
            alignItems: 'center',
          },
        ].concat(module32.default(module34.default(x.prototype), 'buildStyle', this).call(this));
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t = this.props,
          n = t.size,
          o = t.color,
          l = this.state.text;
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              alignItems: 'center',
            },
          },
          React.default.createElement(ReactNative.ActivityIndicator, {
            size: n,
            color: o || module945.default.miIndicatorColor,
          }),
          React.default.isValidElement(l)
            ? l
            : React.default.createElement(
                ReactNative.Text,
                {
                  style: {
                    color: module945.default.miTextColor,
                    fontSize: module945.default.miFontSize,
                    paddingTop: module945.default.miTextPaddingTop,
                  },
                },
                l
              )
        );
      },
    },
  ]);
  return x;
})(module957.default.View);

exports.default = x;
x.propTypes = module11.default({}, module957.default.View.propTypes, {
  text: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  position: PropTypes.default.oneOf(['top', 'bottom', 'center']),
  size: PropTypes.default.oneOfType([PropTypes.default.oneOf(['small', 'large']), PropTypes.default.number]),
  color: PropTypes.default.string,
});
x.defaultProps = module11.default({}, module957.default.View.defaultProps, {
  modal: true,
  position: 'center',
  size: 'large',
});
