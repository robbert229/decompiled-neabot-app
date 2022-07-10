require('prop-types');

require('./945');

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
    var u = h(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module985 = require('./985');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
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

var b = (function (t) {
  module35.default(b, t);

  var module11 = b,
    module985 = O(),
    h = function () {
      var t,
        u = module34.default(module11);

      if (module985) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, o);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function b() {
    module24.default(this, b);
    return h.apply(this, arguments);
  }

  module25.default(b, [
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props.icon;
        if (null === t || undefined === t) return module32.default(module34.default(b.prototype), 'renderTitle', this).call(this);
        var n = {
          tintColor: this.context.tintColor,
          width: 20,
          height: 20,
        };
        return React.default.createElement(ReactNative.Image, {
          style: n,
          source: t,
        });
      },
    },
  ]);
  return b;
})(module985.default);

exports.default = b;
b.propTypes = module11.default({}, module985.default.propTypes, {
  icon: ReactNative.Image.propTypes.source,
});
