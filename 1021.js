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
    var u = b(n);
    if (u && u.has(t)) return u.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (u) u.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  I = ['style', 'children', 'title', 'icon'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (b = function (t) {
    return t ? u : n;
  })(t);
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
  module35.default(T, t);

  var PropTypes = T,
    b = O(),
    P = function () {
      var t,
        n = module34.default(PropTypes);

      if (b) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function T() {
    module24.default(this, T);
    return P.apply(this, arguments);
  }

  module25.default(T, [
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            backgroundColor: module945.default.menuItemColor,
            paddingLeft: module945.default.menuItemPaddingLeft,
            paddingRight: module945.default.menuItemPaddingRight,
            paddingTop: module945.default.menuItemPaddingTop,
            paddingBottom: module945.default.menuItemPaddingBottom,
            borderColor: module945.default.menuItemSeparatorColor,
            borderTopWidth: module945.default.menuItemSeparatorWidth,
            flexDirection: 'row',
            alignItems: 'center',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderIcon',
      value: function () {
        var t = this.props.icon;

        if (('none' === t && (t = null), t && !React.default.isValidElement(t))) {
          var n = {
            width: module945.default.menuItemIconWidth,
            height: module945.default.menuItemIconHeight,
            tintColor: module945.default.menuItemIconColor,
          };
          t = React.default.createElement(
            ReactNative.View,
            {
              style: {
                paddingRight: module945.default.menuItemIconPaddingRight,
              },
            },
            React.default.createElement(ReactNative.Image, {
              style: n,
              source: 'empty' === t ? null : t,
            })
          );
        }

        return t;
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props.title;

        if ('string' == typeof t || 'number' == typeof t) {
          var n = {
            color: module945.default.menuItemTitleColor,
            fontSize: module945.default.menuItemFontSize,
            overflow: 'hidden',
            flexGrow: 1,
            flexShrink: 1,
          };
          t = React.default.createElement(
            ReactNative.Text,
            {
              style: n,
              numberOfLines: 1,
            },
            t
          );
        }

        return t;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          l = module52.default(t, I);
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          module11.default(
            {
              style: this.buildStyle(),
            },
            l
          ),
          this.renderIcon(),
          this.renderTitle()
        );
      },
    },
  ]);
  return T;
})(React.Component);

exports.default = P;
P.propTypes = module11.default({}, ReactNative.TouchableOpacity.propTypes, {
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  icon: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
    PropTypes.default.oneOf(['none', 'empty']),
  ]),
});
P.defaultProps = module11.default({}, ReactNative.TouchableOpacity.defaultProps, {
  icon: 'none',
});
