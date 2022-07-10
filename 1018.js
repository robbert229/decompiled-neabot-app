var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
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
    var l = O(o);
    if (l && l.has(t)) return l.get(t);
    var n = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(n, f, p);
        else n[f] = t[f];
      }

    n.default = t;
    if (l) l.set(t, n);
    return n;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  v = ['style', 'title', 'leftSeparator', 'rightSeparator'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    l = new WeakMap();
  return (O = function (t) {
    return t ? l : o;
  })(t);
}

function P() {
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

var S = (function (t) {
  module35.default(T, t);

  var PropTypes = T,
    O = P(),
    S = function () {
      var t,
        o = module34.default(PropTypes);

      if (O) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, l);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function T() {
    module24.default(this, T);
    return S.apply(this, arguments);
  }

  module25.default(T, [
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props.title;

        if ((t || '' === t || 0 === t) && !React.default.isValidElement(t)) {
          var o = {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: module945.default.apItemTitleColor,
            fontSize: module945.default.apItemFontSize,
          };
          t = React.default.createElement(
            ReactNative.Text,
            {
              style: o,
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
          module24 = t.style,
          u = t.leftSeparator,
          f = t.rightSeparator,
          p = module52.default(t, v);
        module24 = [
          {
            paddingVertical: module945.default.apItemPaddingVertical,
            paddingHorizontal: module945.default.apItemPaddingHorizontal,
            borderColor: module945.default.apSeparatorColor,
            borderLeftWidth: u ? module945.default.apSeparatorWidth : 0,
            borderRightWidth: f ? module945.default.apSeparatorWidth : 0,
          },
        ].concat(module24);
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          module11.default(
            {
              style: module24,
            },
            p
          ),
          this.renderTitle()
        );
      },
    },
  ]);
  return T;
})(React.Component);

exports.default = S;
S.propTypes = module11.default({}, ReactNative.TouchableOpacity.propTypes, {
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
  leftSeparator: PropTypes.default.bool,
  rightSeparator: PropTypes.default.bool,
});
S.defaultProps = module11.default({}, ReactNative.TouchableOpacity.defaultProps);
