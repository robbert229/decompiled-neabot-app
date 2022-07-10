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
    var l = O(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, o, c);
        else u[o] = t[o];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  b = ['style', 'title', 'titleStyle', 'activeTitleStyle', 'badge'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (O = function (t) {
    return t ? l : n;
  })(t);
}

function T() {
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

var h = (function (t) {
  module35.default(w, t);

  var PropTypes = w,
    O = T(),
    h = function () {
      var t,
        n = module34.default(PropTypes);

      if (O) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    module24.default(this, w);
    return h.apply(this, arguments);
  }

  module25.default(w, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          module24 = t.style,
          f = module52.default(t, b);
        module24 = [
          {
            flexGrow: 1,
          },
        ].concat(module24);
        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: module24,
            },
            f
          )
        );
      },
    },
  ]);
  return w;
})(React.Component);

exports.default = h;
h.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]).isRequired,
  titleStyle: ReactNative.Text.propTypes.style,
  activeTitleStyle: ReactNative.Text.propTypes.style,
  badge: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]),
});
