exports.default = function () {
  var t = React.useState(function () {
      var t = ReactNative.Dimensions.get('window'),
        n = t.height,
        o = undefined === n ? 0 : n,
        f = t.width,
        c = undefined === f ? 0 : f;
      return {
        height: o,
        width: c,
      };
    }),
    f = module12.default(t, 2),
    c = f[0],
    s = f[1];
  React.useEffect(function () {
    var t = function (t) {
      var n = t.window,
        o = n.width,
        u = n.height;
      s(function (t) {
        return o === t.width && u === t.height
          ? t
          : {
              width: o,
              height: u,
            };
      });
    };

    t({
      window: ReactNative.Dimensions.get('window'),
    });
    ReactNative.Dimensions.addEventListener('change', t);
    return function () {
      return ReactNative.Dimensions.removeEventListener('change', t);
    };
  }, []);
  return c;
};

var module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var h = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (h && (h.get || h.set)) Object.defineProperty(u, s, h);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}
