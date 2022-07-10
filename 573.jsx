var module11 = require('./11'),
  module12 = require('./12'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = y(n);
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
  ReactNative = require('react-native'),
  c = ['enabled', 'layout', 'style'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

var p = React.forwardRef(function (t, y) {
  var p = t.enabled,
    h = t.layout,
    s = t.style,
    b = module52.default(t, c),
    w = React.useState(false),
    O = module12.default(w, 2),
    j = O[0],
    P = O[1];
  React.useEffect(
    function () {
      if ('undefined' != typeof document && document.body) {
        var t = document.body.clientWidth,
          n = document.body.clientHeight;
        P(t === h.width && n === h.height);
      }
    },
    [h.height, h.width]
  );
  return <ReactNative.View />;
});
exports.default = p;
var v = ReactNative.StyleSheet.create({
  page: {
    minHeight: '100%',
  },
  card: {
    flex: 1,
    overflow: 'hidden',
  },
});
