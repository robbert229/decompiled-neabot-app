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
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  v = ['style', 'children'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
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
  module35.default(j, t);

  var PropTypes = j,
    b = O(),
    P = function () {
      var t,
        n = module34.default(PropTypes);

      if (b) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function j() {
    module24.default(this, j);
    return P.apply(this, arguments);
  }

  module25.default(j, [
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            paddingLeft: 6,
            paddingRight: 6,
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        return this.props.children;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          module24 = t.style,
          l = module52.default(t, v);
        module24 = this.buildStyle();
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          module11.default(
            {
              style: module24,
            },
            l
          ),
          this.renderTitle()
        );
      },
    },
  ]);
  return j;
})(React.Component);

exports.default = P;
P.propTypes = {};
P.defaultProps = {
  hitSlop: {
    top: 12,
    bottom: 12,
    left: 8,
    right: 8,
  },
};
P.contextTypes = {
  tintColor: PropTypes.default.string,
};
