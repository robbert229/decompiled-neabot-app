(function (t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = v(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
      else o[c] = t[c];
    }

  o.default = t;
  if (u) u.set(t, o);
})(require('react'));

var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  PropTypes = require('prop-types'),
  module967 = require('./967');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
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

var O = (function (t) {
  module35.default(v, t);

  var module11 = v,
    PropTypes = h(),
    y = function () {
      var t,
        u = module34.default(module11);

      if (PropTypes) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, o);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    module24.default(this, v);
    return y.apply(this, arguments);
  }

  module25.default(v, [
    {
      key: 'renderAccessory',
      value: function () {
        if (arguments.length > 0 && undefined !== arguments[0]) arguments[0];
        return module32.default(module34.default(v.prototype), 'renderAccessory', this).call(this, this.props.selected ? 'check' : 'empty');
      },
    },
  ]);
  return v;
})(module967.default);

exports.default = O;
O.propTypes = module11.default({}, module967.default.propTypes, {
  selected: PropTypes.default.bool,
});
