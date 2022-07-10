var module11 = require('./11'),
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
    var o = y(n);
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
  ReactNative = require('react-native');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function h() {
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

var v = (function (t) {
  module35.default(O, t);

  var y = O,
    v = h(),
    b = function () {
      var t,
        n = module34.default(y);

      if (v) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    module24.default(this, O);
    return b.apply(this, arguments);
  }

  module25.default(O, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.lineHeight,
          u = t.color,
          l = t.style,
          f = t.contentStyle;
        return React.default.createElement(
          ReactNative.View,
          {
            style: module11.default(
              {
                backgroundColor: 'white',
              },
              f
            ),
          },
          React.default.createElement(ReactNative.View, {
            style: [
              {
                height: 0,
                borderTopWidth: o,
                borderColor: u,
                opacity: 0.7,
                margin: ReactNative.StyleSheet.hairlineWidth,
              },
              l,
            ],
          })
        );
      },
    },
  ]);
  return O;
})(React.PureComponent);

v.defaultProps = {
  lineHeight: ReactNative.StyleSheet.hairlineWidth,
  color: '#000',
  contentStyle: {},
};
var b = v;
exports.default = b;
