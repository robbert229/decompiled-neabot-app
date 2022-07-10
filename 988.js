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
  module945 = require('./945'),
  module985 = require('./985');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
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

var w = (function (t) {
  module35.default(b, t);

  var module11 = b,
    PropTypes = P(),
    O = function () {
      var t,
        o = module34.default(module11);

      if (PropTypes) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function b() {
    module24.default(this, b);
    return O.apply(this, arguments);
  }

  module25.default(b, [
    {
      key: 'buildStyle',
      value: function () {
        return module32.default(module34.default(b.prototype), 'buildStyle', this).call(this).concat({
          paddingLeft: 0,
          paddingTop: 8,
          paddingBottom: 8,
        });
      },
    },
    {
      key: 'renderTitle',
      value: function () {
        var t = this.props,
          n = t.title,
          o = t.icon,
          u = {
            color: this.context.tintColor,
            fontSize: module945.default.navButtonFontSize,
            overflow: 'hidden',
          },
          l = {
            tintColor: this.context.tintColor,
            width: 20,
            height: 20,
          };
        return [
          React.default.createElement(ReactNative.Image, {
            key: 'icon',
            style: l,
            source: o,
          }),
          React.default.createElement(
            ReactNative.Text,
            {
              key: 'title',
              style: u,
              numberOfLines: 1,
              allowFontScaling: false,
            },
            n
          ),
        ];
      },
    },
  ]);
  return b;
})(module985.default);

exports.default = w;
w.propTypes = module11.default({}, module985.default.propTypes, {
  title: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
  icon: ReactNative.Image.propTypes.source,
});
w.defaultProps = module11.default({}, module985.default.defaultProps, {
  icon: require('./989'),
});
