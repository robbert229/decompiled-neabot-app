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
    var o = w(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, f, s);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  v = ['index', 'slideStyle', 'children'];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
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

var b = (function (t) {
  module35.default(b, t);

  var module11 = b,
    PropTypes = P(),
    w = function () {
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
    return w.apply(this, arguments);
  }

  module25.default(b, [
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props,
          u = n.index,
          l = n.slideStyle,
          f = n.children,
          s = module52.default(n, v);
        if (!(f instanceof Array)) f = f ? [f] : [];
        if (!(this.slideShowns && this.slideShowns.length === f.length))
          this.slideShowns = f.map(function (t) {
            return false;
          });
        return React.default.createElement(
          ReactNative.View,
          s,
          f.map(function (n, o) {
            var f = o == u;
            if (f) t.slideShowns[o] = true;
            var s = [
              l,
              O.slide,
              {
                opacity: f ? 1 : 0,
              },
            ];
            return React.default.createElement(
              ReactNative.View,
              {
                key: o,
                style: s,
                pointerEvents: f ? 'auto' : 'none',
              },
              t.slideShowns[o] ? n : null
            );
          })
        );
      },
    },
  ]);
  return b;
})(React.Component);

exports.default = b;
b.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  index: PropTypes.default.number,
  slideStyle: ReactNative.ViewPropTypes.style,
});
b.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  index: 0,
});
var O = ReactNative.StyleSheet.create({
  slide: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
