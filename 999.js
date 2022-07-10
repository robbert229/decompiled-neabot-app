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
    var l = B(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, c, f);
        else o[c] = t[c];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module982 = require('./982'),
  T = ['style', 'children', 'title', 'titleStyle', 'activeTitleStyle', 'icon', 'activeIcon', 'active', 'iconContainerStyle', 'badge'];

function B(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (B = function (t) {
    return t ? l : n;
  })(t);
}

function S() {
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
  module35.default(C, t);

  var PropTypes = C,
    B = S(),
    O = function () {
      var t,
        n = module34.default(PropTypes);

      if (B) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function C() {
    module24.default(this, C);
    return O.apply(this, arguments);
  }

  module25.default(C, [
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            width: module945.default.tvBarBtnWidth,
            overflow: 'visible',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderIcon',
      value: function () {
        var t = this.props,
          n = t.icon,
          l = t.activeIcon,
          o = t.active,
          module25 = t.iconContainerStyle;
        if ((o && null !== l && undefined !== l && (n = l), null === n || undefined === n)) return n;

        if (!React.default.isValidElement(n)) {
          var c = {
            width: module945.default.tvBarBtnIconSize,
            height: module945.default.tvBarBtnIconSize,
            tintColor: o ? module945.default.tvBarBtnIconActiveTintColor : module945.default.tvBarBtnIconTintColor,
          };
          n = React.default.createElement(ReactNative.Image, {
            style: c,
            source: n,
          });
        }

        module25 = [
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ].concat(module25);
        return React.default.createElement(
          ReactNative.View,
          {
            style: module25,
          },
          n
        );
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t,
          n = this.props,
          l = n.title,
          o = n.titleStyle,
          u = n.activeTitleStyle,
          c = n.active;
        if (null === l || undefined === l || React.default.isValidElement(l)) return l;
        else {
          t = c
            ? [
                {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  color: module945.default.tvBarBtnActiveTitleColor,
                  fontSize: module945.default.tvBarBtnActiveTextFontSize,
                },
              ]
                .concat(o)
                .concat(u)
            : [
                {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  color: module945.default.tvBarBtnTitleColor,
                  fontSize: module945.default.tvBarBtnTextFontSize,
                },
              ].concat(o);
          return React.default.createElement(
            ReactNative.Text,
            {
              style: t,
              numberOfLines: 1,
            },
            l
          );
        }
      },
    },
    {
      key: 'renderBadge',
      value: function () {
        var t = this.props.badge;
        if (!t || React.default.isValidElement(t)) return t;
        return React.default.createElement(module982.default, {
          style: {
            position: 'absolute',
            right: 0,
            top: 0,
          },
          count: t,
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = module52.default(t, T);
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          module11.default(
            {
              style: this.buildStyle(),
            },
            o
          ),
          this.renderIcon(),
          this.renderTitle(),
          this.renderBadge()
        );
      },
    },
  ]);
  return C;
})(React.Component);

exports.default = O;
O.propTypes = module11.default({}, ReactNative.TouchableOpacity.propTypes, {
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  titleStyle: ReactNative.Text.propTypes.style,
  activeTitleStyle: ReactNative.Text.propTypes.style,
  icon: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
  ]),
  activeIcon: PropTypes.default.oneOfType([
    PropTypes.default.element,
    PropTypes.default.shape({
      uri: PropTypes.default.string,
    }),
    PropTypes.default.number,
  ]),
  active: PropTypes.default.bool,
  iconContainerStyle: ReactNative.ViewPropTypes.style,
  badge: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.number]),
});
O.defaultProps = module11.default({}, ReactNative.TouchableOpacity.defaultProps, {
  active: false,
});
