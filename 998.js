require('./945');

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
    var u = h(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (c && (c.get || c.set)) Object.defineProperty(f, o, c);
        else f[o] = t[o];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  O = ['style'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
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
  module35.default(j, t);

  var PropTypes = j,
    h = b(),
    P = function () {
      var t,
        n = module34.default(PropTypes);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function j() {
    module24.default(this, j);
    return P.apply(this, arguments);
  }

  module25.default(j, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          module24 = t.style,
          l = module52.default(t, O);
        module24 = [
          {
            flex: 1,
          },
        ].concat(module24);
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: module24,
            },
            l
          )
        );
      },
    },
  ]);
  return j;
})(React.Component);

exports.default = P;
P.propTypes = {
  type: PropTypes.default.oneOf(['sheet', 'button']),
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
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
  iconContainerStyle: ReactNative.ViewPropTypes.style,
  badge: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.number]),
  onPress: PropTypes.default.func,
};
P.defaultProps = {
  type: 'sheet',
  active: false,
};
