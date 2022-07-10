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
    var o = x(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  O = ['style', 'text', 'children'];

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (x = function (t) {
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

var P = (function (t) {
  module35.default(T, t);

  var PropTypes = T,
    x = b(),
    P = function () {
      var t,
        n = module34.default(PropTypes);

      if (x) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function T() {
    module24.default(this, T);
    return P.apply(this, arguments);
  }

  module25.default(T, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          module24 = t.style,
          f = t.text,
          l = t.children,
          c = module52.default(t, O);
        module24 = [
          {
            flex: 1,
            paddingLeft: 4,
            paddingRight: 4,
            textAlign: 'center',
            overflow: 'hidden',
            color: this.context.tintColor,
            fontSize: module945.default.navTitleFontSize,
          },
        ].concat(module24);
        return React.default.createElement(
          ReactNative.Text,
          module11.default(
            {
              style: module24,
            },
            c
          ),
          null === f || undefined === f ? l : f
        );
      },
    },
  ]);
  return T;
})(React.Component);

exports.default = P;
P.propTypes = module11.default({}, ReactNative.Text.propTypes, {
  text: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
});
P.defaultProps = module11.default({}, ReactNative.Text.defaultProps, {
  numberOfLines: 1,
  allowFontScaling: false,
});
P.contextTypes = {
  tintColor: PropTypes.default.string,
};
