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
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, f, s);
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

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function k() {
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

var module1012 = (function (t) {
  module35.default(b, t);

  var module11 = b,
    PropTypes = k(),
    P = function () {
      var t,
        o = module34.default(module11);

      if (PropTypes) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, l);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function b() {
    module24.default(this, b);
    return P.apply(this, arguments);
  }

  module25.default(b, [
    {
      key: 'overlayPointerEvents',
      get: function () {
        var t = this.props,
          n = t.overlayPointerEvents;
        return t.modal ? 'auto' : n;
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props,
          n = t.position;
        return [
          {
            paddingLeft: module945.default.toastScreenPaddingLeft,
            paddingRight: module945.default.toastScreenPaddingRight,
            paddingTop: module945.default.toastScreenPaddingTop,
            paddingBottom: module945.default.toastScreenPaddingBottom,
            justifyContent: 'top' === n ? 'flex-start' : 'bottom' === n ? 'flex-end' : 'center',
            alignItems: 'center',
          },
        ].concat(module32.default(module34.default(b.prototype), 'buildStyle', this).call(this));
      },
    },
    {
      key: 'renderIcon',
      value: function () {
        var t,
          n = this.props.icon;
        if (!n && 0 !== n) return null;
        if (React.default.isValidElement(n)) t = n;
        else {
          var o;
          if ('string' == typeof n)
            switch (n) {
              case 'success':
                o = require('./1007');
                break;

              case 'fail':
                o = require('./1008');
                break;

              case 'smile':
                o = require('./1009');
                break;

              case 'sad':
                o = require('./1010');
                break;

              case 'info':
                o = require('./1011');
                break;

              case 'stop':
                o = require('./1012');
                break;

              default:
                o = null;
            }
          else o = n;
          t = React.default.createElement(ReactNative.Image, {
            style: {
              width: module945.default.toastIconWidth,
              height: module945.default.toastIconHeight,
              tintColor: module945.default.toastIconTintColor,
            },
            source: o,
          });
        }
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              paddingTop: module945.default.toastIconPaddingTop,
              paddingBottom: module945.default.toastIconPaddingBottom,
            },
          },
          t
        );
      },
    },
    {
      key: 'renderText',
      value: function () {
        var t = this.props.text;
        if (!('string' != typeof t && 'number' != typeof t))
          t = React.default.createElement(
            ReactNative.Text,
            {
              style: {
                color: module945.default.toastTextColor,
                fontSize: module945.default.toastFontSize,
              },
            },
            t
          );
        return t;
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t = {
          backgroundColor: module945.default.toastColor,
          paddingLeft: module945.default.toastPaddingLeft,
          paddingRight: module945.default.toastPaddingRight,
          paddingTop: module945.default.toastPaddingTop,
          paddingBottom: module945.default.toastPaddingBottom,
          borderRadius: module945.default.toastBorderRadius,
          alignItems: 'center',
        };
        return React.default.createElement(
          ReactNative.View,
          {
            style: t,
          },
          this.renderIcon(),
          this.renderText()
        );
      },
    },
  ]);
  return b;
})(module957.default.View);

exports.default = module1012;
module1012.propTypes = module11.default({}, module957.default.View.propTypes, {
  text: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  icon: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
    PropTypes.default.oneOf(['none', 'success', 'fail', 'smile', 'sad', 'info', 'stop']),
  ]),
  position: PropTypes.default.oneOf(['top', 'bottom', 'center']),
});
module1012.defaultProps = module11.default({}, module957.default.View.defaultProps, {
  overlayOpacity: 0,
  overlayPointerEvents: 'none',
  closeOnHardwareBackPress: false,
  position: 'center',
});
